var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observableModule = require("ui/core/dependency-observable");
var DrawerCallbacksModel = (function (_super) {
    __extends(DrawerCallbacksModel, _super);
    function DrawerCallbacksModel() {
        _super.call(this);
    }
    DrawerCallbacksModel.prototype.onDrawerOpening = function () {
        this.set("currentDrawerNotification", "Drawer opening");
    };
    DrawerCallbacksModel.prototype.onDrawerOpened = function () {
        this.set("currentDrawerNotification", "Drawer opened");
    };
    DrawerCallbacksModel.prototype.onDrawerClosing = function () {
        this.set("currentDrawerNotification", "Drawer closing");
    };
    DrawerCallbacksModel.prototype.onDrawerClosed = function () {
        this.set("currentDrawerNotification", "Drawer closed");
    };
    return DrawerCallbacksModel;
})(observableModule.DependencyObservable);
exports.DrawerCallbacksModel = DrawerCallbacksModel;
