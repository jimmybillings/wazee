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
var admin_service_1 = require('./admin.service');
var AdminIndexResolver = (function () {
    function AdminIndexResolver(adminService) {
        this.adminService = adminService;
    }
    AdminIndexResolver.prototype.resolve = function (route, state) {
        var resource = route.url[1].path;
        var params = route.params;
        return this.adminService.getResourceIndex(params, resource);
    };
    AdminIndexResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], AdminIndexResolver);
    return AdminIndexResolver;
}());
exports.AdminIndexResolver = AdminIndexResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vc2VydmljZXMvYWRtaW4taW5kZXgucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUkzQyw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUcvQztJQUNFLDRCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFFbkQsb0NBQU8sR0FBUCxVQUFRLEtBQTZCLEVBQUUsS0FBMEI7UUFDL0QsSUFBSSxRQUFRLEdBQVcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxNQUFNLEdBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVJIO1FBQUMsaUJBQVUsRUFBRTs7MEJBQUE7SUFTYix5QkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksMEJBQWtCLHFCQVE5QixDQUFBIiwiZmlsZSI6ImFwcC8rYWRtaW4vc2VydmljZXMvYWRtaW4taW5kZXgucmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvbHZlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgQWRtaW5TZXJ2aWNlIH0gZnJvbSAnLi9hZG1pbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkbWluSW5kZXhSZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8YW55PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRtaW5TZXJ2aWNlOiBBZG1pblNlcnZpY2UpIHsgfVxuXG4gIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgcmVzb3VyY2U6IHN0cmluZyA9IHJvdXRlLnVybFsxXS5wYXRoO1xuICAgIGxldCBwYXJhbXM6IGFueSA9IHJvdXRlLnBhcmFtcztcbiAgICByZXR1cm4gdGhpcy5hZG1pblNlcnZpY2UuZ2V0UmVzb3VyY2VJbmRleChwYXJhbXMsIHJlc291cmNlKTtcbiAgfVxufVxuIl19
