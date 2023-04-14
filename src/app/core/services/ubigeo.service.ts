import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, pluck} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Ubigeo} from "../models/ubigeo.model";

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  emitter: Subject<Ubigeo>;

  constructor(
    private http: HttpClient
  ) {
    this.emitter = new Subject();
  }

  getEmitter(): Observable<Ubigeo> {
    return this.emitter.asObservable();
  }


  getDepartamentos(): Observable<Ubigeo[]> {
    return this.http.get(`${environment.API_MPV}/ubigeo/departamentos`).pipe(
      pluck('data'),
      map( (res: Ubigeo[]) => {
        return res;
      })
    );
  }

  getProvincias(departamento: string): Observable<Ubigeo[]> {
    return this.http.get(`${environment.API_MPV}/ubigeo/provincias/${departamento}`).pipe(
      pluck('data'),
      map( (res: Ubigeo[]) => {
        return res;
      })
    );
  }

  getDitritos(provincia: string): Observable<Ubigeo[]> {
    return this.http.get(`${environment.API_MPV}/ubigeo/distritos/${provincia}`).pipe(
      pluck('data'),
      map( (res: Ubigeo[]) => {
        return res;
      })
    );
  }


}
