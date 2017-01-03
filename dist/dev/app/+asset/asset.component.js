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
var current_user_model_1 = require('../shared/services/current-user.model');
var asset_service_1 = require('../shared/services/asset.service');
var active_collection_service_1 = require('../shared/services/active-collection.service');
var ui_config_1 = require('../shared/services/ui.config');
var capabilities_service_1 = require('../shared/services/capabilities.service');
var wz_notification_service_1 = require('../shared/components/wz-notification/wz.notification.service');
var cart_summary_service_1 = require('../shared/services/cart-summary.service');
var user_preference_service_1 = require('../shared/services/user-preference.service');
var search_context_service_1 = require('../shared/services/search-context.service');
var ui_state_1 = require('../shared/services/ui.state');
var AssetComponent = (function () {
    function AssetComponent(currentUser, userCan, activeCollection, searchContext, uiState, userPreference, assetService, uiConfig, notification, cartSummary, window) {
        this.currentUser = currentUser;
        this.userCan = userCan;
        this.activeCollection = activeCollection;
        this.searchContext = searchContext;
        this.uiState = uiState;
        this.userPreference = userPreference;
        this.assetService = assetService;
        this.uiConfig = uiConfig;
        this.notification = notification;
        this.cartSummary = cartSummary;
        this.window = window;
        this.pageSize = 50;
    }
    AssetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uiConfig.get('global').take(1).subscribe(function (config) {
            _this.pageSize = config.config.pageSize.value;
        });
    };
    AssetComponent.prototype.addToCollection = function (params) {
        this.userPreference.openCollectionTray();
        this.activeCollection.addAsset(params.collection.id, params.asset).subscribe();
    };
    AssetComponent.prototype.removeFromCollection = function (params) {
        this.userPreference.openCollectionTray();
        this.activeCollection.removeAsset(params).subscribe();
    };
    AssetComponent.prototype.downloadComp = function (params) {
        var _this = this;
        this.assetService.downloadComp(params.assetId, params.compType).subscribe(function (res) {
            if (res.url && res.url !== '') {
                _this.window.location.href = res.url;
            }
            else {
                _this.notification.create('COMPS.NO_COMP');
            }
        });
    };
    AssetComponent.prototype.addAssetToCart = function (asset) {
        this.cartSummary.addAssetToProjectInCart(asset.assetId, asset.selectedTranscodeTarget);
    };
    AssetComponent.prototype.onCalculatePrice = function (event) {
        this.assetService.getPrice(event.assetId, event.attributes).take(1).subscribe();
    };
    AssetComponent.prototype.onCalculatePriceError = function () {
        this.notification.create('PRICING.ERROR');
    };
    AssetComponent.prototype.getPricingAttributes = function (rightsReproduction) {
        this.assetService.getPriceAttributes(rightsReproduction);
    };
    AssetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'asset-component',
            templateUrl: 'asset.html'
        }), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, capabilities_service_1.Capabilities, active_collection_service_1.ActiveCollectionService, search_context_service_1.SearchContext, ui_state_1.UiState, user_preference_service_1.UserPreferenceService, asset_service_1.AssetService, ui_config_1.UiConfig, wz_notification_service_1.WzNotificationService, cart_summary_service_1.CartSummaryService, Window])
    ], AssetComponent);
    return AssetComponent;
}());
exports.AssetComponent = AssetComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXNzZXQvYXNzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsbUNBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsOEJBQTRCLGtDQUFrQyxDQUFDLENBQUE7QUFDL0QsMENBQXdDLDhDQUE4QyxDQUFDLENBQUE7QUFDdkYsMEJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQscUNBQTZCLHlDQUF5QyxDQUFDLENBQUE7QUFDdkUsd0NBQXNDLDhEQUE4RCxDQUFDLENBQUE7QUFDckcscUNBQW1DLHlDQUF5QyxDQUFDLENBQUE7QUFDN0Usd0NBQXNDLDRDQUE0QyxDQUFDLENBQUE7QUFDbkYsdUNBQThCLDJDQUEyQyxDQUFDLENBQUE7QUFDMUUseUJBQXdCLDZCQUE2QixDQUFDLENBQUE7QUFRdEQ7SUFHRSx3QkFDUyxXQUF3QixFQUN4QixPQUFxQixFQUNyQixnQkFBeUMsRUFDekMsYUFBNEIsRUFDNUIsT0FBZ0IsRUFDZixjQUFxQyxFQUNyQyxZQUEwQixFQUMxQixRQUFrQixFQUNsQixZQUFtQyxFQUNuQyxXQUErQixFQUMvQixNQUFjO1FBVmYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDZixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBdUI7UUFDbkMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFiaEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQWM5QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sd0NBQWUsR0FBdEIsVUFBdUIsTUFBVztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakYsQ0FBQztJQUVNLDZDQUFvQixHQUEzQixVQUE0QixNQUFXO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFFTSxxQ0FBWSxHQUFuQixVQUFvQixNQUFXO1FBQS9CLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUM1RSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDdEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBYyxHQUFyQixVQUFzQixLQUFVO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU0seUNBQWdCLEdBQXZCLFVBQXdCLEtBQVU7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xGLENBQUM7SUFFTSw4Q0FBcUIsR0FBNUI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sNkNBQW9CLEdBQTNCLFVBQTRCLGtCQUEwQjtRQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQS9ESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsWUFBWTtTQUMxQixDQUFDOztzQkFBQTtJQTRERixxQkFBQztBQUFELENBMURBLEFBMERDLElBQUE7QUExRFksc0JBQWMsaUJBMEQxQixDQUFBIiwiZmlsZSI6ImFwcC8rYXNzZXQvYXNzZXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hc3NldC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2ZUNvbGxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2FjdGl2ZS1jb2xsZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVWlDb25maWcgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvdWkuY29uZmlnJztcbmltcG9ydCB7IENhcGFiaWxpdGllcyB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jYXBhYmlsaXRpZXMuc2VydmljZSc7XG5pbXBvcnQgeyBXek5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy93ei1ub3RpZmljYXRpb24vd3oubm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFN1bW1hcnlTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2NhcnQtc3VtbWFyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJQcmVmZXJlbmNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLXByZWZlcmVuY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NlYXJjaC1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVWlTdGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5zdGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Fzc2V0LWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnYXNzZXQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBc3NldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgcGFnZVNpemU6IG51bWJlciA9IDUwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjdXJyZW50VXNlcjogQ3VycmVudFVzZXIsXG4gICAgcHVibGljIHVzZXJDYW46IENhcGFiaWxpdGllcyxcbiAgICBwdWJsaWMgYWN0aXZlQ29sbGVjdGlvbjogQWN0aXZlQ29sbGVjdGlvblNlcnZpY2UsXG4gICAgcHVibGljIHNlYXJjaENvbnRleHQ6IFNlYXJjaENvbnRleHQsXG4gICAgcHVibGljIHVpU3RhdGU6IFVpU3RhdGUsXG4gICAgcHJpdmF0ZSB1c2VyUHJlZmVyZW5jZTogVXNlclByZWZlcmVuY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1aUNvbmZpZzogVWlDb25maWcsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb246IFd6Tm90aWZpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRTdW1tYXJ5OiBDYXJ0U3VtbWFyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB3aW5kb3c6IFdpbmRvdykge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51aUNvbmZpZy5nZXQoJ2dsb2JhbCcpLnRha2UoMSkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XG4gICAgICB0aGlzLnBhZ2VTaXplID0gY29uZmlnLmNvbmZpZy5wYWdlU2l6ZS52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb0NvbGxlY3Rpb24ocGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJQcmVmZXJlbmNlLm9wZW5Db2xsZWN0aW9uVHJheSgpO1xuICAgIHRoaXMuYWN0aXZlQ29sbGVjdGlvbi5hZGRBc3NldChwYXJhbXMuY29sbGVjdGlvbi5pZCwgcGFyYW1zLmFzc2V0KS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVGcm9tQ29sbGVjdGlvbihwYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudXNlclByZWZlcmVuY2Uub3BlbkNvbGxlY3Rpb25UcmF5KCk7XG4gICAgdGhpcy5hY3RpdmVDb2xsZWN0aW9uLnJlbW92ZUFzc2V0KHBhcmFtcykuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZG93bmxvYWRDb21wKHBhcmFtczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5hc3NldFNlcnZpY2UuZG93bmxvYWRDb21wKHBhcmFtcy5hc3NldElkLCBwYXJhbXMuY29tcFR5cGUpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnVybCAmJiByZXMudXJsICE9PSAnJykge1xuICAgICAgICB0aGlzLndpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLnVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmNyZWF0ZSgnQ09NUFMuTk9fQ09NUCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFkZEFzc2V0VG9DYXJ0KGFzc2V0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTdW1tYXJ5LmFkZEFzc2V0VG9Qcm9qZWN0SW5DYXJ0KGFzc2V0LmFzc2V0SWQsIGFzc2V0LnNlbGVjdGVkVHJhbnNjb2RlVGFyZ2V0KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNhbGN1bGF0ZVByaWNlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmFzc2V0U2VydmljZS5nZXRQcmljZShldmVudC5hc3NldElkLCBldmVudC5hdHRyaWJ1dGVzKS50YWtlKDEpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG9uQ2FsY3VsYXRlUHJpY2VFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi5jcmVhdGUoJ1BSSUNJTkcuRVJST1InKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcmljaW5nQXR0cmlidXRlcyhyaWdodHNSZXByb2R1Y3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYXNzZXRTZXJ2aWNlLmdldFByaWNlQXR0cmlidXRlcyhyaWdodHNSZXByb2R1Y3Rpb24pO1xuICB9XG59XG4iXX0=
