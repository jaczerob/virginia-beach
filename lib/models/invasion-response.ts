import { Invasion } from "./invasion";

export class InvasionResponse { 
    constructor(
        public readonly error: string | null,
        public readonly lastUpdated: number,
        public readonly invasions: Map<string, Invasion>,
    ) {}
}