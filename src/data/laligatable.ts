import {TableRow} from '../types/TableRow'
import Barcelona from '../assets/logos/laliga/barcelona.png'
import Real from '../assets/logos/laliga/real_madrid.png'
import Getafe from '../assets/logos/laliga/getafe.png'
import Betis from '../assets/logos/laliga/real_betis.png'
import Mallorca from '../assets/logos/laliga/real_mallorca.png'
import Espanyol from '../assets/logos/laliga/espanyol.png'
import Alaves from '../assets/logos/laliga/alaves.png'
import Bilbao from '../assets/logos/laliga/athletic_bilbao.png'
import AtMadrid from '../assets/logos/laliga/atletico_madrid.png'
import Celta from '../assets/logos/laliga/celta_de_vigo.png'
import Levante from '../assets/logos/laliga/levante.png'
import Osasuna from '../assets/logos/laliga/osasuna.png'
import Rayo from '../assets/logos/laliga/rayo_vallecano.png'
import Sociedad from '../assets/logos/laliga/real_sociedad.png'
import Valladolid from '../assets/logos/laliga/real_valladolid.png'
import Zaragoza from '../assets/logos/laliga/real_zaragoza.png'
import Sevilla from '../assets/logos/laliga/sevilla.png'
import Gijon from '../assets/logos/laliga/sporting_gijon.png'
import Villareal from '../assets/logos/laliga/villareal.png'
import Valencia from '../assets/logos/laliga/valencia.png'

export const laligatable: TableRow[] = [
    {position: 1, icon: Real, team: 'Real Madrid', points: 78, wins: 24, draws: 6, loses: 3, matchs: 33, last5: {m1: 'w', m2: 'w', m3: 'w', m4: 'w', m5: 'l'}},
    {position: 2, icon: Barcelona, team: 'Barcelona', points: 63, wins: 18, draws: 9, loses: 6, matchs: 33, last5: {m1: 'l', m2: 'w', m3: 'l', m4: 'w', m5: 'w'}},
    {position: 3, icon: Sevilla, team: 'Sevilla', points: 63, wins: 17, draws: 12, loses: 4, matchs: 33, last5: {m1: 'w', m2: 'l', m3: 'w', m4: 'l', m5: 'd'}},
    {position: 4, icon: AtMadrid, team: 'Atletico Madrid', points: 61, wins: 18, draws: 7, loses: 8, matchs: 33, last5: {m1: 'd', m2: 'w', m3: 'l', m4: 'w', m5: 'w'}},
    {position: 5, icon: Betis, team: 'Real Betis', points: 57, wins: 17, draws: 6, loses: 10, matchs: 33, last5: {m1: 'l', m2: 'd', m3: 'w', m4: 'w', m5: 'd'}},
    {position: 6, icon: Zaragoza, team: 'Real Sociedad', points: 55, wins: 15, draws: 10, loses: 8, matchs: 33, last5: {m1: 'l', m2: 'd', m3: 'w', m4: 'w', m5: 'l'}},
    {position: 7, icon: Villareal, team: 'Villareal', points: 52, wins: 14, draws: 10, loses: 9, matchs: 33, last5: {m1: 'w', m2: 'w', m3: 'd', m4: 'l', m5: 'l'}},
    {position: 8, icon: Bilbao, team: 'Atletico Bilbao', points: 48, wins: 12, draws: 12, loses: 9, matchs: 33, last5: {m1: 'w', m2: 'l', m3: 'd', m4: 'w', m5: 'd'}},
    {position: 9, icon: Osasuna, team: 'Osasuna', points: 44, wins: 12, draws: 8, loses: 13, matchs: 33, last5: {m1: 'l', m2: 'w', m3: 'w', m4: 'l', m5: 'w'}},
    {position: 10, icon: Valencia, team: 'Valencia', points: 42, wins: 10, draws: 12, loses: 11, matchs: 33, last5: {m1: 'l', m2: 'l', m3: 'd', m4: 'd', m5: 'w'}},
    {position: 11, icon: Rayo, team: 'Rayo Vallecano', points: 40, wins: 11, draws: 7, loses: 15, matchs: 33, last5: {m1: 'w', m2: 'w', m3: 'l', m4: 'd', m5: 'd'}},
    {position: 12, icon: Celta, team: 'Celta Vigo', points: 39, wins: 10, draws: 9, loses: 14, matchs: 33, last5: {m1: 'l', m2: 'w', m3: 'l', m4: 'l', m5: 'd'}},
    {position: 13, icon: Espanyol, team: 'Espanyol', points: 39, wins: 10, draws: 9, loses: 14, matchs: 33, last5: {m1: 'l', m2: 'l', m3: 'w', m4: 'l', m5: 'w'}},
    {position: 14, icon: Sociedad, team: 'Elche', points: 38, wins: 10, draws: 8, loses: 15, matchs: 33, last5: {m1: 'w', m2: 'w', m3: 'l', m4: 'l', m5: 'l'}},
    {position: 15, icon: Getafe, team: 'Getafe', points: 35, wins: 8, draws: 11, loses: 14, matchs: 33, last5: {m1: 'w', m2: 'l', m3: 'l', m4: 'w', m5: 'd'}},
    {position: 16, icon: Mallorca, team: 'Mallorca', points: 32, wins: 8, draws: 8, loses: 17, matchs: 33, last5: {m1: 'w', m2: 'l', m3: 'w', m4: 'l', m5: 'l'}},
    {position: 17, icon: Gijon, team: 'Cadiz', points: 31, wins: 6, draws: 13, loses: 14, matchs: 33, last5: {m1: 'l', m2: 'w', m3: 'l', m4: 'd', m5: 'w'}},
    {position: 18, icon: Valladolid, team: 'Granada', points: 30, wins: 6, draws: 12, loses: 15, matchs: 33, last5: {m1: 'd', m2: 'l', m3: 'l', m4: 'd', m5: 'w'}},
    {position: 19, icon: Levante, team: 'Levante', points: 25, wins: 5, draws: 10, loses: 18, matchs: 33, last5: {m1: 'l', m2: 'w', m3: 'l', m4: 'w', m5: 'l'}},
    {position: 20, icon: Alaves, team: 'Alaves', points: 25, wins: 6, draws: 7, loses: 20, matchs: 33, last5: {m1: 'l', m2: 'w', m3: 'l', m4: 'l', m5: 'l'}}
]
