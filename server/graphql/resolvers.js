const Ad = require('../models/ad');
const {accountsServer} = require('.././accounts-js');
const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;

const resolvers = {
    Query: {
        categories: async () => {
            return ['car', 'motorcycle', 'property', 'cycle', 'clothing', 'watch', 'gadget', 'mobile'];
        },
        ads: async (_, {userId, classification}) => {
            const query = {};
            if (userId) {
                query.owner = new ObjectID(userId);
            }
            if (classification) {
                query.classification = classification;
            }
            const ads = await Ad.find(query).exec();
            return ads.map(e => ({...e._doc, owner: accountsServer.findUserById(e.owner)}));
        },
        ad: async (_, {adId}) => {
            const ad = await Ad.findById(new ObjectID(adId));
            return {...ad._doc, owner: accountsServer.findUserById(ad.owner)};
        },
        user: async (_, {userId}) => {
            const user = accountsServer.findUserById(userId);
            user._id = user.id;

            return user
        }
    },
    Mutation: {
        async createAd(_, {tittle, owner, description, classification, price}) {
            const date = new Date();
            const ad = new Ad({tittle, owner, description, classification, price, date});
            ad.save();
            return ad;
        },
        async modifyAd(_, {tittle, adId, description, classification, price, date, urlImage}) {
            const ad = await Ad.findOne({_id: new ObjectID(adId)}).exec();
            if (tittle) {
                ad.tittle = tittle;
            }
            if (description) {
                ad.description = description;
            }
            if (classification) {
                ad.classification = classification;
            }
            if (price) {
                ad.price = price;
            }
            if (date) {
                ad.title = date;
            }
            ad.save();
            return ad;
        },
        async modifyUser(_, {userId, lastName, avatar, number, name}) {
            const user = await accountsServer.findUserById(userId);
            if(lastName){
                user.profile.lastName = lastName
            }
            if(avatar){
                user.profile.avatar = avatar
            }
            if(number){
                user.profile.number = number
            }
            if(name){
                user.profile.name = name
            }
            mongoose.connection.db.collection('users', async function (_, collec) {
                collec.replaceOne({_id: new ObjectID(userId)}, user);
            });
            return user
        },
    }
};
module.exports = resolvers;