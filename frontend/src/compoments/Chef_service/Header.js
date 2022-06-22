import React from "react";
import {nav} from 'react-bootstrap'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">task_management</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/Chef_Service/Projet">Projet
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Chef_Service/Equipe">Equipe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Chef_Service/ajoutprojet">Ajouter un projet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Chef_Service/ajoutequipe">Ajouter une equipe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Chef_Service/ajoutemploye">Ajouter un employe</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Header;