"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker_1 = __importDefault(require("faker"));
class Company {
    constructor() {
        this.color = 'green';
        this.name = faker_1.default.company.companyName();
        this.catchPharse = faker_1.default.company.catchPhrase();
        this.location = {
            lat: parseInt(faker_1.default.address.latitude()),
            lng: parseInt(faker_1.default.address.longitude()),
        };
    }
    markerContent() {
        return `
      <div>
        <h1>User ${this.name}</h1>
        <h3>User ${this.catchPharse}</h3>
      </div>
    `;
    }
}
exports.Company = Company;
