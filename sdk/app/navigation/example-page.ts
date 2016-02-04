import pageModule = require("ui/page");

export class ExamplePage extends pageModule.Page {

    private _associatedExampleMeta;

    public constructor() {
        super();
        var that = new WeakRef(this);
        this.on("navigatingTo", function(args) {
            that.get()._associatedExampleMeta = args.context;
        });
    }

    public _onBindingContextChanged(oldValue, newValue) {
        newValue["exampleContext"] = this._associatedExampleMeta;
        super._onBindingContextChanged(oldValue, newValue);
    }
}
