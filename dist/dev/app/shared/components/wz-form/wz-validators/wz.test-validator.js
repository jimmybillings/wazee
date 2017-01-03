"use strict";
var WzTestValidator = (function () {
    function WzTestValidator() {
    }
    WzTestValidator.startsWithNumber = function (control) {
        return control.value !== '' && !isNaN(control.value.charAt(0)) ? { 'startsWithNumber': true } : null;
    };
    WzTestValidator.validEmail = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(control.value) ? null : {
            'notValidEmail': true
        };
    };
    ;
    return WzTestValidator;
}());
exports.WzTestValidator = WzTestValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy93ei1mb3JtL3d6LXZhbGlkYXRvcnMvd3oudGVzdC12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU1BO0lBQUE7SUFXQSxDQUFDO0lBVlEsZ0NBQWdCLEdBQXZCLFVBQXdCLE9BQW9CO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ3ZHLENBQUM7SUFFTSwwQkFBVSxHQUFqQixVQUFrQixPQUFvQjtRQUNwQyxJQUFJLFlBQVksR0FBRyxtR0FBbUcsQ0FBQztRQUN2SCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHO1lBQy9DLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUM7SUFDSixDQUFDOztJQUNILHNCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSx1QkFBZSxrQkFXM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvd3otZm9ybS93ei12YWxpZGF0b3JzL3d6LnRlc3QtdmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvblJlc3VsdCB7XG4gIFtrZXk6IHN0cmluZ106IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBXelRlc3RWYWxpZGF0b3Ige1xuICBzdGF0aWMgc3RhcnRzV2l0aE51bWJlcihjb250cm9sOiBGb3JtQ29udHJvbCk6IFZhbGlkYXRpb25SZXN1bHQge1xuICAgIHJldHVybiBjb250cm9sLnZhbHVlICE9PSAnJyAmJiAhaXNOYU4oY29udHJvbC52YWx1ZS5jaGFyQXQoMCkpID8geyAnc3RhcnRzV2l0aE51bWJlcic6IHRydWUgfSA6IG51bGw7XG4gIH1cblxuICBzdGF0aWMgdmFsaWRFbWFpbChjb250cm9sOiBGb3JtQ29udHJvbCk6IFZhbGlkYXRpb25SZXN1bHQge1xuICAgIGxldCBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcbiAgICByZXR1cm4gRU1BSUxfUkVHRVhQLnRlc3QoY29udHJvbC52YWx1ZSkgPyBudWxsIDoge1xuICAgICAgJ25vdFZhbGlkRW1haWwnOiB0cnVlXG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==
