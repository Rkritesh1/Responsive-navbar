const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (like Bootstrap CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Set up the view engine (ejs)
app.set('view engine', 'ejs');

// Create a route for the homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Set up other routes if needed
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
