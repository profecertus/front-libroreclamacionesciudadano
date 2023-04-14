// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  SYSTEM: 'MV',
  SYSTEM_NAME: 'MESA DE PARTES DIGITAL DEL CONGRESO DE LA REPÚBLICA',
  SYSTEM_URL: 'http://localhost:4200/#/',
  MAX_UPLOAD_FILES: 57776537, // 55MB
  // API_AUTENTICACION: 'http://localhost:5959/autenticacion-externo-service',
  API_AUTENTICACION: 'https://wb2serverdesa.congreso.net/autenticacion-externo-service',
  // API_MAESTROS: 'http://localhost:5151/smaestros-service',
  API_MAESTROS: 'https://wb2serverdesa.congreso.net/smaestros-service',
  API_PEDIDOS: 'http://localhost:6565/mpv-service',
  // API_MPV: 'http://localhost:6565/mpv-service',
  API_MPV: 'https://wb2serverdesa.congreso.net/mpv-service',
  // API_STD: 'https://svr-appdesa.congreso.net/std/api',
  API_STD: 'https://svr-apptest.congreso.net/std/api',
  KEY_RECAPTCHA3: '6LdCglQbAAAAAPJugel88fhPXyyxC7Ip2KOsI3vV',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
