// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DatePipe} from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
// routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { CategoryService } from './shared/category.service';
import { FoodService} from './shared/food.service';
import {OrderService} from './shared/order.service';
// other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
import { FoodComponent } from './nav/food/food.component';
import { Food1Component } from './user-profile/food1/food1.component';
import { BookfoodComponent } from './user-profile/bookfood/bookfood.component';
import { Home1Component } from './user-profile/home1/home1.component';
import { About1Component } from './user-profile/about1/about1.component';
import { BookhistoryComponent } from './user-profile/bookhistory/bookhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    FoodComponent,
    Food1Component,
    BookfoodComponent,
    Home1Component,
    About1Component,
    BookhistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, DatePipe, AuthGuard, UserService , CategoryService , FoodService , OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
