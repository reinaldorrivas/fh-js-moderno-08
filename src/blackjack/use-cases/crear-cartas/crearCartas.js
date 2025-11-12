/**
 *
 * @param {string} carta
 * @param {number} turno
 * @param {NodeListOf<HTMLElement>} contenedoresCartas
 */
export const crearCartas = (carta, turno, contenedoresCartas) => {
  if (!carta) throw new Error("carta is a required parameter");
  if (!turno) throw new Error("turno is a required parameter");
  if (!contenedoresCartas)
    throw new Error("contenedoresCartas is a required parameter");

  const imgCarta = document.createElement("img");

  imgCarta.src = `assets/img/${carta}.png`;
  imgCarta.alt = `Baraja ${carta}`;
  imgCarta.classList.add("carta");

  contenedoresCartas[turno].append(imgCarta);
};
