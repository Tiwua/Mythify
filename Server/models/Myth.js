const mongoose = require('mongoose');

const mythSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    timeline: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    favoriteList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
	}],
	ownerId: {
        type: mongoose.Types.ObjectId,
		ref: 'User',
	},
}, { timestamps: true });

const Myth = mongoose.model('Myth', mythSchema);

module.exports = Myth;
