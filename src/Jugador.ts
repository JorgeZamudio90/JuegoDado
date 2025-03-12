import { Dado } from "./Dado";

export class Jugador {
    public nombre: string;
    public puntoGanado: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.puntoGanado = 0;
    }

    /**
     * Lanza dos dados y devuelve la suma de sus valores.
     * @param dado1 Primer dado a lanzar.
     * @param dado2 Segundo dado a lanzar.
     * @returns Suma de los puntos obtenidos en ambos dados.
     */
    lanzaDados(dado1: Dado, dado2: Dado): number {
        dado1.lanzar();
        dado2.lanzar();
        return dado1.puntos + dado2.puntos;
    }
}
