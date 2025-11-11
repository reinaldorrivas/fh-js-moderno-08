import _ from "underscore";

/**
 * Esta función crea un nuevo mazo de cartas.
 * @param {Array<string>} mazoCartas
 * @returns {Array<string>} Retorna el nuevo mazo de cartas ya barajeado.
 */
export const crearMazoCartas = (mazoCartas) => {
  if (!mazoCartas) throw new Error("mazoCartas is a required parameter");

  const cartaTipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "K", "Q"];

  for (let numeroCarta = 2; numeroCarta < 11; numeroCarta++) {
    for (let cartaTipo of cartaTipos) {
      mazoCartas.push(numeroCarta + cartaTipo);
    }
  }

  for (let especial of especiales) {
    for (let cartaTipo of cartaTipos) {
      mazoCartas.push(especial + cartaTipo);
    }
  }

  return _.shuffle(mazoCartas);
};
