import viewModel = require("./../../view-models/booking-model");
import { DataFormEventData, EntityProperty, RadDataForm } from "nativescript-ui-dataform";
import { Page } from "tns-core-modules/ui/page";

var dataform: RadDataForm;

export function onPageLoaded(args) {
    var page = args.object as Page;
    page.bindingContext = new viewModel.BookingViewModel();
    dataform = page.getViewById<RadDataForm>("dataform");
}

export function onPropertyCommitted(args: DataFormEventData) {
    var property = <EntityProperty>args.entityProperty;
    console.log("onPropertyCommitted: " + args.propertyName + " " + property.value);
}

export function checkValues() {
    var propertyFrom = dataform.getPropertyByName("from");
    var propertyTo = dataform.getPropertyByName("to");
    console.log("from values: " + propertyFrom.value);
    console.log("to values: " + propertyTo.value);
}