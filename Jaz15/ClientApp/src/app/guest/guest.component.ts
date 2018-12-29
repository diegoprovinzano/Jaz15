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
    Id: new FormControl(''),
    UID: new FormControl(''),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    NickName: new FormControl(''),
    Instagram: new FormControl(''),
    RSVP: new FormControl(''),
    TableId: new FormControl('')
  });

  guest: Guest[];
  uid: string;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private guestService: GuestService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.uid = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
      this.guestService.getGuestUID(this.uid).subscribe(data => {
        this.guest = data;
        this.guestForm.get('Id').setValue(data['Id']);
        this.guestForm.get('UID').setValue(data['UID']);
        this.guestForm.get('FirstName').setValue(data['FirstName']);
        this.guestForm.get('LastName').setValue(data['LastName']);
        this.guestForm.get('NickName').setValue(data['NickName']);
        this.guestForm.get('Instagram').setValue(data['Instagram']);
        this.guestForm.get('RSVP').setValue(data['RSVP']);
        this.guestForm.get('TableId').setValue(data['TableId']);
      });

   });
  }

  onSubmit() {
    this.guestService.putGuest(this.guestForm.value).subscribe(result => this.guest);
  }

}
