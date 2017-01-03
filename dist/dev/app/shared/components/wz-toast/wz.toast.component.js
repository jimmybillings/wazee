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
var material_2 = require('@angular/material');
var material_3 = require('@angular/material');
var WzToastPortalDirective = (function (_super) {
    __extends(WzToastPortalDirective, _super);
    function WzToastPortalDirective(templateRef, viewContainerRef) {
        _super.call(this, templateRef, viewContainerRef);
    }
    WzToastPortalDirective = __decorate([
        core_1.Directive({ selector: '[wzToastPortalDirective]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], WzToastPortalDirective);
    return WzToastPortalDirective;
}(material_3.TemplatePortalDirective));
exports.WzToastPortalDirective = WzToastPortalDirective;
var WzToastComponent = (function () {
    function WzToastComponent(overlay, renderer) {
        this.overlay = overlay;
        this.renderer = renderer;
        this.config = new material_2.OverlayState();
        this.active = false;
        this.overlayRef = null;
    }
    WzToastComponent.prototype.show = function () {
        var _this = this;
        return this.close()
            .then(function () { return _this.overlay.create(_this.config); })
            .then(function (ref) {
            _this.overlayRef = ref;
            return ref.attach(_this.portal);
        })
            .then(function () {
            _this.closeAction = setTimeout(function () { return _this.close(); }, 2750);
            _this.active = true;
            return _this;
        });
    };
    WzToastComponent.prototype.close = function () {
        var _this = this;
        clearTimeout(this.closeAction);
        if (!this.overlayRef) {
            return Promise.resolve(this);
        }
        else {
            return Promise.resolve(function () {
                _this.overlayRef.detach();
            }).then(function () {
                _this.overlayRef.dispose();
                _this.overlayRef = null;
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzToastComponent.prototype, "config", void 0);
    __decorate([
        core_1.ViewChild(WzToastPortalDirective), 
        __metadata('design:type', WzToastPortalDirective)
    ], WzToastComponent.prototype, "portal", void 0);
    WzToastComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-toast',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n  <template  wzToastPortalDirective>\n    <ng-content></ng-content>\n  </template>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [material_1.Overlay, core_1.Renderer])
    ], WzToastComponent);
    return WzToastComponent;
}());
exports.WzToastComponent = WzToastComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei10b2FzdC93ei50b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTRJLGVBQWUsQ0FBQyxDQUFBO0FBQzVKLHlCQUFzQixtQkFBbUIsQ0FBQyxDQUFBO0FBQzFDLHlCQUEyQixtQkFBbUIsQ0FBQyxDQUFBO0FBRS9DLHlCQUFzQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRzFEO0lBQTRDLDBDQUF1QjtJQUNqRSxnQ0FBWSxXQUE2QixFQUFFLGdCQUFrQztRQUMzRSxrQkFBTSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSkg7UUFBQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFLENBQUM7OzhCQUFBO0lBS3BELDZCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSjJDLGtDQUF1QixHQUlsRTtBQUpZLDhCQUFzQix5QkFJbEMsQ0FBQTtBQWFEO0lBUUUsMEJBQW9CLE9BQWdCLEVBQVUsUUFBa0I7UUFBNUMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFQdkQsV0FBTSxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO1FBRTlCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHdkIsZUFBVSxHQUFlLElBQUksQ0FBQztJQUU4QixDQUFDO0lBRTlELCtCQUFJLEdBQVg7UUFBQSxpQkFZQztRQVhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO2FBQzVDLElBQUksQ0FBQyxVQUFDLEdBQWU7WUFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxLQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxnQ0FBSyxHQUFaO1FBQUEsaUJBWUM7UUFYQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNOLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFuQ0Q7UUFBQyxZQUFLLEVBQUU7O29EQUFBO0lBQ1I7UUFBQyxnQkFBUyxDQUFDLHNCQUFzQixDQUFDOztvREFBQTtJQWJwQztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsUUFBUSxFQUFFLHNGQUdFO1lBQ1osZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzs7d0JBQUE7SUF3Q0YsdUJBQUM7QUFBRCxDQXRDQSxBQXNDQyxJQUFBO0FBdENZLHdCQUFnQixtQkFzQzVCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3d6LXRvYXN0L3d6LnRvYXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24sIFJlbmRlcmVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPdmVybGF5fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge092ZXJsYXlTdGF0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtPdmVybGF5UmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge1RlbXBsYXRlUG9ydGFsRGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t3elRvYXN0UG9ydGFsRGlyZWN0aXZlXScgfSlcbmV4cG9ydCBjbGFzcyBXelRvYXN0UG9ydGFsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd3ei10b2FzdCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gIDx0ZW1wbGF0ZSAgd3pUb2FzdFBvcnRhbERpcmVjdGl2ZT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvdGVtcGxhdGU+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuXG5leHBvcnQgY2xhc3MgV3pUb2FzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbmZpZyA9IG5ldyBPdmVybGF5U3RhdGUoKTtcbiAgQFZpZXdDaGlsZChXelRvYXN0UG9ydGFsRGlyZWN0aXZlKSBwdWJsaWMgcG9ydGFsOiBXelRvYXN0UG9ydGFsRGlyZWN0aXZlO1xuICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB2aWV3UmVmOiBhbnk7XG4gIHB1YmxpYyBjbG9zZUFjdGlvbjogYW55O1xuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHsgfVxuXG4gIHB1YmxpYyBzaG93KCk6IFByb21pc2U8V3pUb2FzdENvbXBvbmVudD4ge1xuICAgIHJldHVybiB0aGlzLmNsb3NlKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5jb25maWcpKVxuICAgICAgLnRoZW4oKHJlZjogT3ZlcmxheVJlZikgPT4ge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSByZWY7XG4gICAgICAgIHJldHVybiByZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2VBY3Rpb24gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xvc2UoKSwgMjc1MCk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQWN0aW9uKTtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
