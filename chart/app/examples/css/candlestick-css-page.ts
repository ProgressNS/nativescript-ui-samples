import { FinancialDataModel } from "../data-models/financial-data-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new FinancialDataModel();
}