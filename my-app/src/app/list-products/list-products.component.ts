import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import { Products } from '../products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Products[] = [];
  constructor(private proddata:ProductdataService) { }

  ngOnInit(): void {
    this.proddata.getlist().subscribe((data)=> {
      this.products = data;
    });
  }

  deleteproduct(id: any) {
    if (confirm("Are you sure you want to delete this item")) {
      this.proddata.deleteitem(id).subscribe((data)=> {
        this.products = data;
      });
    }
  }
}
