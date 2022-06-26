import React, {Component}from "react";
import {} from 'react-bootstrap'
import axios from "axios";
class Performance extends Component{
    constructor(props) {
        super(props)
        this.state=
            {
                Tache:[
                    {

                    }
                ],
                Topemploye:[
                    {

                }
                ]
            }

    }
    getTache=()=>{
        axios.get('http://127.0.0.1:8000/Task_Management/api/tache_employe').then(response =>{
            this.setState({Tache: response.data})
        })

    }
    getTopemploye=()=>{
        axios.get('http://127.0.0.1:8000/Task_Management/api/employe/top_Employe').then(response =>{
            this.setState({Topemploye: response.data})
        })

    }

    componentDidMount() {
        this.getTache();
        this.getTopemploye()
    }


    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 mt-3">

                        <ul className="list-group">
                            <center><h5>Meilleur employe</h5></center>
                            {this.state.Topemploye.map(topemploye=>(
                            <li className="list-group-item d-flex justify-content-between align-items-center">

                                  {topemploye.NOM} &nbsp;  {topemploye.Prenom}
                                <span className="badge bg-primary rounded-pill">{topemploye.count}</span>
                            </li> ))}

                      </ul>
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="mt-5">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nom Projet</th>
                            <th scope="col">Nom Tache</th>
                            <th scope="col">Etat</th>
                            <th scope="col">Employe </th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.Tache.map(taches =>(
                            <tr className="table-secondary">
                                <th scope="row">{taches.id_tache}</th>
                                <td>{taches.Projet}</td>
                                <td>{taches.Nom_tache}</td>
                                <td>{taches.Etat}</td>
                                <td>{taches.Nom} {taches.Prenom}</td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }


}
export default Performance;