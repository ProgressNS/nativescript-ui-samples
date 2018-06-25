import { MultipleAxesDataModel } from "../../data-models/multiple-axes-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new MultipleAxesDataModel();
}
