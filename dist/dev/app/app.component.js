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
var multilingual_service_1 = require('./shared/services/multilingual.service');
var current_user_model_1 = require('./shared/services/current-user.model');
var api_config_1 = require('./shared/services/api.config');
var ui_config_1 = require('./shared/services/ui.config');
var search_context_service_1 = require('./shared/services/search-context.service');
var authentication_data_service_1 = require('./shared/services/authentication.data.service');
var filter_service_1 = require('./shared/services/filter.service');
var sort_definitions_service_1 = require('./shared/services/sort-definitions.service');
var collections_service_1 = require('./shared/services/collections.service');
var ui_state_1 = require('./shared/services/ui.state');
var wz_notification_service_1 = require('./shared/components/wz-notification/wz.notification.service');
var active_collection_service_1 = require('./shared/services/active-collection.service');
var cart_summary_service_1 = require('./shared/services/cart-summary.service');
var user_preference_service_1 = require('./shared/services/user-preference.service');
var capabilities_service_1 = require('./shared/services/capabilities.service');
var error_service_1 = require('./shared/services/error.service');
var AppComponent = (function () {
    function AppComponent(uiConfig, router, multiLingual, searchContext, currentUser, collections, activeCollection, uiState, userPreference, renderer, notification, apiConfig, authentication, userCan, cartSummary, error, window, filter, sortDefinition) {
        this.uiConfig = uiConfig;
        this.router = router;
        this.multiLingual = multiLingual;
        this.searchContext = searchContext;
        this.currentUser = currentUser;
        this.collections = collections;
        this.activeCollection = activeCollection;
        this.uiState = uiState;
        this.userPreference = userPreference;
        this.renderer = renderer;
        this.notification = notification;
        this.apiConfig = apiConfig;
        this.authentication = authentication;
        this.userCan = userCan;
        this.cartSummary = cartSummary;
        this.error = error;
        this.window = window;
        this.filter = filter;
        this.sortDefinition = sortDefinition;
        this.supportedLanguages = multilingual_service_1.MultilingualService.SUPPORTED_LANGUAGES;
        this.state = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiConfig.setPortal(portal);
        this.currentUser.set();
        this.renderer.listenGlobal('document', 'scroll', function () { return _this.uiState.showFixedHeader(_this.window.pageYOffset); });
        this.uiConfig.initialize(this.currentUser.loggedIn(), this.apiConfig.getPortal()).subscribe();
        this.routerChanges();
        this.processUser();
        this.notification.initialize(this.target);
    };
    AppComponent.prototype.logout = function () {
        this.authentication.destroy().subscribe();
        this.currentUser.destroy();
    };
    AppComponent.prototype.changeLang = function (data) {
        this.multiLingual.setLanguage(data);
    };
    AppComponent.prototype.newSearchContext = function (query) {
        var searchConext = Object.assign({}, this.searchContext.state, { q: query, i: 1, n: 100 });
        this.filter.get(searchConext, this.userPreference.state.displayFilterCounts).subscribe();
        this.searchContext.new(searchConext);
    };
    AppComponent.prototype.toggleFilterTreePreference = function () {
        this.userPreference.toggleFilterTree();
    };
    AppComponent.prototype.routerChanges = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (event) {
            _this.uiState.checkRouteForSearchBar(event.url);
            _this.uiState.checkForFilters(event.url);
            _this.state = event.url;
            _this.window.scrollTo(0, 0);
            _this.notification.check(_this.state);
        });
    };
    AppComponent.prototype.processUser = function () {
        var _this = this;
        this.bootStrapUserDataSubscription = this.currentUser.loggedInState()
            .subscribe(function (loggedIn) { return (loggedIn) ? _this.processLoggedInUser() : _this.processLoggedOutUser(); });
    };
    AppComponent.prototype.processLoggedInUser = function () {
        var _this = this;
        this.userPreference.getPrefs();
        if (this.userCan.viewCollections()) {
            this.activeCollection.load().subscribe();
            this.collections.load();
        }
        this.cartSummary.loadCartSummary();
        this.sortDefinition.getSortDefinitions().take(1).subscribe(function (data) {
            _this.userPreference.updateSortPreference(data.currentSort.id);
        });
    };
    AppComponent.prototype.processLoggedOutUser = function () {
        var _this = this;
        this.userPreference.reset();
        this.collections.destroyAll();
        this.uiState.reset();
        this.sortDefinition.getSortDefinitions().take(1).subscribe(function (data) {
            _this.userPreference.updateSortPreference(data.currentSort.id);
        });
    };
    __decorate([
        core_1.ViewChild('target', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "target", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wazee-digital-platform',
            templateUrl: 'app.html',
            providers: [wz_notification_service_1.WzNotificationService]
        }), 
        __metadata('design:paramtypes', [ui_config_1.UiConfig, router_1.Router, multilingual_service_1.MultilingualService, search_context_service_1.SearchContext, current_user_model_1.CurrentUser, collections_service_1.CollectionsService, active_collection_service_1.ActiveCollectionService, ui_state_1.UiState, user_preference_service_1.UserPreferenceService, core_1.Renderer, wz_notification_service_1.WzNotificationService, api_config_1.ApiConfig, authentication_data_service_1.Authentication, capabilities_service_1.Capabilities, cart_summary_service_1.CartSummaryService, error_service_1.ErrorActions, Window, filter_service_1.FilterService, sort_definitions_service_1.SortDefinitionsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO1lBQ25FLEtBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywyQ0FBb0IsR0FBNUI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUztZQUNuRSxLQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBeEZEO1FBQUMsZ0JBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWdCLEVBQUUsQ0FBQzs7Z0RBQUE7SUFYbEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsV0FBVyxFQUFFLFVBQVU7WUFDdkIsU0FBUyxFQUFFLENBQUMsK0NBQXFCLENBQUM7U0FDbkMsQ0FBQzs7b0JBQUE7SUErRkYsbUJBQUM7QUFBRCxDQTdGQSxBQTZGQyxJQUFBO0FBN0ZZLG9CQUFZLGVBNkZ4QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFJlbmRlcmVyLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzUmVjb2duaXplZCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IE11bHRpbGluZ3VhbFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy9tdWx0aWxpbmd1YWwuc2VydmljZSc7XG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgQXBpQ29uZmlnIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvYXBpLmNvbmZpZyc7XG5pbXBvcnQgeyBVaUNvbmZpZyB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL3VpLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvc2VhcmNoLWNvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLmRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydERlZmluaXRpb25zU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL3NvcnQtZGVmaW5pdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFVpU3RhdGUgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy91aS5zdGF0ZSc7XG5pbXBvcnQgeyBXek5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9jb21wb25lbnRzL3d6LW5vdGlmaWNhdGlvbi93ei5ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDb2xsZWN0aW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL2FjdGl2ZS1jb2xsZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFN1bW1hcnlTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvY2FydC1zdW1tYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclByZWZlcmVuY2VTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvdXNlci1wcmVmZXJlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FwYWJpbGl0aWVzIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvY2FwYWJpbGl0aWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXJyb3JBY3Rpb25zIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvZXJyb3Iuc2VydmljZSc7XG5cbi8vIC9JbnRlcmZhY2VzXG5pbXBvcnQgeyBJTGFuZyB9IGZyb20gJy4vc2hhcmVkL2ludGVyZmFjZXMvbGFuZ3VhZ2UuaW50ZXJmYWNlJztcblxuZGVjbGFyZSB2YXIgcG9ydGFsOiBzdHJpbmc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3dhemVlLWRpZ2l0YWwtcGxhdGZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbV3pOb3RpZmljYXRpb25TZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBzdXBwb3J0ZWRMYW5ndWFnZXM6IEFycmF5PElMYW5nPiA9IE11bHRpbGluZ3VhbFNlcnZpY2UuU1VQUE9SVEVEX0xBTkdVQUdFUztcbiAgcHVibGljIHN0YXRlOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBib290U3RyYXBVc2VyRGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBAVmlld0NoaWxkKCd0YXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgcHJpdmF0ZSB0YXJnZXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdWlDb25maWc6IFVpQ29uZmlnLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgbXVsdGlMaW5ndWFsOiBNdWx0aWxpbmd1YWxTZXJ2aWNlLFxuICAgIHB1YmxpYyBzZWFyY2hDb250ZXh0OiBTZWFyY2hDb250ZXh0LFxuICAgIHB1YmxpYyBjdXJyZW50VXNlcjogQ3VycmVudFVzZXIsXG4gICAgcHVibGljIGNvbGxlY3Rpb25zOiBDb2xsZWN0aW9uc1NlcnZpY2UsXG4gICAgcHVibGljIGFjdGl2ZUNvbGxlY3Rpb246IEFjdGl2ZUNvbGxlY3Rpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyB1aVN0YXRlOiBVaVN0YXRlLFxuICAgIHB1YmxpYyB1c2VyUHJlZmVyZW5jZTogVXNlclByZWZlcmVuY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uOiBXek5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcGlDb25maWc6IEFwaUNvbmZpZyxcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uOiBBdXRoZW50aWNhdGlvbixcbiAgICBwcml2YXRlIHVzZXJDYW46IENhcGFiaWxpdGllcyxcbiAgICBwcml2YXRlIGNhcnRTdW1tYXJ5OiBDYXJ0U3VtbWFyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvcjogRXJyb3JBY3Rpb25zLFxuICAgIHByaXZhdGUgd2luZG93OiBXaW5kb3csXG4gICAgcHJpdmF0ZSBmaWx0ZXI6IEZpbHRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzb3J0RGVmaW5pdGlvbjogU29ydERlZmluaXRpb25zU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlDb25maWcuc2V0UG9ydGFsKHBvcnRhbCk7XG4gICAgdGhpcy5jdXJyZW50VXNlci5zZXQoKTtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnZG9jdW1lbnQnLCAnc2Nyb2xsJywgKCkgPT4gdGhpcy51aVN0YXRlLnNob3dGaXhlZEhlYWRlcih0aGlzLndpbmRvdy5wYWdlWU9mZnNldCkpO1xuICAgIHRoaXMudWlDb25maWcuaW5pdGlhbGl6ZSh0aGlzLmN1cnJlbnRVc2VyLmxvZ2dlZEluKCksIHRoaXMuYXBpQ29uZmlnLmdldFBvcnRhbCgpKS5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJvdXRlckNoYW5nZXMoKTtcbiAgICB0aGlzLnByb2Nlc3NVc2VyKCk7XG4gICAgdGhpcy5ub3RpZmljYXRpb24uaW5pdGlhbGl6ZSh0aGlzLnRhcmdldCk7XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aGVudGljYXRpb24uZGVzdHJveSgpLnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY3VycmVudFVzZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZUxhbmcoZGF0YTogYW55KSB7XG4gICAgdGhpcy5tdWx0aUxpbmd1YWwuc2V0TGFuZ3VhZ2UoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgbmV3U2VhcmNoQ29udGV4dChxdWVyeTogYW55KSB7XG4gICAgbGV0IHNlYXJjaENvbmV4dDogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZWFyY2hDb250ZXh0LnN0YXRlLCB7IHE6IHF1ZXJ5LCBpOiAxLCBuOiAxMDAgfSk7XG4gICAgdGhpcy5maWx0ZXIuZ2V0KHNlYXJjaENvbmV4dCwgdGhpcy51c2VyUHJlZmVyZW5jZS5zdGF0ZS5kaXNwbGF5RmlsdGVyQ291bnRzKS5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNlYXJjaENvbnRleHQubmV3KHNlYXJjaENvbmV4dCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRmlsdGVyVHJlZVByZWZlcmVuY2UoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyUHJlZmVyZW5jZS50b2dnbGVGaWx0ZXJUcmVlKCk7XG4gIH1cblxuICBwcml2YXRlIHJvdXRlckNoYW5nZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAuZmlsdGVyKChldmVudDogUm91dGVzUmVjb2duaXplZCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcbiAgICAgICAgdGhpcy51aVN0YXRlLmNoZWNrUm91dGVGb3JTZWFyY2hCYXIoZXZlbnQudXJsKTtcbiAgICAgICAgdGhpcy51aVN0YXRlLmNoZWNrRm9yRmlsdGVycyhldmVudC51cmwpO1xuICAgICAgICB0aGlzLnN0YXRlID0gZXZlbnQudXJsO1xuICAgICAgICB0aGlzLndpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uY2hlY2sodGhpcy5zdGF0ZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc1VzZXIoKSB7XG4gICAgdGhpcy5ib290U3RyYXBVc2VyRGF0YVN1YnNjcmlwdGlvbiA9IHRoaXMuY3VycmVudFVzZXIubG9nZ2VkSW5TdGF0ZSgpXG4gICAgICAuc3Vic2NyaWJlKChsb2dnZWRJbjogYm9vbGVhbikgPT4gKGxvZ2dlZEluKSA/IHRoaXMucHJvY2Vzc0xvZ2dlZEluVXNlcigpIDogdGhpcy5wcm9jZXNzTG9nZ2VkT3V0VXNlcigpKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0xvZ2dlZEluVXNlcigpIHtcbiAgICB0aGlzLnVzZXJQcmVmZXJlbmNlLmdldFByZWZzKCk7XG4gICAgaWYgKHRoaXMudXNlckNhbi52aWV3Q29sbGVjdGlvbnMoKSkge1xuICAgICAgdGhpcy5hY3RpdmVDb2xsZWN0aW9uLmxvYWQoKS5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMubG9hZCgpO1xuICAgIH1cbiAgICB0aGlzLmNhcnRTdW1tYXJ5LmxvYWRDYXJ0U3VtbWFyeSgpO1xuICAgIHRoaXMuc29ydERlZmluaXRpb24uZ2V0U29ydERlZmluaXRpb25zKCkudGFrZSgxKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy51c2VyUHJlZmVyZW5jZS51cGRhdGVTb3J0UHJlZmVyZW5jZShkYXRhLmN1cnJlbnRTb3J0LmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0xvZ2dlZE91dFVzZXIoKSB7XG4gICAgdGhpcy51c2VyUHJlZmVyZW5jZS5yZXNldCgpO1xuICAgIHRoaXMuY29sbGVjdGlvbnMuZGVzdHJveUFsbCgpO1xuICAgIHRoaXMudWlTdGF0ZS5yZXNldCgpO1xuICAgIHRoaXMuc29ydERlZmluaXRpb24uZ2V0U29ydERlZmluaXRpb25zKCkudGFrZSgxKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy51c2VyUHJlZmVyZW5jZS51cGRhdGVTb3J0UHJlZmVyZW5jZShkYXRhLmN1cnJlbnRTb3J0LmlkKTtcbiAgICB9KTtcbiAgfVxufVxuIl19
