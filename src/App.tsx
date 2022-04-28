import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import {Header} from './template/header'
import CardRow from './template/cardrow'
import LeaguesList from './template/leagueslist'
import Content from './template/content'
import { useEffect, useState } from 'react'

function App() {
  const [cardList, setCardList] = useState<number[]>([]);
  useEffect(()=>{
    let listOfCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setCardList(listOfCards);
  }, []);

  return (
    <div className="App">
      <Header/>
      <CardRow listOfCards={cardList}/>
      <div className="d-flex flex-wrap">
        <LeaguesList/>
        <Content/>
      </div>      
    </div>
  );
}

export default App;