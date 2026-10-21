/* ============================================================
   ZESTIFY — script.js  (fixed & complete)
   ============================================================ */

'use strict';

/* ── DATA ──────────────────────────────────────────────────── */
const MENU_ITEMS = [
  { id: 1,  name: 'Margherita Classic',       cat: 'pizza',        emoji: '🍕', price: 14.99, rating: 4.8, badge: 'Bestseller',  desc: 'San Marzano tomatoes, fresh mozzarella, basil, EVOO on a hand-tossed crust.' },
  { id: 2,  name: 'Pepperoni Overload',        cat: 'pizza',        emoji: '🍕', price: 17.49, rating: 4.9, badge: 'Hot 🔥',      desc: 'Triple-layer pepperoni with smoky tomato sauce and stretchy mozzarella.' },
  { id: 3,  name: 'BBQ Chicken Bliss',         cat: 'pizza',        emoji: '🍕', price: 18.99, rating: 4.7, badge: null,          desc: 'Grilled chicken, caramelised onion, BBQ drizzle, red peppers.' },
  { id: 4,  name: 'Four Cheese Supreme',       cat: 'pizza',        emoji: '🍕', price: 16.49, rating: 4.6, badge: "Chef's Pick", desc: 'Mozzarella, gorgonzola, provolone, and parmesan in perfect harmony.' },
  { id: 5,  name: 'Smash Stack',               cat: 'burger',       emoji: '🍔', price: 12.99, rating: 4.9, badge: 'Hot 🔥',      desc: 'Double smash patties, American cheese, pickles, special sauce.' },
  { id: 6,  name: 'Crispy Fried Chicken',      cat: 'burger',       emoji: '🍔', price: 13.49, rating: 4.7, badge: null,          desc: 'Buttermilk fried thigh, slaw, jalapeño mayo, toasted brioche.' },
  { id: 7,  name: 'Mushroom Swiss Melt',       cat: 'burger',       emoji: '🍔', price: 13.99, rating: 4.6, badge: null,          desc: 'Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli.' },
  { id: 8,  name: 'Beyond Veggie Beast',       cat: 'burger',       emoji: '🍔', price: 14.99, rating: 4.5, badge: 'Vegan',       desc: 'Plant-based patty, avocado, tomato, lettuce, chipotle mayo.' },
  { id: 9,  name: 'Lava Choco Cake',           cat: 'desserts',     emoji: '🍰', price: 7.99,  rating: 4.9, badge: 'Must Try',    desc: 'Warm molten chocolate centre with a dusting of powdered sugar.' },
  { id: 10, name: 'Berry Cheesecake',          cat: 'desserts',     emoji: '🍰', price: 6.99,  rating: 4.8, badge: null,          desc: 'New York-style cheesecake with mixed berry compote.' },
  { id: 11, name: 'Mango Kulfi',               cat: 'desserts',     emoji: '🍧', price: 5.49,  rating: 4.7, badge: null,          desc: 'Creamy Indian frozen dessert with real Alphonso mango pulp.' },
  { id: 12, name: 'Tiramisu Jar',              cat: 'desserts',     emoji: '🍮', price: 7.49,  rating: 4.8, badge: "Chef's Pick", desc: 'Espresso-soaked ladyfingers, mascarpone, cocoa — in a cute jar.' },
  { id: 13, name: 'Mango Lassi',               cat: 'drinks',       emoji: '🥭', price: 4.99,  rating: 4.8, badge: null,          desc: 'Thick, chilled yoghurt blended with fresh Alphonso mango.' },
  { id: 14, name: 'Virgin Mojito',             cat: 'drinks',       emoji: '🍹', price: 4.49,  rating: 4.7, badge: null,          desc: 'Fresh mint, lime juice, sugar syrup, soda water on crushed ice.' },
  { id: 15, name: 'Cold Brew Coffee',          cat: 'drinks',       emoji: '☕', price: 5.49,  rating: 4.6, badge: null,          desc: '24-hour steeped cold brew with oat milk and one shot of espresso.' },
  { id: 16, name: 'Watermelon Cooler',         cat: 'drinks',       emoji: '🍉', price: 3.99,  rating: 4.5, badge: 'New',         desc: 'Fresh watermelon blended with mint and a hint of sea salt.' },
  { id: 17, name: 'Masala Dosa',               cat: 'south-indian', emoji: '🫔', price: 9.99,  rating: 4.9, badge: 'Bestseller',  desc: 'Crispy rice crepe filled with spiced potato masala, served with chutneys & sambar.' },
  { id: 18, name: 'Chettinad Chicken Curry',   cat: 'south-indian', emoji: '🍛', price: 14.99, rating: 4.8, badge: 'Hot 🔥',      desc: 'Fiery aromatic curry with freshly ground Chettinad spices.' },
  { id: 19, name: 'Pesarattu & Upma',          cat: 'south-indian', emoji: '🥞', price: 8.49,  rating: 4.6, badge: null,          desc: 'Green moong crepe filled with savoury semolina upma.' },
  { id: 20, name: 'Filter Coffee',             cat: 'south-indian', emoji: '☕', price: 3.49,  rating: 4.9, badge: 'Must Try',    desc: 'South Indian drip coffee with frothy hot milk — the real deal.' },
  { id: 21, name: 'Dim Sum Basket',            cat: 'chinese',      emoji: '🥟', price: 11.99, rating: 4.8, badge: null,          desc: 'Six assorted steamed dumplings with ginger-soy dipping sauce.' },
  { id: 22, name: 'Kung Pao Chicken',          cat: 'chinese',      emoji: '🍜', price: 13.99, rating: 4.7, badge: 'Spicy 🌶️',   desc: 'Wok-tossed chicken, peanuts, dried chilies in Sichuan sauce.' },
  { id: 23, name: 'Schezwan Fried Rice',       cat: 'chinese',      emoji: '🍚', price: 10.99, rating: 4.6, badge: null,          desc: 'Indo-Chinese fried rice with schezwan sauce and seasonal veggies.' },
  { id: 24, name: 'Honey Chili Tofu',          cat: 'chinese',      emoji: '🧆', price: 11.49, rating: 4.5, badge: 'Vegan',       desc: 'Crispy tofu tossed in sweet-spicy honey chili glaze with bell peppers.' },
];

