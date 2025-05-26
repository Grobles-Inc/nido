// Google Apps Script code to handle form submissions
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    // Get the last row to append new data
    const lastRow = sheet.getLastRow();
    
    // If this is the first submission, add headers
    if (lastRow === 0) {
      sheet.appendRow([
        'Timestamp',
        'Tipo de Consulta',
        'Nombre',
        'Email',
        'Teléfono',
        'Mensaje'
      ]);
    }
    
    // Append the form data
    sheet.appendRow([
      new Date(), // Timestamp
      data.request,
      data.name,
      data.email,
      data.phone,
      data.message
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data successfully saved'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Add CORS headers to allow requests from your website
function doOptions(e) {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  };
  
  return ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
} 