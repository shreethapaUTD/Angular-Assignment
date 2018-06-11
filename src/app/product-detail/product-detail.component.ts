import { ProductsService } from './../products.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  product: Array<any> = [];
  display: boolean;
  imagesToDisplay: Array<any> = [];
  indexOfImage: any;
  images: Array<any> = [];
  productName: any;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAlltheProductDetail().subscribe(data => {
      console.log(data);
      this.product = data['groups'];
    } );
  }
  showCrousel(prod, index, name) {
    this.display = true;
    this.indexOfImage = index;
    this.productName = name;
    this.imagesToDisplay = prod.images;

    // tslint:disable-next-line:no-shadowed-variable

      this.images = this.imagesToDisplay.map(img => {
        img['source'] = img.href;
        return img;
      });

  }


}
