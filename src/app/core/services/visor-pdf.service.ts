import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisorPdfService {
  public base64 = new Subject<string>();

  constructor(private http: HttpClient) {}

  Archivo(url): Observable<HttpResponse<any>> {
    const httpOptions = {
      responseType: 'blob' as 'json',
      observe: 'response' as 'body'
    };

    return this.http.get<HttpResponse<any>>(url, httpOptions);
  }
}
