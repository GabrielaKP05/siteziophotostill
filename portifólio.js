
  
   
// Get the contact form
const contactForm = document.getElementById('contactForm');

// Add a submit event listener to the form
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  
  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Create the email content
  const emailContent = `
    <h2>Introduction</h2>
    <p>Thank you for reaching out. Here's a brief introduction about myself and my portfolio:</p>
    <!-- Add your introduction and portfolio information here -->
  `;
  
  // Send the email using Nodemailer
  sendEmail(name, email, 'Introduction and Portfolio', emailContent);
  
  // Reset the form fields
  contactForm.reset();
});

// Function to send the email
function sendEmail(name, email, subject, content) {
  // Import the required modules
  const nodemailer = require('nodemailer');
  
  // Configure the transporter
  const transporter = nodemailer.createTransport({
    // Configure the email provider settings here
    // For example, if using Gmail, you would provide the SMTP settings for Gmail
  });
  
  // Configure the email options
  const mailOptions = {
    from: email,
    to: 'gabikpadilha@gmail.com', // Change this to your email address
    subject: subject,
    html: content
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}
