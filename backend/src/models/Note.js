const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type:String,
        require: true
    },
    author: String,
    date:{
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // agrega la fecha de creación y la de actualización
})

module.exports = model('Note', noteSchema);