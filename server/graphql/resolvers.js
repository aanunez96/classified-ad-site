const Ad = require('../models/ad');
const {accountsServer} = require('.././accounts-js');
const mongoose = require("mongoose");
const ObjectID = require('mongodb').ObjectID;

const resolvers = {
    Query: {
        categories: async () => {
            return ['car', 'motorcycle', 'property', 'cycle', 'clothing', 'watch', 'gadget', 'mobile'];
        },
        ads: async (_, { userId, classification}) => {
            const query = {};
            if (userId){
                query.owner = new ObjectID(userId);
            }
            if(classification){
                query.classification = classification;
            }
            const ads = await Ad.find(query).exec();
            return ads.map(e => ({... e._doc, owner: accountsServer.findUserById(e.owner)}));
        },
        ad: async(_,{adId}) => {
            const ad = await Ad.findById(new ObjectID(adId));
            console.log({...ad._doc, owner: accountsServer.findUserById(ad.owner)});
            return {...ad._doc, owner: accountsServer.findUserById(ad.owner)};
        },
        user: async (_, {userId}) => {
            let user = [];
            if (userId) {
                user = [accountsServer.findUserById(userId)];
                user._id = user.id
            } else {
                mongoose.connection.db.collection('users', async function (_, collec) {
                    user = collec.find({}).toArray();
                });
            }
            return user
        }
    },
    Mutation: {
        async createAd(_, {tittle, owner, description, classification, price, date}) {
            const ad = new Ad({tittle, owner, description, classification, price, date});
            ad.save();
            return ad.id;
        },
        async modifyAd(_, {tittle, adId, description, classification, price, date}){
            const ad = await Ad.findOne({_id: new ObjectID(adId)}).exec();
            if(tittle){
                ad.tittle = tittle;
            }
            if(description){
                ad.description = description;
            }
            if(classification){
                ad.classification = classification;
            }
            if(price){
                ad.price = price;
            }
            if(date){
                ad.title = date;
            }
            ad.save();
            return ad.id;
        },
    }
};
module.exports = resolvers;