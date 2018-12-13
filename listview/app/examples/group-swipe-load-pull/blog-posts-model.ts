import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
import { ListViewEventData, LoadOnDemandListViewEventData, RadListView } from "nativescript-ui-listview";

export class BlogPostsModel extends Observable {
    private _firstToLoad = 5;
    private _startItemsCount = 6;
    private _loadMoreItemsCount = 2;
    private _nextToLoad: number;
    private _now: Date;
    private _blogPosts: ObservableArray<BlogPost>;
    private _listView: RadListView;

    constructor(listView) {
        super();
        this._listView = listView;
        this._now = new Date();
        for (let i = 0; i < ALL_POSTS.length; i++) {
            let date;
            if (i < ALL_POSTS.length / 2) {
                let offset = i < this._firstToLoad ? (i - this._firstToLoad) * 3000 : (i - this._firstToLoad) * 1000 * 60 * 50;
                date = new Date(this._now.getTime() - offset);
            } else {
                date = new Date(this._now.getFullYear(), this._now.getMonth(), this._now.getDate() - 1);
            }

            ALL_POSTS[i].publishDate = date;
            ALL_POSTS[i].deleted = false;
        }
        this.blogPosts = new ObservableArray<BlogPost>(this.getBlogPosts(this._startItemsCount, false));
    }

    get blogPosts(): ObservableArray<BlogPost> {
        return this._blogPosts;
    }

    set blogPosts(value: ObservableArray<BlogPost>) {
        if (this._blogPosts !== value) {
            this._blogPosts = value;
            this.notifyPropertyChange("blogPosts", value);
        }
    }

    get groupByDay(): (item: any) => any {
        return (item: BlogPost) => {
            return this.isToday(item.publishDate) ? "Today" : "Yesterday";
        };
    }

    public onPullToRefreshInitiated(args: ListViewEventData) {
        setTimeout(() => {
            this.blogPosts = new ObservableArray<BlogPost>(this.getBlogPosts(this._startItemsCount, false));
            const listView = args.object;
            listView.notifyPullToRefreshFinished(true);
        }, 500);
    }

    public onLoadMoreDataRequested(args: LoadOnDemandListViewEventData) {
        setTimeout(() => {
            let newItems = this.getBlogPosts(this._loadMoreItemsCount, true);
            for (let i = 0; i < newItems.length; i++) {
                this.blogPosts.push(newItems[i]);
            }
            const listView = args.object;
            listView.notifyLoadOnDemandFinished(newItems.length < this._loadMoreItemsCount);
        }, 500);
    }

