import { Observable } from "tns-core-modules/data/observable";
import { PropertyConverter } from "nativescript-ui-dataform";

export class DatesModel extends Observable {

    constructor() {
        super();
        this.set("timestampConverter", new TimestampConverter());
        this.onSetDefaults();
    }

    public onSetDefaults() {
        const stringDate = "1999-08-11";
        const dateDate = new Date(1999, 7, 11);
        const timestampDate = (new Date(1999, 7, 11)).getTime();
        const stringTime = "11:04";
        const dateTime = new Date(1999, 7, 11, 11, 4);
        const timestampTime = (new Date(1999, 7, 11, 11, 4)).getTime();
        this.set("datesCollection", new DatesCollection(stringDate, dateDate, timestampDate, stringTime, dateTime, timestampTime));
    }

    public onSetEmpty() {
        const stringDate = "";
        const dateDate = null;
        const timestampDate = 0;
        const stringTime = "";
        const dateTime = null;
        const timestampTime = 0;
        this.set("datesCollection", new DatesCollection(stringDate, dateDate, timestampDate, stringTime, dateTime, timestampTime));
    }

    public onLogDates() {
        console.dir(this.get("datesCollection"));
    }
}

export class TimestampConverter implements PropertyConverter {

    public convertFrom(timestamp: number) {
        const date = timestamp ? new Date(timestamp) : null;
        const result = date === null ? null : date.toJSON();
        return result;
    }

    public convertTo(dateString: string) {
        const date = new Date(dateString);
        const result = date ? date.getTime() : 0;
        return result;
    }
}

export class DatesCollection {
    public stringDate: string;
    public dateDate: Date;
    public timestampDate: number;
    public stringTime: string;
    public dateTime: Date;
    public timestampTime: number;

    constructor(stringDate: string, dateDate: Date, timestampDate: number, stringTime: string, dateTime: Date, timestampTime: number) {
        this.stringDate = stringDate;
        this.dateDate = dateDate;
        this.timestampDate = timestampDate;
        this.stringTime = stringTime;
        this.dateTime = dateTime;
        this.timestampTime = timestampTime;
    }
}