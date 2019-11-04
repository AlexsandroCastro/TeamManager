const bodyParser = require('body-parser');

module.exports = app => {

    app.set('json spaces', 4);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(app.auth.initialize())
    app.use((req,res,next) => {
        delete req.body.id
        next()
    });
}