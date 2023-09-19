export class Tipo {
    nombre: string;
    debilidad: string;
    factorDeDanio: number;

    constructor(nombre: string, debilidad: string, factorDeDanio: number) {
        this.nombre = nombre;
        this.debilidad = debilidad;
        this.factorDeDanio = factorDeDanio;
    }
}