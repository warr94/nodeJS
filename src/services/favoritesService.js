const favoriteModel = require('../models/favorite');
var ObjectId = require('mongoose').Types.ObjectId;
// const mongoHelper = require('../helpers/ConnectionMongo')

// mongoHelper.connect();

exports.create = function (info) {

    return new Promise((resolve, reject) => {
        try {
            const data = new favoriteModel({
                name: 'Walter',
                userId:  "12345",
                description: 'usuario'
            })

            data.save(function (err, doc) {
                if (err) {
                    console.error(err)
                    reject({
                        "status": false
                    })
                }
                console.info("Data inserted succussfully!");
                resolve({
                    "status": true
                })
            });

        } catch (err) {
            console.error(err)
            reject({
                "status": false
            })
        }
    });
};


exports.findAll = () => {

    return new Promise((resolve, reject) => {
        try {
            favoriteModel.find({}, function (err, doc) {
                if (err) {
                    console.error(err)
                    reject({ "status": false })
                }

                console.info("Data CSV found!");
                resolve(doc)
            });
        } catch (err) {
            console.error(err)
            reject({ "status": false })
        }
    });
}

exports.FindAndUpdate = function (userId, MailAddress, status = "ACTIVE") {

    return new Promise((resolve, reject) => {
        try {

            favoriteModel.findOneAndUpdate({
                _id: ObjectId('6075298e328312b7e8942735')
            }, {
                name: 'Walter',
                userId:  "123456",
                description: 'usuarioo'
            }, {
                upsert: true,
                new: true,
                setDefaultsOnInsert: true
            }, function (err, doc) {
                if (err) {
                    reject({})
                }
                console.info("successful mail upgrade");
                resolve(doc)
            });
        } catch (err) {
            console.error(err)
            reject({
                "status": false
            })
        }
    });
};


exports.FindAndDelete = function (id) {
    return new Promise((resolve, reject) => {
        try {
            favoriteModel.findOneAndRemove({
                _id: ObjectId('6075298e328312b7e8942735')
            }, function (err, doc) {
                if (err) {
                    console.error(err)
                    reject({})
                }
                console.info("mail successfully delete");
                resolve(doc)
            });

        } catch (err) {
            console.error(err)
            sendAlert('Error',err,'mailService.js');
            reject({})
        }
    });
}