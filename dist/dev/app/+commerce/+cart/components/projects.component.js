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
var ProjectsComponent = (function () {
    function ProjectsComponent() {
        this.readOnly = false;
        this.projectsNotify = new core_1.EventEmitter();
    }
    ProjectsComponent.prototype.projectsOtherThan = function (currentProject) {
        return this.projects.filter(function (project) { return project.id !== currentProject.id; });
    };
    ProjectsComponent.prototype.lineItemCountFor = function (project) {
        return (project.lineItems || []).length;
    };
    ProjectsComponent.prototype.addProject = function () {
        this.projectsNotify.emit({ type: 'ADD_PROJECT' });
    };
    ProjectsComponent.prototype.remove = function (project) {
        this.projectsNotify.emit({ type: 'REMOVE_PROJECT', payload: project });
    };
    ProjectsComponent.prototype.edit = function (project, formValue) {
        Object.assign(project, formValue);
        this.projectsNotify.emit({ type: 'UPDATE_PROJECT', payload: project });
    };
    ProjectsComponent.prototype.delegate = function (message) {
        this.projectsNotify.emit(message);
    };
    ProjectsComponent.prototype.selectProject = function (project) {
        var _this = this;
        this.selectedProject = project;
        this.config.form.items = this.config.form.items.map(function (item) {
            item.value = _this.selectedProject[item.name];
            return item;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProjectsComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProjectsComponent.prototype, "projects", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ProjectsComponent.prototype, "readOnly", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProjectsComponent.prototype, "projectsNotify", void 0);
    ProjectsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'projects-component',
            templateUrl: 'projects.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY29tbWVyY2UvK2NhcnQvY29tcG9uZW50cy9wcm9qZWN0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRixlQUFlLENBQUMsQ0FBQTtBQVdoRztJQUFBO1FBR1csYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN6QixtQkFBYyxHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQW1DOUUsQ0FBQztJQWhDUSw2Q0FBaUIsR0FBeEIsVUFBeUIsY0FBdUI7UUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLENBQUMsRUFBRSxFQUFoQyxDQUFnQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVNLDRDQUFnQixHQUF2QixVQUF3QixPQUFZO1FBQ2xDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFTSxzQ0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLGtDQUFNLEdBQWIsVUFBYyxPQUFnQjtRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sZ0NBQUksR0FBWCxVQUFZLE9BQWdCLEVBQUUsU0FBYztRQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sb0NBQVEsR0FBZixVQUFnQixPQUFZO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSx5Q0FBYSxHQUFwQixVQUFxQixPQUFnQjtRQUFyQyxpQkFNQztRQUxDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUTtZQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFyQ0Q7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzZEQUFBO0lBWFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzs7eUJBQUE7SUF5Q0Ysd0JBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBO0FBdkNZLHlCQUFpQixvQkF1QzdCLENBQUEiLCJmaWxlIjoiYXBwLytjb21tZXJjZS8rY2FydC9jb21wb25lbnRzL3Byb2plY3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vY2FydC5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdwcm9qZWN0cy1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2plY3RzLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFByb2plY3RzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpIHByb2plY3RzOiBBcnJheTxQcm9qZWN0PjtcbiAgQElucHV0KCkgcmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHByb2plY3RzTm90aWZ5OiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuICBwcml2YXRlIHNlbGVjdGVkUHJvamVjdDogUHJvamVjdDtcblxuICBwdWJsaWMgcHJvamVjdHNPdGhlclRoYW4oY3VycmVudFByb2plY3Q6IFByb2plY3QpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBjdXJyZW50UHJvamVjdC5pZCk7XG4gIH1cblxuICBwdWJsaWMgbGluZUl0ZW1Db3VudEZvcihwcm9qZWN0OiBhbnkpOiBudW1iZXIge1xuICAgIHJldHVybiAocHJvamVjdC5saW5lSXRlbXMgfHwgW10pLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyBhZGRQcm9qZWN0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvamVjdHNOb3RpZnkuZW1pdCh7IHR5cGU6ICdBRERfUFJPSkVDVCcgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKHByb2plY3Q6IFByb2plY3QpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3RzTm90aWZ5LmVtaXQoeyB0eXBlOiAnUkVNT1ZFX1BST0pFQ1QnLCBwYXlsb2FkOiBwcm9qZWN0IH0pO1xuICB9XG5cbiAgcHVibGljIGVkaXQocHJvamVjdDogUHJvamVjdCwgZm9ybVZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3QsIGZvcm1WYWx1ZSk7XG4gICAgdGhpcy5wcm9qZWN0c05vdGlmeS5lbWl0KHsgdHlwZTogJ1VQREFURV9QUk9KRUNUJywgcGF5bG9hZDogcHJvamVjdCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxlZ2F0ZShtZXNzYWdlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3RzTm90aWZ5LmVtaXQobWVzc2FnZSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0UHJvamVjdChwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuY29uZmlnLmZvcm0uaXRlbXMgPSB0aGlzLmNvbmZpZy5mb3JtLml0ZW1zLm1hcCgoaXRlbTphbnkpID0+IHtcbiAgICAgIGl0ZW0udmFsdWUgPSB0aGlzLnNlbGVjdGVkUHJvamVjdFtpdGVtLm5hbWVdO1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
