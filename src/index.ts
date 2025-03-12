import { JuegoDados } from "./JuegoDados";

/**
 * Punto de entrada del juego de dados. Recibe los nombres de los jugadores.
 */
const main = () => {
    const args = process.argv.slice(2);

    if (args.length !== 3) {
        console.log("Uso: node Principal.js <Jugador1> <Jugador2> <CantidadJugadas>");
        process.exit(1);
    }

    const [nombre1, nombre2, cantidadJugadas] = args;
    const juego = new JuegoDados(nombre1, nombre2, parseInt(cantidadJugadas, 10));
    juego.jugar();
};

// Ejecutar el programa solo si se ejecuta directamente en Node.js
if (require.main === module) {
    main();
}
