import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Food1Component} from './user-profile/food1/food1.component';
import { BookfoodComponent} from './user-profile/bookfood/bookfood.component';
import {Home1Component} from './user-profile/home1/home1.component';
import {About1Component} from './user-profile/about1/about1.component';
import {BookhistoryComponent} from './user-profile/bookhistory/bookhistory.component';
import { NavComponent} from './nav/nav.component';
import {HomeComponent} from './nav/home/home.component';
import { AboutComponent} from './nav/about/about.component';
import { FoodComponent} from './nav/food/food.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard],
         children: [{ path: 'food1', component: Food1Component  },
        {path: 'bookfood' , component: BookfoodComponent},
        {path: 'home1' , component: Home1Component },
        {path: 'about1' , component: About1Component},
        {path: 'bookhistory', component: BookhistoryComponent}
    ]
    },
    {
        path: 'nav', component: NavComponent,
        children: [{ path: 'home', component: HomeComponent},
        {path: 'about', component: AboutComponent},
        { path : 'food' , component : FoodComponent}

        ]
    },
    {
        path: '', redirectTo: '/nav/home', pathMatch: 'full'
    }
];
