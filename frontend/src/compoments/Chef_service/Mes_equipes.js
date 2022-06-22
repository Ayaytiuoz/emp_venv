import React, {Component}from "react";
import {} from 'react-bootstrap'
import axios from "axios";



class Mes_equipes extends Component{
    constructor(props) {
        super(props)
        this.state=
            {
                Equipe:[
                    {

                    }
                ]
            }

    }
    getEquipe=()=>{
        axios.get('http://127.0.0.1:8000/Task_Management/api/equipe/count_employe').then(response =>{
            this.setState({Equipe: response.data})
        })

    }
    getdelete(id){
        var api ="http://127.0.0.1:8000/Task_Management/api/equipe/"+id
        fetch(api,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                this.getEquipe();
            })
        })
    }
    componentDidMount() {
        this.getEquipe();
    }


    render() {
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nom equipe</th>
                    <th scope="col">Date de creation</th>
                    <th scope="col">Nombre d'employe </th>
                    <th scope="col">
                        Operation</th>
                </tr>
                </thead>
                <tbody>
                {this.state.Equipe.map(equipe =>(
                <tr className="table-secondary">
                    <th scope="row">{equipe.id_Equipe}</th>
                    <td>{equipe.Nom_Equipe}</td>
                    <td>{equipe.date_creation}</td>
                    <td>{equipe.nbremploye}</td>
                    <td>
                        <button onClick={()=>this.getdelete(equipe.id_Equipe)} type="button" className="btn btn-outline-light">Supprimer</button></td>
                </tr>
                ))}
                </tbody>
            </table>

        );
    }


}
export default Mes_equipes;