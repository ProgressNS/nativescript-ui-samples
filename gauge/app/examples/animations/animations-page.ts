import { topmost } from "tns-core-modules/ui/frame";
import { RadRadialGauge, RadialScale, RadialNeedle } from "nativescript-ui-gauge";

let needle: RadialNeedle;
export function onNavigatedTo(args) {

    let gauge: RadRadialGauge = <RadRadialGauge>topmost().getViewById("gaugeView");
    let scale: RadialScale = <RadialScale>gauge.scales.getItem(0);
    needle = <RadialNeedle>scale.indicators.getItem(scale.indicators.length - 1);
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

