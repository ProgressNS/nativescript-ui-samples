export function pageLoaded(args) {
    let page = args.object;
    page.bindingContext = page.navigationContext;
}