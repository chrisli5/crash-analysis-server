const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema(
    {
        name: String,
        users: Number,
        bankRoll: Number,
        investorProfit: Number,
        totalBets: Number,
        totalGames: Number,
        totalWagered: Number,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Item', ItemSchema);
