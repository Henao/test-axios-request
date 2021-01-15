const notesCtrl = {};

const Note = require('../models/Note'); // importo el modelo Note.js

// GET
notesCtrl.getNotes = async (req, res) => {
    //La constante notes guarda todas las notas que voy a devolver al front
    const notes = await Note.find(); // Me devuelve un arreglo con las notas de mi db [{ },{ },{ }]
    res.json(notes);
} //Objeto con Metodo get

// Post
notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author

    })
    await newNote.save();
    console.log(newNote);
    res.json({message: 'Post Note Saved'})
}

// GET id
notesCtrl.getNote = async (req, res) => {
    console.log(req.params.id);
    const note = await Note.findById(req.params.id);
    console.log(note);
    res.json(note)
}
// Update
notesCtrl.updateNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title: title,
        content: content,
        date: date,
        author: author

    });
    console.log(req.params.id, req.body);
    res.json({message: 'Note update'})
}

// Delete
notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Delete'})
}

module.exports = notesCtrl;