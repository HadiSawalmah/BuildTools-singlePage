// Replace checkForName with a function that checks the URL
import { checkForName } from './nameChecker'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8000/api'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // This is an example code that checks the submitted name. You may remove it from your code
    checkForName(formText);
    
    // Check if the URL is valid
    if (checkForName(formText)) {
        console.log("::: Form Submitted :::");
        // If the URL is valid, send it to the server using the serverURL constant above
        sendDataToServer(formText);
    } else {
        alert("Invalid URL. Please enter a valid URL.");
    }
}

// Function to send data to the server
function sendDataToServer(url) {
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
        document.getElementById('results').innerHTML = `
            <p>Agreement: ${data.agreement}</p>
            <p>Confidence: ${data.confidence}</p>
            <p>Irony: ${data.irony}</p>
        `;
    })
    .catch((error) => console.error('Error:', error));
}

// Export the handleSubmit function
export { handleSubmit };

