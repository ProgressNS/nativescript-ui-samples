import dependencyObservableModule = require("ui/core/dependency-observable");

export class PieDataModel extends dependencyObservableModule.DependencyObservable {
    constructor() {
        super();
        this.initData();
    }

    private initData() {
        this.set("pieSource",
            [
                { Brand: "Audi", Amount: 10 },
                { Brand: "Mercedes", Amount: 76 },
                { Brand: "Fiat", Amount: 60 },
                { Brand: "BMW", Amount: 24 },
                { Brand: "Crysler", Amount: 40 }
            ]);
    }
}
