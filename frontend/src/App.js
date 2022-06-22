import './App.css'
import Header from "./compoments/Chef_service/Header";
import Mes_equipes from "./compoments/Chef_service/Mes_equipes"
import Projet_en_cours from "./compoments/Chef_service/Projet_en_cours"
import Formprojet from "./compoments/Chef_service/Formprojet"
import Formequipe from "./compoments/Chef_service/Formequipe"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import {Container , } from 'react-bootstrap'
import Performance from "./compoments/Chef_service/Performance";
import FormEmploye from "./compoments/Chef_service/FormEmploye";


function App() {
  return (
    <div>
    <Router>
        <Switch>
            <Route path="/Chef_Service/Projet">

                <main >
                    <Header/>
                    <Container className="ms-lg-5" >
                        <center><h1>Projet en cours</h1></center>
                        <Projet_en_cours/>
                    </Container>
                </main>
            </Route>
            <Route path="/Chef_Service/Equipe">

                <main >
                    <Header/>
                    <Container className="ms-lg-5" >
                        <center><h1>Equipe</h1></center>
                        <Mes_equipes/>
                    </Container>
                </main>
            </Route>
            <Route path="/Chef_Service/ajoutprojet">

                <main >
                    <Header/>
                    <Container className="ms-lg-5" >
                        <center><h1>AJOUTER UN PROJET</h1></center>
                        <Formprojet/>
                    </Container>
                </main>
            </Route>
            <Route path="/Chef_Service/ajoutequipe">
                <main >
                    <Header/>
                    <Container className="ms-lg-5" >
                        <center><h1>AJOUTER UN EQUIPE</h1></center>
                        <Formequipe/>
                    </Container>
                </main>
            </Route>
            <Route path="/Chef_Service/ajoutemploye">
                <main >
                    <Header/>
                    <Container className="ms-lg-5" >
                        <center><h1>AJOUTER UN EMPLOYE</h1></center>
                        <FormEmploye/>
                    </Container>
                </main>
            </Route>
        </Switch>
    </Router>




    </div>
  );
}

export default App;

