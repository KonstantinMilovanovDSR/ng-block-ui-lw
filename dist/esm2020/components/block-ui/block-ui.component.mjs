import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BlockUIDefaultName } from '../../constants/block-ui-default-name.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../services/block-ui-instance.service";
import * as i2 from "../block-ui-content/block-ui-content.component";
export class BlockUIComponent {
    constructor(blockUI) {
        this.blockUI = blockUI;
    }
    ngOnInit() {
        this.name = this.name || BlockUIDefaultName;
        this.template = this.template || this.blockUI.blockUISettings.template;
    }
}
BlockUIComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIComponent, deps: [{ token: i1.BlockUIInstanceService }], target: i0.ɵɵFactoryTarget.Component });
BlockUIComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: BlockUIComponent, selector: "block-ui", inputs: { name: "name", message: "message", delayStart: "delayStart", delayStop: "delayStop", template: "template" }, ngImport: i0, template: `
    <ng-content></ng-content>
    <block-ui-content
      [name]="name"
      [message]="message"
      [template]="template"
      [delayStart]="delayStart"
      [delayStop]="delayStop"
    >
    </block-ui-content>
  `, isInline: true, dependencies: [{ kind: "component", type: i2.BlockUIContentComponent, selector: "block-ui-content", inputs: ["name", "delayStart", "delayStop", "message", "template"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'block-ui',
                    template: `
    <ng-content></ng-content>
    <block-ui-content
      [name]="name"
      [message]="message"
      [template]="template"
      [delayStart]="delayStart"
      [delayStop]="delayStop"
    >
    </block-ui-content>
  `,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.BlockUIInstanceService }]; }, propDecorators: { name: [{
                type: Input
            }], message: [{
                type: Input
            }], delayStart: [{
                type: Input
            }], delayStop: [{
                type: Input
            }], template: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2NvbXBvbmVudHMvYmxvY2stdWkvYmxvY2stdWkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUdsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7OztBQWlCcEYsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQixZQUNVLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO0lBQ3JDLENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLGtCQUFrQixDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDekUsQ0FBQzs7NkdBZFUsZ0JBQWdCO2lHQUFoQixnQkFBZ0Isc0tBYmpCOzs7Ozs7Ozs7O0dBVVQ7MkZBR1UsZ0JBQWdCO2tCQWY1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7NkdBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIE9uSW5pdCxcclxuICBDb21wb25lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmxvY2tVSUluc3RhbmNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Jsb2NrLXVpLWluc3RhbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCbG9ja1VJRGVmYXVsdE5hbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvYmxvY2stdWktZGVmYXVsdC1uYW1lLmNvbnN0YW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYmxvY2stdWknLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8YmxvY2stdWktY29udGVudFxyXG4gICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgW21lc3NhZ2VdPVwibWVzc2FnZVwiXHJcbiAgICAgIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZVwiXHJcbiAgICAgIFtkZWxheVN0YXJ0XT1cImRlbGF5U3RhcnRcIlxyXG4gICAgICBbZGVsYXlTdG9wXT1cImRlbGF5U3RvcFwiXHJcbiAgICA+XHJcbiAgICA8L2Jsb2NrLXVpLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1VJQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWVzc2FnZTogYW55O1xyXG4gIEBJbnB1dCgpIGRlbGF5U3RhcnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBkZWxheVN0b3A6IG51bWJlcjtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYmxvY2tVSTogQmxvY2tVSUluc3RhbmNlU2VydmljZSxcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCBCbG9ja1VJRGVmYXVsdE5hbWU7XHJcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSB8fCB0aGlzLmJsb2NrVUkuYmxvY2tVSVNldHRpbmdzLnRlbXBsYXRlO1xyXG4gIH1cclxufVxyXG4iXX0=