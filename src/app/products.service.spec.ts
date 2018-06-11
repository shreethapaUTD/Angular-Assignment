import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService, HttpClientModule],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
