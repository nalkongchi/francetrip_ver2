// ── PAGE SWITCH ──
function switchPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.bnav-btn').forEach(b => b.classList.remove('active'));

  const target = document.getElementById('page-' + id);
  if (!target) return;
  target.classList.add('active');

  if (btn) {
    btn.classList.add('active');
  } else {
    document.querySelectorAll('.bnav-btn').forEach(b => {
      if ((b.getAttribute('onclick') || '').includes("'" + id + "'")) {
        b.classList.add('active');
      }
    });
  }

  window.scrollTo({ top: 0, behavior: 'auto' });

  const subHeader = document.getElementById('subpage-header');
  if (subHeader) {
    subHeader.classList.toggle('show', id !== 'home');
  }

  if (id === 'map') {
    setTimeout(() => {
      initLeafletMap();
      if (leafletMap) leafletMap.invalidateSize();
    }, 80);
  }
}

// ── STARS ──
(function() {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = document.getElementById('page-home').offsetHeight || window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  const stars = Array.from({ length: 130 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.4 + 0.3,
    a: Math.random(),
    sp: Math.random() * 0.007 + 0.003,
    ph: Math.random() * Math.PI * 2
  }));

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      const alpha = s.a * (0.4 + 0.6 * Math.sin(t * s.sp + s.ph));
      ctx.beginPath();
      ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232,213,160,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();

// ── D-DAY ──
(function() {
  const start = new Date('2026-03-07T00:00:00');
  const end = new Date('2026-03-14T23:59:59');
  const now = new Date();

  const numEl = document.getElementById('dday-number');
  const lblEl = document.getElementById('dday-label');
  const dscEl = document.getElementById('dday-desc');
  if (!numEl || !lblEl || !dscEl) return;

  if (now < start) {
    const diff = Math.ceil((start - now) / 86400000);
    lblEl.textContent = 'TRIP COUNTDOWN';
    numEl.textContent = 'D-' + diff;
    dscEl.textContent = '파리까지 ' + diff + '일 남았어요 ✈️';
  } else if (now <= end) {
    const day = Math.floor((now - start) / 86400000) + 1;
    lblEl.textContent = 'TRAVEL DAY';
    numEl.textContent = 'DAY ' + day;
    dscEl.textContent = '지금 여행 중! 즐거운 하루 🇫🇷';
  } else {
    lblEl.textContent = 'COMPLETED';
    numEl.textContent = '🎉';
    dscEl.textContent = '소중한 추억을 간직하세요 💛';
  }
})();

// ── WEATHER ──
async function fetchWeather(lat, lon, iconId, tempId, descId) {
  const iconEl = document.getElementById(iconId);
  const tempEl = document.getElementById(tempId);
  const descEl = document.getElementById(descId);

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=Europe/Paris`;
    const res = await fetch(url);
    const data = await res.json();

    const temp = Math.round(data?.current?.temperature_2m);
    const code = data?.current?.weather_code ?? data?.current?.weathercode;

    const WEATHER_MAP = {
      0:  { icon: '☀️', text: '맑음' },
      1:  { icon: '🌤', text: '대체로 맑음' },
      2:  { icon: '⛅', text: '구름 조금' },
      3:  { icon: '☁️', text: '흐림' },
      45: { icon: '🌫', text: '안개' },
      48: { icon: '🌫', text: '서리 안개' },
      51: { icon: '🌦', text: '약한 이슬비' },
      53: { icon: '🌦', text: '이슬비' },
      55: { icon: '🌧', text: '강한 이슬비' },
      56: { icon: '🌧', text: '어는 이슬비' },
      57: { icon: '🌧', text: '강한 어는 이슬비' },
      61: { icon: '🌧', text: '약한 비' },
      63: { icon: '🌧', text: '비' },
      65: { icon: '🌧', text: '강한 비' },
      66: { icon: '🌧', text: '어는 비' },
      67: { icon: '🌧', text: '강한 어는 비' },
      71: { icon: '🌨', text: '약한 눈' },
      73: { icon: '🌨', text: '눈' },
      75: { icon: '❄️', text: '강한 눈' },
      77: { icon: '🌨', text: '싸락눈' },
      80: { icon: '🌦', text: '약한 소나기' },
      81: { icon: '🌦', text: '소나기' },
      82: { icon: '⛈', text: '강한 소나기' },
      85: { icon: '🌨', text: '약한 눈 소나기' },
      86: { icon: '❄️', text: '강한 눈 소나기' },
      95: { icon: '⛈', text: '뇌우' },
      96: { icon: '⛈', text: '우박 뇌우' },
      99: { icon: '⛈', text: '강한 우박 뇌우' }
    };

    const weather = WEATHER_MAP[code] || { icon: '🌡', text: '날씨 확인' };

    if (iconEl) iconEl.textContent = weather.icon;
    if (tempEl) tempEl.textContent = Number.isFinite(temp) ? `${temp}°C` : '—°C';
    if (descEl) descEl.textContent = weather.text;
  } catch (e) {
    if (tempEl) tempEl.textContent = '—°C';
    if (descEl) descEl.textContent = '—';
  }
}

fetchWeather(48.8566, 2.3522, 'wp-icon', 'wp-temp', 'wp-desc');
fetchWeather(48.5734, 7.7521, 'ws-icon', 'ws-temp', 'ws-desc');

// ── LEAFLET MAP ──
const DAY_COLORS = {
  1: '#FF6B6B',
  2: '#FF9F43',
  3: '#FECA57',
  4: '#48DBFB',
  5: '#1DD1A1',
  6: '#A29BFE',
  7: '#FD79A8',
  8: '#74B9FF'
};

const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
let leafletMap = null;
let curLayers = [];
let curMarkers = [];

function initLeafletMap() {
  if (leafletMap) return;

  leafletMap = L.map('leaflet-map', {
    scrollWheelZoom: false,
    tap: false,
    dragging: !isTouchDevice,
    touchZoom: true
  }).setView([48.8566, 2.3522], 13);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap © CARTO',
    maxZoom: 19
  }).addTo(leafletMap);

  showDay(1, document.querySelector('.map-day-btn'));
}

function getDayDisplay(day) {
  const startHotel = day.startHotel ? { ...day.startHotel, kind: 'hotel' } : null;
  const endHotel = day.endHotel ? { ...day.endHotel, kind: 'hotel' } : null;
  const groups = Array.isArray(day.segments) ? day.segments.map(group => (group || []).map(spot => ({ ...spot }))) : [];
  const displaySpots = [];
  if (startHotel) displaySpots.push(startHotel);
  groups.forEach(group => displaySpots.push(...group));
  if (endHotel) displaySpots.push(endHotel);
  return { startHotel, endHotel, groups, displaySpots };
}

function getLineGroups(day, display) {
  const { startHotel, endHotel, groups } = display;
  if (day.connectHotels && groups.length === 1) {
    const route = [];
    if (startHotel) route.push(startHotel);
    route.push(...groups[0]);
    if (endHotel) route.push(endHotel);
    return [route];
  }
  return groups;
}

function getFocusGroup(day, lineGroups, displaySpots) {
  if (typeof day.focusSegmentIndex === 'number' && lineGroups[day.focusSegmentIndex]) {
    return lineGroups[day.focusSegmentIndex];
  }
  if (day.focusFirstSegment) {
    return lineGroups.find(group => group.length > 1) || lineGroups[0] || displaySpots;
  }
  if (lineGroups.length) {
    return lineGroups[0];
  }
  return displaySpots;
}

function showDay(dayNum, btn) {
  if (!leafletMap) return;

  curLayers.forEach(layer => leafletMap.removeLayer(layer));
  curLayers = [];
  curMarkers = [];

  document.querySelectorAll('.map-day-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const day = TRIP_DAYS[dayNum];
  if (!day) return;

  const color = DAY_COLORS[dayNum] || '#c9a84c';
  const display = getDayDisplay(day);
  const displaySpots = display.displaySpots;
  const lineGroups = getLineGroups(day, display);

  lineGroups.forEach(group => {
    if (!group || group.length < 2) return;

    const line = L.polyline(
      group.map(spot => [spot.lat, spot.lng]),
      { color, weight: 3.5, opacity: 0.85, dashArray: '8,5' }
    ).addTo(leafletMap);

    curLayers.push(line);
  });

  let stopNumber = 1;

  displaySpots.forEach((spot, i) => {
    const isHotel = spot.kind === 'hotel';
    const sz = isHotel ? 32 : 26;

    const markerHtml = isHotel
      ? `<div style="width:${sz}px;height:${sz}px;background:rgba(13,18,38,0.95);border:2.5px solid rgba(255,255,255,0.9);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.5);"><span style="font-size:12px">🏨</span></div>`
      : `<div style="width:${sz}px;height:${sz}px;background:${color};border:2.5px solid rgba(255,255,255,0.45);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.5);"><span style="color:#111;font-weight:700;font-size:10px">${stopNumber++}</span></div>`;

    const marker = L.marker([spot.lat, spot.lng], {
      icon: L.divIcon({
        html: markerHtml,
        className: '',
        iconSize: [sz, sz],
        iconAnchor: [sz / 2, sz / 2]
      })
    }).addTo(leafletMap)
      .bindPopup(
        `<b style="color:#c9a84c">${spot.icon || (isHotel ? '🏨' : '📍')} ${spot.name}</b><br><span style="color:#999;font-size:0.72rem">${isHotel ? '숙소' : '이동 포인트'}</span>`,
        { className: 'dark-popup' }
      );

    curLayers.push(marker);
    curMarkers.push(marker);
  });

  const focusGroup = getFocusGroup(day, lineGroups, displaySpots);
  const focusPoints = (focusGroup || []).map(spot => [spot.lat, spot.lng]).filter(Boolean);

  if (focusPoints.length) {
    const bounds = L.latLngBounds(focusPoints);
    leafletMap.fitBounds(bounds, { padding: [30, 30] });
  }

  const titleEl = document.getElementById('map-day-title');
  const spotsEl = document.getElementById('map-day-spots');

  if (titleEl) titleEl.textContent = day.title;
  if (spotsEl) {
    let stopLabelNumber = 1;
    spotsEl.innerHTML = displaySpots
      .map((spot, idx) => {
        const isHotel = spot.kind === 'hotel';
        const prefix = isHotel ? '🏨' : `${stopLabelNumber++}.`;
        return `<span class="spot-pill" onclick="flyTo(${idx})">${prefix} ${spot.name}</span>`;
      })
      .join('');
  }
  try{ enhanceScheduleLinks(); }catch(e){}
}

function flyTo(idx) {
  if (!curMarkers[idx] || !leafletMap) return;
  leafletMap.flyTo(curMarkers[idx].getLatLng(), 16, { duration: 0.8 });
  setTimeout(() => curMarkers[idx].openPopup(), 900);
}

// ── DAY SWITCH ──
function switchDay(num, btn) {
  document.querySelectorAll('.day-content').forEach(d => d.classList.remove('active'));
  document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));

  const target = document.getElementById('day-' + num);
  if (target) target.classList.add('active');
  if (btn) btn.classList.add('active');
}

// ── BUDGET ──
const EX_RATE = Number(TRIP_CONFIG?.exchangeRate) || 1700;
let editingId = null;
let expenses = JSON.parse(localStorage.getItem('fr_expenses') || '[]');

expenses = expenses.map(e => ({
  ...e,
  currency: e.currency || 'EUR',
  originalAmount: typeof e.originalAmount === 'number'
    ? e.originalAmount
    : Number((e.amount || 0).toFixed(2))
}));

function saveExp() {
  try { localStorage.setItem('fr_expenses', JSON.stringify(expenses)); } catch (e) {}
}

function getAmountInEur(amount, currency) {
  return currency === 'KRW' ? amount / EX_RATE : amount;
}

function resetExpenseForm() {
  document.getElementById('ex-name').value = '';
  document.getElementById('ex-amount').value = '';
  document.getElementById('ex-cat').value = 'transport';
  document.getElementById('ex-currency').value = 'EUR';
}

function updateExpenseFormUI() {
  const addBtn = document.getElementById('btn-add-expense');
  const cancelBtn = document.getElementById('btn-cancel-edit');
  const hint = document.getElementById('editing-hint');

  if (!addBtn || !cancelBtn || !hint) return;

  if (editingId) {
    addBtn.textContent = '✓ 수정 저장';
    cancelBtn.style.display = 'inline-block';
    hint.style.display = 'block';
  } else {
    addBtn.textContent = '+ 추가';
    cancelBtn.style.display = 'none';
    hint.style.display = 'none';
  }
}

function cancelEdit() {
  editingId = null;
  resetExpenseForm();
  updateExpenseFormUI();
}

function addExpense() {
  const name = document.getElementById('ex-name').value.trim();
  const amountInput = parseFloat(document.getElementById('ex-amount').value);
  const cat = document.getElementById('ex-cat').value;
  const currency = document.getElementById('ex-currency').value;

  if (!name || isNaN(amountInput) || amountInput <= 0) return;

  const amountEur = getAmountInEur(amountInput, currency);

  if (editingId) {
    expenses = expenses.map(e => e.id === editingId ? {
      ...e,
      name,
      cat,
      currency,
      originalAmount: amountInput,
      amount: amountEur
    } : e);
    editingId = null;
  } else {
    expenses.push({
      name,
      amount: amountEur,
      originalAmount: amountInput,
      currency,
      cat,
      id: Date.now()
    });
  }

  saveExp();
  renderExp();
  resetExpenseForm();
  updateExpenseFormUI();
}

function editExpense(id) {
  const item = expenses.find(e => e.id === id);
  if (!item) return;

  document.getElementById('ex-name').value = item.name;
  document.getElementById('ex-amount').value = item.originalAmount;
  document.getElementById('ex-cat').value = item.cat;
  document.getElementById('ex-currency').value = item.currency || 'EUR';

  editingId = id;
  updateExpenseFormUI();

  const budgetPage = document.getElementById('page-budget');
  if (budgetPage && budgetPage.classList.contains('active')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function deleteExpense(id) {
  expenses = expenses.filter(e => e.id !== id);
  if (editingId === id) {
    editingId = null;
    resetExpenseForm();
    updateExpenseFormUI();
  }
  saveExp();
  renderExp();
}

function renderExp() {
  const list = document.getElementById('expense-list');
  if (!list) return;

  const cats = { transport: 0, food: 0, hotel: 0, sightseeing: 0, shopping: 0, etc: 0 };
  let totalEur = 0;

  expenses.forEach(e => {
    totalEur += e.amount;
    if (cats[e.cat] !== undefined) cats[e.cat] += e.amount;
  });

  const totalKrw = Math.round(totalEur * EX_RATE);
  const totalEl = document.getElementById('total-amount');
  if (totalEl) {
    totalEl.innerHTML = `<span class="ba-eur">€ ${totalEur.toFixed(2)}</span><span class="ba-sub">/ ₩ ${totalKrw.toLocaleString()}</span>`;
  }

  Object.keys(cats).forEach(k => {
    const el = document.getElementById('cat-' + k);
    if (el) el.textContent = '€' + cats[k].toFixed(2);
  });

  if (!expenses.length) {
    list.innerHTML = '<div class="empty-state"><span class="big">💶</span>아직 지출 내역이 없어요</div>';
    return;
  }

  const cn = {
    transport: '✈️ 교통',
    food: '🍽 식사',
    hotel: '🏨 숙박',
    sightseeing: '🎨 관광',
    shopping: '🛍 쇼핑',
    etc: '☕ 기타'
  };

  list.innerHTML = [...expenses].reverse().map(e => {
    const krw = Math.round(e.amount * EX_RATE);
    return `<div class="expense-item">
      <div class="ex-left">
        <div class="ex-cat">${cn[e.cat] || e.cat}</div>
        <div class="ex-name">${e.name}</div>
      </div>
      <div class="ex-amt">
        <div>€${e.amount.toFixed(2)}</div>
        <div style="font-size:0.65rem; color:var(--muted); margin-top:2px;">₩${krw.toLocaleString()}</div>
      </div>
      <div class="ex-actions">
        <button class="ex-edit" type="button" onclick="editExpense(${e.id})" aria-label="수정">✎</button>
        <button class="ex-del" type="button" onclick="deleteExpense(${e.id})" aria-label="삭제">✕</button>
      </div>
    </div>`;
  }).join('');
}

renderExp();
updateExpenseFormUI();

// ── CHECKLIST ──
let checkState = JSON.parse(localStorage.getItem('fr_checks') || '{}');

function saveChecks() {
  try { localStorage.setItem('fr_checks', JSON.stringify(checkState)); } catch (e) {}

  const t = document.getElementById('save-toast');
  if (!t) return;

  t.style.opacity = '1';
  t.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2000);
}

function renderChecklist() {
  Object.keys(CHECKLIST_DATA).forEach(sec => {
    const el = document.getElementById('list-' + sec);
    if (!el) return;

    const items = CHECKLIST_DATA[sec];
    const done = items.filter(item => checkState[item.id]).length;

    const prog = document.getElementById('prog-' + sec);
    if (prog) prog.style.width = (items.length ? (done / items.length * 100) : 0) + '%';

    el.innerHTML = items.map(item => {
      const isDone = !!checkState[item.id];
      return `<label class="check-item ${isDone ? 'done' : ''}" onclick="toggleCheck('${item.id}')">
        <div class="check-box"></div>
        <div>
          <div class="check-label">${item.text}</div>
          ${item.note ? `<div class="check-note">${item.note}</div>` : ''}
        </div>
      </label>`;
    }).join('');
  });
}

function toggleCheck(id) {
  checkState[id] = !checkState[id];
  renderChecklist();
}

renderChecklist();

// ── ACCORDION ──
function toggleAcc(header) {
  const body = header.nextElementSibling;
  const open = body.classList.contains('open');
  body.classList.toggle('open', !open);
  header.classList.toggle('open', !open);
}

// ── MEMO ──
const memoEl = document.getElementById('free-memo');
if (memoEl) {
  const savedMemo = localStorage.getItem('fr_memo');
  if (savedMemo) {
    memoEl.value = savedMemo.trim() === TRIP_CONFIG.legacyDefaultMemo.trim()
      ? TRIP_CONFIG.defaultMemo
      : savedMemo;
  } else {
    memoEl.value = TRIP_CONFIG.defaultMemo;
  }

  memoEl.addEventListener('input', function() {
    try { localStorage.setItem('fr_memo', this.value); } catch (e) {}
  });
}

// ── DUAL CLOCK ──
function updateClocks() {
  const now = new Date();

  const krOpt = { timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', hour12: false };
  const frOpt = { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', hour12: false };

  const krTime = now.toLocaleTimeString('en-US', krOpt);
  const frTime = now.toLocaleTimeString('en-US', frOpt);

  const krEl = document.getElementById('time-kr');
  const frEl = document.getElementById('time-fr');

  if (krEl) krEl.textContent = krTime;
  if (frEl) frEl.textContent = frTime;
}

setInterval(updateClocks, 1000);
updateClocks();

// ── BGM ──
const bgm = document.getElementById('bgm');
const bgmToggle = document.getElementById('bgm-toggle');

if (bgm) {
  bgm.volume = 0.35;
}

async function toggleBgm() {
  if (!bgm || !bgmToggle) return;

  if (bgm.paused) {
    try {
      await bgm.play();
      bgmToggle.textContent = '⏸ BGM';
      bgmToggle.classList.add('playing');
    } catch (e) {
      alert('브라우저 정책 때문에 자동 재생이 막혔어요. 버튼을 다시 한 번 눌러 재생해줘.');
    }
  } else {
    bgm.pause();
    bgmToggle.textContent = '🎵 BGM';
    bgmToggle.classList.remove('playing');
  }
}

if (bgmToggle) {
  bgmToggle.addEventListener('click', toggleBgm);
}

document.addEventListener('DOMContentLoaded', async () => {
  const subHeader = document.getElementById('subpage-header');
  if (subHeader) subHeader.classList.remove('show');

  if (bgm && bgmToggle) {
    try {
      await bgm.play();
      bgmToggle.textContent = '⏸ BGM';
      bgmToggle.classList.add('playing');
    } catch (e) {
      const resumeOnFirstTouch = async () => {
        try {
          await bgm.play();
          bgmToggle.textContent = '⏸ BGM';
          bgmToggle.classList.add('playing');
        } catch (err) {}

        document.removeEventListener('pointerdown', resumeOnFirstTouch);
        document.removeEventListener('touchstart', resumeOnFirstTouch);
        document.removeEventListener('keydown', resumeOnFirstTouch);
      };

      document.addEventListener('pointerdown', resumeOnFirstTouch, { passive: true });
      document.addEventListener('touchstart', resumeOnFirstTouch, { passive: true });
      document.addEventListener('keydown', resumeOnFirstTouch);
    }
  }
});


// === Map + Language buttons in schedule (auto-detect venue name) ===
function normalizeText(s){ return (s || '').toLowerCase(); }

function buildVenueIndex(){
  const data = window.LANGUAGE_DATA;
  const venues = [];
  if (!data || !data.categories) return venues;
  for (const cat of data.categories){
    for (const v of (cat.venues || [])){
      const key = (v.name || '').split('(')[0].trim();
      venues.push({
        id: v.id || '',
        key,
        name: v.name,
        maps_query: v.maps_query || '',
        lines: v.lines || [],
        catLabel: cat.label || cat.id
      });
    }
  }
  return venues;
}

const __VENUES = buildVenueIndex();
const __VENUE_BY_ID = Object.fromEntries(__VENUES.filter(v => v.id).map(v => [v.id, v]));

function getVenueById(id){
  return __VENUE_BY_ID[id] || null;
}

function findVenueForTitle(titleText){
  const t = normalizeText(titleText);
  const sorted = [...__VENUES].sort((a, b) => (b.key || '').length - (a.key || '').length);
  for (const v of sorted){
    const k = normalizeText(v.key);
    if (k && t.includes(k)) return v;
  }
  return null;
}

function mapsUrlForQuery(q){
  const encoded = encodeURIComponent(q);
  return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
}

function openLangSheet(venue){
  const backdrop = document.getElementById('langSheet');
  const titleEl = document.getElementById('langSheetTitle');
  const bodyEl = document.getElementById('langSheetBody');
  if (!backdrop || !titleEl || !bodyEl) return;

  titleEl.textContent = venue.name || '';

  // Add subtitle element if not present
  let subtitleEl = backdrop.querySelector('.sheet-subtitle');
  if (!subtitleEl) {
    subtitleEl = document.createElement('div');
    subtitleEl.className = 'sheet-subtitle';
    titleEl.insertAdjacentElement('afterend', subtitleEl);
  }
  subtitleEl.textContent = (venue.catLabel || '').toUpperCase();

  bodyEl.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'lang-card';

  (venue.lines || []).forEach((line) => {
    const row = document.createElement('div');
    row.className = 'lang-line';

    // Left: fr + pron + ko
    const frWrap = document.createElement('div');
    frWrap.className = 'lang-fr-wrap';

    const frText = document.createElement('span');
    frText.className = 'lang-fr';
    frText.textContent = line.fr || '';

    const pronText = (line.pron || '').trim();
    const pronEl = document.createElement('span');
    pronEl.className = 'lang-pron';
    if (pronText) pronEl.textContent = `(${pronText})`;

    const koEl = document.createElement('span');
    koEl.className = 'lang-ko';
    koEl.textContent = (line.ko || '').trim();

    frWrap.appendChild(frText);
    if (pronText) frWrap.appendChild(pronEl);
    frWrap.appendChild(koEl);

    // Right: speak button
    const speak = document.createElement('button');
    speak.className = 'icon-btn speak-btn';
    speak.textContent = '🔊';
    speak.setAttribute('aria-label', 'Speak');
    speak.addEventListener('click', () => {
      try {
        const u = new SpeechSynthesisUtterance(line.fr || '');
        u.lang = 'fr-FR';
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      } catch (e) {}
    });

    row.appendChild(frWrap);
    row.appendChild(speak);
    card.appendChild(row);
  });

  bodyEl.appendChild(card);
  backdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLangSheet(){
  const backdrop = document.getElementById('langSheet');
  if (!backdrop) return;
  backdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

function wireLangSheetGestures(){
  const backdrop = document.getElementById('langSheet');
  const sheet = backdrop?.querySelector('.sheet');
  const closeBtn = document.getElementById('langSheetClose');
  if (!backdrop || !sheet) return;

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeLangSheet();
  });
  closeBtn?.addEventListener('click', closeLangSheet);

  let startY = 0;
  let currentY = 0;
  let dragging = false;

  const sheetHandle = sheet.querySelector('.sheet-handle');
  const dragTarget = sheetHandle || sheet;

  dragTarget.addEventListener('touchstart', (e) => {
    if (!e.touches?.length) return;
    dragging = true;
    startY = e.touches[0].clientY;
    currentY = startY;
  }, { passive: true });

  dragTarget.addEventListener('touchmove', (e) => {
    if (!dragging || !e.touches?.length) return;
    currentY = e.touches[0].clientY;
    const dy = Math.max(0, currentY - startY);
    sheet.style.transform = `translateY(${dy}px)`;
  }, { passive: true });

  dragTarget.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    const dy = Math.max(0, currentY - startY);
    sheet.style.transform = '';
    if (dy > 90) closeLangSheet();
  });
}

function getEventType(card){
  const eventEl = card.closest('.event');
  if (!eventEl) return '';
  if (eventEl.classList.contains('transport')) return 'transport';
  if (eventEl.classList.contains('food')) return 'food';
  if (eventEl.classList.contains('sightseeing')) return 'sightseeing';
  if (eventEl.classList.contains('hotel')) return 'hotel';
  if (eventEl.classList.contains('note')) return 'note';
  return '';
}

function getTitleTextWithoutTags(titleEl){
  const clone = titleEl.cloneNode(true);
  clone.querySelectorAll('.tag').forEach((tag) => tag.remove());
  return (clone.textContent || '').replace(/\s+/g, ' ').trim();
}

function cleanMapQuery(raw, eventType){
  let q = (raw || '').replace(/\s+/g, ' ').trim();
  q = q.replace(/^[^\p{L}\p{N}\(]+/u, '').trim();
  q = q.replace(/^(아침|점심|저녁|카페\/티타임|카페|브런치|티타임)\s*:\s*/u, '').trim();

  if (eventType === 'hotel'){
    const match = q.match(/\(([^)]+)\)/);
    if (match) return match[1].trim();
    if (/숙소\s*휴식/.test(q)) return '';
  }

  if (/^(도보 이동|이동)$/.test(q)) return '';
  return q;
}

// ── SPOT DATA LOOKUP ──
// Build a flat map of all spots from TRIP_DAYS for quick lookup by name
function buildSpotIndex(){
  const idx = {};
  if (!window.TRIP_DAYS) return idx;
  Object.values(window.TRIP_DAYS).forEach(day => {
    (day.segments || []).forEach(seg => {
      seg.forEach(spot => {
        if (spot.name) idx[spot.name.trim()] = spot;
      });
    });
    [day.startHotel, day.endHotel].forEach(h => {
      if (h?.name) idx[h.name.trim()] = h;
    });
  });
  return idx;
}

let __SPOT_INDEX = null;
function getSpotIndex(){
  if (!__SPOT_INDEX) __SPOT_INDEX = buildSpotIndex();
  return __SPOT_INDEX;
}

function getLangVenueForCard(card){
  // First try: get spot data from title text → lang_id field
  const titleEl = card.querySelector('.event-title');
  if (!titleEl) return null;
  const titleText = getTitleTextWithoutTags(titleEl);

  // Strip meal prefix (아침: / 저녁: etc.)
  const stripped = titleText.replace(/^[^\p{L}\p{N}(]+/u, '').replace(/^(아침|점심|저녁|카페\/티타임|카페|브런치|티타임)\s*:\s*/u, '').trim();

  const spot = getSpotIndex()[stripped] || getSpotIndex()[titleText.trim()];
  if (spot?.lang_id) return getVenueById(spot.lang_id);

  // Fallback: hotel check-in/out
  const type = getEventType(card);
  if (type === 'hotel' && /(숙소|체크인|체크아웃|짐 보관)/.test(titleText)) {
    return getVenueById('general_hotel');
  }

  return null;
}

function getMapsUrlForCard(card){
  const titleEl = card.querySelector('.event-title');
  if (!titleEl) return '';
  const titleText = getTitleTextWithoutTags(titleEl);
  const stripped = titleText.replace(/^[^\p{L}\p{N}(]+/u, '').replace(/^(아침|점심|저녁|카페\/티타임|카페|브런치|티타임)\s*:\s*/u, '').trim();

  const spot = getSpotIndex()[stripped] || getSpotIndex()[titleText.trim()];
  if (spot?.maps_url) return spot.maps_url;

  // No maps_url for transport/note types
  const type = getEventType(card);
  if (type === 'transport' || type === 'note') return '';

  return '';
}

function createEventActionButton(kind){
  const btn = document.createElement('button');
  btn.className = `event-action-btn event-action-btn-${kind}`;
  btn.type = 'button';

  if (kind === 'map') {
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18l-6 2V6l6-2 6 2 6-2v14l-6 2-6-2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 4v14M15 6v14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
    btn.title = 'Google Maps';
    btn.setAttribute('aria-label', 'Google Maps');
  } else {
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 6.5h10a3 3 0 0 1 3 3v4.8a3 3 0 0 1-3 3H12l-4 3v-3H7a3 3 0 0 1-3-3V9.5a3 3 0 0 1 3-3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
    btn.title = '프랑스어 도움말';
    btn.setAttribute('aria-label', '프랑스어 도움말');
  }

  return btn;
}

function enhanceScheduleLinks(){
  const cards = document.querySelectorAll('.event-card');
  if (!cards?.length) return;

  cards.forEach((card) => {
    if (card.dataset.quickEnhanced === '1') return;

    const langVenue = getLangVenueForCard(card);
    const mapsUrl   = getMapsUrlForCard(card);

    const shouldShowLang = !!langVenue;
    const shouldShowMap  = !!mapsUrl;

    card.dataset.quickEnhanced = '1';

    if (!shouldShowLang && !shouldShowMap) return;

    // ── 안 B: 버튼을 .event 바깥 상단 우측에 배치 ──
    const eventEl = card.closest('.event');
    if (!eventEl || eventEl.dataset.actionsAdded === '1') return;

    const actions = document.createElement('div');
    actions.className = 'card-actions-outer';

    if (shouldShowLang) {
      const langBtn = createEventActionButton('lang');
      langBtn.addEventListener('click', () => openLangSheet(langVenue));
      actions.appendChild(langBtn);
    }

    if (shouldShowMap) {
      const mapBtn = createEventActionButton('map');
      mapBtn.addEventListener('click', () => {
        window.open(mapsUrl, '_blank', 'noopener,noreferrer');
      });
      actions.appendChild(mapBtn);
    }

    // Insert actions div before the event-card inside .event
    eventEl.insertBefore(actions, card);
    eventEl.dataset.actionsAdded = '1';
    eventEl.classList.add('has-quick-actions');
  });
}

// Call after initial load + whenever day is rendered
document.addEventListener('DOMContentLoaded', () => {
  wireLangSheetGestures();
  setTimeout(enhanceScheduleLinks, 0);
});