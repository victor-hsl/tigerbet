export interface ProximaRodada {
    nome: string;
    slug: string;
    rodada: number;
    status: string;
}

export interface Campeonato {
    campeonato_id: number;
    nome: string;
    slug: string;
}

export interface TimeMandante {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
}

export interface TimeVisitante {
    time_id: number;
    nome_popular: string;
    sigla: string;
    escudo: string;
}

export interface Estadio {
    estadio_id: number;
    nome_popular: string;
}

export interface Partida {
    partida_id: number;
    campeonato: Campeonato;
    placar: string;
    time_mandante: TimeMandante;
    time_visitante: TimeVisitante;
    placar_mandante: number;
    placar_visitante: number;
    status: string;
    slug: string;
    data_realizacao: string;
    hora_realizacao: string;
    data_realizacao_iso: Date;
    estadio: Estadio;
    _link: string;
}

export interface Rodada {
    nome: string;
    slug: string;
    rodada: number;
    status: string;
    proxima_rodada: ProximaRodada;
    rodada_anterior?: any;
    _link: string;
    partidas: Partida[];
}