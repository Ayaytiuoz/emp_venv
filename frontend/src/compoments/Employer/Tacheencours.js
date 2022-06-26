import React, {Component}from "react";
import {} from 'react-bootstrap'
import axios from "axios";
class Tacheencours extends Component{
    constructor(props) {
        super(props)
        this.state=
            {
                Tache:[
                    {

                    }
                ]
            }

    }
    getTache=()=>{
        axios.get('http://127.0.0.1:8000/Task_Management/api/tache/en_cours').then(response =>{
            this.setState({Tache: response.data})
        })

    }

    getPUT(id){
        var api ="http://127.0.0.1:8000/Task_Management/api/tache/fin/"+id
        fetch(api,{
            method:'PUT'
        }).then((result)=>{
            result.json().then((resp)=>{
                this.getTache();
            })
        })
    }
    componentDidMount() {
        this.getTache();
    }


    render() {
        return(
            <div>
                <div className="row">
                <div className="mt-5">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">NomProjet</th>
                            <th scope="col">Nom Tache</th>
                            <th scope="col">Description</th>
                            <th scope="col">date lancement</th>
                            <th scope="col">Nom Employe </th>
                            <th scope="col">Execution d'etat </th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.Tache.map(taches =>(
                            <tr className="table-secondary">
                                <th scope="row">{taches.id_tache}</th>
                                <td>{taches.NomProjet}</td>
                                <td>{taches.Nom_tache}</td>
                                <td>{taches.Description}</td>
                                <td>{taches.date_lancement}</td>
                                <td>{taches.Nom} {taches.Prenom}</td>
                                <td>
                                    <button onClick={()=>this.getPUT(taches.id_tache)} type="button" className="btn btn-outline-light">prendre fin</button></td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        );
    }


}
export default Tacheencours;