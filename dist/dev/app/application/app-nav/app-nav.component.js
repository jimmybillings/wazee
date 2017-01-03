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
var material_1 = require('@angular/material');
var AppNavComponent = (function () {
    function AppNavComponent() {
        this.onLogOut = new core_1.EventEmitter();
        this.onChangeLang = new core_1.EventEmitter();
        this.onOpenSidenav = new core_1.EventEmitter();
    }
    AppNavComponent.prototype.logOut = function (event) {
        this.onLogOut.emit(event);
        this.trigger.closeMenu();
    };
    AppNavComponent.prototype.toggleSearch = function () {
        this.prefs.toggleSearch();
    };
    AppNavComponent.prototype.toggleCollectionTray = function () {
        this.prefs.toggleCollectionTray();
    };
    AppNavComponent.prototype.showNewCollection = function (event) {
        this.uiState.showNewCollection();
    };
    AppNavComponent.prototype.formatBadgeNumber = function (size) {
        return (size > 99) ? '99+' : size.toString();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "supportedLanguages", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "state", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "collection", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "uiState", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "prefs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "cartSize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "userCan", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "onLogOut", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "onChangeLang", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppNavComponent.prototype, "onOpenSidenav", void 0);
    __decorate([
        core_1.ViewChild(material_1.MdMenuTrigger), 
        __metadata('design:type', material_1.MdMenuTrigger)
    ], AppNavComponent.prototype, "trigger", void 0);
    AppNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-nav',
            templateUrl: 'app-nav.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], AppNavComponent);
    return AppNavComponent;
}());
exports.AppNavComponent = AppNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9hcHAtbmF2L2FwcC1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEYsZUFBZSxDQUFDLENBQUE7QUFFMUcseUJBQThCLG1CQUFtQixDQUFDLENBQUE7QUFXbEQ7SUFBQTtRQVVZLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM5QixpQkFBWSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2xDLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUF1Qi9DLENBQUM7SUFwQlEsZ0NBQU0sR0FBYixVQUFjLEtBQVk7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sc0NBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSw4Q0FBb0IsR0FBM0I7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLDJDQUFpQixHQUF4QixVQUF5QixLQUFZO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU0sMkNBQWlCLEdBQXhCLFVBQXlCLElBQVM7UUFDaEMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQWpDRDtRQUFDLFlBQUssRUFBRTs7d0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7K0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7a0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7a0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7cURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MERBQUE7SUFDVDtRQUFDLGdCQUFTLENBQUMsd0JBQWEsQ0FBQzs7b0RBQUE7SUFwQjNCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsY0FBYztZQUMzQixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOzt1QkFBQTtJQXFDRixzQkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksdUJBQWUsa0JBbUMzQixDQUFBIiwiZmlsZSI6ImFwcC9hcHBsaWNhdGlvbi9hcHAtbmF2L2FwcC1uYXYuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2NvbGxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IE1kTWVudVRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG4vKipcbiAqIHNpdGUgaGVhZGVyIGNvbXBvbmVudCAtIHJlbmRlcnMgdGhlIGhlYWRlciBpbmZvcm1hdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAtbmF2Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE5hdkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGN1cnJlbnRVc2VyOiBhbnk7XG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuICBASW5wdXQoKSBzdXBwb3J0ZWRMYW5ndWFnZXM6IGFueTtcbiAgQElucHV0KCkgc3RhdGU6IGFueTtcbiAgQElucHV0KCkgY29sbGVjdGlvbjogQ29sbGVjdGlvbjtcbiAgQElucHV0KCkgdWlTdGF0ZTogYW55O1xuICBASW5wdXQoKSBwcmVmczogYW55O1xuICBASW5wdXQoKSBjYXJ0U2l6ZTogYW55O1xuICBASW5wdXQoKSB1c2VyQ2FuOiBhbnk7XG4gIEBPdXRwdXQoKSBvbkxvZ091dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2hhbmdlTGFuZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uT3BlblNpZGVuYXYgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoTWRNZW51VHJpZ2dlcikgdHJpZ2dlcjogTWRNZW51VHJpZ2dlcjtcblxuICBwdWJsaWMgbG9nT3V0KGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMub25Mb2dPdXQuZW1pdChldmVudCk7XG4gICAgdGhpcy50cmlnZ2VyLmNsb3NlTWVudSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVNlYXJjaCgpIHtcbiAgICB0aGlzLnByZWZzLnRvZ2dsZVNlYXJjaCgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUNvbGxlY3Rpb25UcmF5KCkge1xuICAgIHRoaXMucHJlZnMudG9nZ2xlQ29sbGVjdGlvblRyYXkoKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93TmV3Q29sbGVjdGlvbihldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnVpU3RhdGUuc2hvd05ld0NvbGxlY3Rpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRCYWRnZU51bWJlcihzaXplOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiAoc2l6ZSA+IDk5KSA/ICc5OSsnIDogc2l6ZS50b1N0cmluZygpO1xuICB9XG59XG4iXX0=
