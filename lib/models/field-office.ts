export class FieldOffice {
    constructor (
        public readonly zone: string,
        public readonly department: string,
        public readonly difficulty: number,
        public readonly annexes: number,
        public readonly open: boolean,
        public readonly expiring: number,
    ) {}
}
