import { Observable } from "tns-core-modules/data/observable";
import { ios } from "tns-core-modules/application";
const person = require('./person-model-2.json');
const personMetadataPlain = require('./person-metadata.json');
const personMetadataGroups = require('./person-groups-metadata.json');

export class PersonGroupsModel extends Observable {
    private _groupingEnabled;
    private _personMetadataPlain;
    private _personMetadataGroups;

    constructor() {
        super();
        this.set("person", JSON.parse(JSON.stringify(person)));
        this._personMetadataPlain = JSON.parse(JSON.stringify(personMetadataPlain));
        this._personMetadataGroups = JSON.parse(JSON.stringify(personMetadataGroups));
        this._setIsGrouped(true);
    }

    public onGroupUpdate(args) {
        if (ios) {
            let nativeGroup: TKEntityPropertyGroupView = args.group;
            nativeGroup.collapsible = this._groupingEnabled;
        } else {
            let nativeGroup: com.telerik.widget.dataform.visualization.ExpandableEditorGroup = args.group;
            nativeGroup.setExpandable(this._groupingEnabled);
        }
    }

    public onTap() {
        this._setIsGrouped(!this._groupingEnabled);
    }

    private _setIsGrouped(value: boolean) {
        this._groupingEnabled = value;
        this.set("personMetadata", this._groupingEnabled ? this._personMetadataGroups : this._personMetadataPlain);
        this.set("btnText", this._groupingEnabled ? "Disable Grouping" : "Enable Grouping");
    }
}