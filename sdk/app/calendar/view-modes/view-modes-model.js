var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var calendarModule = require("nativescript-telerik-ui/calendar");
var observableModule = require("data/observable");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        this.viewMode = calendarModule.CalendarViewMode.Week;
    }
    Object.defineProperty(ViewModel.prototype, "viewMode", {
        get: function () {
            return this.get("ViewMode");
        },
        set: function (value) {
            this.set("ViewMode", value);
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.setViewMode = function (viewMode) {
        this.viewMode = viewMode;
    };
    return ViewModel;
})(observableModule.Observable);
exports.ViewModel = ViewModel;
