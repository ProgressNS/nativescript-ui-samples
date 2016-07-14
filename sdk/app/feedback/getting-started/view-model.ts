export class FeedbackViewModel {
    private _title;

    constructor() {
        this._title = "RadFeedback implements a straighforward mechanism for gathering user feedback about your mobile application." + 
        "RadFeedback is seamlessly integrated with Telerik platform but can be customized to work with a third-party backend service." +
        "Tap on the `Send feedback` button to activate the demonstration. Note that no connection to a backend-service is established.";
    }

    get title() {
        return this._title;
    }
}