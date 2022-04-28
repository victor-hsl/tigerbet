import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import {Header} from './template/header'
import CardRow from './template/cardrow'
import { useEffect, useState } from 'react';
function App() {
  const [cardList, setCardList] = useState<number[]>([]);
  useEffect(()=>{
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setCardList(list);
  }, []);

  return (
    <div className="App">
      <Header/>
      <CardRow list={cardList}/>
      <div className="btn btn-warning col-sm-12">
        ...
      </div>
    </div>
  );
}

export default App;