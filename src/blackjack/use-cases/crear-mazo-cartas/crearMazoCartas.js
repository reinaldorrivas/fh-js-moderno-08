import _ from "underscore";

export const crearMazoCartas = (mazoCartas) => {
  const cartaTipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "K", "Q"];

  mazoCartas = [];

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
