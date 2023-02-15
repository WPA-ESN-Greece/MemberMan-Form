function onOpen(e){
  
  //Menu Item
  FormApp.getUi().createAddonMenu().addItem('🌌 Set-Up','setTriger').addToUi()
  
}

function setUp(){
  
  authPopUp()
  setTriger()

  //notify()

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

function notify(){

  /*var ui = FormApp.getUi()
    
    var alertMessage = HtmlService.createHtmlOutput(`<p style="font-family: 'Open Sans'">Set Up completed! Triger set. (Now your form resmponders dhould get an email upon submit)</p>`)
    
    FormApp.getUi().showModalDialog(alertMessage,"Documentation")*/
    //ui.alert("Set Up completed! Triger set. (Now your form resmponders dhould get an email upon submit)",ui.ButtonSet.OK)

}
