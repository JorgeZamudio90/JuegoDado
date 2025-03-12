import { Jugador } from "./Jugador";
import { Dado } from "./Dado";
import { Jugada } from "./Jugada";

export class JuegoDados {
    cantidadJugadas: number;
    jugador1: Jugador;
    jugador2: Jugador;
    marcadorJugador1: number;
    marcadorJugador2: number;
    dado1: Dado;
    dado2: Dado;
    vencedor: Jugador | null;

    constructor(nombre1: string, nombre2: string, cantidadJugadas: number) {
        this.cantidadJugadas = cantidadJugadas;
        this.jugador1 = new Jugador(nombre1);
        this.jugador2 = new Jugador(nombre2);
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.dado1 = new Dado();
        this.dado2 = new Dado();
        this.vencedor = null;
    }

    /**
     * Simula la ejecución del juego de dados con el número de jugadas establecidas.
     */
    jugar(): void {
        const jugada = new Jugada();
        for (let i = 0; i < this.cantidadJugadas; i++) {
            console.log(`Jugada ${i + 1}:`);
            const ganador = jugada.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2);

            if (ganador === this.jugador1) {
                this.marcadorJugador1++;
            } else if (ganador === this.jugador2) {
                this.marcadorJugador2++;
            }
        }

        if (this.marcadorJugador1 > this.marcadorJugador2) {
            this.vencedor = this.jugador1;
        } else if (this.marcadorJugador2 > this.marcadorJugador1) {
            this.vencedor = this.jugador2;
        }

        console.log(this.obtenerResultado());
    }

    /**
     * Retorna el resultado del juego.
     */
    obtenerResultado(): string {
        if (this.vencedor) {
            return `El vencedor es: ${this.vencedor.nombre}`;
        } else {
            return "El juego terminó en empate.";
        }
    }
}