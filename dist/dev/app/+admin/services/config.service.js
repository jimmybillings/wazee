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
var api_service_1 = require('../../shared/services/api.service');
var api_interface_1 = require('../../shared/interfaces/api.interface');
var ConfigService = (function () {
    function ConfigService(api) {
        this.api = api;
    }
    ConfigService.prototype.getUiConfigIndex = function () {
        return this.api.get(api_interface_1.Api.Identities, 'configuration/site/search').map(function (response) {
            response.items.forEach(function (item) {
                Object.assign(item, { lastUpdateBy: 'Ross Edfort', type: 'ui' });
            });
            return response.items;
        });
    };
    ConfigService.prototype.getSiteConfigIndex = function () {
        return this.api.get(api_interface_1.Api.Identities, 'site/search').map(function (response) {
            response.items.forEach(function (item) {
                Object.assign(item, { lastUpdateBy: 'Ross Edfort', type: 'site' });
            });
            return response.items;
        });
    };
    ConfigService.prototype.searchSiteConfig = function (siteName) {
        return this.api.get(api_interface_1.Api.Identities, 'site/search', { parameters: { q: siteName } });
    };
    ConfigService.prototype.showUiConfig = function (site) {
        return this.api.get(api_interface_1.Api.Identities, 'configuration/site', { parameters: { siteName: site } });
    };
    ConfigService.prototype.showSiteConfig = function (siteId) {
        return this.api.get(api_interface_1.Api.Identities, "site/" + siteId);
    };
    ConfigService.prototype.updateUiConfig = function (data) {
        return this.api.put(api_interface_1.Api.Identities, "configuration/site/" + data.id, { body: data });
    };
    ConfigService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUczQyw0QkFBMkIsbUNBQW1DLENBQUMsQ0FBQTtBQUMvRCw4QkFBb0IsdUNBQXVDLENBQUMsQ0FBQTtBQUc1RDtJQUNFLHVCQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFJLENBQUM7SUFFakMsd0NBQWdCLEdBQXZCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFHLENBQUMsVUFBVSxFQUFFLDJCQUEyQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBYTtZQUNqRixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVM7Z0JBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNuRSxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDBDQUFrQixHQUF6QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBRyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFhO1lBQ25FLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBUztnQkFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sd0NBQWdCLEdBQXZCLFVBQXdCLFFBQWdCO1FBRXRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBRyxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBUSxDQUFDO0lBQzdGLENBQUM7SUFFTSxvQ0FBWSxHQUFuQixVQUFvQixJQUFZO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBRyxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVNLHNDQUFjLEdBQXJCLFVBQXNCLE1BQWM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFHLENBQUMsVUFBVSxFQUFFLFVBQVEsTUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLHNDQUFjLEdBQXJCLFVBQXNCLElBQXVCO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBRyxDQUFDLFVBQVUsRUFBRSx3QkFBc0IsSUFBSSxDQUFDLEVBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFyQ0g7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQXNDYixvQkFBQztBQUFELENBckNBLEFBcUNDLElBQUE7QUFyQ1kscUJBQWEsZ0JBcUN6QixDQUFBIiwiZmlsZSI6ImFwcC8rYWRtaW4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVaUNvbmZpZ0ludGVyZmFjZSwgU2l0ZUNvbmZpZywgQWRtaW5TaXRlUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9hZG1pbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9hcGkuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSkgeyB9XG5cbiAgcHVibGljIGdldFVpQ29uZmlnSW5kZXgoKTogT2JzZXJ2YWJsZTxBcnJheTxVaUNvbmZpZ0ludGVyZmFjZT4+IHtcbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KEFwaS5JZGVudGl0aWVzLCAnY29uZmlndXJhdGlvbi9zaXRlL3NlYXJjaCcpLm1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgcmVzcG9uc2UuaXRlbXMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwgeyBsYXN0VXBkYXRlQnk6ICdSb3NzIEVkZm9ydCcsIHR5cGU6ICd1aScgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXNwb25zZS5pdGVtcztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTaXRlQ29uZmlnSW5kZXgoKTogT2JzZXJ2YWJsZTxBcnJheTxTaXRlQ29uZmlnPj4ge1xuICAgIHJldHVybiB0aGlzLmFwaS5nZXQoQXBpLklkZW50aXRpZXMsICdzaXRlL3NlYXJjaCcpLm1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgcmVzcG9uc2UuaXRlbXMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwgeyBsYXN0VXBkYXRlQnk6ICdSb3NzIEVkZm9ydCcsIHR5cGU6ICdzaXRlJyB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLml0ZW1zO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNlYXJjaFNpdGVDb25maWcoc2l0ZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8U2l0ZUNvbmZpZz4ge1xuICAgIC8vIFwiYXMgYW55XCIgaXMgbmVlZGVkIGhlcmUgdG8gYWxsb3cgYXNzaWdubWVudCBvZiBBcGlSZXNwb25zZSB0byBTaXRlQ29uZmlnLlxuICAgIHJldHVybiB0aGlzLmFwaS5nZXQoQXBpLklkZW50aXRpZXMsICdzaXRlL3NlYXJjaCcsIHsgcGFyYW1ldGVyczogeyBxOiBzaXRlTmFtZSB9IH0pIGFzIGFueTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93VWlDb25maWcoc2l0ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KEFwaS5JZGVudGl0aWVzLCAnY29uZmlndXJhdGlvbi9zaXRlJywgeyBwYXJhbWV0ZXJzOiB7IHNpdGVOYW1lOiBzaXRlIH0gfSk7XG4gIH1cblxuICBwdWJsaWMgc2hvd1NpdGVDb25maWcoc2l0ZUlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEFkbWluU2l0ZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLmdldChBcGkuSWRlbnRpdGllcywgYHNpdGUvJHtzaXRlSWR9YCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVWlDb25maWcoZGF0YTogVWlDb25maWdJbnRlcmZhY2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFwaS5wdXQoQXBpLklkZW50aXRpZXMsIGBjb25maWd1cmF0aW9uL3NpdGUvJHtkYXRhLmlkfWAsIHsgYm9keTogZGF0YSB9KTtcbiAgfVxufVxuIl19
