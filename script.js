// Start Celebration
function startCelebration() {
  const nameInput = document.getElementById('friendName').value.trim();
  const displayName = document.getElementById('displayName');
  const nameScreen = document.getElementById('nameScreen');
  const mainContent = document.getElementById('mainContent');
  const bgMusic = document.getElementById('bgMusic');

  if (nameInput === "") {
    alert("Please enter your name!");
    return;
  }

  displayName.textContent = nameInput;
  nameScreen.classList.add('hidden');
  mainContent.classList.remove('hidden');
  bgMusic.play();
  startConfetti();
}

// Surprise Message
function showSurprise() {
  document.getElementById('surprise').classList.remove('hidden');
}

// Confetti Animation
function startConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = [];

  function createConfetti() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      size: Math.random() * 6 + 4,
      speed: Math.random() * 3 + 2
    };
  }

  for (let i = 0; i < 100; i++) {
    confettiPieces.push(createConfetti());
  }

  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach(p => {
      p.y += p.speed;
      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    requestAnimationFrame(animateConfetti);
  }

  animateConfetti();
}
