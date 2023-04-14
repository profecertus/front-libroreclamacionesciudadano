export class Login {
  public tipoUsuario: number; /*1 Interno, 2 Externo*/
  public tipoPersonaId: number;
  public nroDocumento: string;
  public nroDocumentoRubrica: string;
  public clave: string;
  public captcha: string;
  public correo: string;
  public totp: string;
  public intentos: number;
  public aplicaciones: string[];
  public contrasena: string;
  public usuario: string;
}
