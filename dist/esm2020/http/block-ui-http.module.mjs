import { NgModule, InjectionToken } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpSettings } from './block-ui-http-settings.service';
import { BlockUIInterceptor } from './block-ui-http.interceptor';
import * as i0 from "@angular/core";
// Needed for AOT compiling
export const BlockUIHttpModuleSettings = new InjectionToken('BlockUIHttpModuleSettings');
export function provideSettingsInstance(settings) {
    return {
        settings: {
            blockAllRequestsInProgress: true,
            ...settings
        }
    };
}
export class BlockUIHttpModule {
    static forRoot(settings = {}) {
        return {
            ngModule: BlockUIHttpModule,
            providers: [
                {
                    provide: BlockUIHttpModuleSettings,
                    useValue: settings
                },
                {
                    provide: BlockUIHttpSettings,
                    useFactory: provideSettingsInstance,
                    deps: [BlockUIHttpModuleSettings]
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: BlockUIInterceptor,
                    multi: true
                }
            ]
        };
    }
}
BlockUIHttpModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIHttpModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BlockUIHttpModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: BlockUIHttpModule, imports: [BlockUIModule] });
BlockUIHttpModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIHttpModule, imports: [BlockUIModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIHttpModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [BlockUIModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWktaHR0cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9odHRwL2Jsb2NrLXVpLWh0dHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFnQixNQUFNLGFBQWEsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFHakUsMkJBQTJCO0FBQzNCLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLElBQUksY0FBYyxDQUFTLDJCQUEyQixDQUFDLENBQUM7QUFFakcsTUFBTSxVQUFVLHVCQUF1QixDQUFDLFFBQXNCO0lBQzVELE9BQU87UUFDTCxRQUFRLEVBQUU7WUFDUiwwQkFBMEIsRUFBRSxJQUFJO1lBQ2hDLEdBQUcsUUFBUTtTQUNaO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFLRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBeUIsRUFBRTtRQUN4QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHlCQUF5QjtvQkFDbEMsUUFBUSxFQUFFLFFBQVE7aUJBQ25CO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFVBQVUsRUFBRSx1QkFBdUI7b0JBQ25DLElBQUksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2lCQUNsQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzhHQXJCVSxpQkFBaUI7K0dBQWpCLGlCQUFpQixZQUZsQixhQUFhOytHQUVaLGlCQUFpQixZQUZsQixhQUFhOzJGQUVaLGlCQUFpQjtrQkFIN0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBCbG9ja1VJTW9kdWxlLCBIdHRwU2V0dGluZ3MgfSBmcm9tICduZy1ibG9jay11aSc7XHJcbmltcG9ydCB7IEJsb2NrVUlIdHRwU2V0dGluZ3MgfSBmcm9tICcuL2Jsb2NrLXVpLWh0dHAtc2V0dGluZ3Muc2VydmljZSc7XHJcbmltcG9ydCB7IEJsb2NrVUlJbnRlcmNlcHRvciB9IGZyb20gJy4vYmxvY2stdWktaHR0cC5pbnRlcmNlcHRvcic7XHJcblxyXG5cclxuLy8gTmVlZGVkIGZvciBBT1QgY29tcGlsaW5nXHJcbmV4cG9ydCBjb25zdCBCbG9ja1VJSHR0cE1vZHVsZVNldHRpbmdzID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ0Jsb2NrVUlIdHRwTW9kdWxlU2V0dGluZ3MnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU2V0dGluZ3NJbnN0YW5jZShzZXR0aW5nczogSHR0cFNldHRpbmdzKTogQmxvY2tVSUh0dHBTZXR0aW5ncyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNldHRpbmdzOiB7XHJcbiAgICAgIGJsb2NrQWxsUmVxdWVzdHNJblByb2dyZXNzOiB0cnVlLFxyXG4gICAgICAuLi5zZXR0aW5nc1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0Jsb2NrVUlNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1VJSHR0cE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3Qoc2V0dGluZ3M6IEh0dHBTZXR0aW5ncyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxCbG9ja1VJSHR0cE1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJsb2NrVUlIdHRwTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBCbG9ja1VJSHR0cE1vZHVsZVNldHRpbmdzLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IHNldHRpbmdzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBCbG9ja1VJSHR0cFNldHRpbmdzLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVNldHRpbmdzSW5zdGFuY2UsXHJcbiAgICAgICAgICBkZXBzOiBbQmxvY2tVSUh0dHBNb2R1bGVTZXR0aW5nc11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IEJsb2NrVUlJbnRlcmNlcHRvcixcclxuICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=