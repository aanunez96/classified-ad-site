const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdSchema = new Schema({
    tittle: {type: Schema.Types.String, required: true},
    owner: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    classification: {type: String, enum: ['car', 'motorcycle', 'property', 'cycle', 'clothing', 'watch', 'gadget', 'mobile'], default:'property', required: true},
    description: {type: String},
    price: {type: Schema.Types.Number, required: true},
    date:  {type: Schema.Types.String, required: true},
},);

module.exports = mongoose.model('Ad', AdSchema, 'ad');