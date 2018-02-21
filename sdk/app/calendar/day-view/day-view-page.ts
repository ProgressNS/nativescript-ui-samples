import viewModel = require("./day-view-model");
import calendarModule = require("nativescript-ui-calendar");
import dialogs = require("ui/dialogs");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}

export function onDayViewEventSelected(args: calendarModule.CalendarDayViewEventSelectedData) {
    var event: calendarModule.CalendarEvent = args.eventData;
    dialogs.alert(
        {
            title: "Event Selected",
            message: event.title,
            okButtonText: "OK"
        });
}