// ============================================
//   NETFLIX CLONE — app.js
//   Navbar scroll effect
// ============================================



const navbar = document.getElementById('navbar');

// 1. Navbar scroll effect
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// 2. Play button
document.querySelectorAll('.btn--play').forEach((button) => {
  button.addEventListener('click', () => {
    alert('Your video will play here. Add a video URL to enable playback.');
  });
});

// 3. More Info button
document.querySelectorAll('.btn--info').forEach((button) => {
  button.addEventListener('click', () => {
    alert('Stranger Things\n\nA group of friends discovers mysterious supernatural events in their town.');
  });
});

// 4. Add (+) buttons on movie posters
document.querySelectorAll('.poster__btn.add').forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = button.textContent.trim() === '+' ? '✓' : '+';
    button.title = button.textContent === '✓'
      ? 'Added to My List'
      : 'Add to My List';
  });
});
