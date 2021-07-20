const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pizzaRouter = require('./routes/pizza.router');
app.use('/api/pizza', pizzaRouter);

// start the Express server
app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});