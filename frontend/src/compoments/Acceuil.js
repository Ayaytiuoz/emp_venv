import React, {Component}from "react";
import {Container} from 'react-bootstrap'
import './StyleAcc.css'
import Leader from './image/leader.png'
import Employe from './image/employe.png'
import Ard from './image/miniGif_20220624195501.gif'

class Acceuil extends Component{
    render() {
        return(
            <Container className="cont">
                 <div>
                     <div className="row">
                         <div className="col-lg-3">
                             <img className="gif" src={Ard}></img>
                         </div>
                         <div className="col-lg-9">
                             <h1 className="h1">Task Management</h1>
                             <h2 className="h2"> Simplifier le travail et en faire plus</h2>
                             <p> Cet outil puissant tout-en-un est l'un des meilleurs logiciels de gestion
                                  de projet gratuits. Task Management est une option d'outil de gestion de projet idéale
                                  pour les chefs de projet fonctionnels et les personnes qui débutent dans la gestion de projet.
                                 Task Management vérifie toutes les cases avec une suite complète de fonctionnalités de gestion de projet
                                 . Il s'agit d'une interface utilisateur graphique facile à utiliser et esthétique qui fait de
                                 cette solution unique un excellent choix pour tous les types d'organisations.   </p>
                         </div>



                     </div>
                 </div>
                <div className="row">
                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-9">

                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-3">
                                <img className="avatar" src={Leader} ></img>
                                <a href="/Chef_Service/Projet" className="btn btn-outline-primary a">Espace leader</a>
                            </div>
                            <div className="col-lg-3">
                                <img className="avatar" src={Employe} ></img>
                                <a href="http://localhost:3000/taches/enattent" className="btn btn-outline-primary emp a">Espace Employe</a>

                            </div>
                            <div className="col-lg-3"></div>
                        </div>

                    </div>

                </div>
            </Container>
        );
    }
}
export default Acceuil