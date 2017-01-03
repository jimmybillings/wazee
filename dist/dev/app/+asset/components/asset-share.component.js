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
var asset_service_1 = require('../../shared/services/asset.service');
var wz_form_component_1 = require('../../shared/components/wz-form/wz.form.component');
var wz_toast_component_1 = require('../../shared/components/wz-toast/wz.toast.component');
var current_user_model_1 = require('../../shared/services/current-user.model');
var AssetShareComponent = (function () {
    function AssetShareComponent(currentUser, asset, changeDetector) {
        var _this = this;
        this.asset = asset;
        this.changeDetector = changeDetector;
        this.close = new core_1.EventEmitter();
        this.assetLinkIsShowing = false;
        this.assetShareLink = '';
        this.formItems = [];
        this.userSubscription = currentUser.data.subscribe(function (user) { return _this.user = user; });
    }
    AssetShareComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    AssetShareComponent.prototype.closeAssetShare = function () {
        this.close.emit();
    };
    AssetShareComponent.prototype.showShareLink = function (assetId) {
        var _this = this;
        var shareLink = {};
        var endDate = new Date();
        endDate.setDate(endDate.getDate() + 10);
        shareLink.accessEndDate = this.IsoFormatLocalDate(endDate);
        shareLink.accessStartDate = this.IsoFormatLocalDate(new Date());
        shareLink.accessInfo = assetId;
        shareLink.type = 'asset';
        this.asset.createShareLink(shareLink).take(1).subscribe(function (res) {
            _this.assetShareLink = window.location.href + ";share_key=" + res.apiKey;
            _this.changeDetector.markForCheck();
        });
        this.assetLinkIsShowing = !this.assetLinkIsShowing;
    };
    AssetShareComponent.prototype.createShareLink = function (shareLink, assetId) {
        var _this = this;
        var endDate = new Date();
        endDate.setDate(endDate.getDate() + 10);
        shareLink.accessEndDate = this.IsoFormatLocalDate(endDate);
        shareLink.accessStartDate = this.IsoFormatLocalDate(new Date());
        shareLink.accessInfo = assetId;
        shareLink.type = 'asset';
        shareLink.recipientEmails = (shareLink.recipientEmails) ? shareLink.recipientEmails.split(/\s*,\s*|\s*;\s*/) : [];
        if (shareLink.copyMe) {
            shareLink.recipientEmails.push(this.user.emailAddress);
        }
        this.asset.createShareLink(shareLink).take(1).subscribe(function (res) {
            _this.success();
            _this.wzToast.show();
        }, this.error.bind(this));
    };
    AssetShareComponent.prototype.success = function () {
        this.formItems = this.clearForm();
        this.wzForm.resetForm();
        this.changeDetector.markForCheck();
        this.closeAssetShare();
    };
    AssetShareComponent.prototype.clearForm = function () {
        return this.formItems
            .map(function (field) {
            field.value = '';
            if (field.type === 'tags')
                field.tags = [];
            return field;
        });
    };
    AssetShareComponent.prototype.error = function (error) {
        this.serverErrors = error.json();
        this.changeDetector.markForCheck();
    };
    AssetShareComponent.prototype.IsoFormatLocalDate = function (date) {
        var d = date, tzo = -d.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
            var norm = Math.abs(Math.floor(num));
            return (norm < 10 ? '0' : '') + norm;
        };
        return d.getFullYear()
            + '-' + pad(d.getMonth() + 1)
            + '-' + pad(d.getDate())
            + 'T' + pad(d.getHours())
            + ':' + pad(d.getMinutes())
            + ':' + pad(d.getSeconds())
            + dif + pad(tzo / 60)
            + ':' + pad(tzo % 60);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', current_user_model_1.CurrentUser)
    ], AssetShareComponent.prototype, "currentUser", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetShareComponent.prototype, "uiState", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetShareComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetShareComponent.prototype, "assetThumbnailUrl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetShareComponent.prototype, "assetName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetShareComponent.prototype, "assetId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AssetShareComponent.prototype, "close", void 0);
    __decorate([
        core_1.ViewChild(wz_form_component_1.WzFormComponent), 
        __metadata('design:type', wz_form_component_1.WzFormComponent)
    ], AssetShareComponent.prototype, "wzForm", void 0);
    __decorate([
        core_1.ViewChild(wz_toast_component_1.WzToastComponent), 
        __metadata('design:type', wz_toast_component_1.WzToastComponent)
    ], AssetShareComponent.prototype, "wzToast", void 0);
    AssetShareComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'asset-share',
            templateUrl: 'asset-share.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, asset_service_1.AssetService, core_1.ChangeDetectorRef])
    ], AssetShareComponent);
    return AssetShareComponent;
}());
exports.AssetShareComponent = AssetShareComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXNzZXQvY29tcG9uZW50cy9hc3NldC1zaGFyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5SCxlQUFlLENBQUMsQ0FBQTtBQUN6SSw4QkFBNkIscUNBQXFDLENBQUMsQ0FBQTtBQUVuRSxrQ0FBZ0MsbURBQW1ELENBQUMsQ0FBQTtBQUNwRixtQ0FBaUMscURBQXFELENBQUMsQ0FBQTtBQUN2RixtQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQVd2RTtJQW9CRSw2QkFDRSxXQUF3QixFQUNoQixLQUFtQixFQUNuQixjQUFpQztRQXZCN0MsaUJBNEdDO1FBdEZXLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBaEJqQyxVQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFOUIsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBRXpCLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFZOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU0seUNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLDZDQUFlLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sMkNBQWEsR0FBcEIsVUFBcUIsT0FBWTtRQUFqQyxpQkFlQztRQWJDLElBQUksU0FBUyxHQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELFNBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoRSxTQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMvQixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUMxRCxLQUFJLENBQUMsY0FBYyxHQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBYyxHQUFHLENBQUMsTUFBUSxDQUFDO1lBQ3hFLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDckQsQ0FBQztJQUVNLDZDQUFlLEdBQXRCLFVBQXVCLFNBQWMsRUFBRSxPQUFZO1FBQW5ELGlCQWVDO1FBZEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN4QyxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDaEUsU0FBUyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDL0IsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDekIsU0FBUyxDQUFDLGVBQWUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsSCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUMxRCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxxQ0FBTyxHQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sdUNBQVMsR0FBakI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7YUFDbEIsR0FBRyxDQUFDLFVBQUMsS0FBaUI7WUFDckIsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7Z0JBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLG1DQUFLLEdBQWIsVUFBYyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUdPLGdEQUFrQixHQUExQixVQUEyQixJQUFTO1FBQ2xDLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFDNUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDMUIsR0FBRyxHQUFHLFVBQVUsR0FBUTtZQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7Y0FDbEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2NBQzNCLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2NBQ3RCLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2NBQ3ZCLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2NBQ3pCLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2NBQ3pCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztjQUNuQixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBMUdEO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztrRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzswREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOztzREFBQTtJQVVUO1FBQUMsZ0JBQVMsQ0FBQyxtQ0FBZSxDQUFDOzt1REFBQTtJQUMzQjtRQUFDLGdCQUFTLENBQUMscUNBQWdCLENBQUM7O3dEQUFBO0lBekI5QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDOzsyQkFBQTtJQThHRiwwQkFBQztBQUFELENBNUdBLEFBNEdDLElBQUE7QUE1R1ksMkJBQW1CLHNCQTRHL0IsQ0FBQSIsImZpbGUiOiJhcHAvK2Fzc2V0L2NvbXBvbmVudHMvYXNzZXQtc2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hc3NldC5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9mb3Jtcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgV3pGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvd3otZm9ybS93ei5mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXelRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvd3otdG9hc3Qvd3oudG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXNzZXQtc2hhcmUnLFxuICB0ZW1wbGF0ZVVybDogJ2Fzc2V0LXNoYXJlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIEFzc2V0U2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjdXJyZW50VXNlcjogQ3VycmVudFVzZXI7XG4gIEBJbnB1dCgpIHVpU3RhdGU6IGFueTtcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpIGFzc2V0VGh1bWJuYWlsVXJsOiBhbnk7XG4gIEBJbnB1dCgpIGFzc2V0TmFtZTogYW55O1xuICBASW5wdXQoKSBhc3NldElkOiBhbnk7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgYXNzZXRMaW5rSXNTaG93aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhc3NldFNoYXJlTGluazogYW55ID0gJyc7XG4gIHB1YmxpYyBzZXJ2ZXJFcnJvcnM6IGFueTtcbiAgcHVibGljIGZvcm1JdGVtczogQXJyYXk8YW55PiA9IFtdO1xuICBwdWJsaWMgdXNlcjogVXNlcjtcbiAgcHJpdmF0ZSB1c2VyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblxuICBAVmlld0NoaWxkKFd6Rm9ybUNvbXBvbmVudCkgcHJpdmF0ZSB3ekZvcm06IFd6Rm9ybUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChXelRvYXN0Q29tcG9uZW50KSBwcml2YXRlIHd6VG9hc3Q6IFd6VG9hc3RDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLFxuICAgIHByaXZhdGUgYXNzZXQ6IEFzc2V0U2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgdGhpcy51c2VyU3Vic2NyaXB0aW9uID0gY3VycmVudFVzZXIuZGF0YS5zdWJzY3JpYmUoKHVzZXI6IFVzZXIpID0+IHRoaXMudXNlciA9IHVzZXIpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlQXNzZXRTaGFyZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93U2hhcmVMaW5rKGFzc2V0SWQ6IGFueSkge1xuICAgIC8vIHdlIG5lZWQgdG8gcGFzcyBJU08gZm9ybWF0dGVkIHRpbWUgc3RhbXBzIGZvciB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lLlxuICAgIGxldCBzaGFyZUxpbms6IGFueSA9IHt9O1xuICAgIGxldCBlbmREYXRlID0gbmV3IERhdGUoKTtcbiAgICBlbmREYXRlLnNldERhdGUoZW5kRGF0ZS5nZXREYXRlKCkgKyAxMCk7XG4gICAgc2hhcmVMaW5rLmFjY2Vzc0VuZERhdGUgPSB0aGlzLklzb0Zvcm1hdExvY2FsRGF0ZShlbmREYXRlKTtcbiAgICBzaGFyZUxpbmsuYWNjZXNzU3RhcnREYXRlID0gdGhpcy5Jc29Gb3JtYXRMb2NhbERhdGUobmV3IERhdGUoKSk7XG4gICAgc2hhcmVMaW5rLmFjY2Vzc0luZm8gPSBhc3NldElkO1xuICAgIHNoYXJlTGluay50eXBlID0gJ2Fzc2V0JztcblxuICAgIHRoaXMuYXNzZXQuY3JlYXRlU2hhcmVMaW5rKHNoYXJlTGluaykudGFrZSgxKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgdGhpcy5hc3NldFNoYXJlTGluayA9IGAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfTtzaGFyZV9rZXk9JHtyZXMuYXBpS2V5fWA7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMuYXNzZXRMaW5rSXNTaG93aW5nID0gIXRoaXMuYXNzZXRMaW5rSXNTaG93aW5nO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVNoYXJlTGluayhzaGFyZUxpbms6IGFueSwgYXNzZXRJZDogYW55KTogdm9pZCB7XG4gICAgbGV0IGVuZERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGVuZERhdGUuc2V0RGF0ZShlbmREYXRlLmdldERhdGUoKSArIDEwKTtcbiAgICBzaGFyZUxpbmsuYWNjZXNzRW5kRGF0ZSA9IHRoaXMuSXNvRm9ybWF0TG9jYWxEYXRlKGVuZERhdGUpO1xuICAgIHNoYXJlTGluay5hY2Nlc3NTdGFydERhdGUgPSB0aGlzLklzb0Zvcm1hdExvY2FsRGF0ZShuZXcgRGF0ZSgpKTtcbiAgICBzaGFyZUxpbmsuYWNjZXNzSW5mbyA9IGFzc2V0SWQ7XG4gICAgc2hhcmVMaW5rLnR5cGUgPSAnYXNzZXQnO1xuICAgIHNoYXJlTGluay5yZWNpcGllbnRFbWFpbHMgPSAoc2hhcmVMaW5rLnJlY2lwaWVudEVtYWlscykgPyBzaGFyZUxpbmsucmVjaXBpZW50RW1haWxzLnNwbGl0KC9cXHMqLFxccyp8XFxzKjtcXHMqLykgOiBbXTtcbiAgICBpZiAoc2hhcmVMaW5rLmNvcHlNZSkge1xuICAgICAgc2hhcmVMaW5rLnJlY2lwaWVudEVtYWlscy5wdXNoKHRoaXMudXNlci5lbWFpbEFkZHJlc3MpO1xuICAgIH1cbiAgICB0aGlzLmFzc2V0LmNyZWF0ZVNoYXJlTGluayhzaGFyZUxpbmspLnRha2UoMSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIHRoaXMuc3VjY2VzcygpO1xuICAgICAgdGhpcy53elRvYXN0LnNob3coKTtcbiAgICB9LCB0aGlzLmVycm9yLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWNjZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUl0ZW1zID0gdGhpcy5jbGVhckZvcm0oKTtcbiAgICB0aGlzLnd6Rm9ybS5yZXNldEZvcm0oKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuY2xvc2VBc3NldFNoYXJlKCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtSXRlbXNcbiAgICAgIC5tYXAoKGZpZWxkOiBGb3JtRmllbGRzKSA9PiB7XG4gICAgICAgIGZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgIGlmIChmaWVsZC50eXBlID09PSAndGFncycpIGZpZWxkLnRhZ3MgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGVycm9yKGVycm9yOiBhbnkpIHtcbiAgICB0aGlzLnNlcnZlckVycm9ycyA9IGVycm9yLmpzb24oKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gd2UgbmVlZCB0byBzdWJtaXQgZGF0ZS90aW1lc3RhbXBzIGluIElTTyBmb3JtYXQuIFRoaXMgZG9lcyB0aGF0LlxuICBwcml2YXRlIElzb0Zvcm1hdExvY2FsRGF0ZShkYXRlOiBhbnkpIHtcbiAgICB2YXIgZCA9IGRhdGUsXG4gICAgICB0em8gPSAtZC5nZXRUaW1lem9uZU9mZnNldCgpLFxuICAgICAgZGlmID0gdHpvID49IDAgPyAnKycgOiAnLScsXG4gICAgICBwYWQgPSBmdW5jdGlvbiAobnVtOiBhbnkpIHtcbiAgICAgICAgdmFyIG5vcm0gPSBNYXRoLmFicyhNYXRoLmZsb29yKG51bSkpO1xuICAgICAgICByZXR1cm4gKG5vcm0gPCAxMCA/ICcwJyA6ICcnKSArIG5vcm07XG4gICAgICB9O1xuICAgIHJldHVybiBkLmdldEZ1bGxZZWFyKClcbiAgICAgICsgJy0nICsgcGFkKGQuZ2V0TW9udGgoKSArIDEpXG4gICAgICArICctJyArIHBhZChkLmdldERhdGUoKSlcbiAgICAgICsgJ1QnICsgcGFkKGQuZ2V0SG91cnMoKSlcbiAgICAgICsgJzonICsgcGFkKGQuZ2V0TWludXRlcygpKVxuICAgICAgKyAnOicgKyBwYWQoZC5nZXRTZWNvbmRzKCkpXG4gICAgICArIGRpZiArIHBhZCh0em8gLyA2MClcbiAgICAgICsgJzonICsgcGFkKHR6byAlIDYwKTtcbiAgfVxufVxuIl19
