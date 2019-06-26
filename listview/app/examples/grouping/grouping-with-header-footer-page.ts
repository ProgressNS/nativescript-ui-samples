import { ViewModel, DataItem } from "./grouping-model";
import { RadListView } from "nativescript-ui-listview";
import { Page } from "tns-core-modules/ui/page";
import { EventData } from "tns-core-modules/data/observable";

let page: Page;
let bindingContext: ViewModel;

function getCustomItems() {
    const GENERATED_ITEMS_COUNT = 50;
    const GROUPS_COUNT = 3;
    const SPECIAL_ITEM_INTERVAL = 4;

    let items = [];

    for (let i = 1; i <= GENERATED_ITEMS_COUNT; i++) {
        items.push(new DataItem(
            i,
            i % SPECIAL_ITEM_INTERVAL === 0 ? `Special Item ${i}` : `Item ${i}`,
            `This is an item, category is: Category ${i % GROUPS_COUNT}`,
            `Category ${i % GROUPS_COUNT}`
        ));
    }

    return items;
}

export function onPageLoaded(args) {
    page = args.object;
    bindingContext = new ViewModel(getCustomItems());
    page.bindingContext = bindingContext;
}

export function toggleGrouping(args: EventData) {
    let listView = page.getViewById("myListView") as RadListView;
    if (!listView.groupingFunction) {
        listView.groupingFunction = bindingContext.myGroupingFunc;
        bindingContext.isEnabled = true;
    } else {
        listView.groupingFunction = undefined;
        bindingContext.isEnabled = false;
    }
}