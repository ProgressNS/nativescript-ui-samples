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
            options: ["None", "Single", "Multiple", "Range"],
            index: 0
        };
    }
    Object.defineProperty(ViewModel.prototype, "selectionMode", {
        get: function () {
            return this.get("SelectionMode");
        },
        set: function (value) {
            this.set("SelectionMode", value);
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.setSelectionMode = function (selectionMode) {
        this.selectionMode = selectionMode;
    };
    ViewModel.prototype.updateSelectionMode = function () {
        var index = this._selectionInfo.index;
        if (index == 0) {
            this.selectionMode = calendarModule.CalendarSelectionMode.None;
        }
        else if (index == 1) {
            this.selectionMode = calendarModule.CalendarSelectionMode.Single;
        }
        else if (index == 2) {
            this.selectionMode = calendarModule.CalendarSelectionMode.Multiple;
        }
        else {
            this.selectionMode = calendarModule.CalendarSelectionMode.Range;
        }
    };
    ViewModel.prototype.onOptionsTapped = function () {
        var navigationEntry = {
            moduleName: "./calendar/options-menu/options",
            context: this._selectionInfo,
            animated: true
        };
        frameModule.topmost().navigate(navigationEntry);
    };
    return ViewModel;
})(observableModule.Observable);
exports.ViewModel = ViewModel;
