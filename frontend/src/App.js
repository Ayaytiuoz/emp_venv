import './App.css'
import Header from "./compoments/Chef_service/Header";
import Mes_equipes from "./compoments/Chef_service/Mes_equipes"
import Projet_en_cours from "./compoments/Chef_service/Projet_en_cours"
import Formprojet from "./compoments/Chef_service/Formprojet"
import Formequipe from "./compoments/Chef_service/Formequipe"
import HeaderEmploye from "./compoments/Employer/HeaderEmploye";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container , } from 'react-bootstrap'
import Performance from "./compoments/Chef_service/Performance";
import FormEmploye from "./compoments/Chef_service/FormEmploye";
import Formtache from "./compoments/Chef_service/Formtache";
import Pagination from "./compoments/Chef_service/Pagination"
import PaginationEmp from "./compoments/Employer/PaginationEmp"
import Tacheafaire from "./compoments/Employer/Tacheafaire";
import Tacheencours from "./compoments/Employer/Tacheencours";
import Acceuil from "./compoments/Acceuil";
import Detail_Projet from "./compoments/Chef_service/Detail_Projet";


function App() {
  return (
    <div>
    <Router>
        <Switch>
            <Route path="/Chef_Service/">

                <main >
                    <Header/>
                    <Container className="mt-5" >
                        <center><h1>Projet en cours</h1></center>
                        <Projet_en_cours/>
                    </Container>
                    <Container className="mt-5" >
                        <center><h1>Equipe</h1></center>
                        <Mes_equipes/>
                    </Container>
                    <Container className="mt-5" >
                        <center><h1>Performance</h1></center>
                        <Performance/>
                    </Container>
                </main>
            </Route>

            <Route path="/Manage">

                <main >
                    <Header/>
                    <Container className="ms-lg-5" >

                        <center><h1>AJOUTER UN PROJET</h1></center>
                        <Formprojet/>
                    </Container>
                    <Container>
                        <div className="row mt-5">
                            <div className="col-lg-9">

                            </div>
                            <div className="col-lg-3">

                                   <Pagination/>
                            </div>

                        </div>
                    </Container>
                </main>
            </Route>

            <Route path="/equipe">
                <main >
                    <Header/>
                    <Container className="ms-lg-5" >
                        <center><h1>AJOUTER UN EQUIPE</h1></center>
                        <Formequipe/>
                    </Container>
                    <Container>
                        <div className="row mt-5">
                            <div className="col-lg-9">

                            </div>
                            <div className="col-lg-3">

                                <Pagination/>
                            </div>

                        </div>
                    </Container>
                </main>
            </Route>
            <Route path="/employe">
                <main >
                    <Header/>
                    <Container className="ms-lg-5" >
                        <center><h1>AJOUTER UN EMPLOYE</h1></center>
                        <FormEmploye/>
                    </Container>
                    <Container>
                        <div className="row mt-5">
                            <div className="col-lg-9">

                            </div>
                            <div className="col-lg-3">

                                <Pagination/>
                            </div>

                        </div>
                    </Container>
                </main>
            </Route>
            <Route path="/Projet/Detail_projet/:id" exact>
                <main >
                    <Header/>
                    <Container className="ms-lg-5" >
                        <center><h1>Detail Projet</h1></center>
                        <Detail_Projet/>
                    </Container>

                </main>
            </Route>
       <Route path="/Tache">
                <main >
                    <Header/>
                    <Container className="ms-lg-5" >
                        <center><h1>Ajouter une Tache</h1></center>
                       <Formtache/>
                    </Container>
                    <Container>
                            <div className="row mt-5">
                                <div className="col-lg-9">

                                </div>
                                <div className="col-lg-3">

                                    <Pagination/>
                                </div>

                            </div>
                    </Container>
                </main>
            </Route>

        </Switch>
    </Router>
<Router>
    <Switch>
        <Route path="/taches/enattent">
            <main>
                <HeaderEmploye/>
                <Container className="mt-5" >
                    <center><h1>Tache en attente</h1></center>
                    <Tacheafaire/>
                </Container>
            <Container>

                <div className="row mt-5">
                    <div className="col-lg-9">

                    </div>
                    <div className="col-lg-3">

                        <PaginationEmp/>
                    </div>

                </div>
            </Container>

            </main>
        </Route>
        <Route path="/taches/encours">
            <main>
                <HeaderEmploye/>
                <Container className="mt-5" >
                    <center><h1>Tache en cours</h1></center>
                    <Tacheencours/>
                </Container>
            <Container>

                <div className="row mt-5">
                    <div className="col-lg-9">

                    </div>
                    <div className="col-lg-3">

                        <PaginationEmp/>
                    </div>

                </div>
            </Container>

            </main>
        </Route>

    </Switch>

</Router>

<Router>
    <Switch>
        <Route path="/acceuil">
            <Container>
                <Acceuil/>
            </Container>
        </Route>
    </Switch>
</Router>

    </div>
  );
}

export default App;

