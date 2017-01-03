"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var router_1 = require('@angular/router');
var order_store_1 = require('../../../+order/services/order.store');
var wz_notification_service_1 = require('../../../../shared/components/wz-notification/wz.notification.service');
var tab_1 = require('./tab');
var cart_service_1 = require('../../services/cart.service');
var cart_capabilities_1 = require('../../services/cart.capabilities');
var ReviewTabComponent = (function (_super) {
    __extends(ReviewTabComponent, _super);
    function ReviewTabComponent(cartService, userCan, router, order, notification) {
        _super.call(this);
        this.cartService = cartService;
        this.userCan = userCan;
        this.router = router;
        this.order = order;
        this.notification = notification;
        this.tabNotify = this.notify;
    }
    ReviewTabComponent.prototype.ngOnInit = function () {
        this.cart = this.cartService.data;
        this.canPurchaseOnCredit = this.userCan.purchaseOnCredit();
        this.addPayByCardForm();
    };
    ReviewTabComponent.prototype.purchaseOnCredit = function () {
        var _this = this;
        this.cartService.purchaseOnCredit().subscribe(function (data) {
            _this.order.update(data);
            _this.router.navigate(['/commerce/order/' + data.id]).then(function () {
                _this.notification.create('NOTIFICATION.ORDER_PLACED');
            });
        });
    };
    ReviewTabComponent.prototype.addPayByCardForm = function () {
        var _this = this;
        this.cart.subscribe(function (currentCart) {
            _this.createForm(currentCart);
        });
    };
    ReviewTabComponent.prototype.createForm = function (currentCart) {
        var desc = currentCart.itemCount + ' item';
        if (currentCart.itemCount > 1) {
            desc += 's';
        }
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var postUrl = baseUrl + 'api/orders/v1/cart/stripe/payment?redirect=true&api_key=' + localStorage.getItem('token');
            var f = document.createElement('form');
            f.setAttribute('action', postUrl);
            f.setAttribute('method', 'POST');
            f.setAttribute('id', 'stripeForm');
            f.setAttribute('style', 'padding-left: 20px');
            var s = document.createElement('script');
            s.src = 'https://checkout.stripe.com/checkout.js';
            s.setAttribute('class', 'stripe-button');
            s.setAttribute('data-key', currentCart.stripePublicKey);
            s.setAttribute('data-amount', '' + (currentCart.total * 100));
            s.setAttribute('data-name', 'Pay With Credit Card');
            s.setAttribute('data-description', desc);
            s.setAttribute('data-image', 'assets/img/logo/logo-c-alt.png');
            s.setAttribute('data-allow-remember-me', 'false');
            s.setAttribute('data-email', currentUser.emailAddress);
            s.setAttribute('data-zip-code', 'true');
            s.setAttribute('data-locale', 'auto');
            f.appendChild(s);
            document.getElementById('paymentArea_').appendChild(f);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ReviewTabComponent.prototype, "tabNotify", void 0);
    ReviewTabComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'review-tab-component',
            templateUrl: 'review-tab.html'
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, cart_capabilities_1.CartCapabilities, router_1.Router, order_store_1.OrderStore, wz_notification_service_1.WzNotificationService])
    ], ReviewTabComponent);
    return ReviewTabComponent;
}(tab_1.Tab));
exports.ReviewTabComponent = ReviewTabComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK2NhcnQvY29tcG9uZW50cy90YWJzL3Jldmlldy10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUV4RSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyw0QkFBMkIsc0NBQXNDLENBQUMsQ0FBQTtBQUNsRSx3Q0FBc0MsdUVBQXVFLENBQUMsQ0FBQTtBQUM5RyxvQkFBb0IsT0FBTyxDQUFDLENBQUE7QUFDNUIsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsa0NBQWlDLGtDQUFrQyxDQUFDLENBQUE7QUFRcEU7SUFBd0Msc0NBQUc7SUFLekMsNEJBQW9CLFdBQXdCLEVBQ2xDLE9BQXlCLEVBQ3pCLE1BQWMsRUFDZCxLQUFpQixFQUNqQixZQUFtQztRQUMzQyxpQkFBTyxDQUFDO1FBTFUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbEMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBUm5DLGNBQVMsR0FBeUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQVV4RCxDQUFDO0lBRU0scUNBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sNkNBQWdCLEdBQXZCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNoRCxLQUFJLENBQUMsS0FB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QztJQUNMLENBQUM7SUEzREg7UUFBQyxhQUFNLEVBQUU7O3lEQUFBO0lBTlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLGlCQUFpQjtTQUMvQixDQUFDOzswQkFBQTtJQThERix5QkFBQztBQUFELENBN0RBLEFBNkRDLENBN0R1QyxTQUFHLEdBNkQxQztBQTdEWSwwQkFBa0IscUJBNkQ5QixDQUFBIiwiZmlsZSI6ImFwcC8rY29tbWVyY2UvK2NhcnQvY29tcG9uZW50cy90YWJzL3Jldmlldy10YWIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3JkZXJTdG9yZSB9IGZyb20gJy4uLy4uLy4uLytvcmRlci9zZXJ2aWNlcy9vcmRlci5zdG9yZSc7XG5pbXBvcnQgeyBXek5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy93ei1ub3RpZmljYXRpb24vd3oubm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnLi90YWInO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydENhcGFiaWxpdGllcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhcnQuY2FwYWJpbGl0aWVzJztcbmRlY2xhcmUgdmFyIGJhc2VVcmw6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmV2aWV3LXRhYi1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ3Jldmlldy10YWIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmV2aWV3VGFiQ29tcG9uZW50IGV4dGVuZHMgVGFiIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIHRhYk5vdGlmeTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSB0aGlzLm5vdGlmeTtcblxuICBwdWJsaWMgY2FydDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgY2FuUHVyY2hhc2VPbkNyZWRpdDogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyQ2FuOiBDYXJ0Q2FwYWJpbGl0aWVzLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBvcmRlcjogT3JkZXJTdG9yZSxcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjogV3pOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcnQgPSB0aGlzLmNhcnRTZXJ2aWNlLmRhdGE7XG4gICAgdGhpcy5jYW5QdXJjaGFzZU9uQ3JlZGl0ID0gdGhpcy51c2VyQ2FuLnB1cmNoYXNlT25DcmVkaXQoKTtcbiAgICB0aGlzLmFkZFBheUJ5Q2FyZEZvcm0oKTtcbiAgfVxuXG4gIHB1YmxpYyBwdXJjaGFzZU9uQ3JlZGl0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UucHVyY2hhc2VPbkNyZWRpdCgpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMub3JkZXIudXBkYXRlKGRhdGEpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY29tbWVyY2Uvb3JkZXIvJyArIGRhdGEuaWRdKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uY3JlYXRlKCdOT1RJRklDQVRJT04uT1JERVJfUExBQ0VEJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgYWRkUGF5QnlDYXJkRm9ybSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2FydC5zdWJzY3JpYmUoY3VycmVudENhcnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtKGN1cnJlbnRDYXJ0KTtcbiAgICAgICAgICB9KTtcbiAgfVxuICBwdWJsaWMgY3JlYXRlRm9ybShjdXJyZW50Q2FydDphbnkpOiB2b2lkIHtcbiAgICAgICAgbGV0IGRlc2MgPSBjdXJyZW50Q2FydC5pdGVtQ291bnQgKyAnIGl0ZW0nO1xuICAgICAgICBpZiAoY3VycmVudENhcnQuaXRlbUNvdW50ID4gMSkge1xuICAgICAgICAgICAgZGVzYyArPSdzJztcbiAgICAgICAgfVxuICAgICAgIGxldCBjdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpO1xuICAgICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgICAgICBsZXQgcG9zdFVybCA9IGJhc2VVcmwrJ2FwaS9vcmRlcnMvdjEvY2FydC9zdHJpcGUvcGF5bWVudD9yZWRpcmVjdD10cnVlJmFwaV9rZXk9Jytsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgICAgbGV0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgIGYuc2V0QXR0cmlidXRlKCdhY3Rpb24nLHBvc3RVcmwpO1xuICAgICAgICAgICBmLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywnUE9TVCcpO1xuICAgICAgICAgICBmLnNldEF0dHJpYnV0ZSgnaWQnLCdzdHJpcGVGb3JtJyk7XG4gICAgICAgICAgIGYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3BhZGRpbmctbGVmdDogMjBweCcpO1xuICAgICAgICAgICBsZXQgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICBzLnNyYyA9ICdodHRwczovL2NoZWNrb3V0LnN0cmlwZS5jb20vY2hlY2tvdXQuanMnO1xuICAgICAgICAgICBzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzdHJpcGUtYnV0dG9uJyk7XG4gICAgICAgICAgIHMuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsY3VycmVudENhcnQuc3RyaXBlUHVibGljS2V5KTtcbiAgICAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JywnJysoY3VycmVudENhcnQudG90YWwgKiAxMDApKTtcbiAgICAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsJ1BheSBXaXRoIENyZWRpdCBDYXJkJyk7XG4gICAgICAgICAgIHMuc2V0QXR0cmlidXRlKCdkYXRhLWRlc2NyaXB0aW9uJyxkZXNjKTtcbiAgICAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnLCdhc3NldHMvaW1nL2xvZ28vbG9nby1jLWFsdC5wbmcnKTtcbiAgICAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWxsb3ctcmVtZW1iZXItbWUnLCdmYWxzZScpO1xuICAgICAgICAgICBzLnNldEF0dHJpYnV0ZSgnZGF0YS1lbWFpbCcsY3VycmVudFVzZXIuZW1haWxBZGRyZXNzKTtcbiAgICAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtemlwLWNvZGUnLCd0cnVlJyk7XG4gICAgICAgICAgIHMuc2V0QXR0cmlidXRlKCdkYXRhLWxvY2FsZScsJ2F1dG8nKTtcbiAgICAgICAgICAgZi5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW1lbnRBcmVhXycpLmFwcGVuZENoaWxkKGYpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
