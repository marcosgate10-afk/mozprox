    function iniciarContador(duracaoEmSegundos) {
      let tempoRestante = duracaoEmSegundos;

      const contadorEl = document.getElementById('contador');

      const intervalo = setInterval(() => {
        const horas = Math.floor(tempoRestante / 3600);
        const minutos = Math.floor((tempoRestante % 3600) / 60);
        const segundos = tempoRestante % 60;

        contadorEl.textContent = 
          `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

        if (tempoRestante <= 0) {
          clearInterval(intervalo);
          contadorEl.textContent = '00:00:00';
        }

        tempoRestante--;
      }, 1000);
    }

    // Começa o contador com 2 horas (você pode ajustar aqui)
    iniciarContador(2 * 60 * 60); // 2 horas em segundos