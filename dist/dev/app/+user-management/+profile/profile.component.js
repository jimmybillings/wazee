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
var ProfileComponent = (function () {
    function ProfileComponent(currentUser) {
        this.currentUser = currentUser;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription =
            this.currentUser.data.subscribe(function (user) {
                return _this.user = user;
            });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile-component',
            templateUrl: 'profile.html'
        }), 
        __metadata('design:paramtypes', [current_user_model_1.CurrentUser])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rdXNlci1tYW5hZ2VtZW50Lytwcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsbUNBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFVdkU7SUFJRSwwQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBRWpELG1DQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxnQkFBZ0I7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBVTtnQkFDekMsT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7WUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFwQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGNBQWM7U0FDNUIsQ0FBQzs7d0JBQUE7SUFpQkYsdUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLHdCQUFnQixtQkFlNUIsQ0FBQSIsImZpbGUiOiJhcHAvK3VzZXItbWFuYWdlbWVudC8rcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2N1cnJlbnQtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3Byb2ZpbGUtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9maWxlLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcHVibGljIHVzZXI6IFVzZXI7XG4gIHByaXZhdGUgdXNlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24gPVxuICAgICAgdGhpcy5jdXJyZW50VXNlci5kYXRhLnN1YnNjcmliZSgodXNlcjogVXNlcikgPT5cbiAgICAgICAgdGhpcy51c2VyID0gdXNlcik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
