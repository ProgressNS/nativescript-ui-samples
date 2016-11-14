//partial type definitions
declare const enum UIUserInterfaceIdiom {
    Unspecified = -1,
    Phone = 0,
    Pad = 1,
    TV = 2
}

declare const UIUserInterfaceIdiomPad: number;
declare class NSObject { }
declare class UIDevice extends NSObject {
    static alloc(): UIDevice; // inherited from NSObject
    static currentDevice(): UIDevice;
    static new(): UIDevice; // inherited from NSObject
    userInterfaceIdiom: UIUserInterfaceIdiom;
}

declare class NSIndexPath extends NSObject {
    static indexPathForItemInSection(item: number, section: number): NSIndexPath;
}

declare class TKSolidFill {
    static solidFillWithColor(color: UIColor): TKSolidFill;
}

declare class NSDateFormatter {
    static alloc(): NSDateFormatter;
    init(): NSDateFormatter;
    dateFormat: string;
}

declare class UIColor {
}

declare class UIStepper {
    subviews: any;
    tintColor;
}

declare class UISwitch {
    subviews: any;
    onTintColor;
    thumbTintColor
    tintColor;
}

declare class UIButton {

}

declare class UISlider {
    tintColor;
    thumbTintColor;
}

declare class UISegmentedControl {
    tintColor;
}