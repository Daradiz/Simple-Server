const express = require('express');
const app = express();
// Define a route for the endpoint
app.get('/api/hello', (req, res) => {
    const visitor_name = req.query.visitor_name || 'Guest';
    const client_ip = req.ip;
    const location = 'New York';
     // For simplicity, you can hardcode this or use a location API
    // You can fetch temperature from a weather API, for now hardcoding
    const temperature = 11;
    const response = {
        client_ip,
        location,
        greeting: `Hello, ${visitor_name}! The temperature is ${temperature} degrees Celsius in ${location}`
    };
    res.json(response);
});
// Start the server
const port = process.env.PORT
|| 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});