document.querySelectorAll('.quiz-card').forEach(card => {
  const data = JSON.parse(card.dataset.quiz);
  const btn = card.querySelector('button');
  const fb = card.querySelector('.feedback');

  btn.addEventListener('click', () => {
    const sel = card.querySelector('input[type="radio"]:checked');
    fb.classList.add('show');
    fb.classList.remove('correct', 'incorrect');

    if (!sel) {
      fb.textContent = 'Choose an answer first.';
      return;
    }

    const ok = Number(sel.value) === data.correct;
    fb.classList.add(ok ? 'correct' : 'incorrect');
    fb.innerHTML = ok
      ? 'Correct. ' + data.explain
      : 'Not quite. Correct answer: <strong>' + data.answer + '</strong><br>' + data.explain;
  });
});
