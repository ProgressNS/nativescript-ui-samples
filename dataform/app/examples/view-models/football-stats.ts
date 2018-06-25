import { Observable } from "tns-core-modules/data/observable";

export class ChampionsLeagueModel extends Observable {

    private _stats: ChampionsLeagueStat[];
    private _statNumber = 9;
    private _statsCount = 10;

    constructor() {
        super();
        const stat0 = new ChampionsLeagueStat("2007-2008", "Manchester United", "Chelsea", "Christiano Ronaldo (8)\nLionel Messi (6)\nFernando Torres (6)");
        const stat1 = new ChampionsLeagueStat("2008-2009", "Barcelona", "Manchester United", "Lionel Messi (9)\nSteven Gerrard (7)\nMiroslav Klose (7)");
        const stat2 = new ChampionsLeagueStat("2009-2010", "Internazionale", "Bayern Munich", "Lionel Messi (8)\nCristiano Ronaldo (7)\nIvica Olić (7)");
        const stat3 = new ChampionsLeagueStat("2010-2011", "Barcelona", "Manchester United", "Lionel Messi (12)\nMario Gómez (8)\nSamuel Eto'o (8)");
        const stat4 = new ChampionsLeagueStat("2011-2012", "Chelsea", "Bayern Munich", "Lionel Messi (14)\nMario Gómez (12)\nCristiano Ronaldo (10)");
        const stat5 = new ChampionsLeagueStat("2012-2013", "Bayern Munich", "Borussia Dortmund", "Christiano Ronaldo (12)\nRobert Lewandowski (10)\nBurak Yılmaz (8)");
        const stat6 = new ChampionsLeagueStat("2013-2014", "Real Madrid", "Atlético Madrid", "Christiano Ronaldo (17)\nZlatan Ibrahimović (10)\nDiego Costa (8)");
        const stat7 = new ChampionsLeagueStat("2014-2015", "Barcelona", "Juventus", "Neymar (10)\nCristiano Ronaldo (10)\nLionel Messi (10)");
        const stat8 = new ChampionsLeagueStat("2015-2016", "Real Madrid", "Atlético Madrid", "Christiano Ronaldo (16)\nRobert Lewandowski (9)\nLuis Suárez (8)");
        const stat9 = new ChampionsLeagueStat("2016-2017", "Real Madrid", "Juventus", "Christiano Ronaldo (12)\nLionel Messi (9)\nEdinson Cavani (8)");
        this._stats = [stat0, stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9];
        this.updateCurrent(0);
    }

    public goUp() {
        this.updateCurrent(1);
    }

    public goDown() {
        this.updateCurrent(-1);
    }

    private updateCurrent(change) {
        this._statNumber += change;
        this.set("currentStat", this._stats[this._statNumber]);
        this.set("canGoUp", this._statNumber < this._statsCount - 1);
        this.set("canGoDown", this._statNumber > 0);
    }
}

export class ChampionsLeagueStat {
    constructor(season, champion, runnerUp, scorers) {
        this.season = season;
        this.champion = champion;
        this.runnerUp = runnerUp;
        this.scorers = scorers;
    }
    public season: string;
    public champion: string;
    public runnerUp: string;
    public scorers: string;
}