const FEATURED_IDS = [2, 5, 9, 17, 22, 13];

const REVIEWS = [
  { stars: 5, text: 'The Lava Cake sent me to another dimension. Still warm when it arrived. 11/10, would get it delivered to my office every Friday.', name: 'Akemi T.',   date: '1 week ago',  avatar: '🧑🏻' },
  { stars: 5, text: 'Ordered the full dinner spread for a family of 6 — everything was hot, accurate, and perfectly packed. Customer service was also lightning fast.', name: 'Roberto M.', date: '1 week ago',  avatar: '👨🏽' },
  { stars: 5, text: 'The app makes ordering SO easy. I love the real-time cart and the checkout flow. Kung Pao Chicken gets a solid 10/10 from me.', name: 'Isla F.',     date: '2 weeks ago', avatar: '👩🏼' },
  { stars: 5, text: 'Tried the South Indian combo on a whim. Filter coffee + Masala Dosa = actual heaven. This is my go-to delivery spot now.', name: 'Dev S.',      date: '2 weeks ago', avatar: '🧑🏾' },
];

/* ── STATE ──────────────────────────────────────────────────── */
let cart           = JSON.parse(localStorage.getItem('zestify_cart') || '[]');
let favorites      = JSON.parse(localStorage.getItem('zestify_favs') || '[]');
let activeCategory = 'all';
let searchQuery    = '';

/* ── HELPERS ─────────────────────────────────────────────────── */
const $   = (s, ctx = document) => ctx.querySelector(s);
const $$  = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const fmt = n => `$${Number(n).toFixed(2)}`;
const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

/* ── LOADER ──────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    $('#loader').classList.add('hidden');
  }, 1900);
});

/* ── THEME ───────────────────────────────────────────────────── */
const html        = document.documentElement;
const themeToggle = $('#themeToggle');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  $('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('zestify_theme', theme);
}

