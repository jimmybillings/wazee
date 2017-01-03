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
var current_user_model_1 = require('../../shared/services/current-user.model');
var api_service_1 = require('../../shared/services/api.service');
var api_interface_1 = require('../../shared/interfaces/api.interface');
var asset_store_1 = require('./asset.store');
var AssetData = (function () {
    function AssetData(currentUser, api, store) {
        this.currentUser = currentUser;
        this.api = api;
        this.store = store;
        this.data = this.store.data;
    }
    AssetData.prototype.searchAssets = function (params) {
        var _this = this;
        params['i'] = (parseFloat(params['i']) - 1).toString();
        return this.api.get(api_interface_1.Api.Assets, this.currentUser.loggedIn() ? 'search' : 'search/anonymous', { parameters: params, loading: true }).do(function (response) { return _this.store.storeAssets(response); });
    };
    AssetData.prototype.reset = function () {
        this.store.storeAssets({ type: 'SEARCH.RESET' });
    };
    AssetData.prototype.clearAssets = function () {
        this.store.storeAssets({ type: 'SEARCH.CLEAR_ASSETS' });
    };
    AssetData.prototype.downloadComp = function (id, compType) {
        return this.api.get(api_interface_1.Api.Assets, "renditionType/downloadUrl/" + id, { parameters: { type: compType } });
    };
    AssetData = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, api_service_1.ApiService, asset_store_1.AssetStore])
    ], AssetData);
    return AssetData;
}());
exports.AssetData = AssetData;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2VhcmNoL3NlcnZpY2VzL2Fzc2V0LmRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLG1DQUE0QiwwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3ZFLDRCQUEyQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQy9ELDhCQUFvQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQzVELDRCQUEyQixlQUFlLENBQUMsQ0FBQTtBQU8zQztJQUVFLG1CQUNTLFdBQXdCLEVBQ3ZCLEdBQWUsRUFDaEIsS0FBaUI7UUFGakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQW9CLE1BQVc7UUFBL0IsaUJBUUM7UUFQQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUNqQixtQkFBRyxDQUFDLE1BQU0sRUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLFFBQVEsR0FBRyxrQkFBa0IsRUFDM0QsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FDdEMsQ0FBQyxFQUFFLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSx5QkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sK0JBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQW9CLEVBQU8sRUFBRSxRQUFhO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBRyxDQUFDLE1BQU0sRUFBRSwrQkFBNkIsRUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBOUJIO1FBQUMsaUJBQVUsRUFBRTs7aUJBQUE7SUErQmIsZ0JBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBOUJZLGlCQUFTLFlBOEJyQixDQUFBIiwiZmlsZSI6ImFwcC8rc2VhcmNoL3NlcnZpY2VzL2Fzc2V0LmRhdGEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2FwaS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXNzZXRTdG9yZSB9IGZyb20gJy4vYXNzZXQuc3RvcmUnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIHNlYXJjaCBhcGkgIFxuICogYW5kIHJldHVybnMgc2VhcmNoIHJlc3VsdHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFzc2V0RGF0YSB7XG4gIHB1YmxpYyBkYXRhOiBPYnNlcnZhYmxlPGFueT47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjdXJyZW50VXNlcjogQ3VycmVudFVzZXIsXG4gICAgcHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG4gICAgcHVibGljIHN0b3JlOiBBc3NldFN0b3JlKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5zdG9yZS5kYXRhO1xuICB9XG5cbiAgcHVibGljIHNlYXJjaEFzc2V0cyhwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcGFyYW1zWydpJ10gPSAocGFyc2VGbG9hdChwYXJhbXNbJ2knXSkgLSAxKS50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBpLmdldChcbiAgICAgIEFwaS5Bc3NldHMsXG4gICAgICB0aGlzLmN1cnJlbnRVc2VyLmxvZ2dlZEluKCkgPyAnc2VhcmNoJyA6ICdzZWFyY2gvYW5vbnltb3VzJyxcbiAgICAgIHsgcGFyYW1ldGVyczogcGFyYW1zLCBsb2FkaW5nOiB0cnVlIH1cbiAgICApLmRvKHJlc3BvbnNlID0+IHRoaXMuc3RvcmUuc3RvcmVBc3NldHMocmVzcG9uc2UpKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLnN0b3JlQXNzZXRzKHsgdHlwZTogJ1NFQVJDSC5SRVNFVCcgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJBc3NldHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5zdG9yZUFzc2V0cyh7IHR5cGU6ICdTRUFSQ0guQ0xFQVJfQVNTRVRTJyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkb3dubG9hZENvbXAoaWQ6IGFueSwgY29tcFR5cGU6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLmdldChBcGkuQXNzZXRzLCBgcmVuZGl0aW9uVHlwZS9kb3dubG9hZFVybC8ke2lkfWAsIHsgcGFyYW1ldGVyczogeyB0eXBlOiBjb21wVHlwZSB9IH0pO1xuICB9XG59XG4iXX0=
