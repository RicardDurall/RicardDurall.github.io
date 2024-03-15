function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    // Send email using emailjs
    emailjs.send("service_k8r8ows", "template_gltyzdo", parms)
    .then(function(response) {
        console.log("Email sent successfully", response);
        // Display confirmation message
        var thankYouMessage = document.getElementById("confirmation");
        thankYouMessage.style.display = "block";
        // Redirect after 3 seconds
        setTimeout(function() {
            window.location.href = "index.html"; 
        }, 3000);
    }, function(error) {
        console.error("Email send failed", error);
        // Handle error here if needed
    });
}