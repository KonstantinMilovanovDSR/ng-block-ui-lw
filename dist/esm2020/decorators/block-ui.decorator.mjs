import { BlockUIServiceInstance } from '../block-ui.module';
export let blockInstanceGuid = 1;
export function BlockUI(blockName, settings = {}) {
    if (!settings.scopeToInstance) {
        return function (target, propertyKey) {
            target[propertyKey] = BlockUIServiceInstance.decorate(blockName);
        };
    }
    return function (target, key) {
        const secret = `_${key}-block-ui`;
        Object.defineProperty(target, key, {
            get: function () {
                if (this[secret]) {
                    return this[secret];
                }
                const instanceName = `${blockName}-${blockInstanceGuid++}`;
                this[secret] = BlockUIServiceInstance.decorate(instanceName);
                return this[secret];
            },
            set: function (value) {
                this[secret] = value;
            },
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdWkuZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2RlY29yYXRvcnMvYmxvY2stdWkuZGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzVELE1BQU0sQ0FBQyxJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUVqQyxNQUFNLFVBQVUsT0FBTyxDQUFDLFNBQWtCLEVBQUUsV0FBcUMsRUFBRTtJQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtRQUM3QixPQUFPLFVBQVUsTUFBWSxFQUFFLFdBQW9CO1lBQ2pELE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDO0tBQ0g7SUFHRCxPQUFPLFVBQVUsTUFBWSxFQUFFLEdBQVk7UUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUVsQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDakMsR0FBRyxFQUFFO2dCQUNILElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDckI7Z0JBRUQsTUFBTSxZQUFZLEdBQUcsR0FBRyxTQUFTLElBQUksaUJBQWlCLEVBQUUsRUFBRSxDQUFDO2dCQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUU3RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixDQUFDO1lBQ0QsR0FBRyxFQUFFLFVBQVUsS0FBVTtnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsb2NrVUlTZXJ2aWNlSW5zdGFuY2UgfSBmcm9tICcuLi9ibG9jay11aS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCbG9ja1VJRGVjb3JhdG9yU2V0dGluZ3MgfSBmcm9tICcuLi9tb2RlbHMvYmxvY2stdWktZGVjb3JhdG9yLXNldHRpbmdzLm1vZGVsJztcclxuXHJcbmV4cG9ydCBsZXQgYmxvY2tJbnN0YW5jZUd1aWQgPSAxO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrVUkoYmxvY2tOYW1lPzogc3RyaW5nLCBzZXR0aW5nczogQmxvY2tVSURlY29yYXRvclNldHRpbmdzID0ge30pIHtcclxuICBpZiAoIXNldHRpbmdzLnNjb3BlVG9JbnN0YW5jZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ/OiBhbnksIHByb3BlcnR5S2V5Pzogc3RyaW5nKSB7XHJcbiAgICAgIHRhcmdldFtwcm9wZXJ0eUtleV0gPSBCbG9ja1VJU2VydmljZUluc3RhbmNlLmRlY29yYXRlKGJsb2NrTmFtZSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0PzogYW55LCBrZXk/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlY3JldCA9IGBfJHtrZXl9LWJsb2NrLXVpYDtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXNbc2VjcmV0XSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXNbc2VjcmV0XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlTmFtZSA9IGAke2Jsb2NrTmFtZX0tJHtibG9ja0luc3RhbmNlR3VpZCsrfWA7XHJcbiAgICAgICAgdGhpc1tzZWNyZXRdID0gQmxvY2tVSVNlcnZpY2VJbnN0YW5jZS5kZWNvcmF0ZShpbnN0YW5jZU5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1tzZWNyZXRdO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpc1tzZWNyZXRdID0gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiJdfQ==