//Console.clear its clear any extra grabage
console.clear();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//register for the routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

//Error handling
const { handle404s, errorHandler } = require('./errorhandling');
app.use(handle404s);
app.use(errorHandler);

app.listen(4000, () => console.log('Always watching... on port 4000!'))
