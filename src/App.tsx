import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import {Header} from './template/header'
import CardRow from './template/cardrow'
import LeaguesList from './template/leagueslist'
import Content from './template/content'
import Aside from './template/aside'
import Checkout from './template/checkout'
import { useEffect, useState } from 'react'
import {matches} from './data/matches'
import {Match} from './types/Match'

function App() {
  const [cardList, setCardList] = useState<Match[]>([]);
  useEffect(()=>{
    let listOfCards = matches;
    setCardList(listOfCards);
  }, []);

  return (
    <div className="App">
      <Header/>
      <CardRow listOfCards={cardList}/>
      <div className="col-12 d-flex flex-wrap px-md-1 justify-content-between">
        <Aside/>
        <Content/>
        <Checkout/>
      </div>
    </div>
  );
}

export default App;