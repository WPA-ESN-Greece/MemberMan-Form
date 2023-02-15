function setTriger(){

  ScriptApp.newTrigger('sendConfirmationEmail')
  .forForm(FormApp.getActiveForm())
  .onFormSubmit()
  .create()

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