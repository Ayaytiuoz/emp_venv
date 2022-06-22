import React,{Component} from "react";
import {} from 'react-bootstrap'
import axios from "axios";
class projet_en_cours extends Component{
    constructor(props) {
        super(props)
        this.state=
            {
                Projet:[
                    {

                    }
                ]
            }

    }
    getProjet=()=>{
        axios.get('http://127.0.0.1:8000/Task_Management/api/projet').then(response =>{
            this.setState({Projet: response.data})
        })
    }
    componentDidMount() {
        this.getProjet();
    }


    render() {
        return(
            <div>

            <div className="row m-lg-3">
                {this.state.Projet.map(projet =>(
                <div className="toast show m-lg-1"  role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">{projet.NomProjet}</strong>
                        <small>{projet.date_creation}</small>


                    </div>
                    <div className="toast-body">
                        {projet.Description}
                        <br/>
                        <small>Dead line :  {projet.Dead_Line}</small>
                    </div>
                    <div className="toast-body">
                        <a  className="alert-link" href="#">Detail</a>
                    </div>
                </div>
                ))}
            </div>

            </div>
        );
    }


}
export default projet_en_cours;