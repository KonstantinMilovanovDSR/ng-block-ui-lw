import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUIComponent } from './components/block-ui/block-ui.component';
import { BlockUIContentComponent } from './components/block-ui-content/block-ui-content.component';
import { BlockUIInstanceService } from './services/block-ui-instance.service';
import { BlockUIService } from './services/block-ui.service';
import { BlockUIDirective } from './directives/block-ui.directive';
import * as i0 from "@angular/core";
export const BlockUIServiceInstance = new BlockUIInstanceService();
// Needed for AOT compiling
export const BlockUIModuleSettings = new InjectionToken('BlockUIModuleSettings');
export function provideInstance(settings) {
    BlockUIServiceInstance.updateSettings(settings);
    return BlockUIServiceInstance;
}
export class BlockUIModule {
    static forRoot(settings = {}) {
        return {
            ngModule: BlockUIModule,
            providers: [
                {
                    provide: BlockUIModuleSettings,
                    useValue: settings
                },
                {
                    provide: BlockUIInstanceService,
                    useFactory: provideInstance,
                    deps: [BlockUIModuleSettings]
                },
                BlockUIService
            ]
        };
    }
}
BlockUIModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BlockUIModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: BlockUIModule, declarations: [BlockUIComponent,
        BlockUIDirective,
        BlockUIContentComponent], imports: [CommonModule], exports: [BlockUIComponent,
        BlockUIDirective,
        BlockUIContentComponent] });
BlockUIModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BlockUIModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    entryComponents: [
                        BlockUIComponent,
                        BlockUIContentComponent
                    ],
                    declarations: [
                        BlockUIComponent,
                        BlockUIDirective,
                        BlockUIContentComponent
                    ],
                    exports: [
                        BlockUIComponent,
                        BlockUIDirective,
                        BlockUIContentComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Jsb2NrLXVpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFHbkUsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0FBRW5FLDJCQUEyQjtBQUMzQixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBUyx1QkFBdUIsQ0FBQyxDQUFDO0FBRXpGLE1BQU0sVUFBVSxlQUFlLENBQUMsUUFBeUI7SUFDdkQsc0JBQXNCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sc0JBQXNCLENBQUM7QUFDaEMsQ0FBQztBQXFCRCxNQUFNLE9BQU8sYUFBYTtJQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQTRCLEVBQUU7UUFDbEQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsUUFBUTtpQkFDbkI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsVUFBVSxFQUFFLGVBQWU7b0JBQzNCLElBQUksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUM5QjtnQkFDRCxjQUFjO2FBQ2Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7MEdBakJVLGFBQWE7MkdBQWIsYUFBYSxpQkFWdEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQix1QkFBdUIsYUFUdkIsWUFBWSxhQVlaLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsdUJBQXVCOzJHQUdkLGFBQWEsWUFqQnRCLFlBQVk7MkZBaUJILGFBQWE7a0JBbkJ6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELGVBQWUsRUFBRTt3QkFDZixnQkFBZ0I7d0JBQ2hCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3FCQUN4QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQmxvY2tVSUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ibG9jay11aS9ibG9jay11aS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbG9ja1VJQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ibG9jay11aS1jb250ZW50L2Jsb2NrLXVpLWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmxvY2tVSUluc3RhbmNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYmxvY2stdWktaW5zdGFuY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEJsb2NrVUlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9ibG9jay11aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmxvY2tVSURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ibG9jay11aS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCbG9ja1VJU2V0dGluZ3MgfSBmcm9tICcuL21vZGVscy9ibG9jay11aS1zZXR0aW5ncy5tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgQmxvY2tVSVNlcnZpY2VJbnN0YW5jZSA9IG5ldyBCbG9ja1VJSW5zdGFuY2VTZXJ2aWNlKCk7XHJcblxyXG4vLyBOZWVkZWQgZm9yIEFPVCBjb21waWxpbmdcclxuZXhwb3J0IGNvbnN0IEJsb2NrVUlNb2R1bGVTZXR0aW5ncyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdCbG9ja1VJTW9kdWxlU2V0dGluZ3MnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlSW5zdGFuY2Uoc2V0dGluZ3M6IEJsb2NrVUlTZXR0aW5ncyk6IGFueSB7XHJcbiAgQmxvY2tVSVNlcnZpY2VJbnN0YW5jZS51cGRhdGVTZXR0aW5ncyhzZXR0aW5ncyk7XHJcbiAgcmV0dXJuIEJsb2NrVUlTZXJ2aWNlSW5zdGFuY2U7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIEJsb2NrVUlDb21wb25lbnQsXHJcbiAgICBCbG9ja1VJQ29udGVudENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCbG9ja1VJQ29tcG9uZW50LFxyXG4gICAgQmxvY2tVSURpcmVjdGl2ZSxcclxuICAgIEJsb2NrVUlDb250ZW50Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBCbG9ja1VJQ29tcG9uZW50LFxyXG4gICAgQmxvY2tVSURpcmVjdGl2ZSxcclxuICAgIEJsb2NrVUlDb250ZW50Q29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmxvY2tVSU1vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KHNldHRpbmdzOiBCbG9ja1VJU2V0dGluZ3MgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QmxvY2tVSU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJsb2NrVUlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEJsb2NrVUlNb2R1bGVTZXR0aW5ncyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBzZXR0aW5nc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQmxvY2tVSUluc3RhbmNlU2VydmljZSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHByb3ZpZGVJbnN0YW5jZSxcclxuICAgICAgICAgIGRlcHM6IFtCbG9ja1VJTW9kdWxlU2V0dGluZ3NdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBCbG9ja1VJU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=