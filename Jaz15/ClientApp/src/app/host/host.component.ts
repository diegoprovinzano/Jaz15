import { Component, OnInit } from '@angular/core';
import { Host } from './host';
import { HostService } from './host.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  hosts: Host[];

  constructor(private hostService: HostService) { }

  ngOnInit() {
    this.hostService.getHosts().subscribe(data => this.hosts = data);
  }

}
