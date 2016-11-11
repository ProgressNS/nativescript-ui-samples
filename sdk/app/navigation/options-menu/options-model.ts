import observableModule = require("data/observable");
import listViewModule = require("ui/list-view");
import frameModule = require("ui/frame");

export class ViewModel extends observableModule.Observable {
    private _info;

    constructor(selectionInfo) {
        super();
        this._info = selectionInfo;
        var itemsArr = [];
        for (var i = 0; i < this._info.options.length; i++) {
            var element = this._info.options[i];
            var item = { "title": element };
            itemsArr.push(item);

        }

        this.items = itemsArr;
    }

    set items(value: Array<string>) {
        this.set("myItems", value);
    }

    get items(): Array<string> {
        return this.get("myItems");
    }

    public selectRow(index) {
        var listView = <listViewModule.ListView>frameModule.topmost().getViewById("listView");
        listView.ios.selectRowAtIndexPathAnimatedScrollPosition(NSIndexPath.indexPathForItemInSection(index, 0), false, 0);
    }

    public onSelectedRow(row) {
        this._info.index = row.index;
        frameModule.topmost().goBack();
    }

    public onBackTap(args) {
        frameModule.topmost().goBack();
    }
}