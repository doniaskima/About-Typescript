"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const faker_1 = __importDefault(require("faker"));
class User {
    constructor() {
        this.color = 'red';
        this.name = faker_1.default.name.firstName();
        this.location = {
            lat: parseInt(faker_1.default.address.latitude()),
            lng: parseInt(faker_1.default.address.longitude()),
        };
    }
    markerContent() {
        return `
    <div>
      <h1>User ${this.name}</h1>
    </div>
    `;
    }
}
exports.User = User;
