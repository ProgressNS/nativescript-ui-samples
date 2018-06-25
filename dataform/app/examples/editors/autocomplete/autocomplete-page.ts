import { BookingViewModel } from "./../../view-models/booking-model";
import { DataFormEventData, EntityProperty, RadDataForm } from "nativescript-ui-dataform";
import { Page } from "tns-core-modules/ui/page";

let dataform: RadDataForm;

export function onPageLoaded(args) {
    const page = args.object as Page;
    page.bindingContext = new BookingViewModel();
    dataform = page.getViewById<RadDataForm>("dataform");
}

export function onPropertyCommitted(args: DataFormEventData) {
    const property = <EntityProperty>args.entityProperty;
    console.log("onPropertyCommitted: " + args.propertyName + " " + property.value);
}

export function checkValues() {
    const propertyFrom = dataform.getPropertyByName("from");
    const propertyTo = dataform.getPropertyByName("to");
    console.log("from values: " + propertyFrom.value);
    console.log("to values: " + propertyTo.value);
}