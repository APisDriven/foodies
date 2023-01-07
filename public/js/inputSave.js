const foodInputFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const todayMeal = document.querySelector('#today-meal').value.trim();
    const todayCalories = document.querySelector('#today-cal').value.trim();
  
    if (todayMeal && todayCalories) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/foodEntries', {
        method: 'POST',
        body: JSON.stringify({ todayMeal, todayCalories }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to save meal');
      }
    }
  };
  
  document
  .querySelector('#food-item-form')
  .addEventListener('save', foodInputFormHandler);
