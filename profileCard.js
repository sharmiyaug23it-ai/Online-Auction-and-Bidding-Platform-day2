export function createProfileCard(name, role) {
  const card = document.createElement('div');
  card.className = 'card';
  
  card.innerHTML = `
    <div class="title">${name}</div>
    <div class="muted">${role}</div>
    <button class="btn-ghost small remove-btn">Remove</button>
  `;

  card.querySelector('.remove-btn').addEventListener('click', () => {
    card.remove();
  });

  return card;
}
