import frameModule = require("tns-core-modules/ui/frame");
import gaugesModule = require("nativescript-ui-gauge");

var needle: gaugesModule.RadialNeedle;
export function onNavigatedTo(args) {
    
    let gauge: gaugesModule.RadRadialGauge = <gaugesModule.RadRadialGauge>frameModule.topmost().getViewById("gaugeView");
    let scale: gaugesModule.RadialScale = <gaugesModule.RadialScale>gauge.scales.getItem(0);
    needle = <gaugesModule.RadialNeedle>scale.indicators.getItem(scale.indicators.length - 1);
}

// >> gauges-indicators-animate-needle
export function on60Tapped() {
    needle.value = 60;
}

export function on80Tapped() {
    needle.value = 80;
}

export function on120Tapped() {
    needle.value = 120;
}

export function on160Tapped() {
    needle.value = 160;
}
// << gauges-indicators-animate-needle

