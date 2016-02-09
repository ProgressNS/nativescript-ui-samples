var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var calendarModule = require("nativescript-telerik-ui/calendar");
var observableModule = require("data/observable");
var frameModule = require("ui/frame");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        this._selectionInfo = {
            index: 0
        };
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
    ViewModel.prototype.updateViewMode = function () {
        var index = this._selectionInfo.index;
        if (index == 0) {
            this.viewMode = calendarModule.CalendarViewMode.Week;
        }
        else if (index == 1) {
            this.viewMode = calendarModule.CalendarViewMode.Month;
        }
        else if (index == 2) {
            this.viewMode = calendarModule.CalendarViewMode.MonthNames;
        }
        else {
            this.viewMode = calendarModule.CalendarViewMode.Year;
        }
    };
    ViewModel.prototype.onOptionsTapped = function () {
        var navigationEntry = {
            moduleName: "./calendar/view-modes/options",
            context: this._selectionInfo,
            animated: true
        };
        frameModule.topmost().navigate(navigationEntry);
    };
    return ViewModel;
})(observableModule.Observable);
exports.ViewModel = ViewModel;
