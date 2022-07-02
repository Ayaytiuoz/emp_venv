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
                <div><center><h1 className="mt-5" >Detail</h1></center></div>
                <div className="row mt-5 mb-lg-5">
                    {this.state.Details.map(employe=>(


                        <div className="card text-white bg-primary mb-3 col-lg-4 " >
                            <div className="row card-header" >
                            <div className=" col-lg-6" >{employe.Nom} {employe.Prenom} </div>
                            <div className="col-lg-6"><label >Matricule : {employe.Matricule}</label></div>
                            </div>
                            <div className="card-body">
                            <h4 className="card-title">Equipe :{employe.equipe}</h4>
                            <span className="card-text">Salaire : {employe.Salaire} DH </span><br/>
                            <span className="card-text">Date Recrutement : {this.fomatdate(employe.date_Recrutement)} </span><br/>

                            </div>
                        </div>

                    ))}
                </div>

            </Container>
        );
    }

}
export default withRouter(Detail_Projet)
