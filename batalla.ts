import { Pokemon } from "./pokemon";
import { Resultado } from "./resultado";

export class Batalla {
    tiempo: number;
    turnos: number;
    pokemon: Pokemon;

    constructor(tiempo: number, turnos: number, pokemon: Pokemon) {
        this.tiempo = tiempo;
        this.turnos = turnos;
        this.pokemon = pokemon;
    }

    resultado(): Resultado {
        return new Resultado(this.pokemon.nombre, this.tiempo, this.pokemon.energia)
    }
}