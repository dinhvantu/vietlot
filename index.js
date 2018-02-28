var express =require('express');
var app = express();
var router = express.Router();

app.use(express.static('./static/html'));
app.use(express.static('./static/images'));
app.use(express.static('./static/css'));
app.use(express.static('./static/js'));
app.listen(9090);
