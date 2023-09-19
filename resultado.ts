export class Resultado {
    nombreGanador: string;
    tiempoBatalla: number;
    energia: number;

    constructor(nombreGanador: string, tiempoBat: number, energia: number) {
        this.nombreGanador = nombreGanador;
        this.tiempoBatalla = tiempoBat;
        this.energia = energia;
    }

    imprimirResultado() {
        console.log(`Ganador: ${this.nombreGanador} con un tiempo de batalla de ${this.tiempoBatalla}`);
    }
}