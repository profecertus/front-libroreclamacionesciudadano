import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

import {HttpClient} from "@angular/common/http";
import {UsuarioPerfil} from "../../models/usuario-perfil.model";
import {environment} from "../../../../environments/environment";
import {map, pluck} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class UsuarioPerfilService {
  emitter: Subject<UsuarioPerfil>;

  constructor(
    private http: HttpClient
  ) {
    this.emitter = new Subject();
  }

  getEmitter(): Observable<UsuarioPerfil> {
    return this.emitter.asObservable();
  }

  getUsuarioPerfil(usuario: string): Observable<UsuarioPerfil> {
    return this.http
      .get(`${environment.API_PEDIDOS}/usuario/${usuario}`)
      .pipe(
        pluck('data'),
        map((res: UsuarioPerfil) => {
          return res;
        })
      );
  }
}
