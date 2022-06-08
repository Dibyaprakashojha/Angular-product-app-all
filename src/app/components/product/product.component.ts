import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  type!: string;

  // inject Router to navigate to other components

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe((map) => {
    //   let typ = map.get('type');
    //   if (typ) this.type = typ;

    //   this._productService.getByType(this.type).subscribe({
    //     next: (data) => {
    //       this.products = data;
    //     },
    //     complete: () => console.log(`completed successfully`),
    //   });
    // });

    //QueryParamMap
    this._activatedRoute.queryParamMap.subscribe((map) => {
      let typ = map.get('type');
      if (typ) this.type = typ;

      this._productService.getByType(this.type).subscribe({
        next: (data) => {
          this.products = data;
        },
        complete: () => console.log(`completed successfully`),
      });
    });
  }

  onSubmit = (product: Product) => {
    // use router to navigate to productDetailsComponent
    this._router.navigate(['/product-details', product.productId]);
  };
}
