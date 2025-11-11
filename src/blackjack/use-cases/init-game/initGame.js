import { crearMazoCartas as createDeck } from "../crear-mazo-cartas/crearMazoCartas";

export const initGame = (
  mazoCartas,
  puntosJugadores,
  contenedoresCartas,
  tableroPuntos,
  btnPedirCarta,
  btnDetenerJuego,
  numJugadores = 2
) => {
  mazoCartas.length = 0;
  mazoCartas.push(...createDeck(mazoCartas));

  puntosJugadores.length = 0;
  for (let jugadorIndex = 0; jugadorIndex < numJugadores; jugadorIndex++) {
    puntosJugadores.push(0);
  }

  contenedoresCartas.forEach((contenedorCartas) => {
    contenedorCartas.innerHTML = "";
  });

  tableroPuntos.forEach((puntosJugador) => {
    puntosJugador.innerText = 0;
  });

  btnPedirCarta.disabled = false;
  btnDetenerJuego.disabled = false;
};
