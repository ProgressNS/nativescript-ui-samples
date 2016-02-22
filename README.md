# Welcome
This repository contains the source code of the UI for NativeScript samples application. The repository does not contain the source code of UI for NativeScript itself.

##Overview
The UI for NativeScript samples app resides in the **sdk** folder at root repository level. The folder has a standard NativeScript application structure as described in [this article](http://docs.nativescript.org/getting-started#directory-structure). The source code of the samples resides in the folders named after each component available in **UI for NativeScript**. The currently available components are:

- chart
- sidedrawer
- listview
- calendar

## Running **UI for NativeScript** sample app
Make sure you are using NativeScript 1.6+. To see which version of NativeScript you are currently using, type `tns --version` in the console. Also you will need the latest version of typescript (`tsc`) installed so that you can transpile the ts files before running the app.

Steps to run the sample:

1. `git clone https://github.com/telerik/nativescript-ui-samples.git`
2. `cd nativescript-ui-samples/sdk/app`
3. `tsc`
4. `tns run android` or `tns emulate ios`


## Release notes
For more information about releases, features and breaking changes you can check out the release notes section in the online documentation:
[Telerik UI for NativeScript release notes](http://docs.telerik.com/devtools/nativescript-ui/release-notes)
