var app = require('./src/app');

function App(req,res) {
    if (!req.url) {
        req.url = '/';
        req.path = '/';
    }
    return app(req,res);
}

var Backend = App;

module.exports = {
    Backend
};