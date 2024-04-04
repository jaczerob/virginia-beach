import { Invasion } from "./invasion";

export class District {
    constructor(
        public name: string,
        public population: number,
        public invasion: Invasion | null,
        public status: string | null,
    ) {}
}