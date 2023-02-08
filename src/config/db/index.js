const mongoose = require('mongoose');
mongoose.set('strictQuery',false);

async function connect() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education', {useNewUrlParser: true})
        console.log('Ket noi thanh cong!');
    } catch(error){
        console.log('Ket noi that bai!');
    }
}

module.exports = { connect };