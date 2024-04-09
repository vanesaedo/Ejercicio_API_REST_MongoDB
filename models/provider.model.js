const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);

const objectSchema = {
    company_name: {
        type: String, 
        required: true,
        unique: true
    },
    CIF: {
        type: String, 
        required: true,
        unique: true
    },
    adress: {
        type: String, 
        required: true,
        unique: false
    },
    url_web: {
        type: String, 
        required: true,
        unique: true
    }
}



// Crear el modelo --> Colección

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;