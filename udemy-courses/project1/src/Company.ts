import faker from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  name: string;
  catchPharse: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'green';

  constructor() {
    this.name = faker.company.companyName();
    this.catchPharse = faker.company.catchPhrase();
    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>User ${this.name}</h1>
        <h3>User ${this.catchPharse}</h3>
      </div>
    `;
  }
}