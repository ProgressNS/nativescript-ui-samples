// >> binding-context-scatter-bubble
import { ScatterDataModel } from "../../data-models/scatter-data-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ScatterDataModel();
}
// << binding-context-scatter-bubble