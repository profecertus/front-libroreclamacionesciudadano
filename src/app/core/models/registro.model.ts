export class Registro {
  public id: number;
  public tipoPersonaId: number;
  public tipoDocumento: string;
  public nroDocumento: string;
  public codigoVerificador: string;
  public nombres: string;
  public apellidoPaterno: string;
  public apellidoMaterno: string;
  public ubigeo: string;
  public direccion: string;
  public ubigeoActualId: string;
  public direccionActual: string;
  public celular: string;
  public telefono: string;
  public correoElectronico: string;

  public cargo?: string;
  public razonSocial?: string;
  public tipoDocumentoRubrica?: string;
  public nroDocumentoRubrica?: string;

  public menorDeEdad?: boolean;

  public totp: string;
  public clave: string;

  public captcha: string;

  public consultaIdReniec?: number;
  public consultaIdSunat?: number;
  public servicioReniec?: boolean;
  public servicioSunat?: boolean;

  public codResultado?: string;
  public restriccion?: string;

  public descDepartamento?: string;
  public descProvincia?: string;
  public descDistrito?: string;
}
