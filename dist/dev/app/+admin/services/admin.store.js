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
var adminState = { items: [], pagination: {} };
exports.adminResources = function (state, action) {
    if (state === void 0) { state = adminState; }
    switch (action.type) {
        case 'ADMIN_SERVICE.SET_RESOURCES':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
var AdminStore = (function () {
    function AdminStore(store) {
        this.store = store;
    }
    Object.defineProperty(AdminStore.prototype, "data", {
        get: function () {
            return this.store.select('adminResources');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminStore.prototype, "state", {
        get: function () {
            var state;
            this.data.take(1).subscribe(function (data) { return state = data; });
            return state;
        },
        enumerable: true,
        configurable: true
    });
    AdminStore.prototype.set = function (data) {
        this.store.dispatch({
            type: 'ADMIN_SERVICE.SET_RESOURCES', payload: {
                'items': data.items,
                'pagination': {
                    'totalCount': data.totalCount,
                    'currentPage': data.currentPage + 1,
                    'hasNextPage': data.hasNextPage,
                    'hasPreviousPage': data.hasPreviousPage,
                    'numberOfPages': data.numberOfPages,
                    'pageSize': data.pageSize
                }
            }
        });
    };
    AdminStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], AdminStore);
    return AdminStore;
}());
exports.AdminStore = AdminStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vc2VydmljZXMvYWRtaW4uc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyxzQkFBNkMsYUFBYSxDQUFDLENBQUE7QUFHM0QsSUFBTSxVQUFVLEdBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUNoRCxzQkFBYyxHQUE4QixVQUFDLEtBQWtCLEVBQUUsTUFBYztJQUFsQyxxQkFBa0IsR0FBbEIsa0JBQWtCO0lBQzFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssNkJBQTZCO1lBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xEO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBR0Y7SUFDRSxvQkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7SUFFMUMsc0JBQVcsNEJBQUk7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNkJBQUs7YUFBaEI7WUFDRSxJQUFJLEtBQVUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVMsSUFBSyxPQUFBLEtBQUssR0FBRyxJQUFJLEVBQVosQ0FBWSxDQUFDLENBQUM7WUFDekQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBRU0sd0JBQUcsR0FBVixVQUFXLElBQVM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDbEIsSUFBSSxFQUFFLDZCQUE2QixFQUFFLE9BQU8sRUFBRTtnQkFDNUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNuQixZQUFZLEVBQUU7b0JBQ1osWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUM3QixhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO29CQUNuQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0JBQy9CLGlCQUFpQixFQUFFLElBQUksQ0FBQyxlQUFlO29CQUN2QyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWE7b0JBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDMUI7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUE1Qkg7UUFBQyxpQkFBVSxFQUFFOztrQkFBQTtJQTZCYixpQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1Qlksa0JBQVUsYUE0QnRCLENBQUEiLCJmaWxlIjoiYXBwLythZG1pbi9zZXJ2aWNlcy9hZG1pbi5zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFkbWluU3RhdGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9hZG1pbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlciwgQWN0aW9uLCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuY29uc3QgYWRtaW5TdGF0ZTogQWRtaW5TdGF0ZSA9IHsgaXRlbXM6IFtdLCBwYWdpbmF0aW9uOiB7fSB9O1xuZXhwb3J0IGNvbnN0IGFkbWluUmVzb3VyY2VzOiBBY3Rpb25SZWR1Y2VyPEFkbWluU3RhdGU+ID0gKHN0YXRlID0gYWRtaW5TdGF0ZSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FETUlOX1NFUlZJQ0UuU0VUX1JFU09VUkNFUyc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5TdG9yZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHsgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdCgnYWRtaW5SZXNvdXJjZXMnKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogYW55IHtcbiAgICBsZXQgc3RhdGU6IGFueTtcbiAgICB0aGlzLmRhdGEudGFrZSgxKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4gc3RhdGUgPSBkYXRhKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBwdWJsaWMgc2V0KGRhdGE6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ0FETUlOX1NFUlZJQ0UuU0VUX1JFU09VUkNFUycsIHBheWxvYWQ6IHtcbiAgICAgICAgJ2l0ZW1zJzogZGF0YS5pdGVtcyxcbiAgICAgICAgJ3BhZ2luYXRpb24nOiB7XG4gICAgICAgICAgJ3RvdGFsQ291bnQnOiBkYXRhLnRvdGFsQ291bnQsXG4gICAgICAgICAgJ2N1cnJlbnRQYWdlJzogZGF0YS5jdXJyZW50UGFnZSArIDEsXG4gICAgICAgICAgJ2hhc05leHRQYWdlJzogZGF0YS5oYXNOZXh0UGFnZSxcbiAgICAgICAgICAnaGFzUHJldmlvdXNQYWdlJzogZGF0YS5oYXNQcmV2aW91c1BhZ2UsXG4gICAgICAgICAgJ251bWJlck9mUGFnZXMnOiBkYXRhLm51bWJlck9mUGFnZXMsXG4gICAgICAgICAgJ3BhZ2VTaXplJzogZGF0YS5wYWdlU2l6ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=
