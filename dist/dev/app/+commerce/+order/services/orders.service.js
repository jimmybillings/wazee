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
var api_service_1 = require('../../../shared/services/api.service');
var api_interface_1 = require('../../../shared/interfaces/api.interface');
var orders_store_1 = require('./orders.store');
var OrdersService = (function () {
    function OrdersService(api, store) {
        this.api = api;
        this.store = store;
    }
    Object.defineProperty(OrdersService.prototype, "data", {
        get: function () {
            return this.store.data;
        },
        enumerable: true,
        configurable: true
    });
    OrdersService.prototype.getOrders = function (params) {
        var _this = this;
        return this.api.get(api_interface_1.Api.Orders, 'order/myOrders', { parameters: this.buildSearchParams(params), loading: true }).do(function (response) { return _this.store.storeOrders(response); });
    };
    OrdersService.prototype.buildSearchParams = function (params) {
        params['i'] = (params['i'] && params['i'] > 0) ? params['i'] - 1 : 0;
        return Object.assign({}, { q: '', s: '', d: '', i: 0, n: 20 }, params);
    };
    OrdersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, orders_store_1.OrdersStore])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK29yZGVyL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MsNEJBQTJCLHNDQUFzQyxDQUFDLENBQUE7QUFDbEUsOEJBQW9CLDBDQUEwQyxDQUFDLENBQUE7QUFDL0QsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFHN0M7SUFFRSx1QkFDVSxHQUFlLEVBQ2YsS0FBa0I7UUFEbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWE7SUFBSSxDQUFDO0lBRWpDLHNCQUFXLCtCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFTSxpQ0FBUyxHQUFoQixVQUFpQixNQUFXO1FBQTVCLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFHLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUM5QyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUM5RCxDQUFDLEVBQUUsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLHlDQUFpQixHQUF6QixVQUEwQixNQUFXO1FBQ25DLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQXBCSDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBcUJiLG9CQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxxQkFBYSxnQkFvQnpCLENBQUEiLCJmaWxlIjoiYXBwLytjb21tZXJjZS8rb3JkZXIvc2VydmljZXMvb3JkZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2FwaS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT3JkZXJzU3RvcmUgfSBmcm9tICcuL29yZGVycy5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlcnNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwaTogQXBpU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JlOiBPcmRlcnNTdG9yZSkgeyB9XG5cbiAgcHVibGljIGdldCBkYXRhKCk6IE9ic2VydmFibGU8T3JkZXJzU3RvcmU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kYXRhO1xuICB9XG5cbiAgcHVibGljIGdldE9yZGVycyhwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLmdldChBcGkuT3JkZXJzLCAnb3JkZXIvbXlPcmRlcnMnLFxuICAgICAgeyBwYXJhbWV0ZXJzOiB0aGlzLmJ1aWxkU2VhcmNoUGFyYW1zKHBhcmFtcyksIGxvYWRpbmc6IHRydWUgfVxuICAgICkuZG8ocmVzcG9uc2UgPT4gdGhpcy5zdG9yZS5zdG9yZU9yZGVycyhyZXNwb25zZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFNlYXJjaFBhcmFtcyhwYXJhbXM6IGFueSkge1xuICAgIHBhcmFtc1snaSddID0gKHBhcmFtc1snaSddICYmIHBhcmFtc1snaSddID4gMCkgPyBwYXJhbXNbJ2knXSAtIDEgOiAwO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7IHE6ICcnLCBzOiAnJywgZDogJycsIGk6IDAsIG46IDIwIH0sIHBhcmFtcyk7XG4gIH1cbn1cbiJdfQ==
