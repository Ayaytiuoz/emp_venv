import React, {Component}from "react";
import {} from 'react-bootstrap'
import axios from "axios";



class Pagination extends Component {

    render() {
        return (

            <div>
                <ul className="pagination">

                    <li className="page-item ">
                        <a className="page-link" href="/taches/enattent">tache en attent</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/taches/encours">tache en cours</a>
                    </li>

                </ul>
            </div>

    );
    }
}
export default Pagination