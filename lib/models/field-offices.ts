import { FieldOffice } from "./field-office";

export class FieldOffices {
    constructor (
        public lastUpdated: number,
        public fieldOffices: Map<string, FieldOffice>,
    ) {}
}
