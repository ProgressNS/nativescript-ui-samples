import { BlogPostsModel } from "./blog-posts-model";
import { RadListView } from "nativescript-ui-listview";

export function onPageLoaded(args) {
    const page = args.object;
    let listView = <RadListView>page.getViewById('myListView');
    page.bindingContext = new BlogPostsModel(listView);
}