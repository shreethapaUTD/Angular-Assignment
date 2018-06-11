
import { RouterModule,  Routes, Router} from '@angular/router';
import { ProductsService } from './products.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {GalleriaModule} from 'primeng/galleria';


const  routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product-detail', component: ProductDetailComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    HomeComponent,
    MenuComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    DialogModule,
    GalleriaModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
