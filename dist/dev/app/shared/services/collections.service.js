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
var active_collection_service_1 = require('./active-collection.service');
var collections_store_1 = require('../stores/collections.store');
var api_service_1 = require('../../shared/services/api.service');
var api_interface_1 = require('../../shared/interfaces/api.interface');
var CollectionsService = (function () {
    function CollectionsService(store, api, activeCollection) {
        this.store = store;
        this.api = api;
        this.activeCollection = activeCollection;
        this.setSearchParams();
        this.syncActiveCollection();
    }
    Object.defineProperty(CollectionsService.prototype, "data", {
        get: function () {
            return this.store.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionsService.prototype, "state", {
        get: function () {
            return this.store.state;
        },
        enumerable: true,
        configurable: true
    });
    CollectionsService.prototype.load = function (params, loading) {
        var _this = this;
        if (loading === void 0) { loading = false; }
        if (params)
            this.params = Object.assign({}, this.params, params);
        return this.api.get(api_interface_1.Api.Assets, "collectionSummary/search", { parameters: this.params, loading: loading })
            .subscribe(function (response) { return _this.store.replaceAllCollectionsWith(response); });
    };
    CollectionsService.prototype.create = function (collection) {
        var _this = this;
        return this.api.post(api_interface_1.Api.Assets, 'collectionSummary', { body: collection })
            .do(function (response) { return _this.store.add(response); });
    };
    CollectionsService.prototype.update = function (collection) {
        return this.api.put(api_interface_1.Api.Assets, "collectionSummary/" + collection.id, { body: collection });
    };
    CollectionsService.prototype.delete = function (collectionId) {
        var _this = this;
        this.store.deleteCollectionWith(collectionId);
        return this.api.delete(api_interface_1.Api.Identities, "collection/" + collectionId)
            .flatMap(function (_) {
            if (_this.activeCollection.isActiveCollection(collectionId)) {
                return _this.activeCollection.load().flatMap(function (_) {
                    return _this.load();
                });
            }
            else {
                return _this.load();
            }
        });
    };
    CollectionsService.prototype.destroyAll = function () {
        this.store.deleteAllCollections();
        this.activeCollection.resetStore();
    };
    CollectionsService.prototype.syncActiveCollection = function () {
        var _this = this;
        this.activeCollection.data.subscribe(function (collection) {
            if (_this.state.items && _this.state.items.length > 0)
                _this.store.update(collection);
        });
    };
    CollectionsService.prototype.setSearchParams = function () {
        this.params = { q: '', accessLevel: 'all', s: '', d: '', i: 0, n: 200 };
    };
    CollectionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [collections_store_1.CollectionsStore, api_service_1.ApiService, active_collection_service_1.ActiveCollectionService])
    ], CollectionsService);
    return CollectionsService;
}());
exports.CollectionsService = CollectionsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY29sbGVjdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRzNDLDBDQUF3Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3RFLGtDQUFpQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9ELDRCQUEyQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQy9ELDhCQUFvQix1Q0FBdUMsQ0FBQyxDQUFBO0FBRzVEO0lBR0UsNEJBQ1UsS0FBdUIsRUFDdkIsR0FBZSxFQUNmLGdCQUF5QztRQUZ6QyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUVqRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFXLG9DQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxxQ0FBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVNLGlDQUFJLEdBQVgsVUFBWSxNQUFZLEVBQUUsT0FBd0I7UUFBbEQsaUJBS0M7UUFMeUIsdUJBQXdCLEdBQXhCLGVBQXdCO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQUcsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLEVBQUUs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ZXJ2aWNlcy9jb2xsZWN0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgQ29sbGVjdGlvbnMgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9jb2xsZWN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBBY3RpdmVDb2xsZWN0aW9uU2VydmljZSB9IGZyb20gJy4vYWN0aXZlLWNvbGxlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uc1N0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL2NvbGxlY3Rpb25zLnN0b3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvYXBpLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uc1NlcnZpY2Uge1xuICBwcml2YXRlIHBhcmFtczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IENvbGxlY3Rpb25zU3RvcmUsXG4gICAgcHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmVDb2xsZWN0aW9uOiBBY3RpdmVDb2xsZWN0aW9uU2VydmljZVxuICApIHtcbiAgICB0aGlzLnNldFNlYXJjaFBhcmFtcygpO1xuICAgIHRoaXMuc3luY0FjdGl2ZUNvbGxlY3Rpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGF0YSgpOiBPYnNlcnZhYmxlPENvbGxlY3Rpb25zPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zdGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKHBhcmFtcz86IGFueSwgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAocGFyYW1zKSB0aGlzLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGFyYW1zLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBpLmdldChBcGkuQXNzZXRzLCBgY29sbGVjdGlvblN1bW1hcnkvc2VhcmNoYCwgeyBwYXJhbWV0ZXJzOiB0aGlzLnBhcmFtcywgbG9hZGluZzogbG9hZGluZyB9KVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnN0b3JlLnJlcGxhY2VBbGxDb2xsZWN0aW9uc1dpdGgocmVzcG9uc2UpKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoY29sbGVjdGlvbjogQ29sbGVjdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLnBvc3QoQXBpLkFzc2V0cywgJ2NvbGxlY3Rpb25TdW1tYXJ5JywgeyBib2R5OiBjb2xsZWN0aW9uIH0pXG4gICAgICAuZG8ocmVzcG9uc2UgPT4gdGhpcy5zdG9yZS5hZGQocmVzcG9uc2UgYXMgQ29sbGVjdGlvbikpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShjb2xsZWN0aW9uOiBDb2xsZWN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hcGkucHV0KEFwaS5Bc3NldHMsIGBjb2xsZWN0aW9uU3VtbWFyeS8ke2NvbGxlY3Rpb24uaWR9YCwgeyBib2R5OiBjb2xsZWN0aW9uIH0pO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZShjb2xsZWN0aW9uSWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5zdG9yZS5kZWxldGVDb2xsZWN0aW9uV2l0aChjb2xsZWN0aW9uSWQpO1xuICAgIHJldHVybiB0aGlzLmFwaS5kZWxldGUoQXBpLklkZW50aXRpZXMsIGBjb2xsZWN0aW9uLyR7Y29sbGVjdGlvbklkfWApXG4gICAgICAuZmxhdE1hcChfID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ29sbGVjdGlvbi5pc0FjdGl2ZUNvbGxlY3Rpb24oY29sbGVjdGlvbklkKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNvbGxlY3Rpb24ubG9hZCgpLmZsYXRNYXAoXyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95QWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGVsZXRlQWxsQ29sbGVjdGlvbnMoKTtcbiAgICB0aGlzLmFjdGl2ZUNvbGxlY3Rpb24ucmVzZXRTdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jQWN0aXZlQ29sbGVjdGlvbigpIHtcbiAgICB0aGlzLmFjdGl2ZUNvbGxlY3Rpb24uZGF0YS5zdWJzY3JpYmUoKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLml0ZW1zICYmIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoID4gMCkgdGhpcy5zdG9yZS51cGRhdGUoY29sbGVjdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNlYXJjaFBhcmFtcygpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHsgcTogJycsIGFjY2Vzc0xldmVsOiAnYWxsJywgczogJycsIGQ6ICcnLCBpOiAwLCBuOiAyMDAgfTtcbiAgfVxufVxuIl19
