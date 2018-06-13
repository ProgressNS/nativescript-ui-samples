import { UserViewModel } from "./../../view-models/user-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new UserViewModel();
}