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
var store_1 = require('@ngrx/store');
var core_1 = require('@angular/core');
var api_service_1 = require('../../shared/services/api.service');
var api_interface_1 = require('../../shared/interfaces/api.interface');
var initAsset = { clipData: [], common: [], primary: [], secondary: [], filter: '', name: '', price: 0, pricing: [] };
exports.asset = function (state, action) {
    if (state === void 0) { state = initAsset; }
    switch (action.type) {
        case 'SET_ASSET':
            return Object.assign({}, state, action.payload);
        case 'RESET':
            return Object.assign({}, initAsset);
        default:
            return state;
    }
};
var AssetService = (function () {
    function AssetService(store, api) {
        this.store = store;
        this.api = api;
        this.data = this.store.select('asset');
    }
    AssetService.prototype.initialize = function (id) {
        var _this = this;
        return this.api.get(api_interface_1.Api.Assets, "clip/" + id + "/clipDetail")
            .do(function (response) { return _this.set({ type: 'SET_ASSET', payload: response }); });
    };
    AssetService.prototype.set = function (action) {
        this.store.dispatch(action);
    };
    AssetService.prototype.reset = function () {
        this.store.dispatch({ type: 'RESET' });
    };
    AssetService.prototype.downloadComp = function (id, compType) {
        return this.api.get(api_interface_1.Api.Assets, "renditionType/downloadUrl/" + id, { parameters: { type: compType } });
    };
    AssetService.prototype.getPrice = function (id, attributes) {
        var _this = this;
        var formatedAttributes = attributes ? this.formatAttributes(attributes) : null;
        var parameters = formatedAttributes ? { region: 'AAA', attributes: formatedAttributes } : { region: 'AAA' };
        return this.api.get(api_interface_1.Api.Orders, "priceBook/price/" + id, { parameters: parameters })
            .do(function (response) { return _this.setPrice(response); });
    };
    AssetService.prototype.getshareLink = function (id, accessStartDate, accessEndDate) {
        return this.api.post(api_interface_1.Api.Identities, 'accessInfo', { body: { type: 'asset', accessInfo: id, accessStartDate: accessStartDate, accessEndDate: accessEndDate } });
    };
    AssetService.prototype.createShareLink = function (shareLink) {
        return this.api.post(api_interface_1.Api.Identities, 'accessInfo', { body: shareLink });
    };
    AssetService.prototype.getData = function (id, share_token) {
        var _this = this;
        var options = { loading: true };
        if (share_token)
            options.overridingToken = share_token;
        return this.api.get(api_interface_1.Api.Assets, 'clip/' + id + '/clipDetail', options)
            .do(function (res) { return _this.setActiveAsset(res); });
    };
    AssetService.prototype.setActiveAsset = function (asset) {
        this.set({
            type: 'SET_ASSET', payload: {
                assetId: asset.assetId,
                clipThumbnailUrl: asset.clipThumbnailUrl,
                clipUrl: asset.clipUrl,
                detailTypeMap: asset.detailTypeMap,
                hasDownloadableComp: asset.hasDownloadableComp,
                resourceClass: asset.resourceClass,
                transcodeTargets: asset.transcodeTargets || [],
                price: asset.price
            }
        });
    };
    AssetService.prototype.setPrice = function (price) {
        this.set({
            type: 'SET_ASSET', payload: {
                price: price.price
            }
        });
    };
    AssetService.prototype.getPriceAttributes = function (priceModel) {
        var _this = this;
        priceModel = priceModel ? priceModel.split(' ').join('') : 'RightsManaged';
        this.api.get(api_interface_1.Api.Orders, 'priceBook/priceAttributes', { parameters: { region: 'AAA', priceModel: priceModel } }).take(1).subscribe(function (data) {
            data.list.filter(function (o) { return o.name === 'Project Type'; })[0].primary = true;
            _this.setPricing(data.list);
        });
    };
    AssetService.prototype.setPricing = function (pricing) {
        this.set({
            type: 'SET_ASSET', payload: {
                pricing: pricing
            }
        });
    };
    AssetService.prototype.formatAttributes = function (attrs) {
        var formatted = [];
        for (var attr in attrs) {
            var name_1 = attr.toLowerCase().split(' ').join('_');
            var value = attrs[attr].toLowerCase().split(' ').join('_');
            formatted.push(name_1 + ":" + value);
        }
        return formatted.join(',');
    };
    AssetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store, api_service_1.ApiService])
    ], AssetService);
    return AssetService;
}());
exports.AssetService = AssetService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXNzZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0Esc0JBQTZDLGFBQWEsQ0FBQyxDQUFBO0FBQzNELHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyw0QkFBMkIsbUNBQW1DLENBQUMsQ0FBQTtBQUMvRCw4QkFBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUV4RSxJQUFNLFNBQVMsR0FBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBRWhILGFBQUssR0FBdUIsVUFBQyxLQUFpQixFQUFFLE1BQWM7SUFBakMscUJBQWlCLEdBQWpCLGlCQUFpQjtJQUN6RCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLFdBQVc7WUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxLQUFLLE9BQU87WUFDVixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdEM7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFJRjtJQUlFLHNCQUNTLEtBQWlCLEVBQ2pCLEdBQWU7UUFEZixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FB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QUM7QUFBRCxDQTNHQSxBQTJHQyxJQUFBO0FBM0dZLG9CQUFZLGVBMkd4QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvYXNzZXQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb25SZWR1Y2VyLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpLCBBcGlPcHRpb25zIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvYXBpLmludGVyZmFjZSc7XG5cbmNvbnN0IGluaXRBc3NldDogYW55ID0geyBjbGlwRGF0YTogW10sIGNvbW1vbjogW10sIHByaW1hcnk6IFtdLCBzZWNvbmRhcnk6IFtdLCBmaWx0ZXI6ICcnLCBuYW1lOiAnJywgcHJpY2U6IDAsIHByaWNpbmc6IFtdIH07XG5cbmV4cG9ydCBjb25zdCBhc3NldDogQWN0aW9uUmVkdWNlcjxhbnk+ID0gKHN0YXRlID0gaW5pdEFzc2V0LCBhY3Rpb246IEFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX0FTU0VUJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICAgIGNhc2UgJ1JFU0VUJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0QXNzZXQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEFzc2V0U2VydmljZSB7XG4gIHB1YmxpYyBkYXRhOiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBlcnJvck1lc3NhZ2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHVibGljIGFwaTogQXBpU2VydmljZSkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuc3RvcmUuc2VsZWN0KCdhc3NldCcpO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemUoaWQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLmdldChBcGkuQXNzZXRzLCBgY2xpcC8ke2lkfS9jbGlwRGV0YWlsYClcbiAgICAgIC5kbyhyZXNwb25zZSA9PiB0aGlzLnNldCh7IHR5cGU6ICdTRVRfQVNTRVQnLCBwYXlsb2FkOiByZXNwb25zZSB9KSk7XG4gIH1cblxuICBwdWJsaWMgc2V0KGFjdGlvbjogQWN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnUkVTRVQnIH0pO1xuICB9XG5cbiAgcHVibGljIGRvd25sb2FkQ29tcChpZDogYW55LCBjb21wVHlwZTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KEFwaS5Bc3NldHMsIGByZW5kaXRpb25UeXBlL2Rvd25sb2FkVXJsLyR7aWR9YCwgeyBwYXJhbWV0ZXJzOiB7IHR5cGU6IGNvbXBUeXBlIH0gfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJpY2UoaWQ6IGFueSwgYXR0cmlidXRlcz86IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGZvcm1hdGVkQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMgPyB0aGlzLmZvcm1hdEF0dHJpYnV0ZXMoYXR0cmlidXRlcykgOiBudWxsO1xuICAgIGxldCBwYXJhbWV0ZXJzID0gZm9ybWF0ZWRBdHRyaWJ1dGVzID8geyByZWdpb246ICdBQUEnLCBhdHRyaWJ1dGVzOiBmb3JtYXRlZEF0dHJpYnV0ZXMgfSAgOiB7IHJlZ2lvbjogJ0FBQScgfTtcbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KEFwaS5PcmRlcnMsIGBwcmljZUJvb2svcHJpY2UvJHtpZH1gLCB7IHBhcmFtZXRlcnMgfSlcbiAgICAgIC5kbyhyZXNwb25zZSA9PiB0aGlzLnNldFByaWNlKHJlc3BvbnNlKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0c2hhcmVMaW5rKGlkOiBhbnksIGFjY2Vzc1N0YXJ0RGF0ZTogYW55LCBhY2Nlc3NFbmREYXRlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFwaS5wb3N0KFxuICAgICAgQXBpLklkZW50aXRpZXMsXG4gICAgICAnYWNjZXNzSW5mbycsXG4gICAgICB7IGJvZHk6IHsgdHlwZTogJ2Fzc2V0JywgYWNjZXNzSW5mbzogaWQsIGFjY2Vzc1N0YXJ0RGF0ZTogYWNjZXNzU3RhcnREYXRlLCBhY2Nlc3NFbmREYXRlOiBhY2Nlc3NFbmREYXRlIH0gfVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlU2hhcmVMaW5rKHNoYXJlTGluazogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hcGkucG9zdChBcGkuSWRlbnRpdGllcywgJ2FjY2Vzc0luZm8nLCB7IGJvZHk6IHNoYXJlTGluayB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhKGlkOiBhbnksIHNoYXJlX3Rva2VuPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgb3B0aW9uczogQXBpT3B0aW9ucyA9IHsgbG9hZGluZzogdHJ1ZSB9O1xuICAgIGlmIChzaGFyZV90b2tlbikgb3B0aW9ucy5vdmVycmlkaW5nVG9rZW4gPSBzaGFyZV90b2tlbjtcbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KEFwaS5Bc3NldHMsICdjbGlwLycgKyBpZCArICcvY2xpcERldGFpbCcsIG9wdGlvbnMpXG4gICAgICAuZG8oKHJlcykgPT4gdGhpcy5zZXRBY3RpdmVBc3NldChyZXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmVBc3NldChhc3NldDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZXQoe1xuICAgICAgdHlwZTogJ1NFVF9BU1NFVCcsIHBheWxvYWQ6IHtcbiAgICAgICAgYXNzZXRJZDogYXNzZXQuYXNzZXRJZCxcbiAgICAgICAgY2xpcFRodW1ibmFpbFVybDogYXNzZXQuY2xpcFRodW1ibmFpbFVybCxcbiAgICAgICAgY2xpcFVybDogYXNzZXQuY2xpcFVybCxcbiAgICAgICAgZGV0YWlsVHlwZU1hcDogYXNzZXQuZGV0YWlsVHlwZU1hcCxcbiAgICAgICAgaGFzRG93bmxvYWRhYmxlQ29tcDogYXNzZXQuaGFzRG93bmxvYWRhYmxlQ29tcCxcbiAgICAgICAgcmVzb3VyY2VDbGFzczogYXNzZXQucmVzb3VyY2VDbGFzcyxcbiAgICAgICAgdHJhbnNjb2RlVGFyZ2V0czogYXNzZXQudHJhbnNjb2RlVGFyZ2V0cyB8fCBbXSxcbiAgICAgICAgcHJpY2U6IGFzc2V0LnByaWNlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJpY2UocHJpY2U6IGFueSkge1xuICAgIHRoaXMuc2V0KHtcbiAgICAgIHR5cGU6ICdTRVRfQVNTRVQnLCBwYXlsb2FkOiB7XG4gICAgICAgIHByaWNlOiBwcmljZS5wcmljZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFByaWNlQXR0cmlidXRlcyhwcmljZU1vZGVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBwcmljZU1vZGVsID0gcHJpY2VNb2RlbCA/IHByaWNlTW9kZWwuc3BsaXQoJyAnKS5qb2luKCcnKSA6ICdSaWdodHNNYW5hZ2VkJztcbiAgICB0aGlzLmFwaS5nZXQoXG4gICAgICBBcGkuT3JkZXJzLFxuICAgICAgJ3ByaWNlQm9vay9wcmljZUF0dHJpYnV0ZXMnLFxuICAgICAgeyBwYXJhbWV0ZXJzOiB7IHJlZ2lvbjogJ0FBQScsIHByaWNlTW9kZWw6IHByaWNlTW9kZWwgfSB9XG4gICAgKS50YWtlKDEpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0gdGFrZSB0aGlzIG91dCB3aGVuIEFQSSBhbmQgQ29uZmlnIGFyZSBzdGFibGUgLS0tLS0tLS0tLS0tLVxuICAgICAgZGF0YS5saXN0LmZpbHRlcigobzogYW55KSA9PiBvLm5hbWUgPT09ICdQcm9qZWN0IFR5cGUnKVswXS5wcmltYXJ5ID0gdHJ1ZTtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICB0aGlzLnNldFByaWNpbmcoZGF0YS5saXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0UHJpY2luZyhwcmljaW5nOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldCh7XG4gICAgICB0eXBlOiAnU0VUX0FTU0VUJywgcGF5bG9hZDoge1xuICAgICAgICBwcmljaW5nOiBwcmljaW5nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdEF0dHJpYnV0ZXMoYXR0cnM6IGFueSk6IGFueSB7XG4gICAgbGV0IGZvcm1hdHRlZDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSBhdHRyLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5qb2luKCdfJyk7XG4gICAgICBsZXQgdmFsdWU6IHN0cmluZyA9IGF0dHJzW2F0dHJdLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5qb2luKCdfJyk7XG4gICAgICBmb3JtYXR0ZWQucHVzaChgJHtuYW1lfToke3ZhbHVlfWApO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVkLmpvaW4oJywnKTtcbiAgfVxufSJdfQ==
