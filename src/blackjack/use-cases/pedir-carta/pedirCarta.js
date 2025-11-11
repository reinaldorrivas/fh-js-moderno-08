/**
 * Esta función toma el mazo de cartas y te retorna una del mismo.
 * @param {Array<string>} mazoCartas
 * @returns {string} Retorna una carta del mazo.
 */
export const pedirCarta = (mazoCartas) => {
  if (!mazoCartas) throw new Error("mazoCartas is a required parameter");

  if (!mazoCartas.length) throw "Se acabaron las cartas.";

  return mazoCartas.pop();
};
