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
