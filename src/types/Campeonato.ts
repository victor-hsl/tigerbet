export interface Campeonato {
    campeonato_id: number;
    nome: string;
    slug: string;
    nome_popular: string;
    edicao_atual: EdicaoAtual;
    fase_atual: FaseAtual;
    rodada_atual: RodadaAtual;
    status: string;
    tipo: string;
    logo: string;
    _link: string;
}
 
export interface EdicaoAtual {
    edicao_id: number;
    temporada: string;
    nome: string;
    nome_popular: string;
    slug: string;
}

export interface FaseAtual {
    fase_id: number;
    nome: string;
    slug: string;
    tipo: string;
    _link: string;
}

export interface RodadaAtual {
    nome: string;
    slug: string;
    rodada: number;
    status: string;
}



