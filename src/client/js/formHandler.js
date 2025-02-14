import { checkURL } from './checkUrl';

const serverURL = 'https://localhost:8000/api';

function handleSubmit(event) {
  event.preventDefault();

  const formText = document.getElementById('name');
  if (!formText) {
    console.error("Element with ID 'name' not found.");
    return;
  }

  const url = formText.value;

  if (checkURL(url)) {
    console.log("::: Form Submitted :::");

    fetch(serverURL, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Received data:", data);
        
        const resultsDiv = document.getElementById('results');
        if (resultsDiv) {
          resultsDiv.innerHTML = `
            <p>Agreement: ${data.agreement}</p>
            <p>Confidence: ${data.confidence}</p>
            <p>Irony: ${data.irony}</p>
          `;
        } else {
          console.error("Element with ID 'results' not found.");
        }
      })
      .catch((error) => console.error('Error:', error));
  } else {
    alert("Invalid URL. Please enter a valid URL.");
  }
}

export { handleSubmit };
