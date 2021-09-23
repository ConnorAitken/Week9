import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserobjService {
  uname = "";
  bdate = "";
  age = "";
  email = "";
  upwd = "";
  valid = false;
  setDetails(uname: string, bdate: string, age: string, email: string, upwd: string) {
      this.uname = uname;
      this.bdate = bdate;
      this.age = age;
      this.email = email;
      this. upwd = upwd;
  }
}
