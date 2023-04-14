import {Roles} from "./roles.model";

export class Usuario {
  id?: number;
  tipoPersonaId?: number;
  tipoDocumento?: string;
  nroDocumento?: string;
  nombres?: string;
  apellidoPaterno?: string;
  apellidoMaterno?: string;
  razonSocial?: string;
  tipoDocumentoRubrica?: string;
  nroDocumentoRubrica?: string;
  tipoUsuario?: number;

  /**/
  username?: string;
  codPeriodo?: string;
  // nombres?: string;
  apellidos?: string;
  email?: string;
  codEmpleado?: string;
  codCostcenter?: string;
  desCostcenter?: string;
  acciones?: string[];
  perfiles?: string[];
  roles?: Roles[];
}
