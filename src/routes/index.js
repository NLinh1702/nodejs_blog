const newsRouter = require('./news');
const siteRouter = require('./site');


// Chuyen cac file app trong index vao trong day
function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
     // Trang tin tuc
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    
   
}

module.exports = route;