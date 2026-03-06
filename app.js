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
  // displaySpots: startHotel 1번, 경유지, endHotel 마지막 번호 마커 (목록 미표시)
  const displaySpots = [];
  if (startHotel) displaySpots.push(startHotel);
  groups.forEach(group => displaySpots.push(...group));
  if (endHotel) displaySpots.push(endHotel);
  return { startHotel, endHotel, groups, displaySpots };
}

function getLineGroups(day, display) {
  const { startHotel, endHotel, groups } = display;
  if (day.connectHotels) {
    if (groups.length === 1) {
      // 단일 세그먼트: 숙소→경로→숙소 하나의 선
      const route = [];
      if (startHotel) route.push(startHotel);
      route.push(...groups[0]);
      if (endHotel) route.push(endHotel);
      return [route];
    } else {
      // 멀티 세그먼트: 각 세그먼트 앞뒤에 숙소 연결 + 세그먼트 간 연결선 추가
      const result = groups.map(g => [...g]);
      if (startHotel) result[0] = [startHotel, ...result[0]];
      if (endHotel) result[result.length - 1] = [...result[result.length - 1], endHotel];
      // 세그먼트 사이 연결선: 이전 세그먼트 끝 → 다음 세그먼트 시작
      const bridges = [];
      for (let i = 0; i < result.length - 1; i++) {
        const from = result[i][result[i].length - 1];
        const to = result[i + 1][0];
        if (from && to) bridges.push([from, to]);
      }
      return [...result, ...bridges];
    }
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

  // 좌표별 번호 배열 미리 계산 (endHotel 제외)
  const coordNums = {};
  let preNum = 1;
  displaySpots.forEach(spot => {
    const key = `${spot.lat},${spot.lng}`;
    if (!coordNums[key]) coordNums[key] = [];
    coordNums[key].push(preNum++);
  });

  // 좌표별 첫 번째 마커 인덱스 저장 (flyTo 재사용용)
  const coordFirstMarkerIdx = {};
  const renderedCoords = {};

  displaySpots.forEach((spot, i) => {
    const isHotel = spot.kind === 'hotel';
    const sz = 28;
    const key = `${spot.lat},${spot.lng}`;

    if (renderedCoords[key]) {
      // 중복 좌표: 새 마커 안 만들고 첫 번째 마커 인덱스 등록
      curMarkers.push(curMarkers[coordFirstMarkerIdx[key]]);
      return;
    }

    const nums = coordNums[key] || [preNum];
    const label = nums.join(',');
    const fontSize = label.length > 2 ? '8px' : '10px';

    const markerHtml = isHotel
      ? `<div style="width:${sz}px;height:${sz}px;background:rgba(13,18,38,0.95);border:2.5px solid #c9a84c;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.5);"><span style="color:#c9a84c;font-weight:700;font-size:${fontSize}">${label}</span></div>`
      : `<div style="width:${sz}px;height:${sz}px;background:${color};border:2.5px solid rgba(255,255,255,0.45);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.5);"><span style="color:#111;font-weight:700;font-size:${fontSize}">${label}</span></div>`;

    const marker = L.marker([spot.lat, spot.lng], {
      icon: L.divIcon({ html: markerHtml, className: '', iconSize: [sz, sz], iconAnchor: [sz/2, sz/2] })
    }).addTo(leafletMap).bindPopup(
      `<b style="color:#c9a84c">${spot.icon || '📍'} ${spot.name}</b><br><span style="color:#999;font-size:0.72rem">${isHotel ? '숙소' : '이동 포인트'}</span>`,
      { className: 'dark-popup' }
    );

    coordFirstMarkerIdx[key] = curMarkers.length;
    renderedCoords[key] = true;
    curLayers.push(marker);
    curMarkers.push(marker);
  });

  // 뷰 결정: focusSegmentIndex가 있으면 해당 세그먼트, 없으면 전체 displaySpots
  let focusPoints;
  if (typeof day.focusSegmentIndex === 'number' && lineGroups[day.focusSegmentIndex]) {
    focusPoints = lineGroups[day.focusSegmentIndex].map(spot => [spot.lat, spot.lng]).filter(Boolean);
  } else {
    focusPoints = displaySpots.map(spot => [spot.lat, spot.lng]).filter(Boolean);
  }

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
        if (isHotel && spot === display.endHotel) return ''; // endHotel은 목록 미표시
        const num = stopLabelNumber++;
        const prefix = isHotel
          ? `<span style="color:#c9a84c;font-weight:700">${num}.</span>`
          : `${num}.`;
        return `<span class="spot-pill" onclick="flyTo(${idx})">${prefix} ${spot.name}</span>`;
      })
      .join('');
  }

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

