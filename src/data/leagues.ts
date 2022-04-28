import bundesligaLogo from '../assets/logos/bundesliga/bundesliga.png'
import laligaLogo from '../assets/logos/laliga/laliga_logo.png'
import premierLogo from '../assets/logos/premierleague/premier_league_logo.png'
import {League} from '../types/League'
export const leagues: League[] = [
    {name: 'Bundesliga', url: '/bundesliga', urlLogo: bundesligaLogo, sizeLogo: '30px' },
    {name: 'La Liga', url: '/laliga', urlLogo: laligaLogo, sizeLogo: '30px' },
    {name: 'Premier League', url: '/premierleague', urlLogo: premierLogo, sizeLogo: '30px' }
]