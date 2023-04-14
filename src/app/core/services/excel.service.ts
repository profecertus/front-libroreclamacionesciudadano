import {Injectable} from "@angular/core";
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import * as logoFile from '../../../assets/images/js/images-base64.js';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  exportExcel(title: string, columns: any[], data: any[], nameFile: string) {
    const l_header = [];
    const l_width = [];

    for (const obj of columns) {
      l_width.push(obj[1]);
      l_header.push(obj[0]);
    }

    /*Crear Hoja*/
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Data');

    /*Ancho de Columnas*/
    for (let i = 1; i <= l_width.length; i++) {
      worksheet.getColumn(i).width = l_width[i - 1];
    }

    /*Add Image*/
    const logo = workbook.addImage({
      base64: logoFile.logoCongreso,
      extension: 'png',
    });

    worksheet.addRow([]);

    /*Titulo*/
    const titleRow = worksheet.addRow([title]);
    titleRow.font = { name: 'Arial', size: 16, bold: true };

    worksheet.addRow([]);

    /*Cabecera*/
    const headerRow = worksheet.addRow(l_header);
    headerRow.height = 30;

    headerRow.eachCell((cell) => {
      cell.fill   = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF7B8188' }, bgColor: { argb: 'FF0000FF' } };
      cell.font   = { bold: true, color: {argb: 'FFFFFFFF'}};
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      cell.alignment = { vertical: "middle", horizontal : "center", wrapText: true};
    });

    /*Datos*/
    data.forEach(d => {
      const dataRow = worksheet.addRow(d);
    });

    /*Generar Excel*/
    workbook.xlsx.writeBuffer().then((data1: BlobPart) => {
      const blob = new Blob([data1], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, nameFile + '.xlsx');
    });
  }
}
