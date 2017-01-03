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
var order_store_1 = require('./order.store');
var OrderService = (function () {
    function OrderService(api, store) {
        this.api = api;
        this.store = store;
    }
    Object.defineProperty(OrderService.prototype, "data", {
        get: function () {
            return this.store.data;
        },
        enumerable: true,
        configurable: true
    });
    OrderService.prototype.getOrder = function (orderId) {
        var _this = this;
        return this.api.get(api_interface_1.Api.Orders, "order/" + orderId)
            .do(function (response) { return _this.store.update(response); });
    };
    OrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, order_store_1.OrderStore])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK29yZGVyL3NlcnZpY2VzL29yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUczQyw0QkFBMkIsc0NBQXNDLENBQUMsQ0FBQTtBQUNsRSw4QkFBb0IsMENBQTBDLENBQUMsQ0FBQTtBQUMvRCw0QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFHM0M7SUFDRSxzQkFBb0IsR0FBZSxFQUFVLEtBQWlCO1FBQTFDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUksQ0FBQztJQUVuRSxzQkFBVyw4QkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRU0sK0JBQVEsR0FBZixVQUFnQixPQUFlO1FBQS9CLGlCQUdDO1FBRkMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFHLENBQUMsTUFBTSxFQUFFLFdBQVMsT0FBUyxDQUFDO2FBQ2hELEVBQUUsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQVhIO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFZYixtQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksb0JBQVksZUFXeEIsQ0FBQSIsImZpbGUiOiJhcHAvK2NvbW1lcmNlLytvcmRlci9zZXJ2aWNlcy9vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2FwaS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT3JkZXJTdG9yZSB9IGZyb20gJy4vb3JkZXIuc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IE9yZGVyU3RvcmUpIHsgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRhdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0T3JkZXIob3JkZXJJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KEFwaS5PcmRlcnMsIGBvcmRlci8ke29yZGVySWR9YClcbiAgICAgIC5kbyhyZXNwb25zZSA9PiB0aGlzLnN0b3JlLnVwZGF0ZShyZXNwb25zZSkpO1xuICB9XG59XG4iXX0=
