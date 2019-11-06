export class DateTimeDataModel {
    constructor() {

    }

    // >> date-axis-source-date-format
    get dateTimeSource() {
        return [
            { timeStamp: new Date(2015, 1, 11).getTime(), Amount: 10 },
            { timeStamp: new Date(2015, 2, 11).getTime(), Amount: 10 },
            { timeStamp: new Date(2015, 3, 1).getTime(), Amount: 1 },
            { timeStamp: new Date(2015, 4, 3).getTime(), Amount: 3 },
            { timeStamp: new Date(2015, 5, 11).getTime(), Amount: 18 },
            { timeStamp: new Date(2015, 6, 1).getTime(), Amount: 7 },
            { timeStamp: new Date(2015, 7, 3).getTime(), Amount: 5 },
            { timeStamp: new Date(2015, 8, 11).getTime(), Amount: 4 },
            { timeStamp: new Date(2015, 9, 1).getTime(), Amount: 2 },
            { timeStamp: new Date(2015, 10, 3).getTime(), Amount: 6 },

        ];
    }// << date-axis-source-date-format

    get usersData() {
        return [
            { Date: new Date(2019, 10, 4).getTime(), CategoryA: 150, CategoryB: 150, CategoryC: 150 },
            { Date: new Date(2019, 10, 5).getTime(), CategoryA: 148, CategoryB: 145, CategoryC: 148 },
            { Date: new Date(2019, 10, 6).getTime(), CategoryA: 147, CategoryB: 144, CategoryC: 145 },
            { Date: new Date(2019, 10, 7).getTime(), CategoryA: 143, CategoryB: 140, CategoryC: 142 },
            { Date: new Date(2019, 10, 8).getTime(), CategoryA: 140, CategoryB: 138, CategoryC: 139 },
            { Date: new Date(2019, 10, 9).getTime(), CategoryA: 138, CategoryB: 135, CategoryC: 138 },
            { Date: new Date(2019, 10, 10).getTime(), CategoryA: 136, CategoryB: 133, CategoryC: 137 },
            { Date: new Date(2019, 10, 11).getTime(), CategoryA: 133, CategoryB: 132, CategoryC: 136 },
            { Date: new Date(2019, 10, 12).getTime(), CategoryA: 130, CategoryB: 130, CategoryC: 130 },
            { Date: new Date(2019, 10, 13).getTime(), CategoryA: 130, CategoryB: 128, CategoryC: 128 },
            { Date: new Date(2019, 10, 14).getTime(), CategoryA: 130, CategoryB: 127, CategoryC: 127 },
            { Date: new Date(2019, 10, 15).getTime(), CategoryA: 126, CategoryB: 126, CategoryC: 125 },
            { Date: new Date(2019, 10, 16).getTime(), CategoryA: 123, CategoryB: 120, CategoryC: 123 },
            { Date: new Date(2019, 10, 17).getTime(), CategoryA: 120, CategoryB: 120, CategoryC: 120 },
            { Date: new Date(2019, 10, 18).getTime(), CategoryA: 118, CategoryB: 119, CategoryC: 119 },
            { Date: new Date(2019, 10, 19).getTime(), CategoryA: 116, CategoryB: 118, CategoryC: 117 },
            { Date: new Date(2019, 10, 20).getTime(), CategoryA: 114, CategoryB: 115, CategoryC: 115 },
            { Date: new Date(2019, 10, 21).getTime(), CategoryA: 112, CategoryB: 115, CategoryC: 114 },
            { Date: new Date(2019, 10, 22).getTime(), CategoryA: 112, CategoryB: 113, CategoryC: 113 },
            { Date: new Date(2019, 10, 23).getTime(), CategoryA: 112, CategoryB: 112, CategoryC: 112 },
            { Date: new Date(2019, 10, 24).getTime(), CategoryA: 112, CategoryB: 111, CategoryC: 111 },
            { Date: new Date(2019, 10, 25).getTime(), CategoryA: 110, CategoryB: 110, CategoryC: 110 },
            { Date: new Date(2019, 10, 26).getTime(), CategoryA: 110, CategoryB: 108, CategoryC: 109 },
            { Date: new Date(2019, 10, 27).getTime(), CategoryA: 109, CategoryB: 107, CategoryC: 108 },
            { Date: new Date(2019, 10, 28).getTime(), CategoryA: 107, CategoryB: 105, CategoryC: 107 },
            { Date: new Date(2019, 10, 29).getTime(), CategoryA: 106, CategoryB: 105, CategoryC: 106 },
            { Date: new Date(2019, 10, 30).getTime(), CategoryA: 106, CategoryB: 105, CategoryC: 103 },
            { Date: new Date(2019, 11, 1).getTime(), CategoryA: 105, CategoryB: 103, CategoryC: 102 },
            { Date: new Date(2019, 11, 2).getTime(), CategoryA: 103, CategoryB: 102, CategoryC: 101 },
            { Date: new Date(2019, 11, 3).getTime(), CategoryA: 100, CategoryB: 100, CategoryC: 100 },
        ];
    }

    get campaignData() {
        return [
            { Date: new Date(2019, 5, 1).getTime(), Clicks: 150, Impressions: 510 },
            { Date: new Date(2019, 5, 2).getTime(), Clicks: 145, Impressions: 520 },
            { Date: new Date(2019, 5, 3).getTime(), Clicks: 160, Impressions: 505 },
            { Date: new Date(2019, 5, 4).getTime(), Clicks: 140, Impressions: 510 },
            { Date: new Date(2019, 5, 5).getTime(), Clicks: 150, Impressions: 515 },
            { Date: new Date(2019, 5, 6).getTime(), Clicks: 155, Impressions: 620 },
            { Date: new Date(2019, 5, 7).getTime(), Clicks: 145, Impressions: 610 },
            { Date: new Date(2019, 5, 8).getTime(), Clicks: 260, Impressions: 530 },
            { Date: new Date(2019, 5, 9).getTime(), Clicks: 255, Impressions: 630 },
            { Date: new Date(2019, 5, 10).getTime(), Clicks: 240, Impressions: 380 },
            { Date: new Date(2019, 5, 11).getTime(), Clicks: 260, Impressions: 550 },
            { Date: new Date(2019, 5, 12).getTime(), Clicks: 300, Impressions: 480 },
            { Date: new Date(2019, 5, 13).getTime(), Clicks: 265, Impressions: 510 },
            { Date: new Date(2019, 5, 14).getTime(), Clicks: 260, Impressions: 490 },
            { Date: new Date(2019, 5, 15).getTime(), Clicks: 310, Impressions: 505 },
            { Date: new Date(2019, 5, 16).getTime(), Clicks: 260, Impressions: 470 },
            { Date: new Date(2019, 5, 17).getTime(), Clicks: 270, Impressions: 475 },
            { Date: new Date(2019, 5, 18).getTime(), Clicks: 280, Impressions: 470 },
            { Date: new Date(2019, 5, 19).getTime(), Clicks: 230, Impressions: 520 },
            { Date: new Date(2019, 5, 20).getTime(), Clicks: 180, Impressions: 510 },
            { Date: new Date(2019, 5, 21).getTime(), Clicks: 175, Impressions: 610 },
            { Date: new Date(2019, 5, 22).getTime(), Clicks: 165, Impressions: 460 },
            { Date: new Date(2019, 5, 23).getTime(), Clicks: 150, Impressions: 530 },
            { Date: new Date(2019, 5, 24).getTime(), Clicks: 200, Impressions: 540 },
            { Date: new Date(2019, 5, 25).getTime(), Clicks: 175, Impressions: 530 },
            { Date: new Date(2019, 5, 26).getTime(), Clicks: 190, Impressions: 540 },
            { Date: new Date(2019, 5, 27).getTime(), Clicks: 230, Impressions: 700 },
            { Date: new Date(2019, 5, 28).getTime(), Clicks: 180, Impressions: 580 },
            { Date: new Date(2019, 5, 29).getTime(), Clicks: 140, Impressions: 460 },
            { Date: new Date(2019, 5, 30).getTime(), Clicks: 150, Impressions: 480 },
        ];
    }
}
