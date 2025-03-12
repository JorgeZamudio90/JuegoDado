import { Jugador } from "./Jugador";
import { Dado } from "./Dado";

export class Jugada {
    /**
     * Simula una jugada en la que dos jugadores lanzan dados y se determina un ganador.
     * @param jugador1 Primer jugador.
     * @param jugador2 Segundo jugador.
     * @param dado1 Primer dado.
     * @param dado2 Segundo dado.
     * @returns Jugador ganador o null si hay empate.
     */
    iniciarJugada(jugador1: Jugador, jugador2: Jugador, dado1: Dado, dado2: Dado): Jugador | null {
        const puntosJugador1 = jugador1.lanzaDados(dado1, dado2);
        const puntosJugador2 = jugador2.lanzaDados(dado1, dado2);

        console.log(`${jugador1.nombre} obtuvo: ${puntosJugador1}`);
        console.log(`${jugador2.nombre} obtuvo: ${puntosJugador2}`);

        if (puntosJugador1 > puntosJugador2) {
            jugador1.puntoGanado++;
            return jugador1;
        } else if (puntosJugador2 > puntosJugador1) {
            jugador2.puntoGanado++;
            return jugador2;
        }
        return null; // Empate
    }
}