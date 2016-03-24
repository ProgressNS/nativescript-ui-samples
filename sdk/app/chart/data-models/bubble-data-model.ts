// >> bubble-data-source
export class BubbleDataModel  {
    constructor() {

    }
    
    get highDataModel() {
        return [
            { Year: 2000, Amount: 15, Impact: 1 },
            {  Year: 1456, Amount: 13, Impact: 7 },
            {  Year: 1866, Amount: 25, Impact: 10 },
            {  Year: 1900, Amount: 5, Impact: 3 },
            {  Year: 1700, Amount: 17, Impact: 4 },
            { Year: 1600, Amount: 20, Impact: 1 }, 
        ];
    }

     get middleDataModel() {
        return [
            { Year: 1200, Amount: 15, Impact: 1 },
            {  Year: 1156, Amount: 13, Impact: 7 },
            {  Year: 1000, Amount: 25, Impact: 10 },
            {  Year: 900, Amount: 5, Impact: 3 },
            {  Year: 700, Amount: 17, Impact: 4 },
            { Year: 600, Amount: 20, Impact: 1 },
        ];
    }
    
    get lowDataModel() {
        return [
            { Year: 200, Amount: 15, Impact: 1 },
            {  Year: 456, Amount: 13, Impact: 7 },
            {  Year: 366, Amount: 25, Impact: 10 },
            {  Year: 100, Amount: 5, Impact: 3 },
            {  Year: 340, Amount: 17, Impact: 4 },
            { Year: 135, Amount: 20, Impact: 1 },
        ];
    }
}// << bubble-data-source