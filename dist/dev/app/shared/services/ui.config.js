"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var store_1 = require('@ngrx/store');
var api_service_1 = require('./api.service');
var api_interface_1 = require('../interfaces/api.interface');
var InitState = { components: {} };
exports.config = function (state, action) {
    if (state === void 0) { state = InitState; }
    switch (action.type) {
        case 'INITIALIZE':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
var UiConfig = (function () {
    function UiConfig(store, api) {
        this.store = store;
        this.api = api;
    }
    UiConfig.prototype.initialize = function (loggedIn, siteName) {
        var _this = this;
        var localConfig = localStorage.getItem('uiConfig') || JSON.stringify(InitState);
        this.set(JSON.parse(localConfig));
        return this.api.get(api_interface_1.Api.Identities, 'configuration/site', loggedIn ? { parameters: { siteName: siteName } } : {}).do(function (response) { return _this.set(response); });
    };
    UiConfig.prototype.set = function (config) {
        localStorage.setItem('uiConfig', JSON.stringify(config));
        this.store.dispatch({ type: 'INITIALIZE', payload: config });
    };
    UiConfig.prototype.get = function (component) {
        if (component === void 0) { component = ''; }
        return this.store.select('config').map(function (config) {
            return (component === '') ? config : config.components[component] || {};
        });
    };
    UiConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store, api_service_1.ApiService])
    ], UiConfig);
    return UiConfig;
}());
exports.UiConfig = UiConfig;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvdWkuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0Msc0JBQTZDLGFBQWEsQ0FBQyxDQUFBO0FBRTNELDRCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyw4QkFBb0IsNkJBQTZCLENBQUMsQ0FBQTtBQUVsRCxJQUFNLFNBQVMsR0FBUSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUM3QixjQUFNLEdBQXVCLFVBQUMsS0FBaUIsRUFBRSxNQUFjO0lBQWpDLHFCQUFpQixHQUFqQixpQkFBaUI7SUFFMUQsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxZQUFZO1lBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQ7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFNRjtJQUNFLGtCQUFtQixLQUFpQixFQUFVLEdBQWU7UUFBMUMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7SUFBSSxDQUFDO0lBRTNELDZCQUFVLEdBQWpCLFVBQWtCLFFBQWlCLEVBQUUsUUFBZ0I7UUFBckQsaUJBU0M7UUFSQyxJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUNqQixtQkFBRyxDQUFDLFVBQVUsRUFDZCxvQkFBb0IsRUFDcEIsUUFBUSxHQUFHLEVBQUUsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUN2RCxDQUFDLEVBQUUsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sc0JBQUcsR0FBVixVQUFXLE1BQVc7UUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sc0JBQUcsR0FBVixVQUFXLFNBQXNCO1FBQXRCLHlCQUFzQixHQUF0QixjQUFzQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBVztZQUVqRCxNQUFNLENBQUMsQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXpCSDtRQUFDLGlCQUFVLEVBQUU7O2dCQUFBO0lBMEJiLGVBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLGdCQUFRLFdBeUJwQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvdWkuY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvblJlZHVjZXIsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hcGkuaW50ZXJmYWNlJztcblxuY29uc3QgSW5pdFN0YXRlOiBhbnkgPSB7IGNvbXBvbmVudHM6IHt9IH07XG5leHBvcnQgY29uc3QgY29uZmlnOiBBY3Rpb25SZWR1Y2VyPGFueT4gPSAoc3RhdGUgPSBJbml0U3RhdGUsIGFjdGlvbjogQWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0lOSVRJQUxJWkUnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbi8qKlxuICogU2VydmljZSB0aGF0IGV4cG9zZXMgbG93IGxldmVsIGFwaSBwYXRocyBmb3Igc2l0ZSBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uLiBcbiAqIFRoaXMgaW5mb3JtYXRpb24gaXMgaG93IHdpbGwgY3VzdG9taXplIGRpZmZlcmVudCBwb3J0YWxzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVWlDb25maWcge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPGFueT4sIHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlKSB7IH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZShsb2dnZWRJbjogYm9vbGVhbiwgc2l0ZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGxvY2FsQ29uZmlnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VpQ29uZmlnJykgfHwgSlNPTi5zdHJpbmdpZnkoSW5pdFN0YXRlKTtcbiAgICB0aGlzLnNldChKU09OLnBhcnNlKGxvY2FsQ29uZmlnKSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KFxuICAgICAgQXBpLklkZW50aXRpZXMsXG4gICAgICAnY29uZmlndXJhdGlvbi9zaXRlJyxcbiAgICAgIGxvZ2dlZEluID8geyBwYXJhbWV0ZXJzOiB7IHNpdGVOYW1lOiBzaXRlTmFtZSB9IH0gOiB7fVxuICAgICkuZG8ocmVzcG9uc2UgPT4gdGhpcy5zZXQocmVzcG9uc2UpKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoY29uZmlnOiBhbnkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndWlDb25maWcnLCBKU09OLnN0cmluZ2lmeShjb25maWcpKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0lOSVRJQUxJWkUnLCBwYXlsb2FkOiBjb25maWcgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGNvbXBvbmVudDogc3RyaW5nID0gJycpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdCgnY29uZmlnJykubWFwKChjb25maWc6IGFueSkgPT4ge1xuICAgICAgLy8gY29uZmlnID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25maWcpKTtcbiAgICAgIHJldHVybiAoY29tcG9uZW50ID09PSAnJykgPyBjb25maWcgOiBjb25maWcuY29tcG9uZW50c1tjb21wb25lbnRdIHx8IHt9O1xuICAgIH0pO1xuICB9XG59XG4iXX0=
