import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state ={
        users:[],
        username: ''
    }

    async componentDidMount(){
        this.getUsers();
        console.log(this.state.users);
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users:res.data});
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })

    }
    
    // Permite escuchar el objeto que nos devuelve (cada evento que se ejecuta en el navegador nos devuelve un objeto como información)
    onSubmit = async e => {
        e.preventDefault(); // preventDefault nos permite cancelar el comportamiento por defecto del formulario(evita que se resetea la página)
            await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        this.setState({username: ''});
        this.getUsers();
       
    }

    deleteUser = async (id) => {
        await axios.delete('http://localhost:4000/api/users/' + id);
        this.getUsers();
    }



    render() {
        return (
            <div className="row">
                 <div className="col-md-4">
                       <div className="card card-body">
                           <h3>Crear nuevo usuario</h3>
                           <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                   <input 
                                   type="text"
                                   value={this.state.username} 
                                   className="form-control" 
                                   onChange={this.onChangeUsername} 
                                   /> 
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Guardar
                                </button >
                           </form>
                       </div>

                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            {
                                this.state.users.map(user => (
                                    <li key={user._id} className="list-group-item list-group-item-action">
                                        {user.username}    
                                            <button 
                                            type="button" 
                                            className="btn btn-danger" 
                                            onClick={() => this.deleteUser(user._id)}>X</button>
                                    </li>))
                            }
                        </ul>
                    </div>
                </div>
            
        )
    }
}
