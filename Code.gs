

function onOpen(e){
  
  //Menu Item
  FormApp.getUi().createAddonMenu().addItem('Set-Up','setTriger').addToUi()
  
}


function setTriger(){

  authPopUp()

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

function sendConfirmationEmail(e){

  var emailTo = e.response.getRespondentEmail()
  var subject = "Thanks for participating"
  var signature = "The ESN Team"

  var message =                      
  //sets HTML template for information
          `
          <p><b>Your Submition was Successful!</b></p> +
          <p>Θα σε ειδοποίήσουμε για τις επόμενες δράσεις μας.</p> +
          <p>Yours,<br> ${signature}</p>
          ` //End of message


  MailApp.sendEmail(
          {
            
              to: emailTo,
              cc: "",
              subject: subject,
              htmlBody: message,
          })
}
