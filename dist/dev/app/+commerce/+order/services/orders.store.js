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
var ordersState = {
    items: [],
    pagination: {
        totalCount: 0,
        currentPage: 1,
        pageSize: 100,
        hasNextPage: false,
        hasPreviousPage: false,
        numberOfPages: 0
    }
};
exports.orders = function (state, action) {
    if (state === void 0) { state = ordersState; }
    switch (action.type) {
        case 'ORDERS.GET_ORDERS':
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};
var OrdersStore = (function () {
    function OrdersStore(store) {
        this.store = store;
    }
    Object.defineProperty(OrdersStore.prototype, "data", {
        get: function () {
            return this.store.select('orders');
        },
        enumerable: true,
        configurable: true
    });
    OrdersStore.prototype.storeOrders = function (payload) {
        payload.items = payload.items === undefined ? [] : payload.items;
        this.store.dispatch({
            type: 'ORDERS.GET_ORDERS', payload: {
                'items': payload.items,
                'pagination': {
                    'totalCount': payload.totalCount,
                    'currentPage': payload.currentPage + 1,
                    'hasNextPage': payload.hasNextPage,
                    'hasPreviousPage': payload.hasPreviousPage,
                    'numberOfPages': payload.numberOfPages,
                    'pageSize': payload.pageSize
                }
            }
        });
    };
    OrdersStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], OrdersStore);
    return OrdersStore;
}());
exports.OrdersStore = OrdersStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK29yZGVyL3NlcnZpY2VzL29yZGVycy5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0JBQTZDLGFBQWEsQ0FBQyxDQUFBO0FBQzNELHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQVEzQyxJQUFNLFdBQVcsR0FBVztJQUMxQixLQUFLLEVBQUUsRUFBRTtJQUNULFVBQVUsRUFBRTtRQUNWLFVBQVUsRUFBRSxDQUFDO1FBQ2IsV0FBVyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLGFBQWEsRUFBRSxDQUFDO0tBQ2pCO0NBQ0YsQ0FBQztBQUVXLGNBQU0sR0FBdUIsVUFBQyxLQUEyQixFQUFFLE1BQWM7SUFBM0MscUJBQTJCLEdBQTNCLG1CQUEyQjtJQUNwRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLG1CQUFtQjtZQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBSUY7SUFDRSxxQkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7SUFFMUMsc0JBQVcsNkJBQUk7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUVNLGlDQUFXLEdBQWxCLFVBQW1CLE9BQVk7UUFDN0IsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNsQixJQUFJLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFO2dCQUNsQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3RCLFlBQVksRUFBRTtvQkFDWixZQUFZLEVBQUUsT0FBTyxDQUFDLFVBQVU7b0JBQ2hDLGFBQWEsRUFBRSxPQUFPLENBQUMsV0FBVyxHQUFHLENBQUM7b0JBQ3RDLGFBQWEsRUFBRSxPQUFPLENBQUMsV0FBVztvQkFDbEMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGVBQWU7b0JBQzFDLGVBQWUsRUFBRSxPQUFPLENBQUMsYUFBYTtvQkFDdEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2lCQUM3QjthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXZCSDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBd0JiLGtCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxtQkFBVyxjQXVCdkIsQ0FBQSIsImZpbGUiOiJhcHAvK2NvbW1lcmNlLytvcmRlci9zZXJ2aWNlcy9vcmRlcnMuc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25SZWR1Y2VyLCBBY3Rpb24sIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgT3JkZXJzIH0gZnJvbSAnLi4vLi4vK2NhcnQvY2FydC5pbnRlcmZhY2UnO1xuXG5cbi8qKlxuICogT3JkZXJzIHN0b3JlIC1cbiAqL1xuY29uc3Qgb3JkZXJzU3RhdGU6IE9yZGVycyA9IHtcbiAgaXRlbXM6IFtdLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgdG90YWxDb3VudDogMCxcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICBwYWdlU2l6ZTogMTAwLFxuICAgIGhhc05leHRQYWdlOiBmYWxzZSxcbiAgICBoYXNQcmV2aW91c1BhZ2U6IGZhbHNlLFxuICAgIG51bWJlck9mUGFnZXM6IDBcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG9yZGVyczogQWN0aW9uUmVkdWNlcjxhbnk+ID0gKHN0YXRlOiBPcmRlcnMgPSBvcmRlcnNTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ09SREVSUy5HRVRfT1JERVJTJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJzU3RvcmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7IH1cblxuICBwdWJsaWMgZ2V0IGRhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoJ29yZGVycycpO1xuICB9XG5cbiAgcHVibGljIHN0b3JlT3JkZXJzKHBheWxvYWQ6IGFueSk6IHZvaWQge1xuICAgIHBheWxvYWQuaXRlbXMgPSBwYXlsb2FkLml0ZW1zID09PSB1bmRlZmluZWQgPyBbXSA6IHBheWxvYWQuaXRlbXM7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnT1JERVJTLkdFVF9PUkRFUlMnLCBwYXlsb2FkOiB7XG4gICAgICAgICdpdGVtcyc6IHBheWxvYWQuaXRlbXMsXG4gICAgICAgICdwYWdpbmF0aW9uJzoge1xuICAgICAgICAgICd0b3RhbENvdW50JzogcGF5bG9hZC50b3RhbENvdW50LFxuICAgICAgICAgICdjdXJyZW50UGFnZSc6IHBheWxvYWQuY3VycmVudFBhZ2UgKyAxLFxuICAgICAgICAgICdoYXNOZXh0UGFnZSc6IHBheWxvYWQuaGFzTmV4dFBhZ2UsXG4gICAgICAgICAgJ2hhc1ByZXZpb3VzUGFnZSc6IHBheWxvYWQuaGFzUHJldmlvdXNQYWdlLFxuICAgICAgICAgICdudW1iZXJPZlBhZ2VzJzogcGF5bG9hZC5udW1iZXJPZlBhZ2VzLFxuICAgICAgICAgICdwYWdlU2l6ZSc6IHBheWxvYWQucGFnZVNpemVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
