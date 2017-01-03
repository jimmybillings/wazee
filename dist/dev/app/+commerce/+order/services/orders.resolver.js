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
var orders_service_1 = require('./orders.service');
var OrdersResolver = (function () {
    function OrdersResolver(ordersService) {
        this.ordersService = ordersService;
    }
    OrdersResolver.prototype.resolve = function (route, state) {
        return this.ordersService.getOrders(JSON.parse(JSON.stringify(route.params)));
    };
    OrdersResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [orders_service_1.OrdersService])
    ], OrdersResolver);
    return OrdersResolver;
}());
exports.OrdersResolver = OrdersResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK29yZGVyL3NlcnZpY2VzL29yZGVycy5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRzNDLCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBR2pEO0lBRUUsd0JBQ1UsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRTNDLGdDQUFPLEdBQVAsVUFBUSxLQUE2QixFQUFFLEtBQTBCO1FBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBUkg7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQVNiLHFCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSxzQkFBYyxpQkFRMUIsQ0FBQSIsImZpbGUiOiJhcHAvK2NvbW1lcmNlLytvcmRlci9zZXJ2aWNlcy9vcmRlcnMucmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvbHZlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuL29yZGVycy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyc1Jlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxhbnk+IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UpIHsgfVxuXG4gIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlcnNTZXJ2aWNlLmdldE9yZGVycyhKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJvdXRlLnBhcmFtcykpKTtcbiAgfVxufVxuIl19
