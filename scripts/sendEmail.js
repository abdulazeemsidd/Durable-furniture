$(document).ready(function(){
  let public_key = "kwuYbPgDfPDwTl3dT";
  let service_id = "default_service";
  let template_id = "template_req48or";

  emailjs.init(public_key);
  $("#formsubmission").submit(function(event){
    event.preventDefault();

    let formData = $("#formsubmission")[0];
    

    emailjs.sendForm(service_id, template_id, formData)
      .then(() => {
        Swal.fire({
            title: "Success!",
            text: "Your Message has been sent successfully!",
            icon: "success"
          });
        formData.reset();
      }, (error) => {
        alert("Failed to send message. Please try again.");
        console.log(`Something went wrong, Try again. : ${JSON.stringify(error)}`);
      });

  });
});