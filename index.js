
// Creating bacis Express server
const express = require('express');
const app = express();
const port = 3000;

// setting up the view engine ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// Implementing routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Creating a post route to handle form data
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body.name);
  res.send('Form submitted successfully');
});

// adding a route with a parameter
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Middleware
//Create custom middleware
// Create middleware to log request details
app.use((req, res, next) => {
  console.log('Request details:', req.method, req.url);
  next();
});

// Use Third-Party Middleware
// Install and use a middleware like morgan 

const morgan = require('morgan');
app.use(morgan('dev'));

// Exploring response options
// Serve static files, add middleware to serve files like images:
app.use(express.static('public'));

// Creating a route to download an image
app.get('/download', (req, res) => {
  const file = `${__dirname}/public/image.jpg`;
  res.download(file);  // sends the file for download
});





app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

