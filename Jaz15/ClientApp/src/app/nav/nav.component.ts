import { Component, OnInit } from '@angular/core';
import { HostService } from '../host/host.service';
import { Host } from '../host/host';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  appTitle: Host[];

  constructor(private hostService: HostService) { }

  ngOnInit() {
    this.hostService.getHost(1).subscribe(data => {
      this.appTitle = data;
    });
  }

}
