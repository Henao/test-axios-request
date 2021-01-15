import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom'

export default class NotesList extends Component {

state = {
    notes: []
}

async componentDidMount(){
    this.getNotes();
   
}

getNotes = async () =>{
    const res = await axios.get('http://localhost:4000/api/notes')
    this.setState({notes: res.data})
}

deleteNote = async (id) =>{
    this.getNotes();
    console.log(id)
    await axios.delete('http://localhost:4000/api/notes/' + id);
    this.getNotes();
}
    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header">
                                    <ul className="nav nav-pills card-header-pills">
                                        <li className="nav-item">
                                                <Link
                                                className="btn btn-warning"
                                                to={"/edit/" + note._id}>
                                                Editar
                                                </Link>
                                        </li>
                                      
                                    </ul>
                                     <h5 className="card-title">{note.title}</h5>

                                </div>
                                    <div className="card-body">
                                        <p className="card-text">{note.content}</p>
                                        <p className="card-text">{note.author}</p>
                                        <button 
                                        className="btn btn-danger" 
                                        onClick={() => this.deleteNote(note._id)}>
                                            Borrar
                                        </button>
                                    </div>
                                        <div 
                                            className="card-footer text-muted">
                                                {format(note.date)}
                                        </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
}
