window.TRIP_CONFIG = {
  exchangeRate: 1700,
  defaultMemo: `환율 참고: €1 ≈ 약 1,700원
긴급전화: 112 (경찰), 15 (의료), 18 (소방)
한국 영사관: +33-1-47-53-01-01`,
  legacyDefaultMemo: `환율 참고: €1 ≈ 약 1,500원
긴급전화: 112 (경찰), 15 (의료), 18 (소방)
한국 영사관: +33-1-47-53-01-01`
};

window.TRIP_DAYS = {
  1: {
    title: 'Day 1 — 3/7 (토) · 인천 → 파리',
    startHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel' },
    endHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel' },
    connectHotels: true,
    segments: [[
      { name: '샤를드골 국제공항 (CDG)', lat: 49.0097, lng: 2.5479, icon: '✈️' },
      { name: 'Intermarché EXPRESS', lat: 48.8674, lng: 2.3622, icon: '🛒' }
    ]]
  },

  2: {
    title: 'Day 2 — 3/8 (일) · 마레 & 시테섬 & 생루이섬',
    startHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel' },
    endHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel' },
    connectHotels: true,
    segments: [[
      { name: 'Carette (보쥬 광장 점)', lat: 48.8551, lng: 2.3625, icon: '🥐' },
      { name: '보쥬 광장', lat: 48.8553, lng: 2.3625, icon: '🌿' },
      { name: '빅토르 위고 하우스', lat: 48.8554, lng: 2.3619, icon: '🏠' },
      { name: '카르나발레 박물관', lat: 48.8576, lng: 2.3622, icon: '🏛' },
      { name: '피카소 미술관 (외관)', lat: 48.8599, lng: 2.3622, icon: '🎨' },
      { name: "L'As du Fallafel", lat: 48.8571, lng: 2.3561, icon: '🥙' },
      { name: 'Mariage Frères Marais', lat: 48.8572, lng: 2.3536, icon: '🍵' },
      { name: '오텔 드 빌 (시청사)', lat: 48.8566, lng: 2.3522, icon: '🏛' },
      { name: '퐁뇌프 / 시테섬', lat: 48.8572, lng: 2.3417, icon: '🌉' },
      { name: '노트르담 대성당', lat: 48.8530, lng: 2.3499, icon: '⛪' },
      { name: '퐁생루이 다리', lat: 48.8519, lng: 2.3538, icon: '🌉' },
      { name: '생루이섬', lat: 48.8515, lng: 2.3561, icon: '🏝' },
      { name: '루브르 박물관 야경', lat: 48.8606, lng: 2.3376, icon: '🌇' },
      { name: 'Breizh Café Montorgueil', lat: 48.8631, lng: 2.3468, icon: '🥞' }
    ]]
  },

  3: {
    title: 'Day 3 — 3/9 (월) · 루브르 & 오랑주리 & 샹젤리제',
    startHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel' },
    endHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel' },
    connectHotels: true,
    segments: [[
      { name: '오텔 드 빌 (시청사)', lat: 48.8566, lng: 2.3522, icon: '📸' },
      { name: '루브르 박물관', lat: 48.8606, lng: 2.3376, icon: '🏛' },
      { name: '퐁데자르', lat: 48.8583, lng: 2.3373, icon: '🌉' },
      { name: 'Palais-Royal', lat: 48.8638, lng: 2.3370, icon: '🌿' },
      { name: 'Galerie Vivienne', lat: 48.8648, lng: 2.3386, icon: '🛍' },
      { name: 'Bistrot Victoires', lat: 48.8625, lng: 2.3425, icon: '🦆' },
      { name: '갤러리 라파예트 오스만', lat: 48.8736, lng: 2.3323, icon: '🛍' },
      { name: '방돔 광장', lat: 48.8675, lng: 2.3294, icon: '💎' },
      { name: '튈르리 정원', lat: 48.8638, lng: 2.3274, icon: '🌿' },
      { name: '오랑주리 미술관', lat: 48.8638, lng: 2.3225, icon: '🎨' },
      { name: '콩코르드 광장', lat: 48.8656, lng: 2.3211, icon: '🏛' },
      { name: '샹젤리제 거리', lat: 48.8698, lng: 2.3078, icon: '🛍' },
      { name: '개선문', lat: 48.8738, lng: 2.2950, icon: '🌄' },
      { name: 'Bouillon République', lat: 48.8671, lng: 2.3631, icon: '🐌' }
    ]]
  },

  4: {
    title: 'Day 4 — 3/10 (화) · 생마르탱 운하 & 에펠탑',
    startHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel' },
    endHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel' },
    connectHotels: true,
    segments: [[
      { name: 'Le Pain des Copains', lat: 48.8684, lng: 2.3594, icon: '🥐' },
      { name: '생마르탱 운하', lat: 48.8698, lng: 2.3637, icon: '🛶' },
      { name: '유토피아 베이커리', lat: 48.8625, lng: 2.3520, icon: '🥖' },
      { name: 'Square Jules Ferry', lat: 48.8679, lng: 2.3648, icon: '🌳' },
      { name: 'La Poste (160 Rue du Temple)', lat: 48.8618, lng: 2.3548, icon: '💌' },
      { name: '레퓌블리크 광장', lat: 48.8674, lng: 2.3630, icon: '🗽' },
      { name: '트로카데로 광장', lat: 48.8638, lng: 2.2888, icon: '📸' },
      { name: '에펠탑', lat: 48.8584, lng: 2.2945, icon: '🗼' },
      { name: '마르스 광장', lat: 48.8556, lng: 2.2988, icon: '🌿' },
      { name: 'Rue Cler', lat: 48.8564, lng: 2.3053, icon: '☕' },
      { name: "Rue de l'Université / Rue Saint-Dominique", lat: 48.8591, lng: 2.3008, icon: '🏙' },
      { name: 'Sunflower Café', lat: 48.8550, lng: 2.2978, icon: '☕' },
      { name: '비라켐 다리', lat: 48.8517, lng: 2.2880, icon: '🌉' },
      { name: "L'Atypic", lat: 48.8527, lng: 2.2965, icon: '🥩' },
      { name: '바토 파리지앵 선착장', lat: 48.8601, lng: 2.2958, icon: '🚢' }
    ]]
  },

  5: {
    title: 'Day 5 — 3/11 (수) · 파리 → 스트라스부르',
    startHotel: { name: '디스트릭트 레퓌블리크 (파리 숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel' },
    endHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, icon: '🏨', kind: 'hotel' },
    connectHotels: false,
    focusSegmentIndex: 1,
    segments: [
      [
        { name: '파리 동역 (Gare de l’Est)', lat: 48.8767, lng: 2.3590, icon: '🚄' }
      ],
      [
        { name: '스트라스부르 역', lat: 48.5851, lng: 7.7341, icon: '🚄' },
        { name: 'Winstub Le Zehnerglock', lat: 48.5804, lng: 7.7468, icon: '🍽' },
        { name: '스트라스부르 대성당', lat: 48.5818, lng: 7.7507, icon: '⛩' },
        { name: '구텐베르크 광장', lat: 48.5809, lng: 7.7476, icon: '🏛' },
        { name: '강변 산책 / 구시가지', lat: 48.5799, lng: 7.7445, icon: '🌊' },
        { name: 'La Fignette', lat: 48.5798, lng: 7.7460, icon: '🔥' }
      ]
    ]
  },

  6: {
    title: 'Day 6 — 3/12 (목) · 콜마르 당일치기 & 스트라스부르',
    startHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, icon: '🏨', kind: 'hotel' },
    endHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, icon: '🏨', kind: 'hotel' },
    connectHotels: false,
    focusSegmentIndex: 1,
    segments: [
      [
        { name: '스트라스부르 역', lat: 48.5851, lng: 7.7341, icon: '🚂' }
      ],
      [
        { name: '콜마르 역', lat: 48.0764, lng: 7.3584, icon: '🚂' },
        { name: '콜마르 구시가지', lat: 48.0785, lng: 7.3580, icon: '🏘' },
        { name: '쁘띠 베니스', lat: 48.0771, lng: 7.3564, icon: '🌊' },
        { name: 'WISTUB BRENNER', lat: 48.0782, lng: 7.3568, icon: '🍷' },
        { name: 'Pâtisserie Gilg', lat: 48.0791, lng: 7.3567, icon: '🍰' },
        { name: 'Maison des Têtes', lat: 48.0806, lng: 7.3579, icon: '🏛' },
        { name: '운터린덴 미술관 (외관)', lat: 48.0806, lng: 7.3562, icon: '🎨' },
        { name: '콜마르 역', lat: 48.0764, lng: 7.3584, icon: '🚂' }
      ],
      [
        { name: '스트라스부르 역', lat: 48.5851, lng: 7.7341, icon: '🚂' },
        { name: 'Maison Kammerzell', lat: 48.5819, lng: 7.7507, icon: '🐟' },
        { name: '쿠베르교 & 보방 댐', lat: 48.5795, lng: 7.7387, icon: '🌉' },
        { name: '쁘띠 프랑스', lat: 48.5793, lng: 7.7410, icon: '🌙' }
      ]
    ]
  },

  7: {
    title: 'Day 7 — 3/13 (금) · 독일 켈 & 스트라스부르 쇼핑',
    startHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, icon: '🏨', kind: 'hotel' },
    endHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, icon: '🏨', kind: 'hotel' },
    connectHotels: true,
    segments: [[
      { name: 'Ancienne Synagogue / Les Halles', lat: 48.5805, lng: 7.7481, icon: '🚋' },
      { name: 'Port du Rhin', lat: 48.5746, lng: 7.7768, icon: '🚋' },
      { name: '두 히브 가든', lat: 48.5745, lng: 7.8050, icon: '🌿' },
      { name: 'Passerelle des Deux Rives', lat: 48.5749, lng: 7.7967, icon: '🌉' },
      { name: '라인강변 산책 포인트', lat: 48.5758, lng: 7.8038, icon: '🌊' },
      { name: 'Café Backhaus Dreher', lat: 48.5793, lng: 7.8102, icon: '🥨' },
      { name: 'City Center Kehl (DM)', lat: 48.5734, lng: 7.8156, icon: '🛒' },
      { name: 'Place des Halles / Auchan', lat: 48.5855, lng: 7.7418, icon: '🛍' },
      { name: 'Le Tire-Bouchon', lat: 48.5814, lng: 7.7492, icon: '🍷' }
    ]]
  },

  8: {
    title: 'Day 8 — 3/14 (토) · 스트라스부르 → CDG 출국',
    startHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, icon: '🏨', kind: 'hotel' },
    endHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, icon: '🏨', kind: 'hotel' },
    connectHotels: false,
    focusSegmentIndex: 1,
    segments: [
      [
        { name: '스트라스부르 역 (TGV 출발)', lat: 48.5851, lng: 7.7341, icon: '🚄' }
      ],
      [
        { name: 'Paris CDG Terminal 2 (Gare TGV)', lat: 49.0097, lng: 2.5479, icon: '🚄' },
        { name: 'CDG Terminal 1', lat: 49.0062, lng: 2.5725, icon: '✈️' },
        { name: '맥도날드 (CDG T1)', lat: 49.0065, lng: 2.5732, icon: '🍔' },
        { name: '아시아나 카운터 (T1 Hall 1)', lat: 49.0062, lng: 2.5725, icon: '🛄' },
        { name: 'Bistrot Benoît', lat: 49.0066, lng: 2.5740, icon: '🍽' },
        { name: '탑승 게이트 OZ0502', lat: 49.0070, lng: 2.5745, icon: '✈️' }
      ]
    ]
  }
};

