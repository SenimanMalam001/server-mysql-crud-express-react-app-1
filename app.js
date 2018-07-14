const express = require('express')
const bodyParser = require('body-parser')
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const index = require('./routes/index');
const mahasiswa = require('./routes/mahasiswa');

const app = express()

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());


//body parser
app.use(bodyParser.urlencoded({
	extended: false
}))


app.use('/', index);
app.use('/mahasiswa', mahasiswa);

const port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log(`Server Start on ${port}`);
})
