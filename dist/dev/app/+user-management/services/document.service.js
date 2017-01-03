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
var api_service_1 = require('../../shared/services/api.service');
var api_interface_1 = require('../../shared/interfaces/api.interface');
var DocumentService = (function () {
    function DocumentService(api) {
        this.api = api;
    }
    DocumentService.prototype.downloadActiveTosDocument = function () {
        var _this = this;
        return this.api.get(api_interface_1.Api.Identities, 'document/public/name/TOS').flatMap(function (response) {
            _this.activeVersionId = response[0].activeVersionId;
            return _this.api.get(api_interface_1.Api.Identities, "document/public/downloadFile/" + response[0].activeVersionId, { download: true });
        }).map(function (response) {
            return response.text();
        });
    };
    DocumentService.prototype.agreeUserToTerms = function () {
        this.api.post(api_interface_1.Api.Identities, "document/version/" + this.activeVersionId + "/agree").take(1).subscribe();
    };
    DocumentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], DocumentService);
    return DocumentService;
}());
exports.DocumentService = DocumentService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdXNlci1tYW5hZ2VtZW50L3NlcnZpY2VzL2RvY3VtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyw0QkFBMkIsbUNBQW1DLENBQUMsQ0FBQTtBQUMvRCw4QkFBaUMsdUNBQXVDLENBQUMsQ0FBQTtBQUt6RTtJQUVFLHlCQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFJLENBQUM7SUFFakMsbURBQXlCLEdBQWhDO1FBQUEsaUJBT0M7UUFOQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQUcsQ0FBQyxVQUFVLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFxQjtZQUM1RixLQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7WUFDbkQsTUFBTSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFHLENBQUMsVUFBVSxFQUFFLGtDQUFnQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBaUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3pILENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCO1lBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQUcsQ0FBQyxVQUFVLEVBQUUsc0JBQW9CLElBQUksQ0FBQyxlQUFlLFdBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0RyxDQUFDO0lBaEJIO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUFpQmIsc0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLHVCQUFlLGtCQWdCM0IsQ0FBQSIsImZpbGUiOiJhcHAvK3VzZXItbWFuYWdlbWVudC9zZXJ2aWNlcy9kb2N1bWVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBcGksIEFwaVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvYXBpLmludGVyZmFjZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRTZXJ2aWNlIHtcbiAgcHVibGljIGFjdGl2ZVZlcnNpb25JZDogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSkgeyB9XG5cbiAgcHVibGljIGRvd25sb2FkQWN0aXZlVG9zRG9jdW1lbnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KEFwaS5JZGVudGl0aWVzLCAnZG9jdW1lbnQvcHVibGljL25hbWUvVE9TJykuZmxhdE1hcCgocmVzcG9uc2U6IEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVZlcnNpb25JZCA9IHJlc3BvbnNlWzBdLmFjdGl2ZVZlcnNpb25JZDtcbiAgICAgIHJldHVybiB0aGlzLmFwaS5nZXQoQXBpLklkZW50aXRpZXMsIGBkb2N1bWVudC9wdWJsaWMvZG93bmxvYWRGaWxlLyR7cmVzcG9uc2VbMF0uYWN0aXZlVmVyc2lvbklkfWAsIHsgZG93bmxvYWQ6IHRydWUgfSk7XG4gICAgfSkubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYWdyZWVVc2VyVG9UZXJtcygpOiB2b2lkIHtcbiAgICB0aGlzLmFwaS5wb3N0KEFwaS5JZGVudGl0aWVzLCBgZG9jdW1lbnQvdmVyc2lvbi8ke3RoaXMuYWN0aXZlVmVyc2lvbklkfS9hZ3JlZWApLnRha2UoMSkuc3Vic2NyaWJlKCk7XG4gIH1cbn0iXX0=
