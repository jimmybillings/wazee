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
var api_config_1 = require('../shared/services/api.config');
var http_1 = require('@angular/http');
var ContentService = (function () {
    function ContentService(apiConfig, http) {
        this.apiConfig = apiConfig;
        this.http = http;
    }
    ContentService.prototype.get = function (page) {
        return this.http.get(this.apiConfig.cms('root') +
            this.apiConfig.getPortal() +
            this.apiConfig.cms('path') +
            this.apiConfig.cms('query') +
            page).map(function (res) { return res.json(); });
    };
    ContentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_config_1.ApiConfig, http_1.Http])
    ], ContentService);
    return ContentService;
}());
exports.ContentService = ContentService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29udGVudC9jb250ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUczQywyQkFBMEIsK0JBQStCLENBQUMsQ0FBQTtBQUMxRCxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFNckM7SUFFRSx3QkFBbUIsU0FBb0IsRUFBUyxJQUFVO1FBQXZDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUV4RCw0QkFBRyxHQUFWLFVBQVcsSUFBWTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzNCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBWkg7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQWFiLHFCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxzQkFBYyxpQkFZMUIsQ0FBQSIsImZpbGUiOiJhcHAvK2NvbnRlbnQvY29udGVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgQXBpQ29uZmlnIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5jb25maWcnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGFwaSBmb3IgbG9nZ2luZyB1c2VyIGluIGFuZCBvdXQuICBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRlbnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpQ29uZmlnOiBBcGlDb25maWcsIHB1YmxpYyBodHRwOiBIdHRwKSB7IH1cblxuICBwdWJsaWMgZ2V0KHBhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICB0aGlzLmFwaUNvbmZpZy5jbXMoJ3Jvb3QnKSArXG4gICAgICB0aGlzLmFwaUNvbmZpZy5nZXRQb3J0YWwoKSArXG4gICAgICB0aGlzLmFwaUNvbmZpZy5jbXMoJ3BhdGgnKSArXG4gICAgICB0aGlzLmFwaUNvbmZpZy5jbXMoJ3F1ZXJ5JykgK1xuICAgICAgcGFnZSkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgfVxufVxuXG5cblxuIl19
