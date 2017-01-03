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
var CollectionSortDdComponent = (function () {
    function CollectionSortDdComponent() {
        this.sort = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        this.sortOptions = [];
        this.sortOptions = [
            {
                'first': { 'id': 0, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.DATE_MOD_NEWEST', 'value': 'modNewest', 'sort': { 's': 'lastUpdated', 'd': true } },
                'second': { 'id': 1, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.DATE_MOD_OLDEST', 'value': 'modOldest', 'sort': { 's': 'lastUpdated', 'd': false } }
            },
            {
                'first': { 'id': 2, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.DATE_CREATE_NEWEST', 'value': 'createNewest', 'sort': { 's': 'createdOn', 'd': true } },
                'second': { 'id': 3, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.DATE_CREATE_OLDEST', 'value': 'createOldest', 'sort': { 's': 'createdOn', 'd': false } }
            },
            {
                'first': { 'id': 4, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.LIST_COLL_ASC', 'value': 'alphaAsc', 'sort': { 's': 'name', 'd': false } },
                'second': { 'id': 5, 'name': 'COLLECTION.INDEX.SORT_DD_MENU.LIST_COLL_DESC', 'value': 'alphaDesc', 'sort': { 's': 'name', 'd': true } }
            }
        ];
    }
    CollectionSortDdComponent.prototype.closeCollectionsSortDd = function () {
        this.uiState.closeCollectionsSortDd();
    };
    CollectionSortDdComponent.prototype.onSortResults = function (sortId) {
        this.sort.emit(sortId);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionSortDdComponent.prototype, "uiState", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CollectionSortDdComponent.prototype, "currentSort", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CollectionSortDdComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CollectionSortDdComponent.prototype, "close", void 0);
    CollectionSortDdComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'collections-sort-dd',
            templateUrl: 'collections-sort-dd.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], CollectionSortDdComponent);
    return CollectionSortDdComponent;
}());
exports.CollectionSortDdComponent = CollectionSortDdComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29sbGVjdGlvbi9jb21wb25lbnRzL2NvbGxlY3Rpb25zLXNvcnQtZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0UsZUFBZSxDQUFDLENBQUE7QUFZL0Y7SUFPRTtRQUpVLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUMxQixVQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBZSxFQUFFLENBQUM7UUFHbEMsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQjtnQkFDRSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSwrQ0FBK0MsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFDO2dCQUM3SSxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSwrQ0FBK0MsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFDO2FBQ2hKO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsa0RBQWtELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBQztnQkFDakosUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsa0RBQWtELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBQzthQUNwSjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLDZDQUE2QyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUM7Z0JBQ3BJLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLDhDQUE4QyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUM7YUFDdkk7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLDBEQUFzQixHQUE3QjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0saURBQWEsR0FBcEIsVUFBcUIsTUFBVztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBN0JEO1FBQUMsWUFBSyxFQUFFOzs4REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztrRUFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzsyREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzs0REFBQTtJQVhYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzs7aUNBQUE7SUFpQ0YsZ0NBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLGlDQUF5Qiw0QkErQnJDLENBQUEiLCJmaWxlIjoiYXBwLytjb2xsZWN0aW9uL2NvbXBvbmVudHMvY29sbGVjdGlvbnMtc29ydC1kZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCByZW5kZXJzIGEgbGlzdCBvZiBjb2xsZWN0aW9uc1xuICovXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2NvbGxlY3Rpb25zLXNvcnQtZGQnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbGxlY3Rpb25zLXNvcnQtZGQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvblNvcnREZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHVpU3RhdGU6IGFueTtcbiAgQElucHV0KCkgY3VycmVudFNvcnQ6IGFueTtcbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIHNvcnRPcHRpb25zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zb3J0T3B0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgJ2ZpcnN0JzogeyAnaWQnOiAwLCAnbmFtZSc6ICdDT0xMRUNUSU9OLklOREVYLlNPUlRfRERfTUVOVS5EQVRFX01PRF9ORVdFU1QnLCAndmFsdWUnOiAnbW9kTmV3ZXN0JywgJ3NvcnQnOiB7ICdzJzogJ2xhc3RVcGRhdGVkJywgJ2QnOiB0cnVlIH19LFxuICAgICAgICAnc2Vjb25kJzogeyAnaWQnOiAxLCAnbmFtZSc6ICdDT0xMRUNUSU9OLklOREVYLlNPUlRfRERfTUVOVS5EQVRFX01PRF9PTERFU1QnLCAndmFsdWUnOiAnbW9kT2xkZXN0JywgJ3NvcnQnOiB7ICdzJzogJ2xhc3RVcGRhdGVkJywgJ2QnOiBmYWxzZSB9fVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2ZpcnN0JyA6eyAnaWQnOiAyLCAnbmFtZSc6ICdDT0xMRUNUSU9OLklOREVYLlNPUlRfRERfTUVOVS5EQVRFX0NSRUFURV9ORVdFU1QnLCAndmFsdWUnOiAnY3JlYXRlTmV3ZXN0JywgJ3NvcnQnOiB7ICdzJzogJ2NyZWF0ZWRPbicsICdkJzogdHJ1ZSB9fSxcbiAgICAgICAgJ3NlY29uZCc6IHsgJ2lkJzogMywgJ25hbWUnOiAnQ09MTEVDVElPTi5JTkRFWC5TT1JUX0REX01FTlUuREFURV9DUkVBVEVfT0xERVNUJywgJ3ZhbHVlJzogJ2NyZWF0ZU9sZGVzdCcsICdzb3J0JzogeyAncyc6ICdjcmVhdGVkT24nLCAnZCc6IGZhbHNlIH19XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnZmlyc3QnOiB7ICdpZCc6IDQsICduYW1lJzogJ0NPTExFQ1RJT04uSU5ERVguU09SVF9ERF9NRU5VLkxJU1RfQ09MTF9BU0MnLCAndmFsdWUnOiAnYWxwaGFBc2MnLCAnc29ydCc6IHsgJ3MnOiAnbmFtZScsICdkJzogZmFsc2UgfX0sXG4gICAgICAgICdzZWNvbmQnOiB7ICdpZCc6IDUsICduYW1lJzogJ0NPTExFQ1RJT04uSU5ERVguU09SVF9ERF9NRU5VLkxJU1RfQ09MTF9ERVNDJywgJ3ZhbHVlJzogJ2FscGhhRGVzYycsICdzb3J0JzogeyAncyc6ICduYW1lJywgJ2QnOiB0cnVlIH19XG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZUNvbGxlY3Rpb25zU29ydERkKCk6IHZvaWQge1xuICAgIHRoaXMudWlTdGF0ZS5jbG9zZUNvbGxlY3Rpb25zU29ydERkKCk7XG4gIH1cblxuICBwdWJsaWMgb25Tb3J0UmVzdWx0cyhzb3J0SWQgOmFueSkge1xuICAgIHRoaXMuc29ydC5lbWl0KHNvcnRJZCk7XG4gIH1cbn1cbiJdfQ==
