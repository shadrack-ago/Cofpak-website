document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! Your message has been received.");
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        event.preventDefault();
        alert("Please fill out all fields before submitting the form.");
        break;
      }
    }
  });
  