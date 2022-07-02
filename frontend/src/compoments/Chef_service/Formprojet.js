import React, {Component} from "react";
import {form} from 'react-bootstrap'
import axios from "axios";
class Formprojet extends Component{
    constructor(props) {
        super(props)
        this.state=
            {
                Projet:[
                    {

                    }
                ],
                Equipes:[
                    {
                        id_Equipe: null,
                        Nom_Equipe: null
                    }
                ]
            }

    }
    getEquipe=()=>{
        axios.get('http://127.0.0.1:8000/Task_Management/api/equipe').then(response =>{
            this.setState({Equipes: response.data})
        })

    }
    componentDidMount() {
        this.getEquipe();
    }
    ChangeHandler = e =>{
        this.setState({[e.target.name]:e.target.value })
        console.log({[e.target.name]:e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/Task_Management/api/projet',this.state)
            .then(response=>{
                console.log(response)
                window.open('http://localhost:3000/Chef_Service','parent')
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        const  { NomProjet , Description , date_creation , Dead_Line , Equipe } = this.state.Projet
        return(
            <div className="row">
                <div className="col-3"  >

                </div>
                <div className="col-6">
                    <form onSubmit={this.submitHandler}>
                        <fieldset>
                            <h2 className="H">Ajouter un Projet</h2>

                            <div className="form-group">
                                <label  className="form-label mt-4">Nom Projet</label>
                                <input name="NomProjet" value={NomProjet} onChange={this.ChangeHandler} type="text" className="form-control"  placeholder="Enter un Nom"/>

                            </div>
                            <div className="form-group">
                                <label  className="form-label mt-4">Description</label>
                                <textarea name="Description" value={Description} onChange={this.ChangeHandler} type="text" className="form-control"  placeholder="Entrer une description"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Date de creation</label>
                                <input name="date_creation" value={date_creation} onChange={this.ChangeHandler}type="date" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Dead line</label>
                                <input name="Dead_Line" value={Dead_Line} onChange={this.ChangeHandler}type="date" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleSelect1" className="form-label mt-4">Equipe</label>
                                <select name="Equipe" value={Equipe} onChange={this.ChangeHandler}className="form-select" id="exampleSelect1">
                                    <option selected disabled>Open this select menu</option>
                                    {this.state.Equipes.map(equipe =>(
                                    <option value={equipe.id_Equipe}>{equipe.Nom_Equipe}</option>
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
export default Formprojet