import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { UserService } from '../../shared/user.service';
import { FoodService } from '../../shared/food.service';
import {OrderService} from '../../shared/order.service';
import { Food } from '../../shared/food.model';
import {DatePipe} from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookfood',
  templateUrl: './bookfood.component.html',
  styleUrls: ['./bookfood.component.css']
})
export class BookfoodComponent implements OnInit {
  userDetails;
  public id = '';
  public selectedFood = new Food();
  myDate = new Date();
  public mydate;
  constructor(private route: ActivatedRoute, private fservice: FoodService , private userService: UserService ,
    private orderService: OrderService, private datepipe: DatePipe , private router: Router) {
      this.mydate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        console.log(this.userDetails);
      },
      err => {
        console.log(err);

      }
    );
    this.id = this.route.snapshot.paramMap.get('id');
    this.getfood(this.id);
  }
  getfood(id) {
    this.fservice.getfoodid(id).subscribe((res) => {
      this.selectedFood = res as Food;
      console.log(this.selectedFood);
    }, (err) => {
      console.log(err);
    });

  }
  onSubmit(form: NgForm) {
    form.value.price = form.value.fprice * form.value.quan;
    form.value.date = this.mydate;
    this.orderService.insertOrder(form.value).subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    );
      alert('Your Booking is Confirmed');
      this.router.navigateByUrl('userprofile/bookhistory');
  }

}
