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
var core_2 = require('@angular/core');
var material_3 = require('@angular/material');
var WzDialogPortalDirective = (function (_super) {
    __extends(WzDialogPortalDirective, _super);
    function WzDialogPortalDirective(templateRef, viewContainerRef) {
        _super.call(this, templateRef, viewContainerRef);
    }
    WzDialogPortalDirective = __decorate([
        core_2.Directive({ selector: '[wzDialogPortal]' }), 
        __metadata('design:paramtypes', [core_2.TemplateRef, core_2.ViewContainerRef])
    ], WzDialogPortalDirective);
    return WzDialogPortalDirective;
}(material_3.TemplatePortalDirective));
exports.WzDialogPortalDirective = WzDialogPortalDirective;
var WzDialogComponent = (function () {
    function WzDialogComponent(overlay, renderer) {
        this.overlay = overlay;
        this.renderer = renderer;
        this.config = new material_2.OverlayState();
        this.clickCatcher = true;
        this.onClose = new core_1.EventEmitter();
        this.animationState = 'hidden';
        this.overlayRef = null;
        this.config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top('12%');
    }
    WzDialogComponent.prototype.ngOnDestroy = function () {
        return this.close();
    };
    WzDialogComponent.prototype.show = function () {
        var _this = this;
        this.animationState = 'in';
        return this.close()
            .then(function () { return _this.overlay.create(_this.config); })
            .then(function (ref) {
            _this.overlayRef = ref;
            return ref.attach(_this.portal);
        })
            .then(function () {
            if (_this.clickCatcher)
                setTimeout(function () { return _this.closeListener(); }, 500);
            _this.renderer.setElementClass(document.querySelector('div.md-overlay-container'), 'active', true);
            return _this;
        });
    };
    WzDialogComponent.prototype.close = function () {
        var _this = this;
        if (!this.overlayRef) {
            return Promise.resolve(this);
        }
        return Promise.resolve()
            .then(function () { return _this.overlayRef.detach(); })
            .then(function () {
            _this.overlayRef.dispose();
            _this.overlayRef = null;
            _this.renderer.setElementClass(document.querySelector('div.md-overlay-container'), 'active', false);
            if (_this.clickCatcher)
                _this.viewRef();
            _this.onClose.emit();
            return _this;
        });
    };
    WzDialogComponent.prototype.closeListener = function () {
        var _this = this;
        this.viewRef = this.renderer.listen(document.querySelector('div.wz-dialog-click-catcher'), 'click', function () { return _this.close(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzDialogComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], WzDialogComponent.prototype, "clickCatcher", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WzDialogComponent.prototype, "onClose", void 0);
    __decorate([
        core_1.ViewChild(WzDialogPortalDirective), 
        __metadata('design:type', WzDialogPortalDirective)
    ], WzDialogComponent.prototype, "portal", void 0);
    WzDialogComponent = __decorate([
        core_1.Component({
            selector: 'wz-dialog',
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                core_1.trigger('slideInOut', [
                    core_1.state('shown', core_1.style({ marginTop: '0' })),
                    core_1.state('void, hidden', core_1.style({ marginTop: '-260%' })),
                    core_1.transition('void => *, hidden => shown', [
                        core_1.animate('400ms 10ms ease-in-out', core_1.keyframes([
                            core_1.style({ marginTop: '-260%', offset: 0 }),
                            core_1.style({ marginTop: '0', offset: 1.0 })
                        ]))
                    ]),
                    core_1.transition('shown => void, * => void, shown => hidden', [
                        core_1.animate('400ms 10ms ease-in-out', core_1.keyframes([
                            core_1.style({ marginTop: '0', offset: 0 }),
                            core_1.style({ marginTop: '-260%', offset: 1.0 })
                        ]))
                    ])
                ])
            ],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <template wzDialogPortal>\n      <div [@slideInOut]=\"animationState\" class=\"wz-dialog\">\n        <ng-content></ng-content>\n      </div>\n      <div class=\"wz-dialog-click-catcher\"></div>\n    </template>\n    "
        }), 
        __metadata('design:paramtypes', [material_1.Overlay, core_1.Renderer])
    ], WzDialogComponent);
    return WzDialogComponent;
}());
exports.WzDialogComponent = WzDialogComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1kaWFsb2cvd3ouZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFlcUIsZUFBZSxDQUFDLENBQUE7QUFDckMseUJBQXNCLG1CQUFtQixDQUFDLENBQUE7QUFDMUMseUJBQTJCLG1CQUFtQixDQUFDLENBQUE7QUFFL0MscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLHlCQUFzQyxtQkFBbUIsQ0FBQyxDQUFBO0FBSzFEO0lBQTZDLDJDQUF1QjtJQUNsRSxpQ0FBWSxXQUE2QixFQUFFLGdCQUFrQztRQUMzRSxrQkFBTSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBSkg7UUFBQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLENBQUM7OytCQUFBO0lBSzVDLDhCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSjRDLGtDQUF1QixHQUluRTtBQUpZLCtCQUF1QiwwQkFJbkMsQ0FBQTtBQW9DRDtJQVNFLDJCQUNVLE9BQWdCLEVBQ2hCLFFBQWtCO1FBRGxCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVZuQixXQUFNLEdBQUcsSUFBSSx1QkFBWSxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDNUIsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRWhDLG1CQUFjLEdBQVcsUUFBUSxDQUFDO1FBRWpDLGVBQVUsR0FBZSxJQUFJLENBQUM7UUFLcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTthQUNuRCxNQUFNLEVBQUU7YUFDUixrQkFBa0IsRUFBRTthQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFaEIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxN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QUUsWUFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQ3BELGlCQUFVLENBQUMsNEJBQTRCLEVBQUU7d0JBQ3ZDLGNBQU8sQ0FBQyx3QkFBd0IsRUFBRSxnQkFBUyxDQUFDOzRCQUMxQyxZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDeEMsWUFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7eUJBQ3ZDLENBQUMsQ0FBQztxQkFDSixDQUFDO29CQUNGLGlCQUFVLENBQUMsMkNBQTJDLEVBQUU7d0JBQ3RELGNBQU8sQ0FBQyx3QkFBd0IsRUFBRSxnQkFBUyxDQUFDOzRCQUMxQyxZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDcEMsWUFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7eUJBQzNDLENBQUMsQ0FBQztxQkFDSixDQUFDO2lCQUNILENBQUM7YUFDSDtZQUNELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1lBRS9DLFFBQVEsRUFBRSxnT0FPUDtTQUNKLENBQUM7O3lCQUFBO0lBMkRGLHdCQUFDO0FBQUQsQ0F6REEsQUF5REMsSUFBQTtBQXpEWSx5QkFBaUIsb0JBeUQ3QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1kaWFsb2cvd3ouZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcixcbiAgdHJpZ2dlcixcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICBhbmltYXRlLFxuICBrZXlmcmFtZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPdmVybGF5fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge092ZXJsYXlTdGF0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtPdmVybGF5UmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3d6RGlhbG9nUG9ydGFsXScgfSlcbmV4cG9ydCBjbGFzcyBXekRpYWxvZ1BvcnRhbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3ei1kaWFsb2cnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2xpZGVJbk91dCcsIFtcbiAgICAgIHN0YXRlKCdzaG93bicsIHN0eWxlKHsgbWFyZ2luVG9wOiAnMCcgfSkpLFxuICAgICAgc3RhdGUoJ3ZvaWQsIGhpZGRlbicsIHN0eWxlKHsgbWFyZ2luVG9wOiAnLTI2MCUnIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKiwgaGlkZGVuID0+IHNob3duJywgW1xuICAgICAgICBhbmltYXRlKCc0MDBtcyAxMG1zIGVhc2UtaW4tb3V0Jywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7IG1hcmdpblRvcDogJy0yNjAlJywgb2Zmc2V0OiAwIH0pLFxuICAgICAgICAgIHN0eWxlKHsgbWFyZ2luVG9wOiAnMCcgLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdzaG93biA9PiB2b2lkLCAqID0+IHZvaWQsIHNob3duID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnNDAwbXMgMTBtcyBlYXNlLWluLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoeyBtYXJnaW5Ub3A6ICcwJywgb2Zmc2V0OiAwIH0pLFxuICAgICAgICAgIHN0eWxlKHsgbWFyZ2luVG9wOiAnLTI2MCUnLCBvZmZzZXQ6IDEuMCB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cbiAgdGVtcGxhdGU6IGBcbiAgICA8dGVtcGxhdGUgd3pEaWFsb2dQb3J0YWw+XG4gICAgICA8ZGl2IFtAc2xpZGVJbk91dF09XCJhbmltYXRpb25TdGF0ZVwiIGNsYXNzPVwid3otZGlhbG9nXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInd6LWRpYWxvZy1jbGljay1jYXRjaGVyXCI+PC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgV3pEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjb25maWcgPSBuZXcgT3ZlcmxheVN0YXRlKCk7XG4gIEBJbnB1dCgpIGNsaWNrQ2F0Y2hlcjogYm9vbGVhbiA9IHRydWU7XG4gIEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgdmlld1JlZjogYW55O1xuICBwdWJsaWMgYW5pbWF0aW9uU3RhdGU6IHN0cmluZyA9ICdoaWRkZW4nO1xuICBAVmlld0NoaWxkKFd6RGlhbG9nUG9ydGFsRGlyZWN0aXZlKSBwcml2YXRlIHBvcnRhbDogV3pEaWFsb2dQb3J0YWxEaXJlY3RpdmU7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgdGhpcy5jb25maWcucG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAuZ2xvYmFsKClcbiAgICAgIC5jZW50ZXJIb3Jpem9udGFsbHkoKVxuICAgICAgLnRvcCgnMTIlJyk7XG4gICAgICAvLyAuY2VudGVyVmVydGljYWxseSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHVibGljIHNob3coKTogUHJvbWlzZTxXekRpYWxvZ0NvbXBvbmVudD4ge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSAnaW4nO1xuICAgIHJldHVybiB0aGlzLmNsb3NlKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5jb25maWcpKVxuICAgICAgLnRoZW4oKHJlZjogT3ZlcmxheVJlZikgPT4ge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSByZWY7XG4gICAgICAgIHJldHVybiByZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNsaWNrQ2F0Y2hlcikgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsb3NlTGlzdGVuZXIoKSwgNTAwKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lm1kLW92ZXJsYXktY29udGFpbmVyJyksICdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KTtcbiAgfVxuXG4gICBwdWJsaWMgY2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZTxhbnk+KHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lm1kLW92ZXJsYXktY29udGFpbmVyJyksICdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLmNsaWNrQ2F0Y2hlcikgdGhpcy52aWV3UmVmKCk7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlTGlzdGVuZXIoKSB7XG4gICAgdGhpcy52aWV3UmVmID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lnd6LWRpYWxvZy1jbGljay1jYXRjaGVyJyksICdjbGljaycsICgpID0+IHRoaXMuY2xvc2UoKSk7XG4gIH1cbn1cbiJdfQ==
