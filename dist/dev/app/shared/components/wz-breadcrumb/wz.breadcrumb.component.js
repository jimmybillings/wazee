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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var search_component_1 = require('../../../+search/search.component');
var dateRange_1 = require('../../utilities/dateRange');
var WzBreadcrumbComponent = (function () {
    function WzBreadcrumbComponent(searchComponent) {
        this.apply = new core_1.EventEmitter();
        this.clear = new core_1.EventEmitter();
        this.searchComponent = searchComponent;
        this.activeFilters = [];
    }
    WzBreadcrumbComponent.prototype.clearFilter = function (filter) {
        this.searchComponent.applyFilter(filter.filterId);
    };
    WzBreadcrumbComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filters && changes.filters.currentValue) {
            this.activeFilters = [];
            this.getFilters(this.filters);
        }
    };
    WzBreadcrumbComponent.prototype.clearFilters = function () {
        this.searchComponent.clearFilters();
    };
    WzBreadcrumbComponent.prototype.formattedValueFor = function (filter) {
        if (filter.type === 'DateRange') {
            var dateRange = new dateRange_1.DateRange();
            dateRange.set('start', filter.filterValue);
            dateRange.set('end', filter.filterValue);
            return dateRange.toHumanString();
        }
        return filter.filterValue;
    };
    WzBreadcrumbComponent.prototype.getFilters = function (filter) {
        if (filter.subFilters) {
            for (var _i = 0, _a = filter.subFilters; _i < _a.length; _i++) {
                var l = _a[_i];
                this.getFilters(l);
            }
            return filter;
        }
        else {
            if (filter.active)
                this.activeFilters.push(filter);
            return filter;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzBreadcrumbComponent.prototype, "filters", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], WzBreadcrumbComponent.prototype, "loading", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzBreadcrumbComponent.prototype, "apply", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzBreadcrumbComponent.prototype, "clear", void 0);
    WzBreadcrumbComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'breadcrumb-component',
            templateUrl: 'wz.breadcrumb.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return search_component_1.SearchComponent; }))), 
        __metadata('design:paramtypes', [search_component_1.SearchComponent])
    ], WzBreadcrumbComponent);
    return WzBreadcrumbComponent;
}());
exports.WzBreadcrumbComponent = WzBreadcrumbComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1icmVhZGNydW1iL3d6LmJyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0csZUFBZSxDQUFDLENBQUE7QUFDL0gsaUNBQWdDLG1DQUFtQyxDQUFDLENBQUE7QUFDcEUsMEJBQTBCLDJCQUEyQixDQUFDLENBQUE7QUFTdEQ7SUFTRSwrQkFBd0QsZUFBZ0M7UUFOOUUsVUFBSyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzNCLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQU1uQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sMkNBQVcsR0FBbEIsVUFBbUIsTUFBVztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRU0sNENBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxpREFBaUIsR0FBeEIsVUFBeUIsTUFBVztRQUNsQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBTSxTQUFTLEdBQWMsSUFBSSxxQkFBUyxFQUFFLENBQUM7WUFDN0MsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRU8sMENBQVUsR0FBbEIsVUFBbUIsTUFBVztRQUM1QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0QixHQUFHLENBQUMsQ0FBVSxVQUFpQixFQUFqQixLQUFBLE1BQU0sQ0FBQyxVQUFVLEVBQWpCLGNBQWlCLEVBQWpCLElBQWlCLENBQUM7Z0JBQTNCLElBQUksQ0FBQyxTQUFBO2dCQUF1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUE7WUFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUEvQ0Q7UUFBQyxZQUFLLEVBQUU7OzBEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzBEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3dEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3dEQUFBO0lBWFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO21CQVdjLGFBQU0sQ0FBQyxpQkFBVSxDQUFDLGNBQU0sT0FBQSxrQ0FBZSxFQUFmLENBQWUsQ0FBQyxDQUFDOzs2QkFYdkQ7SUFtREYsNEJBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBO0FBakRZLDZCQUFxQix3QkFpRGpDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3d6LWJyZWFkY3J1bWIvd3ouYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBmb3J3YXJkUmVmLCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8rc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2RhdGVSYW5nZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2JyZWFkY3J1bWItY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICd3ei5icmVhZGNydW1iLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFd6QnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGZpbHRlcnM6IGFueTtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGFwcGx5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBzZWFyY2hDb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudDtcbiAgcHVibGljIGFjdGl2ZUZpbHRlcnM6IGFueTtcblxuXG4gIGNvbnN0cnVjdG9yKCBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gU2VhcmNoQ29tcG9uZW50KSkgc2VhcmNoQ29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQpIHtcbiAgICB0aGlzLnNlYXJjaENvbXBvbmVudCA9IHNlYXJjaENvbXBvbmVudDtcbiAgICB0aGlzLmFjdGl2ZUZpbHRlcnMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcihmaWx0ZXI6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoQ29tcG9uZW50LmFwcGx5RmlsdGVyKGZpbHRlci5maWx0ZXJJZCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICBpZiAoY2hhbmdlcy5maWx0ZXJzICYmIGNoYW5nZXMuZmlsdGVycy5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuYWN0aXZlRmlsdGVycyA9IFtdO1xuICAgICAgdGhpcy5nZXRGaWx0ZXJzKHRoaXMuZmlsdGVycyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVycygpIHtcbiAgICB0aGlzLnNlYXJjaENvbXBvbmVudC5jbGVhckZpbHRlcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXR0ZWRWYWx1ZUZvcihmaWx0ZXI6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKGZpbHRlci50eXBlID09PSAnRGF0ZVJhbmdlJykge1xuICAgICAgY29uc3QgZGF0ZVJhbmdlOiBEYXRlUmFuZ2UgPSBuZXcgRGF0ZVJhbmdlKCk7XG4gICAgICBkYXRlUmFuZ2Uuc2V0KCdzdGFydCcsIGZpbHRlci5maWx0ZXJWYWx1ZSk7XG4gICAgICBkYXRlUmFuZ2Uuc2V0KCdlbmQnLCBmaWx0ZXIuZmlsdGVyVmFsdWUpO1xuICAgICAgcmV0dXJuIGRhdGVSYW5nZS50b0h1bWFuU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlci5maWx0ZXJWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmlsdGVycyhmaWx0ZXI6IGFueSkge1xuICAgIGlmIChmaWx0ZXIuc3ViRmlsdGVycykge1xuICAgICAgZm9yICh2YXIgbCBvZiBmaWx0ZXIuc3ViRmlsdGVycykgdGhpcy5nZXRGaWx0ZXJzKGwpO1xuICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpbHRlci5hY3RpdmUpIHRoaXMuYWN0aXZlRmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgICByZXR1cm4gZmlsdGVyO1xuICAgIH1cbiAgfVxufVxuIl19
