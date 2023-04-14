import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Seguimiento} from "../../../modules/procesos/pedidos/models/seguimiento.model";
import {environment} from "../../../../environments/environment";
import {map, pluck} from "rxjs/operators";
import {PersonaNatural} from "../../models/persona-natural.model";
import {ValidaDocumento} from "../../models/valida-documento";
import {Registro} from "../../models/registro.model";
import {PersonaJuridica} from "../../models/persona-juridica.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  emitter: Subject<any>;

  constructor(private http: HttpClient) {
    this.emitter = new Subject();
  }

  getEmitter(): Observable<any> {
    return this.emitter.asObservable();
  }

  validaDNI(validaDocumento: ValidaDocumento): Observable<PersonaNatural>{
    return this.http
      .post(`${environment.API_MPV}/register/validarDocumento`, validaDocumento, )
      .pipe(
        pluck('data'),
        map((res: PersonaNatural) => {
          return res;
        }));
  }

  validaDocumento(validaDocumento: ValidaDocumento): Observable<PersonaNatural>{
    return this.http
      .post(`${environment.API_MPV}/register/validarDocumento`, validaDocumento, )
      .pipe(
        pluck('data'),
        map((res: PersonaNatural) => {
          return res;
        }));
  }

  validaRUC(validaDocumento: ValidaDocumento): Observable<PersonaJuridica>{
    return this.http
      .post(`${environment.API_MPV}/register/validarRuc`, validaDocumento, )
      .pipe(
        pluck('data'),
        map((res: PersonaJuridica) => {
          return res;
        }));
  }

  registrar(registro: Registro): Observable<boolean>{
    return this.http
      .post(`${environment.API_MPV}/register/save`, registro, )
      .pipe(
        pluck('data'),
        map((res: boolean) => {
          return res;
        }));
  }
}
