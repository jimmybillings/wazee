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
var current_user_model_1 = require('../../shared/services/current-user.model');
var api_service_1 = require('../../shared/services/api.service');
var api_interface_1 = require('../../shared/interfaces/api.interface');
var initFilters = {};
exports.filters = function (state, action) {
    if (state === void 0) { state = initFilters; }
    switch (action.type) {
        case 'FILTERS.SET_FILTERS':
            return Object.assign({}, JSON.parse(JSON.stringify(action.payload)));
        default:
            return state;
    }
};
var FilterService = (function () {
    function FilterService(api, store, currentUser) {
        this.api = api;
        this.store = store;
        this.currentUser = currentUser;
        this.filterState = {};
        this.data = this.store.select('filters');
    }
    FilterService.prototype.get = function (params, counted) {
        var _this = this;
        var options = JSON.parse(JSON.stringify(Object.assign({}, params, { counted: counted })));
        return this.api.get(api_interface_1.Api.Assets, this.currentUser.loggedIn() ? 'filter/filterTree' : 'filter/anonymous/filterTree', { parameters: options, loading: true }).do(function (response) {
            _this.set(_this.sanitize(response, null));
            _this.checkLocalStorage(response);
        });
    };
    FilterService.prototype.set = function (filters) {
        this.store.dispatch({ type: 'FILTERS.SET_FILTERS', payload: filters });
    };
    FilterService.prototype.sanitize = function (filter, parent) {
        if (parent)
            filter.parentId = parent.filterId;
        if (filter.subFilters) {
            filter.expanded = false;
            for (var _i = 0, _a = filter.subFilters; _i < _a.length; _i++) {
                var l = _a[_i];
                this.sanitize(l, filter);
            }
            return filter;
        }
        return filter;
    };
    FilterService.prototype.toggle = function (currentFilter, filter) {
        if (filter === void 0) { filter = this.filters; }
        if (filter.filterId === currentFilter) {
            if (filter.active)
                filter.filterValue = null;
            filter.active = !filter.active;
            filter = JSON.parse(JSON.stringify(filter));
        }
        if (filter.subFilters) {
            for (var _i = 0, _a = filter.subFilters; _i < _a.length; _i++) {
                var l = _a[_i];
                this.toggle(currentFilter, l);
            }
            return filter;
        }
    };
    FilterService.prototype.toggleExclusive = function (subFilter, filter) {
        if (filter === void 0) { filter = this.filters; }
        if (filter.subFilters) {
            if (filter.filterId === subFilter.parentId) {
                for (var _i = 0, _a = filter.subFilters; _i < _a.length; _i++) {
                    var f = _a[_i];
                    f.active = (f.filterId === subFilter.filterId) ? !f.active : false;
                }
            }
            for (var _b = 0, _c = filter.subFilters; _b < _c.length; _b++) {
                var l = _c[_b];
                this.toggleExclusive(subFilter, l);
            }
            return filter;
        }
        return filter;
    };
    FilterService.prototype.active = function (activeFilters, filter) {
        if (filter === void 0) { filter = this.filters; }
        if (filter.subFilters) {
            for (var _i = 0, _a = filter.subFilters; _i < _a.length; _i++) {
                var l = _a[_i];
                this.active(activeFilters, l);
            }
            return filter;
        }
        else {
            if (filter.active)
                activeFilters.push(filter);
            return filter;
        }
    };
    FilterService.prototype.clear = function (filter) {
        if (filter === void 0) { filter = this.filters; }
        if (filter.subFilters) {
            for (var _i = 0, _a = filter.subFilters; _i < _a.length; _i++) {
                var l = _a[_i];
                this.clear(l);
            }
            return filter;
        }
        else {
            if (filter.active)
                filter.active = false;
            filter.filterValue = null;
            return filter;
        }
    };
    FilterService.prototype.addCustomValue = function (currentFilter, value, filter) {
        if (filter === void 0) { filter = this.filters; }
        if (filter.subFilters) {
            for (var _i = 0, _a = filter.subFilters; _i < _a.length; _i++) {
                var f = _a[_i];
                this.addCustomValue(currentFilter, value, f);
            }
            return filter;
        }
        else {
            if (filter.filterId === currentFilter.filterId) {
                filter.active = true;
                filter.filterValue = value;
            }
            return filter;
        }
    };
    FilterService.prototype.checkLocalStorage = function (filterTree) {
        if (!localStorage.getItem('filterState')) {
            localStorage.setItem('filterState', JSON.stringify(this.setFilterStateInLocalStorage(filterTree)));
        }
    };
    FilterService.prototype.setFilterStateInLocalStorage = function (filterTree) {
        if (filterTree.subFilters) {
            for (var _i = 0, _a = filterTree.subFilters; _i < _a.length; _i++) {
                var f = _a[_i];
                if (f.type === 'None' || f.type === 'List') {
                    this.filterState[f.name] = false;
                }
                this.setFilterStateInLocalStorage(f);
            }
        }
        return this.filterState;
    };
    Object.defineProperty(FilterService.prototype, "filters", {
        get: function () {
            var filters = {};
            this.data.take(1).subscribe(function (f) { return filters = f; });
            return filters;
        },
        enumerable: true,
        configurable: true
    });
    FilterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, store_1.Store, current_user_model_1.CurrentUser])
    ], FilterService);
    return FilterService;
}());
exports.FilterService = FilterService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxzQkFBNkMsYUFBYSxDQUFDLENBQUE7QUFDM0QsbUNBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFDdkUsNEJBQTJCLG1DQUFtQyxDQUFDLENBQUE7QUFDL0QsOEJBQW9CLHVDQUF1QyxDQUFDLENBQUE7QUFFNUQsSUFBTSxXQUFXLEdBQVEsRUFBRSxDQUFDO0FBQ2YsZUFBTyxHQUF1QixVQUFDLEtBQStCLEVBQUUsTUFBYztJQUEvQyxxQkFBK0IsR0FBL0IsbUJBQStCO0lBQ3pFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUsscUJBQXFCO1lBQ3hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RTtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUdGO0lBSUUsdUJBQ1UsR0FBZSxFQUNoQixLQUFpQixFQUNqQixXQUF3QjtRQUZ2QixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLE1BQVcsRUFBRSxPQUFnQjtRQUF4QyxpQkFXQztRQVZDLElBQUksT0FBTyxHQUFHLElBQUks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SUFDMUIsQ0FBQztJQUVELHNCQUFZLGtDQUFPO2FBQW5CO1lBQ0UsSUFBSSxPQUFPLEdBQVEsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQXhISDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBeUhiLG9CQUFDO0FBQUQsQ0F4SEEsQUF3SEMsSUFBQTtBQXhIWSxxQkFBYSxnQkF3SHpCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9maWx0ZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb25SZWR1Y2VyLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jdXJyZW50LXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9hcGkuaW50ZXJmYWNlJztcblxuY29uc3QgaW5pdEZpbHRlcnM6IGFueSA9IHt9O1xuZXhwb3J0IGNvbnN0IGZpbHRlcnM6IEFjdGlvblJlZHVjZXI8YW55PiA9IChzdGF0ZTogQXJyYXk8YW55PiA9IGluaXRGaWx0ZXJzLCBhY3Rpb246IEFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnRklMVEVSUy5TRVRfRklMVEVSUyc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsdGVyU2VydmljZSB7XG4gIHB1YmxpYyBkYXRhOiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBmaWx0ZXJTdGF0ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLFxuICAgIHB1YmxpYyBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwdWJsaWMgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyXG4gICkge1xuICAgIHRoaXMuZmlsdGVyU3RhdGUgPSB7fTtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnN0b3JlLnNlbGVjdCgnZmlsdGVycycpO1xuICB9XG5cbiAgcHVibGljIGdldChwYXJhbXM6IGFueSwgY291bnRlZDogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IG9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcywgeyBjb3VudGVkIH0pKSk7XG5cbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KFxuICAgICAgQXBpLkFzc2V0cyxcbiAgICAgIHRoaXMuY3VycmVudFVzZXIubG9nZ2VkSW4oKSA/ICdmaWx0ZXIvZmlsdGVyVHJlZScgOiAnZmlsdGVyL2Fub255bW91cy9maWx0ZXJUcmVlJyxcbiAgICAgIHsgcGFyYW1ldGVyczogb3B0aW9ucywgbG9hZGluZzogdHJ1ZSB9XG4gICAgKS5kbyhyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldCh0aGlzLnNhbml0aXplKHJlc3BvbnNlLCBudWxsKSk7XG4gICAgICB0aGlzLmNoZWNrTG9jYWxTdG9yYWdlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoZmlsdGVyczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdGSUxURVJTLlNFVF9GSUxURVJTJywgcGF5bG9hZDogZmlsdGVycyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzYW5pdGl6ZShmaWx0ZXI6IGFueSwgcGFyZW50OiBhbnkpIHtcbiAgICBpZiAocGFyZW50KSBmaWx0ZXIucGFyZW50SWQgPSBwYXJlbnQuZmlsdGVySWQ7XG4gICAgaWYgKGZpbHRlci5zdWJGaWx0ZXJzKSB7XG4gICAgICBmaWx0ZXIuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgIGZvciAodmFyIGwgb2YgZmlsdGVyLnN1YkZpbHRlcnMpIHRoaXMuc2FuaXRpemUobCwgZmlsdGVyKTtcbiAgICAgIHJldHVybiBmaWx0ZXI7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXI7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKGN1cnJlbnRGaWx0ZXI6IGFueSwgZmlsdGVyID0gdGhpcy5maWx0ZXJzKSB7XG4gICAgaWYgKGZpbHRlci5maWx0ZXJJZCA9PT0gY3VycmVudEZpbHRlcikge1xuICAgICAgaWYgKGZpbHRlci5hY3RpdmUpIGZpbHRlci5maWx0ZXJWYWx1ZSA9IG51bGw7XG4gICAgICBmaWx0ZXIuYWN0aXZlID0gIWZpbHRlci5hY3RpdmU7XG4gICAgICBmaWx0ZXIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpbHRlcikpO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyLnN1YkZpbHRlcnMpIHtcbiAgICAgIGZvciAodmFyIGwgb2YgZmlsdGVyLnN1YkZpbHRlcnMpIHRoaXMudG9nZ2xlKGN1cnJlbnRGaWx0ZXIsIGwpO1xuICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRXhjbHVzaXZlKHN1YkZpbHRlcjogYW55LCBmaWx0ZXIgPSB0aGlzLmZpbHRlcnMpOiB2b2lkIHtcbiAgICBpZiAoZmlsdGVyLnN1YkZpbHRlcnMpIHtcbiAgICAgIGlmIChmaWx0ZXIuZmlsdGVySWQgPT09IHN1YkZpbHRlci5wYXJlbnRJZCkge1xuICAgICAgICBmb3IgKGxldCBmIG9mIGZpbHRlci5zdWJGaWx0ZXJzKSBmLmFjdGl2ZSA9IChmLmZpbHRlcklkID09PSBzdWJGaWx0ZXIuZmlsdGVySWQpID8gIWYuYWN0aXZlIDogZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBsIG9mIGZpbHRlci5zdWJGaWx0ZXJzKSB0aGlzLnRvZ2dsZUV4Y2x1c2l2ZShzdWJGaWx0ZXIsIGwpO1xuICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcjtcbiAgfVxuXG4gIHB1YmxpYyBhY3RpdmUoYWN0aXZlRmlsdGVyczogYW55LCBmaWx0ZXIgPSB0aGlzLmZpbHRlcnMpIHtcbiAgICBpZiAoZmlsdGVyLnN1YkZpbHRlcnMpIHtcbiAgICAgIGZvciAodmFyIGwgb2YgZmlsdGVyLnN1YkZpbHRlcnMpIHRoaXMuYWN0aXZlKGFjdGl2ZUZpbHRlcnMsIGwpO1xuICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbHRlci5hY3RpdmUpIGFjdGl2ZUZpbHRlcnMucHVzaChmaWx0ZXIpO1xuICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoZmlsdGVyID0gdGhpcy5maWx0ZXJzKSB7XG4gICAgaWYgKGZpbHRlci5zdWJGaWx0ZXJzKSB7XG4gICAgICBmb3IgKHZhciBsIG9mIGZpbHRlci5zdWJGaWx0ZXJzKSB0aGlzLmNsZWFyKGwpO1xuICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbHRlci5hY3RpdmUpIGZpbHRlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGZpbHRlci5maWx0ZXJWYWx1ZSA9IG51bGw7XG4gICAgICByZXR1cm4gZmlsdGVyO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRDdXN0b21WYWx1ZShjdXJyZW50RmlsdGVyOiBhbnksIHZhbHVlOiBhbnksIGZpbHRlciA9IHRoaXMuZmlsdGVycyk6IHZvaWQge1xuICAgIGlmIChmaWx0ZXIuc3ViRmlsdGVycykge1xuICAgICAgZm9yIChsZXQgZiBvZiBmaWx0ZXIuc3ViRmlsdGVycykgdGhpcy5hZGRDdXN0b21WYWx1ZShjdXJyZW50RmlsdGVyLCB2YWx1ZSwgZik7XG4gICAgICByZXR1cm4gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlsdGVyLmZpbHRlcklkID09PSBjdXJyZW50RmlsdGVyLmZpbHRlcklkKSB7XG4gICAgICAgIGZpbHRlci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBmaWx0ZXIuZmlsdGVyVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWx0ZXI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNoZWNrTG9jYWxTdG9yYWdlKGZpbHRlclRyZWU6IGFueSk6IHZvaWQge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlclN0YXRlJykpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJTdGF0ZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0RmlsdGVyU3RhdGVJbkxvY2FsU3RvcmFnZShmaWx0ZXJUcmVlKSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRGaWx0ZXJTdGF0ZUluTG9jYWxTdG9yYWdlKGZpbHRlclRyZWU6IGFueSk6IGFueSB7XG4gICAgaWYgKGZpbHRlclRyZWUuc3ViRmlsdGVycykge1xuICAgICAgZm9yIChsZXQgZiBvZiBmaWx0ZXJUcmVlLnN1YkZpbHRlcnMpIHtcbiAgICAgICAgaWYgKGYudHlwZSA9PT0gJ05vbmUnIHx8IGYudHlwZSA9PT0gJ0xpc3QnKSB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJTdGF0ZVtmLm5hbWVdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRGaWx0ZXJTdGF0ZUluTG9jYWxTdG9yYWdlKGYpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maWx0ZXJTdGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGZpbHRlcnMoKSB7XG4gICAgbGV0IGZpbHRlcnM6IGFueSA9IHt9O1xuICAgIHRoaXMuZGF0YS50YWtlKDEpLnN1YnNjcmliZShmID0+IGZpbHRlcnMgPSBmKTtcbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxufVxuIl19
