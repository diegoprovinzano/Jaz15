import { Component, OnInit } from '@angular/core';
import { QrService } from './qr.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { AppGlobal } from '../app.global';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {

  imgUrl = 'fa3e50bb-830b-e911-b88e-681729322e03';
  imageToShow: any;

  constructor(private http: HttpClient,
              private appGlobal: AppGlobal,
              private sanitizer: DomSanitizer,
              private qrService: QrService) {}

  ngOnInit() {
  }

  getImageFromService() {
      this.qrService.getImage(this.imgUrl).subscribe(data => {
        this.imageToShow = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + data);
      });
  }

}
