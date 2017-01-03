"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var tab_1 = require('./tab');
var BillingTabComponent = (function (_super) {
    __extends(BillingTabComponent, _super);
    function BillingTabComponent() {
        _super.apply(this, arguments);
        this.tabNotify = this.notify;
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BillingTabComponent.prototype, "tabNotify", void 0);
    BillingTabComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'billing-tab-component',
            templateUrl: 'billing-tab.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BillingTabComponent);
    return BillingTabComponent;
}(tab_1.Tab));
exports.BillingTabComponent = BillingTabComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK2NhcnQvY29tcG9uZW50cy90YWJzL2JpbGxpbmctdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0QsZUFBZSxDQUFDLENBQUE7QUFFaEUsb0JBQW9CLE9BQU8sQ0FBQyxDQUFBO0FBUTVCO0lBQXlDLHVDQUFHO0lBQTVDO1FBQXlDLDhCQUFHO1FBQ2hDLGNBQVMsR0FBeUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMxRCxDQUFDO0lBREM7UUFBQyxhQUFNLEVBQUU7OzBEQUFBO0lBUFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLGtCQUFrQjtTQUNoQyxDQUFDOzsyQkFBQTtJQUlGLDBCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRndDLFNBQUcsR0FFM0M7QUFGWSwyQkFBbUIsc0JBRS9CLENBQUEiLCJmaWxlIjoiYXBwLytjb21tZXJjZS8rY2FydC9jb21wb25lbnRzL3RhYnMvYmlsbGluZy10YWIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWIgfSBmcm9tICcuL3RhYic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2JpbGxpbmctdGFiLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnYmlsbGluZy10YWIuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBCaWxsaW5nVGFiQ29tcG9uZW50IGV4dGVuZHMgVGFiIHtcbiAgQE91dHB1dCgpIHRhYk5vdGlmeTogRXZlbnRFbWl0dGVyPE9iamVjdD4gPSB0aGlzLm5vdGlmeTtcbn1cbiJdfQ==
