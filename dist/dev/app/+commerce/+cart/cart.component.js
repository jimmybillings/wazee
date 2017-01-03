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
var CartComponent = (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
        this.tabLabelKeys = ['cart', 'review'];
        this.tabEnabled = this.tabLabelKeys.map(function (_, index) { return index === 0; });
        this.selectedTabIndex = 0;
    };
    CartComponent.prototype.onNotification = function (message) {
        switch (message.type) {
            case 'GO_TO_NEXT_TAB': {
                this.goToNextTab();
                break;
            }
            case 'GO_TO_PREVIOUS_TAB': {
                this.goToPreviousTab();
                break;
            }
        }
    };
    CartComponent.prototype.goToNextTab = function () {
        var _this = this;
        var nextSelectedTabIndex = this.selectedTabIndex + 1;
        if (nextSelectedTabIndex >= this.tabLabelKeys.length)
            return;
        this.tabEnabled[nextSelectedTabIndex] = true;
        setTimeout(function (_) { return _this.selectedTabIndex = nextSelectedTabIndex; }, 50);
    };
    CartComponent.prototype.goToPreviousTab = function () {
        if (this.selectedTabIndex === 0)
            return;
        this.selectedTabIndex -= 1;
    };
    CartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cart-component',
            templateUrl: 'cart.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK2NhcnQvY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQVFsRDtJQUFBO0lBK0NBLENBQUM7SUExQ0MsZ0NBQVEsR0FBUjtRQU1FLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFHdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxLQUFLLElBQUssT0FBQSxLQUFLLEtBQUssQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLHNDQUFjLEdBQXJCLFVBQXNCLE9BQVk7UUFDaEMsTUFBTSxDQUFBLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLEtBQUssQ0FBQztZQUNSLENBQUM7WUFDRCxLQUFLLG9CQUFvQixFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsS0FBSyxDQUFDO1lBQ1IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU8sbUNBQVcsR0FBbkI7UUFBQSxpQkFTQztRQVJDLElBQUksb0JBQW9CLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUM3RCxFQUFFLENBQUMsQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUU3RCxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDO1FBSTdDLFVBQVUsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsRUFBNUMsQ0FBNEMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sdUNBQWUsR0FBdkI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQXBESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDOztxQkFBQTtJQWlERixvQkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUEvQ1kscUJBQWEsZ0JBK0N6QixDQUFBIiwiZmlsZSI6ImFwcC8rY29tbWVyY2UvK2NhcnQvY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjYXJ0LWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnY2FydC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIENhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgdGFiTGFiZWxLZXlzOiBzdHJpbmdbXTtcbiAgcHVibGljIHRhYkVuYWJsZWQ6IGJvb2xlYW5bXTtcbiAgcHVibGljIHNlbGVjdGVkVGFiSW5kZXg6IG51bWJlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBXZSBjb3VsZCBpbml0aWFsaXplIGEgc3Vic2V0IG9mIHRoZXNlIGluc3RlYWQsIGJhc2VkIG9uIHNvbWUgY29uZGl0aW9uLlxuICAgIC8vIEZvciBleGFtcGxlLCBkb24ndCBpbmNsdWRlICdiaWxsaW5nJyBhbmQgJ3BheW1lbnQnIGlmIHRoZSBjYXJ0IHRvdGFsIGlzIDAuXG4gICAgLy8gdGhpcy50YWJMYWJlbEtleXMgPSBbJ2NhcnQnLCAncmV2aWV3JywgJ2JpbGxpbmcnLCAncGF5bWVudCcsICdjb25maXJtJ107XG5cbiAgICAvLyBGb3Igbm93IChCRVRBKSwgd2UgaGF2ZSBvbmx5IGNhcnQgYW5kIHJldmlldy5cbiAgICB0aGlzLnRhYkxhYmVsS2V5cyA9IFsnY2FydCcsICdyZXZpZXcnXTtcblxuICAgIC8vIEVuYWJsZSB0aGUgZmlyc3QgdGFiIGFuZCBkaXNhYmxlIHRoZSByZXN0LlxuICAgIHRoaXMudGFiRW5hYmxlZCA9IHRoaXMudGFiTGFiZWxLZXlzLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ID09PSAwKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRUYWJJbmRleCA9IDA7XG4gIH1cblxuICBwdWJsaWMgb25Ob3RpZmljYXRpb24obWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgc3dpdGNoKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnR09fVE9fTkVYVF9UQUInOiB7XG4gICAgICAgIHRoaXMuZ29Ub05leHRUYWIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdHT19UT19QUkVWSU9VU19UQUInOiB7XG4gICAgICAgIHRoaXMuZ29Ub1ByZXZpb3VzVGFiKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ29Ub05leHRUYWIoKTp2b2lkIHtcbiAgICBsZXQgbmV4dFNlbGVjdGVkVGFiSW5kZXg6IG51bWJlciA9IHRoaXMuc2VsZWN0ZWRUYWJJbmRleCArIDE7XG4gICAgaWYgKG5leHRTZWxlY3RlZFRhYkluZGV4ID49IHRoaXMudGFiTGFiZWxLZXlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgdGhpcy50YWJFbmFibGVkW25leHRTZWxlY3RlZFRhYkluZGV4XSA9IHRydWU7XG5cbiAgICAvLyBJY2shICBIYXZlIHRvIHdhaXQgZm9yIHRoZSB0YWIgdG8gYmUgZW5hYmxlZCBiZWZvcmUgd2UgY2FuIHNlbGVjdCBpdC5cbiAgICAvLyBUT0RPOiBUaGVyZSBtdXN0IGJlIGEgYmV0dGVyIHdheS4uLlxuICAgIHNldFRpbWVvdXQoXyA9PiB0aGlzLnNlbGVjdGVkVGFiSW5kZXggPSBuZXh0U2VsZWN0ZWRUYWJJbmRleCwgNTApO1xuICB9XG5cbiAgcHJpdmF0ZSBnb1RvUHJldmlvdXNUYWIoKTp2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRhYkluZGV4ID09PSAwKSByZXR1cm47XG4gICAgdGhpcy5zZWxlY3RlZFRhYkluZGV4IC09IDE7XG4gIH1cbn1cbiJdfQ==
