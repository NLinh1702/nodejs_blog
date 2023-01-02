
class NewsController {
//Phuong thuc index, [GET] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('PAGES DETAIL!');
    }
}

module.exports = new NewsController;

