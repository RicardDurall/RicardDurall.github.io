function submitForm() {
    sendMail();
    // Redirect to index.html after sending mail
    window.location.href = "/index.html";
}

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
    emailjs.send("service_k8r8ows", "template_gltyzdo", parms)
        .then(function() {
            alert("Thank you for your email. We will get back to you as soon as possible!");
        });
}