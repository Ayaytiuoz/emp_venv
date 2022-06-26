import React, {Component}from "react";
import {} from 'react-bootstrap'
import axios from "axios";


class Pagination extends Component {

    render() {
        return (

            <div>
                <ul className="pagination">

                    <li className="page-item ">
                        <a className="page-link" href="/Manage">Projet</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/equipe">Equipe</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="employe">Employe</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/Tache">Tache</a>
                    </li>


                </ul>
            </div>

    );
    }
}
export default Pagination