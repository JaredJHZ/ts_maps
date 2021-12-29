import faker from 'faker';

export class Company {
    private name: string;
    private catchPhrase: string;
    private location: {
        lat:number,
        lng:number
    }

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
}