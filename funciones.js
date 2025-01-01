function doGet()
{
    /* LLama a la pagina web en HTML 5, y de un solo le ponemos un Titulo */
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');

}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent(); 
}