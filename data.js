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
    startHotel: null,
    endHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, kind: 'hotel', maps_url: 'https://maps.app.goo.gl/zn61XhanYKruqqum6' },
    connectHotels: true,
    segments: [[
      { name: '샤를드골 국제공항 (CDG)', lat: 49.0097, lng: 2.5479, icon: '✈️'},
      { name: 'Intermarché EXPRESS', lat: 48.8674, lng: 2.3622, icon: '🛒', maps_url: 'https://maps.app.goo.gl/CWgwZwiaHnCQV42H8' }
    ]]
  },

  2: {
    title: 'Day 2 — 3/8 (일) · 마레 & 시테섬 & 생루이섬',
    startHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel', maps_url: 'https://maps.app.goo.gl/zn61XhanYKruqqum6' },
    endHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel', maps_url: 'https://maps.app.goo.gl/zn61XhanYKruqqum6' },
    connectHotels: true,
    segments: [[
      { name: 'Carette (보쥬 광장 점)', lat: 48.8551, lng: 2.3625, icon: '🥐', maps_url: 'https://maps.app.goo.gl/6pMKuJy1v6mad6W67' , lang_id: 'carette_place_des_vosges'},
      { name: '보쥬 광장', lat: 48.8553, lng: 2.3625, icon: '🌿', maps_url: 'https://maps.app.goo.gl/7LDZLc3fAxComnvJ8' },
      { name: '빅토르 위고 하우스', lat: 48.8554, lng: 2.3619, icon: '🏠', maps_url: 'https://maps.app.goo.gl/KRC8g3DnkpM3Q53u6' },
      { name: '카르나발레 박물관', lat: 48.8576, lng: 2.3622, icon: '🏛', maps_url: 'https://maps.app.goo.gl/QRohyjjuG1Q18n6U6' },
      { name: '피카소 미술관 (외관)', lat: 48.8599, lng: 2.3622, icon: '🎨', maps_url: 'https://maps.app.goo.gl/Suk2GFpkWASJDWt88' },
      { name: "L'As du Fallafel", lat: 48.8571, lng: 2.3561, icon: '🥙', maps_url: 'https://maps.app.goo.gl/iUi5xbPobLxwC7uZ9' , lang_id: 'las_du_fallafel' },
      { name: 'Mariage Frères Marais', lat: 48.8572, lng: 2.3536, icon: '🍵', maps_url: 'https://maps.app.goo.gl/n5vXL5dWWYv3UBPW6' , lang_id: 'mariage_freres'},
      { name: '오텔 드 빌 (시청사)', lat: 48.8566, lng: 2.3522, icon: '🏛', maps_url: 'https://maps.app.goo.gl/yz7zaPuWVHrUW5UGA' },
      { name: '퐁뇌프 / 시테섬', lat: 48.8572, lng: 2.3417, icon: '🌉', maps_url: 'https://maps.app.goo.gl/fQhvYhSZ96MSarzn7' },
      { name: '노트르담 대성당', lat: 48.8530, lng: 2.3499, icon: '⛪', maps_url: 'https://maps.app.goo.gl/LjFBhCaFeZRdprCC6' },
      { name: '퐁생루이 다리', lat: 48.8519, lng: 2.3538, icon: '🌉', maps_url: 'https://maps.app.goo.gl/CCcBXkUQF35NpQXB7' },
      { name: '생루이섬', lat: 48.8515, lng: 2.3561, icon: '🏝', maps_url: 'https://maps.app.goo.gl/NhtRVs6zj1WZyTix7' },
      { name: '루브르 박물관 야경', lat: 48.8606, lng: 2.3376, icon: '🌇', maps_url: 'https://maps.app.goo.gl/L6PMvw6oMAVPDYLP6' },
      { name: 'Breizh Café Montorgueil', lat: 48.8631, lng: 2.3468, icon: '🥞', maps_url: 'https://maps.app.goo.gl/KQFsWWwbjBQokuza9' , lang_id: 'breizh_cafe_montorgueil'}
    ]]
  },

  3: {
    title: 'Day 3 — 3/9 (월) · 루브르 & 오랑주리 & 샹젤리제',
    startHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel', maps_url: 'https://maps.app.goo.gl/zn61XhanYKruqqum6' },
    endHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel', maps_url: 'https://maps.app.goo.gl/zn61XhanYKruqqum6' },
    connectHotels: true,
    segments: [[
      { name: '오텔 드 빌 (시청사)', lat: 48.8566, lng: 2.3522, icon: '📸', maps_url: 'https://maps.app.goo.gl/yz7zaPuWVHrUW5UGA' },
      { name: '루브르 박물관', lat: 48.8606, lng: 2.3376, icon: '🏛', maps_url: 'https://maps.app.goo.gl/L6PMvw6oMAVPDYLP6' },
      { name: '퐁데자르', lat: 48.8583, lng: 2.3373, icon: '🌉', maps_url: 'https://maps.app.goo.gl/1cSVSVYcMBHLBqTb6' },
      { name: 'Palais-Royal', lat: 48.8638, lng: 2.3370, icon: '🌿', maps_url: 'https://maps.app.goo.gl/1wRRwPXgZctMPmc5A' },
      { name: 'Galerie Vivienne', lat: 48.8648, lng: 2.3386, icon: '🛍', maps_url: 'https://maps.app.goo.gl/owyhmEa2mcGhss7n6' },
      { name: 'Bistrot Victoires', lat: 48.8625, lng: 2.3425, icon: '🦆', maps_url: 'https://maps.app.goo.gl/L9WwCf1UFYEryfu57' , lang_id: 'bistrot_victoires'},
      { name: '갤러리 라파예트 오스만', lat: 48.8736, lng: 2.3323, icon: '🛍', maps_url: 'https://maps.app.goo.gl/61PZdT6BYCrYWf8z6' },
      { name: '방돔 광장', lat: 48.8675, lng: 2.3294, icon: '💎', maps_url: 'https://maps.app.goo.gl/xGJsBY3EXpk6xK9J8' },
      { name: '튈르리 정원', lat: 48.8638, lng: 2.3274, icon: '🌿', maps_url: 'https://maps.app.goo.gl/8kWhvJ9Fr5k2wbb79' },
      { name: '오랑주리 미술관', lat: 48.8638, lng: 2.3225, icon: '🎨', maps_url: 'https://maps.app.goo.gl/C2Ecdk6QVuGC6MgB7' },
      { name: '콩코르드 광장', lat: 48.8656, lng: 2.3211, icon: '🏛', maps_url: 'https://maps.app.goo.gl/oJL6tGXHULcqs1mB6' },
      { name: '샹젤리제 거리', lat: 48.8698, lng: 2.3078, icon: '🛍', maps_url: 'https://maps.app.goo.gl/rpM2Vq2SUywPsAMY8' },
      { name: '개선문', lat: 48.8738, lng: 2.2950, icon: '🌄', maps_url: 'https://maps.app.goo.gl/6BqikXp199qWjjgf9' },
      { name: 'Bouillon République', lat: 48.8671, lng: 2.3631, icon: '🐌', maps_url: 'https://maps.app.goo.gl/RsEZ4NyA5QZxSmsU7' , lang_id: 'bouillon_republique'}
    ]]
  },

  4: {
    title: 'Day 4 — 3/10 (화) · 생마르탱 운하 & 에펠탑',
    startHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel', maps_url: 'https://maps.app.goo.gl/zn61XhanYKruqqum6' },
    endHotel: { name: '디스트릭트 레퓌블리크 (숙소)', lat: 48.8673, lng: 2.3629, icon: '🏨', kind: 'hotel', maps_url: 'https://maps.app.goo.gl/zn61XhanYKruqqum6' },
    connectHotels: true,
    segments: [[
      { name: 'Le Pain des Copains', lat: 48.8684, lng: 2.3594, icon: '🥐', maps_url: 'https://maps.app.goo.gl/B2TddHQuT2KbUm8x6' , lang_id: 'boulangerie_general'},
      { name: '생마르탱 운하', lat: 48.8698, lng: 2.3637, icon: '🛶', maps_url: 'https://maps.app.goo.gl/ybpjb3FXmnCsdPAF6' },
      { name: '유토피아 베이커리', lat: 48.8625, lng: 2.3520, icon: '🥖', maps_url: 'https://maps.app.goo.gl/HdKJ3EthYLNV2Diq9' , lang_id: 'boulangerie_general'},
      { name: 'Square Jules Ferry', lat: 48.8679, lng: 2.3648, icon: '🌳', maps_url: 'https://maps.app.goo.gl/RV35nEu1vh5xW7d16' },
      { name: 'La Poste (160 Rue du Temple)', lat: 48.8618, lng: 2.3548, icon: '💌', maps_url: 'https://maps.app.goo.gl/sur3ob9K4of7aPvWA' , lang_id: 'la_poste'},
      { name: '레퓌블리크 광장', lat: 48.8674, lng: 2.3630, icon: '🗽', maps_url: 'https://maps.app.goo.gl/7juQvb9F7AWqesHP6' },
      { name: '트로카데로 광장', lat: 48.8638, lng: 2.2888, icon: '📸', maps_url: 'https://maps.app.goo.gl/MK7vsLSq4qXaiboS8' },
      { name: '에펠탑', lat: 48.8584, lng: 2.2945, icon: '🗼', maps_url: 'https://maps.app.goo.gl/ssQgrAR2M5XCRFvR7' },
      { name: '마르스 광장', lat: 48.8556, lng: 2.2988, icon: '🌿', maps_url: 'https://maps.app.goo.gl/88MbNNRPStWfZiQ48' },
      { name: 'Rue Cler', lat: 48.8564, lng: 2.3053, icon: '☕', maps_url: 'https://maps.app.goo.gl/X1oV9xeVFUSTEtmJ9' },
      { name: "Rue de l'Université / Rue Saint-Dominique", lat: 48.8591, lng: 2.3008, icon: '🏙' },
      { name: 'Sunflower Café', lat: 48.8550, lng: 2.2978, icon: '☕', maps_url: 'https://maps.app.goo.gl/qGLvH9xShzdxbSaM7' , lang_id: 'cafe_general'},
      { name: '비라켐 다리', lat: 48.8517, lng: 2.2880, icon: '🌉', maps_url: 'https://maps.app.goo.gl/4UEWxj3tbi8kn9Xi6' },
      { name: "L'Atypic", lat: 48.8527, lng: 2.2965, icon: '🥩', maps_url: 'https://maps.app.goo.gl/uaBj9PL2qWF4r8cB9' , lang_id: 'latypic' },
      { name: '바토 파리지앵 선착장', lat: 48.8601, lng: 2.2958, icon: '🚢', maps_url: 'https://maps.app.goo.gl/yxCDpmpt28zLXfRR9' , lang_id: 'bateaux_parisiens'}
    ]]
  },

  5: {
    title: 'Day 5 — 3/11 (수) · 파리 → 스트라스부르',
    startHotel: { name: '디스트릭트 레퓌블리크 (파리 숙소)', lat: 48.8673, lng: 2.3629, kind: 'hotel', maps_url: 'https://maps.app.goo.gl/zn61XhanYKruqqum6' },
    endHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, kind: 'hotel', maps_url: 'https://maps.app.goo.gl/8LqmD3FP6Ep9ZyH98' },
    connectHotels: true,
    focusSegmentIndex: 1,
    segments: [
      [
        { name: '파리 동역 (Gare de l’Est)', lat: 48.8767, lng: 2.3590, icon: '🚄', maps_url: 'https://maps.app.goo.gl/e6dJPXGKBzUbFnPT8' , lang_id: 'general_train'}
      ],
      [
        { name: '스트라스부르 역', lat: 48.5851, lng: 7.7341, icon: '🚄', maps_url: 'https://maps.app.goo.gl/bddfiAsgx5PQD3ba9' },
        { name: 'Winstub Le Zehnerglock', lat: 48.5804, lng: 7.7468, icon: '🍽', maps_url: 'https://maps.app.goo.gl/tsKG6i91WJsgqM1Q9' , lang_id: 'winstub_alsace'},
        { name: '스트라스부르 대성당', lat: 48.5818, lng: 7.7507, icon: '⛩', maps_url: 'https://maps.app.goo.gl/wJAaRakMQhU48mLR9' },
        { name: '구텐베르크 광장', lat: 48.5809, lng: 7.7476, icon: '🏛', maps_url: 'https://maps.app.goo.gl/m2bGn2zdm24G9wbe7' },
        { name: '강변 산책 / 구시가지', lat: 48.5799, lng: 7.7445, icon: '🌊' },
        { name: 'La Fignette', lat: 48.5798, lng: 7.7460, icon: '🔥', maps_url: 'https://maps.app.goo.gl/scasdyVUWjxo9mT39' , lang_id: 'la_fignette'}
      ]
    ]
  },

  6: {
    title: 'Day 6 — 3/12 (목) · 콜마르 당일치기 & 스트라스부르',
    startHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, kind: 'hotel', maps_url: 'https://maps.app.goo.gl/8LqmD3FP6Ep9ZyH98' },
    endHotel: null,
    connectHotels: true,
    focusSegmentIndex: 1,
    segments: [
      [
        { name: '스트라스부르 역', lat: 48.5851, lng: 7.7341, icon: '🚂', maps_url: 'https://maps.app.goo.gl/bddfiAsgx5PQD3ba9' }
      ],
      [
        { name: '콜마르 역', lat: 48.0764, lng: 7.3584, icon: '🚂', maps_url: 'https://maps.app.goo.gl/YK4Qhu6DvrbLRhuh9' },
        { name: '콜마르 구시가지', lat: 48.0785, lng: 7.3580, icon: '🏘' },
        { name: '쁘띠 베니스', lat: 48.0771, lng: 7.3564, icon: '🌊', maps_url: 'https://maps.app.goo.gl/6pv5Yfm9iiodzCRq8' },
        { name: 'WISTUB BRENNER', lat: 48.0782, lng: 7.3568, icon: '🍷', maps_url: 'https://maps.app.goo.gl/7Qjy6YBsjJN3EdNF9' , lang_id: 'wistub_brenner'},
        { name: 'Pâtisserie Gilg', lat: 48.0791, lng: 7.3567, icon: '🍰', maps_url: 'https://maps.app.goo.gl/wEwyyJ1aLppDrB319' , lang_id: 'patisserie_general'},
        { name: 'Maison des Têtes', lat: 48.0806, lng: 7.3579, icon: '🏛', maps_url: 'https://maps.app.goo.gl/t44xon23yMH67rn78' },
        { name: '운터린덴 미술관 (외관)', lat: 48.0806, lng: 7.3562, icon: '🎨', maps_url: 'https://maps.app.goo.gl/7QVhS8rLZSCesjsV6' },
        { name: '콜마르 역', lat: 48.0764, lng: 7.3584, icon: '🚂', maps_url: 'https://maps.app.goo.gl/YK4Qhu6DvrbLRhuh9' }
      ],
      [
        { name: '스트라스부르 역', lat: 48.5851, lng: 7.7341, icon: '🚂', maps_url: 'https://maps.app.goo.gl/bddfiAsgx5PQD3ba9' },
        { name: 'Maison Kammerzell', lat: 48.5819, lng: 7.7507, icon: '🐟', maps_url: 'https://maps.app.goo.gl/EfMdpUQtHNk9tMg2A' , lang_id: 'maison_kammerzell'},
        { name: '쿠베르교 & 보방 댐', lat: 48.5795, lng: 7.7387, icon: '🌉', maps_url: 'https://maps.app.goo.gl/9Jb2SL3jGw783vhh9' },
        { name: '쁘띠 프랑스', lat: 48.5793, lng: 7.7410, icon: '🌙', maps_url: 'https://maps.app.goo.gl/qMyzXNkqKMAY5zZV7' }
      ]
    ]
  },

  7: {
    title: 'Day 7 — 3/13 (금) · 독일 켈 & 스트라스부르 쇼핑',
    startHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, icon: '🏨', kind: 'hotel', maps_url: 'https://maps.app.goo.gl/8LqmD3FP6Ep9ZyH98' },
    endHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, icon: '🏨', kind: 'hotel', maps_url: 'https://maps.app.goo.gl/8LqmD3FP6Ep9ZyH98' },
    connectHotels: true,
    segments: [[
      { name: 'Ancienne Synagogue / Les Halles', lat: 48.5805, lng: 7.7481, icon: '🚋', maps_url: 'https://maps.app.goo.gl/UHs5HMAjjTctNtKi7' },
      { name: 'Port du Rhin', lat: 48.5746, lng: 7.7768, icon: '🚋' },
      { name: '두 히브 가든', lat: 48.5745, lng: 7.8050, icon: '🌿', maps_url: 'https://maps.app.goo.gl/7W2PETNypQtZ8YaL6' },
      { name: 'Passerelle des Deux Rives', lat: 48.5749, lng: 7.7967, icon: '🌉', maps_url: 'https://maps.app.goo.gl/zj6ZvML9YFymEWb29' },
      { name: '라인강변 산책 포인트', lat: 48.5758, lng: 7.8038, icon: '🌊', maps_url: 'https://maps.app.goo.gl/muLquH28S5XriDnx9' },
      { name: 'Café Backhaus Dreher', lat: 48.5793, lng: 7.8102, icon: '🥨', maps_url: 'https://maps.app.goo.gl/SssgYb2RASvds1uc6' , lang_id: 'cafe_general'},
      { name: 'City Center Kehl (DM)', lat: 48.5734, lng: 7.8156, icon: '🛒', maps_url: 'https://maps.app.goo.gl/oKUh25L7y6c272d58' },
      { name: 'Place des Halles / Auchan', lat: 48.5855, lng: 7.7418, icon: '🛍', maps_url: 'https://maps.app.goo.gl/iFs3UhVuehbbXzjf8' },
      { name: 'Le Tire-Bouchon', lat: 48.5814, lng: 7.7492, icon: '🍷', maps_url: 'https://maps.app.goo.gl/aJnQMWgfH3gVnqAV6' , lang_id: 'le_tire_bouchon'}
    ]]
  },

  8: {
    title: 'Day 8 — 3/14 (토) · 스트라스부르 → CDG 출국',
    startHotel: { name: '시티 레지던스 스트라스부르 센터', lat: 48.5865, lng: 7.7396, kind: 'hotel', maps_url: 'https://maps.app.goo.gl/8LqmD3FP6Ep9ZyH98' },
    endHotel: null,
    connectHotels: true,
    focusSegmentIndex: 1,
    segments: [
      [
        { name: '스트라스부르 역 (TGV 출발)', lat: 48.5851, lng: 7.7341, icon: '🚄', maps_url: 'https://maps.app.goo.gl/bddfiAsgx5PQD3ba9' , lang_id: 'general_train'}
      ],
      [
        { name: 'Paris CDG Terminal 2 (Gare TGV)', lat: 49.0097, lng: 2.5479, icon: '🚄' },
        { name: 'CDG Terminal 1', lat: 49.0062, lng: 2.5725, icon: '✈️'},
        { name: '맥도날드 (CDG T1)', lat: 49.0065, lng: 2.5732, icon: '🍔' },
        { name: '아시아나 카운터 (T1 Hall 1)', lat: 49.0062, lng: 2.5725, icon: '🛄' },
        { name: 'Bistrot Benoît', lat: 49.0066, lng: 2.5740, icon: '🍽' , lang_id: 'general_restaurant'},
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
    { id: 'c01', text: '여권', note: '사본 1장 + 사진 2장 + 사진파일 저장' },
    { id: 'c02', text: '항공권 E-티켓 인쇄' },
    { id: 'c03', text: '숙소 예약 확인서' },
    { id: 'c04', text: '음식점 예약 확인서' },
    { id: 'c05', text: '여행자 보험 증서' },
    { id: 'c06', text: '카드 (네이버머니)' },
    { id: 'c07', text: '카드 (토스카드)' },
    { id: 'c08', text: '현금', note: '유로 소액 + 비상용 원화' },
    { id: 'c09', text: '펜 1개', note: '입국서류 대비' }
  ],
  bag: [
    { id: 'c10', text: '캐리어 네임택', note: '겉 1 + 안쪽 1' },
    { id: 'c11', text: '캐리어 잠금장치' },
    { id: 'c12', text: '소형 크로스백 (지퍼형)', note: '앞으로 메기 좋은 것 / 도난방지 스트랩' },
    { id: 'c13', text: '까만가방 2개', note: '장보기 + 기념품용' },
    { id: 'c14', text: '지퍼백 몇 장' }
  ],
  eyes: [
    { id: 'c15', text: '안경' },
    { id: 'c16', text: '일회용 렌즈', note: '여유분 +2~3개' },
    { id: 'c17', text: '인공눈물' },
    { id: 'c18', text: '안경 닦이 천 + 안경통' }
  ],
  skin: [
    { id: 'c19', text: '칫솔 / 치약' },
    { id: 'c20', text: '폼클렌저' },
    { id: 'c21', text: '스킨 / 로션' },
    { id: 'c22', text: '선크림' },
    { id: 'c23', text: '립밤' },
    { id: 'c24', text: '작은 수건' },
    { id: 'c25', text: '마스크팩 1~2장' },
    { id: 'c26', text: '고무줄 / 헤어핀' },
    { id: 'c27', text: '데오드란트' },
    { id: 'c28', text: '샴푸 / 린스 / 바디워시 미니', note: '비상용 1세트' },
    { id: 'c29', text: '클렌징 리무버 + 화장솜' }
  ],
  meds: [
    { id: 'c30', text: '진통제 (일반용)' },
    { id: 'c31', text: '감기약' },
    { id: 'c32', text: '소화제' },
    { id: 'c33', text: '지사제' },
    { id: 'c34', text: '밴드' },
    { id: 'c35', text: '물집 방지 패드', note: '컴피드류' },
    { id: 'c36', text: '발바닥 보호 패치/테이프' }
  ],
  clothes: [
    { id: 'c37', text: '상의 7벌' },
    { id: 'c38', text: '하의 2벌' },
    { id: 'c39', text: '잠옷 1벌' },
    { id: 'c40', text: '속옷 7세트' },
    { id: 'c41', text: '양말 7켤레' },
    { id: 'c42', text: '얇은 가디건 / 자켓' },
    { id: 'c43', text: '히트텍' },
    { id: 'c44', text: '머플러' },
    { id: 'c45', text: '바깥 아우터 (코트)' },
    { id: 'c46', text: '편한 운동화 1켤레' },
    { id: 'c47', text: '슬리퍼 (숙소용)' },
    { id: 'c48', text: '작은 우산 2개' }
  ],
  electronics: [
    { id: 'c49', text: '휴대폰' },
    { id: 'c50', text: '충전기' },
    { id: 'c51', text: '멀티어댑터', note: 'EU C/F 타입' },
    { id: 'c52', text: '보조배터리', note: '기내만 가능' },
    { id: 'c53', text: '이어폰' },
    { id: 'c54', text: '충전 케이블 여분 1개' },
    { id: 'c55', text: '4구 멀티탭' }
  ],
  etc: [
    { id: 'c56', text: '목베개' },
    { id: 'c57', text: '안대' },
    { id: 'c58', text: '귀마개' },
    { id: 'c59', text: '빨래줄' },
    { id: 'c60', text: '여행용 휴지' },
    { id: 'c61', text: '여행용 물티슈' },
    { id: 'c62', text: '손소독제 (작은 것)' }
  ]
};