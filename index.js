var port = 7000
var express= require('express')

const serveStatic = require('serve-static')
const static = serveStatic('public' )
const session = require('express-session')
const bodyParser = require("body-parser");
var app = express()
sessionSetting = {
    secret: 'hpan',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 3600 * 24 * 30
    },
}
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionSetting))

app.use(static);

app.listen(port)
console.log(`http://localhost:${port}/`)