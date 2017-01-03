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
var api_service_1 = require('../../../shared/services/api.service');
var api_interface_1 = require('../../../shared/interfaces/api.interface');
var cart_summary_service_1 = require('../../../shared/services/cart-summary.service');
var current_user_model_1 = require('../../../shared/services/current-user.model');
var cart_store_1 = require('./cart.store');
var cart_utilities_1 = require('./cart.utilities');
var CartService = (function () {
    function CartService(store, api, cartSummaryService, currentUser) {
        var _this = this;
        this.store = store;
        this.api = api;
        this.cartSummaryService = cartSummaryService;
        this.currentUser = currentUser;
        this.updateCart = function (wholeCartResponse) {
            _this.store.replaceWith(wholeCartResponse);
            _this.cartSummaryService.loadCartSummary();
        };
    }
    Object.defineProperty(CartService.prototype, "data", {
        get: function () {
            return this.store.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartService.prototype, "state", {
        get: function () {
            return this.store.state;
        },
        enumerable: true,
        configurable: true
    });
    CartService.prototype.initializeData = function () {
        var _this = this;
        return this.api.get(api_interface_1.Api.Orders, 'cart', { loading: true })
            .do(function (wholeCartResponse) { return _this.store.replaceWith(wholeCartResponse); })
            .flatMap(function (_) { return _this.addProjectIfNoProjectsExist(); })
            .takeLast(1)
            .map(function (_) { return {}; })
            .share();
    };
    CartService.prototype.addProject = function () {
        this.addProjectAndReturnObservable().subscribe();
    };
    CartService.prototype.removeProject = function (project) {
        var _this = this;
        this.api.delete(api_interface_1.Api.Orders, "cart/project/" + project.id, { loading: true })
            .subscribe(function (wholeCartResponse) {
            _this.updateCart(wholeCartResponse);
            _this.addProjectIfNoProjectsExist().subscribe();
        });
    };
    CartService.prototype.updateProject = function (project) {
        this.api.put(api_interface_1.Api.Orders, 'cart/project', { body: project, loading: true })
            .subscribe(this.updateCart);
    };
    CartService.prototype.moveLineItemTo = function (project, lineItem) {
        this.api.put(api_interface_1.Api.Orders, 'cart/move/lineItem', { parameters: { lineItemId: lineItem.id, projectId: project.id }, loading: true })
            .subscribe(this.updateCart);
    };
    CartService.prototype.cloneLineItem = function (lineItem) {
        this.api.put(api_interface_1.Api.Orders, 'cart/clone/lineItem', { parameters: { lineItemId: lineItem.id }, loading: true })
            .subscribe(this.updateCart);
    };
    CartService.prototype.removeLineItem = function (lineItem) {
        this.api.delete(api_interface_1.Api.Orders, "cart/asset/" + lineItem.id, { loading: true })
            .subscribe(this.updateCart);
    };
    CartService.prototype.purchaseOnCredit = function () {
        var _this = this;
        return this.api.post(api_interface_1.Api.Orders, 'cart/checkout/purchaseOnCredit', { loading: true }).do(function () {
            _this.cartSummaryService.loadCartSummary();
        });
    };
    CartService.prototype.editLineItem = function (lineItem, fieldToEdit) {
        Object.assign(lineItem, fieldToEdit);
        this.api.put(api_interface_1.Api.Orders, "cart/update/lineItem/" + lineItem.id, { body: lineItem }).take(1)
            .subscribe(this.updateCart);
    };
    CartService.prototype.addProjectIfNoProjectsExist = function () {
        return ((this.state.projects || []).length === 0) ? this.addProjectAndReturnObservable() : Rx_1.Observable.of({});
    };
    CartService.prototype.addProjectAndReturnObservable = function () {
        return this.api.post(api_interface_1.Api.Orders, 'cart/project', { body: this.createAddProjectRequestBody(), loading: true })
            .do(this.updateCart)
            .share();
    };
    CartService.prototype.createAddProjectRequestBody = function () {
        var existingNames = (this.state.projects || []).map(function (project) { return project.name; });
        return {
            name: cart_utilities_1.CartUtilities.nextNewProjectNameGiven(existingNames),
            clientName: this.fullName
        };
    };
    Object.defineProperty(CartService.prototype, "fullName", {
        get: function () {
            var userName;
            this.currentUser.fullName().take(1).subscribe(function (fullName) { return userName = fullName; });
            return userName;
        },
        enumerable: true,
        configurable: true
    });
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [cart_store_1.CartStore, api_service_1.ApiService, cart_summary_service_1.CartSummaryService, current_user_model_1.CurrentUser])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK2NhcnQvc2VydmljZXMvY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsbUJBQTJCLFNBQVMsQ0FBQyxDQUFBO0FBRXJDLDRCQUEyQixzQ0FBc0MsQ0FBQyxDQUFBO0FBQ2xFLDhCQUE2QiwwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3hFLHFDQUFtQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ25GLG1DQUE0Qiw2Q0FBNkMsQ0FBQyxDQUFBO0FBRzFFLDJCQUEwQixjQUFjLENBQUMsQ0FBQTtBQUN6QywrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUdqRDtJQUNFLHFCQUNVLEtBQWdCLEVBQ2hCLEdBQWUsRUFDZixrQkFBc0MsRUFDdEMsV0FBd0I7UUFMcEMsaUJBNkdDO1FBM0dXLFVBQUssR0FBTCxLQUFLLENBQVc7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFvRzFCLGVBQVUsR0FBRyxVQUFDLGlCQUFzQjtZQUMxQyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxDQUFDLENBQUE7SUF0R0csQ0FBQztJQUVMLHNCQUFXLDZCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw4QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQVdNLG9DQUFjLEdBQXJCO1FBQUEsaUJBT0M7UUFOQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcs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WixDQUFZLENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsOEJBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUM7WUFDMUQsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQsc0JBQVksaUNBQVE7YUFBcEI7WUFDRSxJQUFJLFFBQWdCLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxHQUFHLFFBQVEsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUF2R0g7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQThHYixrQkFBQztBQUFELENBN0dBLEFBNkdDLElBQUE7QUE3R1ksbUJBQVcsY0E2R3ZCLENBQUEiLCJmaWxlIjoiYXBwLytjb21tZXJjZS8rY2FydC9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpLCBBcGlCb2R5IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvYXBpLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYXJ0U3VtbWFyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY2FydC1zdW1tYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC11c2VyLm1vZGVsJztcblxuaW1wb3J0IHsgUHJvamVjdCwgTGluZUl0ZW0gfSBmcm9tICcuLi9jYXJ0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYXJ0U3RvcmUgfSBmcm9tICcuL2NhcnQuc3RvcmUnO1xuaW1wb3J0IHsgQ2FydFV0aWxpdGllcyB9IGZyb20gJy4vY2FydC51dGlsaXRpZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBDYXJ0U3RvcmUsXG4gICAgcHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0U3VtbWFyeVNlcnZpY2U6IENhcnRTdW1tYXJ5U2VydmljZSxcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlclxuICApIHsgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBPYnNlcnZhYmxlPENhcnRTdG9yZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmRhdGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YXRlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc3RhdGU7XG4gIH1cblxuICAvLyBMb2FkcyB0aGUgY2FydCBhbmQgcmV0dXJucyBqdXN0IHRoZSBvYnNlcnZhYmxlJ3MgdGVybWluYXRpb24gbm90aWZpY2F0aW9uLFxuICAvLyBiZWNhdXNlIG91ciBzdWJzY3JpYmVycyBjYXJlIGFib3V0IHRoZSBmYWN0IHRoYXQgd2UgYXJlIGNvbXBsZXRlLCBidXQgdGhleVxuICAvLyBzaG91bGQgYmUgZ2V0dGluZyB0aGUgZGF0YSBlbHNld2hlcmUuICBBbHNvLCB3ZSB0YWtlIGEgZGV0b3VyIHRvIGFkZCBhIHByb2plY3RcbiAgLy8gaWYgb25lIGRvZXNuJ3QgZXhpc3QsIHdoaWNoIGNyZWF0ZXMgYSBzZWNvbmQgSFRUUCBjYWxsIChvciBqdXN0IHJldHVybnNcbiAgLy8gYSBzeW5jaHJvbm91cyBvYnNlcnZhYmxlKS4gIEVpdGhlciB3YXksIHdlIGZsYXRNYXAoKSB0aGF0IHNlY29uZCBjYWxsJ3Mgb2JzZXJ2YWJsZVxuICAvLyB0byB0aGlzIG9uZSwgYW5kIHRoZSB0ZXJtaW5hdGlvbiBub3RpZmljYXRpb24gaXMgZGVsYXllZCB1bnRpbCBib3RoIG9ic2VydmFibGVzXG4gIC8vIGFyZSB0ZXJtaW5hdGVkLiAgV2UgdGFrZSB0aGUgbGFzdCBlbWl0dGVkIHZhbHVlIG9ubHksIGFuZCBtYXAgdGhlIGRhdGEgb3V0IG9mIGl0LlxuICAvLyBGaW5hbGx5LCB3ZSBjYWxsIHNoYXJlKCkgdG8gZW5zdXJlIHRoYXQgdGhlIGRvKCkgY2FsbCBoYXBwZW5zIGV4YWN0bHkgb25jZSBpbnN0ZWFkXG4gIC8vIG9mIG9uY2UgcGVyIHN1YnNjcmliZXIuXG4gIHB1YmxpYyBpbml0aWFsaXplRGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFwaS5nZXQoQXBpLk9yZGVycywgJ2NhcnQnLCB7IGxvYWRpbmc6IHRydWUgfSlcbiAgICAgIC5kbyh3aG9sZUNhcnRSZXNwb25zZSA9PiB0aGlzLnN0b3JlLnJlcGxhY2VXaXRoKHdob2xlQ2FydFJlc3BvbnNlKSlcbiAgICAgIC5mbGF0TWFwKF8gPT4gdGhpcy5hZGRQcm9qZWN0SWZOb1Byb2plY3RzRXhpc3QoKSlcbiAgICAgIC50YWtlTGFzdCgxKVxuICAgICAgLm1hcChfID0+IHsgcmV0dXJuIHt9OyB9KVxuICAgICAgLnNoYXJlKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkUHJvamVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFByb2plY3RBbmRSZXR1cm5PYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0KTogdm9pZCB7XG4gICAgdGhpcy5hcGkuZGVsZXRlKEFwaS5PcmRlcnMsIGBjYXJ0L3Byb2plY3QvJHtwcm9qZWN0LmlkfWAsIHsgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgLnN1YnNjcmliZSh3aG9sZUNhcnRSZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FydCh3aG9sZUNhcnRSZXNwb25zZSk7XG4gICAgICAgIHRoaXMuYWRkUHJvamVjdElmTm9Qcm9qZWN0c0V4aXN0KCkuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVQcm9qZWN0KHByb2plY3Q6IFByb2plY3QpOiB2b2lkIHtcbiAgICB0aGlzLmFwaS5wdXQoQXBpLk9yZGVycywgJ2NhcnQvcHJvamVjdCcsIHsgYm9keTogcHJvamVjdCwgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUNhcnQpO1xuICB9XG5cbiAgcHVibGljIG1vdmVMaW5lSXRlbVRvKHByb2plY3Q6IFByb2plY3QsIGxpbmVJdGVtOiBMaW5lSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuYXBpLnB1dChBcGkuT3JkZXJzLCAnY2FydC9tb3ZlL2xpbmVJdGVtJywgeyBwYXJhbWV0ZXJzOiB7IGxpbmVJdGVtSWQ6IGxpbmVJdGVtLmlkLCBwcm9qZWN0SWQ6IHByb2plY3QuaWQgfSwgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUNhcnQpO1xuICB9XG5cbiAgcHVibGljIGNsb25lTGluZUl0ZW0obGluZUl0ZW06IExpbmVJdGVtKTogdm9pZCB7XG4gICAgdGhpcy5hcGkucHV0KEFwaS5PcmRlcnMsICdjYXJ0L2Nsb25lL2xpbmVJdGVtJywgeyBwYXJhbWV0ZXJzOiB7IGxpbmVJdGVtSWQ6IGxpbmVJdGVtLmlkIH0sIGxvYWRpbmc6IHRydWUgfSlcbiAgICAgIC5zdWJzY3JpYmUodGhpcy51cGRhdGVDYXJ0KTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaW5lSXRlbShsaW5lSXRlbTogTGluZUl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLmFwaS5kZWxldGUoQXBpLk9yZGVycywgYGNhcnQvYXNzZXQvJHtsaW5lSXRlbS5pZH1gLCB7IGxvYWRpbmc6IHRydWUgfSlcbiAgICAgIC5zdWJzY3JpYmUodGhpcy51cGRhdGVDYXJ0KTtcbiAgfVxuXG4gIHB1YmxpYyBwdXJjaGFzZU9uQ3JlZGl0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLnBvc3QoQXBpLk9yZGVycywgJ2NhcnQvY2hlY2tvdXQvcHVyY2hhc2VPbkNyZWRpdCcsIHsgbG9hZGluZzogdHJ1ZSB9KS5kbygoKSA9PiB7XG4gICAgICB0aGlzLmNhcnRTdW1tYXJ5U2VydmljZS5sb2FkQ2FydFN1bW1hcnkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBlZGl0TGluZUl0ZW0obGluZUl0ZW06IExpbmVJdGVtLCBmaWVsZFRvRWRpdDogYW55KTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbihsaW5lSXRlbSwgZmllbGRUb0VkaXQpO1xuICAgIHRoaXMuYXBpLnB1dChBcGkuT3JkZXJzLCBgY2FydC91cGRhdGUvbGluZUl0ZW0vJHtsaW5lSXRlbS5pZH1gLCB7IGJvZHk6IGxpbmVJdGVtIH0pLnRha2UoMSlcbiAgICAgIC5zdWJzY3JpYmUodGhpcy51cGRhdGVDYXJ0KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUHJvamVjdElmTm9Qcm9qZWN0c0V4aXN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuICgodGhpcy5zdGF0ZS5wcm9qZWN0cyB8fCBbXSkubGVuZ3RoID09PSAwKSA/IHRoaXMuYWRkUHJvamVjdEFuZFJldHVybk9ic2VydmFibGUoKSA6IE9ic2VydmFibGUub2Yoe30pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQcm9qZWN0QW5kUmV0dXJuT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFwaS5wb3N0KEFwaS5PcmRlcnMsICdjYXJ0L3Byb2plY3QnLCB7IGJvZHk6IHRoaXMuY3JlYXRlQWRkUHJvamVjdFJlcXVlc3RCb2R5KCksIGxvYWRpbmc6IHRydWUgfSlcbiAgICAgIC5kbyh0aGlzLnVwZGF0ZUNhcnQpXG4gICAgICAuc2hhcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQWRkUHJvamVjdFJlcXVlc3RCb2R5KCk6IEFwaUJvZHkge1xuICAgIGxldCBleGlzdGluZ05hbWVzOiBBcnJheTxzdHJpbmc+ID1cbiAgICAgICh0aGlzLnN0YXRlLnByb2plY3RzIHx8IFtdKS5tYXAoKHByb2plY3Q6IGFueSkgPT4gcHJvamVjdC5uYW1lKTtcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBDYXJ0VXRpbGl0aWVzLm5leHROZXdQcm9qZWN0TmFtZUdpdmVuKGV4aXN0aW5nTmFtZXMpLFxuICAgICAgY2xpZW50TmFtZTogdGhpcy5mdWxsTmFtZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldCBmdWxsTmFtZSgpOiBzdHJpbmcge1xuICAgIGxldCB1c2VyTmFtZTogc3RyaW5nO1xuICAgIHRoaXMuY3VycmVudFVzZXIuZnVsbE5hbWUoKS50YWtlKDEpLnN1YnNjcmliZShmdWxsTmFtZSA9PiB1c2VyTmFtZSA9IGZ1bGxOYW1lKTtcbiAgICByZXR1cm4gdXNlck5hbWU7XG4gIH1cbiAgLy8gVGhpcyBpcyBhbiBcImluc3RhbmNlIGFycm93IGZ1bmN0aW9uXCIsIHdoaWNoIHNhdmVzIHVzIGZyb20gaGF2aW5nIHRvIFwiYmluZCh0aGlzKVwiXG4gIC8vIGV2ZXJ5IHRpbWUgd2UgdXNlIHRoaXMgZnVuY3Rpb24gYXMgYSBjYWxsYmFjay5cbiAgcHJpdmF0ZSB1cGRhdGVDYXJ0ID0gKHdob2xlQ2FydFJlc3BvbnNlOiBhbnkpOiB2b2lkID0+IHtcbiAgICB0aGlzLnN0b3JlLnJlcGxhY2VXaXRoKHdob2xlQ2FydFJlc3BvbnNlKTtcbiAgICB0aGlzLmNhcnRTdW1tYXJ5U2VydmljZS5sb2FkQ2FydFN1bW1hcnkoKTtcbiAgfVxufVxuIl19
