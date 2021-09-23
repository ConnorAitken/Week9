import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import { Products } from '../products';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
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
export class AddProductComponent implements OnInit {
  productname:string = "";
  productdesc:string = "";
  productprice:number = 0;
  productunits:number = 0;
  productid:number = 0;
  productobjid:string = "";
  newprod:Products | undefined; 
  newProductMessage = "";
  iderrormsg:string = "This id already exists & New ID is required.";
  iderrormsg2:string = "";
  iderrorshow:boolean = false;
  noticeshow:boolean = false;
  constructor(private proddata:ProductdataService) { }

  ngOnInit(): void {
  }

  get stateName() {
    return this.iderrorshow ? 'show':'hide';
  }
  get noticeName() {
    return this.noticeshow ? 'show':'hide';
  }
  addnewProduct(event:any) {
    event.preventDefault();
    if (this.productid==null) {
      this.iderrorshow = !this.iderrorshow;
    }
    else {
      this.newprod = new Products("",this.productid,this.productname,this.productdesc,this.productprice,this.productunits);
      this.proddata.add(this.newprod).subscribe((data)=>{
        this.noticeshow = true;
        if (data.err == null) {
          this.newProductMessage = data.num + " new product (" + this.productname + ") was added";
        }
        else {
          this.newProductMessage = data.err;
        }
        this.productid = 0;
        this.productname = "";
        this.productdesc = "";
        this.productprice = 0;
        this.productunits = 0;
      });
    }
  }
  checkvalidid(event:any) {
    this.noticeshow = false;
    this.proddata.checkvalidid(event).subscribe((data)=>{
      if (data.success == 0) {
        this.iderrormsg2 = " Something above " + data.topnum;
        this.iderrorshow = !this.iderrorshow;
      }
      else {
        this.iderrorshow = false;
        this.iderrormsg2 = "";
      }
    });
  }
}
