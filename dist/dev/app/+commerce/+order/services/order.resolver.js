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
var Rx_1 = require('rxjs/Rx');
var order_service_1 = require('./order.service');
var order_store_1 = require('./order.store');
var OrderResolver = (function () {
    function OrderResolver(orderService, orderStore) {
        this.orderService = orderService;
        this.orderStore = orderStore;
    }
    OrderResolver.prototype.resolve = function (route, state) {
        if (Number(this.orderStore.state.id) === Number(route.params['orderId'])) {
            return Rx_1.Observable.of(true);
        }
        else {
            return this.orderService.getOrder(route.params['orderId']);
        }
    };
    OrderResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [order_service_1.OrderService, order_store_1.OrderStore])
    ], OrderResolver);
    return OrderResolver;
}());
exports.OrderResolver = OrderResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK29yZGVyL3NlcnZpY2VzL29yZGVyLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MsbUJBQTJCLFNBQVMsQ0FBQyxDQUFBO0FBRXJDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDRCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUczQztJQUNFLHVCQUFvQixZQUEwQixFQUFVLFVBQXNCO1FBQTFELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFFbkYsK0JBQU8sR0FBUCxVQUFRLEtBQTZCLEVBQUUsS0FBMEI7UUFDL0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxlQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQztJQUNILENBQUM7SUFWSDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBV2Isb0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLHFCQUFhLGdCQVV6QixDQUFBIiwiZmlsZSI6ImFwcC8rY29tbWVyY2UvK29yZGVyL3NlcnZpY2VzL29yZGVyLnJlc29sdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzb2x2ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4vb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlclN0b3JlIH0gZnJvbSAnLi9vcmRlci5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlclJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxhbnk+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZSwgcHJpdmF0ZSBvcmRlclN0b3JlOiBPcmRlclN0b3JlKSB7IH1cblxuICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKE51bWJlcih0aGlzLm9yZGVyU3RvcmUuc3RhdGUuaWQpID09PSBOdW1iZXIocm91dGUucGFyYW1zWydvcmRlcklkJ10pKSB7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub3JkZXJTZXJ2aWNlLmdldE9yZGVyKHJvdXRlLnBhcmFtc1snb3JkZXJJZCddKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
