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
var previewWidth = 420;
var previewHeight = 300;
var horizontalPadding = 10;
var verticalPadding = 20;
var delay = 333;
var WzSpeedviewDirective = (function () {
    function WzSpeedviewDirective() {
        this.showPreview = new core_1.EventEmitter();
        this.hidePreview = new core_1.EventEmitter();
    }
    WzSpeedviewDirective.prototype.onMouseEnter = function ($event) {
        var _this = this;
        if (window.innerWidth <= previewWidth)
            return;
        this.viewport = $event.currentTarget.getBoundingClientRect();
        this.timeout = setTimeout(function () {
            _this.showPreview.emit(_this.previewPosition);
        }, delay);
    };
    WzSpeedviewDirective.prototype.onMouseLeave = function () {
        clearTimeout(this.timeout);
        this.hidePreview.emit();
    };
    Object.defineProperty(WzSpeedviewDirective.prototype, "previewPosition", {
        get: function () {
            var x = this.determineHorizontalPreviewPlacement;
            var y = this.determineVerticalPreviewPlacement;
            return { x: x, y: y };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WzSpeedviewDirective.prototype, "determineHorizontalPreviewPlacement", {
        get: function () {
            if (this.roomToTheRight) {
                return this.viewport.right + horizontalPadding;
            }
            else {
                return this.viewport.right - previewWidth - this.viewport.width - horizontalPadding;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WzSpeedviewDirective.prototype, "determineVerticalPreviewPlacement", {
        get: function () {
            if (this.roomBelow && this.roomAbove) {
                return this.viewport.top - (previewHeight / 3);
            }
            else if (!this.roomBelow) {
                return window.innerHeight - previewHeight - verticalPadding;
            }
            else {
                return 0 + verticalPadding;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WzSpeedviewDirective.prototype, "roomToTheRight", {
        get: function () {
            return window.innerWidth - this.viewport.right - previewWidth >= horizontalPadding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WzSpeedviewDirective.prototype, "roomAbove", {
        get: function () {
            return 0 + this.viewport.top - (previewHeight / 3) >= verticalPadding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WzSpeedviewDirective.prototype, "roomBelow", {
        get: function () {
            return window.innerHeight - (this.viewport.top - (previewHeight / 3) + previewHeight) >= verticalPadding;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzSpeedviewDirective.prototype, "showPreview", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzSpeedviewDirective.prototype, "hidePreview", void 0);
    __decorate([
        core_1.HostListener('mouseenter', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], WzSpeedviewDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], WzSpeedviewDirective.prototype, "onMouseLeave", null);
    WzSpeedviewDirective = __decorate([
        core_1.Directive({ selector: '[wzSpeedview]' }), 
        __metadata('design:paramtypes', [])
    ], WzSpeedviewDirective);
    return WzSpeedviewDirective;
}());
exports.WzSpeedviewDirective = WzSpeedviewDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1zcGVlZHZpZXcvd3ouc3BlZWR2aWV3LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThELGVBQWUsQ0FBQyxDQUFBO0FBRzlFLElBQU0sWUFBWSxHQUFXLEdBQUcsQ0FBQztBQUNqQyxJQUFNLGFBQWEsR0FBVyxHQUFHLENBQUM7QUFDbEMsSUFBTSxpQkFBaUIsR0FBVyxFQUFFLENBQUM7QUFDckMsSUFBTSxlQUFlLEdBQVcsRUFBRSxDQUFDO0FBQ25DLElBQU0sS0FBSyxHQUFXLEdBQUcsQ0FBQztBQUcxQjtJQUFBO1FBQ21CLGdCQUFXLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3BELGdCQUFXLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBNER2RSxDQUFDO0lBeERnRCwyQ0FBWSxHQUFuQixVQUFvQixNQUFXO1FBQS9CLGlCQU12QztRQUxDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRThDLDJDQUFZLEdBQW5CO1FBQ3RDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBR0Qsc0JBQVksaURBQWU7YUFBM0I7WUFDRSxJQUFJLENBQUMsR0FBVyxJQUFJLENBQUMsbUNBQW1DLENBQUM7WUFDekQsSUFBSSxDQUFDLEdBQVcsSUFBSSxDQUFDLGlDQUFpQyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQyxFQUFFLElBQUMsRUFBRSxJQUFDLEVBQUUsQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUlELHNCQUFZLHFFQUFtQzthQUEvQztZQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7WUFDakQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7WUFDdEYsQ0FBQztRQUNILENBQUM7OztPQUFBO0lBSUQsc0JBQVksbUVBQWlDO2FBQTdDO1lBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsYUFBYSxHQUFHLGVBQWUsQ0FBQztZQUM5RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUM7WUFDN0IsQ0FBQztRQUNILENBQUM7OztPQUFBO0lBR0Qsc0JBQVksZ0RBQWM7YUFBMUI7WUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxZQUFZLElBQUksaUJBQWlCLENBQUM7UUFDckYsQ0FBQzs7O09BQUE7SUFHRCxzQkFBWSwyQ0FBUzthQUFyQjtZQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDO1FBQ3hFLENBQUM7OztPQUFBO0lBR0Qsc0JBQVksMkNBQVM7YUFBckI7WUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLGVBQWUsQ0FBQztRQUMzRyxDQUFDOzs7T0FBQTtJQTVERDtRQUFDLGFBQU0sRUFBRTs7NkRBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7NkRBQUE7SUFJVDtRQUFDLG1CQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7NERBQUE7SUFRdkM7UUFBQyxtQkFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzREQUFBO0lBZnpDO1FBQUMsZ0JBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQzs7NEJBQUE7SUErRHpDLDJCQUFDO0FBQUQsQ0E5REEsQUE4REMsSUFBQTtBQTlEWSw0QkFBb0IsdUJBOERoQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1zcGVlZHZpZXcvd3ouc3BlZWR2aWV3LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld3BvcnQsIENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ldmVudC5pbnRlcmZhY2UnO1xuXG5jb25zdCBwcmV2aWV3V2lkdGg6IG51bWJlciA9IDQyMDsgICAgIC8vIEhvdyB3aWRlIHRoZSBzcGVlZCBwcmV2aWV3IGRpYWxvZyBpc1xuY29uc3QgcHJldmlld0hlaWdodDogbnVtYmVyID0gMzAwOyAgICAvLyBIb3cgdGFsbCB0aGUgc3BlZWQgcHJldmlldyBkaWFsb2cgaXNcbmNvbnN0IGhvcml6b250YWxQYWRkaW5nOiBudW1iZXIgPSAxMDsgLy8gSG93IG11Y2ggcm9vbSB3ZSB3YW50IG9uIGVhY2ggc2lkZSBvZiB0aGUgc3BlZWQgcHJldmlld1xuY29uc3QgdmVydGljYWxQYWRkaW5nOiBudW1iZXIgPSAyMDsgICAvLyBIb3cgbXVjaCByb29tIHdlIHdhbnQgYWJvdmUgYW5kIGJlbG93IHRoZSBwcmV2aWV3XG5jb25zdCBkZWxheTogbnVtYmVyID0gMzMzOyAgICAgICAgICAgIC8vIEhvdyBsb25nIHdlIHdhbnQgdG8gd2FpdCBiZWZvcmUgc2hvd2luZyB0aGUgcHJldmlld1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbd3pTcGVlZHZpZXddJyB9KVxuZXhwb3J0IGNsYXNzIFd6U3BlZWR2aWV3RGlyZWN0aXZlIHtcbiAgQE91dHB1dCgpIHB1YmxpYyBzaG93UHJldmlldzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgaGlkZVByZXZpZXc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcbiAgcHJpdmF0ZSB2aWV3cG9ydDogVmlld3BvcnQ7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsIFsnJGV2ZW50J10pIHB1YmxpYyBvbk1vdXNlRW50ZXIoJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gcHJldmlld1dpZHRoKSByZXR1cm47XG4gICAgdGhpcy52aWV3cG9ydCA9ICRldmVudC5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93UHJldmlldy5lbWl0KHRoaXMucHJldmlld1Bvc2l0aW9uKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSkgcHVibGljIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3LmVtaXQoKTtcbiAgfVxuXG4gIC8vIERldGVybWluZXMgdGhlIHggYW5kIHkgY29vcmRpbmF0ZSB0aGF0IHRoZSBwcmV2aWV3J3MgdG9wIGxlZnQgY29ybmVyIHNob3VsZCBzdGFydCBhdCBcbiAgcHJpdmF0ZSBnZXQgcHJldmlld1Bvc2l0aW9uKCk6IENvb3JkaW5hdGVzIHtcbiAgICBsZXQgeDogbnVtYmVyID0gdGhpcy5kZXRlcm1pbmVIb3Jpem9udGFsUHJldmlld1BsYWNlbWVudDtcbiAgICBsZXQgeTogbnVtYmVyID0gdGhpcy5kZXRlcm1pbmVWZXJ0aWNhbFByZXZpZXdQbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHsgeCwgeSB9O1xuICB9XG5cbiAgLy8gUmV0dXJucyBhbiB4IGNvb3JkaW5hdGUgYmFzZWQgb24gdGhlIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHRoYXQgd2FzIGhvdmVyZWQgdXBvblxuICAvLyBpZiB0aGVyZSBpcyBubyByb29tIHRvIHRoZSByaWdodCwgaXQgc2hpZnRzIHRoZSBwcmV2aWV3IGJhY2sgYnkgaXRzIHdpZHRoLCBhbmQgdGhlIHdpZHRoIG9mIHRoZSBob3ZlcmVkIGVsZW1lbnRcbiAgcHJpdmF0ZSBnZXQgZGV0ZXJtaW5lSG9yaXpvbnRhbFByZXZpZXdQbGFjZW1lbnQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5yb29tVG9UaGVSaWdodCkge1xuICAgICAgcmV0dXJuIHRoaXMudmlld3BvcnQucmlnaHQgKyBob3Jpem9udGFsUGFkZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmlld3BvcnQucmlnaHQgLSBwcmV2aWV3V2lkdGggLSB0aGlzLnZpZXdwb3J0LndpZHRoIC0gaG9yaXpvbnRhbFBhZGRpbmc7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBhIHkgY29vcmRpbmF0ZSBiYXNlZCBvbiB0aGUgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgdGhhdCB3YXMgaG92ZXJlZCB1cG9uXG4gIC8vIGlmIHRoZXJlIGlzIG5vdCByb29tIG9uIHRoZSBib3R0b20sIGl0IHNoaWZ0cyB0aGUgcHJldmlldyB1cCBieSBpdHMgaGVpZ2h0LCBhbmQgaGFsZiB0aGUgaGVpZ2h0IG9mIHRoZSBob3ZlcmVkIGVsZW1lbnRcbiAgcHJpdmF0ZSBnZXQgZGV0ZXJtaW5lVmVydGljYWxQcmV2aWV3UGxhY2VtZW50KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucm9vbUJlbG93ICYmIHRoaXMucm9vbUFib3ZlKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3cG9ydC50b3AgLSAocHJldmlld0hlaWdodCAvIDMpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMucm9vbUJlbG93KSB7XG4gICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IC0gcHJldmlld0hlaWdodCAtIHZlcnRpY2FsUGFkZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDAgKyB2ZXJ0aWNhbFBhZGRpbmc7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGF0IGxlYXN0IDEwcHggdG8gdGhlIHJpZ2h0IG9mIHRoZSBob3ZlcmVkIGVsZW1lbnRcbiAgcHJpdmF0ZSBnZXQgcm9vbVRvVGhlUmlnaHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy52aWV3cG9ydC5yaWdodCAtIHByZXZpZXdXaWR0aCA+PSBob3Jpem9udGFsUGFkZGluZztcbiAgfVxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBhdCBsZWFzdCAyMHB4IGFib3ZlIHRoZSBob3ZlcmVkIGVsZW1lbnQgXG4gIHByaXZhdGUgZ2V0IHJvb21BYm92ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gMCArIHRoaXMudmlld3BvcnQudG9wIC0gKHByZXZpZXdIZWlnaHQgLyAzKSA+PSB2ZXJ0aWNhbFBhZGRpbmc7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgYXQgbGVhc3QgMjBweCBiZWxvdyB0aGUgaG92ZXJlZCBlbGVtZW50XG4gIHByaXZhdGUgZ2V0IHJvb21CZWxvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IC0gKHRoaXMudmlld3BvcnQudG9wIC0gKHByZXZpZXdIZWlnaHQgLyAzKSArIHByZXZpZXdIZWlnaHQpID49IHZlcnRpY2FsUGFkZGluZztcbiAgfVxufVxuIl19
