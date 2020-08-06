module.exports = {
    db: process.env.MONDODB || "mongodb://mongo/classified-ads",
    SECRET_TOKEN: process.env.SECRET_TOKEN || "oneelephant",
};