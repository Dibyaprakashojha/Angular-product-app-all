import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { TypeView } from '../models/type-view';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _baseurl = 'http://localhost:8082/product-api/products';

  constructor(private _httpClient: HttpClient) {}

  getProducts = (): Observable<Product[]> => {
    return this._httpClient.get<Product[]>(this._baseurl);
  };

  getById = (id: number): Observable<Product> => {
    let url = `${this._baseurl}/product-id/${id}`;
    return this._httpClient.get<Product>(url);
  };

  getDistinctCategory = (): Observable<string[]> => {
    let url = `${this._baseurl}/category/distinct`;
    return this._httpClient.get<string[]>(url);
  };

  getDistinctType = (category: string): Observable<TypeView[]> => {
    let url = `${this._baseurl}/type/category/${category}`;
    return this._httpClient.get<TypeView[]>(url);
  };

  getByCategory = (category: string): Observable<Product[]> => {
    let url = `${this._baseurl}/category/${category}`;
    return this._httpClient.get<Product[]>(url);
  };

  getByType = (type: string): Observable<Product[]> => {
    let url = `${this._baseurl}/type/${type}`;
    return this._httpClient.get<Product[]>(url);
  };
}
