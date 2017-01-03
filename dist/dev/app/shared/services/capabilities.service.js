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
var cart_capabilities_1 = require('../../+commerce/+cart/services/cart.capabilities');
var asset_capabilities_1 = require('../../+asset/services/asset.capabilities');
var admin_capabilities_1 = require('../../+admin/services/admin.capabilities');
var collection_capabilities_1 = require('../../+collection/services/collection.capabilities');
var search_capabilities_1 = require('../../+search/services/search.capabilities');
var current_user_model_1 = require('./current-user.model');
var router_1 = require('@angular/router');
var ui_state_1 = require('../../shared/services/ui.state');
var Capabilities = (function () {
    function Capabilities(currentUser, route, uiState) {
        this.currentUser = currentUser;
        this.route = route;
        this.uiState = uiState;
        this.applyMixins(Capabilities, [
            cart_capabilities_1.CartCapabilities,
            collection_capabilities_1.CollectionCapabilities,
            asset_capabilities_1.AssetCapabilities,
            admin_capabilities_1.AdminCapabilities,
            search_capabilities_1.SearchCapabilities
        ]);
    }
    Capabilities.prototype.viewAll = function () {
        return this.userHas('Root');
    };
    Capabilities.prototype.default = function () {
        return this.currentUser.loggedIn();
    };
    Capabilities.prototype.userHas = function (permission) {
        return this.currentUser.hasPermission(permission);
    };
    Capabilities.prototype.applyMixins = function (derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    };
    Capabilities = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, router_1.Router, ui_state_1.UiState])
    ], Capabilities);
    return Capabilities;
}());
exports.Capabilities = Capabilities;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY2FwYWJpbGl0aWVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxrQ0FBaUMsa0RBQWtELENBQUMsQ0FBQTtBQUNwRixtQ0FBa0MsMENBQTBDLENBQUMsQ0FBQTtBQUM3RSxtQ0FBa0MsMENBQTBDLENBQUMsQ0FBQTtBQUM3RSx3Q0FBdUMsb0RBQW9ELENBQUMsQ0FBQTtBQUM1RixvQ0FBbUMsNENBQTRDLENBQUMsQ0FBQTtBQUNoRixtQ0FBNEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNuRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyx5QkFBd0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUl6RDtJQWdCRSxzQkFDUyxXQUF3QixFQUN4QixLQUFhLEVBQ2IsT0FBZ0I7UUFGaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7WUFDN0Isb0NBQWdCO1lBQ2hCLGdEQUFzQjtZQUN0QixzQ0FBaUI7WUFDakIsc0NBQWlCO1lBQ2pCLHdDQUFrQjtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sOEJBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSw4QkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLDhCQUFPLEdBQWQsVUFBZSxVQUFrQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQW9CLFdBQWdCLEVBQUUsU0FBZ0I7UUFDcEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7WUFDeEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUN6RCxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoREg7UUFBQyxpQkFBVSxFQUFFOztvQkFBQTtJQWtEYixtQkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksb0JBQVksZUFpRHhCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9jYXBhYmlsaXRpZXMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnRDYXBhYmlsaXRpZXMgfSBmcm9tICcuLi8uLi8rY29tbWVyY2UvK2NhcnQvc2VydmljZXMvY2FydC5jYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHsgQXNzZXRDYXBhYmlsaXRpZXMgfSBmcm9tICcuLi8uLi8rYXNzZXQvc2VydmljZXMvYXNzZXQuY2FwYWJpbGl0aWVzJztcbmltcG9ydCB7IEFkbWluQ2FwYWJpbGl0aWVzIH0gZnJvbSAnLi4vLi4vK2FkbWluL3NlcnZpY2VzL2FkbWluLmNhcGFiaWxpdGllcyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uQ2FwYWJpbGl0aWVzIH0gZnJvbSAnLi4vLi4vK2NvbGxlY3Rpb24vc2VydmljZXMvY29sbGVjdGlvbi5jYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHsgU2VhcmNoQ2FwYWJpbGl0aWVzIH0gZnJvbSAnLi4vLi4vK3NlYXJjaC9zZXJ2aWNlcy9zZWFyY2guY2FwYWJpbGl0aWVzJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi9jdXJyZW50LXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVpU3RhdGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdWkuc3RhdGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FwYWJpbGl0aWVzIGltcGxlbWVudHMgQ2FydENhcGFiaWxpdGllcywgQ29sbGVjdGlvbkNhcGFiaWxpdGllcywgQXNzZXRDYXBhYmlsaXRpZXMsIEFkbWluQ2FwYWJpbGl0aWVzLCBTZWFyY2hDYXBhYmlsaXRpZXMge1xuICB2aWV3Q29sbGVjdGlvbnM6ICgpID0+IGJvb2xlYW47XG4gIGVkaXRDb2xsZWN0aW9uczogKCkgPT4gYm9vbGVhbjtcbiAgdmlld0Fzc2V0RGV0YWlsczogKCkgPT4gYm9vbGVhbjtcbiAgdmlld0Rvd25sb2FkQ29tcE9wdGlvbnM6IChoYXNDb21wOiBib29sZWFuKSA9PiBib29sZWFuO1xuICBkb3dubG9hZFdhdGVybWFya0NvbXBzOiAoaGFzQ29tcDogYm9vbGVhbikgPT4gYm9vbGVhbjtcbiAgZG93bmxvYWRDbGVhbkNvbXBzOiAoaGFzQ29tcDogYm9vbGVhbikgPT4gYm9vbGVhbjtcbiAgZG93bmxvYWRGdWxsQ29tcHM6IChoYXNDb21wOiBib29sZWFuKSA9PiBib29sZWFuO1xuICBjcmVhdGVBY2Nlc3NJbmZvOiAoKSA9PiBib29sZWFuO1xuICBjcmVhdGVTdWJjbGlwczogKCkgPT4gYm9vbGVhbjtcbiAgdmlld0FkbWluOiAoKSA9PiBib29sZWFuO1xuICB2aWV3Q29sbGVjdGlvblRyYXk6ICgpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHZpZXdTZWFyY2hCYXI6ICgpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHZpZXdDYXJ0SWNvbjogKCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHVyY2hhc2VPbkNyZWRpdDogKCkgPT4gYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLFxuICAgIHB1YmxpYyByb3V0ZTogUm91dGVyLFxuICAgIHB1YmxpYyB1aVN0YXRlOiBVaVN0YXRlKSB7XG4gICAgdGhpcy5hcHBseU1peGlucyhDYXBhYmlsaXRpZXMsIFtcbiAgICAgIENhcnRDYXBhYmlsaXRpZXMsXG4gICAgICBDb2xsZWN0aW9uQ2FwYWJpbGl0aWVzLFxuICAgICAgQXNzZXRDYXBhYmlsaXRpZXMsXG4gICAgICBBZG1pbkNhcGFiaWxpdGllcyxcbiAgICAgIFNlYXJjaENhcGFiaWxpdGllc1xuICAgIF0pO1xuICB9XG5cbiAgcHVibGljIHZpZXdBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlckhhcygnUm9vdCcpO1xuICB9XG5cbiAgcHVibGljIGRlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXIubG9nZ2VkSW4oKTtcbiAgfVxuXG4gIHB1YmxpYyB1c2VySGFzKHBlcm1pc3Npb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyLmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbik7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5TWl4aW5zKGRlcml2ZWRDdG9yOiBhbnksIGJhc2VDdG9yczogYW55W10pIHtcbiAgICBiYXNlQ3RvcnMuZm9yRWFjaChiYXNlQ3RvciA9PiB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGRlcml2ZWRDdG9yLnByb3RvdHlwZVtuYW1lXSA9IGJhc2VDdG9yLnByb3RvdHlwZVtuYW1lXTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn1cblxuXG5cblxuIl19