const CHECKLIST_SECTIONS = {
  docs:        '📄 서류 & 결제',
  bag:         '🧳 캐리어 & 가방',
  eyes:        '👓 안경 & 렌즈',
  skin:        '🧴 세면 & 스킨케어',
  meds:        '💊 의약품',
  clothes:     '👕 의류 & 신발',
  electronics: '🔌 전자기기',
  etc:         '✈️ 기내 & 기타'
};

function saveChecks() {
  try { localStorage.setItem('fr_checks', JSON.stringify(checkState)); } catch (e) {}
}

function renderChecklist() {
  const wrap = document.querySelector('.checklist-wrap');
  if (!wrap || !window.CHECKLIST_DATA) return;

  // 섹션 div가 없으면 새로 생성
  Object.entries(CHECKLIST_SECTIONS).forEach(([key, label]) => {
    if (!document.getElementById('list-' + key)) {
      const sec = document.createElement('div');
      sec.className = 'check-section';
      sec.innerHTML = `<h3>${label}</h3>
        <div class="progress-bar"><div class="progress-fill" id="prog-${key}"></div></div>
        <div id="list-${key}"></div>`;
      wrap.appendChild(sec);
    }
  });

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
  saveChecks();
  renderChecklist();
}

renderChecklist();

// ── SOUVENIR ──
let souvenirState = JSON.parse(localStorage.getItem('fr_souvenirs') || '{}');

function saveSouvenirs() {
  try { localStorage.setItem('fr_souvenirs', JSON.stringify(souvenirState)); } catch(e) {}
}

function toggleSouvenir(id) {
  souvenirState[id] = !souvenirState[id];
  saveSouvenirs();
  renderSouvenirs();
}

function renderSouvenirs() {
  const container = document.getElementById('souvenir-list');
  if (!container || !window.SOUVENIR_DATA) return;

  container.innerHTML = SOUVENIR_DATA.map(sec => {
    const items = sec.items.map(item => {
      const isDone = !!souvenirState[item.id];
      return `<div class="souvenir-item ${isDone ? 'done' : ''}" onclick="toggleSouvenir('${item.id}')">
        <div class="souvenir-check-box"></div>
        <div style="flex:1;min-width:0;">
          <div class="souvenir-label">${item.text}</div>
          <div class="souvenir-meta">
            <span class="souvenir-tag where">📍 ${item.where}</span>
            <span class="souvenir-tag forWhom">👤 ${item.forWhom}</span>
            <span class="souvenir-tag">🗓 ${item.day}</span>
          </div>
          ${item.warn ? `<div class="souvenir-warn">${item.warn}</div>` : ''}
        </div>
      </div>`;
    }).join('');

    return `<div class="souvenir-section">
      <div class="souvenir-section-title">${sec.section}</div>
      ${items}
    </div>`;
  }).join('');
}

renderSouvenirs();

// ── ACCORDION ──
function toggleAcc(header) {
  const body = header.nextElementSibling;
  const open = body.classList.contains('open');
  body.classList.toggle('open', !open);
  header.classList.toggle('open', !open);
}

function switchSurvTab(el, panelId) {
  const inner = el.closest('.acc-inner');
  inner.querySelectorAll('.surv-tab').forEach(t => t.classList.remove('active'));
  inner.querySelectorAll('.surv-panel').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}

