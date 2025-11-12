import { valorCarta } from "../";

/**
 *
 * @param {string} carta
 * @param {number} turno
 * @param {NodeListOf<HTMLSmallElement>} tableroPuntos
 * @param {Array<number>} puntosJugadores
 */
export const acumularPuntos = (
  carta,
  turno,
  tableroPuntos,
  puntosJugadores
) => {
  puntosJugadores[turno] += valorCarta(carta);
  tableroPuntos[turno].innerText = puntosJugadores[turno];
};
