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
var WzPlayerComponent = (function () {
    function WzPlayerComponent(element) {
        this.element = element;
        this.mode = 'playback';
        this.timeUpdate = new core_1.EventEmitter();
        this.durationUpdate = new core_1.EventEmitter();
        this.currentlyPlaying = false;
    }
    Object.defineProperty(WzPlayerComponent.prototype, "asset", {
        get: function () {
            return this.currentAsset;
        },
        set: function (newAsset) {
            this.currentAsset = newAsset;
            this.reset();
            (this.currentAsset.resourceClass === 'Image') ? this.setupImage() : this.setupVideo();
        },
        enumerable: true,
        configurable: true
    });
    WzPlayerComponent.prototype.seekTo = function (timeInSeconds) {
        this.player.seek(timeInSeconds);
    };
    WzPlayerComponent.prototype.playSubclip = function (markers) {
        var _this = this;
        if (this.mode !== 'edit')
            throw new TypeError('Must be in edit mode to play subclip.');
        this.player
            .pause()
            .seek(markers.in)
            .once('seeked', function () {
            _this.player
                .off('time')
                .on('time', function (event) {
                _this.timeUpdate.emit(event.position);
                if (event.position >= markers.out) {
                    _this.player.pause().off('time');
                    _this.handleTimeEvents();
                }
            }).play();
        });
    };
    WzPlayerComponent.prototype.setupVideo = function () {
        this.player.setup({
            image: this.currentAsset.clipThumbnailUrl ? this.currentAsset.clipThumbnailUrl : null,
            file: this.currentAsset.clipUrl,
            logo: {
                file: 'assets/img/logo/watermark.png',
                position: 'top-right',
                link: 'http://www.wazeedigital.com'
            }
        });
        if (this.mode === 'edit') {
            this.currentlyPlaying = true;
            this.handleDurationEvent();
            this.handleTimeEvents();
            this.handleStateEvents();
            this.preventAutoplayAfterSeek();
        }
    };
    WzPlayerComponent.prototype.handleDurationEvent = function () {
        var _this = this;
        this.player.once('time', function (event) { return _this.durationUpdate.emit(event.duration); });
    };
    WzPlayerComponent.prototype.handleTimeEvents = function () {
        var _this = this;
        this.player.on('time', function (event) { return _this.timeUpdate.emit(event.position); });
    };
    WzPlayerComponent.prototype.handleStateEvents = function () {
        var _this = this;
        this.player.on('play', function () { return _this.currentlyPlaying = true; });
        this.player.on('pause', function () { return _this.currentlyPlaying = false; });
    };
    WzPlayerComponent.prototype.preventAutoplayAfterSeek = function () {
        var _this = this;
        this.player.on('seek', function () {
            var wasPlaying = _this.currentlyPlaying;
            _this.player.once('seeked', function () {
                if (!wasPlaying)
                    _this.player.pause();
            });
        });
    };
    WzPlayerComponent.prototype.setupImage = function () {
        var imgWrapper = document.createElement('div');
        imgWrapper.className = 'photo-container';
        var elem = document.createElement('img');
        elem.src = this.currentAsset.clipUrl;
        imgWrapper.appendChild(elem);
        this.element.nativeElement.appendChild(imgWrapper);
    };
    Object.defineProperty(WzPlayerComponent.prototype, "player", {
        get: function () {
            this.jwPlayer = this.jwPlayer || jwplayer(this.element.nativeElement);
            return this.jwPlayer;
        },
        enumerable: true,
        configurable: true
    });
    WzPlayerComponent.prototype.reset = function () {
        this.player.pause();
        if (this.mode === 'edit') {
            this.durationUpdate.emit(undefined);
            this.timeUpdate.emit(0);
        }
        this.player.remove();
        this.jwPlayer = null;
        this.element.nativeElement.innerHTML = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzPlayerComponent.prototype, "mode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], WzPlayerComponent.prototype, "asset", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzPlayerComponent.prototype, "timeUpdate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzPlayerComponent.prototype, "durationUpdate", void 0);
    WzPlayerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-player',
            template: "",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], WzPlayerComponent);
    return WzPlayerComponent;
}());
exports.WzPlayerComponent = WzPlayerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1wbGF5ZXIvd3oucGxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRGLGVBQWUsQ0FBQyxDQUFBO0FBYTVHO0lBc0JFLDJCQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBckI5QixTQUFJLEdBQXdCLFVBQVUsQ0FBQztRQWN0QyxlQUFVLEdBQXlCLElBQUksbUJBQVksRUFBVSxDQUFDO1FBQzlELG1CQUFjLEdBQXlCLElBQUksbUJBQVksRUFBVSxDQUFDO1FBSXBFLHFCQUFnQixHQUFZLEtBQUssQ0FBQztJQUVDLENBQUM7SUFsQjVDLHNCQUFXLG9DQUFLO2FBTWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzthQVJELFVBQWlCLFFBQWE7WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hGLENBQUM7OztPQUFBO0lBZ0JNLGtDQUFNLEdBQWIsVUFBYyxhQUFxQjtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sdUNBQVcsR0FBbEIsVUFBbUIsT0FBdUI7UUFBMUMsaUJBbUJDO1FBbEJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO1lBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBRXZGLElBQUksQ0FBQyxNQUFNO2FBQ1IsS0FBSyxFQUFFO2FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxF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QUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBckhEO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQUVSO1FBQUMsWUFBSyxFQUFFOzs7a0RBQUE7SUFZUjtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7NkRBQUE7SUF4Qlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxFQUFFO1lBRVosZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzs7eUJBQUE7SUF5SEYsd0JBQUM7QUFBRCxDQXZIQSxBQXVIQyxJQUFBO0FBdkhZLHlCQUFpQixvQkF1SDdCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3d6LXBsYXllci93ei5wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIHZhciBqd3BsYXllcjogYW55O1xuXG5pbXBvcnQgeyBTdWJjbGlwTWFya2VycyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXNzZXQuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnd3otcGxheWVyJyxcbiAgdGVtcGxhdGU6IGBgLFxuICAvLyBzdHlsZXM6IFsnaW1nIHsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IH0nXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuXG5leHBvcnQgY2xhc3MgV3pQbGF5ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBtb2RlOiAncGxheWJhY2snIHwgJ2VkaXQnID0gJ3BsYXliYWNrJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFzc2V0KG5ld0Fzc2V0OiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnRBc3NldCA9IG5ld0Fzc2V0O1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICAodGhpcy5jdXJyZW50QXNzZXQucmVzb3VyY2VDbGFzcyA9PT0gJ0ltYWdlJykgPyB0aGlzLnNldHVwSW1hZ2UoKSA6IHRoaXMuc2V0dXBWaWRlbygpO1xuICB9XG5cbiAgcHVibGljIGdldCBhc3NldCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRBc3NldDtcbiAgfVxuXG4gIC8vIFRoZXNlIGV2ZW50cyBhcmUgZW1pdHRlZCBvbmx5IGZvciB0aGlzLm1vZGUgPT09ICdlZGl0Jy5cbiAgQE91dHB1dCgpIHRpbWVVcGRhdGU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBkdXJhdGlvblVwZGF0ZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwcml2YXRlIGN1cnJlbnRBc3NldDogYW55O1xuICBwcml2YXRlIGp3UGxheWVyOiBhbnk7IC8vIERvbid0IGFjY2VzcyB0aGlzIGRpcmVjdGx5LiAgVXNlIHRoaXMucGxheWVyIGdldHRlciBpbnN0ZWFkLlxuICBwcml2YXRlIGN1cnJlbnRseVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHB1YmxpYyBzZWVrVG8odGltZUluU2Vjb25kczogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIuc2Vlayh0aW1lSW5TZWNvbmRzKTtcbiAgfVxuXG4gIHB1YmxpYyBwbGF5U3ViY2xpcChtYXJrZXJzOiBTdWJjbGlwTWFya2Vycyk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgIT09ICdlZGl0JykgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBiZSBpbiBlZGl0IG1vZGUgdG8gcGxheSBzdWJjbGlwLicpO1xuXG4gICAgdGhpcy5wbGF5ZXJcbiAgICAgIC5wYXVzZSgpXG4gICAgICAuc2VlayhtYXJrZXJzLmluKVxuICAgICAgLm9uY2UoJ3NlZWtlZCcsICgpID0+IHtcbiAgICAgICAgLy8gdGVtcG9yYXJpbHkgcmVwbGFjZSAndGltZScgZXZlbnQgaGFuZGxlclxuICAgICAgICB0aGlzLnBsYXllclxuICAgICAgICAgIC5vZmYoJ3RpbWUnKVxuICAgICAgICAgIC5vbigndGltZScsIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVVcGRhdGUuZW1pdChldmVudC5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5wb3NpdGlvbiA+PSBtYXJrZXJzLm91dCkge1xuICAgICAgICAgICAgICB0aGlzLnBsYXllci5wYXVzZSgpLm9mZigndGltZScpO1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRpbWVFdmVudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS5wbGF5KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBWaWRlbygpIHtcbiAgICB0aGlzLnBsYXllci5zZXR1cCh7XG4gICAgICBpbWFnZTogdGhpcy5jdXJyZW50QXNzZXQuY2xpcFRodW1ibmFpbFVybCA/IHRoaXMuY3VycmVudEFzc2V0LmNsaXBUaHVtYm5haWxVcmwgOiBudWxsLFxuICAgICAgZmlsZTogdGhpcy5jdXJyZW50QXNzZXQuY2xpcFVybCxcbiAgICAgIGxvZ286IHtcbiAgICAgICAgZmlsZTogJ2Fzc2V0cy9pbWcvbG9nby93YXRlcm1hcmsucG5nJyxcbiAgICAgICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgICAgICBsaW5rOiAnaHR0cDovL3d3dy53YXplZWRpZ2l0YWwuY29tJ1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2VkaXQnKSB7XG4gICAgICB0aGlzLmN1cnJlbnRseVBsYXlpbmcgPSB0cnVlOyAvLyBCZWNhdXNlIHdlIGFyZSBhdXRvcGxheWluZyBvbiBsb2FkLlxuXG4gICAgICB0aGlzLmhhbmRsZUR1cmF0aW9uRXZlbnQoKTtcbiAgICAgIHRoaXMuaGFuZGxlVGltZUV2ZW50cygpO1xuICAgICAgdGhpcy5oYW5kbGVTdGF0ZUV2ZW50cygpO1xuICAgICAgdGhpcy5wcmV2ZW50QXV0b3BsYXlBZnRlclNlZWsoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUR1cmF0aW9uRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXIub25jZSgndGltZScsIChldmVudDogYW55KSA9PiB0aGlzLmR1cmF0aW9uVXBkYXRlLmVtaXQoZXZlbnQuZHVyYXRpb24pKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVGltZUV2ZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5vbigndGltZScsIChldmVudDogYW55KSA9PiB0aGlzLnRpbWVVcGRhdGUuZW1pdChldmVudC5wb3NpdGlvbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGF0ZUV2ZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllci5vbigncGxheScsICgpID0+IHRoaXMuY3VycmVudGx5UGxheWluZyA9IHRydWUpO1xuICAgIHRoaXMucGxheWVyLm9uKCdwYXVzZScsICgpID0+IHRoaXMuY3VycmVudGx5UGxheWluZyA9IGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmVudEF1dG9wbGF5QWZ0ZXJTZWVrKCk6IHZvaWQge1xuICAgIHRoaXMucGxheWVyLm9uKCdzZWVrJywgKCkgPT4ge1xuICAgICAgY29uc3Qgd2FzUGxheWluZzogYm9vbGVhbiA9IHRoaXMuY3VycmVudGx5UGxheWluZztcblxuICAgICAgdGhpcy5wbGF5ZXIub25jZSgnc2Vla2VkJywgKCkgPT4ge1xuICAgICAgICBpZiAoIXdhc1BsYXlpbmcpIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBJbWFnZSgpIHtcbiAgICB2YXIgaW1nV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZ1dyYXBwZXIuY2xhc3NOYW1lID0gJ3Bob3RvLWNvbnRhaW5lcic7XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlbGVtLnNyYyA9IHRoaXMuY3VycmVudEFzc2V0LmNsaXBVcmw7XG4gICAgaW1nV3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChpbWdXcmFwcGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHBsYXllcigpOiBhbnkge1xuICAgIHRoaXMuandQbGF5ZXIgPSB0aGlzLmp3UGxheWVyIHx8IGp3cGxheWVyKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcy5qd1BsYXllcjtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXQoKSB7XG4gICAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT09ICdlZGl0Jykge1xuICAgICAgdGhpcy5kdXJhdGlvblVwZGF0ZS5lbWl0KHVuZGVmaW5lZCk7XG4gICAgICB0aGlzLnRpbWVVcGRhdGUuZW1pdCgwKTtcbiAgICB9XG5cbiAgICB0aGlzLnBsYXllci5yZW1vdmUoKTtcbiAgICB0aGlzLmp3UGxheWVyID0gbnVsbDtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxufVxuIl19
