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
var initState = { id: 1, projects: [], orderStatus: '', orderType: '' };
exports.order = function (state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case 'ORDER.SET_CURRENT_ORDER':
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};
var OrderStore = (function () {
    function OrderStore(store) {
        this.store = store;
    }
    Object.defineProperty(OrderStore.prototype, "data", {
        get: function () {
            return this.store.select('order');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderStore.prototype, "state", {
        get: function () {
            var state;
            this.data.take(1).subscribe(function (order) { return state = order; });
            return state;
        },
        enumerable: true,
        configurable: true
    });
    OrderStore.prototype.update = function (data) {
        this.store.dispatch({ type: 'ORDER.SET_CURRENT_ORDER', payload: data });
    };
    OrderStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], OrderStore);
    return OrderStore;
}());
exports.OrderStore = OrderStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK29yZGVyL3NlcnZpY2VzL29yZGVyLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQkFBNkMsYUFBYSxDQUFDLENBQUE7QUFDM0QscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBSTNDLElBQU0sU0FBUyxHQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ2xFLGFBQUssR0FBdUIsVUFBQyxLQUFzQixFQUFFLE1BQWM7SUFBdEMscUJBQXNCLEdBQXRCLGlCQUFzQjtJQUM5RCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLHlCQUF5QjtZQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBR0Y7SUFDRSxvQkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7SUFFMUMsc0JBQVcsNEJBQUk7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFLO2FBQWhCO1lBQ0UsSUFBSSxLQUFVLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEdBQUcsS0FBSyxFQUFiLENBQWEsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUVNLDJCQUFNLEdBQWIsVUFBYyxJQUFTO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFoQkg7UUFBQyxpQkFBVSxFQUFFOztrQkFBQTtJQWlCYixpQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksa0JBQVUsYUFnQnRCLENBQUEiLCJmaWxlIjoiYXBwLytjb21tZXJjZS8rb3JkZXIvc2VydmljZXMvb3JkZXIuc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25SZWR1Y2VyLCBBY3Rpb24sIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi8rY2FydC9jYXJ0LmludGVyZmFjZSc7XG5cbmNvbnN0IGluaXRTdGF0ZTogYW55ID0geyBpZDogMSwgcHJvamVjdHM6IFtdLCBvcmRlclN0YXR1czogJycsIG9yZGVyVHlwZTogJycgfTtcbmV4cG9ydCBjb25zdCBvcmRlcjogQWN0aW9uUmVkdWNlcjxhbnk+ID0gKHN0YXRlOiBhbnkgPSBpbml0U3RhdGUsIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdPUkRFUi5TRVRfQ1VSUkVOVF9PUkRFUic6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLnBheWxvYWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlclN0b3JlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PikgeyB9XG5cbiAgcHVibGljIGdldCBkYXRhKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KCdvcmRlcicpO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGF0ZSgpOiBPcmRlciB7XG4gICAgbGV0IHN0YXRlOiBhbnk7XG4gICAgdGhpcy5kYXRhLnRha2UoMSkuc3Vic2NyaWJlKG9yZGVyID0+IHN0YXRlID0gb3JkZXIpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZGF0YTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdPUkRFUi5TRVRfQ1VSUkVOVF9PUkRFUicsIHBheWxvYWQ6IGRhdGEgfSk7XG4gIH1cbn0iXX0=
