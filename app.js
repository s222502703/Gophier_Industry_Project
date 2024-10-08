// Import the express module
const express = require('express');
const app = express();

// Set up a route to serve the HTML content
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>HealthEasers - Your Path to a Healthy Future</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 20px;
                    background-color: white; /* Soft cream background for a welcoming feel */
                }
                .container {
                    max-width: 800px;
                    margin: auto;
                    background: red;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1, h2 {
                    color: #2c5d99;
                    font-size: 1.6em;
                }
                .feature {
                    margin-bottom: 20px;
                    padding: 15px;
                    background: lightblue; /* Light blue background for features */
                    border-radius: 8px;
                }
                button {
                    display: block;
                    width: 100%;
                    max-width: 300px;
                    margin: 15px auto;
                    padding: 12px;
                    background: blueviolet;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                }
                button:hover {
                    background: orangered;
                }
                p {
                    font-size: 1.1em;
                    color: black;
                }
                @media (max-width: 600px) {
                    h1, h2 {
                        font-size: 1.3em;
                    }
                    button {
                        width: 90%;
                        padding: 10px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>HealthEasers - Your Path to a Healthy Future</h1>
                <p>At HealthEasers, we focus on making healthcare accessible and personalized for everyone, especially the elderly, disabled, and disadvantaged communities.</p>
                
                <div class="feature">
                    <h2>Guardian Monitor</h2>
                    <p>Keep track of your health from anywhere. Get real-time alerts and ensure you receive the care you need right when you need it.</p>
                    <button onclick="alert('Guardian Monitor: Real-time health monitoring activated.')">Activate Health Monitoring</button>
                </div>

                <div class="feature">
                    <h2>Nutri Help</h2>
                    <p>Need help with your diet? Let Nutri Help guide you with a personalized meal plan that suits your health goals.</p>
                    <button onclick="alert('Nutri Help: Your personalized meal plan is being created!')">Generate Meal Plan</button>
                </div>

                <div class="feature">
                    <h2>Food Remedy API</h2>
                    <p>Curious about the nutritional value of the food you're eating? Use our database to search for detailed food information.</p>
                    <button onclick="alert('Food Remedy API: Retrieving nutrition data for you...')">Search Nutrition Info</button>
                </div>

                <div class="feature">
                    <h2>SRV Phone Screening</h2>
                    <p>Conduct quick and easy health screenings right from your phone. Stay connected with healthcare providers anytime.</p>
                    <button onclick="alert('SRV Phone Screening: Starting a quick health screening now...')">Start Health Screening</button>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
