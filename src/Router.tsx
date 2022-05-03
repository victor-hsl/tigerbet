import {Routes, Route} from 'react-router-dom'
import GameDisplay from './pages/content/gamedisplay'
import LaLigaTable from './pages/content/laligatable'
import Live from './pages/content/live'
import Register from './pages/content/register'
import UpNext from './pages/content/upnext'
import League from './pages/content/league'

export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<LaLigaTable/>}/>
            <Route path='/live' element={<Live/>}/>
            <Route path='/league/:id' element={<League/>}/>
            <Route path='/laligatable' element={<LaLigaTable/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/upnext' element={<UpNext/>}/>            
            <Route path='/gamedisplay' element={<GameDisplay/>}/>
        </Routes>
    )
}