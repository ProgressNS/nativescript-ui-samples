import frameModule = require("ui/frame");
import gaugesModule = require("nativescript-telerik-ui-pro/gauges");

export function onNavigatedTo(args) {
    let gaugeView: gaugesModule.RadRadialGauge = <gaugesModule.RadRadialGauge>frameModule.topmost().getViewById("gaugeView");
    let scale: gaugesModule.RadialScale = <gaugesModule.RadialScale>gaugeView.scales.getItem(0);
    for (var i = 0; i < scale.indicators.length; i++) {
        let barIndicator: gaugesModule.RadialBarIndicator = <gaugesModule.RadialBarIndicator>scale.indicators.getItem(i);
        if (barIndicator.maximum == 0) {
            barIndicator.maximum = Math.random() * 100;
        }
    }
}