import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { uploads } from '../../../../../server';
import { Router} from '@angular/router';
import { FoodService } from '../../shared/food.service';
import { Food } from '../../shared/food.model';
import { Category } from 'src/app/shared/categoty.model';
declare var  require: any;

@Component({
  selector: 'app-viewfood',
  templateUrl: './viewfood.component.html',
  styleUrls: ['./viewfood.component.css']
})
export class ViewfoodComponent implements OnInit {
  // imgname = require('F:/login/server/uploads/download1.jpg');
  public apiurl = 'http://localhost:3000';
  trustedUrl;
  public foods = [];
  constructor(private fservice: FoodService , private sanitizer: DomSanitizer) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.apiurl);
   }
  getFOoddetails() {
    this.fservice.getFood().subscribe((res) => {
    this.foods = res as Food[];
    });
  }
  getSafeUrl(fpic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + fpic);
}
  ngOnInit() {
    this.getFOoddetails();
  }

  refresh() {
    this.fservice.getFood().subscribe((res) => {
      this.foods = res as Food[] ;
    });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.fservice.deleteFood(_id).subscribe((res) => {
      });
      this.refresh();
    }
  }

}
