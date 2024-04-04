import { District } from './models/district';
import { FieldOffice } from './models/field-office';
import { FieldOffices } from './models/field-offices';
import { InvasionResponse } from './models/invasion-response';
import { PopulationResponse } from './models/population-response';

const ZONE_ID_LOOKUP: Map<string, string> = new Map(
    [
        ['3100', 'Walrus Way'],
        ['3200', 'Sleet Street'],
        ['3300', 'Polar Place'],
        ['4100', 'Alto Avenue'],
        ['4200', 'Baritone Boulevard'],
        ['4300', 'Tenor Terrace'],
        ['5100', 'Elm Street'],
        ['5200', 'Maple Street'],
        ['5300', 'Oak Street'],
        ['9100', 'Lullaby Lane'],
        ['9200', 'Pajama Place'],
    ]
);

const DEPARTMENT_LOOKUP: Map<string, string> = new Map(
    [
        ['s', 'Sellbot'],
        ['c', 'Cashbot'],
        ['l', 'Lawbot'],
        ['b', 'Bossbot'],
    ]
);

export async function fetchFieldOffices() : Promise<FieldOffice[]> {
    const response = await fetch('https://toontownrewritten.com/api/fieldoffices');
    if (!response.ok) {
        response.text().then(console.error);
        return [];
    }

    const fieldOffices = await response.json() as FieldOffices;
    const zonedFieldOffices: FieldOffice[] = [];
    Object.entries(fieldOffices.fieldOffices).forEach(([key, value]) => {
        zonedFieldOffices.push(new FieldOffice(
            ZONE_ID_LOOKUP.get(key) ?? 'Unknown',
            DEPARTMENT_LOOKUP.get(value.department) ?? 'Unknown',
            value.difficulty + 1,
            value.annexes,
            value.open,
            value.expiring,
        ));
    });

    zonedFieldOffices.push(new FieldOffice(
        'Kaboomberg',
        'Sellbot',
        4,
        150,
        true,
        0,
    ));

    zonedFieldOffices.sort((a, b) => b.difficulty - a.difficulty);

    return zonedFieldOffices;
}

export async function fetchDistricts() : Promise<District[]> {
    const populationResponse = await fetch('https://toontownrewritten.com/api/population');
    if (!populationResponse.ok) {
        populationResponse.text().then(console.error);
        return [];
    }

    const population = await populationResponse.json() as PopulationResponse;

    const invasionResponse = await fetch('https://toontownrewritten.com/api/invasions');
    if (!invasionResponse.ok) {
        invasionResponse.text().then(console.error);
        return [];
    }

    const invasions = await invasionResponse.json() as InvasionResponse;

    const districts: District[] = [];
    Object.entries(population.populationByDistrict).forEach(([key, value]) => {
        districts.push(new District(
            key,
            value,
            null,
            null,
        ));
    });

    districts.forEach(district => {
        district.invasion = Object.entries(invasions.invasions).find(([key, value]) => key == district.name)?.[1] ?? null;
        district.status = Object.entries(population.statusByDistrict).find(([key, value]) => key == district.name)?.[1] ?? null;
    });

    districts.sort((a, b) => b.population - a.population);
    return districts;
}