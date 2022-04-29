import {Match} from '../types/Match'
import Leverkusen from '../assets/logos/bundesliga/leverkusen.png'
import Eintracht from '../assets/logos/bundesliga/eintracht_frankfurt.png'
import Stuttgart from '../assets/logos/bundesliga/stuttgart.png'
import wolfsburg from '../assets/logos/bundesliga/wolfsburg.png'
import Borussia from '../assets/logos/bundesliga/dortmund.png'
import Bochum from '../assets/logos/bundesliga/bochum.png'
import Barcelona from '../assets/logos/laliga/barcelona.png'
import Real from '../assets/logos/laliga/real_madrid.png'
import Getafe from '../assets/logos/laliga/getafe.png'
import Betis from '../assets/logos/laliga/real_betis.png'
import Mallorca from '../assets/logos/laliga/real_mallorca.png'
import Espanyol from '../assets/logos/laliga/espanyol.png'
import Chelsea from '../assets/logos/premierleague/chelsea.png'
import Everton from '../assets/logos/premierleague/everton.png'
import Liverpool from '../assets/logos/premierleague/liverpool.png'
import Westham from '../assets/logos/premierleague/west_ham.png'
import Newcastle from '../assets/logos/premierleague/newcastle.png'
import Tottenham from '../assets/logos/premierleague/tottenham.png'
import Leicester from '../assets/logos/premierleague/leicester.png'
import Arsenal from '../assets/logos/premierleague/arsenal.png'
export const matches: Match[] = [
    {teamA: 'Newcastle', teamALogo: Newcastle, teamB: 'Liverpool', teamBLogo: Liverpool, league: 'Premier League', diaSemana: 'Sab', data: '30/04', hora: '07:30'},
    {teamA: 'Borussia', teamALogo: Borussia, teamB: 'Bochum', teamBLogo: Bochum, league: 'Bundesliga', diaSemana: 'Sab', data: '30/04', hora: '09:30'},
    {teamA: 'VfB Stuttgart', teamALogo: Stuttgart, teamB: 'Wolfsburg', teamBLogo: wolfsburg, league: 'Bundesliga', diaSemana: 'Sab', data: '30/04', hora: '09:30'},
    {teamA: 'Real Madrid', teamALogo: Real, teamB: 'Espanyol', teamBLogo: Espanyol, league: 'La Liga', diaSemana: 'Sab', data: '30/04', hora: '10:15'},
    {teamA: 'Tottenham', teamALogo: Tottenham, teamB: 'Leicester City', teamBLogo: Leicester, league: 'Premier League', diaSemana: 'Dom', data: '01/05', hora: '09:00'},
    {teamA: 'Everton', teamALogo: Everton, teamB: 'Chelsea', teamBLogo: Chelsea, league: 'Premier League', diaSemana: 'Dom', data: '01/05', hora: '09:00'},
    {teamA: 'West Ham', teamALogo: Westham, teamB: 'Arsenal', teamBLogo: Arsenal, league: 'Premier League', diaSemana: 'Dom', data: '01/05', hora: '11:30'},
    {teamA: 'Barcelona', teamALogo: Barcelona, teamB: 'Mallorca', teamBLogo: Mallorca, league: 'La Liga', diaSemana: 'Dom', data: '01/05', hora: '15:00'},
    {teamA: 'Leverkusen', teamALogo: Leverkusen, teamB: 'Eintracht', teamBLogo: Eintracht, league: 'Bundesliga', diaSemana: 'Seg', data: '02/05', hora: '14:30'},
    {teamA: 'Getafe', teamALogo: Getafe, teamB: 'Betis', teamBLogo: Betis, league: 'La Liga', diaSemana: 'Seg', data: '02/05', hora: '15:00'}
]