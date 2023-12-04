const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://fu6pt364bbesypsehh75yvcosa0bnxdq.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();
