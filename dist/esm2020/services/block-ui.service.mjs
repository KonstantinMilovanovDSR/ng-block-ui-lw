import { Injectable } from '@angular/core';
import { BlockUIActions } from '../constants/block-ui-actions.constant';
import * as i0 from "@angular/core";
import * as i1 from "./block-ui-instance.service";
export class BlockUIService {
    constructor(blockUIInstance) {
        this.blockUIInstance = blockUIInstance;
        this.globalDispatch = this.blockUIInstance.decorate();
    }
    /**
    * Starts blocking for given BlockUI instance or instances
    */
    start(target, message) {
        this.dispatch(target, BlockUIActions.START, message);
    }
    /**
    * Stops blocking for given BlockUI instance or instances
    */
    stop(target) {
        this.dispatch(target, BlockUIActions.STOP);
    }
    /**
    * Reset blocking for given BlockUI instance or instances
    */
    reset(target) {
        this.dispatch(target, BlockUIActions.RESET);
    }
    /**
    * Reset blocking for all BlockUI instances
    */
    resetGlobal() {
        this.globalDispatch.resetGlobal();
    }
    /**
    * Updates message for given BlockUI instance or instances
    */
    update(target, message) {
        this.dispatch(target, BlockUIActions.UPDATE, message);
    }
    /**
    * Unsubscribes for given BlockUI instance or instances
    */
    unsubscribe(target) {
        this.dispatch(target, BlockUIActions.UNSUBSCRIBE);
    }
    /**
    * Checks if BlockUI is actively blocking
    */
    isActive(target = null) {
        const targets = target ? this.toArray(target) : null;
        const instances = this.blockUIInstance.blockUIInstances;
        return Object.keys(instances).some((key) => {
            if (!targets) {
                return instances[key].isActive;
            }
            return targets.indexOf(instances[key].name) >= 0 && instances[key].isActive;
        });
    }
    dispatch(target = [], type, message) {
        const instances = this.toArray(target);
        instances.forEach(i => this.blockUIInstance.decorate(i)[type](message));
    }
    toArray(target = []) {
        return typeof target === 'string' ? [target] : target;
    }
}
BlockUIService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIService, deps: [{ token: i1.BlockUIInstanceService }], target: i0.ɵɵFactoryTarget.Injectable });
BlockUIService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.BlockUIInstanceService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9ibG9jay11aS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7QUFNeEUsTUFBTSxPQUFPLGNBQWM7SUFHekIsWUFDVSxlQUF1QztRQUF2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFIakQsbUJBQWMsR0FBYyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBSXhELENBQUM7SUFFTDs7TUFFRTtJQUNGLEtBQUssQ0FBQyxNQUF5QixFQUFFLE9BQWE7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O01BRUU7SUFDRixJQUFJLENBQUMsTUFBeUI7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7TUFFRTtJQUNGLEtBQUssQ0FBQyxNQUF5QjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOztNQUVFO0lBQ0YsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVEOztNQUVFO0lBQ0YsTUFBTSxDQUFDLE1BQXlCLEVBQUUsT0FBWTtRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7TUFFRTtJQUNGLFdBQVcsQ0FBQyxNQUF5QjtRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOztNQUVFO0lBQ0YsUUFBUSxDQUFDLFNBQTRCLElBQUk7UUFDdkMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDckQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUV4RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7YUFDaEM7WUFFRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzlFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFFBQVEsQ0FBQyxTQUE0QixFQUFFLEVBQUUsSUFBWSxFQUFFLE9BQWE7UUFDMUUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU8sT0FBTyxDQUFDLFNBQTRCLEVBQUU7UUFDNUMsT0FBTyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN4RCxDQUFDOzsyR0F4RVUsY0FBYzsrR0FBZCxjQUFjOzJGQUFkLGNBQWM7a0JBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJsb2NrVUlBY3Rpb25zIH0gZnJvbSAnLi4vY29uc3RhbnRzL2Jsb2NrLXVpLWFjdGlvbnMuY29uc3RhbnQnO1xyXG5pbXBvcnQgeyBCbG9ja1VJSW5zdGFuY2VTZXJ2aWNlIH0gZnJvbSAnLi9ibG9jay11aS1pbnN0YW5jZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdCbG9ja1VJIH0gZnJvbSAnLi4vbW9kZWxzL2Jsb2NrLXVpLm1vZGVsJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1VJU2VydmljZSB7XHJcbiAgZ2xvYmFsRGlzcGF0Y2g6IE5nQmxvY2tVSSA9IHRoaXMuYmxvY2tVSUluc3RhbmNlLmRlY29yYXRlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBibG9ja1VJSW5zdGFuY2U6IEJsb2NrVUlJbnN0YW5jZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICAvKipcclxuICAqIFN0YXJ0cyBibG9ja2luZyBmb3IgZ2l2ZW4gQmxvY2tVSSBpbnN0YW5jZSBvciBpbnN0YW5jZXNcclxuICAqL1xyXG4gIHN0YXJ0KHRhcmdldDogc3RyaW5nIHwgc3RyaW5nW10sIG1lc3NhZ2U/OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzcGF0Y2godGFyZ2V0LCBCbG9ja1VJQWN0aW9ucy5TVEFSVCwgbWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFN0b3BzIGJsb2NraW5nIGZvciBnaXZlbiBCbG9ja1VJIGluc3RhbmNlIG9yIGluc3RhbmNlc1xyXG4gICovXHJcbiAgc3RvcCh0YXJnZXQ6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc3BhdGNoKHRhcmdldCwgQmxvY2tVSUFjdGlvbnMuU1RPUCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJlc2V0IGJsb2NraW5nIGZvciBnaXZlbiBCbG9ja1VJIGluc3RhbmNlIG9yIGluc3RhbmNlc1xyXG4gICovXHJcbiAgcmVzZXQodGFyZ2V0OiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNwYXRjaCh0YXJnZXQsIEJsb2NrVUlBY3Rpb25zLlJFU0VUKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmVzZXQgYmxvY2tpbmcgZm9yIGFsbCBCbG9ja1VJIGluc3RhbmNlc1xyXG4gICovXHJcbiAgcmVzZXRHbG9iYWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdsb2JhbERpc3BhdGNoLnJlc2V0R2xvYmFsKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFVwZGF0ZXMgbWVzc2FnZSBmb3IgZ2l2ZW4gQmxvY2tVSSBpbnN0YW5jZSBvciBpbnN0YW5jZXNcclxuICAqL1xyXG4gIHVwZGF0ZSh0YXJnZXQ6IHN0cmluZyB8IHN0cmluZ1tdLCBtZXNzYWdlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzcGF0Y2godGFyZ2V0LCBCbG9ja1VJQWN0aW9ucy5VUERBVEUsIG1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBVbnN1YnNjcmliZXMgZm9yIGdpdmVuIEJsb2NrVUkgaW5zdGFuY2Ugb3IgaW5zdGFuY2VzXHJcbiAgKi9cclxuICB1bnN1YnNjcmliZSh0YXJnZXQ6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc3BhdGNoKHRhcmdldCwgQmxvY2tVSUFjdGlvbnMuVU5TVUJTQ1JJQkUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDaGVja3MgaWYgQmxvY2tVSSBpcyBhY3RpdmVseSBibG9ja2luZ1xyXG4gICovXHJcbiAgaXNBY3RpdmUodGFyZ2V0OiBzdHJpbmcgfCBzdHJpbmdbXSA9IG51bGwpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRhcmdldHMgPSB0YXJnZXQgPyB0aGlzLnRvQXJyYXkodGFyZ2V0KSA6IG51bGw7XHJcbiAgICBjb25zdCBpbnN0YW5jZXMgPSB0aGlzLmJsb2NrVUlJbnN0YW5jZS5ibG9ja1VJSW5zdGFuY2VzO1xyXG5cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhpbnN0YW5jZXMpLnNvbWUoKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmICghdGFyZ2V0cykge1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZXNba2V5XS5pc0FjdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRhcmdldHMuaW5kZXhPZihpbnN0YW5jZXNba2V5XS5uYW1lKSA+PSAwICYmIGluc3RhbmNlc1trZXldLmlzQWN0aXZlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoKHRhcmdldDogc3RyaW5nIHwgc3RyaW5nW10gPSBbXSwgdHlwZTogc3RyaW5nLCBtZXNzYWdlPzogYW55KSB7XHJcbiAgICBjb25zdCBpbnN0YW5jZXMgPSB0aGlzLnRvQXJyYXkodGFyZ2V0KTtcclxuICAgIGluc3RhbmNlcy5mb3JFYWNoKGkgPT4gdGhpcy5ibG9ja1VJSW5zdGFuY2UuZGVjb3JhdGUoaSlbdHlwZV0obWVzc2FnZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b0FycmF5KHRhcmdldDogc3RyaW5nIHwgc3RyaW5nW10gPSBbXSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gW3RhcmdldF0gOiB0YXJnZXQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==