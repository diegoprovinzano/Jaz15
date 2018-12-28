import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GuestService } from './guest.service';
import { Guest } from './guest';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  guestForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    NickName: new FormControl(''),
    RSVP: new FormControl('')
  });

  guest: Guest[];
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private guestService: GuestService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
      this.guestService.getGuest(this.id).subscribe(data => this.guest = data);
   });
  }

}
