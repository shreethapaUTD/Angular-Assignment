import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { By } from '@angular/platform-browser';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      imports: [HttpClientModule],
      providers: [ProductsService, HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
  });


  it('show make a service call on component initializaton', (() => {
    const service = TestBed.get(ProductsService);
    spyOn(service, 'getAlltheProductDetail').and.returnValue(Observable.from([{'groups': [1, 2, 3]}]));
     component.ngOnInit();
   expect(component.product.length).toBe(3);
   }));

});
