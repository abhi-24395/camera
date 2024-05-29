const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.use(express.static('public'));


// Define a route
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome', message: 'Hello there!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
