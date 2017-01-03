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
var current_user_model_1 = require('../../shared/services/current-user.model');
var router_1 = require('@angular/router');
var AssetCapabilities = (function () {
    function AssetCapabilities(currentUser, route) {
        this.currentUser = currentUser;
        this.route = route;
    }
    AssetCapabilities.prototype.viewAssetDetails = function () {
        return this.userHas('ViewClips');
    };
    AssetCapabilities.prototype.downloadWatermarkComps = function (hasComp) {
        return this.userHas('DownloadWatermarkComps') && hasComp;
    };
    AssetCapabilities.prototype.downloadCleanComps = function (hasComp) {
        return this.userHas('DownloadCleanComps') && hasComp;
    };
    AssetCapabilities.prototype.downloadFullComps = function (hasComp) {
        return this.userHas('DownloadFullComps') && hasComp;
    };
    AssetCapabilities.prototype.viewDownloadCompOptions = function (hasComp) {
        return this.downloadWatermarkComps(hasComp) || this.downloadCleanComps(hasComp) || this.downloadFullComps(hasComp);
    };
    AssetCapabilities.prototype.createAccessInfo = function () {
        return this.userHas('CreateAccessInfo');
    };
    AssetCapabilities.prototype.createSubclips = function () {
        return false;
    };
    AssetCapabilities.prototype.userHas = function (permission) {
        return this.currentUser.hasPermission(permission);
    };
    AssetCapabilities = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser, router_1.Router])
    ], AssetCapabilities);
    return AssetCapabilities;
}());
exports.AssetCapabilities = AssetCapabilities;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYXNzZXQvc2VydmljZXMvYXNzZXQuY2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsbUNBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFDdkUsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFHekM7SUFDRSwyQkFBbUIsV0FBd0IsRUFBUyxLQUFhO1FBQTlDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFJLENBQUM7SUFFL0QsNENBQWdCLEdBQXZCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLGtEQUFzQixHQUE3QixVQUE4QixPQUFnQjtRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLE9BQU8sQ0FBQztJQUMzRCxDQUFDO0lBRU0sOENBQWtCLEdBQXpCLFVBQTBCLE9BQWdCO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksT0FBTyxDQUFDO0lBQ3ZELENBQUM7SUFFTSw2Q0FBaUIsR0FBeEIsVUFBeUIsT0FBZ0I7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxPQUFPLENBQUM7SUFDdEQsQ0FBQztJQUVNLG1EQUF1QixHQUE5QixVQUErQixPQUFnQjtRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVNLDRDQUFnQixHQUF2QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLDBDQUFjLEdBQXJCO1FBRUUsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsVUFBa0I7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFuQ0g7UUFBQyxpQkFBVSxFQUFFOzt5QkFBQTtJQW9DYix3QkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1kseUJBQWlCLG9CQW1DN0IsQ0FBQSIsImZpbGUiOiJhcHAvK2Fzc2V0L3NlcnZpY2VzL2Fzc2V0LmNhcGFiaWxpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXNzZXRDYXBhYmlsaXRpZXMge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyLCBwdWJsaWMgcm91dGU6IFJvdXRlcikgeyB9XG5cbiAgcHVibGljIHZpZXdBc3NldERldGFpbHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckhhcygnVmlld0NsaXBzJyk7XG4gIH1cblxuICBwdWJsaWMgZG93bmxvYWRXYXRlcm1hcmtDb21wcyhoYXNDb21wOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckhhcygnRG93bmxvYWRXYXRlcm1hcmtDb21wcycpICYmIGhhc0NvbXA7XG4gIH1cblxuICBwdWJsaWMgZG93bmxvYWRDbGVhbkNvbXBzKGhhc0NvbXA6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51c2VySGFzKCdEb3dubG9hZENsZWFuQ29tcHMnKSAmJiBoYXNDb21wO1xuICB9XG5cbiAgcHVibGljIGRvd25sb2FkRnVsbENvbXBzKGhhc0NvbXA6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51c2VySGFzKCdEb3dubG9hZEZ1bGxDb21wcycpICYmIGhhc0NvbXA7XG4gIH1cblxuICBwdWJsaWMgdmlld0Rvd25sb2FkQ29tcE9wdGlvbnMoaGFzQ29tcDogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRvd25sb2FkV2F0ZXJtYXJrQ29tcHMoaGFzQ29tcCkgfHwgdGhpcy5kb3dubG9hZENsZWFuQ29tcHMoaGFzQ29tcCkgfHwgdGhpcy5kb3dubG9hZEZ1bGxDb21wcyhoYXNDb21wKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVBY2Nlc3NJbmZvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJIYXMoJ0NyZWF0ZUFjY2Vzc0luZm8nKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVTdWJjbGlwcygpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPOiBVbml0IHRlc3QgdGhpcyBpZi93aGVuIGl0IGhhcyBtb3JlIGZ1bmN0aW9uYWxpdHkgdGhhbiBqdXN0IGEgc2ltcGxlIGJvb2xlYW4hXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHVzZXJIYXMocGVybWlzc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXIuaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uKTtcbiAgfVxufVxuIl19
