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
var order_service_1 = require('../services/order.service');
var OrderShowComponent = (function () {
    function OrderShowComponent(window, order) {
        this.window = window;
        this.order = order;
    }
    OrderShowComponent.prototype.translationReady = function (field) {
        return 'assetmetadata.' + field.replace(/\./g, '_');
    };
    OrderShowComponent.prototype.downloadMaster = function (masterUrl) {
        this.window.location.href = masterUrl;
    };
    OrderShowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'order-show-component',
            templateUrl: 'order-show.html'
        }), 
        __metadata('design:paramtypes', [Window, order_service_1.OrderService])
    ], OrderShowComponent);
    return OrderShowComponent;
}());
exports.OrderShowComponent = OrderShowComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK29yZGVyLytzaG93L29yZGVyLXNob3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsOEJBQTZCLDJCQUEyQixDQUFDLENBQUE7QUFRekQ7SUFDRSw0QkFBbUIsTUFBYyxFQUFVLEtBQW1CO1FBQTNDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFjO0lBQUksQ0FBQztJQUU1RCw2Q0FBZ0IsR0FBdkIsVUFBd0IsS0FBVTtRQUNoQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLDJDQUFjLEdBQXJCLFVBQXNCLFNBQWlCO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQWZIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxpQkFBaUI7U0FDL0IsQ0FBQzs7MEJBQUE7SUFZRix5QkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksMEJBQWtCLHFCQVU5QixDQUFBIiwiZmlsZSI6ImFwcC8rY29tbWVyY2UvK29yZGVyLytzaG93L29yZGVyLXNob3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9vcmRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnb3JkZXItc2hvdy1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ29yZGVyLXNob3cuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBPcmRlclNob3dDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgd2luZG93OiBXaW5kb3csIHByaXZhdGUgb3JkZXI6IE9yZGVyU2VydmljZSkgeyB9XG5cbiAgcHVibGljIHRyYW5zbGF0aW9uUmVhZHkoZmllbGQ6IGFueSkge1xuICAgIHJldHVybiAnYXNzZXRtZXRhZGF0YS4nICsgZmllbGQucmVwbGFjZSgvXFwuL2csICdfJyk7XG4gIH1cblxuICBwdWJsaWMgZG93bmxvYWRNYXN0ZXIobWFzdGVyVXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndpbmRvdy5sb2NhdGlvbi5ocmVmID0gbWFzdGVyVXJsO1xuICB9XG59XG4iXX0=
