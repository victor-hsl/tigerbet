import {Last5} from './Last5'
export type TableRow = {
    position: number;
    icon: string;
    team: string;
    points: number;
    wins: number;
    draws: number;
    loses: number;
    matchs: number;
    last5: Last5;
}