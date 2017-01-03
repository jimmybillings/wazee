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
var current_user_model_1 = require('./shared/services/current-user.model');
var NotFoundComponent = (function () {
    function NotFoundComponent(currentUser) {
        this.currentUser = currentUser;
    }
    NotFoundComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'not-found-component',
            template: "<div layout-align=\"center center\">\n              <div layout=\"column\" layout-align=\"center center\">\n                <div flex-xs=\"85\" flex-gt-xs=\"90\" flex-gt-lg=\"95\">\n                  <div class=\"warn-message\" layout=\"column\" layout-align=\"center center\">\n                    <h3 class=\"md-display\">The page you're looking for doesn't exist</h3>\n                  </div>\n                  <div layout=\"row\" layout-align=\"center center\">\n                    <button class=\"link\" md-button [routerLink]=\"['/']\">HOME</button>\n                    <button *ngIf=\"currentUser.loggedIn()\" class=\"link\" md-button [routerLink]=\"['/commerce']\">CART</button>\n                    <button *ngIf=\"currentUser.loggedIn()\" class=\"link\" md-button [routerLink]=\"['/collections']\">COLLECTIONS</button>\n                  </div>\n                </div>\n              </div>\n            </div>",
            styles: ["\n            button.link {\n              margin-right: 10px;\n              border: 1px solid #ccc; \n            }\n          "]
        }), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubm90LWZvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLG1DQUE0QixzQ0FBc0MsQ0FBQyxDQUFBO0FBMkJuRTtJQUNFLDJCQUFtQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUExQmxEO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSw4NUJBYU87WUFDakIsTUFBTSxFQUFFLENBQUMsbUlBS0EsQ0FBQztTQUNYLENBQUM7O3lCQUFBO0lBSUYsd0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHlCQUFpQixvQkFFN0IsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLm5vdC1mb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvY3VycmVudC11c2VyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbm90LWZvdW5kLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBsYXlvdXQtYWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgbGF5b3V0PVwiY29sdW1uXCIgbGF5b3V0LWFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZmxleC14cz1cIjg1XCIgZmxleC1ndC14cz1cIjkwXCIgZmxleC1ndC1sZz1cIjk1XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Fybi1tZXNzYWdlXCIgbGF5b3V0PVwiY29sdW1uXCIgbGF5b3V0LWFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtZC1kaXNwbGF5XCI+VGhlIHBhZ2UgeW91J3JlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpbmtcIiBtZC1idXR0b24gW3JvdXRlckxpbmtdPVwiWycvJ11cIj5IT01FPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjdXJyZW50VXNlci5sb2dnZWRJbigpXCIgY2xhc3M9XCJsaW5rXCIgbWQtYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnL2NvbW1lcmNlJ11cIj5DQVJUPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjdXJyZW50VXNlci5sb2dnZWRJbigpXCIgY2xhc3M9XCJsaW5rXCIgbWQtYnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnL2NvbGxlY3Rpb25zJ11cIj5DT0xMRUNUSU9OUzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbYFxuICAgICAgICAgICAgYnV0dG9uLmxpbmsge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgTm90Rm91bmRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyKSB7IH1cbn0iXX0=
