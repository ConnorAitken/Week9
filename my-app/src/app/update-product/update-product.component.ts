import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductdataService } from '../services/productdata.service';
import { Products } from '../products';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
  animations:[
    trigger('iderrorState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide',animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),
    ]),
    trigger('noticeState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide',animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),
    ])
  ]
})
export class UpdateProductComponent implements OnInit {
  productobjid:string = "";
  product:Products | any; 
  editProductMessage = "";
  noticeshow:boolean = false;
  constructor(private proddata:ProductdataService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.productobjid = this.route.snapshot.params._id;
    this.proddata.getitem(this.productobjid).subscribe((data)=> {
      this.product = data[0];
    });
  }

  get noticeName() {
    return this.noticeshow ? 'show':'hide';
  }

  updateProduct(event:any) {
    event.preventDefault();
    this.proddata.updateitem(this.product).subscribe((data)=>{
      this.noticeshow = true;
      if (data.ok == true) {
        this.editProductMessage = "Product (" + this.product.name + ") was edited";
        this.router.navigateByUrl('/list');
      }
      else {
        this.editProductMessage = "Error occurred";
      }
    });
  }

  return() {
    this.router.navigateByUrl('/list');
  }
}
