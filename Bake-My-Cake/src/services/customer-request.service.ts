import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerRequest } from 'src/models/customer-request';

@Injectable({
  providedIn: 'root'
})
export class customerRequestService {

  URL: string = "http://localhost:3000/requests";
  constructor(private http: HttpClient) { }

  getAllReqeusts() : Observable<Array<customerRequest>> {
    return this.http.get<Array<customerRequest>>(`${this.URL}`);
  }

  saveRequest(customerrequest? : customerRequest) : Observable<customerRequest> {
    return this.http.post<customerRequest>(`${this.URL}`, customerrequest)
  }
}
