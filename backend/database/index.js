const mongoose = require('mongoose');
const {MONGODB_CONN_STRING} = require('../config/index');



const dbConnect = async ()=> {

    try {
        const conn = await mongoose.connect(MONGODB_CONN_STRING);
        console.log(`Database connected to host : ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error :${error}`);
    }
    
}

module.exports = dbConnect;