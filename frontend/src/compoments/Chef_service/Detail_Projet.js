import React , {Component } from "react";
import { withRouter  } from "react-router-dom";
import {Container} from "react-bootstrap"
import axios from "axios";
class Detail_Projet extends Component{
    constructor(props){

        super(props)

        this.state=
            {
                Details:[
                    {


                    }
                ]
            }
    }

    getEmployes=()=>{

        const { id } = this.props.match.params;
        console.log(id)

        let url = 'http://127.0.0.1:8000/Task_Management/api/projet/Detail/'+id
        console.log(url)
        axios.get(url)
            .then(response =>{
                this.setState({Details : response.data})
            })
    }
    componentDidMount() {
        this.getEmployes();
    }
    fomatdate(date){
        var date1 = new Date(date);
        return date1.getFullYear()+"/"+date1.getMonth()+"/"+date1.getDay()
    }
    render(){
        return(
            <Container>
                <div className="row mt-5 mb-lg-5">
                    {this.state.Details.map(employe=>(
                        <div className="col-lg-4 border border-1">

                            <li className="list-group-item d-flex justify-content-between align-items-center ">
                                <label className="text-uppercase text-decoration-underline">{employe.Nom} {employe.Prenom}</label>
                                <span className="badge bg-primary rounded-pill">MAT : {employe.Matricule}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Date Recrutement : {this.fomatdate(employe.date_Recrutement)}

                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Salaire : {employe.Salaire} DH

                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Equipe : {employe.equipe}
                            </li>
                        </div>
                    ))}
                </div>
            </Container>
        );
    }

}
export default withRouter(Detail_Projet)
