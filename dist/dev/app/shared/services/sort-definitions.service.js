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
var store_1 = require('@ngrx/store');
var core_1 = require('@angular/core');
var user_preference_service_1 = require('./user-preference.service');
var api_service_1 = require('./api.service');
var api_interface_1 = require('../interfaces/api.interface');
var initSortState = {
    sorts: [],
    currentSort: {}
};
exports.sortDefinitions = function (state, action) {
    if (state === void 0) { state = initSortState; }
    switch (action.type) {
        case 'SORTS.UPDATE_DEFINITIONS':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
var SortDefinitionsService = (function () {
    function SortDefinitionsService(api, store, userPreference) {
        this.api = api;
        this.store = store;
        this.userPreference = userPreference;
        this.data = this.store.select('sortDefinitions');
    }
    SortDefinitionsService.prototype.update = function (params) {
        this.store.dispatch({ type: 'SORTS.UPDATE_DEFINITIONS', payload: params });
    };
    SortDefinitionsService.prototype.getSortDefinitions = function () {
        var _this = this;
        return this.api.get(api_interface_1.Api.Identities, 'sortDefinition/list').flatMap(function (response) {
            var stickySort = _this.findStickySort(response.list) || response.list[0].first;
            _this.update({ sorts: response.list, currentSort: stickySort });
            return _this.data;
        });
    };
    SortDefinitionsService.prototype.findStickySort = function (sorts) {
        for (var _i = 0, sorts_1 = sorts; _i < sorts_1.length; _i++) {
            var group = sorts_1[_i];
            for (var definition in group) {
                if (group[definition].id === parseInt(this.userPreference.state.sortId)) {
                    return group[definition];
                }
                ;
            }
            ;
        }
        ;
    };
    SortDefinitionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, store_1.Store, user_preference_service_1.UserPreferenceService])
    ], SortDefinitionsService);
    return SortDefinitionsService;
}());
exports.SortDefinitionsService = SortDefinitionsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvc29ydC1kZWZpbml0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQkFBNkMsYUFBYSxDQUFDLENBQUE7QUFDM0QscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2xFLDRCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyw4QkFBb0IsNkJBQTZCLENBQUMsQ0FBQTtBQUVsRCxJQUFNLGFBQWEsR0FBUTtJQUN6QixLQUFLLEVBQUUsRUFBRTtJQUNULFdBQVcsRUFBRSxFQUFFO0NBQ2hCLENBQUM7QUFFVyx1QkFBZSxHQUF1QixVQUFDLEtBQXFCLEVBQUUsTUFBYztJQUFyQyxxQkFBcUIsR0FBckIscUJBQXFCO0lBQ3ZFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssMEJBQTBCO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xEO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBR0Y7SUFHRSxnQ0FBb0IsR0FBZSxFQUFVLEtBQWlCLEVBQVUsY0FBcUM7UUFBekYsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDM0csSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSx1Q0FBTSxHQUFiLFVBQWMsTUFBVztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU0sbURBQWtCLEdBQXpCO1FBQUEsaUJBTUM7UUFMQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQUcsQ0FBQyxVQUFVLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFhO1lBQy9FLElBQUksVUFBVSxHQUFRLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25GLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUMvRCxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywrQ0FBYyxHQUF0QixVQUF1QixLQUFpQjtRQUN0QyxHQUFHLENBQUMsQ0FBYyxVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxDQUFDO1lBQW5CLElBQUksS0FBSyxjQUFBO1lBQ1osR0FBRyxDQUFDLENBQUMsSUFBSSxVQUFVLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUFBLENBQUM7WUFDSixDQUFDO1lBQUEsQ0FBQztTQUNIO1FBQUEsQ0FBQztJQUNKLENBQUM7SUE1Qkg7UUFBQyxpQkFBVSxFQUFFOzs4QkFBQTtJQTZCYiw2QkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksOEJBQXNCLHlCQTRCbEMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL3NvcnQtZGVmaW5pdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlLCBBY3Rpb25SZWR1Y2VyLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBVc2VyUHJlZmVyZW5jZVNlcnZpY2UgfSBmcm9tICcuL3VzZXItcHJlZmVyZW5jZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXBpLmludGVyZmFjZSc7XG5cbmNvbnN0IGluaXRTb3J0U3RhdGU6IGFueSA9IHtcbiAgc29ydHM6IFtdLFxuICBjdXJyZW50U29ydDoge31cbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0RGVmaW5pdGlvbnM6IEFjdGlvblJlZHVjZXI8YW55PiA9IChzdGF0ZSA9IGluaXRTb3J0U3RhdGUsIGFjdGlvbjogQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTT1JUUy5VUERBVEVfREVGSU5JVElPTlMnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvcnREZWZpbml0aW9uc1NlcnZpY2Uge1xuICBwdWJsaWMgZGF0YTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LCBwcml2YXRlIHVzZXJQcmVmZXJlbmNlOiBVc2VyUHJlZmVyZW5jZVNlcnZpY2UpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnN0b3JlLnNlbGVjdCgnc29ydERlZmluaXRpb25zJyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKHBhcmFtczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdTT1JUUy5VUERBVEVfREVGSU5JVElPTlMnLCBwYXlsb2FkOiBwYXJhbXMgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U29ydERlZmluaXRpb25zKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLmdldChBcGkuSWRlbnRpdGllcywgJ3NvcnREZWZpbml0aW9uL2xpc3QnKS5mbGF0TWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICBsZXQgc3RpY2t5U29ydDogYW55ID0gdGhpcy5maW5kU3RpY2t5U29ydChyZXNwb25zZS5saXN0KSB8fCByZXNwb25zZS5saXN0WzBdLmZpcnN0O1xuICAgICAgdGhpcy51cGRhdGUoeyBzb3J0czogcmVzcG9uc2UubGlzdCwgY3VycmVudFNvcnQ6IHN0aWNreVNvcnQgfSk7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU3RpY2t5U29ydChzb3J0czogQXJyYXk8YW55Pik6IGFueSB7XG4gICAgZm9yIChsZXQgZ3JvdXAgb2Ygc29ydHMpIHtcbiAgICAgIGZvciAobGV0IGRlZmluaXRpb24gaW4gZ3JvdXApIHtcbiAgICAgICAgaWYgKGdyb3VwW2RlZmluaXRpb25dLmlkID09PSBwYXJzZUludCh0aGlzLnVzZXJQcmVmZXJlbmNlLnN0YXRlLnNvcnRJZCkpIHtcbiAgICAgICAgICByZXR1cm4gZ3JvdXBbZGVmaW5pdGlvbl07XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH1cbn0iXX0=
