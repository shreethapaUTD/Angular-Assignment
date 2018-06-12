import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:one-line
  // get call to retreive data from mock-json file using httpClient module 
  getAlltheProductDetail() {
     return this.http.get('./assets/product.json');
  }

}
