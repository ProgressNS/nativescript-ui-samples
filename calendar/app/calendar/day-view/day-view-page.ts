import * as viewModel from "./day-view-model";
import * as calendarModule from "nativescript-ui-calendar";
import * as dialogs from "tns-core-modules/ui/dialogs";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}

export function onDayViewEventSelected(args: calendarModule.CalendarDayViewEventSelectedData) {
    const event: calendarModule.CalendarEvent = args.eventData;
    dialogs.alert(
        {
            title: "Event Selected",
            message: event.title,
            okButtonText: "OK"
        });
}