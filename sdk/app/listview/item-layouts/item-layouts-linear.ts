import { ViewModel } from "./item-layouts-model";

export function onPageLoaded(args){
    var page = args.object;

    page.bindingContext = new ViewModel();
}
