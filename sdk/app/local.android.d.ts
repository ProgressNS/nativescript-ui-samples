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

    module support {
        module v7 {
            module app {
                class AppCompatActivity {
                    protected onCreate(savedInstanceState: android.os.Bundle);
                    protected onSaveInstanceState(outState: android.os.Bundle);
                    protected onStart();
                    protected onStop();
                    protected onDestroy();
                    protected onBackPressed();
                    protected onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent);
                }
            }
        }
    }

    module os {
        class Bundle {
        }
    }

    module content {
        class Intent {
        }
    }

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
    module view {
        module View {
            class OnClickListener{
                constructor(impl);
            }
        }
        class View {
            constructor(context);
            setOnClickListener(listener);
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

        class Button extends view.View {
        }

        class RadioButton {
        }
    }
}