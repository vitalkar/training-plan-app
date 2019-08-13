const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const routes = require('./api/routes');

const db = require('./db');
// console.log(db);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));