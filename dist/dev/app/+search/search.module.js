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
var search_component_1 = require('./search.component');
var shared_module_1 = require('../shared/shared.module');
var filter_component_1 = require('./filter.component');
var no_results_component_1 = require('./no-results.component');
var asset_data_service_1 = require('./services/asset.data.service');
var asset_store_1 = require('./services/asset.store');
var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule],
            declarations: [search_component_1.SearchComponent, filter_component_1.FilterComponent, no_results_component_1.NoResultsComponent],
            exports: [search_component_1.SearchComponent],
            providers: [asset_data_service_1.AssetData, asset_store_1.AssetStore]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2VhcmNoL3NlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxxQ0FBbUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM1RCxtQ0FBMEIsK0JBQStCLENBQUMsQ0FBQTtBQUMxRCw0QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQVNwRDtJQUFBO0lBQTRCLENBQUM7SUFQN0I7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLGtDQUFlLEVBQUUsa0NBQWUsRUFBRSx5Q0FBa0IsQ0FBQztZQUNwRSxPQUFPLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzFCLFNBQVMsRUFBRSxDQUFDLDhCQUFTLEVBQUUsd0JBQVUsQ0FBQztTQUNyQyxDQUFDOztvQkFBQTtJQUUwQixtQkFBQztBQUFELENBQTVCLEFBQTZCLElBQUE7QUFBaEIsb0JBQVksZUFBSSxDQUFBIiwiZmlsZSI6ImFwcC8rc2VhcmNoL3NlYXJjaC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb1Jlc3VsdHNDb21wb25lbnQgfSBmcm9tICcuL25vLXJlc3VsdHMuY29tcG9uZW50JztcbmltcG9ydCB7IEFzc2V0RGF0YSB9IGZyb20gJy4vc2VydmljZXMvYXNzZXQuZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEFzc2V0U3RvcmUgfSBmcm9tICcuL3NlcnZpY2VzL2Fzc2V0LnN0b3JlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtTZWFyY2hDb21wb25lbnQsIEZpbHRlckNvbXBvbmVudCwgTm9SZXN1bHRzQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbU2VhcmNoQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtBc3NldERhdGEsIEFzc2V0U3RvcmVdXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kdWxlIHsgfVxuIl19
