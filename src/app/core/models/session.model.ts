import {Usuario} from './usuario.model';
import {Aplication} from './aplication.model';

export class Session {
  aplicaciones?: Aplication[];
  usuario?: Usuario;

  resetClassInstance(): void {
    this.aplicaciones = undefined;
    this.usuario = undefined;
  }
}
