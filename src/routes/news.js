const News = require('../controllers/news');

module.exports = function(app) {

    app.route('/news/match/:id').post( async(req, res, next) => {
        try {
            let id = req.params.id;
            let requestBody = req.body;
            let { title, description } = requestBody;
            let result =  await News.createMatchNews(id, title, description);
            return res.json("News for match has been added");
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour/:id').post( async(req, res, next) => {
        try {
            let id = req.params.id;
            let requestBody = req.body;
            let { title, description } = requestBody;
            let result =  await News.createTourNews(id, title, description);
            return res.json("News for tour has been added");
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match/get/:id').get(async (req, res, next) => {
        try {
            let id = req.params.id;
            return res.json(await News.getMatchNews(id));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour/get/:id').get(async (req, res, next) => {
        try {
            let id = req.params.id;
            return res.json(await News.getTourNews(id));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport/get/:id').get(async (req, res, next) => {
        try {
            let id = req.params.id;
            return res.json(await News.getSportNews(id));
        } catch (err) {
            return next(err);
        }
    });

}