import { ProductsService } from './../products.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  totalItem: number;
  filterProd: any;
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
 //this method call the service to retrive data 
  getAllProduct() {
    this.productService.getAlltheProductDetail().subscribe(data => {
      //after successful call assign the data to product 
      this.product = data['groups'];
      //create a copy of product 
      this.filterProd = this.product.slice(0);
    } );
  }

  // will be invoked when clicked on individual image
  showCrousel(prod, index, name) {
    this.display = true;
    this.indexOfImage = index;
    this.productName = name;
    // assign images array
    this.imagesToDisplay = prod.images;

    // tslint:disable-next-line:no-shadowed-variable
    // 
      this.images = this.imagesToDisplay.map(img => {
        img['source'] = img.href;
        return img;
      });

  }

  // to search based on the name of the products
  search(event) {
    //get the input value from textbox
   let val = event.target.value;
   if (val){
     // assign the match from input and flter out the match to product array
      this.product = this.filterProd.filter((item) =>{
           if (item.name.toLowerCase().indexOf(val.toLowerCase()) !==-1){
               return item;
           }
      })
      this.totalItem  = this.product.length;
      console.log(this.totalItem);
   }else{
     this.product = this.filterProd;
     this.totalItem = undefined;
   }
  }


}
