var gerar = false;

function gerarOportunidade() {
  if (!gerar) {
    gerar = true;

  var minDelayAlerta = 15000; // 15 segundos em milissegundos
  var maxDelayAlerta = 34000; // 34 segundos em milissegundos
  var randomDelayAlerta = Math.floor(Math.random() * (maxDelayAlerta - minDelayAlerta + 1)) + minDelayAlerta;

  setTimeout(function () {
      document.getElementById("buscando").classList.add("hidden");
      document.getElementById("alerta").classList.remove("hidden");
      const none = document.querySelectorAll('.none');
        none.forEach((div) => {
          div.classList.remove('hidden');
        });
      setTimeout(function () {
        const none = document.querySelectorAll('.none');
        none.forEach((div) => {
          div.classList.add('hidden');
        });
        document.getElementById("alerta").classList.add("hidden");
        document.getElementById("buscando").classList.add("hidden");
        document.getElementById("confirmada").classList.remove("hidden");
        document.getElementById("jogadas").classList.remove("hidden");
        document.getElementById("validopor").classList.remove("hidden");
        var minSeconds = 57; // tempo mínimo em segundos
        var maxSeconds = 71; // tempo máximo em segundos (1 minuto e 11 segundos)
        var randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
        var minutes = Math.floor(randomSeconds / 60); // obter minutos arredondando para baixo
        var seconds = randomSeconds % 60; // obter segundos restantes
        var validopor = document.getElementById("validopor");
        validopor.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        var njogadas = Math.floor(Math.random() * (15 - 7 + 1)) + 7;
        const jogadas = document.getElementById("jogadas");
        jogadas.style.whiteSpace = "nowrap";
        jogadas.innerHTML = njogadas;
        var countdownInterval = setInterval(function () {
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(countdownInterval);
              setTimeout(function () {
                document.getElementById("jogadas").classList.add("hidden");
              document.getElementById("validopor").classList.add("hidden");
              document.getElementById("buscando").classList.remove("hidden");
              document.getElementById("confirmada").classList.add("hidden");
                gerar = false;
                gerarOportunidade();
            }, 8000);
              return;
            }
            minutes--;
            seconds = 59;
          } else {
            seconds--;
          }
          validopor.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }, 1000);
    }, 8000);
  }, randomDelayAlerta);
}
}

// Iniciar quando a página for carregada
document.addEventListener("DOMContentLoaded", () => {
  gerarOportunidade();
});

//setInterval(gerarOportunidade, 5000);