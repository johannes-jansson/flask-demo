// Save references to the button and the result div
const button = document.getElementById('execute');
const results = document.getElementById('results');

// Add a listener to the button
button.addEventListener('click', (event) => {
  // Update the contents of the result div
  results.innerHTML = 'loading...';
  // Fetch is used to send HTTP requests from javascript
  fetch('http://localhost:5000/my-action').then(
    // When the request has arrived, parse the body as JSON
    (response) => response.json()
  ).then((body) => {
    // When the body has been parsed, update the contents of the result div
    results.innerHTML = body.field_a;
  });
});
