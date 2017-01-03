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
var Rx_1 = require('rxjs/Rx');
var active_collection_store_1 = require('../stores/active-collection.store');
var api_service_1 = require('./api.service');
var api_interface_1 = require('../interfaces/api.interface');
var ActiveCollectionService = (function () {
    function ActiveCollectionService(store, api) {
        this.store = store;
        this.api = api;
    }
    ActiveCollectionService.prototype.ngOnInit = function () {
        this.setSearchParams();
    };
    Object.defineProperty(ActiveCollectionService.prototype, "data", {
        get: function () {
            return this.store.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveCollectionService.prototype, "state", {
        get: function () {
            return this.store.state;
        },
        enumerable: true,
        configurable: true
    });
    ActiveCollectionService.prototype.resetStore = function () {
        this.store.reset();
    };
    ActiveCollectionService.prototype.isActiveCollection = function (collectionId) {
        return this.state.id === collectionId;
    };
    ActiveCollectionService.prototype.load = function (collectionId, params) {
        var _this = this;
        if (params === void 0) { params = { i: 0, n: 100 }; }
        if (!collectionId) {
            return this.api.get(api_interface_1.Api.Assets, 'collectionSummary/focused', { loading: true })
                .flatMap(function (response) {
                _this.store.updateTo(response);
                return _this.getItems(response.id, { i: 1, n: 100 });
            });
        }
        else {
            return this.set(collectionId, params);
        }
    };
    ActiveCollectionService.prototype.addAsset = function (collectionId, asset) {
        var _this = this;
        return this.api.post(api_interface_1.Api.Identities, "collection/" + collectionId + "/addAssets", { body: { list: [{ assetId: asset.assetId }] } }).flatMap(function (response) {
            return _this.getItems(collectionId, { i: 1, n: 100 });
        });
    };
    ActiveCollectionService.prototype.removeAsset = function (params) {
        var _this = this;
        var collection = params.collection;
        var uuid, assetToBeRemoved;
        assetToBeRemoved = params.collection.assets.items.find(function (item) { return item.assetId === params.asset.assetId; });
        if (params.asset.uuid && assetToBeRemoved) {
            uuid = params.asset.uuid;
        }
        else {
            uuid = assetToBeRemoved ? assetToBeRemoved.uuid : false;
        }
        if (assetToBeRemoved && uuid) {
            return this.api.post(api_interface_1.Api.Identities, "collection/" + collection.id + "/removeAssets", { body: { list: [{ assetId: params.asset.assetId, uuid: uuid }] } })
                .do(function (response) { return _this.store.remove(response['list'][0]); });
        }
        else {
            return Rx_1.Observable.of({});
        }
    };
    ActiveCollectionService.prototype.getItems = function (collectionId, collectionParams, set, loading) {
        var _this = this;
        if (set === void 0) { set = true; }
        if (loading === void 0) { loading = true; }
        if (collectionParams['i'])
            collectionParams['i'] -= 1;
        this.params = Object.assign({}, this.params, collectionParams);
        return this.api.get(api_interface_1.Api.Assets, "collectionSummary/assets/" + collectionId, { parameters: this.params, loading: loading }).do(function (response) { if (set)
            _this.store.updateAssetsTo(response); });
    };
    ActiveCollectionService.prototype.set = function (collectionId, params) {
        var _this = this;
        return Rx_1.Observable.forkJoin([
            this.api.put(api_interface_1.Api.Assets, "collectionSummary/setFocused/" + collectionId, { loading: true }),
            this.getItems(collectionId, params, false)
        ]).do(function (data) {
            _this.store.updateTo(data[0]);
            _this.store.updateAssetsTo(data[1]);
        });
    };
    ActiveCollectionService.prototype.setSearchParams = function () {
        this.params = { 's': '', 'd': '', 'i': '0', 'n': '50' };
    };
    ActiveCollectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [active_collection_store_1.ActiveCollectionStore, api_service_1.ApiService])
    ], ActiveCollectionService);
    return ActiveCollectionService;
}());
exports.ActiveCollectionService = ActiveCollectionService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYWN0aXZlLWNvbGxlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1DLGVBQWUsQ0FBQyxDQUFBO0FBQ25ELG1CQUEyQixTQUFTLENBQUMsQ0FBQTtBQUVyQyx3Q0FBc0MsbUNBQW1DLENBQUMsQ0FBQTtBQUUxRSw0QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsOEJBQW9CLDZCQUE2QixDQUFDLENBQUE7QUFHbEQ7SUFHRSxpQ0FBb0IsS0FBNEIsRUFBUyxHQUFlO1FBQXBELFVBQUssR0FBTCxLQUFLLENBQXVCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFJLENBQUM7SUFFN0UsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsc0JBQVcseUNBQUk7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDBDQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR00sNENBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxvREFBa0IsR0FBekIsVUFBMEIsWUFBb0I7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQztJQUN4QyxDQUFDO0lBRU0sc0NBQUksR0FBWCxVQUFZLFlBQXFCLEVBQUUsTUFBOEI7UUFBakUsaUJBVUM7UUFWa0Msc0JBQThCLEdBQTlCLFdBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtRQUMvRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENB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LEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8saURBQWUsR0FBdkI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzFELENBQUM7SUE1Rkg7UUFBQyxpQkFBVSxFQUFFOzsrQkFBQTtJQTZGYiw4QkFBQztBQUFELENBNUZBLEFBNEZDLElBQUE7QUE1RlksK0JBQXVCLDBCQTRGbkMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2FjdGl2ZS1jb2xsZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgQWN0aXZlQ29sbGVjdGlvblN0b3JlIH0gZnJvbSAnLi4vc3RvcmVzL2FjdGl2ZS1jb2xsZWN0aW9uLnN0b3JlJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL2NvbGxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXBpLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3RpdmVDb2xsZWN0aW9uU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBwYXJhbXM6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBBY3RpdmVDb2xsZWN0aW9uU3RvcmUsIHB1YmxpYyBhcGk6IEFwaVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U2VhcmNoUGFyYW1zKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhdGEoKTogT2JzZXJ2YWJsZTxDb2xsZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhdGUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zdGF0ZTtcbiAgfVxuXG4gIC8vIFRPRE86IE91dHNpZGUgd29ybGQgc2hvdWxkbid0IG5lZWQgdG8gY2FsbCB0aGlzLlxuICBwdWJsaWMgcmVzZXRTdG9yZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLnJlc2V0KCk7XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmVDb2xsZWN0aW9uKGNvbGxlY3Rpb25JZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaWQgPT09IGNvbGxlY3Rpb25JZDtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKGNvbGxlY3Rpb25JZD86IG51bWJlciwgcGFyYW1zOiBhbnkgPSB7IGk6IDAsIG46IDEwMCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoIWNvbGxlY3Rpb25JZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXBpLmdldChBcGkuQXNzZXRzLCAnY29sbGVjdGlvblN1bW1hcnkvZm9jdXNlZCcsIHsgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICAuZmxhdE1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlVG8ocmVzcG9uc2UgYXMgQ29sbGVjdGlvbik7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMocmVzcG9uc2UuaWQsIHsgaTogMSwgbjogMTAwIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGNvbGxlY3Rpb25JZCwgcGFyYW1zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkQXNzZXQoY29sbGVjdGlvbklkOiBhbnksIGFzc2V0OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFwaS5wb3N0KFxuICAgICAgQXBpLklkZW50aXRpZXMsXG4gICAgICBgY29sbGVjdGlvbi8ke2NvbGxlY3Rpb25JZH0vYWRkQXNzZXRzYCxcbiAgICAgIHsgYm9keTogeyBsaXN0OiBbeyBhc3NldElkOiBhc3NldC5hc3NldElkIH1dIH0gfVxuICAgICkuZmxhdE1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoY29sbGVjdGlvbklkLCB7IGk6IDEsIG46IDEwMCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVBc3NldChwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGNvbGxlY3Rpb246IENvbGxlY3Rpb24gPSBwYXJhbXMuY29sbGVjdGlvbjtcbiAgICBsZXQgdXVpZDogYW55LCBhc3NldFRvQmVSZW1vdmVkOiBhbnk7XG4gICAgYXNzZXRUb0JlUmVtb3ZlZCA9IHBhcmFtcy5jb2xsZWN0aW9uLmFzc2V0cy5pdGVtcy5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW0uYXNzZXRJZCA9PT0gcGFyYW1zLmFzc2V0LmFzc2V0SWQpO1xuICAgIGlmIChwYXJhbXMuYXNzZXQudXVpZCAmJiBhc3NldFRvQmVSZW1vdmVkKSB7XG4gICAgICB1dWlkID0gcGFyYW1zLmFzc2V0LnV1aWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHV1aWQgPSBhc3NldFRvQmVSZW1vdmVkID8gYXNzZXRUb0JlUmVtb3ZlZC51dWlkIDogZmFsc2U7XG4gICAgfVxuICAgIGlmIChhc3NldFRvQmVSZW1vdmVkICYmIHV1aWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFwaS5wb3N0KFxuICAgICAgICBBcGkuSWRlbnRpdGllcyxcbiAgICAgICAgYGNvbGxlY3Rpb24vJHtjb2xsZWN0aW9uLmlkfS9yZW1vdmVBc3NldHNgLFxuICAgICAgICB7IGJvZHk6IHsgbGlzdDogW3sgYXNzZXRJZDogcGFyYW1zLmFzc2V0LmFzc2V0SWQsIHV1aWQ6IHV1aWQgfV0gfSB9KVxuICAgICAgLmRvKHJlc3BvbnNlID0+IHRoaXMuc3RvcmUucmVtb3ZlKHJlc3BvbnNlWydsaXN0J11bMF0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUub2Yoe30pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRJdGVtcyhjb2xsZWN0aW9uSWQ6IG51bWJlciwgY29sbGVjdGlvblBhcmFtczogYW55LCBzZXQ6IGJvb2xlYW4gPSB0cnVlLCBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKGNvbGxlY3Rpb25QYXJhbXNbJ2knXSkgY29sbGVjdGlvblBhcmFtc1snaSddIC09IDE7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnBhcmFtcywgY29sbGVjdGlvblBhcmFtcyk7XG5cbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KFxuICAgICAgQXBpLkFzc2V0cyxcbiAgICAgIGBjb2xsZWN0aW9uU3VtbWFyeS9hc3NldHMvJHtjb2xsZWN0aW9uSWR9YCxcbiAgICAgIHsgcGFyYW1ldGVyczogdGhpcy5wYXJhbXMsIGxvYWRpbmc6IGxvYWRpbmcgfVxuICAgICkuZG8ocmVzcG9uc2UgPT4geyBpZiAoc2V0KSB0aGlzLnN0b3JlLnVwZGF0ZUFzc2V0c1RvKHJlc3BvbnNlKTsgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldChjb2xsZWN0aW9uSWQ6IG51bWJlciwgcGFyYW1zPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5mb3JrSm9pbihbXG4gICAgICB0aGlzLmFwaS5wdXQoQXBpLkFzc2V0cywgYGNvbGxlY3Rpb25TdW1tYXJ5L3NldEZvY3VzZWQvJHtjb2xsZWN0aW9uSWR9YCwgeyBsb2FkaW5nOiB0cnVlIH0pLFxuICAgICAgdGhpcy5nZXRJdGVtcyhjb2xsZWN0aW9uSWQsIHBhcmFtcywgZmFsc2UpXG4gICAgXSkuZG8oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS51cGRhdGVUbyhkYXRhWzBdKTtcbiAgICAgIHRoaXMuc3RvcmUudXBkYXRlQXNzZXRzVG8oZGF0YVsxXSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNlYXJjaFBhcmFtcygpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHsgJ3MnOiAnJywgJ2QnOiAnJywgJ2knOiAnMCcsICduJzogJzUwJyB9O1xuICB9XG59XG4iXX0=
