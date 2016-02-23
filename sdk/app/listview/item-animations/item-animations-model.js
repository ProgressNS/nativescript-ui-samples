var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_array_1 = require("data/observable-array");
var observableModule = require("data/observable");
var frameModule = require("ui/frame");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        this.initDataItems();
        this._animations = {
            options: ["Default", "Fade", "Scale", "Slide"],
            index: 0
        };
    }
    Object.defineProperty(ViewModel.prototype, "dataItems", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.onAddItemClick = function (args) {
        var id = Math.round(Math.random() * 100);
        this._items.push(new DataItem(id, "This is a new item: " + id, "This is the new item's description."));
    };
    ViewModel.prototype.onResetClick = function (args) {
        while (this._items.length) {
            this._items.pop();
        }
    };
    ViewModel.prototype.onUpdateItemClick = function (args) {
        for (var index = 0; index < this._items.length; index++) {
            this._items.setItem(index, new DataItem(Math.round(Math.random() * 100), "This is an updated item", "This is the updated item's description."));
        }
        var listView = frameModule.topmost().getViewById("ls");
        if (listView._ios != undefined) {
            listView._ios.reloadData();
        }
    };
    ViewModel.prototype.onRemoveItemClick = function (args) {
        this._items.splice(this._items.length - 1, 1);
    };
    ViewModel.prototype.initDataItems = function () {
        this._items = new observable_array_1.ObservableArray();
    };
    ViewModel.prototype.updateItemAnimation = function () {
        var index = this._animations.index;
        var b = this._animations.options[index];
        var listView = frameModule.topmost().currentPage.getViewById("ls");
        listView.listViewLayout.itemInsertAnimation = this._animations.options[index];
        listView.listViewLayout.itemDeleteAnimation = this._animations.options[index];
    };
    ViewModel.prototype.onOptionsTapped = function () {
        var navigationEntry = {
            moduleName: "/calendar/options-menu/options",
            context: this._animations,
            animated: true
        };
        frameModule.topmost().navigate(navigationEntry);
    };
    return ViewModel;
})(observableModule.Observable);
exports.ViewModel = ViewModel;
var DataItem = (function () {
    function DataItem(id, name, description) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
    return DataItem;
})();
exports.DataItem = DataItem;
