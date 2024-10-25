// This function simulates captcha refresh
function refreshCaptcha() {
    const captchaElement = document.getElementById('captcha');
    captchaElement.textContent = Math.floor(100000 + Math.random() * 900000);
}

// Handling form submission to download a PDF file
document.getElementById('scorecardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate PDF download
    const link = document.createElement('a');
    link.href = "https://neet-scorecard.tiiny.site" // replace with the actual path to the PDF
    link.download = 'NEET_Scorecard.pdf';
    link.click();
});
