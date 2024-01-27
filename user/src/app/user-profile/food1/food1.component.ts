import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FoodService } from '../../shared/food.service';
import { Food } from '../../shared/food.model';

@Component({
  selector: 'app-food1',
  templateUrl: './food1.component.html',
  styleUrls: ['./food1.component.css']
})
export class Food1Component implements OnInit {

  public id = '';
  public foods = [];
  public apiurl = 'http://localhost:3000';
  constructor(private route: ActivatedRoute, private router: Router, private fservice: FoodService, private sanitizer: DomSanitizer) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }
   getFOoddetails(id) {
    this.fservice.getfoodcatid(id).subscribe((res) => {
    this.foods = res as Food[];
    console.log(this.foods);
    });
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getFOoddetails(this.id);
  }
  getSafeUrl(fpic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + fpic);
}
onBook(id) {
  this.router.navigate([ '/userprofile/bookfood', {id: id} ]);
}

}
