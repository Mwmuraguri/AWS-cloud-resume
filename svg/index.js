const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        // Fetch data from the server
        let response = await fetch("https://fu6pt364bbesypsehh75yvcosa0bnxdq.lambda-url.us-east-1.on.aws/");

        // Check if the request was successful (status code 200)
        if (response.ok) {
            // Parse the response as JSON
            let data = await response.json();

            // Update the counter with the retrieved data
            counter.innerHTML = `This page has ${data} Views!`;
        } else {
            // Handle error response
            console.error(`Failed to fetch visit count. Status: ${response.status}`);
        }
    } catch (error) {
        // Handle fetch errors
        console.error("Error fetching visit count:", error);
    }
}

// Call the function to update the counter when the page loads
updateCounter();
