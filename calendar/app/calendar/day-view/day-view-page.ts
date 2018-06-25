import * as viewModel from "./day-view-model";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as platform from "tns-core-modules/platform";
import { RadCalendar, CalendarDayViewStyle, CalendarDayViewEventSelectedData, CalendarEvent, DayCellStyle, SelectionShape } from "nativescript-ui-calendar";

let _calendar: RadCalendar;
let _style: CalendarDayViewStyle;
let _titleVisible = true;
let _weekVisible = true;

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new viewModel.ViewModel();
    _calendar = <RadCalendar>page.getViewById('calendar');
    _style = new CalendarDayViewStyle();

    if (platform.isIOS) {
        _style.selectedDayCellStyle = new DayCellStyle();
        _style.selectedDayCellStyle.cellTextColor = "white";
        _style.selectionShape = SelectionShape.Round;
    }
    
    _calendar.dayViewStyle = _style;
}

export function onWeekTap(args) {
    _weekVisible = !_weekVisible;
    _calendar.dayViewStyle.showWeek = _weekVisible;
    args.object.text = _weekVisible ? 'hide week' : 'show week';
}

export function onTitleTap(args) {
    _titleVisible = !_titleVisible;
    _calendar.dayViewStyle.showTitle = _titleVisible;
    args.object.text = _titleVisible ? 'hide title' : 'show title';
}

export function onDayViewEventSelected(args: CalendarDayViewEventSelectedData) {
    const event: CalendarEvent = args.eventData;
    dialogs.alert(
        {
            title: "Event Selected",
            message: event.title,
            okButtonText: "OK"
        });
}