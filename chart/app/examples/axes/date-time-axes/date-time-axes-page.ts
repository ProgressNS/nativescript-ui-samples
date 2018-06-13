import { DateTimeDataModel } from "../../data-models/date-time-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new DateTimeDataModel();
}