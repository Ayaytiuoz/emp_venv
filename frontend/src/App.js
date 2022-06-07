import './App.css'
import Header from "./compoments/Chef_service/Header";
import Mes_equipes from "./compoments/Chef_service/Mes_equipes"
import Projet_en_cours from "./compoments/Chef_service/Projet_en_cours"
import Nouveau_projet from "./compoments/Chef_service/Nouveau_projet"


import {Container , } from 'react-bootstrap'
import Performance from "./compoments/Chef_service/Performance";


function App() {
  return (

    <div>

          <Header/>



        <main >
            <Container >
            <center><h1>Mes equipes</h1></center>
            <Mes_equipes/>
            </Container>
        </main>

        <main >
            <Container className="ms-lg-5" >
                <center><h1>Projet en cours</h1></center>
                <Projet_en_cours/>
            </Container>
        </main>

        <main >
            <Container className="ms-lg-5" >
                <center><h1 className="mt-3">Nouveau projet</h1></center>
                <Nouveau_projet/>
            </Container>
        </main>

        <main >
            <Container className="ms-lg-5" >
                <center><h1 className="mt-3">Performance</h1></center>
                <Performance/>
            </Container>
        </main>
    </div>

  );
}

export default App;

