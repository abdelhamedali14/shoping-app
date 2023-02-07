import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddToCardComponent } from './components/add-to-card/add-to-card.component';
import { AuthGuard } from './guards/auth.guard';
import { UnactivtedGuard } from './guards/unactivted.guard';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'logIn', component: LogInComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate: [UnactivtedGuard],
  },
  //gard 
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addToCard',
    component: AddToCardComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
