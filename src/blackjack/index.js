import initGame from "./use-cases/init-game/initGame";

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
   * Funciones
   */

  const pedirCarta = () => {
    if (!mazoCartas.length) throw "Se acabaron las cartas.";

    return mazoCartas.pop();
  };

  const valorCarta = (carta) => {
    const puntosCarta = carta.substring(0, carta.length - 1);

    return isNaN(puntosCarta)
      ? puntosCarta === "A"
        ? 11
        : 10
      : puntosCarta * 1;
  };

  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    tableroPuntos[turno].innerText = puntosJugadores[turno];
  };

  const crearCartas = (carta, turno) => {
    const imgCarta = document.createElement("img");

    imgCarta.src = `assets/img/${carta}.png`;
    imgCarta.alt = `Baraja ${carta}`;
    imgCarta.classList.add("carta");

    contenedoresCartas[turno].append(imgCarta);
  };

  /*
   * IA COMPUTER
   */

  const turnoComputadora = (minPoints) => {
    do {
      const carta = pedirCarta();

      acumularPuntos(carta, puntosJugadores.length - 1);
      crearCartas(carta, puntosJugadores.length - 1);
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

  /*
   * EVENTOS
   */

  btnPedirCarta.addEventListener("click", () => {
    const carta = pedirCarta();

    acumularPuntos(carta, 0);

    crearCartas(carta, 0);

    if (puntosJugadores[0] > 21) {
      btnPedirCarta.disabled = true;
      btnDetenerJuego.disabled = true;
      turnoComputadora(puntosJugadores[0]);

      setTimeout(() => {
        alert("Lo siento... ¡Perdiste!");
      }, 100);
    } else if (
      puntosJugadores[0] === 21 &&
      puntosJugadores[puntosJugadores.length - 1] === 0
    ) {
      turnoComputadora(puntosJugadores[0]);
    }
  });

  btnDetenerJuego.addEventListener("click", () => {
    turnoComputadora(puntosJugadores[0]);
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
