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
var WzDropdownPortalDirective = (function (_super) {
    __extends(WzDropdownPortalDirective, _super);
    function WzDropdownPortalDirective(templateRef, viewContainerRef) {
        _super.call(this, templateRef, viewContainerRef);
    }
    WzDropdownPortalDirective = __decorate([
        core_1.Directive({ selector: '[wzDropdownPortalDirective]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], WzDropdownPortalDirective);
    return WzDropdownPortalDirective;
}(material_3.TemplatePortalDirective));
exports.WzDropdownPortalDirective = WzDropdownPortalDirective;
var WzDropdownComponent = (function () {
    function WzDropdownComponent(overlay, renderer, elementRef) {
        this.overlay = overlay;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.config = new material_2.OverlayState();
        this.active = false;
        this.overlayRef = null;
    }
    WzDropdownComponent.prototype.show = function (event) {
        var _this = this;
        this.positionElement(event);
        return this.close()
            .then(function () { return _this.overlay.create(_this.config); })
            .then(function (ref) {
            _this.overlayRef = ref;
            return ref.attach(_this.portal);
        })
            .then(function () {
            setTimeout(function () { return _this.closeListener(); }, 200);
            _this.active = true;
            return _this;
        });
    };
    WzDropdownComponent.prototype.close = function () {
        var _this = this;
        if (!this.overlayRef) {
            return Promise.resolve(this);
        }
        else {
            return Promise.resolve(function () {
                _this.overlayRef.detach();
            }).then(function () {
                _this.overlayRef.dispose();
                _this.overlayRef = null;
                _this.viewRef();
            });
        }
    };
    WzDropdownComponent.prototype.positionElement = function (event) {
        var offset = 30;
        var layoutBreakpointXs = event.view.screen.width < 600;
        if (layoutBreakpointXs) {
            this.config.positionStrategy =
                this.overlay.position().global().right('0').top('0');
        }
        else {
            this.config.positionStrategy =
                this.overlay.position().global().right(window.outerWidth - event.clientX - offset + 'px').top(event.clientY - offset + 'px');
        }
    };
    WzDropdownComponent.prototype.closeListener = function () {
        var _this = this;
        this.viewRef = this.renderer.listen(this.elementRef.nativeElement.parentElement.parentElement.parentElement.parentElement, 'click', function () { return _this.close(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzDropdownComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WzDropdownComponent.prototype, "message", void 0);
    __decorate([
        core_1.ViewChild(WzDropdownPortalDirective), 
        __metadata('design:type', WzDropdownPortalDirective)
    ], WzDropdownComponent.prototype, "portal", void 0);
    WzDropdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-dropdown',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n  <template wzDropdownPortalDirective>\n    <ng-content></ng-content>\n  </template>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [material_1.Overlay, core_1.Renderer, core_1.ElementRef])
    ], WzDropdownComponent);
    return WzDropdownComponent;
}());
exports.WzDropdownComponent = WzDropdownComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1kcm9wZG93bi93ei5kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXdKLGVBQWUsQ0FBQyxDQUFBO0FBQ3hLLHlCQUF1QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzNDLHlCQUE0QixtQkFBbUIsQ0FBQyxDQUFBO0FBRWhELHlCQUF1QyxtQkFBbUIsQ0FBQyxDQUFBO0FBRzNEO0lBQStDLDZDQUF1QjtJQUNwRSxtQ0FBWSxXQUE2QixFQUFFLGdCQUFrQztRQUMzRSxrQkFBTSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSkg7UUFBQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFLENBQUM7O2lDQUFBO0lBS3ZELGdDQUFDO0FBQUQsQ0FKQSxBQUlDLENBSjhDLGtDQUF1QixHQUlyRTtBQUpZLGlDQUF5Qiw0QkFJckMsQ0FBQTtBQWFEO0lBUUUsNkJBQW9CLE9BQWdCLEVBQVUsUUFBa0IsRUFBVSxVQUFzQjtRQUE1RSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFQdkYsV0FBTSxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO1FBRzlCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFdkIsZUFBVSxHQUFlLElBQUksQ0FBQztJQUU4RCxDQUFDO0lBRTlGLGtDQUFJLEdBQVgsVUFBWSxLQUFVO1FBQXRCLGlCQWFDO1FBWkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTthQUNoQixJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQzth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Q0FBQyxNQUFNO1NBQ2hELENBQUM7OzJCQUFBO0lBd0RGLDBCQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQTtBQXREWSwyQkFBbUIsc0JBc0QvQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1kcm9wZG93bi93ei5kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBSZW5kZXJlciwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXl9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE92ZXJsYXlTdGF0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3d6RHJvcGRvd25Qb3J0YWxEaXJlY3RpdmVdJyB9KVxuZXhwb3J0IGNsYXNzIFd6RHJvcGRvd25Qb3J0YWxEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3d6LWRyb3Bkb3duJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgPHRlbXBsYXRlIHd6RHJvcGRvd25Qb3J0YWxEaXJlY3RpdmU+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3RlbXBsYXRlPmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcblxuZXhwb3J0IGNsYXNzIFd6RHJvcGRvd25Db21wb25lbnQge1xuICBASW5wdXQoKSBjb25maWcgPSBuZXcgT3ZlcmxheVN0YXRlKCk7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcbiAgQFZpZXdDaGlsZChXekRyb3Bkb3duUG9ydGFsRGlyZWN0aXZlKSBwdWJsaWMgcG9ydGFsOiBXekRyb3Bkb3duUG9ydGFsRGlyZWN0aXZlO1xuICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB2aWV3UmVmOiBhbnk7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICBwdWJsaWMgc2hvdyhldmVudDogYW55KTogUHJvbWlzZTxXekRyb3Bkb3duQ29tcG9uZW50PiB7XG4gICAgdGhpcy5wb3NpdGlvbkVsZW1lbnQoZXZlbnQpO1xuICAgIHJldHVybiB0aGlzLmNsb3NlKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5jb25maWcpKVxuICAgICAgLnRoZW4oKHJlZjogT3ZlcmxheVJlZikgPT4ge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSByZWY7XG4gICAgICAgIHJldHVybiByZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbG9zZUxpc3RlbmVyKCksIDIwMCk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCgpID0+IHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgICAgIHRoaXMudmlld1JlZigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwb3NpdGlvbkVsZW1lbnQoZXZlbnQ6IGFueSkge1xuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDMwO1xuICAgIGxldCBsYXlvdXRCcmVha3BvaW50WHM6IGJvb2xlYW4gPSBldmVudC52aWV3LnNjcmVlbi53aWR0aCA8IDYwMDtcbiAgICBpZiAobGF5b3V0QnJlYWtwb2ludFhzKSB7XG4gICAgICB0aGlzLmNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID1cbiAgICAgICAgdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkucmlnaHQoJzAnKS50b3AoJzAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcucG9zaXRpb25TdHJhdGVneSA9XG4gICAgICAgIHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLnJpZ2h0KHdpbmRvdy5vdXRlcldpZHRoIC0gZXZlbnQuY2xpZW50WCAtIG9mZnNldCArICdweCcpLnRvcChldmVudC5jbGllbnRZIC0gb2Zmc2V0ICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZUxpc3RlbmVyKCkge1xuICAgIHRoaXMudmlld1JlZiA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsICdjbGljaycsICgpID0+IHRoaXMuY2xvc2UoKSk7XG4gIH1cbn1cbiJdfQ==
