/**
 * Esta función retorna, a partir de una carta, su valor numérico.
 * @param {string} carta
 * @returns {number} Valor numérico de la carta.
 */
export const valorCarta = (carta) => {
  if (!carta) throw new Error('"carta" is a required parameter');

  const puntosCarta = carta.substring(0, carta.length - 1);

  return isNaN(puntosCarta) ? (puntosCarta === "A" ? 11 : 10) : puntosCarta * 1;
};