// ── 환율 계산기 ──
(function(){
  const CACHE_KEY = 'fx_eur_krw', CACHE_TS = 'fx_eur_krw_ts', FALLBACK = 1720;
  let fxRate = FALLBACK;
  let fxLastInput = 'eur';

  function fmtKrw(n) { return Math.round(n).toLocaleString('ko-KR'); }
  function fmtTs(ms) { return new Date(ms).toLocaleString('ko-KR', {month:'numeric',day:'numeric',hour:'numeric',minute:'2-digit'}); }

  function setFxRate(r, src, ts) {
    fxRate = r;
    const $d = document.getElementById('fx-display');
    const $u = document.getElementById('fx-updated');
    const $dot = document.getElementById('fx-dot');
    const $st = document.getElementById('fx-status-text');
    if ($d) $d.textContent = fmtKrw(r) + ' 원';
    if ($u) $u.textContent = ts;
    if ($dot) $dot.className = src === 'live' ? 'fx-dot' : 'fx-dot offline';
    if ($st) $st.textContent = src === 'live' ? '실시간' : src === 'cache' ? '캐시' : '기본값';
  }

  async function fetchFxRate() {
    const cached = localStorage.getItem(CACHE_KEY);
    const ts_raw = localStorage.getItem(CACHE_TS);
    const now = Date.now();
    if (cached && ts_raw && now - parseInt(ts_raw) < 3600000) {
      setFxRate(parseFloat(cached), 'cache', fmtTs(parseInt(ts_raw))); return;
    }
    try {
      const d = await (await fetch('https://api.exchangerate-api.com/v4/latest/EUR')).json();
      localStorage.setItem(CACHE_KEY, d.rates.KRW);
      localStorage.setItem(CACHE_TS, now);
      setFxRate(d.rates.KRW, 'live', fmtTs(now));
    } catch(e) {
      cached ? setFxRate(parseFloat(cached), 'cache', ts_raw ? fmtTs(parseInt(ts_raw)) : '이전 저장값')
             : setFxRate(FALLBACK, 'fallback', '기본값 1,720원');
    }
  }

  window.calcFx = function() {
    const $eur = document.getElementById('fx-eur');
    const $krw = document.getElementById('fx-krw');
    const $result = document.getElementById('fx-result');
    const $fromLabel = document.getElementById('fx-from-label');
    const $fromVal = document.getElementById('fx-from-val');
    const $toLabel = document.getElementById('fx-to-label');
    const $toVal = document.getElementById('fx-to-val');
    if (!$eur || !$krw || !$result) return;
    if (fxLastInput === 'eur') {
      const v = parseFloat($eur.value);
      if (isNaN(v) || $eur.value === '') return;
      $fromLabel.textContent = 'EUR €';
      $fromVal.textContent = '€ ' + v;
      $toLabel.textContent = 'KRW ₩';
      $toVal.textContent = fmtKrw(v * fxRate) + '원';
    } else {
      const raw = $krw.value.replace(/,/g, '');
      const v = parseFloat(raw);
      if (isNaN(v) || $krw.value === '') return;
      $fromLabel.textContent = 'KRW ₩';
      $fromVal.textContent = '₩ ' + fmtKrw(v);
      $toLabel.textContent = 'EUR €';
      $toVal.textContent = '€ ' + (v / fxRate).toFixed(2);
    }
    $result.classList.add('visible');
  };

  function wireFx() {
    const $eur = document.getElementById('fx-eur');
    const $krw = document.getElementById('fx-krw');
    if (!$eur || !$krw) return;
    $eur.addEventListener('focus', () => { fxLastInput = 'eur'; });
    $krw.addEventListener('focus', () => { fxLastInput = 'krw'; });
    [$eur, $krw].forEach(el => el.addEventListener('keydown', e => { if (e.key === 'Enter') window.calcFx(); }));
  }

  document.addEventListener('DOMContentLoaded', () => { wireFx(); fetchFxRate(); });
})();

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


