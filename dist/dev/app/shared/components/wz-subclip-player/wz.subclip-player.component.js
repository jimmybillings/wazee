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
var wz_player_component_1 = require('../wz-player/wz.player.component');
var wz_subclip_controls_component_1 = require('../wz-subclip-controls/wz.subclip-controls.component');
var WzSubclipPlayerComponent = (function () {
    function WzSubclipPlayerComponent() {
        this.subclipMarkersChanged = new core_1.EventEmitter();
        this.subclipMarkersCleared = new core_1.EventEmitter();
    }
    WzSubclipPlayerComponent.prototype.onTimeUpdate = function (newTime) {
        this.subclipControls.currentTime = newTime;
    };
    WzSubclipPlayerComponent.prototype.onDurationUpdate = function (duration) {
        this.subclipControls.duration = duration;
    };
    WzSubclipPlayerComponent.prototype.requestSeekTo = function (seekTarget) {
        this.player.seekTo(seekTarget);
    };
    WzSubclipPlayerComponent.prototype.requestPlaySubclip = function (markers) {
        this.player.playSubclip(markers);
    };
    WzSubclipPlayerComponent.prototype.onSubclipMarkersChanged = function (newMarkers) {
        this.subclipMarkersChanged.emit(newMarkers);
    };
    WzSubclipPlayerComponent.prototype.onSubclipMarkersCleared = function () {
        this.subclipMarkersCleared.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzSubclipPlayerComponent.prototype, "asset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzSubclipPlayerComponent.prototype, "subclipMarkers", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzSubclipPlayerComponent.prototype, "subclipMarkersChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzSubclipPlayerComponent.prototype, "subclipMarkersCleared", void 0);
    __decorate([
        core_1.ViewChild(wz_player_component_1.WzPlayerComponent), 
        __metadata('design:type', wz_player_component_1.WzPlayerComponent)
    ], WzSubclipPlayerComponent.prototype, "player", void 0);
    __decorate([
        core_1.ViewChild(wz_subclip_controls_component_1.WzSubclipControlsComponent), 
        __metadata('design:type', wz_subclip_controls_component_1.WzSubclipControlsComponent)
    ], WzSubclipPlayerComponent.prototype, "subclipControls", void 0);
    WzSubclipPlayerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-subclip-player',
            templateUrl: './wz.subclip-player.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WzSubclipPlayerComponent);
    return WzSubclipPlayerComponent;
}());
exports.WzSubclipPlayerComponent = WzSubclipPlayerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1zdWJjbGlwLXBsYXllci93ei5zdWJjbGlwLXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrRSxlQUFlLENBQUMsQ0FBQTtBQUVsRixvQ0FBa0Msa0NBQWtDLENBQUMsQ0FBQTtBQUNyRSw4Q0FBMkMsc0RBQXNELENBQUMsQ0FBQTtBQVNsRztJQUFBO1FBSVksMEJBQXFCLEdBQWlDLElBQUksbUJBQVksRUFBa0IsQ0FBQztRQUN6RiwwQkFBcUIsR0FBdUIsSUFBSSxtQkFBWSxFQUFRLENBQUM7SUE0QmpGLENBQUM7SUF2QlEsK0NBQVksR0FBbkIsVUFBb0IsT0FBZTtRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDN0MsQ0FBQztJQUVNLG1EQUFnQixHQUF2QixVQUF3QixRQUFnQjtRQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0MsQ0FBQztJQUVNLGdEQUFhLEdBQXBCLFVBQXFCLFVBQWtCO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxxREFBa0IsR0FBekIsVUFBMEIsT0FBdUI7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLDBEQUF1QixHQUE5QixVQUErQixVQUEwQjtRQUN2RCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSwwREFBdUIsR0FBOUI7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQS9CRDtRQUFDLFlBQUssRUFBRTs7MkRBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7b0VBQUE7SUFFUjtRQUFDLGFBQU0sRUFBRTs7MkVBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MkVBQUE7SUFFVDtRQUFDLGdCQUFTLENBQUMsdUNBQWlCLENBQUM7OzREQUFBO0lBQzdCO1FBQUMsZ0JBQVMsQ0FBQywwREFBMEIsQ0FBQzs7cUVBQUE7SUFkeEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDOztnQ0FBQTtJQW1DRiwrQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFqQ1ksZ0NBQXdCLDJCQWlDcEMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvd3otc3ViY2xpcC1wbGF5ZXIvd3ouc3ViY2xpcC1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXelBsYXllckNvbXBvbmVudCB9IGZyb20gJy4uL3d6LXBsYXllci93ei5wbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFd6U3ViY2xpcENvbnRyb2xzQ29tcG9uZW50IH0gZnJvbSAnLi4vd3otc3ViY2xpcC1jb250cm9scy93ei5zdWJjbGlwLWNvbnRyb2xzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJjbGlwTWFya2VycyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXNzZXQuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnd3otc3ViY2xpcC1wbGF5ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vd3ouc3ViY2xpcC1wbGF5ZXIuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBXelN1YmNsaXBQbGF5ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBhc3NldDogYW55O1xuICBASW5wdXQoKSBzdWJjbGlwTWFya2VyczogU3ViY2xpcE1hcmtlcnM7XG5cbiAgQE91dHB1dCgpIHN1YmNsaXBNYXJrZXJzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFN1YmNsaXBNYXJrZXJzPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3ViY2xpcE1hcmtlcnM+KCk7XG4gIEBPdXRwdXQoKSBzdWJjbGlwTWFya2Vyc0NsZWFyZWQ6IEV2ZW50RW1pdHRlcjxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcblxuICBAVmlld0NoaWxkKFd6UGxheWVyQ29tcG9uZW50KSBwbGF5ZXI6IFd6UGxheWVyQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKFd6U3ViY2xpcENvbnRyb2xzQ29tcG9uZW50KSBzdWJjbGlwQ29udHJvbHM6IFd6U3ViY2xpcENvbnRyb2xzQ29tcG9uZW50O1xuXG4gIHB1YmxpYyBvblRpbWVVcGRhdGUobmV3VGltZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdWJjbGlwQ29udHJvbHMuY3VycmVudFRpbWUgPSBuZXdUaW1lO1xuICB9XG5cbiAgcHVibGljIG9uRHVyYXRpb25VcGRhdGUoZHVyYXRpb246IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc3ViY2xpcENvbnRyb2xzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cblxuICBwdWJsaWMgcmVxdWVzdFNlZWtUbyhzZWVrVGFyZ2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5zZWVrVG8oc2Vla1RhcmdldCk7XG4gIH1cblxuICBwdWJsaWMgcmVxdWVzdFBsYXlTdWJjbGlwKG1hcmtlcnM6IFN1YmNsaXBNYXJrZXJzKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIucGxheVN1YmNsaXAobWFya2Vycyk7XG4gIH1cblxuICBwdWJsaWMgb25TdWJjbGlwTWFya2Vyc0NoYW5nZWQobmV3TWFya2VyczogU3ViY2xpcE1hcmtlcnMpOiB2b2lkIHtcbiAgICB0aGlzLnN1YmNsaXBNYXJrZXJzQ2hhbmdlZC5lbWl0KG5ld01hcmtlcnMpO1xuICB9XG5cbiAgcHVibGljIG9uU3ViY2xpcE1hcmtlcnNDbGVhcmVkKCk6IHZvaWQge1xuICAgIHRoaXMuc3ViY2xpcE1hcmtlcnNDbGVhcmVkLmVtaXQoKTtcbiAgfVxufVxuIl19
