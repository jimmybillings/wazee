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
var active_collection_service_1 = require('../../shared/services/active-collection.service');
var CollectionShowResolver = (function () {
    function CollectionShowResolver(activeCollection) {
        this.activeCollection = activeCollection;
    }
    CollectionShowResolver.prototype.resolve = function (route, state) {
        if (Number(this.activeCollection.state.id) === Number(route.params['id'])) {
            return this.activeCollection.getItems(route.params['id'], { i: route.params['i'], n: route.params['n'] });
        }
        else {
            return this.activeCollection.load(route.params['id'], { i: route.params['i'], n: route.params['n'] });
        }
    };
    CollectionShowResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [active_collection_service_1.ActiveCollectionService])
    ], CollectionShowResolver);
    return CollectionShowResolver;
}());
exports.CollectionShowResolver = CollectionShowResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29sbGVjdGlvbi9zZXJ2aWNlcy9jb2xsZWN0aW9uLXNob3cucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQywwQ0FBdUMsaURBQWlELENBQUMsQ0FBQTtBQUl6RjtJQUNFLGdDQUFvQixnQkFBeUM7UUFBekMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtJQUFHLENBQUM7SUFFakUsd0NBQU8sR0FBUCxVQUFRLEtBQTZCLEVBQUUsS0FBMEI7UUFDL0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMxRyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3RHLENBQUM7SUFDSCxDQUFDO0lBVkg7UUFBQyxpQkFBVSxFQUFFOzs4QkFBQTtJQVdiLDZCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSw4QkFBc0IseUJBVWxDLENBQUEiLCJmaWxlIjoiYXBwLytjb2xsZWN0aW9uL3NlcnZpY2VzL2NvbGxlY3Rpb24tc2hvdy5yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEFjdGl2ZUNvbGxlY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYWN0aXZlLWNvbGxlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25TaG93UmVzb2x2ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2ZUNvbGxlY3Rpb246IEFjdGl2ZUNvbGxlY3Rpb25TZXJ2aWNlKSB7fVxuXG4gIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoTnVtYmVyKHRoaXMuYWN0aXZlQ29sbGVjdGlvbi5zdGF0ZS5pZCkgPT09IE51bWJlcihyb3V0ZS5wYXJhbXNbJ2lkJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDb2xsZWN0aW9uLmdldEl0ZW1zKHJvdXRlLnBhcmFtc1snaWQnXSwge2k6IHJvdXRlLnBhcmFtc1snaSddLCBuOiByb3V0ZS5wYXJhbXNbJ24nXX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVDb2xsZWN0aW9uLmxvYWQocm91dGUucGFyYW1zWydpZCddLCB7aTogcm91dGUucGFyYW1zWydpJ10sIG46IHJvdXRlLnBhcmFtc1snbiddfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
