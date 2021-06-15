import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {URL} from '../url';
@Injectable({
  providedIn: 'root'
})
export class FinalService {

  constructor(private http:HttpClient) { }
  loginAdmin(data)
  {
    // console.log (data)
    return this.http.post(`${URL}adminlogin`,data);
  }
  getCategory()
  {
    return this.http.get(`${URL}getcategory`);
  }
  getProduct()
  {
    return this.http.get(`${URL}fetchproduct`);
  }
  getProductByCategory(cname)
  {
    return this.http.get(`${URL}fetchproduct/${cname}`);
  }
  searchProducts(ser)
  {
    return this.http.get(`${URL}searchproduct/${ser}`);
  }
  getProductById(pid)
  {
    return this.http.get(`${URL}fetchproductbyid/${pid}`);
  }
}
