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
var current_user_model_1 = require('../../services/current-user.model');
var material_1 = require('@angular/material');
var wz_speedview_component_1 = require('../wz-speedview/wz.speedview.component');
var asset_service_1 = require('../../services/asset.service');
var WzAssetListComponent = (function () {
    function WzAssetListComponent(renderer) {
        this.renderer = renderer;
        this.onAddToCollection = new core_1.EventEmitter();
        this.onRemoveFromCollection = new core_1.EventEmitter();
        this.addToCart = new core_1.EventEmitter();
        this.onDownloadComp = new core_1.EventEmitter();
        this.onShowNewCollection = new core_1.EventEmitter();
        this.assetsArr = [];
    }
    WzAssetListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.collection && changes.collection.currentValue) {
            this.assetsArr = this.collection.assets.items.map(function (x) { return x.assetId; });
        }
    };
    WzAssetListComponent.prototype.addToCollection = function (collection, asset) {
        this.onAddToCollection.emit({ 'collection': collection, 'asset': asset });
    };
    WzAssetListComponent.prototype.removeFromCollection = function (collection, asset) {
        this.onRemoveFromCollection.emit({ 'collection': collection, 'asset': asset });
    };
    WzAssetListComponent.prototype.showNewCollection = function (asset) {
        this.onShowNewCollection.emit(asset);
    };
    WzAssetListComponent.prototype.addAssetToCart = function (asset) {
        this.setAssetActiveId(asset);
        this.addToCart.emit(asset.assetId);
    };
    WzAssetListComponent.prototype.setAssetActiveId = function (asset) {
        this.assetId = asset.assetId;
        this.hasComp = asset.hasDownloadableComp;
    };
    WzAssetListComponent.prototype.downloadComp = function (compType) {
        this.onDownloadComp.emit({ 'assetId': this.assetId, 'compType': compType });
    };
    WzAssetListComponent.prototype.alreadyInCollection = function (asset) {
        return this.assetsArr.indexOf(asset.assetId) > -1;
    };
    WzAssetListComponent.prototype.showPreview = function (position) {
        var _this = this;
        this.wzSpeedview.show(position);
        this.renderer.listenGlobal('document', 'scroll', function () { return _this.wzSpeedview.destroy(); });
    };
    WzAssetListComponent.prototype.hidePreview = function () {
        this.wzSpeedview.destroy();
    };
    WzAssetListComponent.prototype.setActiveAsset = function (asset) {
        if (asset === this.activeAsset)
            return;
        this.activeAsset = asset;
        if (asset.price && asset.priceBookName)
            return;
        this.assetService.getPrice(asset.assetId).take(1).subscribe(function (data) {
            asset.price = data.price;
            asset.priceBookName = data.priceBookName;
        });
    };
    WzAssetListComponent.prototype.translationReady = function (field) {
        return 'assetmetadata.' + field.replace(/\./g, '_');
    };
    WzAssetListComponent.prototype.formatType = function (format) {
        switch (format) {
            case 'High Definition':
                return 'hd';
            case 'Standard Definition':
                return 'sd';
            case 'Digital Video':
                return 'dv';
            default:
                return 'hd';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], WzAssetListComponent.prototype, "assets", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzAssetListComponent.prototype, "userCan", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzAssetListComponent.prototype, "collection", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', current_user_model_1.CurrentUser)
    ], WzAssetListComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', asset_service_1.AssetService)
    ], WzAssetListComponent.prototype, "assetService", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzAssetListComponent.prototype, "onAddToCollection", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzAssetListComponent.prototype, "onRemoveFromCollection", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzAssetListComponent.prototype, "addToCart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzAssetListComponent.prototype, "onDownloadComp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzAssetListComponent.prototype, "onShowNewCollection", void 0);
    __decorate([
        core_1.ViewChild(material_1.MdMenuTrigger), 
        __metadata('design:type', material_1.MdMenuTrigger)
    ], WzAssetListComponent.prototype, "trigger", void 0);
    __decorate([
        core_1.ViewChild(wz_speedview_component_1.WzSpeedviewComponent), 
        __metadata('design:type', wz_speedview_component_1.WzSpeedviewComponent)
    ], WzAssetListComponent.prototype, "wzSpeedview", void 0);
    WzAssetListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-asset-list',
            templateUrl: 'wz.asset-list.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], WzAssetListComponent);
    return WzAssetListComponent;
}());
exports.WzAssetListComponent = WzAssetListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1hc3NldC1saXN0L3d6LmFzc2V0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0gsZUFBZSxDQUFDLENBQUE7QUFFaEksbUNBQTRCLG1DQUFtQyxDQUFDLENBQUE7QUFDaEUseUJBQThCLG1CQUFtQixDQUFDLENBQUE7QUFDbEQsdUNBQXFDLHdDQUF3QyxDQUFDLENBQUE7QUFDOUUsOEJBQTZCLDhCQUE4QixDQUFDLENBQUE7QUFXNUQ7SUFrQkUsOEJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFYNUIsc0JBQWlCLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDdkMsMkJBQXNCLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDNUMsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDcEMsd0JBQW1CLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFRakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7SUFDSCxDQUFDO0lBRU0sOENBQWUsR0FBdEIsVUFBdUIsVUFBc0IsRUFBRSxLQUFVO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJ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WUFDZCxLQUFLLHFCQUFxQjtnQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLEtBQUssZUFBZTtnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUExRkQ7UUFBQyxZQUFLLEVBQUU7O3dEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3lEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzREQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzZEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzhEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O21FQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3dFQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7OzJEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O2dFQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3FFQUFBO0lBQ1Q7UUFBQyxnQkFBUyxDQUFDLHdCQUFhLENBQUM7O3lEQUFBO0lBQ3pCO1FBQUMsZ0JBQVMsQ0FBQyw2Q0FBb0IsQ0FBQzs7NkRBQUE7SUFwQmxDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7OzRCQUFBO0lBK0ZGLDJCQUFDO0FBQUQsQ0E3RkEsQUE2RkMsSUFBQTtBQTdGWSw0QkFBb0IsdUJBNkZoQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1hc3NldC1saXN0L3d6LmFzc2V0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NvbGxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY3VycmVudC11c2VyLm1vZGVsJztcbmltcG9ydCB7IE1kTWVudVRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBXelNwZWVkdmlld0NvbXBvbmVudCB9IGZyb20gJy4uL3d6LXNwZWVkdmlldy93ei5zcGVlZHZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Fzc2V0LnNlcnZpY2UnO1xuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCByZW5kZXJzIGEgbGlzdCBvZiBhc3NldHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnd3otYXNzZXQtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnd3ouYXNzZXQtbGlzdC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBXekFzc2V0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBhY3RpdmVBc3NldDogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgYXNzZXRzOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKSBwdWJsaWMgdXNlckNhbjogYW55O1xuICBASW5wdXQoKSBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uO1xuICBASW5wdXQoKSBjdXJyZW50VXNlcjogQ3VycmVudFVzZXI7XG4gIEBJbnB1dCgpIGFzc2V0U2VydmljZTogQXNzZXRTZXJ2aWNlO1xuICBAT3V0cHV0KCkgb25BZGRUb0NvbGxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblJlbW92ZUZyb21Db2xsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWRkVG9DYXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Eb3dubG9hZENvbXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblNob3dOZXdDb2xsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKE1kTWVudVRyaWdnZXIpIHRyaWdnZXI6IE1kTWVudVRyaWdnZXI7XG4gIEBWaWV3Q2hpbGQoV3pTcGVlZHZpZXdDb21wb25lbnQpIHd6U3BlZWR2aWV3OiBXelNwZWVkdmlld0NvbXBvbmVudDtcbiAgcHJpdmF0ZSBhc3NldHNBcnI6IEFycmF5PG51bWJlcj47XG4gIHByaXZhdGUgYXNzZXRJZDogYW55O1xuICBwcml2YXRlIGhhc0NvbXA6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgIHRoaXMuYXNzZXRzQXJyID0gW107XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICBpZiAoY2hhbmdlcy5jb2xsZWN0aW9uICYmIGNoYW5nZXMuY29sbGVjdGlvbi5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuYXNzZXRzQXJyID0gdGhpcy5jb2xsZWN0aW9uLmFzc2V0cy5pdGVtcy5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguYXNzZXRJZDsgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZFRvQ29sbGVjdGlvbihjb2xsZWN0aW9uOiBDb2xsZWN0aW9uLCBhc3NldDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkFkZFRvQ29sbGVjdGlvbi5lbWl0KHsgJ2NvbGxlY3Rpb24nOiBjb2xsZWN0aW9uLCAnYXNzZXQnOiBhc3NldCB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVGcm9tQ29sbGVjdGlvbihjb2xsZWN0aW9uOiBDb2xsZWN0aW9uLCBhc3NldDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblJlbW92ZUZyb21Db2xsZWN0aW9uLmVtaXQoeyAnY29sbGVjdGlvbic6IGNvbGxlY3Rpb24sICdhc3NldCc6IGFzc2V0IH0pO1xuICB9XG5cbiAgcHVibGljIHNob3dOZXdDb2xsZWN0aW9uKGFzc2V0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2hvd05ld0NvbGxlY3Rpb24uZW1pdChhc3NldCk7XG4gIH1cblxuICBwdWJsaWMgYWRkQXNzZXRUb0NhcnQoYXNzZXQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0QXNzZXRBY3RpdmVJZChhc3NldCk7XG4gICAgdGhpcy5hZGRUb0NhcnQuZW1pdChhc3NldC5hc3NldElkKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBc3NldEFjdGl2ZUlkKGFzc2V0OiBhbnkpIHtcbiAgICB0aGlzLmFzc2V0SWQgPSBhc3NldC5hc3NldElkO1xuICAgIHRoaXMuaGFzQ29tcCA9IGFzc2V0Lmhhc0Rvd25sb2FkYWJsZUNvbXA7XG4gIH1cblxuICBwdWJsaWMgZG93bmxvYWRDb21wKGNvbXBUeXBlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uRG93bmxvYWRDb21wLmVtaXQoeyAnYXNzZXRJZCc6IHRoaXMuYXNzZXRJZCwgJ2NvbXBUeXBlJzogY29tcFR5cGUgfSk7XG4gIH1cblxuICBwdWJsaWMgYWxyZWFkeUluQ29sbGVjdGlvbihhc3NldDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNzZXRzQXJyLmluZGV4T2YoYXNzZXQuYXNzZXRJZCkgPiAtMTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93UHJldmlldyhwb3NpdGlvbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy53elNwZWVkdmlldy5zaG93KHBvc2l0aW9uKTtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnZG9jdW1lbnQnLCAnc2Nyb2xsJywgKCkgPT4gdGhpcy53elNwZWVkdmlldy5kZXN0cm95KCkpO1xuICB9XG5cbiAgcHVibGljIGhpZGVQcmV2aWV3KCk6IHZvaWQge1xuICAgIHRoaXMud3pTcGVlZHZpZXcuZGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZUFzc2V0KGFzc2V0OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoYXNzZXQgPT09IHRoaXMuYWN0aXZlQXNzZXQpIHJldHVybjtcbiAgICB0aGlzLmFjdGl2ZUFzc2V0ID0gYXNzZXQ7XG4gICAgaWYgKGFzc2V0LnByaWNlICYmIGFzc2V0LnByaWNlQm9va05hbWUpIHJldHVybjtcbiAgICB0aGlzLmFzc2V0U2VydmljZS5nZXRQcmljZShhc3NldC5hc3NldElkKS50YWtlKDEpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICBhc3NldC5wcmljZSA9IGRhdGEucHJpY2U7XG4gICAgICBhc3NldC5wcmljZUJvb2tOYW1lID0gZGF0YS5wcmljZUJvb2tOYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHRyYW5zbGF0aW9uUmVhZHkoZmllbGQ6IGFueSkge1xuICAgIHJldHVybiAnYXNzZXRtZXRhZGF0YS4nICsgZmllbGQucmVwbGFjZSgvXFwuL2csICdfJyk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0VHlwZShmb3JtYXQ6IGFueSk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgIGNhc2UgJ0hpZ2ggRGVmaW5pdGlvbic6XG4gICAgICAgIHJldHVybiAnaGQnO1xuICAgICAgY2FzZSAnU3RhbmRhcmQgRGVmaW5pdGlvbic6XG4gICAgICAgIHJldHVybiAnc2QnO1xuICAgICAgY2FzZSAnRGlnaXRhbCBWaWRlbyc6XG4gICAgICAgIHJldHVybiAnZHYnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdoZCc7XG4gICAgfVxuICB9XG59XG4iXX0=
