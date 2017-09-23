var express = require('express');
var path = require('path');
var open = require('open');
var webpack = require('webpack');
var config = require('../webpack.config');

const port = 8081;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/client/index.html'));
});

app.listen(port, function (err) {
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});

