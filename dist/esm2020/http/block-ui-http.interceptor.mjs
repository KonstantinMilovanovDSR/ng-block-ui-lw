import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BLOCKUI_DEFAULT } from 'ng-block-ui';
import * as i0 from "@angular/core";
import * as i1 from "ng-block-ui";
import * as i2 from "./block-ui-http-settings.service";
export class BlockUIInterceptor {
    constructor(blockUIService, blockUIHttpSettings) {
        this.blockUIService = blockUIService;
        this.blockUIHttpSettings = blockUIHttpSettings;
        this.activeHttpRequests = 0;
    }
    intercept(request, next) {
        let active = false;
        if (this.shouldBlock(request)) {
            this.blockUIService.start(BLOCKUI_DEFAULT);
        }
        return next.handle(request)
            .pipe(finalize(() => {
            if (this.shouldBlock(request)) {
                const { blockAllRequestsInProgress } = this.blockUIHttpSettings.settings;
                const method = blockAllRequestsInProgress ? 'stop' : 'reset';
                this.blockUIService[method](BLOCKUI_DEFAULT);
            }
        }));
    }
    shouldBlock(request) {
        const { method, urlWithParams } = request;
        const { settings } = this.blockUIHttpSettings;
        const requestFilters = settings.requestFilters || [];
        return !requestFilters.some((f) => {
            if (f && f.method && f.url) {
                return f.method.toUpperCase() === method && f.url.test(urlWithParams);
            }
            else if (typeof f === 'function') {
                return f(request);
            }
            return f.test(urlWithParams);
        });
    }
}
BlockUIInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIInterceptor, deps: [{ token: i1.BlockUIService }, { token: i2.BlockUIHttpSettings }], target: i0.ɵɵFactoryTarget.Injectable });
BlockUIInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.BlockUIService }, { type: i2.BlockUIHttpSettings }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWktaHR0cC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2h0dHAvYmxvY2stdWktaHR0cC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQWtCLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUk5RCxNQUFNLE9BQU8sa0JBQWtCO0lBRzdCLFlBQ1UsY0FBOEIsRUFDOUIsbUJBQXdDO1FBRHhDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRWhELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ3BELElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztRQUU1QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3hCLElBQUksQ0FDSCxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM3QixNQUFNLEVBQUUsMEJBQTBCLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDO2dCQUN6RSxNQUFNLE1BQU0sR0FBVywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDOUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUF5QjtRQUNuQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUMxQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQzlDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO1FBRXJELE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUMxQixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3ZFO2lCQUFNLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUNsQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQjtZQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OytHQTNDVSxrQkFBa0I7bUhBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBFdmVudCxcclxuICBIdHRwSW50ZXJjZXB0b3JcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEJsb2NrVUlTZXJ2aWNlLCBCTE9DS1VJX0RFRkFVTFQgfSBmcm9tICduZy1ibG9jay11aSc7XHJcbmltcG9ydCB7IEJsb2NrVUlIdHRwU2V0dGluZ3MgfSBmcm9tICcuL2Jsb2NrLXVpLWh0dHAtc2V0dGluZ3Muc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1VJSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIHByaXZhdGUgYWN0aXZlSHR0cFJlcXVlc3RzOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBibG9ja1VJU2VydmljZTogQmxvY2tVSVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGJsb2NrVUlIdHRwU2V0dGluZ3M6IEJsb2NrVUlIdHRwU2V0dGluZ3NcclxuICApIHtcclxuICAgIHRoaXMuYWN0aXZlSHR0cFJlcXVlc3RzID0gMDtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGxldCBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG91bGRCbG9jayhyZXF1ZXN0KSkge1xyXG4gICAgICB0aGlzLmJsb2NrVUlTZXJ2aWNlLnN0YXJ0KEJMT0NLVUlfREVGQVVMVCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLnNob3VsZEJsb2NrKHJlcXVlc3QpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgYmxvY2tBbGxSZXF1ZXN0c0luUHJvZ3Jlc3MgfSA9IHRoaXMuYmxvY2tVSUh0dHBTZXR0aW5ncy5zZXR0aW5ncztcclxuICAgICAgICAgICAgY29uc3QgbWV0aG9kOiBzdHJpbmcgPSBibG9ja0FsbFJlcXVlc3RzSW5Qcm9ncmVzcyA/ICdzdG9wJyA6ICdyZXNldCc7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tVSVNlcnZpY2VbbWV0aG9kXShCTE9DS1VJX0RFRkFVTFQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBzaG91bGRCbG9jayhyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB7IG1ldGhvZCwgdXJsV2l0aFBhcmFtcyB9ID0gcmVxdWVzdDtcclxuICAgIGNvbnN0IHsgc2V0dGluZ3MgfSA9IHRoaXMuYmxvY2tVSUh0dHBTZXR0aW5ncztcclxuICAgIGNvbnN0IHJlcXVlc3RGaWx0ZXJzID0gc2V0dGluZ3MucmVxdWVzdEZpbHRlcnMgfHwgW107XHJcblxyXG4gICAgcmV0dXJuICFyZXF1ZXN0RmlsdGVycy5zb21lKChmOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGYgJiYgZi5tZXRob2QgJiYgZi51cmwpIHtcclxuICAgICAgICByZXR1cm4gZi5tZXRob2QudG9VcHBlckNhc2UoKSA9PT0gbWV0aG9kICYmIGYudXJsLnRlc3QodXJsV2l0aFBhcmFtcyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gZihyZXF1ZXN0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGYudGVzdCh1cmxXaXRoUGFyYW1zKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=