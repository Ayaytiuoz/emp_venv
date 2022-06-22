import React, {Component} from "react";
import {form} from 'react-bootstrap'
import axios from "axios";
class FormEmploye extends Component{
    constructor(props) {
        super(props)
        this.state=
            {

                Equipes:[
                    {

                    }
                ],
                Employe:[
                    {

                    }
                ],
            }

    }
    getequipe=()=>{
        axios.get('http://127.0.0.1:8000/Task_Management/api/equipe').then(response =>{
            this.setState({Equipes: response.data})
        })

    }
    componentDidMount() {
        this.getequipe();
    }
    ChangeHandler = e =>{
        this.setState({[e.target.name]:e.target.value })
        console.log({[e.target.name]:e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/Task_Management/api/employe',this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        const  { Nom , Prenom , Date_recrutement , salaire , email , mdp , Equipe} = this.state.Employe
        return(
            <div className="row">
                <div className="col-3"  >

                </div>
                <div className="col-6">
                    <form onSubmit={this.submitHandler}>
                        <fieldset>

                            <div className="form-group">
                                <label  className="form-label mt-4">Nom</label>
                                <input name="Nom" value={Nom} onChange={this.ChangeHandler} type="text" className="form-control"  placeholder="Enter votre Nom"/>

                            </div>
                            <div className="form-group">
                                <label  className="form-label mt-4">Prenom</label>
                                <input name="Prenom" value={Prenom} onChange={this.ChangeHandler} type="text" className="form-control"  placeholder="Enter votre prenom"/>

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Date recrutement</label>
                                <input name="Date_recrutement" value={Date_recrutement} onChange={this.ChangeHandler}type="date" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label  className="form-label mt-4">salaire</label>
                                <input name="salaire" value={salaire} onChange={this.ChangeHandler} type="number" className="form-control"  placeholder="Enter votre salaire"/>

                            </div>
                            <div className="form-group">
                            <label  className="form-label mt-4">email</label>
                            <input name="email" value={email} onChange={this.ChangeHandler} type="email" className="form-control"  placeholder="Enter votre email"/>

                        </div>
                 <div className="form-group">
                    <label  className="form-label mt-4">mot de pass</label>
                    <input name="mdp" value={mdp} onChange={this.ChangeHandler} type="password" className="form-control"  placeholder="Enter votre mot de passe"/>

                </div>

                <div className="form-group">
                                <label htmlFor="exampleSelect1" className="form-label mt-4">Equipe</label>
                                <select name="Equipe" value={Equipe} onChange={this.ChangeHandler}className="form-select" id="exampleSelect1">
                                    <option selected disabled>Open this select menu</option>
                                    {this.state.Equipes.map(equipes =>(
                                        <option value={equipes.id_Equipe}>{equipes.Nom_Equipe}</option>
                                    ))}
                                </select>
                            </div>

                            <br/>

                            <button type="submit" className="btn btn-primary">Submit</button>

                        </fieldset>

                    </form>
                </div>
                <div className="col-3"  >

                </div>
            </div>
        );
    }

}
export default FormEmploye