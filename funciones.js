function doGet()
{
    /* LLama a la pagina web en HTML 5, y de un solo le ponemos un Titulo */
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}
function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
   let hoja = SpreadsheetApp.openById('1OEspzs-dv5ybSrLY2-pCrattgY6NAJAB0cULR0hLvAc').getActiveSheet();
   let datos = hoja.getDataRange().getValues();
   return datos;
}