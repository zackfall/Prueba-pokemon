import { Batalla } from "./batalla"
import { Habilidad } from "./habilidad";
import { Pokemon } from "./pokemon"
import { Tipo } from "./tipo"

const tipo = new Tipo("Planta", "Fuego", 43);
const habilidad = new Habilidad("Latigo Sepa", 54);
const pokemon = new Pokemon("Venusaur", 60, tipo, habilidad);
const batalla = new Batalla(180, 20, pokemon);
const resultado = batalla.resultado();

resultado.imprimirResultado();

