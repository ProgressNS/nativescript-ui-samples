var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dependencyObservableModule = require("ui/core/dependency-observable");
var PieDataModel = (function (_super) {
    __extends(PieDataModel, _super);
    function PieDataModel() {
        _super.call(this);
        this.initData();
    }
    PieDataModel.prototype.initData = function () {
        this.set("pieSource", [
            { Brand: "Audi", Amount: 10 },
            { Brand: "Mercedes", Amount: 76 },
            { Brand: "Fiat", Amount: 60 },
            { Brand: "BMW", Amount: 24 },
            { Brand: "Crysler", Amount: 40 }
        ]);
        this.set("sourceItems", [
            { Name: "Groceries", Sales: 25, Margin: 10 },
            { Name: "Tools", Sales: 34, Margin: 20 },
            { Name: "Electronics", Sales: 15, Margin: 25 },
            { Name: "Gardening", Sales: 40, Margin: 5 }
        ]);
    };
    return PieDataModel;
})(dependencyObservableModule.DependencyObservable);
exports.PieDataModel = PieDataModel;
