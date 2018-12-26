import { Guest } from '../guest/guest';
import { Host } from '../host/host';

export class Table {
    Id: number;
    Guests: Guest[];
    Hosts: Host;
}
