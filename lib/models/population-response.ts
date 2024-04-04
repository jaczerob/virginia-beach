export class PopulationResponse {
    constructor(
        public readonly lastUpdated: number,
        public readonly totalPopulation: number,
        public readonly populationByDistrict: Map<string, number>,
        public readonly statusByDistrict: Map<string, string>,
    ) {}
}