const savedTheme = localStorage.getItem('zestify_theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

/* ── NAVBAR SCROLL ────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  $('#navbar').classList.toggle('scrolled', window.scrollY > 40);
  $('#backToTop').classList.toggle('visible', window.scrollY > 300);
});

$('#backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── MOBILE NAV ──────────────────────────────────────────────── */
function openMobileNav() {
  $('#mobileNav').classList.add('open');
  $('#mobileNavOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  $('#mobileNav').classList.remove('open');
  $('#mobileNavOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
$('#hamburger').addEventListener('click', openMobileNav);
$('#mobileNavClose').addEventListener('click', closeMobileNav);
$('#mobileNavOverlay').addEventListener('click', closeMobileNav);
$$('.mobile-nav-link').forEach(l => l.addEventListener('click', closeMobileNav));

/* ── PARTICLE CANVAS ─────────────────────────────────────────── */
(function initParticles() {
  const canvas = $('#particleCanvas');
  const ctx    = canvas.getContext('2d');
  const EMOJIS = ['🍕','🍔','🌮','🍜','🍱','🥗','🍣','🍰','🥤','🍛','🥟','🍩'];
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function Particle() {
    this.x     = Math.random() * W;
    this.y     = Math.random() * H + H;
    this.emoji = EMOJIS[rand(0, EMOJIS.length - 1)];
    this.size  = rand(18, 34);
    this.speed = Math.random() * 0.6 + 0.3;
    this.drift = (Math.random() - 0.5) * 0.4;
    this.rot   = Math.random() * Math.PI * 2;
    this.rotV  = (Math.random() - 0.5) * 0.02;
    this.alpha = Math.random() * 0.35 + 0.1;
  }
  Particle.prototype.update = function () {
    this.y   -= this.speed;
    this.x   += this.drift;
    this.rot += this.rotV;
    if (this.y < -60) {
      this.y     = H + 60;
      this.x     = Math.random() * W;
      this.emoji = EMOJIS[rand(0, EMOJIS.length - 1)];
    }
  };
  Particle.prototype.draw = function () {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.font = `${this.size}px serif`;
    ctx.textAlign = 'center';
    ctx.fillText(this.emoji, 0, 0);
    ctx.restore();
  };

  for (let i = 0; i < 28; i++) {
    const p = new Particle();
    p.y = Math.random() * H;
    particles.push(p);
  }

  (function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  })();
})();

/* ── HERO STAT COUNTER ───────────────────────────────────────── */
function animateCounters() {
  $$('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    let current  = 0;
    const step   = target / 80;
    const timer  = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString();
    }, 18);
  });
}
const heroObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) { animateCounters(); heroObs.disconnect(); }
}, { threshold: 0.3 });
heroObs.observe($('#hero'));

/* ── SCROLL REVEAL ────────────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

function setupReveal(el) {
  el.classList.add('reveal');
  revealObs.observe(el);
}

/* ── TOAST ───────────────────────────────────────────────────── */
function showToast(msg) {
  const container = $('#toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 2800);
}

/* ── RIPPLE ──────────────────────────────────────────────────── */
function addRipple(btn, e) {
  const rect   = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.left   = `${e.clientX - rect.left}px`;
  ripple.style.top    = `${e.clientY - rect.top}px`;
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

/* ── CAROUSEL ────────────────────────────────────────────────── */
(function initCarousel() {
  const track    = $('#carouselTrack');
  const dotsEl   = $('#carouselDots');
  const featured = FEATURED_IDS.map(id => MENU_ITEMS.find(i => i.id === id)).filter(Boolean);
  let current    = 0;
  const visible  = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;

  featured.forEach(item => {
    const card = document.createElement('div');
    card.className = 'carousel-card';
    card.innerHTML = `
      <div class="carousel-card-img">${item.emoji}</div>
      <div class="carousel-card-body">
        <div class="carousel-card-name">${item.name}</div>
        <div class="carousel-card-price">${fmt(item.price)}</div>
      </div>`;
    card.addEventListener('click', () => addToCart(item.id));
    track.appendChild(card);
    setupReveal(card);
  });

  function buildDots() {
    dotsEl.innerHTML = '';
    const count = Math.max(featured.length - visible() + 1, 1);
    for (let i = 0; i < count; i++) {
      const d = document.createElement('button');
      d.className = 'carousel-dot' + (i === current ? ' active' : '');
      d.addEventListener('click', () => go(i));
      dotsEl.appendChild(d);
    }
  }

  function go(idx) {
    const max  = Math.max(0, featured.length - visible());
    current    = Math.max(0, Math.min(idx, max));
    const cardW = (track.children[0] ? track.children[0].offsetWidth + 24 : 304);
    track.style.transform = `translateX(-${current * cardW}px)`;
    buildDots();
  }

  $('#carouselNext').addEventListener('click', () => go(current + 1));
  $('#carouselPrev').addEventListener('click', () => go(current - 1));
  window.addEventListener('resize', () => go(current));
  buildDots();
  go(0);
})();

/* ── MENU RENDER ─────────────────────────────────────────────── */
function buildMenuCard(item) {
  const isFaved  = favorites.includes(item.id);
  const cartEntry = cart.find(c => c.id === item.id);
  const inCart   = !!cartEntry;

  const card = document.createElement('div');
  card.className  = 'menu-card';
  card.dataset.id = item.id;
  card.innerHTML  = `
    ${item.badge ? `<div class="card-badge">${item.badge}</div>` : ''}
    <div class="card-img-wrap">
      <span class="card-emoji">${item.emoji}</span>
      <button class="card-fav${isFaved ? ' faved' : ''}" data-id="${item.id}" aria-label="Favourite">
        ${isFaved ? '❤️' : '🤍'}
      </button>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <div class="card-name">${item.name}</div>
        <div class="card-rating">⭐ ${item.rating}</div>
      </div>
      <p class="card-desc">${item.desc}</p>
      <div class="card-footer">
        <div class="card-price">${fmt(item.price)}</div>
        <button class="card-add-btn" data-id="${item.id}">
          ${inCart ? '✓ Added' : '+ Add'}
        </button>
      </div>
    </div>`;

  card.querySelector('.card-fav').addEventListener('click', e => {
    e.stopPropagation();
    toggleFav(item.id, card.querySelector('.card-fav'));
  });

  const addBtn = card.querySelector('.card-add-btn');
  addBtn.addEventListener('click', e => {
    addRipple(addBtn, e);
    addToCart(item.id);
    addBtn.textContent = '✓ Added';
  });

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
    card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });

  setupReveal(card);
  return card;
}

