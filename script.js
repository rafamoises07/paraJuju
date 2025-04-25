const frases = [
    "Você é a mulher da minha vida amor.",
    "Minha melhor escolha sempre sera você.",
    "Te amo cada dia mais minha Rapunzel."
  ];

  let indexFrase = 0;
  let indexLetra = 0;
  const el = document.getElementById("typewriter");

  function digitar() {
    if (indexLetra < frases[indexFrase].length) {
      el.innerHTML += frases[indexFrase].charAt(indexLetra);
      indexLetra++;
      setTimeout(digitar, 100);
    } else {
      setTimeout(apagar, 2000);
    }
  }

  function apagar() {
    if (indexLetra > 0) {
      el.innerHTML = frases[indexFrase].substring(0, indexLetra - 1);
      indexLetra--;
      setTimeout(apagar, 50);
    } else {
      indexFrase = (indexFrase + 1) % frases.length;
      setTimeout(digitar, 500);
    }
  }

  digitar();

  // Corações subindo
  function criarCoracao() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }

  setInterval(criarCoracao, 300);