window.SOUVENIR_DATA = [
  {
    section: '🏬 백화점 & 전문 부티크',
    items: [
      { id: 's01', text: '구딸(Goutal) 향수', where: '마레 지구 부티크 or 갤러리 라파예트 본관', forWhom: '나', day: 'Day 2–3' },
      { id: 's02', text: '마리아주 프레르 — 마르코 폴로 등 홍차', where: '마레 지구 전용 매장 (Day 2)', forWhom: '나/선물', day: 'Day 2' },
      { id: 's03', text: '로네펠트(Ronnefeldt) 홍차', where: '갤러리 라파예트 식품관 or 티 전문점', forWhom: '선물', day: 'Day 3' },
      { id: 's04', text: '르 보르디에 버터 (유자·천일염 맛)', where: '갤러리 라파예트 고메 식품관', forWhom: '나', day: 'Day 3', warn: '⚠️ 출국 직전 보냉백+얼음 필수! (Day 8 구매 권장)' },
      { id: 's05', text: '라 꽁비에트 버터 (개별 포장)', where: '갤러리 라파예트 고메 식품관', forWhom: '나/선물', day: 'Day 3', warn: '⚠️ 출국 직전 보냉백+얼음 필수! (Day 8 구매 권장)' },
    ]
  },
  {
    section: '🛒 프랑스 대형 마트',
    items: [
      { id: 's06', text: '크렘 드 마롱 — 클레망 포지에 밤잼', where: 'Auchan 스트라스부르 or Monoprix 파리', forWhom: '나/선물', day: 'Day 5–7' },
      { id: 's07', text: '게랑드 소금 (Fleur de Sel)', where: '프랑스 대형 마트', forWhom: '나', day: 'Day 5–7' },
      { id: 's08', text: '마이유(Maille) 트러플 머스터드', where: '프랑스 대형 마트', forWhom: '나/선물', day: 'Day 5–7' },
      { id: 's09', text: '트러플 오일 / 트러플 소금', where: '프랑스 대형 마트', forWhom: '나', day: 'Day 5–7' },
      { id: 's10', text: '본마망 타르트 과자 (레몬·라즈베리 등)', where: 'Auchan 스트라스부르 빵 코너', forWhom: '선물', day: 'Day 7' },
      { id: 's11', text: '본마망 봉지형 마들렌 (사과·라즈베리)', where: 'Auchan 스트라스부르', forWhom: '선물', day: 'Day 7' },
      { id: 's12', text: '본마망 한정 맛 잼', where: 'Auchan 스트라스부르', forWhom: '선물', day: 'Day 7' },
      { id: 's13', text: 'LU 쁘띠 에콜리에 (다크·헤이즐넛)', where: '프랑스 대형 마트', forWhom: '선물', day: 'Day 5–7' },
      { id: 's14', text: 'LU 르 베리타블 쁘띠 뵈르 버터 비스킷', where: '프랑스 대형 마트', forWhom: '선물', day: 'Day 5–7' },
      { id: 's15', text: '가보트(Gavottes) 크레페 과자', where: '프랑스 대형 마트 (틴케이스 or 종이팩)', forWhom: '선물', day: 'Day 5–7' },
      { id: 's16', text: '쿠스미 티 — BB Detox, Prince Vladimir', where: '대형 마트 (틴케이스)', forWhom: '나/선물', day: 'Day 5–7' },
      { id: 's17', text: '엘레팡 허브티 — Nuit Tranquille 숙면차', where: '프랑스 대형 마트', forWhom: '나', day: 'Day 5–7' },
      { id: 's18', text: '르 쁘띠 마르세이에 과일향 바디워시', where: '프랑스 대형 마트', forWhom: '선물', day: 'Day 5–7' },
    ]
  },
  {
    section: '💊 프랑스 약국 (Pharmacie)',
    items: [
      { id: 's19', text: '눅스(Nuxe) 미니 세트 — 립밤·핸드크림·미스트', where: '파리 약국 (초록 십자가 간판)', forWhom: '선물', day: 'Day 2–4' },
      { id: 's20', text: '꼬달리(Caudalie) 미니 세트', where: '파리 약국 or 시티파르마', forWhom: '선물', day: 'Day 2–4' },
    ]
  },
  {
    section: '🇩🇪 독일 DM 드럭스토어 (Day 7 켈)',
    items: [
      { id: 's21', text: '발레아(Balea) 고농축 앰플 — 파란색(수분)·노란색(Q10)', where: 'DM 독일 켈', forWhom: '나/선물', day: 'Day 7' },
      { id: 's22', text: '카밀(Kamill) 핸드크림 — 클래식·미니 묶음', where: 'DM 독일 켈', forWhom: '선물', day: 'Day 7' },
      { id: 's23', text: '허바신(Herbacin) 승무원 핸드크림 틴케이스', where: 'DM 독일 켈', forWhom: '선물', day: 'Day 7' },
      { id: 's24', text: '디아더마(Diaderma) 당근 오일', where: 'DM 독일 켈', forWhom: '나', day: 'Day 7' },
      { id: 's25', text: 'dm 여행용 미니 세트 (샴푸·바디워시·크림)', where: 'DM 독일 켈', forWhom: '나/선물', day: 'Day 7' },
      { id: 's26', text: '아조나(Ajona) 고농축 치약 미니 (빨간색)', where: 'DM 독일 켈', forWhom: '나/선물', day: 'Day 7' },
      { id: 's27', text: '엘멕스(Elmex) 아침용/밤용 치약', where: 'DM 독일 켈', forWhom: '나/선물', day: 'Day 7' },
      { id: 's28', text: 'dm 기능성 기침·기관지 차 (Husten- und Bronchialtee)', where: 'DM 독일 켈', forWhom: '나', day: 'Day 7' },
      { id: 's29', text: 'dm 숙면 차 (Schlaf- und Nerventee)', where: 'DM 독일 켈', forWhom: '나', day: 'Day 7' },
      { id: 's30', text: '발레아 발포 비타민 (주황·파랑)', where: 'DM 독일 켈', forWhom: '나/선물', day: 'Day 7' },
    ]
  },
  {
    section: '🇩🇪 독일 대형 마트 (Day 7 켈)',
    items: [
      { id: 's31', text: '티카네(Teekanne) 스페니쉬 오렌지 과일차', where: '독일 마트 (Edeka/Rewe/Auchan 켈)', forWhom: '나/선물', day: 'Day 7' },
      { id: 's32', text: '티카네 크리스마스 티·시즌 과일차', where: '독일 마트 켈', forWhom: '선물', day: 'Day 7' },
      { id: 's33', text: '메스머(Messmer) 가성비 티', where: '독일 마트 켈', forWhom: '선물', day: 'Day 7' },
      { id: 's34', text: '하리보(Haribo) 한국에 없는 맛 — 박스 단위', where: '독일 마트 켈', forWhom: '선물', day: 'Day 7' },
      { id: 's35', text: '리터 스포트 시즌 한정판 초콜릿', where: '독일 마트 켈', forWhom: '선물', day: 'Day 7' },
      { id: 's36', text: '킨더 해피 히포 (Happy Hippo)', where: '독일 마트 켈', forWhom: '선물', day: 'Day 7' },
      { id: 's37', text: '크노퍼스(Knoppers) 악마의 웨하스', where: '독일 마트 켈', forWhom: '선물', day: 'Day 7' },
      { id: 's38', text: '독일 짭짤이 프레첼 스낵류', where: '독일 마트 켈', forWhom: '선물', day: 'Day 7' },
    ]
  },
  {
    section: '💌 추억 & 소장품',
    items: [
      { id: 's39', text: '파리 감성 일러스트 엽서', where: '마레 지구 편집숍 or 센강변 부키니스트', forWhom: '나', day: 'Day 2–4' },
      { id: 's40', text: '파리 메트로 노선도 컨셉 굿즈 (자석·엽서)', where: '마레 지구 기념품 숍', forWhom: '나/선물', day: 'Day 2–4' },
      { id: 's41', text: '에펠탑 마그넷', where: '파리 관광지 기념품점', forWhom: '선물', day: 'Day 2–4' },
      { id: 's42', text: '알자스 전통 문양 기념품', where: '콜마르·스트라스부르 기념품 숍', forWhom: '선물', day: 'Day 5–7' },
    ]
  }
];

