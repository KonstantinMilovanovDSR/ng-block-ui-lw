import { Directive, Input } from '@angular/core';
import { BlockUIContentComponent } from '../components/block-ui-content/block-ui-content.component';
import { BlockUIDefaultName } from '../constants/block-ui-default-name.constant';
import * as i0 from "@angular/core";
import * as i1 from "../services/block-ui.service";
import * as i2 from "../services/block-ui-instance.service";
export class BlockUIDirective {
    constructor(blockUIService, blockUIInstanceService, viewRef, templateRef, renderer, componentFactoryResolver) {
        this.blockUIService = blockUIService;
        this.blockUIInstanceService = blockUIInstanceService;
        this.viewRef = viewRef;
        this.templateRef = templateRef;
        this.renderer = renderer;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    set blockUI(name) { this.blockTarget = name; }
    ;
    set blockUIMessage(message) { this.message = message; }
    ;
    set blockUITemplate(template) { this.template = template; }
    ;
    set blockUIDelayStart(delayStart) {
        this.delayStart = delayStart ? Number(delayStart) : null;
    }
    ;
    set blockUIDelayStop(delayStop) {
        this.delayStop = delayStop ? Number(delayStop) : null;
    }
    ;
    ngOnInit() {
        try {
            this.viewRef.createEmbeddedView(this.templateRef);
            const parentElement = this.getParentElement();
            if (parentElement && !this.isComponentInTemplate(parentElement)) {
                this.renderer.addClass(parentElement, 'block-ui__element');
                this.blockUIComponentRef = this.createComponent();
                let blockUIContent = this.findContentNode(this.viewRef.element.nativeElement);
                if (blockUIContent) {
                    const settings = this.blockUIInstanceService.getSettings();
                    parentElement.appendChild(blockUIContent);
                    this.blockUIComponentRef.instance.className = 'block-ui-wrapper--element';
                    this.blockUIComponentRef.instance.name = this.blockTarget || BlockUIDefaultName;
                    if (this.message)
                        this.blockUIComponentRef.instance.defaultMessage = this.message;
                    if (this.delayStart)
                        this.blockUIComponentRef.instance.delayStart = this.delayStart;
                    if (this.delayStop)
                        this.blockUIComponentRef.instance.delayStop = this.delayStop;
                    if (this.template || settings.template)
                        this.blockUIComponentRef.instance.templateCmp = this.template || settings.template;
                }
            }
        }
        catch (error) {
            console.error('ng-block-ui:', error);
        }
    }
    isComponentInTemplate(element) {
        // Needed because of https://github.com/microsoft/TypeScript/issues/26235
        const targetElement = element || {};
        let { children } = targetElement;
        children = Array.from(children || []).reverse();
        return children.some((el) => el && el.localName === 'block-ui');
    }
    getParentElement() {
        const embeddedView = this.viewRef.get(0);
        return embeddedView.rootNodes[0];
    }
    // Needed for IE (#17)
    findContentNode(element) {
        const nextSibling = element.nextSibling || {};
        const previousSibling = element.previousSibling || {};
        return [
            nextSibling,
            nextSibling.nextSibling,
            previousSibling,
            previousSibling.previousSibling
        ].find((e) => e && e.localName === 'block-ui-content');
    }
    createComponent() {
        const resolvedBlockUIComponent = this.componentFactoryResolver.resolveComponentFactory(BlockUIContentComponent);
        return this.viewRef.createComponent(resolvedBlockUIComponent);
    }
    ngOnDestroy() {
        if (this.blockTarget) {
            this.blockUIService.reset(this.blockTarget);
        }
    }
}
BlockUIDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIDirective, deps: [{ token: i1.BlockUIService }, { token: i2.BlockUIInstanceService }, { token: i0.ViewContainerRef }, { token: i0.TemplateRef }, { token: i0.Renderer2 }, { token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Directive });
BlockUIDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: BlockUIDirective, selector: "[blockUI]", inputs: { blockUI: "blockUI", blockUIMessage: "blockUIMessage", blockUITemplate: "blockUITemplate", blockUIDelayStart: "blockUIDelayStart", blockUIDelayStop: "blockUIDelayStop" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[blockUI]' }]
        }], ctorParameters: function () { return [{ type: i1.BlockUIService }, { type: i2.BlockUIInstanceService }, { type: i0.ViewContainerRef }, { type: i0.TemplateRef }, { type: i0.Renderer2 }, { type: i0.ComponentFactoryResolver }]; }, propDecorators: { blockUI: [{
                type: Input
            }], blockUIMessage: [{
                type: Input
            }], blockUITemplate: [{
                type: Input
            }], blockUIDelayStart: [{
                type: Input
            }], blockUIDelayStop: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2RpcmVjdGl2ZXMvYmxvY2stdWkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQVNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBRXBHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBSWpGLE1BQU0sT0FBTyxnQkFBZ0I7SUF1QjNCLFlBQ1UsY0FBOEIsRUFDOUIsc0JBQThDLEVBQzlDLE9BQXlCLEVBQ3pCLFdBQTZCLEVBQzdCLFFBQW1CLEVBQ25CLHdCQUFrRDtRQUxsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3hELENBQUM7SUF0QkwsSUFDSSxPQUFPLENBQUMsSUFBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDcEQsSUFDSSxjQUFjLENBQUMsT0FBWSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDN0QsSUFDSSxlQUFlLENBQUMsUUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDakUsSUFDSSxpQkFBaUIsQ0FBQyxVQUFlO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRCxDQUFDO0lBQUEsQ0FBQztJQUNGLElBQ0ksZ0JBQWdCLENBQUMsU0FBYztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDeEQsQ0FBQztJQUFBLENBQUM7SUFXRixRQUFRO1FBQ04sSUFBSTtZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRTlDLElBQUksYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFOUUsSUFBSSxjQUFjLEVBQUU7b0JBQ2xCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFFM0QsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLENBQUM7b0JBQzFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksa0JBQWtCLENBQUM7b0JBQ2hGLElBQUksSUFBSSxDQUFDLE9BQU87d0JBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDbEYsSUFBSSxJQUFJLENBQUMsVUFBVTt3QkFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNwRixJQUFJLElBQUksQ0FBQyxTQUFTO3dCQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2pGLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUTt3QkFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUN0RjthQUNGO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVPLHFCQUFxQixDQUFDLE9BQVk7UUFDeEMseUVBQXlFO1FBQ3pFLE1BQU0sYUFBYSxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDcEMsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLGFBQWEsQ0FBQztRQUNqQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBeUIsQ0FBQztRQUVqRSxPQUFPLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkMsQ0FBQztJQUVELHNCQUFzQjtJQUNkLGVBQWUsQ0FBQyxPQUFZO1FBQ2xDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBQzlDLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBRXRELE9BQU87WUFDTCxXQUFXO1lBQ1gsV0FBVyxDQUFDLFdBQVc7WUFDdkIsZUFBZTtZQUNmLGVBQWUsQ0FBQyxlQUFlO1NBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyxlQUFlO1FBQ3JCLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDaEgsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7OzZHQWpHVSxnQkFBZ0I7aUdBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtrUUFVOUIsT0FBTztzQkFEVixLQUFLO2dCQUdGLGNBQWM7c0JBRGpCLEtBQUs7Z0JBR0YsZUFBZTtzQkFEbEIsS0FBSztnQkFHRixpQkFBaUI7c0JBRHBCLEtBQUs7Z0JBS0YsZ0JBQWdCO3NCQURuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBDb21wb25lbnRSZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIEVtYmVkZGVkVmlld1JlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCbG9ja1VJQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmxvY2stdWktY29udGVudC9ibG9jay11aS1jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJsb2NrVUlJbnN0YW5jZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ibG9jay11aS1pbnN0YW5jZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmxvY2tVSURlZmF1bHROYW1lIH0gZnJvbSAnLi4vY29uc3RhbnRzL2Jsb2NrLXVpLWRlZmF1bHQtbmFtZS5jb25zdGFudCc7XHJcbmltcG9ydCB7IEJsb2NrVUlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYmxvY2stdWkuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbYmxvY2tVSV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1VJRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgYmxvY2tVSUNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEJsb2NrVUlDb250ZW50Q29tcG9uZW50PjtcclxuICBibG9ja1RhcmdldDogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IGFueTtcclxuICB0ZW1wbGF0ZTogYW55O1xyXG4gIGRlbGF5U3RhcnQ6IGFueTtcclxuICBkZWxheVN0b3A6IGFueTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYmxvY2tVSShuYW1lOiBhbnkpIHsgdGhpcy5ibG9ja1RhcmdldCA9IG5hbWU7IH07XHJcbiAgQElucHV0KClcclxuICBzZXQgYmxvY2tVSU1lc3NhZ2UobWVzc2FnZTogYW55KSB7IHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7IH07XHJcbiAgQElucHV0KClcclxuICBzZXQgYmxvY2tVSVRlbXBsYXRlKHRlbXBsYXRlOiBhbnkpIHsgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlOyB9O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJsb2NrVUlEZWxheVN0YXJ0KGRlbGF5U3RhcnQ6IGFueSkge1xyXG4gICAgdGhpcy5kZWxheVN0YXJ0ID0gZGVsYXlTdGFydCA/IE51bWJlcihkZWxheVN0YXJ0KSA6IG51bGw7XHJcbiAgfTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBibG9ja1VJRGVsYXlTdG9wKGRlbGF5U3RvcDogYW55KSB7XHJcbiAgICB0aGlzLmRlbGF5U3RvcCA9IGRlbGF5U3RvcCA/IE51bWJlcihkZWxheVN0b3ApIDogbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYmxvY2tVSVNlcnZpY2U6IEJsb2NrVUlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBibG9ja1VJSW5zdGFuY2VTZXJ2aWNlOiBCbG9ja1VJSW5zdGFuY2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMudmlld1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XHJcbiAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmdldFBhcmVudEVsZW1lbnQoKTtcclxuXHJcbiAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmICF0aGlzLmlzQ29tcG9uZW50SW5UZW1wbGF0ZShwYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocGFyZW50RWxlbWVudCwgJ2Jsb2NrLXVpX19lbGVtZW50Jyk7XHJcbiAgICAgICAgdGhpcy5ibG9ja1VJQ29tcG9uZW50UmVmID0gdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICAgICAgICBsZXQgYmxvY2tVSUNvbnRlbnQgPSB0aGlzLmZpbmRDb250ZW50Tm9kZSh0aGlzLnZpZXdSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGJsb2NrVUlDb250ZW50KSB7XHJcbiAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuYmxvY2tVSUluc3RhbmNlU2VydmljZS5nZXRTZXR0aW5ncygpO1xyXG5cclxuICAgICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYmxvY2tVSUNvbnRlbnQpO1xyXG4gICAgICAgICAgdGhpcy5ibG9ja1VJQ29tcG9uZW50UmVmLmluc3RhbmNlLmNsYXNzTmFtZSA9ICdibG9jay11aS13cmFwcGVyLS1lbGVtZW50JztcclxuICAgICAgICAgIHRoaXMuYmxvY2tVSUNvbXBvbmVudFJlZi5pbnN0YW5jZS5uYW1lID0gdGhpcy5ibG9ja1RhcmdldCB8fCBCbG9ja1VJRGVmYXVsdE5hbWU7XHJcbiAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlKSB0aGlzLmJsb2NrVUlDb21wb25lbnRSZWYuaW5zdGFuY2UuZGVmYXVsdE1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5kZWxheVN0YXJ0KSB0aGlzLmJsb2NrVUlDb21wb25lbnRSZWYuaW5zdGFuY2UuZGVsYXlTdGFydCA9IHRoaXMuZGVsYXlTdGFydDtcclxuICAgICAgICAgIGlmICh0aGlzLmRlbGF5U3RvcCkgdGhpcy5ibG9ja1VJQ29tcG9uZW50UmVmLmluc3RhbmNlLmRlbGF5U3RvcCA9IHRoaXMuZGVsYXlTdG9wO1xyXG4gICAgICAgICAgaWYgKHRoaXMudGVtcGxhdGUgfHwgc2V0dGluZ3MudGVtcGxhdGUpXHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tVSUNvbXBvbmVudFJlZi5pbnN0YW5jZS50ZW1wbGF0ZUNtcCA9IHRoaXMudGVtcGxhdGUgfHwgc2V0dGluZ3MudGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCduZy1ibG9jay11aTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzQ29tcG9uZW50SW5UZW1wbGF0ZShlbGVtZW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgIC8vIE5lZWRlZCBiZWNhdXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjYyMzVcclxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbGVtZW50IHx8IHt9O1xyXG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRhcmdldEVsZW1lbnQ7XHJcbiAgICBjaGlsZHJlbiA9IEFycmF5LmZyb20oY2hpbGRyZW4gfHwgW10pLnJldmVyc2UoKTtcclxuICAgIHJldHVybiBjaGlsZHJlbi5zb21lKChlbDogYW55KSA9PiBlbCAmJiBlbC5sb2NhbE5hbWUgPT09ICdibG9jay11aScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXJlbnRFbGVtZW50KCk6IEVsZW1lbnQge1xyXG4gICAgY29uc3QgZW1iZWRkZWRWaWV3ID0gdGhpcy52aWV3UmVmLmdldCgwKSBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PjtcclxuXHJcbiAgICByZXR1cm4gZW1iZWRkZWRWaWV3LnJvb3ROb2Rlc1swXTtcclxuXHJcbiAgfVxyXG5cclxuICAvLyBOZWVkZWQgZm9yIElFICgjMTcpXHJcbiAgcHJpdmF0ZSBmaW5kQ29udGVudE5vZGUoZWxlbWVudDogYW55KSB7XHJcbiAgICBjb25zdCBuZXh0U2libGluZyA9IGVsZW1lbnQubmV4dFNpYmxpbmcgfHwge307XHJcbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBlbGVtZW50LnByZXZpb3VzU2libGluZyB8fCB7fTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBuZXh0U2libGluZyxcclxuICAgICAgbmV4dFNpYmxpbmcubmV4dFNpYmxpbmcsXHJcbiAgICAgIHByZXZpb3VzU2libGluZyxcclxuICAgICAgcHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZ1xyXG4gICAgXS5maW5kKChlKSA9PiBlICYmIGUubG9jYWxOYW1lID09PSAnYmxvY2stdWktY29udGVudCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCByZXNvbHZlZEJsb2NrVUlDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShCbG9ja1VJQ29udGVudENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gdGhpcy52aWV3UmVmLmNyZWF0ZUNvbXBvbmVudChyZXNvbHZlZEJsb2NrVUlDb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5ibG9ja1RhcmdldCkge1xyXG4gICAgICB0aGlzLmJsb2NrVUlTZXJ2aWNlLnJlc2V0KHRoaXMuYmxvY2tUYXJnZXQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=