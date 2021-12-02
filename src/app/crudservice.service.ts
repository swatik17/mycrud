import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  Url:string= 'https://jsonplaceholder.cypress.io/';

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get(this.Url + 'users');
  }
  addUser(userObj:any){
    return this.http.post(this.Url + 'users',userObj);
  }
}
