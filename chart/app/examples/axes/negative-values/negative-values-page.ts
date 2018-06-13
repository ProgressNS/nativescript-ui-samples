// >> negative-values-binding-context
import { NegativeValuesDataModel } from "../../data-models/negative-values-data-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new NegativeValuesDataModel();
}// << negative-values-binding-context