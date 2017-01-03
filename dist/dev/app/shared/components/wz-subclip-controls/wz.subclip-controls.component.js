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
var WzSubclipControlsComponent = (function () {
    function WzSubclipControlsComponent() {
        this.markers = {};
        this.seekRequested = new core_1.EventEmitter();
        this.playSubclipRequested = new core_1.EventEmitter();
        this.markersChanged = new core_1.EventEmitter();
        this.markersCleared = new core_1.EventEmitter();
    }
    Object.defineProperty(WzSubclipControlsComponent.prototype, "duration", {
        get: function () {
            return this.clipDuration;
        },
        set: function (duration) {
            this.clipDuration = duration;
            if (!this.markers.in)
                this.markers.in = 0;
            if (!this.markers.out)
                this.markers.out = duration;
        },
        enumerable: true,
        configurable: true
    });
    WzSubclipControlsComponent.prototype.setInMarker = function () {
        this.markers.in = this.constrainedCurrentTime;
        if (this.markers.in > this.markers.out)
            this.markers.out = this.markers.in;
        this.emitMarkersEvent();
    };
    WzSubclipControlsComponent.prototype.setOutMarker = function () {
        this.markers.out = this.constrainedCurrentTime;
        if (this.markers.out < this.markers.in)
            this.markers.in = this.markers.out;
        this.emitMarkersEvent();
    };
    WzSubclipControlsComponent.prototype.gotoInMarker = function () {
        this.seekRequested.emit(this.markers.in);
    };
    WzSubclipControlsComponent.prototype.gotoOutMarker = function () {
        this.seekRequested.emit(this.markers.out);
    };
    WzSubclipControlsComponent.prototype.playInToOut = function () {
        this.playSubclipRequested.emit(this.markers);
    };
    WzSubclipControlsComponent.prototype.clear = function () {
        this.markers = { in: 0, out: this.clipDuration };
        this.markersCleared.emit();
    };
    Object.defineProperty(WzSubclipControlsComponent.prototype, "constrainedCurrentTime", {
        get: function () {
            return Math.min(Math.max(0, this.currentTime), this.clipDuration);
        },
        enumerable: true,
        configurable: true
    });
    WzSubclipControlsComponent.prototype.emitMarkersEvent = function () {
        if (this.markers.in > 0 || this.markers.out < this.clipDuration) {
            this.markersChanged.emit(this.markers);
        }
        else {
            this.markersCleared.emit();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], WzSubclipControlsComponent.prototype, "currentTime", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WzSubclipControlsComponent.prototype, "markers", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], WzSubclipControlsComponent.prototype, "duration", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzSubclipControlsComponent.prototype, "seekRequested", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzSubclipControlsComponent.prototype, "playSubclipRequested", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzSubclipControlsComponent.prototype, "markersChanged", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WzSubclipControlsComponent.prototype, "markersCleared", void 0);
    WzSubclipControlsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wz-subclip-controls',
            templateUrl: './wz.subclip-controls.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WzSubclipControlsComponent);
    return WzSubclipControlsComponent;
}());
exports.WzSubclipControlsComponent = WzSubclipControlsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1zdWJjbGlwLWNvbnRyb2xzL3d6LnN1YmNsaXAtY29udHJvbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFVdkU7SUFBQTtRQUVXLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBUzVCLGtCQUFhLEdBQXlCLElBQUksbUJBQVksRUFBVSxDQUFDO1FBQ2pFLHlCQUFvQixHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUN4RSxtQkFBYyxHQUFpQyxJQUFJLG1CQUFZLEVBQWtCLENBQUM7UUFDbEYsbUJBQWMsR0FBdUIsSUFBSSxtQkFBWSxFQUFRLENBQUM7SUFnRDFFLENBQUM7SUF6REMsc0JBQVcsZ0RBQVE7YUFhbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDO2FBZkQsVUFBb0IsUUFBZ0I7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7SUFhTSxnREFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztRQUM5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxpREFBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxpREFBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLGtEQUFhLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sZ0RBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sMENBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsc0JBQVksOERBQXNCO2FBQWxDO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRSxDQUFDOzs7T0FBQTtJQUVPLHFEQUFnQixHQUF4QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQTVERDtRQUFDLFlBQUssRUFBRTs7bUVBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7K0RBQUE7SUFFUjtRQUFDLFlBQUssRUFBRTs7OzhEQUFBO0lBT1I7UUFBQyxhQUFNLEVBQUU7O3FFQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7OzRFQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3NFQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3NFQUFBO0lBcEJYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSw0QkFBNEI7U0FDMUMsQ0FBQzs7a0NBQUE7SUFnRUYsaUNBQUM7QUFBRCxDQTlEQSxBQThEQyxJQUFBO0FBOURZLGtDQUEwQiw2QkE4RHRDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3d6LXN1YmNsaXAtY29udHJvbHMvd3ouc3ViY2xpcC1jb250cm9scy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJjbGlwTWFya2VycyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYXNzZXQuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnd3otc3ViY2xpcC1jb250cm9scycsXG4gIHRlbXBsYXRlVXJsOiAnLi93ei5zdWJjbGlwLWNvbnRyb2xzLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgV3pTdWJjbGlwQ29udHJvbHNDb21wb25lbnQge1xuICBASW5wdXQoKSBjdXJyZW50VGltZTogbnVtYmVyO1xuICBASW5wdXQoKSBtYXJrZXJzOiBTdWJjbGlwTWFya2VycyA9IHt9O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZHVyYXRpb24oZHVyYXRpb246IG51bWJlcikge1xuICAgIHRoaXMuY2xpcER1cmF0aW9uID0gZHVyYXRpb247XG4gICAgaWYgKCF0aGlzLm1hcmtlcnMuaW4pIHRoaXMubWFya2Vycy5pbiA9IDA7XG4gICAgaWYgKCF0aGlzLm1hcmtlcnMub3V0KSB0aGlzLm1hcmtlcnMub3V0ID0gZHVyYXRpb247XG4gIH1cblxuICBAT3V0cHV0KCkgc2Vla1JlcXVlc3RlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHBsYXlTdWJjbGlwUmVxdWVzdGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuICBAT3V0cHV0KCkgbWFya2Vyc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxTdWJjbGlwTWFya2Vycz4gPSBuZXcgRXZlbnRFbWl0dGVyPFN1YmNsaXBNYXJrZXJzPigpO1xuICBAT3V0cHV0KCkgbWFya2Vyc0NsZWFyZWQ6IEV2ZW50RW1pdHRlcjxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcblxuICBwcml2YXRlIGNsaXBEdXJhdGlvbjogbnVtYmVyO1xuXG4gIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jbGlwRHVyYXRpb247XG4gIH1cblxuICBwdWJsaWMgc2V0SW5NYXJrZXIoKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrZXJzLmluID0gdGhpcy5jb25zdHJhaW5lZEN1cnJlbnRUaW1lO1xuICAgIGlmICh0aGlzLm1hcmtlcnMuaW4gPiB0aGlzLm1hcmtlcnMub3V0KSB0aGlzLm1hcmtlcnMub3V0ID0gdGhpcy5tYXJrZXJzLmluO1xuICAgIHRoaXMuZW1pdE1hcmtlcnNFdmVudCgpO1xuICB9XG5cbiAgcHVibGljIHNldE91dE1hcmtlcigpOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtlcnMub3V0ID0gdGhpcy5jb25zdHJhaW5lZEN1cnJlbnRUaW1lO1xuICAgIGlmICh0aGlzLm1hcmtlcnMub3V0IDwgdGhpcy5tYXJrZXJzLmluKSB0aGlzLm1hcmtlcnMuaW4gPSB0aGlzLm1hcmtlcnMub3V0O1xuICAgIHRoaXMuZW1pdE1hcmtlcnNFdmVudCgpO1xuICB9XG5cbiAgcHVibGljIGdvdG9Jbk1hcmtlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNlZWtSZXF1ZXN0ZWQuZW1pdCh0aGlzLm1hcmtlcnMuaW4pO1xuICB9XG5cbiAgcHVibGljIGdvdG9PdXRNYXJrZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zZWVrUmVxdWVzdGVkLmVtaXQodGhpcy5tYXJrZXJzLm91dCk7XG4gIH1cblxuICBwdWJsaWMgcGxheUluVG9PdXQoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5U3ViY2xpcFJlcXVlc3RlZC5lbWl0KHRoaXMubWFya2Vycyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5tYXJrZXJzID0geyBpbjogMCwgb3V0OiB0aGlzLmNsaXBEdXJhdGlvbiB9O1xuICAgIHRoaXMubWFya2Vyc0NsZWFyZWQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29uc3RyYWluZWRDdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoMCwgdGhpcy5jdXJyZW50VGltZSksIHRoaXMuY2xpcER1cmF0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdE1hcmtlcnNFdmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tYXJrZXJzLmluID4gMCB8fCB0aGlzLm1hcmtlcnMub3V0IDwgdGhpcy5jbGlwRHVyYXRpb24pIHtcbiAgICAgIHRoaXMubWFya2Vyc0NoYW5nZWQuZW1pdCh0aGlzLm1hcmtlcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcmtlcnNDbGVhcmVkLmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
