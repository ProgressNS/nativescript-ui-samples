import observable = require("data/observable");
import pages = require("ui/page");
import gestures = require("ui/gestures");
import listView = require("ui/list-view");
import frame = require("ui/frame");
import view = require("ui/core/view");
import search = require("ui/search-bar");
import platform = require("platform");
import button = require("ui/button");

import appViewModel = require("./app-view-model");

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    page.bindingContext = appViewModel.appModel;

    if (frame.topmost().ios){
        console.log(frame.topmost().ios.controller.interactivePopGestureRecognizer.enabled = false);
    }
}

export function selectExample(args: listView.ItemEventData) {
    var example = <appViewModel.Example>args.view.bindingContext;

    if (example.moduleName) {
        frame.topmost().navigate({
            moduleName: example.moduleName
        });
    }
}
