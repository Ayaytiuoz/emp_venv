import React, {Component} from "react";
import {form} from 'react-bootstrap'
import axios from "axios";

class Formtache extends Component{
    constructor(props) {
        super(props)
        this.state=
            {

                Projets:[
                    {

                    }
                ],
                Employes:[
                    {

                    }
                ],
                Tache:[
                    {

                    }
                ]
            }

    }
    getProjets=()=>{
        axios.get('http://127.0.0.1:8000/Task_Management/api/projet').then(response =>{
            this.setState({Projets: response.data})
        })
    }
    getEmployes=(id)=>{
        axios.get('http://127.0.0.1:8000/Task_Management/api/employe/by_equipe/'+id).then(response =>{
            this.setState({Employes: response.data})

        })
    }
    componentDidMount() {
        this.getProjets();
    }
    ChangeHandler = e =>{
        this.setState({[e.target.name]:e.target.value })
        console.log({[e.target.name]:e.target.value})
        if (e.target.name==='Projet'){
            this.getEmployes(e.target.value)
        }
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/Task_Management/api/tache',this.state)
            .then(response=>{
                console.log(response)
                window.open('http://localhost:3000/Chef_Service')
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        const  { Nom_tache , Description , date_lancement, Etat = 'EN ATTENTE' , Employe , Projet } = this.state.Tache
        return(
            <div className="row">
                <div className="col-3"  >

                </div>
                <div className="col-6">
                    <form onSubmit={this.submitHandler}>
                        <fieldset>
                            <h2 className="H">Ajouter une Tache</h2>

                            <div className="form-group">
                                <label  className="form-label mt-4">Nom de la tache</label>
                                <input name="Nom_tache" value={Nom_tache} onChange={this.ChangeHandler} type="text" className="form-control"  placeholder="Enter le Nom de la tache"/>

                            </div>
                            <div className="form-group">
                                <label  className="form-label mt-4">Description</label>
                                <textarea  name="Description" value={Description} onChange={this.ChangeHandler} type="text" className="form-control"  placeholder="Enter Description"/>

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">date lancement</label>
                                <input name="date_lancement" value={date_lancement} onChange={this.ChangeHandler}type="datetime-local" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleSelect1" className="form-label mt-4">Projet</label>
                                <select name="Projet" value={Projet} onChange={this.ChangeHandler}className="form-select" id="exampleSelect1">
                                    <option selected disabled>Open this select menu</option>
                                    {this.state.Projets.map(projet =>(
                                        <option value={projet.id_projet}>{projet.NomProjet}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleSelect1" className="form-label mt-4">Employe</label>
                                <select name="Employe" value={Employe} onChange={this.ChangeHandler}className="form-select" id="exampleSelect1">
                                    <option selected disabled>Open this select menu</option>
                                    {this.state.Employes.map(employe=>(
                                        <option value={employe.Matricule}>{employe.Nom} {employe.Prenom}</option>
                                    ))}
                                </select>
                            </div>
                            <br/>

                            <button type="submit" className="btn btn-primary">Ajouter</button>

                        </fieldset>

                    </form>
                </div>
                <div className="col-3"  >

                </div>
            </div>
        );
    }

}
export default Formtache