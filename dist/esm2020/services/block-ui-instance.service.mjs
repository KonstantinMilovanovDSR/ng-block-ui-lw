import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BlockUIActions } from '../constants/block-ui-actions.constant';
import { BlockUIDefaultName } from '../constants/block-ui-default-name.constant';
import * as i0 from "@angular/core";
export class BlockUIInstanceService {
    constructor() {
        this.blockUISettings = {};
        this.blockUIInstances = {};
        this.blockUISubject = new ReplaySubject(1);
        this.blockUIObservable = this.blockUISubject.asObservable();
        this.blockUIObservable.subscribe(this.blockUIMiddleware.bind(this));
    }
    getSettings() {
        return this.blockUISettings;
    }
    updateSettings(settings = {}) {
        this.blockUISettings = { ...this.blockUISettings, ...settings };
    }
    decorate(name = BlockUIDefaultName) {
        const blockUI = {
            name,
            isActive: false,
            blockCount: 0,
            start: this.dispatch(this.blockUISubject, BlockUIActions.START, name),
            update: this.dispatch(this.blockUISubject, BlockUIActions.UPDATE, name),
            stop: this.dispatch(this.blockUISubject, BlockUIActions.STOP, name),
            reset: this.dispatch(this.blockUISubject, BlockUIActions.RESET, name),
            resetGlobal: this.dispatch(this.blockUISubject, BlockUIActions.RESET_GLOBAL, name),
            unsubscribe: this.dispatch(this.blockUISubject, BlockUIActions.UNSUBSCRIBE, name)
        };
        this.blockUIInstances[name] = this.blockUIInstances[name] || blockUI;
        return blockUI;
    }
    observe() {
        return this.blockUIObservable;
    }
    clearInstance(instanceName) {
        this.dispatch(this.blockUISubject, BlockUIActions.RESET, instanceName);
    }
    blockUIMiddleware({ action, name }) {
        let isActive = null;
        switch (action) {
            case (BlockUIActions.START):
                isActive = true;
                break;
            case (BlockUIActions.STOP):
            case (BlockUIActions.RESET):
                isActive = false;
                break;
        }
        if (isActive !== null) {
            this.blockUIInstances[name].isActive = isActive;
        }
    }
    dispatch(subject, action, name = BlockUIDefaultName) {
        return (message) => {
            subject.next({
                name,
                action,
                message
            });
        };
    }
}
BlockUIInstanceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIInstanceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BlockUIInstanceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIInstanceService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIInstanceService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWktaW5zdGFuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9ibG9jay11aS1pbnN0YW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7O0FBT2pGLE1BQU0sT0FBTyxzQkFBc0I7SUFNakM7UUFMQSxvQkFBZSxHQUEwQixFQUFFLENBQUM7UUFDNUMscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQ25CLG1CQUFjLEdBQXVCLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELHNCQUFpQixHQUFvQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRzlFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBa0MsRUFBRTtRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFlLGtCQUFrQjtRQUN4QyxNQUFNLE9BQU8sR0FBRztZQUNkLElBQUk7WUFDSixRQUFRLEVBQUUsS0FBSztZQUNmLFVBQVUsRUFBRSxDQUFDO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztZQUNyRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO1lBQ3ZFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7WUFDbkUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztZQUNyRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO1lBQ2xGLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7U0FDckUsQ0FBQztRQUVmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDO1FBRXJFLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxZQUFvQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8saUJBQWlCLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFnQjtRQUN0RCxJQUFJLFFBQVEsR0FBWSxJQUFJLENBQUM7UUFFN0IsUUFBUSxNQUFNLEVBQUU7WUFDZCxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztnQkFDekIsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEIsTUFBTTtZQUVSLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3pCLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE1BQU07U0FDVDtRQUVELElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFTyxRQUFRLENBQUMsT0FBMkIsRUFBRSxNQUFzQixFQUFFLE9BQWUsa0JBQWtCO1FBQ3JHLE9BQU8sQ0FBQyxPQUFhLEVBQVEsRUFBRTtZQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNYLElBQUk7Z0JBQ0osTUFBTTtnQkFDTixPQUFPO2FBQ1IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7bUhBdkVVLHNCQUFzQjt1SEFBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQmxvY2tVSUFjdGlvbnMgfSBmcm9tICcuLi9jb25zdGFudHMvYmxvY2stdWktYWN0aW9ucy5jb25zdGFudCc7XHJcbmltcG9ydCB7IEJsb2NrVUlEZWZhdWx0TmFtZSB9IGZyb20gJy4uL2NvbnN0YW50cy9ibG9jay11aS1kZWZhdWx0LW5hbWUuY29uc3RhbnQnO1xyXG5pbXBvcnQgeyBOZ0Jsb2NrVUkgfSBmcm9tICcuLi9tb2RlbHMvYmxvY2stdWkubW9kZWwnO1xyXG5pbXBvcnQgeyBCbG9ja1VJU2V0dGluZ3MgfSBmcm9tICcuLi9tb2RlbHMvYmxvY2stdWktc2V0dGluZ3MubW9kZWwnO1xyXG5pbXBvcnQgeyBCbG9ja1VJRXZlbnQgfSBmcm9tICcuLi9tb2RlbHMvYmxvY2stdWktZXZlbnQubW9kZWwnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJsb2NrVUlJbnN0YW5jZVNlcnZpY2Uge1xyXG4gIGJsb2NrVUlTZXR0aW5nczogQmxvY2tVSVNldHRpbmdzIHwgYW55ID0ge307XHJcbiAgYmxvY2tVSUluc3RhbmNlczogYW55ID0ge307XHJcbiAgcHJpdmF0ZSBibG9ja1VJU3ViamVjdDogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XHJcbiAgcHJpdmF0ZSBibG9ja1VJT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5ibG9ja1VJU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJsb2NrVUlPYnNlcnZhYmxlLnN1YnNjcmliZSh0aGlzLmJsb2NrVUlNaWRkbGV3YXJlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3MoKTogQmxvY2tVSVNldHRpbmdzIHwgYW55IHtcclxuICAgIHJldHVybiB0aGlzLmJsb2NrVUlTZXR0aW5ncztcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNldHRpbmdzKHNldHRpbmdzOiBCbG9ja1VJU2V0dGluZ3MgfCBhbnkgPSB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5ibG9ja1VJU2V0dGluZ3MgPSB7IC4uLnRoaXMuYmxvY2tVSVNldHRpbmdzLCAuLi5zZXR0aW5ncyB9O1xyXG4gIH1cclxuXHJcbiAgZGVjb3JhdGUobmFtZTogc3RyaW5nID0gQmxvY2tVSURlZmF1bHROYW1lKTogTmdCbG9ja1VJIHtcclxuICAgIGNvbnN0IGJsb2NrVUkgPSB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgYmxvY2tDb3VudDogMCxcclxuICAgICAgc3RhcnQ6IHRoaXMuZGlzcGF0Y2godGhpcy5ibG9ja1VJU3ViamVjdCwgQmxvY2tVSUFjdGlvbnMuU1RBUlQsIG5hbWUpLFxyXG4gICAgICB1cGRhdGU6IHRoaXMuZGlzcGF0Y2godGhpcy5ibG9ja1VJU3ViamVjdCwgQmxvY2tVSUFjdGlvbnMuVVBEQVRFLCBuYW1lKSxcclxuICAgICAgc3RvcDogdGhpcy5kaXNwYXRjaCh0aGlzLmJsb2NrVUlTdWJqZWN0LCBCbG9ja1VJQWN0aW9ucy5TVE9QLCBuYW1lKSxcclxuICAgICAgcmVzZXQ6IHRoaXMuZGlzcGF0Y2godGhpcy5ibG9ja1VJU3ViamVjdCwgQmxvY2tVSUFjdGlvbnMuUkVTRVQsIG5hbWUpLFxyXG4gICAgICByZXNldEdsb2JhbDogdGhpcy5kaXNwYXRjaCh0aGlzLmJsb2NrVUlTdWJqZWN0LCBCbG9ja1VJQWN0aW9ucy5SRVNFVF9HTE9CQUwsIG5hbWUpLFxyXG4gICAgICB1bnN1YnNjcmliZTogdGhpcy5kaXNwYXRjaCh0aGlzLmJsb2NrVUlTdWJqZWN0LCBCbG9ja1VJQWN0aW9ucy5VTlNVQlNDUklCRSwgbmFtZSlcclxuICAgIH0gYXMgTmdCbG9ja1VJO1xyXG5cclxuICAgIHRoaXMuYmxvY2tVSUluc3RhbmNlc1tuYW1lXSA9IHRoaXMuYmxvY2tVSUluc3RhbmNlc1tuYW1lXSB8fCBibG9ja1VJO1xyXG5cclxuICAgIHJldHVybiBibG9ja1VJO1xyXG4gIH1cclxuXHJcbiAgb2JzZXJ2ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmxvY2tVSU9ic2VydmFibGU7XHJcbiAgfVxyXG5cclxuICBjbGVhckluc3RhbmNlKGluc3RhbmNlTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoKHRoaXMuYmxvY2tVSVN1YmplY3QsIEJsb2NrVUlBY3Rpb25zLlJFU0VULCBpbnN0YW5jZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBibG9ja1VJTWlkZGxld2FyZSh7IGFjdGlvbiwgbmFtZSB9OiBCbG9ja1VJRXZlbnQpOiB2b2lkIHtcclxuICAgIGxldCBpc0FjdGl2ZTogYm9vbGVhbiA9IG51bGw7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgY2FzZSAoQmxvY2tVSUFjdGlvbnMuU1RBUlQpOlxyXG4gICAgICAgIGlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgKEJsb2NrVUlBY3Rpb25zLlNUT1ApOlxyXG4gICAgICBjYXNlIChCbG9ja1VJQWN0aW9ucy5SRVNFVCk6XHJcbiAgICAgICAgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBY3RpdmUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5ibG9ja1VJSW5zdGFuY2VzW25hbWVdLmlzQWN0aXZlID0gaXNBY3RpdmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoKHN1YmplY3Q6IFJlcGxheVN1YmplY3Q8YW55PiwgYWN0aW9uOiBCbG9ja1VJQWN0aW9ucywgbmFtZTogc3RyaW5nID0gQmxvY2tVSURlZmF1bHROYW1lKTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIChtZXNzYWdlPzogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgIHN1YmplY3QubmV4dCh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==