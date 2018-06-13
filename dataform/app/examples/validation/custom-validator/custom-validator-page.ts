import { UserViewModel } from "./../../view-models/user-model";

export function onPageLoaded(args) {
    let page = args.object;
    page.bindingContext = new UserViewModel();
}