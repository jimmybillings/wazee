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
var emptyCart = {
    userId: NaN,
    total: 0
};
exports.cart = function (state, action) {
    if (state === void 0) { state = emptyCart; }
    switch (action.type) {
        case 'REPLACE_CART':
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};
var CartStore = (function () {
    function CartStore(store) {
        this.store = store;
    }
    Object.defineProperty(CartStore.prototype, "data", {
        get: function () {
            return this.store.select('cart');
        },
        enumerable: true,
        configurable: true
    });
    CartStore.prototype.replaceWith = function (cart) {
        this.store.dispatch({ type: 'REPLACE_CART', payload: cart });
    };
    Object.defineProperty(CartStore.prototype, "state", {
        get: function () {
            var state;
            this.data.take(1).subscribe(function (cartData) { return state = cartData; });
            return state;
        },
        enumerable: true,
        configurable: true
    });
    CartStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], CartStore);
    return CartStore;
}());
exports.CartStore = CartStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK2NhcnQvc2VydmljZXMvY2FydC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLHNCQUE2QyxhQUFhLENBQUMsQ0FBQTtBQUkzRCxJQUFNLFNBQVMsR0FBUztJQUN0QixNQUFNLEVBQUUsR0FBRztJQUNYLEtBQUssRUFBRSxDQUFDO0NBQ1QsQ0FBQztBQUVXLFlBQUksR0FBdUIsVUFBQyxLQUF1QixFQUFFLE1BQWM7SUFBdkMscUJBQXVCLEdBQXZCLGlCQUF1QjtJQUM5RCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLGNBQWM7WUFFakIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQztZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUdGO0lBQ0UsbUJBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7SUFBRyxDQUFDO0lBRXpDLHNCQUFXLDJCQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFTSwrQkFBVyxHQUFsQixVQUFtQixJQUFTO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsc0JBQVcsNEJBQUs7YUFBaEI7WUFDRSxJQUFJLEtBQVUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUssR0FBRyxRQUFRLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFoQkg7UUFBQyxpQkFBVSxFQUFFOztpQkFBQTtJQWlCYixnQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksaUJBQVMsWUFnQnJCLENBQUEiLCJmaWxlIjoiYXBwLytjb21tZXJjZS8rY2FydC9zZXJ2aWNlcy9jYXJ0LnN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvblJlZHVjZXIsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uL2NhcnQuaW50ZXJmYWNlJztcblxuY29uc3QgZW1wdHlDYXJ0OiBDYXJ0ID0ge1xuICB1c2VySWQ6IE5hTixcbiAgdG90YWw6IDBcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJ0OiBBY3Rpb25SZWR1Y2VyPGFueT4gPSAoc3RhdGU6IENhcnQgPSBlbXB0eUNhcnQsIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRVBMQUNFX0NBUlQnOlxuICAgICAgLy8gcGF5bG9hZCA9IHRoZSB3aG9sZSBjYXJ0XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLnBheWxvYWQpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHt9XG5cbiAgcHVibGljIGdldCBkYXRhKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KCdjYXJ0Jyk7XG4gIH1cblxuICBwdWJsaWMgcmVwbGFjZVdpdGgoY2FydDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdSRVBMQUNFX0NBUlQnLCBwYXlsb2FkOiBjYXJ0IH0pO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGF0ZSgpOiBhbnkge1xuICAgIGxldCBzdGF0ZTogYW55O1xuICAgIHRoaXMuZGF0YS50YWtlKDEpLnN1YnNjcmliZShjYXJ0RGF0YSA9PiBzdGF0ZSA9IGNhcnREYXRhKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==
