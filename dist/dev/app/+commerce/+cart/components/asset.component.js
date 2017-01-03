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
var AssetComponent = (function () {
    function AssetComponent() {
        this.assetNotify = new core_1.EventEmitter();
        this.metadata = {};
    }
    AssetComponent.prototype.ngOnInit = function () {
        this.cacheMetadata();
    };
    AssetComponent.prototype.translationReady = function (field) {
        return 'assetmetadata.' + field.replace(/\./g, '_');
    };
    AssetComponent.prototype.cacheMetadata = function () {
        var _this = this;
        this.asset.metadata.forEach(function (metadatum) {
            _this.metadata[metadatum.name] = metadatum.value;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetComponent.prototype, "asset", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AssetComponent.prototype, "assetNotify", void 0);
    AssetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cart-asset-component',
            templateUrl: 'asset.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], AssetComponent);
    return AssetComponent;
}());
exports.AssetComponent = AssetComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK2NhcnQvY29tcG9uZW50cy9hc3NldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3RixlQUFlLENBQUMsQ0FBQTtBQVl4RztJQUFBO1FBRVksZ0JBQVcsR0FBeUIsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFFbEUsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQWU1QixDQUFDO0lBYlEsaUNBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0seUNBQWdCLEdBQXZCLFVBQXdCLEtBQVU7UUFDaEMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTyxzQ0FBYSxHQUFyQjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBb0I7WUFDL0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQkQ7UUFBQyxZQUFLLEVBQUU7O2lEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3VEQUFBO0lBVlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBRW5CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLFlBQVk7WUFDekIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzs7c0JBQUE7SUFxQkYscUJBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLHNCQUFjLGlCQW1CMUIsQ0FBQSIsImZpbGUiOiJhcHAvK2NvbW1lcmNlLytjYXJ0L2NvbXBvbmVudHMvYXNzZXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXNzZXQsIE1ldGFkYXR1bSB9IGZyb20gJy4uL2NhcnQuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIC8vIFdvdWxkIHByZWZlciBzaW1wbHkgJ2Fzc2V0LWNvbXBvbmVudCcsIGJ1dCBmb3Igc29tZSByZWFzb24gd2UgaGF2ZSBnbG9iYWwgc3R5bGVzIGZvciB0aGF0IHNlbGVjdG9yLlxuICBzZWxlY3RvcjogJ2NhcnQtYXNzZXQtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdhc3NldC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBBc3NldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFzc2V0OiBBc3NldDtcbiAgQE91dHB1dCgpIGFzc2V0Tm90aWZ5OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuXG4gIHB1YmxpYyBtZXRhZGF0YTogYW55ID0ge307XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FjaGVNZXRhZGF0YSgpO1xuICB9XG5cbiAgcHVibGljIHRyYW5zbGF0aW9uUmVhZHkoZmllbGQ6IGFueSkge1xuICAgIHJldHVybiAnYXNzZXRtZXRhZGF0YS4nICsgZmllbGQucmVwbGFjZSgvXFwuL2csICdfJyk7XG4gIH1cblxuICBwcml2YXRlIGNhY2hlTWV0YWRhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5hc3NldC5tZXRhZGF0YS5mb3JFYWNoKChtZXRhZGF0dW06IE1ldGFkYXR1bSkgPT4ge1xuICAgICAgdGhpcy5tZXRhZGF0YVttZXRhZGF0dW0ubmFtZV0gPSBtZXRhZGF0dW0udmFsdWU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
