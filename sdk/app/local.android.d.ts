//partial type definitions
declare module java {
    module text {
        class SimpleDateFormat {
            constructor(format: String, locale: util.Locale);
        }
    }
    module util {
        class Locale {
            static US: Locale;
        }
    }
}

declare module com {
    module telerik {
        module android {
            module common {
                class Procedure<T>{
                    constructor(imp);
                }
            }
        }
        module widget {
            class RadioGroup {
                setPadding(l, t, r, b);
            }

            module numberpicker {
                class RadNumberPicker {
                    labelView();
                    decreaseView();
                    increaseView();
                    rootView;
                }
            }
        }
    }
}

declare module android {
    module graphics {
        module PorterDuff {
            class Mode {
                static SRC_IN;
            }

        }
        class PorterDuffColorFilter {
            constructor(arg1, arg2);

        }
        module drawable {
            class GradientDrawable {
                setStroke(width, stroke);
            }
        }
    }
    module widget {

        class LinearLayout {
            labelView();
            decreaseView();
            increaseView();
            static SHOW_DIVIDER_MIDDLE;
        }
        class RadioGroup {
            setBackgroundColor(arg);
            setPadding(l, t, r, b);
            setShowDividers(arg);
            setDividerDrawable(arg);
        }

        class RadioButton {

        }
    }
}