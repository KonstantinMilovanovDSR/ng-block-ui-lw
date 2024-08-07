import { Injectable } from '@angular/core';
import { BLOCKUI_DEFAULT } from 'ng-block-ui';
import * as i0 from "@angular/core";
import * as i1 from "ng-block-ui";
export class BlockUIPreventNavigation {
    constructor(blockUIService) {
        this.blockUIService = blockUIService;
    }
    canActivate() {
        return !this.blockUIService.isActive(BLOCKUI_DEFAULT);
    }
    canActivateChild() {
        return !this.blockUIService.isActive(BLOCKUI_DEFAULT);
    }
}
BlockUIPreventNavigation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIPreventNavigation, deps: [{ token: i1.BlockUIService }], target: i0.ɵɵFactoryTarget.Injectable });
BlockUIPreventNavigation.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIPreventNavigation });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIPreventNavigation, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.BlockUIService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWktcHJldmVudC1uYXZpZ2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yb3V0ZXIvYmxvY2stdWktcHJldmVudC1uYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQWtCLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBRzlELE1BQU0sT0FBTyx3QkFBd0I7SUFFbkMsWUFDVSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQztJQUVKLFdBQVc7UUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4RCxDQUFDOztxSEFaVSx3QkFBd0I7eUhBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQURwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBCbG9ja1VJU2VydmljZSwgQkxPQ0tVSV9ERUZBVUxUIH0gZnJvbSAnbmctYmxvY2stdWknO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmxvY2tVSVByZXZlbnROYXZpZ2F0aW9uIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYmxvY2tVSVNlcnZpY2U6IEJsb2NrVUlTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgIHJldHVybiAhdGhpcy5ibG9ja1VJU2VydmljZS5pc0FjdGl2ZShCTE9DS1VJX0RFRkFVTFQpO1xyXG4gIH1cclxuXHJcbiAgY2FuQWN0aXZhdGVDaGlsZCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5ibG9ja1VJU2VydmljZS5pc0FjdGl2ZShCTE9DS1VJX0RFRkFVTFQpO1xyXG4gIH1cclxufVxyXG4iXX0=