import * as xls from "excel4node";
import { GetTareas, GetTareasDateRange } from "./TareasServices"
import { Tareas } from "src/models/tareas";
import { join } from "path";


export async function ExportToExcel(fecha_inicial: string = "", fecha_final: string = "", directory: string){

    // Traemos los datos de la db
    let tareas_list: Tareas[] 
    if (fecha_inicial != "" && fecha_final != ""){
        tareas_list = await GetTareasDateRange(fecha_inicial, fecha_final);
    }else{
        tareas_list = await GetTareas();
    }

    // Instancia del libro
    const workbook = new xls.Workbook();

    // Hoja de trabajo
    const worksheet = workbook.addWorksheet("Tareas");


    // add style mamalon
    const style = workbook.createStyle({
        font: {
            color: "#040404",
            name: "Arial",
            size: 12
        }
    });

    // add green style
    const greenStyle = workbook.createStyle({
        font: {
            bold: true,
            color: "#388813",
            name: "Arial",
            size: 12
        }
    });

    // agregar los encabezados de la tabla
    worksheet.cell(1,1).string("Num").style(greenStyle);
    worksheet.cell(1,2).string("Fecha Inicio").style(greenStyle);
    worksheet.cell(1,3).string("Fecha Vencimiento").style(greenStyle);
    worksheet.cell(1,4).string("Titulo Tarea").style(greenStyle);

    // agregar datos
    tareas_list.forEach((tarea, index) =>{
        worksheet.cell(index + 2, 1).number(index + 1).style(style);
        worksheet.cell(index + 2, 2).string(tarea.fecha_inicio).style(style);
        worksheet.cell(index + 2, 3).string(tarea.fecha_vencimiento).style(style);
        worksheet.cell(index + 2, 4).string(tarea.titulo).style(style);
    });

    // seteamos el ancho de la celda
    worksheet.column(1).setWidth(6);
    worksheet.column(2).setWidth(20);
    worksheet.column(3).setWidth(20);
    worksheet.column(4).setWidth(30);

    // guardamos el pinche archivos alv
    const storeDir = join(directory, "test.xlsx");
    workbook.write(storeDir);
}



