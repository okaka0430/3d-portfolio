
// モーダルを開く（詳細）
function openDetailModal(title, desc, imgSrc, tags, link) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('modal-tags').innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  document.getElementById('modal-link').href = link;
  document.getElementById('detail-modal').style.display = 'flex';
}

// モーダルを閉じる
function closeDetailModal() {
  document.getElementById('detail-modal').style.display = 'none';
}

// カテゴリフィルター（フェード付き）
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.gallery .card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        card.style.opacity = 0;
        setTimeout(() => {
          card.style.display = (filter === 'all' || card.classList.contains(filter)) ? 'block' : 'none';
          setTimeout(() => card.style.opacity = 1, 50);
        }, 200);
      });
    });
  });
});
