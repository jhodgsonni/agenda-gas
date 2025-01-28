const HOJA = SpreadsheetApp.openById('1OEspzs-dv5ybSrLY2-pCrattgY6NAJAB0cULR0hLvAc').getActiveSheet();

function doGet(datos)
{
    /*insertarContacto(datos.parameter.nombre, datos.parameter.correo);*/
    /* LLama a la pagina web en HTML 5, y de un solo le ponemos un Titulo */
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost(datos)
{    
   /* Llama a la funcion insertarContacto y le pasa los datos del formulario */ 
    /*insertarContacto(datos.parameter.nombre, datos.parameter.correo);*/ //parameter es un objeto que contiene los datos del formulario por el metodo POST
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');//Retorna la pagina web en HTML 5
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    /* Devuelve los datos de la hoja de calculo */
   return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, apellidos,  correo, telf)
{
    HOJA.appendRow([nombre, apellidos, correo, telf]);
}

function borrarContacto(numFila)
{
    HOJA.deleteRow(numFila);
}

function modificarContacto(numFila, datos)
{
    let celdas = HOJA.getRange('A' + numFila + ':D' + numFila)
    celdas.setValues([[datos.nombre, datos.apellidos, datos.correo, datos.telf]]);
}

