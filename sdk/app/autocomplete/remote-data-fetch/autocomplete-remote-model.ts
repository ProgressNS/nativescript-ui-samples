import {ObservableArray} from "data/observable-array";
import autocompleteModule = require("nativescript-telerik-ui-pro/autocomplete");
import observableModule = require("ui/core/dependency-observable");
import http = require("http");

export class ViewModel extends observableModule.DependencyObservable {

    private _items: ObservableArray<autocompleteModule.TokenModel>;
    private autocmp;
    private countries = ["Australia", "Albania","Austria", "Argentina", "Maldives","Bulgaria","Belgium","Cyprus","Italy","Japan",
                                        "Denmark","Finland","France","Germany","Greece","Hungary","Ireland",
                                        "Latvia","Luxembourg","Macedonia","Moldova","Monaco","Netherlands","Norway",
                                        "Poland","Romania","Russia","Sweden","Slovenia","Slovakia","Turkey","Ukraine",
                                        "Vatican City", "Chad", "China", "Chile"];

    constructor(args) {
        super();
        var page = args.object;
        this.autocmp = page.getViewById("autocmp");
        this.initDataItems();
        this.autocmp.loadSuggestions = function(text) {
            var promise = new Promise( function(resolve, reject) {
                http.getJSON("http://www.telerik.com/docs/default-source/ui-for-ios/airports.json?sfvrsn=2").then(function(r){
                var a = r.airports;
                var len = a.length;
                var items:Array<autocompleteModule.TokenModel> = new Array();
                for (var i = 0; i < len; i++) {
                    items.push(new autocompleteModule.TokenModel(a[i].FIELD2, null));
                }
                resolve(items);
                }, function (e) {
                    reject();
                });
            });

            return promise;
        }
    }

    get dataItems() {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<autocompleteModule.TokenModel>();
        //this.loadData();
        var sdasda = 2;
        // for (var i = 0; i < this.countries.length; i++) {
        //     this._items.push(new autocompleteModule.TokenModel(this.countries[i], null));
        // }

        // this.getSuggestions(text).then(function(suggestions) {
        //     showPopup();
        // });

        // this.autocomplete.getSuggestions = function(text) {
        //     var promise = new Promise();
        //     promise.function = function() {
        //         var suggestions getFromServer();
        //         promise.resolve(suggestions);
        //     };

        //     promise.function();

        //     return promise;
        // };

        // var query = new Parse.Query();
        // query.equalTo('name', 'fiki');
        // query.find().then(function(fiki){

        // });
    }

    get loadData() {
        
        return function() {
                
            }
    }
}