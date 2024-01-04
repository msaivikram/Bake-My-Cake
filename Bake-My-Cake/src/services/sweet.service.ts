import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cake } from 'src/models/cake';

@Injectable({
  providedIn: 'root'
})
export class SweetService {
  URL: string = "http://localhost:3000/delicious";
  constructor(private http: HttpClient) { }

  getAllSweets(): Observable<Array<cake>> {
    return this.http.get<Array<cake>>(this.URL)
  }

  getSweets(id?: string) : Observable<cake>{
    console.log(id);
    return this.http.get<cake>(`${this.URL}/${id}`);
  }
}
