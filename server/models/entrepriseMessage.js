import mongoose from 'mongoose';

const entrepriseSchema = mongoose.Schema({

    name: String,
    address: String,

})

var EntrepriseMessage = mongoose.model('EntrepriseMessage', entrepriseSchema);

export default EntrepriseMessage;