var mongoose = require('mongoose')

const modifiedUser = new mongoose.Schema({
    user_id: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipcode: {
        type: String
    },
    education: {
        type: String
    },
    carrer: {
        type: String
    },
    description: {
        type: String
    },

})
var ModifiedUser = mongoose.model('ModifiedUser', modifiedUser);
module.exports = ModifiedUser;