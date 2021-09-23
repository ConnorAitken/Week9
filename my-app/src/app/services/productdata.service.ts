import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../products';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':'application/json' })
};

const BACKEND_URl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private http:HttpClient) { }
  add(product:Products) {
    return this.http.post<any>(BACKEND_URl + '/api/add', product);
  }
  getlist() {
    return this.http.post<any>(BACKEND_URl + '/api/getlist', httpOptions);
  }
  getitem(productID: any) {
    return this.http.post<any>(BACKEND_URl + '/api/getitem', {'productid':productID});
  }
  updateitem(product:Products) {
    return this.http.post<any>(BACKEND_URl + '/api/update', product);
  }
  deleteitem(productID: any) {
    return this.http.post<any>(BACKEND_URl + '/api/deleteitem', {'productid':productID});
  }
  checkvalidid(productID: any){
    return this.http.post<any>(BACKEND_URl + '/api/checkvalidid', {'id':productID});
  }
  getproductcount(){
    return this.http.post<any>(BACKEND_URl + '/api/prodcount', httpOptions);
  }
}
