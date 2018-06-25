// >> binding-context-bubble-series
import { BubbleDataModel } from "../../data-models/bubble-data-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new BubbleDataModel();
}
// << binding-context-bubble-series