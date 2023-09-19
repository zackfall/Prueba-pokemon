import { Habilidad } from "./habilidad";
import { Tipo } from "./tipo";

export class Pokemon {
    nombre: string;
    energia: number;
    tipo: Tipo;
    habilidades: Habilidad;

    constructor(nombre: string, energia: number, tipo: Tipo, habilidades: Habilidad) {
        this.nombre = nombre;
        this.energia = energia;
        this.tipo = tipo;
        this.habilidades = habilidades;
    }

    danioRecibido() {}

    atacar() {}
}