function renderMenu() {
  const grid  = $('#menuGrid');
  const noRes = $('#noResults');
  grid.innerHTML = '';

  const filtered = MENU_ITEMS.filter(item => {
    const matchCat    = activeCategory === 'all' || item.cat === activeCategory;
    const matchSearch = !searchQuery ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery) ||
      item.cat.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    noRes.style.display = 'block';
    grid.style.display  = 'none';
  } else {
    noRes.style.display = 'none';
    grid.style.display  = '';
    filtered.forEach((item, i) => {
      const card = buildMenuCard(item);
      card.style.animationDelay = `${i * 0.04}s`;
      grid.appendChild(card);
    });
  }
}
renderMenu();

/* ── FILTERS ─────────────────────────────────────────────────── */
$$('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    $$('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeCategory = pill.dataset.cat;
    renderMenu();
  });
});

/* ── SEARCH ──────────────────────────────────────────────────── */
const searchInput = $('#searchInput');
const searchClear = $('#searchClear');

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.toLowerCase().trim();
  searchClear.classList.toggle('visible', searchQuery.length > 0);
  renderMenu();
});
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery       = '';
  searchClear.classList.remove('visible');
  renderMenu();
});

/* ── FAVORITES ───────────────────────────────────────────────── */
function toggleFav(id, btn) {
  const idx = favorites.indexOf(id);
  if (idx === -1) {
    favorites.push(id);
    btn.textContent = '❤️';
    btn.classList.add('faved');
    showToast('Added to favourites ❤️');
  } else {
    favorites.splice(idx, 1);
    btn.textContent = '🤍';
    btn.classList.remove('faved');
    showToast('Removed from favourites');
  }
  localStorage.setItem('zestify_favs', JSON.stringify(favorites));
}

/* ── CART ────────────────────────────────────────────────────── */
function saveCart() {
  localStorage.setItem('zestify_cart', JSON.stringify(cart));
}

function addToCart(id) {
  const item = MENU_ITEMS.find(i => i.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: item.id, name: item.name, emoji: item.emoji, price: item.price, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`${item.emoji} ${item.name} added to cart!`);
  animateBadge();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderCartSidebar();
  updateSummary();
}

