import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductTypesComponent } from './components/product-types/product-types.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product/', component: ProductComponent },
  {
    path: 'product/:category',
    component: ProductTypesComponent,
    children: [{ path: ':type', component: ProductComponent }],
  },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
