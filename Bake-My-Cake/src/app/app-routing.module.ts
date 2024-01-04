import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SweetsRequestComponent } from 'src/sweets-request/sweets-request.component';
import { AuthService } from 'src/services/auth.service';
import { SweetsCardComponent } from 'src/sweets-card/sweets-card.component';
import { LoginComponent } from 'src/login/login.component';
import { PageNotFoundComponent } from 'src/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from 'src/services/can-deactivate.guard';
import { SweetsListComponent } from 'src/sweets-list/sweets-list.component';
import { SweetsCartComponent } from 'src/sweets-cart/sweets-cart.component';
import { AuthGuard } from 'src/services/auth-guard.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo:"/sweets",pathMatch:"full"},
  { path: "sweets/:id", component: SweetsCartComponent, canDeactivate:[CanDeactivateGuard] },
  { path: "sweets-requests", component: SweetsRequestComponent, canActivate: [AuthGuard] },
   
  {path:"sweets", component:SweetsListComponent},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