// ── LANG SHEET ──
function openLangSheet(venue){
  const backdrop = document.getElementById('langSheet');
  const titleEl = document.getElementById('langSheetTitle');
  const bodyEl = document.getElementById('langSheetBody');
  if (!backdrop || !titleEl || !bodyEl) return;

  titleEl.textContent = venue.name || '';

  const dayLabelEl = document.getElementById('langSheetDay');
  if (dayLabelEl) dayLabelEl.textContent = (venue.catLabel || '').toUpperCase();

  bodyEl.innerHTML = '';

  function makeSpeakBtn(fr) {
    const speak = document.createElement('button');
    speak.className = 'icon-btn speak-btn';
    speak.textContent = '🔊';
    speak.setAttribute('aria-label', 'Speak');
    speak.addEventListener('click', () => {
      try {
        const u = new SpeechSynthesisUtterance(fr || '');
        u.lang = 'fr-FR';
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      } catch (e) {}
    });
    return speak;
  }

  function makeBubble(line) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

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

    bubble.appendChild(makeSpeakBtn(line.fr));
    bubble.appendChild(frText);
    if (pronText) bubble.appendChild(pronEl);
    bubble.appendChild(koEl);

    if (line.tip) {
      const tipEl = document.createElement('span');
      tipEl.className = 'lang-tip';
      tipEl.textContent = line.tip;
      bubble.appendChild(tipEl);
    }

    return bubble;
  }

  // 그룹 구조 (groups) vs flat 구조 (lines) 자동 분기
  if (venue.groups && venue.groups.length > 0) {
    venue.groups.forEach((group) => {
      const groupEl = document.createElement('div');
      groupEl.className = 'bubble-group';

      if (group.label) {
        const labelEl = document.createElement('div');
        labelEl.className = 'bubble-context';
        labelEl.textContent = group.label;
        groupEl.appendChild(labelEl);
      }

      (group.lines || []).forEach((line) => {
        groupEl.appendChild(makeBubble(line));
      });

      bodyEl.appendChild(groupEl);
    });
  } else {
    const card = document.createElement('div');
    card.className = 'lang-card';

    (venue.lines || []).forEach((line) => {
      const row = document.createElement('div');
      row.className = 'lang-line';

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

      if (line.tip) {
        const tipEl = document.createElement('span');
        tipEl.className = 'lang-tip';
        tipEl.textContent = line.tip;
        frWrap.appendChild(tipEl);
      }

      row.appendChild(frWrap);
      row.appendChild(makeSpeakBtn(line.fr));
      card.appendChild(row);
    });

    bodyEl.appendChild(card);
  }
  backdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLangSheet(){
  const backdrop = document.getElementById('langSheet');
  if (!backdrop) return;
  backdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

// ── LANG SHEET GESTURES ──
function wireLangSheetGestures(){
  const backdrop = document.getElementById('langSheet');
  const sheet = backdrop?.querySelector('.sheet');
  const body = document.getElementById('langSheetBody');
  const closeBtn = document.getElementById('langSheetClose');
  if (!backdrop || !sheet) return;

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeLangSheet();
  });
  closeBtn?.addEventListener('click', closeLangSheet);

  let startY = 0;
  let currentY = 0;
  let dragging = false;
  let canDrag = false;

  sheet.addEventListener('touchstart', (e) => {
    if (!e.touches?.length) return;
    startY = e.touches[0].clientY;
    currentY = startY;
    const atTop = !body || body.scrollTop <= 0;
    const onHandle = e.target.closest('.sheet-handle');
    canDrag = atTop || !!onHandle;
    dragging = canDrag;
  }, { passive: true });

  sheet.addEventListener('touchmove', (e) => {
    if (!dragging || !e.touches?.length) return;
    currentY = e.touches[0].clientY;
    const dy = currentY - startY;
    if (dy <= 0) {
      sheet.style.transform = '';
      sheet.style.transition = '';
      dragging = false;
      return;
    }
    sheet.style.transition = 'none';
    sheet.style.transform = `translateY(${dy}px)`;
  }, { passive: true });

  sheet.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    const dy = Math.max(0, currentY - startY);
    sheet.style.transition = 'transform 0.3s ease';
    if (dy > 100) {
      sheet.style.transform = `translateY(100%)`;
      setTimeout(() => {
        closeLangSheet();
        sheet.style.transform = '';
        sheet.style.transition = '';
      }, 280);
    } else {
      sheet.style.transform = '';
      setTimeout(() => { sheet.style.transition = ''; }, 300);
    }
  });
}

