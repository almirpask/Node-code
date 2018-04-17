
import express from 'express'
import path  from 'path'
import open from 'open'

import webpack from 'webpack';
import config from '../webpack.config.dev'

const port = 3030;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console */ 

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){
    res.json([
        {"id": 1, "firstName": "Almir", "lastName": "Santos", email: "almir@email.com"},
        {"id": 2, "firstName": "Lucas", "lastName": "Pedatela", email: "lucas@email.com"},
        {"id": 3, "firstName": "Patric", "lastName": "Pauluk", email: "patric@email.com"}
    ]);
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port)
    }
});