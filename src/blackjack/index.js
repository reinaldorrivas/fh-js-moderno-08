import {
  pedirCarta,
  initGame,
  crearCartas,
  acumularPuntos,
  turnoComputadora,
} from "./use-cases";

(() => {
  "use strict";

  /*
   * INIT VARS
   */

  let mazoCartas = [];
  let puntosJugadores = [];

  // Referencias HTML

  const btnPedirCarta = document.body.querySelector("#btnPedirCarta");
  const btnJuegoNuevo = document.body.querySelector("#btnJuegoNuevo");
  const btnDetenerJuego = document.body.querySelector("#btnDetenerJuego");
  const tableroPuntos = document.body.querySelectorAll("small");
  const contenedoresCartas = document.body.querySelectorAll(".cartas");

  /*
   * EVENTOS
   */

  btnPedirCarta.addEventListener("click", () => {
    const carta = pedirCarta(mazoCartas);

    acumularPuntos(carta, 0, tableroPuntos, puntosJugadores);

    crearCartas(carta, 0, contenedoresCartas);

    if (puntosJugadores[0] > 21) {
      btnPedirCarta.disabled = true;
      btnDetenerJuego.disabled = true;

      turnoComputadora(
        puntosJugadores[0],
        puntosJugadores,
        tableroPuntos,
        contenedoresCartas,
        btnPedirCarta,
        btnDetenerJuego,
        mazoCartas
      );

      setTimeout(() => {
        alert("Lo siento... ¡Perdiste!");
      }, 100);
    } else if (
      puntosJugadores[0] === 21 &&
      puntosJugadores[puntosJugadores.length - 1] === 0
    ) {
      turnoComputadora(
        puntosJugadores[0],
        puntosJugadores,
        tableroPuntos,
        contenedoresCartas,
        btnPedirCarta,
        btnDetenerJuego,
        mazoCartas
      );
    }
  });

  btnDetenerJuego.addEventListener("click", () => {
    turnoComputadora(
      puntosJugadores[0],
      puntosJugadores,
      tableroPuntos,
      contenedoresCartas,
      btnPedirCarta,
      btnDetenerJuego,
      mazoCartas
    );
  });

  btnJuegoNuevo.addEventListener("click", () => {
    initGame(
      mazoCartas,
      puntosJugadores,
      contenedoresCartas,
      tableroPuntos,
      btnPedirCarta,
      btnDetenerJuego
    );
  });

  initGame(
    mazoCartas,
    puntosJugadores,
    contenedoresCartas,
    tableroPuntos,
    btnPedirCarta,
    btnDetenerJuego
  );
})();
