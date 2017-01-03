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
var dateRange_1 = require('../shared/utilities/dateRange');
;
var FilterComponent = (function () {
    function FilterComponent(searchComponent) {
        this.searchComponent = searchComponent;
        this.dateRange = new dateRange_1.DateRange();
    }
    FilterComponent.prototype.filterShouldBeShowing = function (filter) {
        var filterState = JSON.parse(localStorage.getItem('filterState'));
        if (filterState) {
            return filterState[filter.name];
        }
        else {
            return filter.active;
        }
    };
    FilterComponent.prototype.toggle = function (filter) {
        var filterState = JSON.parse(localStorage.getItem('filterState'));
        if (filterState) {
            filterState[filter.name] = !filterState[filter.name];
            localStorage.setItem('filterState', JSON.stringify(filterState));
        }
        else {
            this.searchComponent.toggleFilter(filter.filterId);
        }
    };
    FilterComponent.prototype.applyFilter = function (filterId) {
        this.searchComponent.applyFilter(filterId);
    };
    FilterComponent.prototype.applyExclusiveFilter = function (subFilter) {
        this.searchComponent.applyExclusiveFilter(subFilter);
    };
    FilterComponent.prototype.hasActiveChildren = function (filter) {
        if (filter.subFilters) {
            return filter.subFilters.filter(function (f) { return f.active; }).length > 0;
        }
        else {
            return false;
        }
    };
    FilterComponent.prototype.hasCounts = function (filter) {
        var hasCounts = true;
        if (filter.subFilters) {
            hasCounts = filter.subFilters.filter(function (f) {
                return f.count > 0;
            }).length > 0;
        }
        else {
            hasCounts = filter.count !== 0;
        }
        return hasCounts;
    };
    FilterComponent.prototype.isHeadingFilter = function (count) {
        return count === -1;
    };
    FilterComponent.prototype.customValue = function (event, filter) {
        if (event.code === 'Enter') {
            this.searchComponent.applyCustomValue(filter, event.target.value);
        }
    };
    FilterComponent.prototype.dateRangeSelect = function (event, filter) {
        var element = event.target;
        this.dateRange.set(element.name, element.value);
        element.event = this.dateRange.get(element.name);
        this.searchComponent.applyCustomValue(filter, this.dateRange.toString());
    };
    FilterComponent.prototype.defaultDate = function (filter, key) {
        if (filter && filter.filterValue) {
            this.dateRange.set(key, filter.filterValue);
        }
        return this.dateRange.get(key);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FilterComponent.prototype, "filters", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FilterComponent.prototype, "counted", void 0);
    FilterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filter-component',
            templateUrl: 'filter.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [search_component_1.SearchComponent])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc2VhcmNoL2ZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwRCxlQUFlLENBQUMsQ0FBQTtBQUUxRSxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCwwQkFBd0MsK0JBQStCLENBQUMsQ0FBQTtBQU12RSxDQUFDO0FBU0Y7SUFLRSx5QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLCtDQUFxQixHQUE1QixVQUE2QixNQUFXO1FBQ3RDLElBQUksV0FBVyxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7SUFFTSxnQ0FBTSxHQUFiLFVBQWMsTUFBVztRQUN2QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNsRSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuRSxD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QUFDLENBQUM7SUFDakMsQ0FBQztJQWhGRDtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFUVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsYUFBYTtZQUMxQixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOzt1QkFBQTtJQW9GRixzQkFBQztBQUFELENBbEZBLEFBa0ZDLElBQUE7QUFsRlksdUJBQWUsa0JBa0YzQixDQUFBIiwiZmlsZSI6ImFwcC8rc2VhcmNoL2ZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlS2V5LCBEYXRlUmFuZ2UgfSBmcm9tICcuLi9zaGFyZWQvdXRpbGl0aWVzL2RhdGVSYW5nZSc7XG5cbmludGVyZmFjZSBEYXRlUmFuZ2VFbGVtZW50IHtcbiAgbmFtZTogRGF0ZVJhbmdlS2V5O1xuICB2YWx1ZTogc3RyaW5nO1xuICBldmVudDogc3RyaW5nO1xufTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZmlsdGVyLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnZmlsdGVyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGZpbHRlcnM6IGFueTtcbiAgQElucHV0KCkgY291bnRlZDogYm9vbGVhbjtcbiAgcHVibGljIGRhdGVSYW5nZTogRGF0ZVJhbmdlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VhcmNoQ29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQpIHtcbiAgICB0aGlzLmRhdGVSYW5nZSA9IG5ldyBEYXRlUmFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJTaG91bGRCZVNob3dpbmcoZmlsdGVyOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgZmlsdGVyU3RhdGU6IGFueSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlclN0YXRlJykpO1xuICAgIGlmIChmaWx0ZXJTdGF0ZSkge1xuICAgICAgcmV0dXJuIGZpbHRlclN0YXRlW2ZpbHRlci5uYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbHRlci5hY3RpdmU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZShmaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgIGxldCBmaWx0ZXJTdGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlclN0YXRlJykpO1xuICAgIGlmIChmaWx0ZXJTdGF0ZSkge1xuICAgICAgZmlsdGVyU3RhdGVbZmlsdGVyLm5hbWVdID0gIWZpbHRlclN0YXRlW2ZpbHRlci5uYW1lXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJTdGF0ZScsIEpTT04uc3RyaW5naWZ5KGZpbHRlclN0YXRlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29tcG9uZW50LnRvZ2dsZUZpbHRlcihmaWx0ZXIuZmlsdGVySWQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhcHBseUZpbHRlcihmaWx0ZXJJZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hDb21wb25lbnQuYXBwbHlGaWx0ZXIoZmlsdGVySWQpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5RXhjbHVzaXZlRmlsdGVyKHN1YkZpbHRlcjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hDb21wb25lbnQuYXBwbHlFeGNsdXNpdmVGaWx0ZXIoc3ViRmlsdGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNBY3RpdmVDaGlsZHJlbihmaWx0ZXI6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChmaWx0ZXIuc3ViRmlsdGVycykge1xuICAgICAgcmV0dXJuIGZpbHRlci5zdWJGaWx0ZXJzLmZpbHRlcigoZjogYW55KSA9PiBmLmFjdGl2ZSkubGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNDb3VudHMoZmlsdGVyOiBhbnkpOiBib29sZWFuIHtcbiAgICB2YXIgaGFzQ291bnRzOiBib29sZWFuID0gdHJ1ZTtcbiAgICBpZiAoZmlsdGVyLnN1YkZpbHRlcnMpIHtcbiAgICAgIGhhc0NvdW50cyA9IGZpbHRlci5zdWJGaWx0ZXJzLmZpbHRlcigoZjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBmLmNvdW50ID4gMDtcbiAgICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc0NvdW50cyA9IGZpbHRlci5jb3VudCAhPT0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NvdW50cztcbiAgfVxuXG4gIHB1YmxpYyBpc0hlYWRpbmdGaWx0ZXIoY291bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb3VudCA9PT0gLTE7XG4gIH1cblxuICBwdWJsaWMgY3VzdG9tVmFsdWUoZXZlbnQ6IGFueSwgZmlsdGVyOiBhbnkpIHtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5zZWFyY2hDb21wb25lbnQuYXBwbHlDdXN0b21WYWx1ZShmaWx0ZXIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRhdGVSYW5nZVNlbGVjdChldmVudDogYW55LCBmaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IERhdGVSYW5nZUVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgICB0aGlzLmRhdGVSYW5nZS5zZXQoZWxlbWVudC5uYW1lLCBlbGVtZW50LnZhbHVlKTtcbiAgICBlbGVtZW50LmV2ZW50ID0gdGhpcy5kYXRlUmFuZ2UuZ2V0KGVsZW1lbnQubmFtZSk7XG5cbiAgICB0aGlzLnNlYXJjaENvbXBvbmVudC5hcHBseUN1c3RvbVZhbHVlKGZpbHRlciwgdGhpcy5kYXRlUmFuZ2UudG9TdHJpbmcoKSk7XG4gIH1cblxuICBwdWJsaWMgZGVmYXVsdERhdGUoZmlsdGVyOiBhbnksIGtleTogRGF0ZVJhbmdlS2V5KTogc3RyaW5nIHtcbiAgICBpZiAoZmlsdGVyICYmIGZpbHRlci5maWx0ZXJWYWx1ZSkge1xuICAgICAgdGhpcy5kYXRlUmFuZ2Uuc2V0KGtleSwgZmlsdGVyLmZpbHRlclZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kYXRlUmFuZ2UuZ2V0KGtleSk7XG4gIH1cbn1cbiJdfQ==
