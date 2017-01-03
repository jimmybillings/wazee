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
var http_1 = require('@angular/http');
var error_service_1 = require('./error.service');
var api_config_1 = require('./api.config');
var api_interface_1 = require('../interfaces/api.interface');
var ui_state_1 = require('./ui.state');
var current_user_model_1 = require('./current-user.model');
var ApiService = (function () {
    function ApiService(http, error, apiConfig, uiState, currentUser) {
        this.http = http;
        this.error = error;
        this.apiConfig = apiConfig;
        this.uiState = uiState;
        this.currentUser = currentUser;
    }
    ApiService.prototype.get = function (api, endpoint, options) {
        if (options === void 0) { options = {}; }
        return this.call(http_1.RequestMethod.Get, api, endpoint, options);
    };
    ApiService.prototype.post = function (api, endpoint, options) {
        if (options === void 0) { options = {}; }
        return this.call(http_1.RequestMethod.Post, api, endpoint, options);
    };
    ApiService.prototype.put = function (api, endpoint, options) {
        if (options === void 0) { options = {}; }
        return this.call(http_1.RequestMethod.Put, api, endpoint, options);
    };
    ApiService.prototype.delete = function (api, endpoint, options) {
        if (options === void 0) { options = {}; }
        return this.call(http_1.RequestMethod.Delete, api, endpoint, options);
    };
    ApiService.prototype.call = function (method, api, endpoint, options) {
        var _this = this;
        options = this.combineDefaultOptionsWith(options);
        this.showLoadingIf(options.loading);
        var request = new http_1.Request(new http_1.RequestOptions({ method: method, url: this.urlFor(api, endpoint), body: this.bodyJsonFrom(options.body) }).merge(this.requestOptionsArgsFrom(options)));
        return this.http.request(request)
            .map(function (response) { try {
            return response.json();
        }
        catch (exception) {
            return response;
        } })
            .do(function () { return _this.hideLoadingIf(options.loading); }, function (error) { _this.hideLoadingIf(options.loading); _this.error.dispatch(error); });
    };
    ApiService.prototype.combineDefaultOptionsWith = function (options) {
        return Object.assign({}, { parameters: {}, body: {}, loading: false, overridingToken: '' }, options);
    };
    ApiService.prototype.showLoadingIf = function (loadingOption) {
        if (loadingOption)
            this.uiState.loading(true);
    };
    ApiService.prototype.hideLoadingIf = function (loadingOption) {
        if (loadingOption)
            this.uiState.loading(false);
    };
    ApiService.prototype.urlFor = function (api, endpoint) {
        return this.apiConfig.baseUrl() + "api/" + this.pathSegmentFor(api) + "/" + this.versionFor(api) + "/" + endpoint;
    };
    ApiService.prototype.pathSegmentFor = function (api) {
        return (api_interface_1.Api[api] || '?').toLowerCase();
    };
    ApiService.prototype.versionFor = function (api) {
        switch (api) {
            case api_interface_1.Api.Identities: return 'v1';
            case api_interface_1.Api.Assets: return 'v1';
            case api_interface_1.Api.Orders: return 'v1';
            default: return 'v?';
        }
        ;
    };
    ApiService.prototype.bodyJsonFrom = function (bodyObject) {
        if (!this.currentUser.loggedIn()) {
            bodyObject = Object.assign({}, bodyObject, { siteName: this.apiConfig.getPortal() });
        }
        return JSON.stringify(bodyObject);
    };
    ApiService.prototype.requestOptionsArgsFrom = function (options) {
        var _a = this.searchParametersFrom(options.parameters), search = _a[0], searchWasSet = _a[1];
        var requestOptionsArgs = {};
        requestOptionsArgs.headers = this.apiConfig.headers(options.overridingToken, options.download);
        if (searchWasSet)
            requestOptionsArgs.search = search;
        return requestOptionsArgs;
    };
    ApiService.prototype.searchParametersFrom = function (parameters) {
        var search = new http_1.URLSearchParams();
        for (var parameter in parameters) {
            search.set(parameter, parameters[parameter]);
        }
        if (!this.currentUser.loggedIn()) {
            search.set('siteName', this.apiConfig.getPortal());
        }
        return [search, search.toString().length > 0];
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, error_service_1.ErrorService, api_config_1.ApiConfig, ui_state_1.UiState, current_user_model_1.CurrentUser])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBa0csZUFBZSxDQUFDLENBQUE7QUFFbEgsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsMkJBQTBCLGNBQWMsQ0FBQyxDQUFBO0FBQ3pDLDhCQUFxRSw2QkFBNkIsQ0FBQyxDQUFBO0FBQ25HLHlCQUF3QixZQUFZLENBQUMsQ0FBQTtBQUNyQyxtQ0FBNEIsc0JBQXNCLENBQUMsQ0FBQTtBQUduRDtJQUNFLG9CQUNVLElBQVUsRUFDVixLQUFtQixFQUNuQixTQUFvQixFQUNwQixPQUFnQixFQUNoQixXQUF3QjtRQUp4QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFFbEMsQ0FBQztJQUVNLHdCQUFHLEdBQVYsVUFBVyxHQUFRLEVBQUUsUUFBZ0IsRUFBRSxPQUF3QjtRQUF4Qix1QkFBd0IsR0FBeEIsWUFBd0I7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0seUJBQUksR0FBWCxVQUFZLEdBQVEsRUFBRSxRQUFnQixFQUFFLE9BQXdCO1FBQXhCLHVCQUF3QixHQUF4QixZQUF3QjtRQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBYSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSx3QkFBRyxHQUFWLFVBQVcsR0FBUSxFQUFFLFFBQWdCLEVBQUUsT0FBd0I7UUFBeEIsdUJBQXdCLEdBQXhCLFlBQXdCO1FBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLDJCQUFNLEdBQWIsVUFBYyxHQUFRLEVBQUUsUUFBZ0IsRUFBRSxPQUF3QjtRQUF4Qix1QkFBd0IsR0FBeEIsWUFBd0I7UUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBSU8seUJBQUksR0FBWixVQUFhLE1BQXFCLEVBQUUsR0FBUSxFQUFFLFFBQWdCLEVBQUUsT0FBbUI7UUFBbkYsaUJBY0M7UUFiQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBDLElBQU0sT0FBTyxHQUFZLElBQUksY0FBTyxDQUNsQyxJQUFJLHFCQUFjLENBQ2hCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQzNGLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUM5QyxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUM5QixHQUFHLENBQUMsVUFBQSxRQUFRLElBQU0sSUFBSSxDQUFDO1lBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUFDLENBQUU7UUFBQSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0YsRUFBRSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBbkMsQ0FBbUMsRUFBRSxVQUFBLEtBQUssSUFBTSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEksQ0FBQztJQUVPLDhDQUF5QixHQUFqQyxVQUFrQyxPQUFtQjtRQUNuRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDbEIsRUFBRSxFQUNGLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxFQUNqRSxPQUFPLENBQ1IsQ0FBQztJQUNKLENBQUM7SUFFTyxrQ0FBYSxHQUFyQixVQUFzQixhQUFzQjtRQUMxQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sa0NBQWEsR0FBckIsVUFBc0IsYUFBc0I7UUFDMUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVPLDJCQUFNLEdBQWQsVUFBZSxHQUFRLEVBQUUsUUFBZ0I7UUFDdkMsTUFBTSxDQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFlBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFJLFFBQVUsQ0FBQztJQUMxRyxDQUFDO0lBRU8sbUNBQWMsR0FBdEIsVUFBdUIsR0FBUTtRQUM3QixNQUFNLENBQUMsQ0FBQyxtQkFBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFTywrQkFBVSxHQUFsQixVQUFtQixHQUFRO1FBQ3pCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFLLG1CQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDakMsS0FBSyxtQkFBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUssbUJBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM3QixTQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUFBLENBQUM7SUFDSixDQUFDO0lBRU8saUNBQVksR0FBcEIsVUFBcUIsVUFBbUI7UUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sMkNBQXNCLEdBQTlCLFVBQStCLE9BQW1CO1FBQ2hELElBQUEsa0RBQTBFLEVBQXJFLGNBQU0sRUFBRSxvQkFBWSxDQUFrRDtRQUMzRSxJQUFNLGtCQUFrQixHQUF1QixFQUFFLENBQUM7UUFFbEQsa0JBQWtCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9GLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckQsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFTyx5Q0FBb0IsR0FBNUIsVUFBNkIsVUFBeUI7UUFDcEQsSUFBTSxNQUFNLEdBQW9CLElBQUksc0JBQWUsRUFBRSxDQUFDO1FBRXRELEdBQUcsQ0FBQyxDQUFDLElBQU0sU0FBUyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRCxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBNUdIO1FBQUMsaUJBQVUsRUFBRTs7a0JBQUE7SUE2R2IsaUJBQUM7QUFBRCxDQTVHQSxBQTRHQyxJQUFBO0FBNUdZLGtCQUFVLGFBNEd0QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kLCBSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE9wdGlvbnNBcmdzLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4vZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQgeyBBcGlDb25maWcgfSBmcm9tICcuL2FwaS5jb25maWcnO1xuaW1wb3J0IHsgQXBpLCBBcGlPcHRpb25zLCBBcGlQYXJhbWV0ZXJzLCBBcGlCb2R5LCBBcGlSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXBpLmludGVyZmFjZSc7XG5pbXBvcnQgeyBVaVN0YXRlIH0gZnJvbSAnLi91aS5zdGF0ZSc7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJy4vY3VycmVudC11c2VyLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgcHJpdmF0ZSBlcnJvcjogRXJyb3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBpQ29uZmlnOiBBcGlDb25maWcsXG4gICAgcHJpdmF0ZSB1aVN0YXRlOiBVaVN0YXRlLFxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyXG4gICkge1xuICB9XG5cbiAgcHVibGljIGdldChhcGk6IEFwaSwgZW5kcG9pbnQ6IHN0cmluZywgb3B0aW9uczogQXBpT3B0aW9ucyA9IHt9KTogT2JzZXJ2YWJsZTxBcGlSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmNhbGwoUmVxdWVzdE1ldGhvZC5HZXQsIGFwaSwgZW5kcG9pbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIHBvc3QoYXBpOiBBcGksIGVuZHBvaW50OiBzdHJpbmcsIG9wdGlvbnM6IEFwaU9wdGlvbnMgPSB7fSk6IE9ic2VydmFibGU8QXBpUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5jYWxsKFJlcXVlc3RNZXRob2QuUG9zdCwgYXBpLCBlbmRwb2ludCwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgcHV0KGFwaTogQXBpLCBlbmRwb2ludDogc3RyaW5nLCBvcHRpb25zOiBBcGlPcHRpb25zID0ge30pOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbChSZXF1ZXN0TWV0aG9kLlB1dCwgYXBpLCBlbmRwb2ludCwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlKGFwaTogQXBpLCBlbmRwb2ludDogc3RyaW5nLCBvcHRpb25zOiBBcGlPcHRpb25zID0ge30pOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbChSZXF1ZXN0TWV0aG9kLkRlbGV0ZSwgYXBpLCBlbmRwb2ludCwgb3B0aW9ucyk7XG4gIH1cblxuICAvLyAvLy8vIEVORCBPRiBQVUJMSUMgSU5URVJGQUNFXG5cbiAgcHJpdmF0ZSBjYWxsKG1ldGhvZDogUmVxdWVzdE1ldGhvZCwgYXBpOiBBcGksIGVuZHBvaW50OiBzdHJpbmcsIG9wdGlvbnM6IEFwaU9wdGlvbnMpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlPiB7XG4gICAgb3B0aW9ucyA9IHRoaXMuY29tYmluZURlZmF1bHRPcHRpb25zV2l0aChvcHRpb25zKTtcblxuICAgIHRoaXMuc2hvd0xvYWRpbmdJZihvcHRpb25zLmxvYWRpbmcpO1xuXG4gICAgY29uc3QgcmVxdWVzdDogUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxuICAgICAgbmV3IFJlcXVlc3RPcHRpb25zKFxuICAgICAgICB7IG1ldGhvZDogbWV0aG9kLCB1cmw6IHRoaXMudXJsRm9yKGFwaSwgZW5kcG9pbnQpLCBib2R5OiB0aGlzLmJvZHlKc29uRnJvbShvcHRpb25zLmJvZHkpIH1cbiAgICAgICkubWVyZ2UodGhpcy5yZXF1ZXN0T3B0aW9uc0FyZ3NGcm9tKG9wdGlvbnMpKVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxdWVzdClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4geyB0cnkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IGNhdGNoIChleGNlcHRpb24pIHsgcmV0dXJuIHJlc3BvbnNlOyB9IH0pXG4gICAgICAuZG8oKCkgPT4gdGhpcy5oaWRlTG9hZGluZ0lmKG9wdGlvbnMubG9hZGluZyksIGVycm9yID0+IHsgdGhpcy5oaWRlTG9hZGluZ0lmKG9wdGlvbnMubG9hZGluZyk7IHRoaXMuZXJyb3IuZGlzcGF0Y2goZXJyb3IpOyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY29tYmluZURlZmF1bHRPcHRpb25zV2l0aChvcHRpb25zOiBBcGlPcHRpb25zKTogQXBpT3B0aW9ucyB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHsgcGFyYW1ldGVyczoge30sIGJvZHk6IHt9LCBsb2FkaW5nOiBmYWxzZSwgb3ZlcnJpZGluZ1Rva2VuOiAnJyB9LFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNob3dMb2FkaW5nSWYobG9hZGluZ09wdGlvbjogYm9vbGVhbikge1xuICAgIGlmIChsb2FkaW5nT3B0aW9uKSB0aGlzLnVpU3RhdGUubG9hZGluZyh0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUxvYWRpbmdJZihsb2FkaW5nT3B0aW9uOiBib29sZWFuKSB7XG4gICAgaWYgKGxvYWRpbmdPcHRpb24pIHRoaXMudWlTdGF0ZS5sb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXJsRm9yKGFwaTogQXBpLCBlbmRwb2ludDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuYXBpQ29uZmlnLmJhc2VVcmwoKX1hcGkvJHt0aGlzLnBhdGhTZWdtZW50Rm9yKGFwaSl9LyR7dGhpcy52ZXJzaW9uRm9yKGFwaSl9LyR7ZW5kcG9pbnR9YDtcbiAgfVxuXG4gIHByaXZhdGUgcGF0aFNlZ21lbnRGb3IoYXBpOiBBcGkpOiBzdHJpbmcge1xuICAgIHJldHVybiAoQXBpW2FwaV0gfHwgJz8nKS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB2ZXJzaW9uRm9yKGFwaTogQXBpKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGFwaSkge1xuICAgICAgY2FzZSBBcGkuSWRlbnRpdGllczogcmV0dXJuICd2MSc7XG4gICAgICBjYXNlIEFwaS5Bc3NldHM6IHJldHVybiAndjEnO1xuICAgICAgY2FzZSBBcGkuT3JkZXJzOiByZXR1cm4gJ3YxJztcbiAgICAgIGRlZmF1bHQ6IHJldHVybiAndj8nO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGJvZHlKc29uRnJvbShib2R5T2JqZWN0OiBBcGlCb2R5KTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuY3VycmVudFVzZXIubG9nZ2VkSW4oKSkge1xuICAgICAgYm9keU9iamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIGJvZHlPYmplY3QsIHsgc2l0ZU5hbWU6IHRoaXMuYXBpQ29uZmlnLmdldFBvcnRhbCgpIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShib2R5T2JqZWN0KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWVzdE9wdGlvbnNBcmdzRnJvbShvcHRpb25zOiBBcGlPcHRpb25zKTogUmVxdWVzdE9wdGlvbnNBcmdzIHtcbiAgICBsZXQgW3NlYXJjaCwgc2VhcmNoV2FzU2V0XSA9IHRoaXMuc2VhcmNoUGFyYW1ldGVyc0Zyb20ob3B0aW9ucy5wYXJhbWV0ZXJzKTtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9uc0FyZ3M6IFJlcXVlc3RPcHRpb25zQXJncyA9IHt9O1xuXG4gICAgcmVxdWVzdE9wdGlvbnNBcmdzLmhlYWRlcnMgPSB0aGlzLmFwaUNvbmZpZy5oZWFkZXJzKG9wdGlvbnMub3ZlcnJpZGluZ1Rva2VuLCBvcHRpb25zLmRvd25sb2FkKTtcbiAgICBpZiAoc2VhcmNoV2FzU2V0KSByZXF1ZXN0T3B0aW9uc0FyZ3Muc2VhcmNoID0gc2VhcmNoO1xuXG4gICAgcmV0dXJuIHJlcXVlc3RPcHRpb25zQXJncztcbiAgfVxuXG4gIHByaXZhdGUgc2VhcmNoUGFyYW1ldGVyc0Zyb20ocGFyYW1ldGVyczogQXBpUGFyYW1ldGVycyk6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IHNlYXJjaDogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXG4gICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgaW4gcGFyYW1ldGVycykge1xuICAgICAgc2VhcmNoLnNldChwYXJhbWV0ZXIsIHBhcmFtZXRlcnNbcGFyYW1ldGVyXSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRVc2VyLmxvZ2dlZEluKCkpIHtcbiAgICAgIHNlYXJjaC5zZXQoJ3NpdGVOYW1lJywgdGhpcy5hcGlDb25maWcuZ2V0UG9ydGFsKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBbc2VhcmNoLCBzZWFyY2gudG9TdHJpbmcoKS5sZW5ndGggPiAwXTtcbiAgfVxufVxuIl19
