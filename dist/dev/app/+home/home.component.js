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
var ui_config_1 = require('../shared/services/ui.config');
var search_context_service_1 = require('../shared/services/search-context.service');
var ui_state_1 = require('../shared/services/ui.state');
var filter_service_1 = require('../shared/services/filter.service');
var user_preference_service_1 = require('../shared/services/user-preference.service');
var HomeComponent = (function () {
    function HomeComponent(currentUser, uiState, uiConfig, searchContext, userPreference, filter) {
        this.currentUser = currentUser;
        this.uiState = uiState;
        this.uiConfig = uiConfig;
        this.searchContext = searchContext;
        this.userPreference = userPreference;
        this.filter = filter;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configSubscription = this.uiConfig.get('home').subscribe(function (config) {
            _this.config = config.config;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.configSubscription.unsubscribe();
    };
    HomeComponent.prototype.newSearchContext = function (query) {
        var searchContext = { q: query, i: 1, n: this.config.pageSize.value, sortId: this.userPreference.state.sortId };
        this.filter.set(this.filter.clear());
        this.searchContext.new(searchContext);
    };
    HomeComponent.prototype.buildSearchContext = function (context) {
        context = JSON.parse(context);
        for (var param in context) {
            if (context[param] === '')
                delete (context[param]);
        }
        return context;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home-component',
            templateUrl: 'home.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, ui_state_1.UiState, ui_config_1.UiConfig, search_context_service_1.SearchContext, user_preference_service_1.UserPreferenceService, filter_service_1.FilterService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNFLGVBQWUsQ0FBQyxDQUFBO0FBQ3RGLG1DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3BFLDBCQUF5Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3hELHVDQUE4QiwyQ0FBMkMsQ0FBQyxDQUFBO0FBRTFFLHlCQUF3Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3RELCtCQUE4QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2xFLHdDQUFzQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBU25GO0lBSUUsdUJBQ1MsV0FBd0IsRUFDeEIsT0FBZ0IsRUFDZixRQUFrQixFQUNsQixhQUE0QixFQUM1QixjQUFxQyxFQUNyQyxNQUFxQjtRQUx0QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFJLENBQUM7SUFFcEMsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDbkUsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLHdDQUFnQixHQUF2QixVQUF3QixLQUFVO1FBQ2hDLElBQUksYUFBYSxHQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JILElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sMENBQWtCLEdBQXpCLFVBQTBCLE9BQVk7UUFDcEMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBekNIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7O3FCQUFBO0lBcUNGLG9CQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtBQW5DWSxxQkFBYSxnQkFtQ3pCLENBQUEiLCJmaWxlIjoiYXBwLytob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBVaUNvbmZpZyB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9zZWFyY2gtY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgVWlTdGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5zdGF0ZSc7XG5pbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2ZpbHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJQcmVmZXJlbmNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLXByZWZlcmVuY2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2hvbWUtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBjb25maWc6IGFueTtcbiAgcHJpdmF0ZSBjb25maWdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLFxuICAgIHB1YmxpYyB1aVN0YXRlOiBVaVN0YXRlLFxuICAgIHByaXZhdGUgdWlDb25maWc6IFVpQ29uZmlnLFxuICAgIHByaXZhdGUgc2VhcmNoQ29udGV4dDogU2VhcmNoQ29udGV4dCxcbiAgICBwcml2YXRlIHVzZXJQcmVmZXJlbmNlOiBVc2VyUHJlZmVyZW5jZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmaWx0ZXI6IEZpbHRlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uID0gdGhpcy51aUNvbmZpZy5nZXQoJ2hvbWUnKS5zdWJzY3JpYmUoKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5jb25maWcgPSBjb25maWcuY29uZmlnO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jb25maWdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZXdTZWFyY2hDb250ZXh0KHF1ZXJ5OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgc2VhcmNoQ29udGV4dDogYW55ID0geyBxOiBxdWVyeSwgaTogMSwgbjogdGhpcy5jb25maWcucGFnZVNpemUudmFsdWUsIHNvcnRJZDogdGhpcy51c2VyUHJlZmVyZW5jZS5zdGF0ZS5zb3J0SWQgfTtcbiAgICB0aGlzLmZpbHRlci5zZXQodGhpcy5maWx0ZXIuY2xlYXIoKSk7XG4gICAgdGhpcy5zZWFyY2hDb250ZXh0Lm5ldyhzZWFyY2hDb250ZXh0KTtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZFNlYXJjaENvbnRleHQoY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb250ZXh0ID0gSlNPTi5wYXJzZShjb250ZXh0KTtcbiAgICBmb3IgKGxldCBwYXJhbSBpbiBjb250ZXh0KSB7XG4gICAgICBpZiAoY29udGV4dFtwYXJhbV0gPT09ICcnKSBkZWxldGUgKGNvbnRleHRbcGFyYW1dKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbn1cbiJdfQ==
