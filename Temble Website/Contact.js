
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // Get form input values
      const fullName = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phoneNumber = document.getElementById("phone").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validation checks
      const errors = [];

      if (!fullName) {
          errors.push("Full Name is required.");
      }
      if (!email) {
          errors.push("Email Address is required.");
      } else if (!validateEmail(email)) {
          errors.push("Invalid Email Address.");
      }
      if (!phoneNumber) {
          errors.push("Phone Number is required.");
      } else if (!validatePhoneNumber(phoneNumber)) {
          errors.push("Invalid Phone Number. Please enter a 10-digit number without any spaces or special characters.");
      }
      if (!subject) {
          errors.push("Subject is required.");
      }
      if (!message) {
          errors.push("Message is required.");
      }

      // Show errors if any
      if (errors.length > 0) {
          alert(errors.join("\n"));
          return;
      }

      // Prepare email data
      const emailData = {
          to: "upekaranasinghe200@gmail.com",
          from: email,
          subject: subject,
          body: `
              Name: ${fullName}
              Email: ${email}
              Phone: ${phoneNumber}
              Message: ${message}
          `,
      };

      // Send email using SMTP.js
      Email.send(emailData)
          .then(function () {
              alert("Your message has been sent successfully!");
              form.reset(); // Reset form after successful submission
          })
          .catch(function (error) {
              console.error("Error sending email:", error);
              alert("An error occurred while sending your message. Please try again later.");
          });
  });
});

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate phone number format
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}
