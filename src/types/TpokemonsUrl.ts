export type TpokemonsUrl = {
    count: number;
    next: null | string;
    previous: null | string;
    results: TpokemonResults[]
}

export type TpokemonResults = {
    name: string;
    url: string;
}