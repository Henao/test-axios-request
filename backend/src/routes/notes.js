const { Router } = require('express');
const router = Router();

const {getNotes, createNote, getNote, updateNote, deleteNote} = require('../controllers/notes.controller'); // importo metodos desde controllers

router.route('/')
    .get(getNotes) // cada vez que visite notes a traves del metodo get responder con la funcion request response
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)
 // .patch() actualiza un dato - una sola propiedad
module.exports = router;
