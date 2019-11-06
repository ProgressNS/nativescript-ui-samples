import { Observable } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";
import { isAndroid } from "tns-core-modules/platform/platform";

export class NavigationItem {
    private _subItems: Array<NavigationItem>;
    private _title: string;
    private _module: string;
    private _parent: NavigationItem;

    constructor(title: string, module: string, parent: NavigationItem) {
        this._title = title;
        this._parent = parent;
        this._module = module;
        this._subItems = new Array<NavigationItem>();
    }

    get subItems(): Array<NavigationItem> {
        return this._subItems;
    }

    get title() {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get module() {
        return this._module;
    }

    set module(value: string) {
        this._module = value;
    }

    get parent() {
        return this._parent;
    }
}

export class NavigationViewModel extends Observable {

    private _lastTappedItem;
    private _currentSubItems: Array<NavigationItem>;
    private _currentNavItem: NavigationItem;
    private _hasBack: boolean;

    constructor() {
        super();
        this.currentParent = new NavigationItem("Calendar", undefined, undefined);
        this.buildComponentList();
        this.currentSubItems = this.currentParent.subItems;
        this.hasBackNavigation = false;
    }

    get currentSubItems(): Array<NavigationItem> {
        return this._currentSubItems;
    }

    set currentSubItems(value: Array<NavigationItem>) {
        this._currentSubItems = value;
    }

    get currentParent() {
        return this._currentNavItem;
    }

    set currentParent(value: NavigationItem) {
        this._currentNavItem = value;
    }

    get hasBackNavigation() {
        return this._hasBack;
    }

    set hasBackNavigation(value: boolean) {
        this._hasBack = value;
    }

    private buildComponentList() {
        const parent = this.currentParent;
        this.buildCalendarExamples(parent);
    }

    private buildCalendarExamples(currentParent: NavigationItem) {
        let calendarExample = new NavigationItem("Getting started", "calendar/getting-started/getting-started-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Localization", "calendar/calendar-localization/localization-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Handling Events", "calendar/events/events-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Populating with data", "calendar/populating-with-data/populating-with-data-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Programmatic control", "calendar/programatic-control/programatic-control-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Selection modes", "calendar/selection-modes/selection-modes-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("View modes", "calendar/view-modes/view-modes-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Transition modes", "calendar/transition-modes/transition-modes-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Events source", "calendar/calendar-events/events-source-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Events view modes", "calendar/calendar-events/events-view-modes-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Calendar styling", "calendar/cell-styling/cell-styles-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Calendar day view", "calendar/day-view/day-view-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Programmatic selection", "calendar/programmatic-selection/programmatic-selection-page", currentParent);
        currentParent.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Custom events", "calendar/custom-events/custom-events-page", currentParent);
        currentParent.subItems.push(calendarExample);
    }

    public canMoveBack(): boolean {
        return this.hasBackNavigation;
    }

    public moveBack() {
        this.currentParent = this.currentParent.parent;
        this.hasBackNavigation = this.currentParent.parent !== undefined;
    }

    public initModelData() {
        if (this.currentParent && this.currentParent.module === undefined) {
            this.currentSubItems = this.currentParent.subItems;
        }
    }

    public onNavigationItemTap(args) {

        const itemIndex = args.index;
        const tappedItem = this.currentSubItems[itemIndex];
        if (tappedItem.module === undefined) {
            this.hasBackNavigation = tappedItem.parent !== undefined;
            this.currentParent = tappedItem;
        }

        if (tappedItem.subItems.length > 0) {
            Frame.topmost().navigate({
                moduleName: "navigation/category-list-page"
            });
        } else {
            if (tappedItem.module) {
                Frame.topmost().navigate({
                    moduleName: tappedItem.module,
                    context: tappedItem
                });
            }
        }
    }
}

export let navigationModel = new NavigationViewModel();
