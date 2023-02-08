const path = require('path');
const express = require('express');
const { engine } = require ('express-handlebars');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/SortMiddleware');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const route = require('./routes');
const db = require('./config/db');

db.connect();

//Su dung cac thu vien nhu hinh anh,...
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));
// template engine
// Doi ten duoi handlebars
// extname: '.hds'

app.use(SortMiddleware);


app.engine('handlebars', engine({
  helpers: {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
      const sortType = field === sort.column ? sort.type : 'default';

      const icons = {
          default: 'bi bi-arrow-down-up',
          asc: 'bi bi-box-arrow-in-down',
          desc: 'bi bi-box-arrow-in-up',
      };

      const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc',
      };

      const icon = icons[sortType];
      const type = types[sortType];
        return `<a href="?_sort&column=${field}&type=${type}">
        <i class="${icon}"></i></a>`;
    }
  }
}));


app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

// khoi tao route
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})