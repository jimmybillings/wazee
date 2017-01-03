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
var OrderItemListComponent = (function () {
    function OrderItemListComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OrderItemListComponent.prototype, "orders", void 0);
    OrderItemListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'order-item-list',
            templateUrl: 'order-item-list.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], OrderItemListComponent);
    return OrderItemListComponent;
}());
exports.OrderItemListComponent = OrderItemListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK29yZGVyL2NvbXBvbmVudHMvb3JkZXItaXRlbS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBELGVBQWUsQ0FBQyxDQUFBO0FBUzFFO0lBQUE7SUFFQSxDQUFDO0lBREM7UUFBQyxZQUFLLEVBQUU7OzBEQUFBO0lBUlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOzs4QkFBQTtJQUlGLDZCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSw4QkFBc0IseUJBRWxDLENBQUEiLCJmaWxlIjoiYXBwLytjb21tZXJjZS8rb3JkZXIvY29tcG9uZW50cy9vcmRlci1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnb3JkZXItaXRlbS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdvcmRlci1pdGVtLWxpc3QuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgT3JkZXJJdGVtTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG9yZGVyczogYW55O1xufVxuIl19
