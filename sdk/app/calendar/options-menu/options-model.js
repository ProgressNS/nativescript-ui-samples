var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observableModule = require("data/observable");
var frameModule = require("ui/frame");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel(selectionInfo) {
        _super.call(this);
        this._info = selectionInfo;
        this.items = this._info.options;
    }
    Object.defineProperty(ViewModel.prototype, "items", {
        get: function () {
            return this.get("myItems");
        },
        set: function (value) {
            this.set("myItems", value);
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.selectRow = function (index) {
        var listView = frameModule.topmost().getViewById("listView");
        listView.ios.selectRowAtIndexPathAnimatedScrollPosition(NSIndexPath.indexPathForItemInSection(index, 0), false, 0);
    };
    ViewModel.prototype.onSelectedRow = function (row) {
        debugger;
        this._info.index = row.index;
        frameModule.topmost().goBack();
    };
    return ViewModel;
})(observableModule.Observable);
exports.ViewModel = ViewModel;
