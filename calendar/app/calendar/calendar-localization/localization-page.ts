import { Frame } from 'tns-core-modules/ui/frame';
import { RadCalendar } from 'nativescript-ui-calendar';
import { Button } from 'tns-core-modules/ui/button';

export function btnChangeLocaleTap(args) {
    let topFrame = Frame.topmost();
    let calendar: RadCalendar = <RadCalendar>topFrame.getViewById('calendar');
    if (calendar) {
        calendar.locale = (<Button>args.object).text;
    } else {
        console.log("Calendar not found!");
    }
}