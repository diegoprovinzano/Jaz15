import { Component, OnInit } from '@angular/core';
import { QrService } from './qr.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { AppGlobal } from '../app.global';
import { HttpClient } from '@angular/common/http';
import {Directive, Input} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {

  imgUrl = 'fa3e50bb-830b-e911-b88e-681729322e03';
  imageData: any;
  imageToShow: any;
  isImageLoading: boolean;

  constructor(private http: HttpClient,
              private appGlobal: AppGlobal,
              private sanitizer: DomSanitizer,
              private qrService: QrService) {}

  ngOnInit() {
  }


  createImageFromBlob(image: Blob) {
   const reader = new FileReader();
   reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
      console.log(this.imageToShow);
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
  }

  getImageFromService() {
      this.isImageLoading = true;
      this.qrService.getImage(this.imgUrl).subscribe(data => {
        this.imageData = URL.createObjectURL(data);
        this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(this.imageData);
        this.createImageFromBlob(data);
        console.log(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
  }

}
