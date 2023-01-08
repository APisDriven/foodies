const foodInputFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const foodName = document.querySelector('#today-meal').value.trim();
    const calories = document.querySelector('#today-cal').value.trim();
  
    if (foodName && calories) {
      console.log('Sending a request to the server')
      const formattedRequest = {
        'name': foodName,
        'calories': calories
      }

      const response = await fetch('/api/foodEntries/saveFoodEntry', {
        method: 'POST',
        body: JSON.stringify(formattedRequest),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
  
      if (response.ok) {
        // document.location.replace('/dashboard');
        alert('saved')
      } else {
        alert('Failed to save meal');
      }
    } else {
      window.alert('Make sure to enter your food entry and calories before saving!')
    }
  };
  
  document.getElementById('save-food-entry')
  .addEventListener('click', foodInputFormHandler);