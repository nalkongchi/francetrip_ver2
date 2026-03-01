
const app = document.getElementById('app');
const panel = document.createElement('div');
panel.id = 'panel';
document.body.appendChild(panel);

function speak(text){
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'fr-FR';
  speechSynthesis.speak(u);
}

DATA.forEach(place=>{
  const div = document.createElement('div');
  div.className='card';

  div.innerHTML = `
    <b>${place.name}</b>
    <div class="actions">
      <button onclick="openMap('${place.query}')">📍</button>
      <button onclick='openLang(${JSON.stringify(place.language)})'>🗣️</button>
    </div>
  `;
  app.appendChild(div);
});

function openMap(q){
  window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`);
}

function openLang(lang){
  panel.style.display='block';
  panel.innerHTML = `<h3>${lang.title}</h3>` + lang.lines.map(l=>`
    <div>
      <b>${l.fr}</b> (${l.ko})
      <button onclick="speak('${l.fr}')">🔊</button>
    </div>
  `).join('');
}
