import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCount:number = 0;

  constructor(private proddata:ProductdataService) { }

  ngOnInit(): void {
    this.proddata.getproductcount().subscribe((data)=> {
      this.itemCount = data.count;
    });
  }

}
