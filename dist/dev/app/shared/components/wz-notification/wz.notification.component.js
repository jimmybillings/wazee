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
var WzNotificationComponent = (function () {
    function WzNotificationComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WzNotificationComponent.prototype, "notice", void 0);
    WzNotificationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-notification',
            template: "<div class=\"notification\">\n      <p>{{notice | translate}}</p>\n    </div>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], WzNotificationComponent);
    return WzNotificationComponent;
}());
exports.WzNotificationComponent = WzNotificationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1ub3RpZmljYXRpb24vd3oubm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBYXhFO0lBQUE7SUFFQSxDQUFDO0lBREM7UUFBQyxZQUFLLEVBQUU7OzJEQUFBO0lBWlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUNSLCtFQUVTO1lBQ1QsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzs7K0JBQUE7SUFLRiw4QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksK0JBQXVCLDBCQUVuQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1ub3RpZmljYXRpb24vd3oubm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd3ei1ub3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZTpcbiAgYDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25cIj5cbiAgICAgIDxwPnt7bm90aWNlIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgPC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cblxuZXhwb3J0IGNsYXNzIFd6Tm90aWZpY2F0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbm90aWNlOiBzdHJpbmc7XG59XG4iXX0=
