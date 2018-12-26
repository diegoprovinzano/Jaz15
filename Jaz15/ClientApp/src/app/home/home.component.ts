import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest/guest';
import { Host } from '../host/host';
import { GuestService } from '../guest/guest.service';
import { HostService } from '../host/host.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  guests: Guest[];
  host: Host[];

  constructor(private guestService: GuestService,
              private hostService: HostService) { }

  ngOnInit() {
    this.guestService.getGuests().subscribe(data => this.guests = data);
    this.hostService.getHost(1).subscribe(data => this.host = data);
  }
}