// ── SCHEDULE RENDER ──
function renderSchedule(dayNum) {
  const data = window.SCHEDULE_DATA && window.SCHEDULE_DATA[dayNum];
  if (!data) return;

  const container = document.getElementById('day-' + dayNum);
  if (!container) return;

  // header
  const h = data.header;
  let html = `<div class="day-header"><div class="day-icon">${h.icon}</div><div><h2>${h.title}</h2><p>${h.sub}</p></div></div>`;
  html += '<div class="timeline">';

  for (const ev of data.events) {
    const hasFold = !!ev.foldNote;
    const hasTags = ev.tags && ev.tags.length > 0;
    const tagHtml = hasTags
      ? ev.tags.map(t => `<span class="tag ${t.cls}">${t.text}</span>`).join('')
      : '';

    html += `<div class="event ${ev.type}" data-id="${ev.id}">`;
    html += `<div class="event-card">`;
    html += `<div class="event-time">${ev.time || ''}</div>`;
    html += `<div class="event-title">${ev.title || ''}${tagHtml}</div>`;
    if (ev.detail) html += `<div class="event-detail">${ev.detail}</div>`;
    if (ev.note)   html += `<div class="event-note">${ev.note}</div>`;
    if (hasFold) {
      html += `<details class="fold-note"><summary>⚠️ 참고</summary><div class="fold-body">${ev.foldNote}</div></details>`;
    }
    html += `</div>`; // event-card
    html += `</div>`; // event
  }

  html += '</div>'; // timeline
  container.innerHTML = html;

  // 버튼 부착
  attachScheduleButtons(dayNum);
}

function attachScheduleButtons(dayNum) {
  const data = window.SCHEDULE_DATA && window.SCHEDULE_DATA[dayNum];
  if (!data) return;

  for (const ev of data.events) {
    if (!ev.maps_url && !ev.lang_id) continue;

    const eventEl = document.querySelector(`[data-id="${ev.id}"]`);
    if (!eventEl || eventEl.dataset.actionsAdded === '1') continue;

    const actions = document.createElement('div');
    actions.className = 'card-actions-outer';

    if (ev.lang_id) {
      const venue = getVenueById(ev.lang_id);
      if (venue) {
        const langBtn = createEventActionButton('lang');
        langBtn.addEventListener('click', () => openLangSheet(venue));
        actions.appendChild(langBtn);
      }
    }

    if (ev.maps_url) {
      const mapBtn = createEventActionButton('map');
      mapBtn.addEventListener('click', () => {
        window.open(ev.maps_url, '_blank', 'noopener,noreferrer');
      });
      actions.appendChild(mapBtn);
    }

    const card = eventEl.querySelector('.event-card');
    if (card) eventEl.insertBefore(actions, card);
    eventEl.dataset.actionsAdded = '1';
    eventEl.classList.add('has-quick-actions');
  }
}

// ── VENUE LOOKUP (language.js 기반) ──
function normalizeText(s){ return (s || '').toLowerCase(); }

function buildVenueIndex(){
  const data = window.LANGUAGE_DATA;
  const venues = [];
  if (!data || !data.categories) return venues;
  for (const cat of data.categories){
    for (const v of (cat.venues || [])){
      venues.push({
        id: v.id || '',
        name: v.name,
        lines: v.lines || [],
        groups: v.groups || null,
        catLabel: v.catLabel || cat.label || cat.id
      });
    }
  }
  return venues;
}

let __VENUES = null;
let __VENUE_BY_ID = null;

function getVenueIndex(){
  if (!__VENUES) {
    __VENUES = buildVenueIndex();
    __VENUE_BY_ID = Object.fromEntries(__VENUES.filter(v => v.id).map(v => [v.id, v]));
  }
  return { venues: __VENUES, byId: __VENUE_BY_ID };
}

function getVenueById(id){
  return getVenueIndex().byId[id] || null;
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

// Call after initial load
document.addEventListener('DOMContentLoaded', () => {
  wireLangSheetGestures();
  // 첫 번째 day 렌더링
  for (let d = 1; d <= 8; d++) renderSchedule(d);
});
