import { Component, ViewEncapsulation, Input, ViewChild, ComponentRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { BlockUIActions } from '../../constants/block-ui-actions.constant';
import { BlockUIDefaultName } from '../../constants/block-ui-default-name.constant';
import { styles } from './block-ui-content.component.style';
import { template } from './block-ui-content.component.template';
import * as i0 from "@angular/core";
import * as i1 from "../../services/block-ui-instance.service";
import * as i2 from "@angular/common";
export class BlockUIContentComponent {
    constructor(blockUI, resolver, changeDetectionRef) {
        this.blockUI = blockUI;
        this.resolver = resolver;
        this.changeDetectionRef = changeDetectionRef;
        this.name = BlockUIDefaultName;
        this.defaultBlockState = {
            startTimeouts: [],
            stopTimeouts: [],
            updateTimeouts: [],
            blockCount: 0,
            startCallCount: 0,
            stopCallCount: 0
        };
        this.state = { ...this.defaultBlockState };
    }
    ngOnInit() {
        this.settings = this.blockUI.getSettings();
        this.blockUISubscription = this.subscribeToBlockUI(this.blockUI.observe());
    }
    ngAfterViewInit() {
        try {
            if (!this.templateCmp) {
                return false;
            }
            if (this.templateCmp instanceof TemplateRef) {
                this.templateOutlet.createEmbeddedView(this.templateCmp);
            }
            else {
                const templateComp = this.resolver.resolveComponentFactory(this.templateCmp);
                this.templateCompRef = this.templateOutlet.createComponent(templateComp);
                this.updateBlockTemplate(this.message);
            }
        }
        catch (error) {
            console.error('ng-block-ui:', error);
        }
    }
    ngAfterViewChecked() {
        this.detectChanges();
    }
    subscribeToBlockUI(blockUI$) {
        return blockUI$.subscribe(event => this.onDispatchedEvent(event));
    }
    onDispatchedEvent(event) {
        switch (event.action) {
            case BlockUIActions.START:
                this.onStart(event);
                break;
            case BlockUIActions.STOP:
                this.onStop(event);
                break;
            case BlockUIActions.UPDATE:
                this.onUpdate(event);
                break;
            case BlockUIActions.RESET:
                this.onReset(event);
                break;
            case BlockUIActions.RESET_GLOBAL:
                this.resetState();
                break;
            case BlockUIActions.UNSUBSCRIBE:
                this.onStop(event);
                this.onUnsubscribe(event.name);
                break;
        }
    }
    onStart({ name, message }) {
        if (name === this.name) {
            const delay = this.delayStart ?? this.settings.delayStart ?? 0;
            this.state.startCallCount += 1;
            const startTimeout = setTimeout(() => {
                this.state.blockCount += 1;
                this.showBlock(message);
                this.updateInstanceBlockCount();
            }, delay);
            this.state.startTimeouts.push(startTimeout);
        }
    }
    onStop({ name }) {
        if (name === this.name) {
            const stopCount = this.state.stopCallCount + 1;
            if (this.state.startCallCount - stopCount >= 0) {
                const delay = this.delayStop ?? this.settings.delayStop ?? 0;
                this.state.stopCallCount = stopCount;
                const stopTimeout = setTimeout(() => {
                    this.state.blockCount -= 1;
                    this.updateInstanceBlockCount();
                    this.detectChanges();
                }, delay);
                this.state.stopTimeouts.push(stopTimeout);
            }
        }
    }
    onUpdate({ name, message }) {
        if (name === this.name) {
            const delay = this.delayStart || this.settings.delayStart || 0;
            clearTimeout(this.state.updateTimeouts[0]);
            const updateTimeout = setTimeout(() => {
                this.updateMessage(message);
            }, delay);
            this.state.updateTimeouts.push(updateTimeout);
        }
    }
    onReset({ name }) {
        if (name === this.name) {
            this.resetState();
        }
    }
    updateMessage(message) {
        this.showBlock(message);
    }
    showBlock(message) {
        this.message = message || this.defaultMessage || this.settings.message;
        this.updateBlockTemplate(this.message);
        this.detectChanges();
    }
    updateBlockTemplate(msg) {
        if (this.templateCompRef && this.templateCompRef instanceof ComponentRef) {
            this.templateCompRef.instance.message = msg;
        }
    }
    resetState() {
        [
            ...this.state.startTimeouts,
            ...this.state.stopTimeouts,
            ...this.state.updateTimeouts
        ].forEach(clearTimeout);
        this.state = { ...this.defaultBlockState };
        this.updateInstanceBlockCount();
        this.detectChanges();
    }
    onUnsubscribe(name) {
        if (this.blockUISubscription && name === this.name) {
            this.blockUISubscription.unsubscribe();
        }
    }
    updateInstanceBlockCount() {
        if (this.blockUI.blockUIInstances[this.name]) {
            const { blockCount } = this.state;
            this.blockUI.blockUIInstances[this.name].blockCount = blockCount;
        }
    }
    detectChanges() {
        if (!this.changeDetectionRef['destroyed']) {
            this.changeDetectionRef.detectChanges();
        }
    }
    ngOnDestroy() {
        this.resetState();
        this.onUnsubscribe(this.name);
        this.blockUI.clearInstance(this.name);
    }
}
BlockUIContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIContentComponent, deps: [{ token: i1.BlockUIInstanceService }, { token: i0.ComponentFactoryResolver }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
BlockUIContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: BlockUIContentComponent, selector: "block-ui-content", inputs: { name: "name", delayStart: "delayStart", delayStop: "delayStop", defaultMessage: ["message", "defaultMessage"], templateCmp: ["template", "templateCmp"] }, viewQueries: [{ propertyName: "templateOutlet", first: true, predicate: ["templateOutlet"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "\n<div class=\"block-ui-wrapper {{name}} {{className}}\" [ngClass]=\"{ 'active': state.blockCount > 0 }\">\n  <div class=\"block-ui-spinner\" *ngIf=\"!templateCmp\">\n    <div class=\"loader\"></div>\n    <div *ngIf=\"message || defaultMessage\" class=\"message\">\n      {{ message || defaultMessage }}\n    </div>\n  </div>\n  <ng-template *ngIf=\"templateCmp\" #templateOutlet></ng-template>\n</div>\n", isInline: true, styles: [".block-ui-wrapper{display:none;position:fixed;height:100%;width:100%;top:0;left:0;background:rgba(0,0,0,.7);z-index:30000;cursor:wait}.block-ui-wrapper.block-ui-wrapper--element{position:absolute}.block-ui-wrapper.active{display:block}.block-ui-wrapper.block-ui-main{position:fixed}.block-ui-spinner,.block-ui-template{position:absolute;top:40%;margin:0 auto;left:0;right:0;transform:translateY(-50%)}.block-ui-spinner>.message{font-size:1.3em;text-align:center;color:#fff}.block-ui__element{position:relative}.loader,.loader:after{border-radius:50%;width:10em;height:10em}.loader{margin:7px auto;font-size:5px;position:relative;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #ffffff;transform:translateZ(0);animation:load8 1.1s infinite linear}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'block-ui-content', template: template, encapsulation: ViewEncapsulation.None, styles: [".block-ui-wrapper{display:none;position:fixed;height:100%;width:100%;top:0;left:0;background:rgba(0,0,0,.7);z-index:30000;cursor:wait}.block-ui-wrapper.block-ui-wrapper--element{position:absolute}.block-ui-wrapper.active{display:block}.block-ui-wrapper.block-ui-main{position:fixed}.block-ui-spinner,.block-ui-template{position:absolute;top:40%;margin:0 auto;left:0;right:0;transform:translateY(-50%)}.block-ui-spinner>.message{font-size:1.3em;text-align:center;color:#fff}.block-ui__element{position:relative}.loader,.loader:after{border-radius:50%;width:10em;height:10em}.loader{margin:7px auto;font-size:5px;position:relative;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #ffffff;transform:translateZ(0);animation:load8 1.1s infinite linear}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.BlockUIInstanceService }, { type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { name: [{
                type: Input
            }], delayStart: [{
                type: Input
            }], delayStop: [{
                type: Input
            }], defaultMessage: [{
                type: Input,
                args: ['message']
            }], templateCmp: [{
                type: Input,
                args: ['template']
            }], templateOutlet: [{
                type: ViewChild,
                args: ['templateOutlet', { read: ViewContainerRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvY29tcG9uZW50cy9ibG9jay11aS1jb250ZW50L2Jsb2NrLXVpLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBS1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFFWCxnQkFBZ0IsRUFFakIsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7QUFrQmpFLE1BQU0sT0FBTyx1QkFBdUI7SUF5QmxDLFlBQ1UsT0FBK0IsRUFDL0IsUUFBa0MsRUFDbEMsa0JBQXFDO1FBRnJDLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUEzQnRDLFNBQUksR0FBVyxrQkFBa0IsQ0FBQztRQVEzQyxzQkFBaUIsR0FBZTtZQUM5QixhQUFhLEVBQUUsRUFBRTtZQUNqQixZQUFZLEVBQUUsRUFBRTtZQUNoQixjQUFjLEVBQUUsRUFBRTtZQUNsQixVQUFVLEVBQUUsQ0FBQztZQUNiLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLGFBQWEsRUFBRSxDQUFDO1NBQ2pCLENBQUM7UUFDRixVQUFLLEdBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBWTlDLENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJ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SUFBSTtvTEFHNUIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDWSxjQUFjO3NCQUEvQixLQUFLO3VCQUFDLFNBQVM7Z0JBQ0csV0FBVztzQkFBN0IsS0FBSzt1QkFBQyxVQUFVO2dCQUVqQixjQUFjO3NCQURiLFNBQVM7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIE9uRGVzdHJveSxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQmxvY2tVSUluc3RhbmNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Jsb2NrLXVpLWluc3RhbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCbG9ja1VJRXZlbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmxvY2stdWktZXZlbnQubW9kZWwnO1xyXG5pbXBvcnQgeyBCbG9ja1VJQWN0aW9ucyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9ibG9jay11aS1hY3Rpb25zLmNvbnN0YW50JztcclxuaW1wb3J0IHsgQmxvY2tVSURlZmF1bHROYW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2Jsb2NrLXVpLWRlZmF1bHQtbmFtZS5jb25zdGFudCc7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vYmxvY2stdWktY29udGVudC5jb21wb25lbnQuc3R5bGUnO1xyXG5pbXBvcnQgeyB0ZW1wbGF0ZSB9IGZyb20gJy4vYmxvY2stdWktY29udGVudC5jb21wb25lbnQudGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBCbG9ja1VJU2V0dGluZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmxvY2stdWktc2V0dGluZ3MubW9kZWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgQmxvY2tTdGF0ZSA9IHtcclxuICBzdGFydFRpbWVvdXRzOiBBcnJheTxhbnk+O1xyXG4gIHN0b3BUaW1lb3V0czogQXJyYXk8YW55PjtcclxuICB1cGRhdGVUaW1lb3V0czogQXJyYXk8YW55PjtcclxuICBibG9ja0NvdW50OiBudW1iZXI7XHJcbiAgc3RhcnRDYWxsQ291bnQ6IG51bWJlcjtcclxuICBzdG9wQ2FsbENvdW50OiBudW1iZXI7XHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jsb2NrLXVpLWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICBzdHlsZXM6IFtzdHlsZXNdLCAvLyBUT0RPOiBGaW5kIGhvdyB0byBidW5kbGUgc3R5bGVzIGZvciBucG1cclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1VJQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSBCbG9ja1VJRGVmYXVsdE5hbWU7XHJcbiAgQElucHV0KCkgZGVsYXlTdGFydDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRlbGF5U3RvcDogbnVtYmVyO1xyXG4gIEBJbnB1dCgnbWVzc2FnZScpIGRlZmF1bHRNZXNzYWdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCd0ZW1wbGF0ZScpIHRlbXBsYXRlQ21wOiBhbnk7XHJcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVPdXRsZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuICB0ZW1wbGF0ZU91dGxldDogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgZGVmYXVsdEJsb2NrU3RhdGU6IEJsb2NrU3RhdGUgPSB7XHJcbiAgICBzdGFydFRpbWVvdXRzOiBbXSxcclxuICAgIHN0b3BUaW1lb3V0czogW10sXHJcbiAgICB1cGRhdGVUaW1lb3V0czogW10sXHJcbiAgICBibG9ja0NvdW50OiAwLFxyXG4gICAgc3RhcnRDYWxsQ291bnQ6IDAsXHJcbiAgICBzdG9wQ2FsbENvdW50OiAwXHJcbiAgfTtcclxuICBzdGF0ZTogQmxvY2tTdGF0ZSA9IHsgLi4udGhpcy5kZWZhdWx0QmxvY2tTdGF0ZSB9O1xyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIHRlbXBsYXRlQ29tcFJlZjogQ29tcG9uZW50UmVmPHsgbWVzc2FnZT86IGFueSB9PiB8IFRlbXBsYXRlUmVmPHt9PjtcclxuICBtZXNzYWdlOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgYmxvY2tVSVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgc2V0dGluZ3M6IEJsb2NrVUlTZXR0aW5ncztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGJsb2NrVUk6IEJsb2NrVUlJbnN0YW5jZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLmJsb2NrVUkuZ2V0U2V0dGluZ3MoKTtcclxuICAgIHRoaXMuYmxvY2tVSVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlVG9CbG9ja1VJKHRoaXMuYmxvY2tVSS5vYnNlcnZlKCkpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF0aGlzLnRlbXBsYXRlQ21wKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy50ZW1wbGF0ZUNtcCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZU91dGxldC5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZUNtcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGVDb21wID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLnRlbXBsYXRlQ21wKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlQ29tcFJlZiA9IHRoaXMudGVtcGxhdGVPdXRsZXQuY3JlYXRlQ29tcG9uZW50KHRlbXBsYXRlQ29tcCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCbG9ja1RlbXBsYXRlKHRoaXMubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ25nLWJsb2NrLXVpOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0Jsb2NrVUkoYmxvY2tVSSQ6IE9ic2VydmFibGU8YW55Pik6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gYmxvY2tVSSQuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMub25EaXNwYXRjaGVkRXZlbnQoZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25EaXNwYXRjaGVkRXZlbnQoZXZlbnQ6IEJsb2NrVUlFdmVudCkge1xyXG4gICAgc3dpdGNoIChldmVudC5hY3Rpb24pIHtcclxuICAgICAgY2FzZSBCbG9ja1VJQWN0aW9ucy5TVEFSVDpcclxuICAgICAgICB0aGlzLm9uU3RhcnQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBCbG9ja1VJQWN0aW9ucy5TVE9QOlxyXG4gICAgICAgIHRoaXMub25TdG9wKGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQmxvY2tVSUFjdGlvbnMuVVBEQVRFOlxyXG4gICAgICAgIHRoaXMub25VcGRhdGUoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBCbG9ja1VJQWN0aW9ucy5SRVNFVDpcclxuICAgICAgICB0aGlzLm9uUmVzZXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBCbG9ja1VJQWN0aW9ucy5SRVNFVF9HTE9CQUw6XHJcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEJsb2NrVUlBY3Rpb25zLlVOU1VCU0NSSUJFOlxyXG4gICAgICAgIHRoaXMub25TdG9wKGV2ZW50KTtcclxuICAgICAgICB0aGlzLm9uVW5zdWJzY3JpYmUoZXZlbnQubmFtZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU3RhcnQoeyBuYW1lLCBtZXNzYWdlIH06IEJsb2NrVUlFdmVudCkge1xyXG4gICAgaWYgKG5hbWUgPT09IHRoaXMubmFtZSkge1xyXG4gICAgICBjb25zdCBkZWxheSA9IHRoaXMuZGVsYXlTdGFydCA/PyB0aGlzLnNldHRpbmdzLmRlbGF5U3RhcnQgPz8gMDtcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUuc3RhcnRDYWxsQ291bnQgKz0gMTtcclxuICAgICAgY29uc3Qgc3RhcnRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5ibG9ja0NvdW50ICs9IDE7XHJcbiAgICAgICAgdGhpcy5zaG93QmxvY2sobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnN0YW5jZUJsb2NrQ291bnQoKTtcclxuICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICB0aGlzLnN0YXRlLnN0YXJ0VGltZW91dHMucHVzaChzdGFydFRpbWVvdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblN0b3AoeyBuYW1lIH06IEJsb2NrVUlFdmVudCkge1xyXG4gICAgaWYgKG5hbWUgPT09IHRoaXMubmFtZSkge1xyXG4gICAgICBjb25zdCBzdG9wQ291bnQgPSB0aGlzLnN0YXRlLnN0b3BDYWxsQ291bnQgKyAxO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3RhdGUuc3RhcnRDYWxsQ291bnQgLSBzdG9wQ291bnQgPj0gMCkge1xyXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5kZWxheVN0b3AgPz8gdGhpcy5zZXR0aW5ncy5kZWxheVN0b3AgPz8gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zdG9wQ2FsbENvdW50ID0gc3RvcENvdW50O1xyXG4gICAgICAgIGNvbnN0IHN0b3BUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmJsb2NrQ291bnQgLT0gMTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlSW5zdGFuY2VCbG9ja0NvdW50KCk7XHJcbiAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zdG9wVGltZW91dHMucHVzaChzdG9wVGltZW91dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25VcGRhdGUoeyBuYW1lLCBtZXNzYWdlIH06IEJsb2NrVUlFdmVudCkge1xyXG4gICAgaWYgKG5hbWUgPT09IHRoaXMubmFtZSkge1xyXG4gICAgICBjb25zdCBkZWxheSA9IHRoaXMuZGVsYXlTdGFydCB8fCB0aGlzLnNldHRpbmdzLmRlbGF5U3RhcnQgfHwgMDtcclxuXHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnVwZGF0ZVRpbWVvdXRzWzBdKTtcclxuICAgICAgY29uc3QgdXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICB0aGlzLnN0YXRlLnVwZGF0ZVRpbWVvdXRzLnB1c2godXBkYXRlVGltZW91dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUmVzZXQoeyBuYW1lIH06IEJsb2NrVUlFdmVudCkge1xyXG4gICAgaWYgKG5hbWUgPT09IHRoaXMubmFtZSkge1xyXG4gICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2hvd0Jsb2NrKG1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93QmxvY2sobWVzc2FnZTogYW55KSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8IHRoaXMuZGVmYXVsdE1lc3NhZ2UgfHwgdGhpcy5zZXR0aW5ncy5tZXNzYWdlO1xyXG4gICAgdGhpcy51cGRhdGVCbG9ja1RlbXBsYXRlKHRoaXMubWVzc2FnZSk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQmxvY2tUZW1wbGF0ZShtc2c6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGVtcGxhdGVDb21wUmVmICYmIHRoaXMudGVtcGxhdGVDb21wUmVmIGluc3RhbmNlb2YgQ29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGVDb21wUmVmLmluc3RhbmNlLm1lc3NhZ2UgPSBtc2c7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0U3RhdGUoKSB7XHJcbiAgICBbXHJcbiAgICAgIC4uLnRoaXMuc3RhdGUuc3RhcnRUaW1lb3V0cyxcclxuICAgICAgLi4udGhpcy5zdGF0ZS5zdG9wVGltZW91dHMsXHJcbiAgICAgIC4uLnRoaXMuc3RhdGUudXBkYXRlVGltZW91dHNcclxuICAgIF0uZm9yRWFjaChjbGVhclRpbWVvdXQpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5kZWZhdWx0QmxvY2tTdGF0ZSB9O1xyXG4gICAgdGhpcy51cGRhdGVJbnN0YW5jZUJsb2NrQ291bnQoKTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblVuc3Vic2NyaWJlKG5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuYmxvY2tVSVN1YnNjcmlwdGlvbiAmJiBuYW1lID09PSB0aGlzLm5hbWUpIHtcclxuICAgICAgdGhpcy5ibG9ja1VJU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUluc3RhbmNlQmxvY2tDb3VudCgpIHtcclxuICAgIGlmICh0aGlzLmJsb2NrVUkuYmxvY2tVSUluc3RhbmNlc1t0aGlzLm5hbWVdKSB7XHJcbiAgICAgIGNvbnN0IHsgYmxvY2tDb3VudCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgdGhpcy5ibG9ja1VJLmJsb2NrVUlJbnN0YW5jZXNbdGhpcy5uYW1lXS5ibG9ja0NvdW50ID0gYmxvY2tDb3VudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGV0ZWN0Q2hhbmdlcygpIHtcclxuICAgIGlmICghdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWZbJ2Rlc3Ryb3llZCddKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZXNldFN0YXRlKCk7XHJcbiAgICB0aGlzLm9uVW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcclxuICAgIHRoaXMuYmxvY2tVSS5jbGVhckluc3RhbmNlKHRoaXMubmFtZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==