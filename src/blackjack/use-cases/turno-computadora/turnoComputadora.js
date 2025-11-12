import { acumularPuntos, crearCartas, pedirCarta } from "../";

/**
 *
 * @param {number} minPoints
 * @param {Array<number>} puntosJugadores
 * @param {NodeListOf<HTMLSmallElement>} tableroPuntos
 * @param {NodeListOf<HTMLElement>} contenedoresCartas
 * @param {HTMLButtonElement} btnPedirCarta
 * @param {HTMLButtonElement} btnDetenerJuego
 * @param {Array<string>} mazoCartas
 */
export const turnoComputadora = (
  minPoints,
  puntosJugadores,
  tableroPuntos,
  contenedoresCartas,
  btnPedirCarta,
  btnDetenerJuego,
  mazoCartas
) => {
  if (!minPoints) throw new Error("minPoints is a required parameter");
  if (!puntosJugadores)
    throw new Error("puntosJugadores is a required parameter");
  if (!tableroPuntos) throw new Error("tableroPuntos is a required parameter");
  if (!contenedoresCartas)
    throw new Error("contenedoresCartas is a required parameter");
  if (!btnPedirCarta) throw new Error("btnPedirCarta is a required parameter");
  if (!btnDetenerJuego)
    throw new Error("btnDetenerJuego is a required parameter");

  do {
    const carta = pedirCarta(mazoCartas);

    acumularPuntos(
      carta,
      puntosJugadores.length - 1,
      tableroPuntos,
      puntosJugadores
    );
    crearCartas(carta, puntosJugadores.length - 1, contenedoresCartas);
  } while (
    puntosJugadores[puntosJugadores.length - 1] < minPoints &&
    puntosJugadores[puntosJugadores.length - 1] <= 21 &&
    minPoints <= 21
  );

  if (
    puntosJugadores[0] < puntosJugadores[puntosJugadores.length - 1] &&
    puntosJugadores[puntosJugadores.length - 1] <= 21
  ) {
    btnPedirCarta.disabled = true;
    btnDetenerJuego.disabled = true;

    setTimeout(() => {
      alert("Lo siento... ¡Perdiste!");
    }, 100);
  } else if (
    puntosJugadores[0] === puntosJugadores[puntosJugadores.length - 1]
  ) {
    btnPedirCarta.disabled = true;
    btnDetenerJuego.disabled = true;

    setTimeout(() => {
      alert("Nadie gana.");
    }, 100);
  } else if (puntosJugadores[puntosJugadores.length - 1] > 21) {
    btnPedirCarta.disabled = true;
    btnDetenerJuego.disabled = true;

    setTimeout(() => {
      alert("¡Ganaste!");
    }, 100);
  }
};
