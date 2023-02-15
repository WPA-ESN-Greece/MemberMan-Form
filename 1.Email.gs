var EMAIL_SUBJECT = "Thanks for participating"

var HEADER = "Your Submition was Successful!"

var MESSAGE_BODY = "Θα σε ειδοποίήσουμε για τις επόμενες δράσεις μας."

var SIGNATURE = "The ESN Team"


function sendConfirmationEmail(e){

  var emailTo = e.response.getRespondentEmail()
  var subject = "Thanks for participating"


  var message =                      
  //sets HTML template for information
          `
          <p><b>${HEADER}</b></p> +
          <p>${MESSAGE_BODY}</p> +
          <br>
          <p> ${SIGNATURE}</p>
          ` //End of message


  MailApp.sendEmail(
          {
            
              to: emailTo,
              cc: "",
              subject: EMAIL_SUBJECT,
              htmlBody: message,
          })
}
