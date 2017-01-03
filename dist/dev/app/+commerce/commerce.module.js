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
var router_1 = require('@angular/router');
var shared_module_1 = require('../shared/shared.module');
var commerce_component_1 = require('./commerce.component');
var commerce_routes_1 = require('./commerce.routes');
var cart_service_1 = require('./+cart/services/cart.service');
var cart_store_1 = require('./+cart/services/cart.store');
var cart_capabilities_1 = require('./+cart/services/cart.capabilities');
var cart_component_1 = require('./+cart/cart.component');
var cart_tab_component_1 = require('./+cart/components/tabs/cart-tab.component');
var review_tab_component_1 = require('./+cart/components/tabs/review-tab.component');
var billing_tab_component_1 = require('./+cart/components/tabs/billing-tab.component');
var payment_tab_component_1 = require('./+cart/components/tabs/payment-tab.component');
var confirm_tab_component_1 = require('./+cart/components/tabs/confirm-tab.component');
var projects_component_1 = require('./+cart/components/projects.component');
var line_items_component_1 = require('./+cart/components/line-items.component');
var asset_component_1 = require('./+cart/components/asset.component');
var orders_component_1 = require('./+order/+index/orders.component');
var order_show_component_1 = require('./+order/+show/order-show.component');
var order_service_1 = require('./+order/services/order.service');
var orders_service_1 = require('./+order/services/orders.service');
var order_store_1 = require('./+order/services/order.store');
var orders_store_1 = require('./+order/services/orders.store');
var order_item_list_component_1 = require('./+order/components/order-item-list.component');
var CommerceModule = (function () {
    function CommerceModule() {
    }
    CommerceModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, router_1.RouterModule.forChild(commerce_routes_1.COMMERCE_ROUTES)],
            declarations: [
                commerce_component_1.CommerceComponent,
                cart_component_1.CartComponent,
                cart_tab_component_1.CartTabComponent,
                review_tab_component_1.ReviewTabComponent,
                billing_tab_component_1.BillingTabComponent,
                payment_tab_component_1.PaymentTabComponent,
                confirm_tab_component_1.ConfirmTabComponent,
                projects_component_1.ProjectsComponent,
                line_items_component_1.LineItemsComponent,
                asset_component_1.AssetComponent,
                order_show_component_1.OrderShowComponent,
                orders_component_1.OrdersComponent,
                order_item_list_component_1.OrderItemListComponent
            ],
            exports: [commerce_component_1.CommerceComponent, cart_component_1.CartComponent, order_show_component_1.OrderShowComponent, orders_component_1.OrdersComponent],
            providers: [cart_service_1.CartService, order_service_1.OrderService, orders_service_1.OrdersService, cart_store_1.CartStore, cart_capabilities_1.CartCapabilities, order_store_1.OrderStore, orders_store_1.OrdersStore]
        }), 
        __metadata('design:paramtypes', [])
    ], CommerceModule);
    return CommerceModule;
}());
exports.CommerceModule = CommerceModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvY29tbWVyY2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFFdkQsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFDekQsZ0NBQWdDLG1CQUFtQixDQUFDLENBQUE7QUFHcEQsNkJBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsMkJBQTBCLDZCQUE2QixDQUFDLENBQUE7QUFDeEQsa0NBQWlDLG9DQUFvQyxDQUFDLENBQUE7QUFDdEUsK0JBQThCLHdCQUF3QixDQUFDLENBQUE7QUFDdkQsbUNBQWlDLDRDQUE0QyxDQUFDLENBQUE7QUFDOUUscUNBQW1DLDhDQUE4QyxDQUFDLENBQUE7QUFDbEYsc0NBQW9DLCtDQUErQyxDQUFDLENBQUE7QUFDcEYsc0NBQW9DLCtDQUErQyxDQUFDLENBQUE7QUFDcEYsc0NBQW9DLCtDQUErQyxDQUFDLENBQUE7QUFDcEYsbUNBQWtDLHVDQUF1QyxDQUFDLENBQUE7QUFDMUUscUNBQW1DLHlDQUF5QyxDQUFDLENBQUE7QUFDN0UsZ0NBQStCLG9DQUFvQyxDQUFDLENBQUE7QUFHcEUsaUNBQWdDLGtDQUFrQyxDQUFDLENBQUE7QUFDbkUscUNBQW1DLHFDQUFxQyxDQUFDLENBQUE7QUFDekUsOEJBQTZCLGlDQUFpQyxDQUFDLENBQUE7QUFDL0QsK0JBQThCLGtDQUFrQyxDQUFDLENBQUE7QUFDakUsNEJBQTJCLCtCQUErQixDQUFDLENBQUE7QUFDM0QsNkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0QsMENBQXVDLCtDQUErQyxDQUFDLENBQUE7QUF1QnZGO0lBQUE7SUFBOEIsQ0FBQztJQXJCL0I7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLHFCQUFZLENBQUMsUUFBUSxDQUFDLGlDQUFlLENBQUMsQ0FBQztZQUMvRCxZQUFZLEVBQUU7Z0JBQ1osc0NBQWlCO2dCQUNqQiw4QkFBYTtnQkFDYixxQ0FBZ0I7Z0JBQ2hCLHlDQUFrQjtnQkFDbEIsMkNBQW1CO2dCQUNuQiwyQ0FBbUI7Z0JBQ25CLDJDQUFtQjtnQkFDbkIsc0NBQWlCO2dCQUNqQix5Q0FBa0I7Z0JBQ2xCLGdDQUFjO2dCQUNkLHlDQUFrQjtnQkFDbEIsa0NBQWU7Z0JBQ2Ysa0RBQXNCO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFLENBQUMsc0NBQWlCLEVBQUUsOEJBQWEsRUFBRSx5Q0FBa0IsRUFBRSxrQ0FBZSxDQUFDO1lBQ2hGLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsNEJBQVksRUFBRSw4QkFBYSxFQUFFLHNCQUFTLEVBQUUsb0NBQWdCLEVBQUUsd0JBQVUsRUFBRSwwQkFBVyxDQUFDO1NBQzVHLENBQUM7O3NCQUFBO0lBRTRCLHFCQUFDO0FBQUQsQ0FBOUIsQUFBK0IsSUFBQTtBQUFsQixzQkFBYyxpQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC8rY29tbWVyY2UvY29tbWVyY2UubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgQ29tbWVyY2VDb21wb25lbnQgfSBmcm9tICcuL2NvbW1lcmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDT01NRVJDRV9ST1VURVMgfSBmcm9tICcuL2NvbW1lcmNlLnJvdXRlcyc7XG5cbi8vIENhcnQgU3R1ZmZcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi8rY2FydC9zZXJ2aWNlcy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFN0b3JlIH0gZnJvbSAnLi8rY2FydC9zZXJ2aWNlcy9jYXJ0LnN0b3JlJztcbmltcG9ydCB7IENhcnRDYXBhYmlsaXRpZXMgfSBmcm9tICcuLytjYXJ0L3NlcnZpY2VzL2NhcnQuY2FwYWJpbGl0aWVzJztcbmltcG9ydCB7IENhcnRDb21wb25lbnQgfSBmcm9tICcuLytjYXJ0L2NhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IENhcnRUYWJDb21wb25lbnQgfSBmcm9tICcuLytjYXJ0L2NvbXBvbmVudHMvdGFicy9jYXJ0LXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV2aWV3VGFiQ29tcG9uZW50IH0gZnJvbSAnLi8rY2FydC9jb21wb25lbnRzL3RhYnMvcmV2aWV3LXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmlsbGluZ1RhYkNvbXBvbmVudCB9IGZyb20gJy4vK2NhcnQvY29tcG9uZW50cy90YWJzL2JpbGxpbmctdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50VGFiQ29tcG9uZW50IH0gZnJvbSAnLi8rY2FydC9jb21wb25lbnRzL3RhYnMvcGF5bWVudC10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1UYWJDb21wb25lbnQgfSBmcm9tICcuLytjYXJ0L2NvbXBvbmVudHMvdGFicy9jb25maXJtLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdHNDb21wb25lbnQgfSBmcm9tICcuLytjYXJ0L2NvbXBvbmVudHMvcHJvamVjdHMuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmVJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vK2NhcnQvY29tcG9uZW50cy9saW5lLWl0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc3NldENvbXBvbmVudCB9IGZyb20gJy4vK2NhcnQvY29tcG9uZW50cy9hc3NldC5jb21wb25lbnQnO1xuXG4vLyBPcmRlciBTdHVmZiBcbmltcG9ydCB7IE9yZGVyc0NvbXBvbmVudCB9IGZyb20gJy4vK29yZGVyLytpbmRleC9vcmRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyU2hvd0NvbXBvbmVudCB9IGZyb20gJy4vK29yZGVyLytzaG93L29yZGVyLXNob3cuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4vK29yZGVyL3NlcnZpY2VzL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4vK29yZGVyL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyU3RvcmUgfSBmcm9tICcuLytvcmRlci9zZXJ2aWNlcy9vcmRlci5zdG9yZSc7XG5pbXBvcnQgeyBPcmRlcnNTdG9yZSB9IGZyb20gJy4vK29yZGVyL3NlcnZpY2VzL29yZGVycy5zdG9yZSc7XG5pbXBvcnQgeyBPcmRlckl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi8rb3JkZXIvY29tcG9uZW50cy9vcmRlci1pdGVtLWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1NoYXJlZE1vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKENPTU1FUkNFX1JPVVRFUyldLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb21tZXJjZUNvbXBvbmVudCxcbiAgICBDYXJ0Q29tcG9uZW50LFxuICAgIENhcnRUYWJDb21wb25lbnQsXG4gICAgUmV2aWV3VGFiQ29tcG9uZW50LFxuICAgIEJpbGxpbmdUYWJDb21wb25lbnQsXG4gICAgUGF5bWVudFRhYkNvbXBvbmVudCxcbiAgICBDb25maXJtVGFiQ29tcG9uZW50LFxuICAgIFByb2plY3RzQ29tcG9uZW50LFxuICAgIExpbmVJdGVtc0NvbXBvbmVudCxcbiAgICBBc3NldENvbXBvbmVudCxcbiAgICBPcmRlclNob3dDb21wb25lbnQsXG4gICAgT3JkZXJzQ29tcG9uZW50LFxuICAgIE9yZGVySXRlbUxpc3RDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW0NvbW1lcmNlQ29tcG9uZW50LCBDYXJ0Q29tcG9uZW50LCBPcmRlclNob3dDb21wb25lbnQsIE9yZGVyc0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0NhcnRTZXJ2aWNlLCBPcmRlclNlcnZpY2UsIE9yZGVyc1NlcnZpY2UsIENhcnRTdG9yZSwgQ2FydENhcGFiaWxpdGllcywgT3JkZXJTdG9yZSwgT3JkZXJzU3RvcmVdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tbWVyY2VNb2R1bGUgeyB9XG4iXX0=
