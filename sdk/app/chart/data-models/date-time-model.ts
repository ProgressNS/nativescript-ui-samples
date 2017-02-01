export class DateTimeDataModel  {
    constructor() {

    }

// >> date-axis-source-date-format
    get dateTimeSource() {
        return [
             { timeStamp: new Date(2015,1,11).getTime(), Amount: 10}, 
            { timeStamp: new Date(2015,2,11).getTime(), Amount: 10}, 
            { timeStamp: new Date(2015,3,1).getTime(), Amount: 1 },
            { timeStamp: new Date(2015,4,3).getTime(), Amount: 3 },
            { timeStamp: new Date(2015,5,11).getTime(), Amount: 18}, 
            { timeStamp: new Date(2015,6,1).getTime(), Amount: 7 },
            { timeStamp: new Date(2015,7,3).getTime(), Amount: 5 },
            { timeStamp: new Date(2015,8,11).getTime(), Amount: 4}, 
            { timeStamp: new Date(2015,9,1).getTime(), Amount: 2 },
            { timeStamp: new Date(2015,10,3).getTime(), Amount: 6 },
           
        ]
    }// << date-axis-source-date-format
}
