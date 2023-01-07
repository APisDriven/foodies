const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in');
    }
  }
};

const submitFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();


  // Register Selectors
  const signupName = document.getElementById("name-signup");
  const signupEmail = document.getElementById("email-signup");
  const signupPw = document.getElementById("password-signup");



    if (signupEmail.value && signupName.value && signupPw.value) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({ name: signupName.value, email: signupEmail.value, password: signupPw.value }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {

        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };

// Verify user info and send to dashboard page
let login = document.getElementById("submit-button")

login.addEventListener("click", function () {
  document.location.replace('/dashboard');

});

  // add registration inputs to DB and send user to dashboard page
  let registerBtn = document.getElementById("register-button")

  registerBtn.addEventListener("click", async function (event) {
    // check on this code:
    document.location.replace('/dashboard');

    event.preventDefault()});


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
document
  .querySelector('.signup-form')
  .addEventListener('submit', submitFormHandler);

