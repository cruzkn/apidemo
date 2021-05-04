import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
// import { Table } from '../_models/table';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(dummyURL) {
    return this.http.get<any[]>(dummyURL);    
 }

}
