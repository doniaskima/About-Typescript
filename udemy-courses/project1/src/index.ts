import { Map } from './Map';
import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();
const map = new Map('mapDiv');

map.addMarker(user);
map.addMarker(company);