window.CHECKLIST_DATA = {
  docs: [
    { id: 'd1', text: '여권 유효기간 확인 (6개월 이상)', note: '' },
    { id: 'd2', text: '항공권 출력 / 모바일 저장', note: 'OZ0501, OZ0502' },
    { id: 'd3', text: '기차 티켓 출력 / 저장', note: 'OUIGO 7691, TGV 5470' },
    { id: 'd4', text: '숙소 예약 확인서 출력', note: '디스트릭트 레퓌블리크 / 시티 레지던스' },
    { id: 'd5', text: '여행자 보험 가입 확인', note: '' }
  ],
  pack: [
    { id: 'p1', text: '여권 + 복사본', note: '' },
    { id: 'p2', text: '유로 현금', note: '출국 전 환전' },
    { id: 'p3', text: '신용카드 (해외 결제용)', note: '' },
    { id: 'p4', text: '카메라 + 충전기', note: '' },
    { id: 'p5', text: '유럽 여행용 어댑터', note: 'C타입 플러그' },
    { id: 'p6', text: '상비약 (소화제, 두통약 등)', note: '' },
    { id: 'p7', text: '편한 운동화', note: '매일 10km+ 도보 예정' },
    { id: 'p8', text: '우산 / 경량 레인재킷', note: '3월은 비 올 수 있음' },
    { id: 'p9', text: '보조배터리', note: '지도 앱 많이 써야 함' },
    { id: 'p10', text: '목베개', note: '비행 12시간+' }
  ]
};


