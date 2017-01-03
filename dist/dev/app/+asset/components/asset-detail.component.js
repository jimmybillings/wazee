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
var current_user_model_1 = require('../../shared/services/current-user.model');
var ui_config_1 = require('../../shared/services/ui.config');
var ui_state_1 = require('../../shared/services/ui.state');
var capabilities_service_1 = require('../../shared/services/capabilities.service');
var material_1 = require('@angular/material');
var search_context_service_1 = require('../../shared/services/search-context.service');
var AssetDetailComponent = (function () {
    function AssetDetailComponent() {
        this.onAddToCollection = new core_1.EventEmitter();
        this.onRemoveFromCollection = new core_1.EventEmitter();
        this.onDownloadComp = new core_1.EventEmitter();
        this.addToCart = new core_1.EventEmitter();
        this.getPriceAttributes = new core_1.EventEmitter();
        this.calculatePrice = new core_1.EventEmitter();
        this.calculatePriceError = new core_1.EventEmitter();
        this.subclipMarkers = {};
        this.assetsArr = [];
    }
    AssetDetailComponent.prototype.ngOnChanges = function (changes) {
        if (changes.asset)
            this.parseNewAsset(changes.asset);
        if (changes.collection) {
            this.assetsArr = changes.collection.currentValue.assets.items.map(function (x) { return x.assetId; });
        }
    };
    AssetDetailComponent.prototype.alreadyInCollection = function (assetId) {
        assetId = parseInt(assetId);
        return this.assetsArr.indexOf(assetId) > -1;
    };
    AssetDetailComponent.prototype.addToCollection = function (collection, asset) {
        asset.assetId = asset.value;
        this.onAddToCollection.emit({ 'collection': collection, 'asset': asset });
    };
    AssetDetailComponent.prototype.removeFromCollection = function (collection, asset) {
        asset.assetId = asset.value;
        this.onRemoveFromCollection.emit({ 'collection': collection, 'asset': asset });
    };
    AssetDetailComponent.prototype.downloadComp = function (assetId, compType) {
        this.onDownloadComp.emit({ 'compType': compType, 'assetId': assetId });
    };
    AssetDetailComponent.prototype.addAssetToCart = function (assetId, pricingAttributes) {
        this.addToCart.emit({ assetId: assetId, selectedTranscodeTarget: this.selectedTarget() });
    };
    AssetDetailComponent.prototype.selectTarget = function (selectedTarget) {
        this.asset.transcodeTargets = this.asset.transcodeTargets.map(function (target) {
            target.selected = (selectedTarget.name === target.name) ? true : false;
            return target;
        });
    };
    AssetDetailComponent.prototype.onSubclipMarkersChanged = function (markers) {
        console.log("New subclip markers: " + markers.in + " - " + markers.out);
    };
    AssetDetailComponent.prototype.onSubclipMarkersCleared = function () {
        console.log('Subclip markers cleared.');
    };
    AssetDetailComponent.prototype.onCalculatePrice = function (attributes) {
        this.calculatePrice.emit({ attributes: attributes, assetId: this.asset.assetId });
    };
    AssetDetailComponent.prototype.onCalculatePriceError = function () {
        this.calculatePriceError.emit();
    };
    AssetDetailComponent.prototype.getPricingAttributes = function () {
        if (this.asset.pricing.length > 0)
            return;
        this.getPriceAttributes.emit(this.asset.primary[3].value);
    };
    AssetDetailComponent.prototype.selectedTarget = function () {
        return this.asset.transcodeTargets.filter(function (target) { return target.selected; })[0].name;
    };
    AssetDetailComponent.prototype.parseNewAsset = function (asset) {
        if (Object.keys(asset.currentValue.detailTypeMap.common).length > 0) {
            var targets = this.prepareNewTargets(asset.currentValue.transcodeTargets);
            this.asset = Object.assign({}, this.asset, asset.currentValue.detailTypeMap, { transcodeTargets: targets });
            delete this.asset.detailTypeMap;
        }
    };
    AssetDetailComponent.prototype.prepareNewTargets = function (targets) {
        return targets.map(function (target, index) {
            return (index === 0) ? { name: target, selected: true } : { name: target, selected: false };
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetDetailComponent.prototype, "asset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', current_user_model_1.CurrentUser)
    ], AssetDetailComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', capabilities_service_1.Capabilities)
    ], AssetDetailComponent.prototype, "userCan", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ui_config_1.UiConfig)
    ], AssetDetailComponent.prototype, "uiConfig", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetDetailComponent.prototype, "collection", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', search_context_service_1.SearchContext)
    ], AssetDetailComponent.prototype, "searchContext", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ui_state_1.UiState)
    ], AssetDetailComponent.prototype, "uiState", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AssetDetailComponent.prototype, "onAddToCollection", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AssetDetailComponent.prototype, "onRemoveFromCollection", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AssetDetailComponent.prototype, "onDownloadComp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AssetDetailComponent.prototype, "addToCart", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AssetDetailComponent.prototype, "getPriceAttributes", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AssetDetailComponent.prototype, "calculatePrice", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AssetDetailComponent.prototype, "calculatePriceError", void 0);
    __decorate([
        core_1.ViewChild(material_1.MdMenuTrigger), 
        __metadata('design:type', material_1.MdMenuTrigger)
    ], AssetDetailComponent.prototype, "trigger", void 0);
    AssetDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'asset-detail',
            templateUrl: 'asset-detail.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], AssetDetailComponent);
    return AssetDetailComponent;
}());
exports.AssetDetailComponent = AssetDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXNzZXQvY29tcG9uZW50cy9hc3NldC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0csZUFBZSxDQUFDLENBQUE7QUFFdEgsbUNBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFDdkUsMEJBQXlCLGlDQUFpQyxDQUFDLENBQUE7QUFDM0QseUJBQXdCLGdDQUFnQyxDQUFDLENBQUE7QUFDekQscUNBQTZCLDRDQUE0QyxDQUFDLENBQUE7QUFDMUUseUJBQThCLG1CQUFtQixDQUFDLENBQUE7QUFFbEQsdUNBQThCLDhDQUE4QyxDQUFDLENBQUE7QUFTN0U7SUFBQTtRQVFXLHNCQUFpQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3ZDLDJCQUFzQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzVDLG1CQUFjLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDcEMsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQy9CLHVCQUFrQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3hDLG1CQUFjLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDcEMsd0JBQW1CLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFNUMsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBQ25DLGNBQVMsR0FBa0IsRUFBRSxDQUFDO0lBNkV2QyxDQUFDO0lBM0VBLDBDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFL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RTs7dURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7MERBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7K0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7bUVBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7d0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7Z0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MkRBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7b0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7Z0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7cUVBQUE7SUFDVDtRQUFDLGdCQUFTLENBQUMsd0JBQWEsQ0FBQzs7eURBQUE7SUF0QjFCO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQy9DLENBQUM7OzRCQUFBO0lBZ0dGLDJCQUFDO0FBQUQsQ0E5RkEsQUE4RkMsSUFBQTtBQTlGWSw0QkFBb0IsdUJBOEZoQyxDQUFBIiwiZmlsZSI6ImFwcC8rYXNzZXQvY29tcG9uZW50cy9hc3NldC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2NvbGxlY3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBVaUNvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5jb25maWcnO1xuaW1wb3J0IHsgVWlTdGF0ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91aS5zdGF0ZSc7XG5pbXBvcnQgeyBDYXBhYmlsaXRpZXMgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvY2FwYWJpbGl0aWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWRNZW51VHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFRyYW5zY29kZVRhcmdldCwgU3ViY2xpcE1hcmtlcnMgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9hc3NldC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zZWFyY2gtY29udGV4dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnYXNzZXQtZGV0YWlsJyxcblx0dGVtcGxhdGVVcmw6ICdhc3NldC1kZXRhaWwuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgQXNzZXREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBwdWJsaWMgYXNzZXQ6IGFueTtcblx0QElucHV0KCkgcHVibGljIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcjtcblx0QElucHV0KCkgcHVibGljIHVzZXJDYW46IENhcGFiaWxpdGllcztcblx0QElucHV0KCkgcHVibGljIHVpQ29uZmlnOiBVaUNvbmZpZztcblx0QElucHV0KCkgcHVibGljIGNvbGxlY3Rpb246IENvbGxlY3Rpb247XG5cdEBJbnB1dCgpIHB1YmxpYyBzZWFyY2hDb250ZXh0OiBTZWFyY2hDb250ZXh0O1xuXHRASW5wdXQoKSBwdWJsaWMgdWlTdGF0ZTogVWlTdGF0ZTtcblx0QE91dHB1dCgpIG9uQWRkVG9Db2xsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgb25SZW1vdmVGcm9tQ29sbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIG9uRG93bmxvYWRDb21wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgYWRkVG9DYXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgZ2V0UHJpY2VBdHRyaWJ1dGVzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgY2FsY3VsYXRlUHJpY2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBjYWxjdWxhdGVQcmljZUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAVmlld0NoaWxkKE1kTWVudVRyaWdnZXIpIHRyaWdnZXI6IE1kTWVudVRyaWdnZXI7XG5cdHB1YmxpYyBzdWJjbGlwTWFya2VyczogU3ViY2xpcE1hcmtlcnMgPSB7fTtcblx0cHJpdmF0ZSBhc3NldHNBcnI6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAoY2hhbmdlcy5hc3NldCkgdGhpcy5wYXJzZU5ld0Fzc2V0KGNoYW5nZXMuYXNzZXQpO1xuXHRcdGlmIChjaGFuZ2VzLmNvbGxlY3Rpb24pIHtcblx0XHRcdHRoaXMuYXNzZXRzQXJyID0gY2hhbmdlcy5jb2xsZWN0aW9uLmN1cnJlbnRWYWx1ZS5hc3NldHMuaXRlbXMubWFwKCh4OiBhbnkpID0+IHguYXNzZXRJZCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGFscmVhZHlJbkNvbGxlY3Rpb24oYXNzZXRJZDogYW55KTogYm9vbGVhbiB7XG5cdFx0YXNzZXRJZCA9IHBhcnNlSW50KGFzc2V0SWQpO1xuXHRcdHJldHVybiB0aGlzLmFzc2V0c0Fyci5pbmRleE9mKGFzc2V0SWQpID4gLTE7XG5cdH1cblxuXHRwdWJsaWMgYWRkVG9Db2xsZWN0aW9uKGNvbGxlY3Rpb246IENvbGxlY3Rpb24sIGFzc2V0OiBhbnkpOiB2b2lkIHtcblx0XHRhc3NldC5hc3NldElkID0gYXNzZXQudmFsdWU7XG5cdFx0dGhpcy5vbkFkZFRvQ29sbGVjdGlvbi5lbWl0KHsgJ2NvbGxlY3Rpb24nOiBjb2xsZWN0aW9uLCAnYXNzZXQnOiBhc3NldCB9KTtcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVGcm9tQ29sbGVjdGlvbihjb2xsZWN0aW9uOiBDb2xsZWN0aW9uLCBhc3NldDogYW55KTogdm9pZCB7XG5cdFx0YXNzZXQuYXNzZXRJZCA9IGFzc2V0LnZhbHVlO1xuXHRcdHRoaXMub25SZW1vdmVGcm9tQ29sbGVjdGlvbi5lbWl0KHsgJ2NvbGxlY3Rpb24nOiBjb2xsZWN0aW9uLCAnYXNzZXQnOiBhc3NldCB9KTtcblx0fVxuXG5cdHB1YmxpYyBkb3dubG9hZENvbXAoYXNzZXRJZDogYW55LCBjb21wVHlwZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkRvd25sb2FkQ29tcC5lbWl0KHsgJ2NvbXBUeXBlJzogY29tcFR5cGUsICdhc3NldElkJzogYXNzZXRJZCB9KTtcblx0fVxuXG5cdHB1YmxpYyBhZGRBc3NldFRvQ2FydChhc3NldElkOiBhbnksIHByaWNpbmdBdHRyaWJ1dGVzPzogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5hZGRUb0NhcnQuZW1pdCh7IGFzc2V0SWQ6IGFzc2V0SWQsIHNlbGVjdGVkVHJhbnNjb2RlVGFyZ2V0OiB0aGlzLnNlbGVjdGVkVGFyZ2V0KCkgfSk7XG5cdH1cblxuXHRwdWJsaWMgc2VsZWN0VGFyZ2V0KHNlbGVjdGVkVGFyZ2V0OiBUcmFuc2NvZGVUYXJnZXQpIHtcblx0XHR0aGlzLmFzc2V0LnRyYW5zY29kZVRhcmdldHMgPSB0aGlzLmFzc2V0LnRyYW5zY29kZVRhcmdldHMubWFwKCh0YXJnZXQ6IFRyYW5zY29kZVRhcmdldCkgPT4ge1xuXHRcdFx0dGFyZ2V0LnNlbGVjdGVkID0gKHNlbGVjdGVkVGFyZ2V0Lm5hbWUgPT09IHRhcmdldC5uYW1lKSA/IHRydWUgOiBmYWxzZTtcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgb25TdWJjbGlwTWFya2Vyc0NoYW5nZWQobWFya2VyczogU3ViY2xpcE1hcmtlcnMpIHtcblx0XHRjb25zb2xlLmxvZyhgTmV3IHN1YmNsaXAgbWFya2VyczogJHttYXJrZXJzLmlufSAtICR7bWFya2Vycy5vdXR9YCk7XG5cdH1cblxuXHRwdWJsaWMgb25TdWJjbGlwTWFya2Vyc0NsZWFyZWQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ1N1YmNsaXAgbWFya2VycyBjbGVhcmVkLicpO1xuXHR9XG5cblx0cHVibGljIG9uQ2FsY3VsYXRlUHJpY2UoYXR0cmlidXRlczogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5jYWxjdWxhdGVQcmljZS5lbWl0KHsgYXR0cmlidXRlczogYXR0cmlidXRlcywgYXNzZXRJZDogdGhpcy5hc3NldC5hc3NldElkIH0pO1xuXHR9XG5cblx0cHVibGljIG9uQ2FsY3VsYXRlUHJpY2VFcnJvcigpOiB2b2lkIHtcblx0XHR0aGlzLmNhbGN1bGF0ZVByaWNlRXJyb3IuZW1pdCgpO1xuXHR9XG5cblx0cHVibGljIGdldFByaWNpbmdBdHRyaWJ1dGVzKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmFzc2V0LnByaWNpbmcubGVuZ3RoID4gMCkgcmV0dXJuO1xuXHRcdHRoaXMuZ2V0UHJpY2VBdHRyaWJ1dGVzLmVtaXQodGhpcy5hc3NldC5wcmltYXJ5WzNdLnZhbHVlKTtcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0ZWRUYXJnZXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXNzZXQudHJhbnNjb2RlVGFyZ2V0cy5maWx0ZXIoKHRhcmdldDogVHJhbnNjb2RlVGFyZ2V0KSA9PiB0YXJnZXQuc2VsZWN0ZWQpWzBdLm5hbWU7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlTmV3QXNzZXQoYXNzZXQ6IGFueSkge1xuXHRcdGlmIChPYmplY3Qua2V5cyhhc3NldC5jdXJyZW50VmFsdWUuZGV0YWlsVHlwZU1hcC5jb21tb24pLmxlbmd0aCA+IDApIHtcblx0XHRcdGxldCB0YXJnZXRzID0gdGhpcy5wcmVwYXJlTmV3VGFyZ2V0cyhhc3NldC5jdXJyZW50VmFsdWUudHJhbnNjb2RlVGFyZ2V0cyk7XG5cdFx0XHR0aGlzLmFzc2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hc3NldCwgYXNzZXQuY3VycmVudFZhbHVlLmRldGFpbFR5cGVNYXAsIHsgdHJhbnNjb2RlVGFyZ2V0czogdGFyZ2V0cyB9KTtcblx0XHRcdGRlbGV0ZSB0aGlzLmFzc2V0LmRldGFpbFR5cGVNYXA7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBwcmVwYXJlTmV3VGFyZ2V0cyh0YXJnZXRzOiBUcmFuc2NvZGVUYXJnZXRbXSkge1xuXHRcdHJldHVybiB0YXJnZXRzLm1hcCgodGFyZ2V0OiBhbnksIGluZGV4OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiAoaW5kZXggPT09IDApID8geyBuYW1lOiB0YXJnZXQsIHNlbGVjdGVkOiB0cnVlIH0gOiB7IG5hbWU6IHRhcmdldCwgc2VsZWN0ZWQ6IGZhbHNlIH07XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
