var frame = require("ui/frame");

var superProto = android.support.v7.app.AppCompatActivity.prototype;
var Activity = android.support.v7.app.AppCompatActivity.extend("org.nativescript.sdk.MainActivity", {
    onCreate: function(savedInstanceState) {
        if(!this._callbacks) {
            frame.setActivityCallbacks(this);
        }
        this._callbacks.onCreate(this, savedInstanceState, superProto.onCreate);

        // add custom initialization logic here
    },
    onSaveInstanceState: function(outState) {
        this._callbacks.onSaveInstanceState(this, outState, superProto.onSaveInstanceState);
    },
    onStart: function() {
        this._callbacks.onStart(this, superProto.onStart);
    },
    onStop: function() {
        this._callbacks.onStop(this, superProto.onStop);
    },
    onDestroy: function() {
        this._callbacks.onDestroy(this, superProto.onDestroy);
    },
    onBackPressed: function() {
        this._callbacks.onBackPressed(this, superProto.onBackPressed);
    },
    onRequestPermissionsResult: function (requestCode, permissions, grantResults) {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined);
    },
    onActivityResult: function (requestCode, resultCode, data) {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, _super.prototype.onActivityResult);
    }
});