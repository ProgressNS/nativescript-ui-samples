var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_array_1 = require("data/observable-array");
var listViewModule = require("nativescript-telerik-ui/listview");
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
    };
    ViewModel.prototype.onRemoveItemClick = function (args) {
        this._items.splice(2, 1);
    };
    ViewModel.prototype.initDataItems = function () {
        this._items = new observable_array_1.ObservableArray();
    };
    Object.defineProperty(ViewModel.prototype, "itemAnimation", {
        get: function () {
            return this.get("ItemInsertAnimation");
        },
        set: function (value) {
            this.set("ItemInsertAnimation", value);
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.setItemAnimation = function (insertAnimation) {
        this.itemAnimation = insertAnimation;
    };
    ViewModel.prototype.updateItemAnimation = function () {
        var index = this._animations.index;
        debugger;
        if (index == 0) {
            this.itemAnimation = "Default";
        }
        else if (index == 1) {
            this.itemAnimation = "Fade";
        }
        else if (index == 2) {
            this.itemAnimation = listViewModule.ListViewItemAnimation.Scale;
        }
        else {
            this.itemAnimation = listViewModule.ListViewItemAnimation.Slide;
        }
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
