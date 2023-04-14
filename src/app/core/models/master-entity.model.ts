import { Auditoria } from './auditoria.model';
export class MasterEntity extends Auditoria {
  id?: number;
  codigoAntiguo?: string;
  descripcion?: string;
  abreviatura?: string;
  activo?: boolean;
}
