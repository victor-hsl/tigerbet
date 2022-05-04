import {Routes, Route} from 'react-router-dom'
import GameDisplay from './pages/content/gamedisplay'
import Live from './pages/content/live'
import Register from './pages/content/register'
import UpNext from './pages/content/upnext'
import League from './pages/content/league'
import Table from './pages/content/table'
import Rodada from './pages/content/rodada'
import Home from './pages/content/home'
export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/live' element={<Live/>}/>
            <Route path='/league/:id/:name/:rodada' element={<League/>}/>
            <Route path='/table/:id/:name/:rodada' element={<Table/>}/>
            <Route path='/rodada/:id/:name/:rodada' element={<Rodada/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/upnext' element={<UpNext/>}/>            
            <Route path='/gamedisplay' element={<GameDisplay/>}/>
        </Routes>
    )
}