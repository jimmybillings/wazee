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
var collections_service_1 = require('../../shared/services/collections.service');
var active_collection_service_1 = require('../../shared/services/active-collection.service');
var store_1 = require('@ngrx/store');
var router_1 = require('@angular/router');
var current_user_model_1 = require('../../shared/services/current-user.model');
var ui_config_1 = require('../../shared/services/ui.config');
var ui_state_1 = require('../../shared/services/ui.state');
var asset_service_1 = require('../../shared/services/asset.service');
var wz_notification_service_1 = require('../../shared/components/wz-notification/wz.notification.service');
var wz_toast_component_1 = require('../../shared/components/wz-toast/wz.toast.component');
var capabilities_service_1 = require('../../shared/services/capabilities.service');
var cart_summary_service_1 = require('../../shared/services/cart-summary.service');
var user_preference_service_1 = require('../../shared/services/user-preference.service');
var CollectionShowComponent = (function () {
    function CollectionShowComponent(route, userCan, router, collections, asset, activeCollection, store, currentUser, uiState, notification, uiConfig, cartSummary, userPreference) {
        this.route = route;
        this.userCan = userCan;
        this.router = router;
        this.collections = collections;
        this.asset = asset;
        this.activeCollection = activeCollection;
        this.store = store;
        this.currentUser = currentUser;
        this.uiState = uiState;
        this.notification = notification;
        this.uiConfig = uiConfig;
        this.cartSummary = cartSummary;
        this.userPreference = userPreference;
    }
    CollectionShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeCollectionSubscription = this.activeCollection.data.subscribe(function (collection) {
            _this.collection = collection;
        });
        this.routeSubscription = this.route.params.subscribe(function (params) { return _this.buildRouteParams(params); });
    };
    CollectionShowComponent.prototype.ngOnDestroy = function () {
        this.activeCollectionSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    };
    CollectionShowComponent.prototype.resetCollection = function () {
        this.collection = Object.assign({}, this.collection);
    };
    CollectionShowComponent.prototype.buildRouteParams = function (params) {
        this.routeParams = Object.assign({}, this.routeParams, params);
        delete (this.routeParams['id']);
    };
    CollectionShowComponent.prototype.removeFromCollection = function (params) {
        this.userPreference.openCollectionTray();
        this.activeCollection.removeAsset(params).subscribe();
    };
    CollectionShowComponent.prototype.changePage = function (i) {
        this.buildRouteParams({ i: i });
        this.router.navigate(['/collection/' + this.collection.id, this.routeParams]);
    };
    CollectionShowComponent.prototype.downloadComp = function (params) {
        var _this = this;
        this.asset.downloadComp(params.assetId, params.compType).subscribe(function (res) {
            if (res.url && res.url !== '') {
                window.location.href = res.url;
            }
            else {
                _this.notification.create('COMPS.NO_COMP');
            }
        });
    };
    CollectionShowComponent.prototype.deleteCollection = function (id) {
        var _this = this;
        this.collections.delete(id).subscribe(function (response) {
            _this.router.navigate(['/collections']).then(function () {
                _this.wzToast.show();
            });
        });
    };
    CollectionShowComponent.prototype.addAssetToCart = function (asset) {
        this.cartSummary.addAssetToProjectInCart(asset);
    };
    __decorate([
        core_1.ViewChild(wz_toast_component_1.WzToastComponent), 
        __metadata('design:type', wz_toast_component_1.WzToastComponent)
    ], CollectionShowComponent.prototype, "wzToast", void 0);
    CollectionShowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'collection-show',
            templateUrl: 'collection-show.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, capabilities_service_1.Capabilities, router_1.Router, collections_service_1.CollectionsService, asset_service_1.AssetService, active_collection_service_1.ActiveCollectionService, store_1.Store, current_user_model_1.CurrentUser, ui_state_1.UiState, wz_notification_service_1.WzNotificationService, ui_config_1.UiConfig, cart_summary_service_1.CartSummaryService, user_preference_service_1.UserPreferenceService])
    ], CollectionShowComponent);
    return CollectionShowComponent;
}());
exports.CollectionShowComponent = CollectionShowComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29sbGVjdGlvbi8rc2hvdy9jb2xsZWN0aW9uLXNob3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFFeEUsb0NBQW1DLDJDQUEyQyxDQUFDLENBQUE7QUFDL0UsMENBQXdDLGlEQUFpRCxDQUFDLENBQUE7QUFFMUYsc0JBQXNCLGFBQWEsQ0FBQyxDQUFBO0FBQ3BDLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELG1DQUE0QiwwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3ZFLDBCQUF5QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzNELHlCQUF3QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3pELDhCQUE2QixxQ0FBcUMsQ0FBQyxDQUFBO0FBQ25FLHdDQUFzQyxpRUFBaUUsQ0FBQyxDQUFBO0FBQ3hHLG1DQUFpQyxxREFBcUQsQ0FBQyxDQUFBO0FBQ3ZGLHFDQUE2Qiw0Q0FBNEMsQ0FBQyxDQUFBO0FBQzFFLHFDQUFtQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQ2hGLHdDQUFzQywrQ0FBK0MsQ0FBQyxDQUFBO0FBU3RGO0lBV0UsaUNBQ1UsS0FBcUIsRUFDdEIsT0FBcUIsRUFDckIsTUFBYyxFQUNkLFdBQStCLEVBQy9CLEtBQW1CLEVBQ25CLGdCQUF5QyxFQUN6QyxLQUE2QixFQUM3QixXQUF3QixFQUN4QixPQUFnQixFQUNoQixZQUFtQyxFQUNuQyxRQUFrQixFQUNsQixXQUErQixFQUMvQixjQUFxQztRQVpwQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLFVBQUssR0FBTCxLQUFLLENBQXdCO1FBQzdCLGdCQUFXLEdBQVgs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LENBQUMsSUFBSSxDQUFDO2dCQUMxQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sZ0RBQWMsR0FBckIsVUFBc0IsS0FBVTtRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFwRUQ7UUFBQyxnQkFBUyxDQUFDLHFDQUFnQixDQUFDOzs0REFBQTtJQWhCOUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDOzsrQkFBQTtJQWlGRiw4QkFBQztBQUFELENBOUVBLEFBOEVDLElBQUE7QUE5RVksK0JBQXVCLDBCQThFbkMsQ0FBQSIsImZpbGUiOiJhcHAvK2NvbGxlY3Rpb24vK3Nob3cvY29sbGVjdGlvbi1zaG93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgQ29sbGVjdGlvblN0b3JlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvY29sbGVjdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NvbGxlY3Rpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZlQ29sbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYWN0aXZlLWNvbGxlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgVWlDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdWkuY29uZmlnJztcbmltcG9ydCB7IFVpU3RhdGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdWkuc3RhdGUnO1xuaW1wb3J0IHsgQXNzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2Fzc2V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgV3pOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvd3otbm90aWZpY2F0aW9uL3d6Lm5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFd6VG9hc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy93ei10b2FzdC93ei50b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FwYWJpbGl0aWVzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NhcGFiaWxpdGllcy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRTdW1tYXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jYXJ0LXN1bW1hcnkuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyUHJlZmVyZW5jZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci1wcmVmZXJlbmNlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjb2xsZWN0aW9uLXNob3cnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbGxlY3Rpb24tc2hvdy5odG1sJyxcbn0pXG5cblxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25TaG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgZm9jdXNlZENvbGxlY3Rpb246IENvbGxlY3Rpb247XG4gIHB1YmxpYyBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uO1xuICBwdWJsaWMgYXNzZXRzOiBhbnk7XG4gIHB1YmxpYyByb3V0ZVBhcmFtczogYW55O1xuICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHB1YmxpYyBjb25maWc6IE9iamVjdDtcbiAgcHJpdmF0ZSBhY3RpdmVDb2xsZWN0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcm91dGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgQFZpZXdDaGlsZChXelRvYXN0Q29tcG9uZW50KSBwcml2YXRlIHd6VG9hc3Q6IFd6VG9hc3RDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIHVzZXJDYW46IENhcGFiaWxpdGllcyxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGNvbGxlY3Rpb25zOiBDb2xsZWN0aW9uc1NlcnZpY2UsXG4gICAgcHVibGljIGFzc2V0OiBBc3NldFNlcnZpY2UsXG4gICAgcHVibGljIGFjdGl2ZUNvbGxlY3Rpb246IEFjdGl2ZUNvbGxlY3Rpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyBzdG9yZTogU3RvcmU8Q29sbGVjdGlvblN0b3JlPixcbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLFxuICAgIHB1YmxpYyB1aVN0YXRlOiBVaVN0YXRlLFxuICAgIHB1YmxpYyBub3RpZmljYXRpb246IFd6Tm90aWZpY2F0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgdWlDb25maWc6IFVpQ29uZmlnLFxuICAgIHB1YmxpYyBjYXJ0U3VtbWFyeTogQ2FydFN1bW1hcnlTZXJ2aWNlLFxuICAgIHB1YmxpYyB1c2VyUHJlZmVyZW5jZTogVXNlclByZWZlcmVuY2VTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2ZUNvbGxlY3Rpb25TdWJzY3JpcHRpb24gPSB0aGlzLmFjdGl2ZUNvbGxlY3Rpb24uZGF0YS5zdWJzY3JpYmUoY29sbGVjdGlvbiA9PiB7XG4gICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgIH0pO1xuICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuYnVpbGRSb3V0ZVBhcmFtcyhwYXJhbXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYWN0aXZlQ29sbGVjdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucm91dGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldENvbGxlY3Rpb24oKSB7XG4gICAgdGhpcy5jb2xsZWN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb2xsZWN0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZFJvdXRlUGFyYW1zKHBhcmFtczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZVBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucm91dGVQYXJhbXMsIHBhcmFtcyk7XG4gICAgZGVsZXRlICh0aGlzLnJvdXRlUGFyYW1zWydpZCddKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVGcm9tQ29sbGVjdGlvbihwYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudXNlclByZWZlcmVuY2Uub3BlbkNvbGxlY3Rpb25UcmF5KCk7XG4gICAgdGhpcy5hY3RpdmVDb2xsZWN0aW9uLnJlbW92ZUFzc2V0KHBhcmFtcykuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlUGFnZShpOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkUm91dGVQYXJhbXMoeyBpIH0pO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvbGxlY3Rpb24vJyArIHRoaXMuY29sbGVjdGlvbi5pZCwgdGhpcy5yb3V0ZVBhcmFtc10pO1xuICB9XG5cbiAgcHVibGljIGRvd25sb2FkQ29tcChwYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYXNzZXQuZG93bmxvYWRDb21wKHBhcmFtcy5hc3NldElkLCBwYXJhbXMuY29tcFR5cGUpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnVybCAmJiByZXMudXJsICE9PSAnJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5jcmVhdGUoJ0NPTVBTLk5PX0NPTVAnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVDb2xsZWN0aW9uKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25zLmRlbGV0ZShpZCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NvbGxlY3Rpb25zJ10pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnd6VG9hc3Quc2hvdygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYWRkQXNzZXRUb0NhcnQoYXNzZXQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFN1bW1hcnkuYWRkQXNzZXRUb1Byb2plY3RJbkNhcnQoYXNzZXQpO1xuICB9XG59XG4iXX0=
