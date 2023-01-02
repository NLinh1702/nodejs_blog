const path = require('path');
const express = require('express');
const { engine } = require ('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes')

//Su dung cac thu vien nhu hinh anh,...
app.use(express.static(path.join(__dirname, 'public')));

// template engine
// Doi ten duoi handlebars
// extname: '.hds'
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// khoi tao route
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})