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
var router_1 = require('@angular/router');
var asset_data_service_1 = require('./services/asset.data.service');
var ui_config_1 = require('../shared/services/ui.config');
var current_user_model_1 = require('../shared/services/current-user.model');
var search_context_service_1 = require('../shared/services/search-context.service');
var ui_state_1 = require('../shared/services/ui.state');
var active_collection_service_1 = require('../shared/services/active-collection.service');
var filter_service_1 = require('../shared/services/filter.service');
var user_preference_service_1 = require('../shared/services/user-preference.service');
var sort_definitions_service_1 = require('../shared/services/sort-definitions.service');
var capabilities_service_1 = require('../shared/services/capabilities.service');
var wz_notification_service_1 = require('../shared/components/wz-notification/wz.notification.service');
var cart_summary_service_1 = require('../shared/services/cart-summary.service');
var asset_service_1 = require('../shared/services/asset.service');
var SearchComponent = (function () {
    function SearchComponent(route, assetData, router, uiConfig, currentUser, userCan, activeCollection, searchContext, filter, userPreferences, notification, uiState, sortDefinition, cartSummary, assetService) {
        this.route = route;
        this.assetData = assetData;
        this.router = router;
        this.uiConfig = uiConfig;
        this.currentUser = currentUser;
        this.userCan = userCan;
        this.activeCollection = activeCollection;
        this.searchContext = searchContext;
        this.filter = filter;
        this.userPreferences = userPreferences;
        this.notification = notification;
        this.uiState = uiState;
        this.sortDefinition = sortDefinition;
        this.cartSummary = cartSummary;
        this.assetService = assetService;
        this.filterValues = new Array();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.preferencesSubscription = this.userPreferences.data.subscribe(function (data) {
            _this.preferences = data;
        });
        this.sortSubscription = this.sortDefinition.data.subscribe(function (data) { return _this.sortOptions = data; });
        this.assetsStoreSubscription = this.assetData.data.subscribe(function (data) { return _this.assets = data; });
        this.configSubscription = this.uiConfig.get('search').subscribe(function (config) { return _this.config = config.config; });
        this.filter.get(this.searchContext.state, this.preferences.displayFilterCounts).take(1).subscribe();
        if (this.preferences.displayFilterTree)
            this.sidenav.open();
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.assetData.clearAssets();
        this.assetsStoreSubscription.unsubscribe();
        this.configSubscription.unsubscribe();
        this.preferencesSubscription.unsubscribe();
        this.sortSubscription.unsubscribe();
    };
    SearchComponent.prototype.countToggle = function (event) {
        this.filter.get(this.searchContext.state, !this.preferences.displayFilterCounts).take(1).subscribe();
        this.userPreferences.toggleFilterCount();
    };
    SearchComponent.prototype.showAsset = function (asset) {
        this.router.navigate(['/asset', asset.assetId]);
    };
    SearchComponent.prototype.addToCollection = function (params) {
        this.userPreferences.openCollectionTray();
        this.activeCollection.addAsset(params.collection.id, params.asset).subscribe();
    };
    SearchComponent.prototype.removeFromCollection = function (params) {
        this.userPreferences.openCollectionTray();
        this.activeCollection.removeAsset(params).subscribe();
    };
    SearchComponent.prototype.showNewCollection = function (asset) {
        var newCollectionButton = document.querySelector('button.open-collection-tray');
        (!this.currentUser.loggedIn()) ? this.router.navigate(['/user/login']) : newCollectionButton.click();
    };
    SearchComponent.prototype.changePage = function (page) {
        this.searchContext.update = { i: page };
        this.searchContext.go();
    };
    SearchComponent.prototype.toggleFilter = function (filterId) {
        this.filter.set(this.filter.toggle(filterId));
    };
    SearchComponent.prototype.applyFilter = function (filterId) {
        this.toggleFilter(filterId);
        this.filterAssets();
    };
    SearchComponent.prototype.applyCustomValue = function (filter, value) {
        this.filter.set(this.filter.addCustomValue(filter, value));
        this.filterAssets();
    };
    SearchComponent.prototype.applyExclusiveFilter = function (subFilter) {
        this.filter.set(this.filter.toggleExclusive(subFilter));
        this.filterAssets();
    };
    SearchComponent.prototype.clearFilters = function () {
        this.filter.set(this.filter.clear());
        this.filterAssets();
    };
    SearchComponent.prototype.downloadComp = function (params) {
        var _this = this;
        this.assetData.downloadComp(params.assetId, params.compType).subscribe(function (res) {
            if (res.url && res.url !== '') {
                window.location.href = res.url;
            }
            else {
                _this.notification.create('COMPS.NO_COMP');
            }
        });
    };
    SearchComponent.prototype.filterAssets = function () {
        this.searchContext.update = { i: 1 };
        var active = [];
        this.filter.active(active);
        var activeIds = active.map(function (filter) { return filter.filterId; });
        var activeValues = active.filter(function (filter) { return filter.filterValue; })
            .map(function (filter) { return (filter.filterId + ":" + filter.filterValue); });
        ;
        if (activeIds.length > 0) {
            this.searchContext.update = { 'filterIds': activeIds.join(',') };
        }
        else {
            this.searchContext.remove = 'filterIds';
        }
        if (activeIds.length > 0 && activeValues.length > 0) {
            this.searchContext.update = { 'filterValues': activeValues.join(',') };
        }
        else {
            this.searchContext.remove = 'filterValues';
        }
        this.searchContext.go();
        this.filter.get(this.searchContext.state, this.preferences.displayFilterCounts).subscribe();
    };
    SearchComponent.prototype.onSortResults = function (sortDefinition) {
        this.userPreferences.updateSortPreference(sortDefinition.id);
        this.sortDefinition.update({ currentSort: sortDefinition });
        this.searchContext.update = { 'i': 1, 'sortId': sortDefinition.id };
        this.searchContext.go();
    };
    SearchComponent.prototype.addAssetToCart = function (asset) {
        this.cartSummary.addAssetToProjectInCart(asset);
    };
    __decorate([
        core_1.ViewChild('searchFilter'), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "sidenav", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-component',
            templateUrl: 'search.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, asset_data_service_1.AssetData, router_1.Router, ui_config_1.UiConfig, current_user_model_1.CurrentUser, capabilities_service_1.Capabilities, active_collection_service_1.ActiveCollectionService, search_context_service_1.SearchContext, filter_service_1.FilterService, user_preference_service_1.UserPreferenceService, wz_notification_service_1.WzNotificationService, ui_state_1.UiState, sort_definitions_service_1.SortDefinitionsService, cart_summary_service_1.CartSummaryService, asset_service_1.AssetService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRixlQUFlLENBQUMsQ0FBQTtBQUNqRyx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCxtQ0FBMEIsK0JBQStCLENBQUMsQ0FBQTtBQUMxRCwwQkFBeUIsOEJBQThCLENBQUMsQ0FBQTtBQUV4RCxtQ0FBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUNwRSx1Q0FBOEIsMkNBQTJDLENBQUMsQ0FBQTtBQUMxRSx5QkFBd0IsNkJBQTZCLENBQUMsQ0FBQTtBQUN0RCwwQ0FBd0MsOENBQThDLENBQUMsQ0FBQTtBQUN2RiwrQkFBOEIsbUNBQW1DLENBQUMsQ0FBQTtBQUNsRSx3Q0FBc0MsNENBQTRDLENBQUMsQ0FBQTtBQUNuRix5Q0FBdUMsNkNBQTZDLENBQUMsQ0FBQTtBQUNyRixxQ0FBNkIseUNBQXlDLENBQUMsQ0FBQTtBQUN2RSx3Q0FBc0MsOERBQThELENBQUMsQ0FBQTtBQUNyRyxxQ0FBbUMseUNBQXlDLENBQUMsQ0FBQTtBQUM3RSw4QkFBNkIsa0NBQWtDLENBQUMsQ0FBQTtBQVloRTtJQWNFLHlCQUNVLEtBQXFCLEVBQ3RCLFNBQW9CLEVBQ3BCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixXQUF3QixFQUN4QixPQUFxQixFQUNyQixnQkFBeUMsRUFDekMsYUFBNEIsRUFDNUIsTUFBcUIsRUFDckIsZUFBc0MsRUFDdEMsWUFBbUMsRUFDbkMsT0FBZ0IsRUFDaEIsY0FBc0MsRUFDdEMsV0FBK0IsRUFDL0IsWUFBMEI7UUFkekIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLHFCQUFnQixH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b3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBc3NldERhdGEgfSBmcm9tICcuL3NlcnZpY2VzL2Fzc2V0LmRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBVaUNvbmZpZyB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9zZWFyY2gtY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IFVpU3RhdGUgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvdWkuc3RhdGUnO1xuaW1wb3J0IHsgQWN0aXZlQ29sbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYWN0aXZlLWNvbGxlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2ZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJQcmVmZXJlbmNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLXByZWZlcmVuY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0RGVmaW5pdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NvcnQtZGVmaW5pdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBDYXBhYmlsaXRpZXMgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvY2FwYWJpbGl0aWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgV3pOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvd3otbm90aWZpY2F0aW9uL3d6Lm5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRTdW1tYXJ5U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jYXJ0LXN1bW1hcnkuc2VydmljZSc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXNzZXQuc2VydmljZSc7XG5cbi8qKlxuICogQXNzZXQgc2VhcmNoIHBhZ2UgY29tcG9uZW50IC0gcmVuZGVycyBzZWFyY2ggcGFnZSByZXN1bHRzXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NlYXJjaC1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ3NlYXJjaC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBjb25maWc6IE9iamVjdDtcbiAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyVmFsdWVzOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5KCk7XG4gIHB1YmxpYyBhY3RpdmVDb2xsZWN0aW9uU3RvcmU6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIGFzc2V0czogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgcHJlZmVyZW5jZXM6IGFueTtcbiAgcHVibGljIHNvcnRPcHRpb25zOiBhbnk7XG4gIHByaXZhdGUgYXNzZXRzU3RvcmVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjb25maWdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBwcmVmZXJlbmNlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHNvcnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoRmlsdGVyJykgcHJpdmF0ZSBzaWRlbmF2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIGFzc2V0RGF0YTogQXNzZXREYXRhLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgdWlDb25maWc6IFVpQ29uZmlnLFxuICAgIHB1YmxpYyBjdXJyZW50VXNlcjogQ3VycmVudFVzZXIsXG4gICAgcHVibGljIHVzZXJDYW46IENhcGFiaWxpdGllcyxcbiAgICBwdWJsaWMgYWN0aXZlQ29sbGVjdGlvbjogQWN0aXZlQ29sbGVjdGlvblNlcnZpY2UsXG4gICAgcHVibGljIHNlYXJjaENvbnRleHQ6IFNlYXJjaENvbnRleHQsXG4gICAgcHVibGljIGZpbHRlcjogRmlsdGVyU2VydmljZSxcbiAgICBwdWJsaWMgdXNlclByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVNlcnZpY2UsXG4gICAgcHVibGljIG5vdGlmaWNhdGlvbjogV3pOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyB1aVN0YXRlOiBVaVN0YXRlLFxuICAgIHB1YmxpYyBzb3J0RGVmaW5pdGlvbjogU29ydERlZmluaXRpb25zU2VydmljZSxcbiAgICBwdWJsaWMgY2FydFN1bW1hcnk6IENhcnRTdW1tYXJ5U2VydmljZSxcbiAgICBwdWJsaWMgYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJlZmVyZW5jZXNTdWJzY3JpcHRpb24gPSB0aGlzLnVzZXJQcmVmZXJlbmNlcy5kYXRhLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICB0aGlzLnByZWZlcmVuY2VzID0gZGF0YTtcbiAgICB9KTtcbiAgICB0aGlzLnNvcnRTdWJzY3JpcHRpb24gPSB0aGlzLnNvcnREZWZpbml0aW9uLmRhdGEuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHRoaXMuc29ydE9wdGlvbnMgPSBkYXRhKTtcbiAgICB0aGlzLmFzc2V0c1N0b3JlU3Vic2NyaXB0aW9uID0gdGhpcy5hc3NldERhdGEuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmFzc2V0cyA9IGRhdGEpO1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uID0gdGhpcy51aUNvbmZpZy5nZXQoJ3NlYXJjaCcpLnN1YnNjcmliZSgoY29uZmlnKSA9PiB0aGlzLmNvbmZpZyA9IGNvbmZpZy5jb25maWcpO1xuICAgIHRoaXMuZmlsdGVyLmdldCh0aGlzLnNlYXJjaENvbnRleHQuc3RhdGUsIHRoaXMucHJlZmVyZW5jZXMuZGlzcGxheUZpbHRlckNvdW50cykudGFrZSgxKS5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5wcmVmZXJlbmNlcy5kaXNwbGF5RmlsdGVyVHJlZSkgdGhpcy5zaWRlbmF2Lm9wZW4oKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuYXNzZXREYXRhLmNsZWFyQXNzZXRzKCk7XG4gICAgdGhpcy5hc3NldHNTdG9yZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5wcmVmZXJlbmNlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc29ydFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGNvdW50VG9nZ2xlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlci5nZXQodGhpcy5zZWFyY2hDb250ZXh0LnN0YXRlLCAhdGhpcy5wcmVmZXJlbmNlcy5kaXNwbGF5RmlsdGVyQ291bnRzKS50YWtlKDEpLnN1YnNjcmliZSgpO1xuICAgIHRoaXMudXNlclByZWZlcmVuY2VzLnRvZ2dsZUZpbHRlckNvdW50KCk7XG4gIH1cblxuICBwdWJsaWMgc2hvd0Fzc2V0KGFzc2V0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hc3NldCcsIGFzc2V0LmFzc2V0SWRdKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb0NvbGxlY3Rpb24ocGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJQcmVmZXJlbmNlcy5vcGVuQ29sbGVjdGlvblRyYXkoKTtcbiAgICB0aGlzLmFjdGl2ZUNvbGxlY3Rpb24uYWRkQXNzZXQocGFyYW1zLmNvbGxlY3Rpb24uaWQsIHBhcmFtcy5hc3NldCkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRnJvbUNvbGxlY3Rpb24ocGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJQcmVmZXJlbmNlcy5vcGVuQ29sbGVjdGlvblRyYXkoKTtcbiAgICB0aGlzLmFjdGl2ZUNvbGxlY3Rpb24ucmVtb3ZlQXNzZXQocGFyYW1zKS5zdWJzY3JpYmUoKTtcblxuICB9XG5cbiAgcHVibGljIHNob3dOZXdDb2xsZWN0aW9uKGFzc2V0OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgbmV3Q29sbGVjdGlvbkJ1dHRvbiA9IDxIVE1MRm9ybUVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm9wZW4tY29sbGVjdGlvbi10cmF5Jyk7XG4gICAgKCF0aGlzLmN1cnJlbnRVc2VyLmxvZ2dlZEluKCkpID8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdXNlci9sb2dpbiddKSA6IG5ld0NvbGxlY3Rpb25CdXR0b24uY2xpY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VQYWdlKHBhZ2U6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoQ29udGV4dC51cGRhdGUgPSB7IGk6IHBhZ2UgfTtcbiAgICB0aGlzLnNlYXJjaENvbnRleHQuZ28oKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVGaWx0ZXIoZmlsdGVySWQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyLnNldCh0aGlzLmZpbHRlci50b2dnbGUoZmlsdGVySWQpKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlcihmaWx0ZXJJZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVGaWx0ZXIoZmlsdGVySWQpO1xuICAgIHRoaXMuZmlsdGVyQXNzZXRzKCk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlDdXN0b21WYWx1ZShmaWx0ZXI6IGFueSwgdmFsdWU6IGFueSkge1xuICAgIHRoaXMuZmlsdGVyLnNldCh0aGlzLmZpbHRlci5hZGRDdXN0b21WYWx1ZShmaWx0ZXIsIHZhbHVlKSk7XG4gICAgdGhpcy5maWx0ZXJBc3NldHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUV4Y2x1c2l2ZUZpbHRlcihzdWJGaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyLnNldCh0aGlzLmZpbHRlci50b2dnbGVFeGNsdXNpdmUoc3ViRmlsdGVyKSk7XG4gICAgdGhpcy5maWx0ZXJBc3NldHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcnMoKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXIuc2V0KHRoaXMuZmlsdGVyLmNsZWFyKCkpO1xuICAgIHRoaXMuZmlsdGVyQXNzZXRzKCk7XG4gIH1cblxuICBwdWJsaWMgZG93bmxvYWRDb21wKHBhcmFtczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5hc3NldERhdGEuZG93bmxvYWRDb21wKHBhcmFtcy5hc3NldElkLCBwYXJhbXMuY29tcFR5cGUpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnVybCAmJiByZXMudXJsICE9PSAnJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5jcmVhdGUoJ0NPTVBTLk5PX0NPTVAnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJBc3NldHMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hDb250ZXh0LnVwZGF0ZSA9IHsgaTogMSB9O1xuICAgIGxldCBhY3RpdmU6IGFueSA9IFtdO1xuICAgIHRoaXMuZmlsdGVyLmFjdGl2ZShhY3RpdmUpO1xuICAgIGxldCBhY3RpdmVJZHM6IGFueSA9IGFjdGl2ZS5tYXAoKGZpbHRlcjogYW55KSA9PiBmaWx0ZXIuZmlsdGVySWQpO1xuICAgIGxldCBhY3RpdmVWYWx1ZXM6IGFueSA9IGFjdGl2ZS5maWx0ZXIoKGZpbHRlcjogYW55KSA9PiBmaWx0ZXIuZmlsdGVyVmFsdWUpXG4gICAgICAubWFwKChmaWx0ZXI6IGFueSkgPT4gYCR7ZmlsdGVyLmZpbHRlcklkfToke2ZpbHRlci5maWx0ZXJWYWx1ZX1gKTs7XG4gICAgaWYgKGFjdGl2ZUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlYXJjaENvbnRleHQudXBkYXRlID0geyAnZmlsdGVySWRzJzogYWN0aXZlSWRzLmpvaW4oJywnKSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaENvbnRleHQucmVtb3ZlID0gJ2ZpbHRlcklkcyc7XG4gICAgfVxuICAgIGlmIChhY3RpdmVJZHMubGVuZ3RoID4gMCAmJiBhY3RpdmVWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZWFyY2hDb250ZXh0LnVwZGF0ZSA9IHsgJ2ZpbHRlclZhbHVlcyc6IGFjdGl2ZVZhbHVlcy5qb2luKCcsJykgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWFyY2hDb250ZXh0LnJlbW92ZSA9ICdmaWx0ZXJWYWx1ZXMnO1xuICAgIH1cbiAgICB0aGlzLnNlYXJjaENvbnRleHQuZ28oKTtcbiAgICB0aGlzLmZpbHRlci5nZXQodGhpcy5zZWFyY2hDb250ZXh0LnN0YXRlLCB0aGlzLnByZWZlcmVuY2VzLmRpc3BsYXlGaWx0ZXJDb3VudHMpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG9uU29ydFJlc3VsdHMoc29ydERlZmluaXRpb246IGFueSk6IHZvaWQge1xuICAgIHRoaXMudXNlclByZWZlcmVuY2VzLnVwZGF0ZVNvcnRQcmVmZXJlbmNlKHNvcnREZWZpbml0aW9uLmlkKTtcbiAgICB0aGlzLnNvcnREZWZpbml0aW9uLnVwZGF0ZSh7IGN1cnJlbnRTb3J0OiBzb3J0RGVmaW5pdGlvbiB9KTtcbiAgICB0aGlzLnNlYXJjaENvbnRleHQudXBkYXRlID0geyAnaSc6IDEsICdzb3J0SWQnOiBzb3J0RGVmaW5pdGlvbi5pZCB9O1xuICAgIHRoaXMuc2VhcmNoQ29udGV4dC5nbygpO1xuICB9XG5cbiAgcHVibGljIGFkZEFzc2V0VG9DYXJ0KGFzc2V0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTdW1tYXJ5LmFkZEFzc2V0VG9Qcm9qZWN0SW5DYXJ0KGFzc2V0KTtcbiAgfVxufVxuIl19
