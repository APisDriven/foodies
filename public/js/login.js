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
      window.alert('Failed to log in');
    }
  } else {
    window.alert('Enter your credentials to log in')
  }
};

const submitFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();


  // Register Selectors
  const signupName = document.getElementById("name-signup").value;
  const signupEmail = document.getElementById("email-signup").value;
  const signupPw = document.getElementById("password-signup").value;

  if (signupEmail && signupName && signupPw) {

    // Send the e-mail and password to the server
    const body = JSON.stringify({
      name: signupName,
      email: signupEmail,
      password: signupPw
    })

    console.log(body)
    const response = await fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({ name: signupName, email: signupEmail, password: signupPw }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      // TODO send to dashboard automatically
      document.location.replace('/dashboard');

      // TODO delete this next line
      alert('Account registered')
    } else {
      alert('Failed to log in');
    }
  }
};

// Verify user info and send to dashboard page
let login = document.getElementById("submit-button")

// login.addEventListener("click", function () {

//   document.location.replace('/dashboard');
// });
login.addEventListener("click", loginFormHandler);

// add registration inputs to DB and send user to dashboard page
let registerBtn = document.getElementById("register-button")

registerBtn.addEventListener("click", submitFormHandler);


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
document
  .querySelector('.signup-form')
  .addEventListener('submit', submitFormHandler);

