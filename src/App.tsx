import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import api from './connections/api'
import {Header} from './template/header'
import CardRow from './template/cardrow'
import Aside from './template/aside'
import Checkout from './template/checkout'
import { useEffect, useState } from 'react'
import {matches} from './data/matches'
import {Campeonato} from './types/Campeonato'
import {Match} from './types/Match'
import {BrowserRouter as Router} from "react-router-dom"
import Rotas from './Router'
function App() {
  const [cardList, setCardList] = useState<Match[]>([]);
  const [campeonatos, setCampeonatos] = useState<Campeonato[]>();

  useEffect(()=>{
    let listOfCards = matches;
    setCardList(listOfCards);
    getCampeonatos();    
    console.log(campeonatos)
  }, []);

  const getCampeonatos = async () => {
    const {data} = await api.get<Campeonato[]>('campeonatos')
    setCampeonatos(data)
  }
  return (
    <div className="App">
      <Router>
        <Header/>
        <CardRow listOfCards={cardList}/>
        <div className="col-12 d-flex flex-wrap px-md-1 justify-content-between">
          <Aside/>
          <Rotas/>
          <Checkout/>
        </div>
      </Router>
    </div>
  );
}

export default App;