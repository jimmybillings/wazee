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
var pikaday = require('pikaday');
var WzPikaDayDirective = (function () {
    function WzPikaDayDirective(element) {
        this.element = element;
        this.picker = new pikaday({ field: this.element.nativeElement });
    }
    Object.defineProperty(WzPikaDayDirective.prototype, "maxDate", {
        set: function (dateString) {
            this.picker.setMaxDate(dateString ? this.convertToDateInstance(dateString) : null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WzPikaDayDirective.prototype, "minDate", {
        set: function (dateString) {
            this.picker.setMinDate(dateString ? this.convertToDateInstance(dateString) : null);
        },
        enumerable: true,
        configurable: true
    });
    WzPikaDayDirective.prototype.convertToDateInstance = function (dateString) {
        var utcDate = new Date(dateString);
        var offsetInMinutes = utcDate.getTimezoneOffset();
        var offsetInMilliseconds = offsetInMinutes * 60 * 1000;
        var fudgeFactor = 500;
        return new Date(utcDate.getTime() + offsetInMilliseconds + fudgeFactor);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], WzPikaDayDirective.prototype, "maxDate", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], WzPikaDayDirective.prototype, "minDate", null);
    WzPikaDayDirective = __decorate([
        core_1.Directive({
            selector: '[wzPikaday]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], WzPikaDayDirective);
    return WzPikaDayDirective;
}());
exports.WzPikaDayDirective = WzPikaDayDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1waWthZGF5L3d6LXBpa2FkYXkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBTWpDO0lBR0UsNEJBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUdELHNCQUFJLHVDQUFPO2FBQVgsVUFBWSxVQUFrQjtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3JGLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksdUNBQU87YUFBWCxVQUFZLFVBQWtCO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDckYsQ0FBQzs7O09BQUE7SUFFTyxrREFBcUIsR0FBN0IsVUFBOEIsVUFBa0I7UUFFOUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsSUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDcEQsSUFBTSxvQkFBb0IsR0FBRyxlQUFlLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6RCxJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFFeEIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxvQkFBb0IsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBbEJEO1FBQUMsWUFBSyxFQUFFOzs7cURBQUE7SUFLUjtRQUFDLFlBQUssRUFBRTs7O3FEQUFBO0lBaEJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1NBQ3hCLENBQUM7OzBCQUFBO0lBNEJGLHlCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSwwQkFBa0IscUJBMEI5QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1waWthZGF5L3d6LXBpa2FkYXkuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xudmFyIHBpa2FkYXkgPSByZXF1aXJlKCdwaWthZGF5Jyk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t3elBpa2FkYXldJ1xufSlcblxuZXhwb3J0IGNsYXNzIFd6UGlrYURheURpcmVjdGl2ZSB7XG4gIHByaXZhdGUgcGlja2VyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnBpY2tlciA9IG5ldyBwaWthZGF5KHsgZmllbGQ6IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1heERhdGUoZGF0ZVN0cmluZzogc3RyaW5nKSB7XG4gICAgdGhpcy5waWNrZXIuc2V0TWF4RGF0ZShkYXRlU3RyaW5nID8gdGhpcy5jb252ZXJ0VG9EYXRlSW5zdGFuY2UoZGF0ZVN0cmluZykgOiBudWxsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtaW5EYXRlKGRhdGVTdHJpbmc6IHN0cmluZykge1xuICAgIHRoaXMucGlja2VyLnNldE1pbkRhdGUoZGF0ZVN0cmluZyA/IHRoaXMuY29udmVydFRvRGF0ZUluc3RhbmNlKGRhdGVTdHJpbmcpIDogbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUb0RhdGVJbnN0YW5jZShkYXRlU3RyaW5nOiBzdHJpbmcpOiBEYXRlIHtcbiAgICAvLyBUaGFua3MgdG8gY29tbWVudGVyIFwiamFjcXVlc3BvcnZlYXVcIiBhdCBodHRwczovL2dpdGh1Yi5jb20vZGJ1c2hlbGwvUGlrYWRheS9pc3N1ZXMvMzkuXG4gICAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgIGNvbnN0IG9mZnNldEluTWludXRlcyA9IHV0Y0RhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBjb25zdCBvZmZzZXRJbk1pbGxpc2Vjb25kcyA9IG9mZnNldEluTWludXRlcyAqIDYwICogMTAwMDtcbiAgICBjb25zdCBmdWRnZUZhY3RvciA9IDUwMDtcblxuICAgIHJldHVybiBuZXcgRGF0ZSh1dGNEYXRlLmdldFRpbWUoKSArIG9mZnNldEluTWlsbGlzZWNvbmRzICsgZnVkZ2VGYWN0b3IpO1xuICB9XG59XG4iXX0=