    public onItemSwipeProgressStarted(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        const swipeView = args['object'];
        const leftItem = swipeView.getViewById<any>('comment-view');
        const rightItem = swipeView.getViewById<any>('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    }

    public onItemSwipeProgressChanged(args: ListViewEventData) {
    }

    public onItemSwipeProgressEnded(args: ListViewEventData) {
    }

    public onLeftSwipeClick(args) {
        alert(
            {
                title: "Comments are currently disabled.",
                okButtonText: "OK"
            });
        this._listView.notifySwipeToExecuteFinished();
    }

    public onRightSwipeClick(args) {
        let itemView = args.object;
        let currentBlogPost = <BlogPost>itemView.bindingContext;
        let currentBlogPostIndex = this.blogPosts.indexOf(currentBlogPost);
        this.blogPosts.splice(currentBlogPostIndex, 1);
        this.markDeleted(currentBlogPost);
    }

    getBlogPosts(count: number, proceed: boolean): BlogPost[] {
        this._now = new Date();
        const result =  new Array<BlogPost>();
        let startingIndex = proceed ? this._nextToLoad : this._firstToLoad;
        for (let i = startingIndex; i < ALL_POSTS.length && result.length < count; i++) {
            let nextBlogPost = ALL_POSTS[i];
            if (!nextBlogPost.deleted && nextBlogPost.publishDate <= this._now) {
                nextBlogPost.publishText = this.dateLabel(nextBlogPost.publishDate);
                result.push(nextBlogPost);
            }
            this._nextToLoad = i + 1;
        }
        if (!proceed) {
            this._firstToLoad = this._firstToLoad < 1 ? 0 : this._firstToLoad - 1;
        }
        return result;
    }

    markDeleted(blogPost: BlogPost) {
        blogPost.deleted = true;
    }

    dateLabel(date): string {
        if (!this.isToday(date)) {
            return "Yesterday";
        }
        let diffInMilliseconds = this._now.getTime() - date.getTime();
        let hours = Math.floor(diffInMilliseconds / (60 * 60 * 1000));
        let text = '';
        if (hours > 0) {
            text = hours > 1 ? hours + ' hours ' : hours === 1 ? '1 hour ' : '';
        } else {
            let minutes = Math.floor(diffInMilliseconds / (60 * 1000));
            if (minutes > 0) {
                text = minutes > 1 ? minutes + ' minutes ' : minutes === 1 ? '1 minute ' : '';
            } else {
                let seconds = Math.floor(diffInMilliseconds / 1000);
                text = seconds > 1 ? seconds + ' seconds ' : seconds === 1 ? '1 second ' : '0 seconds ';
            }
        }
        return text + 'ago';
    }

    public isToday(date) {
        return date.getDate() === this._now.getDate() &&
            date.getMonth() === this._now.getMonth() &&
            date.getFullYear() === this._now.getFullYear();
    }
}

export class BlogPost {
    public title: string;
    public content: string;
    public deleted?: boolean;
    public publishDate?: Date;
    public publishText?: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}

const ALL_POSTS: BlogPost[] = [
    {
        title: "Going Offline with NativeScript and Kinvey",
        content: "Learn how to take your NativeScript app offline by leveraging the built-in capabilities of Kinvey."
    },
    {
        title: "Latest NativeScript is hot out of the oven!",
        content: "Latest NativeScript is here! Learn all about the amazing developer-focused productivity improvements like Hot Module Replacement, a new interactive CLI, and the tns preview command (allowing you to start developing for iOS on Windows!)."
    },
    {
        title: "How to add Firebase Analytics to your NativeScript Mobile App",
        content: "Adding Analytics to your app is an effort that worth investing in. With just half an hour of work, you will know what your users need, how can you address their needs and where to invest your precious development time. Learn how to use Firebase Analytics with NativeScript in this tutorial."
    },
    {
        title: "How to Build a PWA, an iOS App, and an Android App - From One Codebase",
        content: "In this article I’ll show you code sharing with NativeScript and Angular works. You’ll learn the steps you’ll need to take to build for all three platforms, as well as some tips and tricks I learned from going through this process myself."
    },
    {
        title: "How to Build a Simple Dialog for Your NativeScript Apps",
        content: "There are a few different ways to implement dialogs in NativeScript apps. In this article I’m going to walk you through how to create a simple dialog that you can style without going through the hassle of creating an entire page."
    },
    {
        title: "NativeScript First-Time Contributors Contest",
        content: "The NativeScript team is welcoming first-time contributors to the open source world! Contribute a fix to any of the NativeScript repositories on GitHub and earn rewards during the month of October."
    },
    {
        title: "Using Azure Cognitive Services with NativeScript",
        content: "Is there any doubt that cognitive apps are the future? Learn how to use some of Microsoft Azure's cognitive APIs with a NativeScript app to create a simple, but engaging, app experience."
    },
    {
        title: "The Power(s) of NativeScript and the NativeScript Playground",
        content: "It's pretty amazing what you can do with just a web browser and the NativeScript Playground."
    },
    {
        title: "Using Custom Fonts in a NativeScript App",
        content: "Using custom fonts in your NativeScript app can provide a much-needed (and easy) boost to the look and feel of your app. Learn some tips and tricks to get a great-looking font in your app."
    },
    {
        title: "Make HTTP Requests to Remote Web Services in a NativeScript-Vue App",
        content: "Learn how to make HTTP requests to remote web services and APIs in an Android and iOS application built with NativeScript and the Vue.js JavaScript framework."
    },
    {
        title: "Renderless Components in NativeScript-Vue",
        content: "Learn about Renderless Components in NativeScript-Vue"
    },
    {
        title: "Meet the NativeScript Experts at jsMobileConf",
        content: "Building on the success of the past two NativeScript Developer Day events, we are now bringing you jsMobileConf - a two-day, two-track event focused on the cutting edge JavaScript ecosystem. Coming in October from Boston, MA, you'll find sessions on NativeScript, machine learning, AI, Serverless, Blockchain, AR/VR, and more."
    },
    {
        title: "What is Serverless and Why Does it Matter?",
        content: "What's all the fuss over serverless and what does it have to do with mobile apps? Learn more in this blog post that dives into the difference between SaaS, IaaS, FaaS, and PaaS."
    },
    {
        title: "Building a Simple Progressbar for your NativeScript App",
        content: "Progressbars are a common user interface component regardless of development platform. In this article we’ll look at how you can easily recreate this UI component for your NativeScript apps, and learn a bit about NativeScript’s layout system in the process."
    },
    {
        title: "Include Feature-Rich Maps in a NativeScript-Vue App with Mapbox",
        content: "Learn how to use Mapbox in a NativeScript application that uses the Vue.js JavaScript framework to work with feature rich maps.",
    },
    {
        title: "Sending Text Messages to Phone Contacts using NativeScript",
        content: "A brief tutorial on how to pull a contact from your iOS or Android contact list into a NativeScript app and prepare a text message for delivery."
    },
];