function changeQty(id, delta) {
  const entry = cart.find(c => c.id === id);
  if (!entry) return;
  entry.qty += delta;
  if (entry.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartUI();
  renderCartSidebar();
  updateSummary();
}

function calcTotals() {
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const tax      = subtotal * 0.08;
  const delivery = subtotal > 0 ? 2.99 : 0;
  const total    = subtotal + tax + delivery;
  return { subtotal, tax, delivery, total };
}

function updateCartUI() {
  const totalQty = cart.reduce((s, c) => s + c.qty, 0);
  $('#cartBadge').textContent = totalQty;
  renderMenu();
}

function animateBadge() {
  const badge = $('#cartBadge');
  badge.classList.remove('pop');
  void badge.offsetWidth;
  badge.classList.add('pop');
}

function renderCartSidebar() {
  const itemsEl  = $('#cartItems');
  const footerEl = $('#cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-emoji">🍽️</div>
        <p>Your cart is empty!</p>
        <a href="#menu" class="btn btn-primary" id="cartBrowseBtn">Browse Menu</a>
      </div>`;
    footerEl.style.display = 'none';
    const browseBtn = $('#cartBrowseBtn');
    if (browseBtn) browseBtn.addEventListener('click', closeCart);
    updateSummary();
    return;
  }

  itemsEl.innerHTML = '';

  cart.forEach(entry => {
    const row = document.createElement('div');
    row.className  = 'cart-item';
    row.dataset.id = entry.id;
    row.innerHTML  = `
      <div class="cart-item-emoji">${entry.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${entry.name}</div>
        <div class="cart-item-price">${fmt(entry.price * entry.qty)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn qty-minus" data-id="${entry.id}">−</button>
        <span class="qty-num">${entry.qty}</span>
        <button class="qty-btn qty-plus"  data-id="${entry.id}">+</button>
        <button class="qty-btn qty-remove" data-id="${entry.id}">🗑</button>
      </div>`;
    itemsEl.appendChild(row);
  });

  itemsEl.querySelectorAll('.qty-minus').forEach(btn =>
    btn.addEventListener('click', () => changeQty(+btn.dataset.id, -1)));
  itemsEl.querySelectorAll('.qty-plus').forEach(btn =>
    btn.addEventListener('click', () => changeQty(+btn.dataset.id, +1)));
  itemsEl.querySelectorAll('.qty-remove').forEach(btn =>
    btn.addEventListener('click', () => removeFromCart(+btn.dataset.id)));

  const { subtotal, tax, delivery, total } = calcTotals();
  $('#cartSubtotal').textContent = fmt(subtotal);
  $('#cartTax').textContent      = fmt(tax);
  $('#cartDelivery').textContent = fmt(delivery);
  $('#cartTotal').textContent    = fmt(total);
  footerEl.style.display         = '';

  updateSummary();
}

/* ── OPEN / CLOSE CART ───────────────────────────────────────── */
function openCart() {
  renderCartSidebar();
  $('#cartSidebar').classList.add('open');
  $('#cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $('#cartSidebar').classList.remove('open');
  $('#cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

$('#cartBtn').addEventListener('click', openCart);
$('#cartClose').addEventListener('click', closeCart);
$('#cartOverlay').addEventListener('click', closeCart);
$('#checkoutBtn').addEventListener('click', closeCart);

/* ── ORDER SUMMARY (checkout section) ───────────────────────── */
function updateSummary() {
  const summaryItems = $('#summaryItems');

  if (cart.length === 0) {
    summaryItems.innerHTML = '<p class="summary-empty">Your cart is empty. Add some items first!</p>';
    $('#summarySubtotal').textContent = '$0.00';
    $('#summaryTax').textContent      = '$0.00';
    $('#summaryDelivery').textContent = '$0.00';
    $('#summaryTotal').textContent    = '$0.00';
    return;
  }

  summaryItems.innerHTML = '';
  cart.forEach(entry => {
    const row = document.createElement('div');
    row.className = 'summary-item';
    row.innerHTML = `
      <span class="summary-item-name">${entry.emoji} ${entry.name} × ${entry.qty}</span>
      <span class="summary-item-price">${fmt(entry.price * entry.qty)}</span>`;
    summaryItems.appendChild(row);
  });

  const { subtotal, tax, delivery, total } = calcTotals();
  $('#summarySubtotal').textContent = fmt(subtotal);
  $('#summaryTax').textContent      = fmt(tax);
  $('#summaryDelivery').textContent = fmt(delivery);
  $('#summaryTotal').textContent    = fmt(total);
}
updateSummary();

/* ── PAYMENT TOGGLE ──────────────────────────────────────────── */
$$('input[name="payment"]').forEach(radio => {
  radio.addEventListener('change', () => {
    $('#cardFields').style.display = radio.value === 'card' ? '' : 'none';
  });
});

/* ── CARD NUMBER / EXPIRY FORMATTING ─────────────────────────── */
$('#cardNum').addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 16);
  e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
});
$('#expiry').addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 4);
  if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
  e.target.value = v;
});

/* ── CHECKOUT FORM VALIDATION ────────────────────────────────── */
function validateCheckout() {
  const fields = [
    { el: $('#fullName'), label: 'Full Name' },
    { el: $('#email'),    label: 'Email' },
    { el: $('#phone'),    label: 'Phone' },
    { el: $('#address'),  label: 'Delivery Address' },
  ];
  for (const { el, label } of fields) {
    if (!el.value.trim()) {
      showToast(`⚠️ Please fill in your ${label}`);
      el.focus();
      return false;
    }
  }
  const payment = $('input[name="payment"]:checked').value;
  if (payment === 'card') {
    const cardNum = $('#cardNum').value.replace(/\s/g, '');
    if (cardNum.length !== 16) { showToast('⚠️ Enter a valid 16-digit card number'); return false; }
    if ($('#expiry').value.length !== 5) { showToast('⚠️ Enter a valid expiry (MM/YY)'); return false; }
    if ($('#cvv').value.length !== 3)    { showToast('⚠️ Enter a valid 3-digit CVV'); return false; }
  }
  if (cart.length === 0) {
    showToast('🛒 Your cart is empty!');
    return false;
  }
  return true;
}

/* ── PLACE ORDER ─────────────────────────────────────────────── */
$('#placeOrderBtn').addEventListener('click', () => {
  if (!validateCheckout()) return;

  const orderId = Math.random().toString(36).substr(2, 8).toUpperCase();
  $('#orderId').textContent = orderId;
  $('#successModal').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Clear cart after successful order
  cart = [];
  saveCart();
  updateCartUI();
  updateSummary();
});

$('#successClose').addEventListener('click', () => {
  $('#successModal').classList.remove('active');
  document.body.style.overflow = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── REVIEWS ─────────────────────────────────────────────────── */
(function renderReviews() {
  const grid = $('#reviewsGrid');
  REVIEWS.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-stars">${'⭐'.repeat(r.stars)}</div>
      <p class="review-text">${r.text}</p>
      <div class="review-author">
        <span class="review-avatar">${r.avatar}</span>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-date">${r.date}</div>
        </div>
      </div>`;
    grid.appendChild(card);
    setupReveal(card);
  });
})();

/* ── CHAT WIDGET ─────────────────────────────────────────────── */
const chatBtn    = $('#chatBtn');
const chatWidget = $('#chatWidget');
const chatClose  = $('#chatClose');
const chatBody   = $('.chat-widget-body');

function openChat() {
  chatWidget.classList.add('open');
  chatBtn.style.display = 'none';
}
function closeChat() {
  chatWidget.classList.remove('open');
  chatBtn.style.display = '';
}

chatBtn.addEventListener('click', openChat);
chatClose.addEventListener('click', closeChat);

const BOT_REPLIES = {
  'track my order':   'Your order is on its way! 🚚 Estimated arrival: 20 minutes.',
  'view menu deals':  'Check out our Hot 🔥 items — Pepperoni Overload & Smash Stack are fan favourites today!',
  'contact support':  'You can reach our support team at support@zestify.com or call 1-800-ZEST. We\'re here 24/7! 😊',
};

$$('.chat-quick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const msg   = btn.dataset.msg;
    const reply = BOT_REPLIES[msg.toLowerCase()] || "I'll get back to you shortly! 😊";
    appendChatMsg(msg, 'user');
    setTimeout(() => appendChatMsg(reply, 'bot'), 700);
  });
});

function appendChatMsg(text, type) {
  const div = document.createElement('div');
  div.className = `chat-message ${type}`;
  div.textContent = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

/* ── SECTION REVEAL (static sections) ───────────────────────── */
$$('.section-header, .form-card, .review-card').forEach(setupReveal);