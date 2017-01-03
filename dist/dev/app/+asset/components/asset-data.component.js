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
var AssetDataComponent = (function () {
    function AssetDataComponent() {
    }
    AssetDataComponent.prototype.ngOnChanges = function (changes) {
        if (changes.asset) {
            if (Object.keys(changes.asset.currentValue.detailTypeMap.common).length > 0) {
                this.asset = changes.asset.currentValue.detailTypeMap;
                this.secondaryMdata = this.asset.secondary[0];
                this.secondaryKeys = Object.keys(this.secondaryMdata);
            }
        }
    };
    AssetDataComponent.prototype.getMetaField = function (field) {
        var meta = this.asset.clipData.filter(function (item) { return item.name === field; })[0];
        if (meta)
            return meta.value;
    };
    AssetDataComponent.prototype.translationReady = function (field) {
        return 'assetmetadata.' + field.replace(/\./g, '_');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetDataComponent.prototype, "asset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AssetDataComponent.prototype, "currentUser", void 0);
    AssetDataComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'asset-data',
            templateUrl: 'asset-data.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AssetDataComponent);
    return AssetDataComponent;
}());
exports.AssetDataComponent = AssetDataComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXNzZXQvY29tcG9uZW50cy9hc3NldC1kYXRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBUzVEO0lBQUE7SUEwQkEsQ0FBQztJQXBCQyx3Q0FBVyxHQUFYLFVBQVksT0FBWTtRQUN0QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7Z0JBR3RELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU0seUNBQVksR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSw2Q0FBZ0IsR0FBdkIsVUFBd0IsS0FBVTtRQUNoQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQXRCRDtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7MkRBQUE7SUFYVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLGlCQUFpQjtTQUUvQixDQUFDOzswQkFBQTtJQTRCRix5QkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksMEJBQWtCLHFCQTBCOUIsQ0FBQSIsImZpbGUiOiJhcHAvK2Fzc2V0L2NvbXBvbmVudHMvYXNzZXQtZGF0YS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXNzZXQtZGF0YScsXG4gIHRlbXBsYXRlVXJsOiAnYXNzZXQtZGF0YS5odG1sJyxcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBBc3NldERhdGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwdWJsaWMgc2Vjb25kYXJ5S2V5czogQXJyYXk8c3RyaW5nPjtcbiAgcHVibGljIHNlY29uZGFyeU1kYXRhOiBPYmplY3Q7XG4gIEBJbnB1dCgpIHB1YmxpYyBhc3NldDogYW55O1xuICBASW5wdXQoKSBjdXJyZW50VXNlcjogYW55O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmFzc2V0KSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoY2hhbmdlcy5hc3NldC5jdXJyZW50VmFsdWUuZGV0YWlsVHlwZU1hcC5jb21tb24pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5hc3NldCA9IGNoYW5nZXMuYXNzZXQuY3VycmVudFZhbHVlLmRldGFpbFR5cGVNYXA7XG4gICAgICAgIC8vIHRoaXMuYXNzZXREZXRhaWwuY2xpcFVybCA9IGNoYW5nZXMuYXNzZXREZXRhaWwuY3VycmVudFZhbHVlLmNsaXBVcmw7XG4gICAgICAgIC8vIHRoaXMuYXNzZXREZXRhaWwuY2xpcFRodW1ibmFpbFVybCA9IGNoYW5nZXMuYXNzZXREZXRhaWwuY3VycmVudFZhbHVlLmNsaXBUaHVtYm5haWxVcmw7XG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5TWRhdGEgPSB0aGlzLmFzc2V0LnNlY29uZGFyeVswXTtcbiAgICAgICAgdGhpcy5zZWNvbmRhcnlLZXlzID0gT2JqZWN0LmtleXModGhpcy5zZWNvbmRhcnlNZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldE1ldGFGaWVsZChmaWVsZDogYW55KSB7XG4gICAgbGV0IG1ldGEgPSB0aGlzLmFzc2V0LmNsaXBEYXRhLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLm5hbWUgPT09IGZpZWxkKVswXTtcbiAgICBpZiAobWV0YSkgcmV0dXJuIG1ldGEudmFsdWU7XG4gIH1cblxuICBwdWJsaWMgdHJhbnNsYXRpb25SZWFkeShmaWVsZDogYW55KSB7XG4gICAgcmV0dXJuICdhc3NldG1ldGFkYXRhLicgKyBmaWVsZC5yZXBsYWNlKC9cXC4vZywgJ18nKTtcbiAgfVxufVxuXG4iXX0=
