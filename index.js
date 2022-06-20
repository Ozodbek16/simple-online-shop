const express = require('express')
const { create } = require('express-handlebars')
const mongoose = require('mongoose')
const app = express();
const path = require('path')

require('dotenv').config()

const hbs = create({
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

const allrouter = require('./routes/allRouter')

app.use('/', allrouter)



try {
    const port = normalizePort(process.env.port || 3000)
    app.listen(port, () => {
        console.log(`Server ${port} porti bilan eshitiliyapti...`);
    })
    mongoose.connect(process.env.mongoDBLink, () => {
        console.log('MongoDB connected');
    });
} catch (error) {
    console.log(error);
}

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}