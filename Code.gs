function onOpen(e){
  
  //Menu Item
  FormApp.getUi().createAddonMenu().addItem('🌌 Set-Up','setTriger').addToUi()
  
  authPopUp()
  
}

function setUp(){
  
  setTriger()

}

function setTriger(){

  ScriptApp.newTrigger('sendConfirmationEmail')
  .forForm(FormApp.getActiveForm())
  .onFormSubmit()
  .create()

}

//Authentication Window
function authPopUp()
{

  var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL)
  
  if (authInfo.getAuthorizationStatus() == 'REQUIRED'){

    var authUrl = authInfo.getAuthorizationUrl()
    var ui = SpreadsheetApp.getUi()
    var message = HtmlService.createHtmlOutput(`<p style="font-family: 'Open Sans'">Authenticate your script.<a href="${authUrl}"target="_blank">here</a></p>`).setWidth(400).setHeight(60)
    SpreadsheetApp.getUi().showModalDialog(message,"Authentication")

  }

}

