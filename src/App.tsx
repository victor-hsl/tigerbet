import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import {Header} from './template/header'
import CardRow from './template/cardrow'
import Content from './template/content'
import Aside from './template/aside'
import Checkout from './template/checkout'
import { useEffect, useState } from 'react'
import {matches} from './data/matches'
import {Match} from './types/Match'
import {BrowserRouter as Router} from "react-router-dom"
import Rotas from './Router'
function App() {
  const [cardList, setCardList] = useState<Match[]>([]);
  useEffect(()=>{
    let listOfCards = matches;
    setCardList(listOfCards);
  }, []);

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