// === Language helper data (FR + Korean pronunciation) ===
window.LANGUAGE_DATA = {
  "version": "2026-03-01",
  "lang": "fr",
  "notes": "각 장소(카페/레스토랑/호텔/기차)에서 바로 써먹는 실전 문장 모음. fr=프랑스어, pron=한글발음(대략), ko=한국어 뜻.",
  "categories": [
    {
      "id": "cafe",
      "label": "카페 주문",
      "venues": [
        {
          "id": "carette_place_des_vosges",
          "name": "Carette (Place des Vosges)",
          "maps_query": "Carette Place des Vosges",
          "lines": [
            {
              "fr": "Bonjour ! Je voudrais un Petit Déjeuner Carette, s’il vous plaît.",
              "pron": "봉쥬흐! 즈 부드헤 앙 쁘띠 데쥬네 까레뜨, 씰 부 쁠레.",
              "ko": "안녕하세요! 까레뜨 조식 세트 하나 주세요."
            },
            {
              "fr": "Pour la boisson chaude, je voudrais le Chocolat Carette avec de la crème Chantilly.",
              "pron": "뿌흐 라 부아쏭 쇼드, 즈 부드헤 르 쇼꼴라 까레뜨 아벡 드 라 크헴 샹티이.",
              "ko": "뜨거운 음료는 샹티이 크림 올린 쇼콜라 까레뜨로 할게요."
            },
            {
              "fr": "Est-ce que je peux remplacer le croissant par un pain au chocolat ?",
              "pron": "에스끄 즈 뿌 헤-쁠라쎄 르 크후아쌍 빠흐 앙 뺑 오 쇼꼴라?",
              "ko": "크루아상을 뺑 오 쇼콜라로 바꿀 수 있을까요?"
            },
            {
              "fr": "Et je voudrais aussi ajouter un pain au chocolat et un chausson aux pommes.",
              "pron": "에 즈 부드헤 오씨 아주떼 앙 뺑 오 쇼꼴라 에 앙 쇼쏭 오 뽐므.",
              "ko": "그리고 뺑 오 쇼콜라 하나랑 쇼송 오 뽐므 하나 추가로 부탁드려요."
            },
            {
              "fr": "Sur place, s’il vous plaît.",
              "pron": "쒸흐 쁠라쓰, 씰 부 쁠레.",
              "ko": "매장에서 먹을게요."
            },
            {
              "fr": "À emporter, s’il vous plaît.",
              "pron": "아 앙뽀흐떼, 씰 부 쁠레.",
              "ko": "테이크아웃 할게요."
            },
            {
              "fr": "Je peux avoir un verre d’eau, s’il vous plaît ?",
              "pron": "즈 뿌 아부와흐 앙 베흐 도, 씰 부 쁠레?",
              "ko": "물 한 잔 받을 수 있을까요?"
            },
            {
              "fr": "L’addition, s’il vous plaît.",
              "pron": "라디씨옹, 씰 부 쁠레.",
              "ko": "계산서 주세요."
            },
            {
              "fr": "Je peux payer par carte ?",
              "pron": "즈 뿌 뻬예 빠흐 까흐뜨?",
              "ko": "카드로 결제할 수 있나요?"
            },
            {
              "fr": "Merci !",
              "pron": "메흐씨!",
              "ko": "감사합니다!"
            }
          ]
        },
        {
          "id": "breizh_cafe_montorgueil",
          "name": "Breizh Café Montorgueil",
          "maps_query": "Breizh Café Montorgueil",
          "lines": [
            {
              "fr": "Bonjour, j’ai une réservation à 20 heures, au nom de (Nom).",
              "pron": "봉쥬흐, 제 윈 헤제흐바씨옹 아 벵떼흐, 오 놈 드 (이름).",
              "ko": "안녕하세요, (이름)으로 20시에 예약했어요."
            },
            {
              "fr": "Nous sommes deux.",
              "pron": "누 썸 두.",
              "ko": "두 명이에요."
            },
            {
              "fr": "Je voudrais une galette complète, s’il vous plaît.",
              "pron": "즈 부드헤 윈 갤레뜨 꽁쁠레뜨, 씰 부 쁠레.",
              "ko": "갈레뜨 컴플레트 하나 주세요."
            },
            {
              "fr": "Et une crêpe au beurre-sucre, s’il vous plaît.",
              "pron": "에 윈 크헵 오 버흐-쓔끄흐, 씰 부 쁠레.",
              "ko": "버터-설탕 크레페도 하나 주세요."
            },
            {
              "fr": "Un bol de cidre, s’il vous plaît.",
              "pron": "앙 볼 드 씨드흐, 씰 부 쁠레.",
              "ko": "사이더 한 볼(그릇) 주세요."
            },
            {
              "fr": "Sans noix, s’il vous plaît. (allergie)",
              "pron": "쌍 누아, 씰 부 쁠레. (알레흐지)",
              "ko": "견과류 빼주세요(알레르기)."
            },
            {
              "fr": "Est-ce que c’est possible de partager ?",
              "pron": "에스끄 쎄 뽀씨블 드 빠흐따줴?",
              "ko": "나눠 먹어도 되나요?"
            },
            {
              "fr": "L’addition séparée, s’il vous plaît. (si besoin)",
              "pron": "라디씨옹 쎄빠헤, 씰 부 쁠레. (씨 브쑤앙)",
              "ko": "각자 계산 가능할까요?(필요 시)"
            },
            {
              "fr": "Merci, c’était délicieux.",
              "pron": "메흐씨, 쎄떼 델리씨외.",
              "ko": "감사합니다, 정말 맛있었어요."
            }
          ]
        }
      ]
    },
    {
      "id": "restaurant",
      "label": "레스토랑 주문",
      "venues": [
        {
          "id": "general_restaurant",
          "name": "레스토랑 공통 (어디서나)",
          "maps_query": "",
          "lines": [
            {
              "fr": "Bonjour, une table pour deux, s’il vous plaît.",
              "pron": "봉쥬흐, 윈 따블 뿌흐 두, 씰 부 쁠레.",
              "ko": "안녕하세요, 2명 자리 부탁드려요."
            },
            {
              "fr": "J’ai une réservation au nom de (Nom).",
              "pron": "제 윈 헤제흐바씨옹 오 놈 드 (이름).",
              "ko": "(이름)으로 예약했어요."
            },
            {
              "fr": "Est-ce que vous avez une table disponible ?",
              "pron": "에스끄 부 자베 윈 따블 디스뽀니블?",
              "ko": "자리 남아 있나요?"
            },
            {
              "fr": "Qu’est-ce que vous recommandez ?",
              "pron": "께스끄 부 흐꼬망데?",
              "ko": "추천 메뉴가 뭐예요?"
            },
            {
              "fr": "Je voudrais (plat), s’il vous plaît.",
              "pron": "즈 부드헤 (플라), 씰 부 쁠레.",
              "ko": "(요리)로 주세요."
            },
            {
              "fr": "Sans (ingrédient), s’il vous plaît.",
              "pron": "쌍 (앵그헤디앙), 씰 부 쁠레.",
              "ko": "(재료) 빼주세요."
            },
            {
              "fr": "Une carafe d’eau, s’il vous plaît.",
              "pron": "윈 까하프 도, 씰 부 쁠레.",
              "ko": "수돗물(카라프) 부탁드려요."
            },
            {
              "fr": "Un verre de vin rouge / blanc, s’il vous plaît.",
              "pron": "앙 베흐 드 방 후쥬 / 블랑, 씰 부 쁠레.",
              "ko": "레드/화이트 와인 한 잔 주세요."
            },
            {
              "fr": "C’était parfait, merci.",
              "pron": "쎄떼 빠흐페, 메흐씨.",
              "ko": "완벽했어요, 감사합니다."
            },
            {
              "fr": "L’addition, s’il vous plaît.",
              "pron": "라디씨옹, 씰 부 쁠레.",
              "ko": "계산서 주세요."
            }
          ]
        },
        {
          "id": "winstub_alsace",
          "name": "알자스 전통 레스토랑(윈스툽)용",
          "maps_query": "winstub Strasbourg",
          "lines": [
            {
              "fr": "Je voudrais une tarte à l’oignon, s’il vous plaît.",
              "pron": "즈 부드헤 윈 따흐뜨 아 로뇽, 씰 부 쁠레.",
              "ko": "양파 타르트 하나 주세요."
            },
            {
              "fr": "Et un jarret de porc, s’il vous plaît.",
              "pron": "에 앙 자헤 드 뽀흐, 씰 부 쁠레.",
              "ko": "돼지 족발(자레) 하나 주세요."
            },
            {
              "fr": "Une choucroute, s’il vous plaît.",
              "pron": "윈 슈크후뜨, 씰 부 쁠레.",
              "ko": "슈쿠르트 하나 주세요."
            },
            {
              "fr": "Je peux avoir de la moutarde, s’il vous plaît ?",
              "pron": "즈 뿌 아부와흐 드 라 무따흐드, 씰 부 쁠레?",
              "ko": "머스타드 좀 주실 수 있나요?"
            }
          ]
        }
      ]
    },
    {
      "id": "hotel",
      "label": "호텔 체크인/체크아웃",
      "venues": [
        {
          "id": "general_hotel",
          "name": "호텔 공통 (어디서나)",
          "maps_query": "",
          "lines": [
            {
              "fr": "Bonjour, j’ai une réservation au nom de (Nom).",
              "pron": "봉쥬흐, 제 윈 헤제흐바씨옹 오 놈 드 (이름).",
              "ko": "안녕하세요, (이름)으로 예약했어요."
            },
            {
              "fr": "Je voudrais faire le check-in, s’il vous plaît.",
              "pron": "즈 부드헤 페흐 르 췌크-인, 씰 부 쁠레.",
              "ko": "체크인하고 싶어요."
            },
            {
              "fr": "Voici mon passeport.",
              "pron": "브와씨 몽 빠스뽀흐.",
              "ko": "여권 여기 있습니다."
            },
            {
              "fr": "À quelle heure est le petit-déjeuner ?",
              "pron": "아 껠 으흐 에 르 쁘띠-데쥬네?",
              "ko": "조식은 몇 시에 하나요?"
            },
            {
              "fr": "Le Wi‑Fi : quel est le mot de passe ?",
              "pron": "르 와이-파이: 껠 에 르 모 드 빠스?",
              "ko": "와이파이 비밀번호가 뭐예요?"
            },
            {
              "fr": "Est-ce qu’on peut laisser les bagages avant/après ?",
              "pron": "에스끄 꽁 뿌 레쎄 레 바가쥬 아방/아프헤?",
              "ko": "체크인 전/후에 짐 맡길 수 있나요?"
            },
            {
              "fr": "Je voudrais faire le check-out, s’il vous plaît.",
              "pron": "즈 부드헤 페흐 르 췌크-아웃, 씰 부 쁠레.",
              "ko": "체크아웃할게요."
            },
            {
              "fr": "Est-ce possible de partir un peu plus tard ? (late check-out)",
              "pron": "에스 뽀씨블 드 빠흐띠 앙 쁘 외 따흐? (레이트 췌크-아웃)",
              "ko": "조금 늦게 체크아웃 가능할까요?"
            },
            {
              "fr": "Merci pour votre aide.",
              "pron": "메흐씨 뿌흐 보뜨흐 에드.",
              "ko": "도와주셔서 감사합니다."
            }
          ]
        }
      ]
    },
    {
      "id": "train",
      "label": "기차표/역/탑승",
      "venues": [
        {
          "id": "general_train",
          "name": "기차 공통 (SNCF/TER/TGV)",
          "maps_query": "Gare SNCF",
          "lines": [
            {
              "fr": "Bonjour, je cherche le quai pour le train vers (Destination).",
              "pron": "봉쥬흐, 즈 쉐흐쉬 르 께 뿌흐 르 뜨헝 베흐 (목적지).",
              "ko": "안녕하세요, (목적지)행 열차 플랫폼(승강장)이 어디인가요?"
            },
            {
              "fr": "C’est quel quai, s’il vous plaît ?",
              "pron": "쎄 껠 께, 씰 부 쁠레?",
              "ko": "몇 번 승강장인가요?"
            },
            {
              "fr": "À quelle heure part le train ?",
              "pron": "아 껠 으흐 빠흐 르 뜨헝?",
              "ko": "열차는 몇 시에 출발하나요?"
            },
            {
              "fr": "Est-ce que ce train s’arrête à (Arrêt) ?",
              "pron": "에스끄 쓰 뜨헝 싸헤뜨 아 (정차역)?",
              "ko": "이 열차가 (정차역)에 서나요?"
            },
            {
              "fr": "Je peux m’asseoir ici ?",
              "pron": "즈 뿌 마쎄와흐 이씨?",
              "ko": "여기 앉아도 될까요?"
            },
            {
              "fr": "Je n’ai pas de place réservée. (TER)",
              "pron": "즈 네 빠 드 쁠라스 헤제흐베. (떼에흐)",
              "ko": "좌석 지정이 없어요(TER)."
            },
            {
              "fr": "Excusez‑moi, où est la voiture numéro (X) ?",
              "pron": "엑스퀴제-므와, 우 에 라 부아뛰흐 뉘메호 (엑스)?",
              "ko": "실례합니다, (X)호차는 어디예요?"
            },
            {
              "fr": "Mon billet est sur mon téléphone.",
              "pron": "몽 비예 에 쓔흐 몽 뗄레퐁.",
              "ko": "제 표는 휴대폰에 있어요."
            },
            {
              "fr": "Pardon, je ne parle pas bien français.",
              "pron": "빠흐동, 즈 느 빠흘 빠 비앙 프헝쎄.",
              "ko": "죄송해요, 프랑스어를 잘 못해요."
            },
            {
              "fr": "Merci, bonne journée !",
              "pron": "메흐씨, 본 쥬흐네!",
              "ko": "감사합니다, 좋은 하루 되세요!"
            }
          ]
        }
      ]
    }
  ]
};
