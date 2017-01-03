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
var store_1 = require('@ngrx/store');
var api_service_1 = require('./api.service');
var api_interface_1 = require('../interfaces/api.interface');
var initCartSummary = {
    'projects': [
        {
            'name': 'Project A',
            'projectId': '',
            'itemCount': 0,
            'subtotal': 0
        }
    ],
    'itemCount': 0,
    'total': 0
};
exports.cartSummary = function (state, action) {
    if (state === void 0) { state = initCartSummary; }
    switch (action.type) {
        case 'CART_SUMMARY.UPDATE_SUMMARY':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
var CartSummaryService = (function () {
    function CartSummaryService(api, store) {
        this.api = api;
        this.store = store;
        this.data = this.store.select('cartSummary');
    }
    Object.defineProperty(CartSummaryService.prototype, "state", {
        get: function () {
            var state;
            this.data.take(1).subscribe(function (cartSummary) { return state = cartSummary; });
            return state;
        },
        enumerable: true,
        configurable: true
    });
    CartSummaryService.prototype.loadCartSummary = function () {
        this.getCartSummary();
    };
    CartSummaryService.prototype.addAssetToProjectInCart = function (assetId, transcodeTarget) {
        var _this = this;
        this.api.put(api_interface_1.Api.Orders, 'cart/asset/lineItem/quick', { body: this.formatAsset(assetId, transcodeTarget), parameters: { projectName: this.lastProjectName, region: 'AAA' } }).subscribe(function (data) { return _this.updateCartSummaryStore(data); });
    };
    CartSummaryService.prototype.getCartSummary = function () {
        var _this = this;
        this.api.get(api_interface_1.Api.Orders, 'cart/summary')
            .subscribe(function (data) { return _this.updateCartSummaryStore(data); });
    };
    CartSummaryService.prototype.updateCartSummaryStore = function (cartSummary) {
        this.store.dispatch({ type: 'CART_SUMMARY.UPDATE_SUMMARY', payload: cartSummary });
    };
    Object.defineProperty(CartSummaryService.prototype, "lastProjectName", {
        get: function () {
            return this.state.projects[this.state.projects.length - 1].name;
        },
        enumerable: true,
        configurable: true
    });
    CartSummaryService.prototype.formatAsset = function (assetId, transcodeTarget) {
        if (transcodeTarget === void 0) { transcodeTarget = 'master_copy'; }
        return {
            lineItem: {
                asset: {
                    assetId: assetId
                },
                selectedTranscodeTarget: transcodeTarget
            }
        };
    };
    CartSummaryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, store_1.Store])
    ], CartSummaryService);
    return CartSummaryService;
}());
exports.CartSummaryService = CartSummaryService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY2FydC1zdW1tYXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxzQkFBNkMsYUFBYSxDQUFDLENBQUE7QUFDM0QsNEJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUFvQiw2QkFBNkIsQ0FBQyxDQUFBO0FBR2xELElBQU0sZUFBZSxHQUFRO0lBQzNCLFVBQVUsRUFBRTtRQUNWO1lBQ0UsTUFBTSxFQUFFLFdBQVc7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixXQUFXLEVBQUUsQ0FBQztZQUNkLFVBQVUsRUFBRSxDQUFDO1NBQ2Q7S0FDRjtJQUNELFdBQVcsRUFBRSxDQUFDO0lBQ2QsT0FBTyxFQUFFLENBQUM7Q0FDWCxDQUFDO0FBRVcsbUJBQVcsR0FBdUIsVUFBQyxLQUE0QixFQUFFLE1BQWM7SUFBNUMscUJBQTRCLEdBQTVCLHVCQUE0QjtJQUMxRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLDZCQUE2QjtZQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUdGO0lBR0UsNEJBQW9CLEdBQWUsRUFBVSxLQUFpQjtRQUExQyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxzQkFBVyxxQ0FBSzthQUFoQjtZQUNFLElBQUksS0FBVSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsS0FBSyxHQUFHLFdBQVcsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUVNLDRDQUFlLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxvREFBdUIsR0FBOUIsVUFBK0IsT0FBZSxFQUFFLGVBQXdCO1FBQXhFLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1YsbUJBQUcsQ0FBQyxNQUFNLEVBQ1YsMkJBQTJCLEVBQzNCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUN2SCxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTywyQ0FBYyxHQUF0QjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQUcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTyxtREFBc0IsR0FBOUIsVUFBK0IsV0FBZ0I7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsNkJBQTZCLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELHNCQUFZLCtDQUFlO2FBQTNCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEUsQ0FBQzs7O09BQUE7SUFFTyx3Q0FBVyxHQUFuQixVQUFvQixPQUFlLEVBQUUsZUFBdUM7UUFBdkMsK0JBQXVDLEdBQXZDLCtCQUF1QztRQUMxRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjtnQkFDRCx1QkFBdUIsRUFBRSxlQUFlO2FBQ3pDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFoREg7UUFBQyxpQkFBVSxFQUFFOzswQkFBQTtJQWlEYix5QkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksMEJBQWtCLHFCQWdEOUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2NhcnQtc3VtbWFyeS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvblJlZHVjZXIsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXBpLmludGVyZmFjZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmNvbnN0IGluaXRDYXJ0U3VtbWFyeTogYW55ID0ge1xuICAncHJvamVjdHMnOiBbXG4gICAge1xuICAgICAgJ25hbWUnOiAnUHJvamVjdCBBJyxcbiAgICAgICdwcm9qZWN0SWQnOiAnJyxcbiAgICAgICdpdGVtQ291bnQnOiAwLFxuICAgICAgJ3N1YnRvdGFsJzogMFxuICAgIH1cbiAgXSxcbiAgJ2l0ZW1Db3VudCc6IDAsXG4gICd0b3RhbCc6IDBcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJ0U3VtbWFyeTogQWN0aW9uUmVkdWNlcjxhbnk+ID0gKHN0YXRlOiBhbnkgPSBpbml0Q2FydFN1bW1hcnksIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdDQVJUX1NVTU1BUlkuVVBEQVRFX1NVTU1BUlknOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRTdW1tYXJ5U2VydmljZSB7XG4gIHB1YmxpYyBkYXRhOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnN0b3JlLnNlbGVjdCgnY2FydFN1bW1hcnknKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogYW55IHtcbiAgICBsZXQgc3RhdGU6IGFueTtcbiAgICB0aGlzLmRhdGEudGFrZSgxKS5zdWJzY3JpYmUoY2FydFN1bW1hcnkgPT4gc3RhdGUgPSBjYXJ0U3VtbWFyeSk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcHVibGljIGxvYWRDYXJ0U3VtbWFyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmdldENhcnRTdW1tYXJ5KCk7XG4gIH1cblxuICBwdWJsaWMgYWRkQXNzZXRUb1Byb2plY3RJbkNhcnQoYXNzZXRJZDogc3RyaW5nLCB0cmFuc2NvZGVUYXJnZXQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmFwaS5wdXQoXG4gICAgICBBcGkuT3JkZXJzLFxuICAgICAgJ2NhcnQvYXNzZXQvbGluZUl0ZW0vcXVpY2snLFxuICAgICAgeyBib2R5OiB0aGlzLmZvcm1hdEFzc2V0KGFzc2V0SWQsIHRyYW5zY29kZVRhcmdldCksIHBhcmFtZXRlcnM6IHsgcHJvamVjdE5hbWU6IHRoaXMubGFzdFByb2plY3ROYW1lLCByZWdpb246ICdBQUEnIH0gfVxuICAgICkuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy51cGRhdGVDYXJ0U3VtbWFyeVN0b3JlKGRhdGEpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FydFN1bW1hcnkoKTogdm9pZCB7XG4gICAgdGhpcy5hcGkuZ2V0KEFwaS5PcmRlcnMsICdjYXJ0L3N1bW1hcnknKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMudXBkYXRlQ2FydFN1bW1hcnlTdG9yZShkYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNhcnRTdW1tYXJ5U3RvcmUoY2FydFN1bW1hcnk6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQ0FSVF9TVU1NQVJZLlVQREFURV9TVU1NQVJZJywgcGF5bG9hZDogY2FydFN1bW1hcnkgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBsYXN0UHJvamVjdE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wcm9qZWN0c1t0aGlzLnN0YXRlLnByb2plY3RzLmxlbmd0aCAtIDFdLm5hbWU7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdEFzc2V0KGFzc2V0SWQ6IHN0cmluZywgdHJhbnNjb2RlVGFyZ2V0OiBzdHJpbmcgPSAnbWFzdGVyX2NvcHknKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGluZUl0ZW06IHtcbiAgICAgICAgYXNzZXQ6IHtcbiAgICAgICAgICBhc3NldElkOiBhc3NldElkXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkVHJhbnNjb2RlVGFyZ2V0OiB0cmFuc2NvZGVUYXJnZXRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=
