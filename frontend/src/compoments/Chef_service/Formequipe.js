import React, {Component} from "react";
import {form} from 'react-bootstrap'
import axios from "axios";
class Formequipe extends Component{
    constructor(props) {
        super(props)
        this.state=
            {

                Equipe:[
                    {

                    }
                ],
                chefservice:[
                    {

                    }
                ],
            }

    }
    getchefS=()=>{
        axios.get('http://127.0.0.1:8000/Task_Management/api/chef_service').then(response =>{
            this.setState({chefservice: response.data})
        })

    }
    componentDidMount() {
        this.getchefS();
    }
    ChangeHandler = e =>{
        this.setState({[e.target.name]:e.target.value })
        console.log({[e.target.name]:e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/Task_Management/api/equipe',this.state)
            .then(response=>{
                console.log(response)
                window.open('http://localhost:3000/employe')
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        const  { Nom_Equipe , date_creation , chef_Service } = this.state.Equipe
        return(
            <div className="row">
                <div className="col-3"  >

                </div>
                <div className="col-6">
                    <form onSubmit={this.submitHandler}>
                        <fieldset>
                            <h2 className="H">Ajouter une Equipe</h2>
                            <div className="form-group">
                                <label  className="form-label mt-4">Nom_Equipe</label>
                                <input name="Nom_Equipe" value={Nom_Equipe} onChange={this.ChangeHandler} type="text" className="form-control"  placeholder="Enter un Nom"/>

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Date de creation</label>
                                <input name="date_creation" value={date_creation} onChange={this.ChangeHandler} type="datetime-local" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleSelect1" className="form-label mt-4">chef service</label>
                                <select name="chef_Service" value={chef_Service} onChange={this.ChangeHandler}className="form-select" id="exampleSelect1">
                                    <option selected disabled>Open this select menu</option>
                                    {this.state.chefservice.map(cfs =>(
                                        <option value={cfs.Matricule}>{cfs.Nom} {cfs.Prenom}</option>
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
export default Formequipe