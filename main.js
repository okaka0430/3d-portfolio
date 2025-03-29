
// 詳細モーダルを開く
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

// フィルターと検索の組み合わせ表示処理
function filterAndSearch() {
  const filter = document.querySelector('.filter-btn.active').dataset.filter;
  const keyword = document.getElementById('search-input').value.toLowerCase();
  const cards = document.querySelectorAll('.gallery .card');

  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    const tags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.toLowerCase());
    const matchKeyword = title.includes(keyword) || tags.some(tag => tag.includes(keyword));
    const matchFilter = filter === 'all' || card.classList.contains(filter);
    card.style.display = (matchKeyword && matchFilter) ? 'block' : 'none';
  });
}

// 初期化処理
document.addEventListener('DOMContentLoaded', () => {
  // カテゴリフィルターボタンにイベント付与
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterAndSearch();  // 再表示
    });
  });

  // 検索入力イベント
  document.getElementById('search-input').addEventListener('input', () => {
    filterAndSearch();  // 入力のたびに再表示
  });
});

function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}
