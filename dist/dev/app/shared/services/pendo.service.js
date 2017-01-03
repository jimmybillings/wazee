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
var PendoService = (function () {
    function PendoService() {
    }
    PendoService.prototype.initialize = function (user) {
        var userUniqueIdentifier = user.siteName + "-" + user.id + "-" + user.firstName.toLowerCase() + "-" + user.lastName.toLowerCase();
        var accountUniqueIdentifier = user.siteName + "-" + user.accountId;
        pendo.initialize({
            apiKey: '7e5da402-5d29-41b0-5579-6e149b0a28f2',
            visitor: { id: userUniqueIdentifier, email: user.emailAddress },
            account: { id: accountUniqueIdentifier }
        });
    };
    PendoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PendoService);
    return PendoService;
}());
exports.PendoService = PendoService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvcGVuZG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBSzNDO0lBQUE7SUFVQSxDQUFDO0lBVFEsaUNBQVUsR0FBakIsVUFBa0IsSUFBUztRQUN6QixJQUFJLG9CQUFvQixHQUFjLElBQUksQ0FBQyxRQUFRLFNBQUksSUFBSSxDQUFDLEVBQUUsU0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFJLENBQUM7UUFDaEksSUFBSSx1QkFBdUIsR0FBYyxJQUFJLENBQUMsUUFBUSxTQUFJLElBQUksQ0FBQyxTQUFXLENBQUM7UUFDM0UsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNmLE1BQU0sRUFBRSxzQ0FBc0M7WUFDOUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQy9ELE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBVkg7UUFBQyxpQkFBVSxFQUFFOztvQkFBQTtJQVdiLG1CQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxvQkFBWSxlQVV4QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvcGVuZG8uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSB2YXIgcGVuZG86IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBlbmRvU2VydmljZSB7XG4gIHB1YmxpYyBpbml0aWFsaXplKHVzZXI6IGFueSk6IHZvaWQge1xuICAgIGxldCB1c2VyVW5pcXVlSWRlbnRpZmllcjogc3RyaW5nID0gYCR7dXNlci5zaXRlTmFtZX0tJHt1c2VyLmlkfS0ke3VzZXIuZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCl9LSR7dXNlci5sYXN0TmFtZS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgbGV0IGFjY291bnRVbmlxdWVJZGVudGlmaWVyOiBzdHJpbmcgPSBgJHt1c2VyLnNpdGVOYW1lfS0ke3VzZXIuYWNjb3VudElkfWA7XG4gICAgcGVuZG8uaW5pdGlhbGl6ZSh7XG4gICAgICBhcGlLZXk6ICc3ZTVkYTQwMi01ZDI5LTQxYjAtNTU3OS02ZTE0OWIwYTI4ZjInLFxuICAgICAgdmlzaXRvcjogeyBpZDogdXNlclVuaXF1ZUlkZW50aWZpZXIsIGVtYWlsOiB1c2VyLmVtYWlsQWRkcmVzcyB9LFxuICAgICAgYWNjb3VudDogeyBpZDogYWNjb3VudFVuaXF1ZUlkZW50aWZpZXIgfVxuICAgIH0pO1xuICB9XG59Il19
