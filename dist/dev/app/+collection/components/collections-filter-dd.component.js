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
var CollectionFilterDdComponent = (function () {
    function CollectionFilterDdComponent() {
        this.filter = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        this.filterOptions = [];
        this.filterOptions = [
            {
                'first': { 'id': 0, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.ALL', 'value': 'all', 'access': { 'accessLevel': 'all' } }
            },
            {
                'first': { 'id': 1, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.OWNER', 'value': 'owner', 'access': { 'accessLevel': 'owner' } },
                'second': { 'id': 2, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.EDITOR', 'value': 'editor', 'access': { 'accessLevel': 'editor' } },
                'third': { 'id': 3, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.VIEWER', 'value': 'viewer', 'access': { 'accessLevel': 'viewer' } }
            },
            {
                'first': { 'id': 4, 'name': 'COLLECTION.INDEX.FILTER_DD_MENU.RESEARCHER', 'value': 'researcher', 'access': { 'accessLevel': 'researcher' } }
            }
        ];
    }
    CollectionFilterDdComponent.prototype.closeCollectionsFiltertDd = function () {
        this.close.emit();
    };
    CollectionFilterDdComponent.prototype.onFilterResults = function (filter) {
        this.filter.emit(filter);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionFilterDdComponent.prototype, "currentFilter", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CollectionFilterDdComponent.prototype, "filter", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CollectionFilterDdComponent.prototype, "close", void 0);
    CollectionFilterDdComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'collections-filter-dd',
            templateUrl: 'collections-filter-dd.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], CollectionFilterDdComponent);
    return CollectionFilterDdComponent;
}());
exports.CollectionFilterDdComponent = CollectionFilterDdComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29sbGVjdGlvbi9jb21wb25lbnRzL2NvbGxlY3Rpb25zLWZpbHRlci1kZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRSxlQUFlLENBQUMsQ0FBQTtBQVkvRjtJQU1FO1FBSlUsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzVCLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFlLEVBQUUsQ0FBQztRQUdwQyxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CO2dCQUNFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLHFDQUFxQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFO2FBQ3hIO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsdUNBQXVDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQzdILFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLHdDQUF3QyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxFQUFFO2dCQUNqSSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSx3Q0FBd0MsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsRUFBRTthQUNqSTtZQUNEO2dCQUNFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLDRDQUE0QyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxFQUFFO2FBQzdJO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSwrREFBeUIsR0FBaEM7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxxREFBZSxHQUF0QixVQUF1QixNQUFVO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUEzQkQ7UUFBQyxZQUFLLEVBQUU7O3NFQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OytEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7OzhEQUFBO0lBVlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOzttQ0FBQTtJQStCRixrQ0FBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlksbUNBQTJCLDhCQTZCdkMsQ0FBQSIsImZpbGUiOiJhcHAvK2NvbGxlY3Rpb24vY29tcG9uZW50cy9jb2xsZWN0aW9ucy1maWx0ZXItZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgcmVuZGVycyBhIGxpc3Qgb2YgY29sbGVjdGlvbnNcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjb2xsZWN0aW9ucy1maWx0ZXItZGQnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbGxlY3Rpb25zLWZpbHRlci1kZC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uRmlsdGVyRGRDb21wb25lbnQge1xuICBASW5wdXQoKSBjdXJyZW50RmlsdGVyOiBhbnk7XG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGZpbHRlck9wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlck9wdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgICdmaXJzdCc6IHsgJ2lkJzogMCwgJ25hbWUnOiAnQ09MTEVDVElPTi5JTkRFWC5GSUxURVJfRERfTUVOVS5BTEwnLCAndmFsdWUnOiAnYWxsJywgJ2FjY2Vzcyc6IHsgJ2FjY2Vzc0xldmVsJzogJ2FsbCcgfSB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnZmlyc3QnOiB7ICdpZCc6IDEsICduYW1lJzogJ0NPTExFQ1RJT04uSU5ERVguRklMVEVSX0REX01FTlUuT1dORVInLCAndmFsdWUnOiAnb3duZXInLCAnYWNjZXNzJzogeyAnYWNjZXNzTGV2ZWwnOiAnb3duZXInIH0gfSxcbiAgICAgICAgJ3NlY29uZCc6IHsgJ2lkJzogMiwgJ25hbWUnOiAnQ09MTEVDVElPTi5JTkRFWC5GSUxURVJfRERfTUVOVS5FRElUT1InLCAndmFsdWUnOiAnZWRpdG9yJywgJ2FjY2Vzcyc6IHsgJ2FjY2Vzc0xldmVsJzogJ2VkaXRvcicgfSB9LFxuICAgICAgICAndGhpcmQnOiB7ICdpZCc6IDMsICduYW1lJzogJ0NPTExFQ1RJT04uSU5ERVguRklMVEVSX0REX01FTlUuVklFV0VSJywgJ3ZhbHVlJzogJ3ZpZXdlcicsICdhY2Nlc3MnOiB7ICdhY2Nlc3NMZXZlbCc6ICd2aWV3ZXInIH0gfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2ZpcnN0JzogeyAnaWQnOiA0LCAnbmFtZSc6ICdDT0xMRUNUSU9OLklOREVYLkZJTFRFUl9ERF9NRU5VLlJFU0VBUkNIRVInLCAndmFsdWUnOiAncmVzZWFyY2hlcicsICdhY2Nlc3MnOiB7ICdhY2Nlc3NMZXZlbCc6ICdyZXNlYXJjaGVyJyB9IH1cbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgcHVibGljIGNsb3NlQ29sbGVjdGlvbnNGaWx0ZXJ0RGQoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KCk7XG4gIH1cblxuICBwdWJsaWMgb25GaWx0ZXJSZXN1bHRzKGZpbHRlcjphbnkpIHtcbiAgICB0aGlzLmZpbHRlci5lbWl0KGZpbHRlcik7XG4gIH1cbn1cbiJdfQ==
