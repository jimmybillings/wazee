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
var asset_data_service_1 = require('./asset.data.service');
var search_context_service_1 = require('../../shared/services/search-context.service');
var SearchResolver = (function () {
    function SearchResolver(assets, searchContext) {
        this.assets = assets;
        this.searchContext = searchContext;
    }
    SearchResolver.prototype.resolve = function (route, state) {
        this.searchContext.create = route.params;
        return this.assets.searchAssets(this.searchContext.state);
    };
    SearchResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [asset_data_service_1.AssetData, search_context_service_1.SearchContext])
    ], SearchResolver);
    return SearchResolver;
}());
exports.SearchResolver = SearchResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2VhcmNoL3NlcnZpY2VzL3NlYXJjaC5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLG1DQUF5QixzQkFBc0IsQ0FBQyxDQUFBO0FBRWhELHVDQUE4Qiw4Q0FBOEMsQ0FBQyxDQUFBO0FBRzdFO0lBQ0Usd0JBQ1UsTUFBaUIsRUFDakIsYUFBNEI7UUFENUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUN0QyxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLEtBQTZCLEVBQUUsS0FBMEI7UUFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBVkg7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQVdiLHFCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxzQkFBYyxpQkFVMUIsQ0FBQSIsImZpbGUiOiJhcHAvK3NlYXJjaC9zZXJ2aWNlcy9zZWFyY2gucmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBBc3NldERhdGF9IGZyb20gJy4vYXNzZXQuZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zZWFyY2gtY29udGV4dC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc29sdmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhc3NldHM6IEFzc2V0RGF0YSxcbiAgICBwcml2YXRlIHNlYXJjaENvbnRleHQ6IFNlYXJjaENvbnRleHQpIHtcbiAgfVxuXG4gIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLnNlYXJjaENvbnRleHQuY3JlYXRlID0gcm91dGUucGFyYW1zO1xuICAgIHJldHVybiB0aGlzLmFzc2V0cy5zZWFyY2hBc3NldHModGhpcy5zZWFyY2hDb250ZXh0LnN0YXRlKTtcbiAgfVxufVxuIl19
