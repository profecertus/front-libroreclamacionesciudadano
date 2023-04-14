import {Component, OnDestroy, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-libroreclamacionesciudadano';

  constructor(private config: PrimeNGConfig) {}

  ngOnInit():void {
    this.config.setTranslation({
      startsWith: "Comienza por",
      contains: "Contiene",
      notContains: "No contiene",
      endsWith: "Termina con",
      equals: "Igual a",
      notEquals: "No es igual a",
      noFilter: "No Filter",
      lt: "Menor que",
      lte: "Menor o igual a",
      gt: "Mayor que",
      gte: "Mayor o igual que",
      is: "Es",
      isNot: "No es",
      before: "Hasta",
      after: "Desde",
      clear: "Limpiar",
      apply: "Aplicar",
      matchAll: "AND",
      matchAny: "OR",
      addRule: "Añadir regla",
      removeRule: "Remover regla",
      accept: "Si",
      reject: "No",
      choose: "Escoger",
      upload: "Subir",
      cancel: "Cancelar",
      dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      today: "Hoy",
      weekHeader: "Sem",
      weak: 'Débil',
      medium: 'Medio',
      strong: 'Fuerte',
      passwordPrompt: 'Ingrese una contraseña',
      dateIs: 'Es igual a',
      dateIsNot: 'No es igual a',
      dateBefore: 'Antes',
      dateAfter: 'Después'
    });
  }

  ngOnDestroy():void {
    
  }
}
