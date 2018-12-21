import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { StyleBindingsModel } from "./style-bindings-model";
import { TitleStyle, SubtitleStyle, BarIndicatorStyle, ScaleStyle, NeedleStyle,
    RadRadialGauge, RadialScale, BarIndicator, RadialNeedle } from "nativescript-ui-gauge";


let styleBindingsModel: StyleBindingsModel;
let titleStyle: TitleStyle;
let subtitleStyle: SubtitleStyle;
let scaleStyle: ScaleStyle;
let firstIndicatorStyle: BarIndicatorStyle;
let secondIndicatorStyle: BarIndicatorStyle;
let needleStyle: NeedleStyle;
let needle: RadialNeedle;
export function onLoaded(args: EventData) {
    let page = <Page>args.object;

    styleBindingsModel = new StyleBindingsModel();
    page.bindingContext = styleBindingsModel;

    let gauge = <RadRadialGauge>page.getViewById("gaugeView");
    titleStyle = gauge.titleStyle;
    subtitleStyle = gauge.subtitleStyle;
    let scale = <RadialScale>gauge.scales.getItem(0);
    scaleStyle = scale.scaleStyle;
    firstIndicatorStyle = (<BarIndicator>scale.indicators.getItem(0)).indicatorStyle;
    secondIndicatorStyle = (<BarIndicator>scale.indicators.getItem(1)).indicatorStyle;
    needle = <RadialNeedle>scale.indicators.getItem(scale.indicators.length - 1);
    needleStyle = needle.needleStyle;
}

export function onUpdate() {
    needle.value = 136;
    titleStyle.textColor = "DarkRed";
    subtitleStyle.textColor = "Red";
    needleStyle.fillColor = "Red";
    needleStyle.circleFillColor = "Red";
    needleStyle.strokeColor = "DarkGray";
    needleStyle.circleStrokeColor = "DarkGray";
    firstIndicatorStyle.fillColor = "LightGray";
    secondIndicatorStyle.fillColor = "Black";
    scaleStyle.lineColor = "SlateGray";
    scaleStyle.labelsColor = "DarkRed";
}