const mongoose = require('mongoose');

const Item = mongoose.model('Item');

const SitesController = {
    find(name) {
        if(['bustabit', 'bustadice', 'ethercrash', 'etherdice'].indexOf(name.toLowerCase()) > -1) {
            return Item.find({ name });
        } 
        return [{}];
    }
}

module.exports = SitesController;