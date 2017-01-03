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
var AssetShareLinkComponent = (function () {
    function AssetShareLinkComponent() {
        this.close = new core_1.EventEmitter();
    }
    AssetShareLinkComponent.prototype.closeAssetShareLink = function () {
        this.uiState.closeAssetShareLink();
    };
    AssetShareLinkComponent.prototype.selectInputForCopy = function (event) {
        event.target.select();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetShareLinkComponent.prototype, "uiState", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AssetShareLinkComponent.prototype, "assetLink", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AssetShareLinkComponent.prototype, "close", void 0);
    AssetShareLinkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'asset-share-link',
            templateUrl: 'asset-share-link.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], AssetShareLinkComponent);
    return AssetShareLinkComponent;
}());
exports.AssetShareLinkComponent = AssetShareLinkComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXNzZXQvY29tcG9uZW50cy9hc3NldC1zaGFyZS1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStFLGVBQWUsQ0FBQyxDQUFBO0FBWS9GO0lBQUE7UUFHWSxVQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFTdkMsQ0FBQztJQVBRLHFEQUFtQixHQUExQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sb0RBQWtCLEdBQXpCLFVBQTBCLEtBQVM7UUFDakMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBVkQ7UUFBQyxZQUFLLEVBQUU7OzREQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzhEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzBEQUFBO0lBVlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOzsrQkFBQTtJQWNGLDhCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSwrQkFBdUIsMEJBWW5DLENBQUEiLCJmaWxlIjoiYXBwLythc3NldC9jb21wb25lbnRzL2Fzc2V0LXNoYXJlLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgcmVuZGVycyBhIGxpc3Qgb2YgY29sbGVjdGlvbnNcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhc3NldC1zaGFyZS1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICdhc3NldC1zaGFyZS1saW5rLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIEFzc2V0U2hhcmVMaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdWlTdGF0ZTogYW55O1xuICBASW5wdXQoKSBhc3NldExpbms6IHN0cmluZztcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBjbG9zZUFzc2V0U2hhcmVMaW5rKCk6IHZvaWQge1xuICAgIHRoaXMudWlTdGF0ZS5jbG9zZUFzc2V0U2hhcmVMaW5rKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0SW5wdXRGb3JDb3B5KGV2ZW50OmFueSk6IHZvaWQge1xuICAgIGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcbiAgfVxufVxuIl19
