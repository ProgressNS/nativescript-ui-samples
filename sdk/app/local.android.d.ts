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