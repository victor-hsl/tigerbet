import {Live} from '../types/Live'
import Barcelona from '../assets/logos/laliga/barcelona.png'
import Real from '../assets/logos/laliga/real_madrid.png'
import Everton from '../assets/logos/premierleague/everton.png'
import Liverpool from '../assets/logos/premierleague/liverpool.png'
import United from '../assets/logos/premierleague/united.png'
import Bayern from '../assets/logos/bundesliga/bayern.png'
import Dortmund from '../assets/logos/bundesliga/dortmund.png'
import City from '../assets/logos/premierleague/city.png'
export const livegames: Live[] = [
    {time: '80:00', teamAScore: 1, teamBscore: 2, matchInfo: {teamA: 'Man United', teamALogo: United, teamB: 'Man City', teamBLogo: City, league: 'Premier League', diaSemana: '', data: '', hora: ''}},
    {time: '42:54', teamAScore: 4, teamBscore: 1, matchInfo: {teamA: 'Barcelona', teamALogo: Barcelona, teamB: 'Real Madrid', teamBLogo: Real, league: 'La Liga', diaSemana: '', data: '', hora: ''}},
    {time: '12:30', teamAScore: 0, teamBscore: 3, matchInfo: {teamA: 'Bayern', teamALogo: Bayern, teamB: 'Dortmund', teamBLogo: Dortmund, league: 'Bundesliga', diaSemana: '', data: '', hora: ''}},
    {time: '63:03', teamAScore: 2, teamBscore: 1, matchInfo: {teamA: 'Liverpool', teamALogo: Liverpool, teamB: 'Everton', teamBLogo: Everton, league: 'Premier League', diaSemana: '', data: '', hora: ''}}
]