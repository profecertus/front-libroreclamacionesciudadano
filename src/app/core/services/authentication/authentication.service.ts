import { Injectable } from '@angular/core';
import {Cuenta} from "../../models/cuenta.model";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Login} from "../../models/login.model";
import {environment} from "../../../../environments/environment";
import {map, pluck} from "rxjs/operators";
import {Usuario} from "../../models/usuario.model";
import {Session} from '../../models/session.model';
import {Tipo} from "../../../modules/procesos/pedidos/models/tipo.model";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  emitter: Subject<Cuenta>;

  constructor(
    private http: HttpClient
  ) {
    this.emitter = new Subject();
  }

  getEmitter(): Observable<Cuenta> {
    return this.emitter.asObservable();
  }

  autenticacion(login: Login): Observable<Session> {
    return this.http.post(`${environment.API_MPV}/login/autenticacion`, login, ).pipe(
      pluck('data'),
      map( (res: Session) => {
        return res;
      })
    );
  }

  autenticacionInterna(login: Login): Observable<Session> {
    return this.http.post(`${environment.API_AUTENTICACION}/autenticacion`, login, ).pipe(
      pluck('data'),
      map( (res: Session) => {
        return res;
      })
    );
  }

  recuperacion(login: Login): Observable<any> {
    return this.http.post(`${environment.API_MPV}/login/recuperacion`, login, ).pipe(
      pluck('data'),
      map( (res: any) => {
        return res;
      })
    );
  }

  enviarCorreoTotp(username: string): Observable<string> {
    return this.http.get(`${environment.API_AUTENTICACION}/totp/qr/${username}/enviar-correo`).pipe(
      pluck('data'),
      map( (email: string) => {
        return email;
      })
    );
  }

  getTipoPersona(): Observable<Tipo[]> {
    return this.http
      .get(
        `${environment.API_MPV}/login/tipoPersona`
      )
      .pipe(
        pluck('data'),
        map( (res: Tipo[]) => {return res}));
  }
}
