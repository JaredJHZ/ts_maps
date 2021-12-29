import faker from 'faker';

export class User {
    
    private name:string;
    private location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName(1);
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

}