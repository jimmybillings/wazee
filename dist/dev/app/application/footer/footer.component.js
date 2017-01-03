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
var ui_config_1 = require('../../shared/services/ui.config');
var FooterComponent = (function () {
    function FooterComponent(uiConfig) {
        this.uiConfig = uiConfig;
        this.onChangeLang = new core_1.EventEmitter();
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = this.supportedLanguages[0].code;
        this.configSubscription = this.uiConfig.get('footer').subscribe(function (config) {
            _this.config = config.config;
        });
    };
    FooterComponent.prototype.changeLang = function (e) {
        this.onChangeLang.emit(e.target.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FooterComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FooterComponent.prototype, "supportedLanguages", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FooterComponent.prototype, "onChangeLang", void 0);
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-footer',
            templateUrl: 'footer.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [ui_config_1.UiConfig])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHBsaWNhdGlvbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNGLGVBQWUsQ0FBQyxDQUFBO0FBQ3RHLDBCQUF3QixpQ0FBaUMsQ0FBQyxDQUFBO0FBYTFEO0lBUUUseUJBQ1MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQU5qQixpQkFBWSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBTWQsQ0FBQztJQUUvQixrQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDckUsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG9DQUFVLEdBQWpCLFVBQWtCLENBQU07UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBbkJEO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsrREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt5REFBQTtJQVZYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsYUFBYTtZQUMxQixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOzt1QkFBQTtJQXVCRixzQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksdUJBQWUsa0JBcUIzQixDQUFBIiwiZmlsZSI6ImFwcC9hcHBsaWNhdGlvbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWlDb25maWd9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5jb25maWcnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5cbi8qKlxuICogc2l0ZSBmb290ZXIgY29tcG9uZW50IC0gcmVuZGVycyB0aGUgZm9vdGVyIGluZm9ybWF0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1mb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJ2Zvb3Rlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjdXJyZW50VXNlcjogYW55O1xuICBASW5wdXQoKSBzdXBwb3J0ZWRMYW5ndWFnZXM6IGFueTtcbiAgQE91dHB1dCgpIG9uQ2hhbmdlTGFuZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGxhbmc6IGFueTtcbiAgcHVibGljIGNvbmZpZzogYW55O1xuICBwdWJsaWMgY29uZmlnU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHVpQ29uZmlnOiBVaUNvbmZpZykge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxhbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc1swXS5jb2RlO1xuICAgIHRoaXMuY29uZmlnU3Vic2NyaXB0aW9uID0gdGhpcy51aUNvbmZpZy5nZXQoJ2Zvb3RlcicpLnN1YnNjcmliZSgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZy5jb25maWc7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlTGFuZyhlOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlTGFuZy5lbWl0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxufVxuIl19
