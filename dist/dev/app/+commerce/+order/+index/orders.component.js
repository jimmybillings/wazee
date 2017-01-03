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
var orders_service_1 = require('../services/orders.service');
var OrdersComponent = (function () {
    function OrdersComponent(orders, route, router) {
        this.orders = orders;
        this.route = route;
        this.router = router;
        this.itemSearchIsShowing = false;
        this.ordersPerPage = '20';
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ordersPerPage = params['n'] || '20';
        });
    };
    OrdersComponent.prototype.toggleShowOrderSearch = function () {
        this.itemSearchIsShowing = !this.itemSearchIsShowing;
    };
    OrdersComponent.prototype.changePage = function (i) {
        this.buildRouteParams({ i: i });
        this.router.navigate(['/commerce/orders', this.params]);
    };
    OrdersComponent.prototype.search = function (query) {
        this.buildRouteParams(Object.assign(query, { i: 1 }));
        this.router.navigate(['/commerce/orders', this.params]);
    };
    OrdersComponent.prototype.buildRouteParams = function (params) {
        this.params = Object.assign({}, this.params, { n: this.ordersPerPage }, params);
    };
    OrdersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'orders-component',
            templateUrl: 'orders.html'
        }), 
        __metadata('design:paramtypes', [orders_service_1.OrdersService, router_1.ActivatedRoute, router_1.Router])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK29yZGVyLytpbmRleC9vcmRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsK0JBQThCLDRCQUE0QixDQUFDLENBQUE7QUFTM0Q7SUFJRSx5QkFDUyxNQUFxQixFQUNwQixLQUFxQixFQUNyQixNQUFjO1FBRmYsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTmpCLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUNyQyxrQkFBYSxHQUFXLElBQUksQ0FBQztJQUtSLENBQUM7SUFFN0Isa0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sK0NBQXFCLEdBQTVCO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3ZELENBQUM7SUFFTSxvQ0FBVSxHQUFqQixVQUFrQixDQUFTO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLEtBQWtCO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU8sMENBQWdCLEdBQXhCLFVBQXlCLE1BQXVCO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUMsRUFBRyxJQUFJLENBQUMsYUFBYSxFQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQXJDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDOzt1QkFBQTtJQW1DRixzQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksdUJBQWUsa0JBaUMzQixDQUFBIiwiZmlsZSI6ImFwcC8rY29tbWVyY2UvK29yZGVyLytpbmRleC9vcmRlcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyc1VybFBhcmFtcyB9IGZyb20gJy4uLy4uLytjYXJ0L2NhcnQuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnb3JkZXJzLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnb3JkZXJzLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgT3JkZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGl0ZW1TZWFyY2hJc1Nob3dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG9yZGVyc1BlclBhZ2U6IHN0cmluZyA9ICcyMCc7XG4gIHByaXZhdGUgcGFyYW1zOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBvcmRlcnM6IE9yZGVyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLm9yZGVyc1BlclBhZ2UgPSBwYXJhbXNbJ24nXSB8fCAnMjAnO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVNob3dPcmRlclNlYXJjaCgpIHtcbiAgICB0aGlzLml0ZW1TZWFyY2hJc1Nob3dpbmcgPSAhdGhpcy5pdGVtU2VhcmNoSXNTaG93aW5nO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhZ2UoaTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5idWlsZFJvdXRlUGFyYW1zKHsgaSB9KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggWycvY29tbWVyY2Uvb3JkZXJzJywgdGhpcy5wYXJhbXMgXSk7XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoKHF1ZXJ5OiB7cTogc3RyaW5nfSkge1xuICAgIHRoaXMuYnVpbGRSb3V0ZVBhcmFtcyhPYmplY3QuYXNzaWduKHF1ZXJ5LCB7aTogMX0pKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggWycvY29tbWVyY2Uvb3JkZXJzJywgdGhpcy5wYXJhbXMgXSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUm91dGVQYXJhbXMocGFyYW1zOiBPcmRlcnNVcmxQYXJhbXMpIHtcbiAgICB0aGlzLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGFyYW1zLCB7biA6IHRoaXMub3JkZXJzUGVyUGFnZX0sIHBhcmFtcyk7XG4gIH1cblxufVxuIl19
