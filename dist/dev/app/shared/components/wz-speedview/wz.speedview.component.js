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
var material_1 = require('@angular/material');
var WzSpeedviewPortalDirective = (function (_super) {
    __extends(WzSpeedviewPortalDirective, _super);
    function WzSpeedviewPortalDirective(templateRef, viewContainerRef) {
        _super.call(this, templateRef, viewContainerRef);
    }
    WzSpeedviewPortalDirective = __decorate([
        core_1.Directive({ selector: '[wzSpeedviewPortal]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], WzSpeedviewPortalDirective);
    return WzSpeedviewPortalDirective;
}(material_1.TemplatePortalDirective));
exports.WzSpeedviewPortalDirective = WzSpeedviewPortalDirective;
var WzSpeedviewComponent = (function () {
    function WzSpeedviewComponent(overlay, renderer) {
        this.overlay = overlay;
        this.renderer = renderer;
        this.config = new material_1.OverlayState();
        this.overlayRef = null;
    }
    WzSpeedviewComponent.prototype.ngOnDestroy = function () {
        return this.destroy();
    };
    WzSpeedviewComponent.prototype.show = function (coordinates) {
        var _this = this;
        this.positionStrategy = coordinates;
        return this.destroy()
            .then(function () { return _this.overlay.create(_this.config); })
            .then(function (ref) {
            _this.overlayRef = ref;
            return ref.attach(_this.portal);
        })
            .then(function () {
            return _this;
        });
    };
    WzSpeedviewComponent.prototype.destroy = function () {
        var _this = this;
        if (!this.overlayRef) {
            return Promise.resolve(this);
        }
        return Promise.resolve()
            .then(function () { return _this.overlayRef.detach(); })
            .then(function () {
            _this.overlayRef.dispose();
            _this.overlayRef = null;
            return _this;
        });
    };
    WzSpeedviewComponent.prototype.translationReady = function (field) {
        return 'assetmetadata.' + field.replace(/\./g, '_');
    };
    Object.defineProperty(WzSpeedviewComponent.prototype, "positionStrategy", {
        set: function (coordinates) {
            this.config.positionStrategy = this.overlay.position()
                .global()
                .top(coordinates.y + "px")
                .left(coordinates.x + "px");
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', material_1.OverlayState)
    ], WzSpeedviewComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzSpeedviewComponent.prototype, "activeAsset", void 0);
    __decorate([
        core_1.ViewChild(WzSpeedviewPortalDirective), 
        __metadata('design:type', WzSpeedviewPortalDirective)
    ], WzSpeedviewComponent.prototype, "portal", void 0);
    WzSpeedviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'wz-speedview',
            templateUrl: 'wz.speedview.html'
        }), 
        __metadata('design:paramtypes', [material_1.Overlay, core_1.Renderer])
    ], WzSpeedviewComponent);
    return WzSpeedviewComponent;
}());
exports.WzSpeedviewComponent = WzSpeedviewComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1zcGVlZHZpZXcvd3ouc3BlZWR2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFVTyxlQUFlLENBQUMsQ0FBQTtBQUN2Qix5QkFBMkUsbUJBQW1CLENBQUMsQ0FBQTtBQUcvRjtJQUFnRCw4Q0FBdUI7SUFDckUsb0NBQVksV0FBNkIsRUFBRSxnQkFBa0M7UUFDM0Usa0JBQU0sV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUpIO1FBQUMsZ0JBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxDQUFDOztrQ0FBQTtJQUsvQyxpQ0FBQztBQUFELENBSkEsQUFJQyxDQUorQyxrQ0FBdUIsR0FJdEU7QUFKWSxrQ0FBMEIsNkJBSXRDLENBQUE7QUFRRDtJQVNFLDhCQUFvQixPQUFnQixFQUFVLFFBQWtCO1FBQTVDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTHZELFdBQU0sR0FBaUIsSUFBSSx1QkFBWSxFQUFFLENBQUM7UUFHM0MsZUFBVSxHQUFlLElBQUksQ0FBQztJQUU4QixDQUFDO0lBRXJFLDBDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHTSxtQ0FBSSxHQUFYLFVBQVksV0FBdUI7UUFBbkMsaUJBV0M7UUFWQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2FBQ2xCLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO2FBQzVDLElBQUksQ0FBQyxVQUFDLEdBQWU7WUFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxzQ0FBTyxHQUFkO1FBQUEsaUJBV0M7UUFWQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTthQUNyQixJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQXhCLENBQXdCLENBQUM7YUFDcEMsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixNQUFNLENBQUMsS0FBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sK0NBQWdCLEdBQXZCLFVBQXdCLEtBQVU7UUFDaEMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxzQkFBWSxrREFBZ0I7YUFBNUIsVUFBNkIsV0FBdUI7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtpQkFDbkQsTUFBTSxFQUFFO2lCQUNSLEdBQUcsQ0FBSSxXQUFXLENBQUMsQ0FBQyxPQUFJLENBQUM7aUJBQ3pCLElBQUksQ0FBSSxXQUFXLENBQUMsQ0FBQyxPQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQS9DRDtRQUFDLFlBQUssRUFBRTs7d0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFDUjtRQUFDLGdCQUFTLENBQUMsMEJBQTBCLENBQUM7O3dEQUFBO0lBWnhDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsbUJBQW1CO1NBQ2pDLENBQUM7OzRCQUFBO0lBcURGLDJCQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQXBEWSw0QkFBb0IsdUJBb0RoQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1zcGVlZHZpZXcvd3ouc3BlZWR2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBEaXJlY3RpdmUsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgUmVuZGVyZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSwgT3ZlcmxheVN0YXRlLCBPdmVybGF5UmVmLCBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbd3pTcGVlZHZpZXdQb3J0YWxdJyB9KVxuZXhwb3J0IGNsYXNzIFd6U3BlZWR2aWV3UG9ydGFsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICd3ei1zcGVlZHZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJ3d6LnNwZWVkdmlldy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBXelNwZWVkdmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBvZmZzZXRYOiBudW1iZXI7XG4gIHB1YmxpYyBvZmZzZXRZOiBudW1iZXI7XG4gIHB1YmxpYyB2aWV3UmVmOiBhbnk7XG4gIEBJbnB1dCgpIGNvbmZpZzogT3ZlcmxheVN0YXRlID0gbmV3IE92ZXJsYXlTdGF0ZSgpO1xuICBASW5wdXQoKSBhY3RpdmVBc3NldDogYW55O1xuICBAVmlld0NoaWxkKFd6U3BlZWR2aWV3UG9ydGFsRGlyZWN0aXZlKSBwcml2YXRlIHBvcnRhbDogV3pTcGVlZHZpZXdQb3J0YWxEaXJlY3RpdmU7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikgeyB9XG5cbiAgbmdPbkRlc3Ryb3koKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuXG4gIHB1YmxpYyBzaG93KGNvb3JkaW5hdGVzOiBNb3VzZUV2ZW50KTogUHJvbWlzZTxXelNwZWVkdmlld0NvbXBvbmVudD4ge1xuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IGNvb3JkaW5hdGVzO1xuICAgIHJldHVybiB0aGlzLmRlc3Ryb3koKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmNvbmZpZykpXG4gICAgICAudGhlbigocmVmOiBPdmVybGF5UmVmKSA9PiB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHJlZjtcbiAgICAgICAgcmV0dXJuIHJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmU8YW55Pih0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCkpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdHJhbnNsYXRpb25SZWFkeShmaWVsZDogYW55KSB7XG4gICAgcmV0dXJuICdhc3NldG1ldGFkYXRhLicgKyBmaWVsZC5yZXBsYWNlKC9cXC4vZywgJ18nKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IHBvc2l0aW9uU3RyYXRlZ3koY29vcmRpbmF0ZXM6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgIC5nbG9iYWwoKVxuICAgICAgLnRvcChgJHtjb29yZGluYXRlcy55fXB4YClcbiAgICAgIC5sZWZ0KGAke2Nvb3JkaW5hdGVzLnh9cHhgKTtcbiAgfVxufSAiXX0=
