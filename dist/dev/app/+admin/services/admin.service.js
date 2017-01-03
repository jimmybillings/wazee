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
var admin_store_1 = require('./admin.store');
var AdminService = (function () {
    function AdminService(api, store) {
        this.api = api;
        this.store = store;
        this.data = this.store.data;
    }
    AdminService.prototype.getResourceIndex = function (queryObject, resourceType) {
        var _this = this;
        var params = JSON.parse(JSON.stringify(queryObject));
        params.i = (parseFloat(params.i) - 1).toString();
        return this.api.get(api_interface_1.Api.Identities, resourceType + "/searchFields", { parameters: params }).do(function (response) {
            _this.store.set(response);
        });
    };
    AdminService.prototype.postResource = function (resourceType, formData) {
        return this.api.post(api_interface_1.Api.Identities, resourceType, { body: formData });
    };
    AdminService.prototype.putResource = function (resourceType, formData) {
        return this.api.put(api_interface_1.Api.Identities, resourceType + "/" + formData.id, { body: formData });
    };
    AdminService.prototype.buildSearchParameters = function (filterParams) {
        var params = this.sanitizeFormInput(filterParams);
        var rawFields = this.buildFields(params);
        var rawValues = this.buildValues(params);
        var fields = rawFields.filter(this.removeFields).join(',');
        var values = rawValues.filter(this.removeFields).join(',');
        return { fields: fields, values: values };
    };
    AdminService.prototype.sanitizeFormInput = function (fields) {
        for (var field in fields) {
            if (this.dateFieldIsEmpty(fields, field)) {
                fields[field] = Date.now();
            }
            else if (fields[field] === '') {
                delete fields[field];
            }
        }
        return fields;
    };
    AdminService.prototype.dateFieldIsEmpty = function (fields, field) {
        return (field === 'createdOn' || field === 'lastUpdated') && fields[field] === '';
    };
    AdminService.prototype.buildFields = function (filterParams) {
        var map = { 'before': ':LT:', 'after': ':GT:' };
        var fields = Object.keys(filterParams);
        return fields.reduce(function (prev, current, index) {
            if (current === 'DATE') {
                prev.push(current + map[filterParams[current]] + fields[index + 1]);
            }
            else {
                prev.push(current);
            }
            return prev;
        }, []);
    };
    AdminService.prototype.buildValues = function (filterParams) {
        var _this = this;
        return Object.keys(filterParams).reduce(function (prev, current) {
            if (_this.valueIsADateString(filterParams, current)) {
                var date = new Date(filterParams[current]);
                prev.push(encodeURI((date.getTime()).toString()));
            }
            else {
                prev.push(encodeURI(filterParams[current]));
            }
            return prev;
        }, []);
    };
    AdminService.prototype.valueIsADateString = function (fields, field) {
        return ['createdOn', 'lastUpdated'].indexOf(field) > -1 && typeof (fields[field]) === 'string';
    };
    AdminService.prototype.removeFields = function (field) {
        return ['createdOn', 'lastUpdated', 'before', 'after'].indexOf(field) === -1;
    };
    AdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, admin_store_1.AdminStore])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWRtaW4vc2VydmljZXMvYWRtaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDRCQUEyQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQy9ELDhCQUFvQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQzVELDRCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUczQztJQUVFLHNCQUFtQixHQUFlLEVBQVUsS0FBaUI7UUFBMUMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDM0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRU0sdUNBQWdCLEdBQXZCLFVBQXdCLFdBQTJCLEVBQUUsWUFBb0I7UUFBekUsaUJBT0M7UUFOQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQUcsQ0FBQyxVQUFVLEVBQUssWUFBWSxrQkFBZSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQUEsUUFBUTtZQUNyRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxtQ0FBWSxHQUFuQixVQUFvQixZQUFvQixFQUFFLFFBQXdCO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxt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O0FBQUQsQ0FqRkEsQUFpRkMsSUFBQTtBQWpGWSxvQkFBWSxlQWlGeEIsQ0FBQSIsImZpbGUiOiJhcHAvK2FkbWluL3NlcnZpY2VzL2FkbWluLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZG1pblJlc3BvbnNlLCBBZG1pblVybFBhcmFtcywgQWRtaW5Gb3JtUGFyYW1zLCBBY2NvdW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvYWRtaW4uaW50ZXJmYWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2FwaS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWRtaW5TdG9yZSB9IGZyb20gJy4vYWRtaW4uc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5TZXJ2aWNlIHtcbiAgcHVibGljIGRhdGE6IE9ic2VydmFibGU8YW55PjtcbiAgY29uc3RydWN0b3IocHVibGljIGFwaTogQXBpU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogQWRtaW5TdG9yZSkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuc3RvcmUuZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXNvdXJjZUluZGV4KHF1ZXJ5T2JqZWN0OiBBZG1pblVybFBhcmFtcywgcmVzb3VyY2VUeXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFkbWluUmVzcG9uc2U+IHtcbiAgICBsZXQgcGFyYW1zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShxdWVyeU9iamVjdCkpO1xuICAgIHBhcmFtcy5pID0gKHBhcnNlRmxvYXQocGFyYW1zLmkpIC0gMSkudG9TdHJpbmcoKTtcblxuICAgIHJldHVybiB0aGlzLmFwaS5nZXQoQXBpLklkZW50aXRpZXMsIGAke3Jlc291cmNlVHlwZX0vc2VhcmNoRmllbGRzYCwgeyBwYXJhbWV0ZXJzOiBwYXJhbXMgfSkuZG8ocmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5zZXQocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHBvc3RSZXNvdXJjZShyZXNvdXJjZVR5cGU6IHN0cmluZywgZm9ybURhdGE6IFVzZXIgfCBBY2NvdW50KTogT2JzZXJ2YWJsZTxBZG1pblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLnBvc3QoQXBpLklkZW50aXRpZXMsIHJlc291cmNlVHlwZSwgeyBib2R5OiBmb3JtRGF0YSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBwdXRSZXNvdXJjZShyZXNvdXJjZVR5cGU6IHN0cmluZywgZm9ybURhdGE6IFVzZXIgfCBBY2NvdW50KTogT2JzZXJ2YWJsZTxBZG1pblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpLnB1dChBcGkuSWRlbnRpdGllcywgYCR7cmVzb3VyY2VUeXBlfS8ke2Zvcm1EYXRhLmlkfWAsIHsgYm9keTogZm9ybURhdGEgfSk7XG4gIH1cblxuICBwdWJsaWMgYnVpbGRTZWFyY2hQYXJhbWV0ZXJzKGZpbHRlclBhcmFtczogQWRtaW5Gb3JtUGFyYW1zKTogQWRtaW5Gb3JtUGFyYW1zIHtcbiAgICBsZXQgcGFyYW1zID0gdGhpcy5zYW5pdGl6ZUZvcm1JbnB1dChmaWx0ZXJQYXJhbXMpO1xuICAgIGxldCByYXdGaWVsZHMgPSB0aGlzLmJ1aWxkRmllbGRzKHBhcmFtcyk7XG4gICAgbGV0IHJhd1ZhbHVlcyA9IHRoaXMuYnVpbGRWYWx1ZXMocGFyYW1zKTtcbiAgICBsZXQgZmllbGRzID0gcmF3RmllbGRzLmZpbHRlcih0aGlzLnJlbW92ZUZpZWxkcykuam9pbignLCcpO1xuICAgIGxldCB2YWx1ZXMgPSByYXdWYWx1ZXMuZmlsdGVyKHRoaXMucmVtb3ZlRmllbGRzKS5qb2luKCcsJyk7XG4gICAgcmV0dXJuIHsgZmllbGRzLCB2YWx1ZXMgfTtcbiAgfVxuXG4gIC8vIEVORCBPRiBQVUJMSUMgSU5URVJGQUNFIC0gRXZlcnl0aGluZyBiZWxvdyBpcyB0byBmb3JtYXQgdGhlIHNlYXJjaCByZXF1ZXN0XG5cbiAgcHJpdmF0ZSBzYW5pdGl6ZUZvcm1JbnB1dChmaWVsZHM6IGFueSk6IEFkbWluRm9ybVBhcmFtcyB7XG4gICAgZm9yICh2YXIgZmllbGQgaW4gZmllbGRzKSB7XG4gICAgICBpZiAodGhpcy5kYXRlRmllbGRJc0VtcHR5KGZpZWxkcywgZmllbGQpKSB7XG4gICAgICAgIGZpZWxkc1tmaWVsZF0gPSBEYXRlLm5vdygpO1xuICAgICAgfSBlbHNlIGlmIChmaWVsZHNbZmllbGRdID09PSAnJykge1xuICAgICAgICBkZWxldGUgZmllbGRzW2ZpZWxkXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpZWxkcztcbiAgfVxuXG4gIHByaXZhdGUgZGF0ZUZpZWxkSXNFbXB0eShmaWVsZHM6IGFueSwgZmllbGQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoZmllbGQgPT09ICdjcmVhdGVkT24nIHx8IGZpZWxkID09PSAnbGFzdFVwZGF0ZWQnKSAmJiBmaWVsZHNbZmllbGRdID09PSAnJztcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRGaWVsZHMoZmlsdGVyUGFyYW1zOiBhbnkpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBsZXQgbWFwOiBhbnkgPSB7ICdiZWZvcmUnOiAnOkxUOicsICdhZnRlcic6ICc6R1Q6JyB9O1xuICAgIGxldCBmaWVsZHM6IEFycmF5PHN0cmluZz4gPSBPYmplY3Qua2V5cyhmaWx0ZXJQYXJhbXMpO1xuICAgIHJldHVybiBmaWVsZHMucmVkdWNlKChwcmV2LCBjdXJyZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQgPT09ICdEQVRFJykge1xuICAgICAgICBwcmV2LnB1c2goY3VycmVudCArIG1hcFtmaWx0ZXJQYXJhbXNbY3VycmVudF1dICsgZmllbGRzW2luZGV4ICsgMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldi5wdXNoKGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFZhbHVlcyhmaWx0ZXJQYXJhbXM6IGFueSk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJQYXJhbXMpLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMudmFsdWVJc0FEYXRlU3RyaW5nKGZpbHRlclBhcmFtcywgY3VycmVudCkpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmaWx0ZXJQYXJhbXNbY3VycmVudF0pO1xuICAgICAgICBwcmV2LnB1c2goZW5jb2RlVVJJKChkYXRlLmdldFRpbWUoKSkudG9TdHJpbmcoKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldi5wdXNoKGVuY29kZVVSSShmaWx0ZXJQYXJhbXNbY3VycmVudF0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsdWVJc0FEYXRlU3RyaW5nKGZpZWxkczogYW55LCBmaWVsZDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFsnY3JlYXRlZE9uJywgJ2xhc3RVcGRhdGVkJ10uaW5kZXhPZihmaWVsZCkgPiAtMSAmJiB0eXBlb2YoZmllbGRzW2ZpZWxkXSkgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVGaWVsZHMoZmllbGQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBbJ2NyZWF0ZWRPbicsICdsYXN0VXBkYXRlZCcsICdiZWZvcmUnLCAnYWZ0ZXInXS5pbmRleE9mKGZpZWxkKSA9PT0gLTE7XG4gIH1cbn1cbiJdfQ==
