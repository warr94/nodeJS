const mongoose = require('mongoose');
const { dirname } = require('path');
const path = require('path');

require('dotenv').config({
    silent: true
});

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // tls: true,
    // tlsCAFile: path.resolve(path.join(__dirname, '../certificate/', "certificado"))
};

const MongoURI = 'mongodb://localhost:27017/test'
mongoose.connect(MongoURI, options);
const db = mongoose.connection;

function connect(){
    db.on('error', console.error.bind(console, '>>> Error conection'));
    db.once('open', function() { console.info('>>> Connected to Mongo')});
}

function disconnect(){
    db.close();
    console.info('>>> Disconnected from Mongo ')
}

module.exports = {
    disconnect,
    connect
}
