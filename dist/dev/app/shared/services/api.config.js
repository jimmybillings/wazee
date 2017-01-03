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
var current_user_model_1 = require('./current-user.model');
var cmsApi = {
    root: 'https://cms.dev.wzplatform.com/',
    path: '/wp-json/wp/v2/pages',
    query: '?filter[name]='
};
var ApiConfig = (function () {
    function ApiConfig(currentUser) {
        this.currentUser = currentUser;
        this._portal = null;
    }
    ApiConfig.prototype.baseUrl = function () {
        return baseUrl;
    };
    ApiConfig.prototype.headers = function (overridingToken, download) {
        if (overridingToken === void 0) { overridingToken = ''; }
        if (download === void 0) { download = false; }
        var headers = {
            'Content-Type': 'application/json',
        };
        var token = '';
        if (overridingToken !== '') {
            token = overridingToken;
        }
        else if (this.currentUser.loggedIn()) {
            token = localStorage.getItem('token');
        }
        if (token !== '') {
            headers['Authorization'] = "Bearer " + token;
        }
        if (download) {
            headers['Accept'] = 'application/octet-stream';
        }
        else {
            headers['Accept'] = 'application/json';
        }
        return new http_1.Headers(headers);
    };
    ApiConfig.prototype.setPortal = function (portal) {
        this._portal = portal;
    };
    ApiConfig.prototype.getPortal = function () {
        return this._portal || 'core';
    };
    ApiConfig.prototype.cms = function (piece) {
        return cmsApi[piece];
    };
    ApiConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser])
    ], ApiConfig);
    return ApiConfig;
}());
exports.ApiConfig = ApiConfig;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXBpLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxtQ0FBNEIsc0JBQXNCLENBQUMsQ0FBQTtBQUduRCxJQUFNLE1BQU0sR0FBUTtJQUNsQixJQUFJLEVBQUUsaUNBQWlDO0lBQ3ZDLElBQUksRUFBRSxzQkFBc0I7SUFDNUIsS0FBSyxFQUFFLGdCQUFnQjtDQUN4QixDQUFDO0FBR0Y7SUFJRSxtQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVNLDJCQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTSwyQkFBTyxHQUFkLFVBQWUsZUFBNEIsRUFBRSxRQUF5QjtRQUF2RCwrQkFBNEIsR0FBNUIsb0JBQTRCO1FBQUUsd0JBQXlCLEdBQXpCLGdCQUF5QjtRQUNwRSxJQUFNLE9BQU8sR0FBNEI7WUFDdkMsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO1FBRUYsSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBRXZCLEVBQUUsQ0FBQyxDQUFDLGVBQWUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QyxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakIsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLFlBQVUsS0FBTyxDQUFDO1FBQy9DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLDBCQUEwQixDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztRQUN6QyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksY0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSw2QkFBUyxHQUFoQixVQUFpQixNQUFjO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRU0sdUJBQUcsR0FBVixVQUFXLEtBQWE7UUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBakRIO1FBQUMsaUJBQVUsRUFBRTs7aUJBQUE7SUFtRGIsZ0JBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLGlCQUFTLFlBa0RyQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvYXBpLmNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi9jdXJyZW50LXVzZXIubW9kZWwnO1xuZGVjbGFyZSB2YXIgYmFzZVVybDogc3RyaW5nO1xuXG5jb25zdCBjbXNBcGk6IGFueSA9IHtcbiAgcm9vdDogJ2h0dHBzOi8vY21zLmRldi53enBsYXRmb3JtLmNvbS8nLFxuICBwYXRoOiAnL3dwLWpzb24vd3AvdjIvcGFnZXMnLFxuICBxdWVyeTogJz9maWx0ZXJbbmFtZV09J1xufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaUNvbmZpZyB7XG5cbiAgcHJpdmF0ZSBfcG9ydGFsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50VXNlcjogQ3VycmVudFVzZXIpIHtcbiAgICB0aGlzLl9wb3J0YWwgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIGJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYmFzZVVybDtcbiAgfVxuXG4gIHB1YmxpYyBoZWFkZXJzKG92ZXJyaWRpbmdUb2tlbjogc3RyaW5nID0gJycsIGRvd25sb2FkOiBib29sZWFuID0gZmFsc2UpOiBIZWFkZXJzIHtcbiAgICBjb25zdCBoZWFkZXJzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfTtcblxuICAgIGxldCB0b2tlbjogc3RyaW5nID0gJyc7XG5cbiAgICBpZiAob3ZlcnJpZGluZ1Rva2VuICE9PSAnJykge1xuICAgICAgdG9rZW4gPSBvdmVycmlkaW5nVG9rZW47XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRVc2VyLmxvZ2dlZEluKCkpIHtcbiAgICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgfVxuXG4gICAgaWYgKHRva2VuICE9PSAnJykge1xuICAgICAgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgfVxuXG4gICAgaWYgKGRvd25sb2FkKSB7XG4gICAgICBoZWFkZXJzWydBY2NlcHQnXSA9ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXJzWydBY2NlcHQnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEhlYWRlcnMoaGVhZGVycyk7XG4gIH1cblxuICBwdWJsaWMgc2V0UG9ydGFsKHBvcnRhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fcG9ydGFsID0gcG9ydGFsO1xuICB9XG5cbiAgcHVibGljIGdldFBvcnRhbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wb3J0YWwgfHwgJ2NvcmUnO1xuICB9XG5cbiAgcHVibGljIGNtcyhwaWVjZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY21zQXBpW3BpZWNlXTtcbiAgfVxuXG59XG4iXX0=
