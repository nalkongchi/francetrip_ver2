window.SCHEDULE_DATA = {

  1: {
    header: { icon: '✈️', title: '인천공항 → 파리', sub: '출발일 · 긴 여정의 시작' },
    events: [
      { id: 'day1_01', type: 'transport', time: '04:30–07:30', title: '🚌 시외우등버스 탑승', detail: '아산(온양) → 인천공항(제2터미널)' },
      { id: 'day1_02', type: 'transport', time: '10:05–16:25', title: '✈️ 아시아나 OZ0501', detail: '서울(ICN) 출발 → 파리(CDG) 도착' },
      { id: 'day1_03', lang_id: 'day1_03', type: 'transport', time: '16:25–18:30', title: '🛂 샤를 드 골 공항' },
      { id: 'day1_04', lang_id: 'day1_04', type: 'transport', time: '18:30–19:30', title: '🚕 공항 → 숙소 이동', detail: '우버 or 볼트 이용' },
      { id: 'day1_05', lang_id: 'day1_05', type: 'hotel',    time: '19:30–20:00', title: '🏨 숙소(디스트릭트 레퓌블리크) 체크인', maps_url: 'https://maps.app.goo.gl/zn61XhanYKruqqum6' },
      { id: 'day1_06', lang_id: 'day1_06', type: 'hotel',    time: '20:00',       title: '🛏 숙소 휴식', note: 'Intermarché EXPRESS 슈퍼 · 배고프면 저녁 사먹기' }
    ]
  },

  2: {
    header: { icon: '🏛', title: '파리 — 마레지구 & 시테섬 & 생루이섬', sub: '보쥬 광장 · 노트르담 · 루브르 야경' },
    events: [
      { id: 'day2_01', lang_id: 'day2_01', type: 'transport', time: '08:00–08:30', title: '🚇 보쥬 광장 이동', note: '✅ 탑승 루트: 숙소 앞 République(레퓌블리크) 역 진입 → 지하철 8호선(Créteil / Pointe du Lac 방향) 탑승 → Chemin Vert(슈망 베르) 역 하차 → Place des Vosges(보쥬 광장) 방향 출구 이용 (도보 약 5분)' },
      { id: 'day2_02', lang_id: 'day2_02', type: 'food',       time: '08:30–09:40', title: '🥐 아침: Carette (보쥬 광장 점)', detail: '크루아상, 뺑 오 쇼콜라, 쇼송 오 뽐므, 핫초코, 오렌지 주스', maps_url: 'https://maps.app.goo.gl/6pMKuJy1v6mad6W67', foldNote: '아침 세트(Petit Déjeuner CARETTE): 21.0€<br>세트 구성: 핫초코 + 오렌지 주스 + 크루아상 + 식빵 토스트 1조각과 유기농 잼<br>쇼콜라 까레뜨로 업그레이드(샹티이 추가), 뺑 오 쇼콜라 및 쇼송 오 뽐므 단품 추가' },
      { id: 'day2_03', type: 'sightseeing', time: '09:40–10:20', title: '🌿 보쥬 광장 (Place des Vosges)', detail: '회랑 아치 아래 한 바퀴 → 중앙 잔디광장 산책 → 분수/벤치에서 5~10분 쉬기', maps_url: 'https://maps.app.goo.gl/7LDZLc3fAxComnvJ8' },
      { id: 'day2_04', lang_id: 'day2_04', type: 'sightseeing', time: '10:20–11:00', title: '🏠 빅토르 위고 하우스', detail: '외관 구경, 시간 되면 내부 관람(무료)', maps_url: 'https://maps.app.goo.gl/KRC8g3DnkpM3Q53u6' },
      { id: 'day2_05', type: 'sightseeing', time: '11:00–11:30', title: '🏛 카르나발레 박물관', detail: '외관 구경', maps_url: 'https://maps.app.goo.gl/QRohyjjuG1Q18n6U6' },
      { id: 'day2_06', type: 'sightseeing', time: '11:30–12:00', title: '🎨 피카소 미술관', detail: '외관 구경', maps_url: 'https://maps.app.goo.gl/Suk2GFpkWASJDWt88' },
      { id: 'day2_07', lang_id: 'day2_07', type: 'food',        time: '12:00–13:00', title: "🥙 점심: L'As du Fallafel", tags: [{cls:'tag-openrun',text:'🚶오픈런'}], detail: 'Falafel sandwich, Shawarma pita', maps_url: 'https://maps.app.goo.gl/iUi5xbPobLxwC7uZ9' },
      { id: 'day2_08', lang_id: 'day2_08', type: 'food',        time: '13:00–15:00', title: '🍵 카페/티타임: Mariage Frères Marais', detail: "애프터눈 티 세트 'SWEET DREAM' : JOYFUL HORSE 선택, UME CHA 2026 단품 추가", maps_url: 'https://maps.app.goo.gl/n5vXL5dWWYv3UBPW6', foldNote: '마라톤 코스가 Rue de Rivoli(리볼리 거리) 및 시청사 인근을 통과하므로, 오후 2시 이전에는 남쪽(센강 방향)으로 무리하게 이동하지 말 것.' },
      { id: 'day2_09', type: 'sightseeing', time: '15:00–15:30', title: '🏛 오텔 드 빌(시청사) 광장', detail: '외관 촬영', maps_url: 'https://maps.app.goo.gl/yz7zaPuWVHrUW5UGA', foldNote: '마라톤 현장 통제 상황 확인. 통제 중이면 제끼기.' },
      { id: 'day2_10', type: 'sightseeing', time: '15:30–16:30', title: '🌉 퐁뇌프 다리, 시테섬', detail: '센강변 따라 산책하며 다리 건너기<br>Sainte-Chapelle, 법원, 꽃시장, 프랑스 전국도로 기준점 등 시테섬 산책', maps_url: 'https://maps.app.goo.gl/fQhvYhSZ96MSarzn7' },
      { id: 'day2_11', lang_id: 'day2_11', type: 'sightseeing', time: '16:30–17:30', title: '⛪ 노트르담 대성당', detail: '정면 파사드 → 측면/후면으로 한 바퀴 → 내부 입장 및 관람 → 광장 포토스팟', maps_url: 'https://maps.app.goo.gl/LjFBhCaFeZRdprCC6' },
      { id: 'day2_12', type: 'sightseeing', time: '17:30–18:00', title: '🌉 퐁생루이 다리', detail: '다리 중앙에서 센강/노을 사진', maps_url: 'https://maps.app.goo.gl/CCcBXkUQF35NpQXB7' },
      { id: 'day2_13', type: 'sightseeing', time: '18:00–18:30', title: '🏝 생루이섬', detail: '베르티용 아이스크림, 생루이 앙 리섬 성당', maps_url: 'https://maps.app.goo.gl/NhtRVs6zj1WZyTix7' },
      { id: 'day2_14', lang_id: 'day2_14', type: 'transport',   time: '18:30–18:50', title: '🚇 지하철로 루브르 이동', note: '✅ 탑승 루트: 7호선 Pont Marie 역 → Palais Royal - Musée du Louvre 역 하차' },
      { id: 'day2_15', type: 'sightseeing', time: '18:50–19:40', title: '🌃 루브르 박물관 일몰 & 야경 감상', tags: [{cls:'tag-sunset', text:'🌄 18:45'}], maps_url: 'https://maps.app.goo.gl/L6PMvw6oMAVPDYLP6' },
      { id: 'day2_16', type: 'transport',   time: '19:40–20:00', title: '🚶 루브르 → 식당 이동', detail: '도보 약 15분', note: '루브르에서 레알(Les Halles) 지구를 지나 몽토르고이유 거리(Rue Montorgueil) 쪽' },
      { id: 'day2_17', lang_id: 'day2_17', type: 'food',        time: '20:00–21:30', title: '🥞 저녁: Breizh Café Montorgueil', tags: [{cls:'tag-confirm', text:'⏰ 20:00'}], detail: 'La Complète 갈레트(햄, 치즈, 계란), 특선 갈레트(Galette de spécialité), Cidre Brut(시드르 브뤼)', maps_url: 'https://maps.app.goo.gl/KQFsWWwbjBQokuza9', foldNote: '메인: La Complète 갈레트(햄, 치즈, 계란) 1개 + 해산물이나 버섯이 들어간 특선 갈레트(Galette de spécialité) 1개<br>주류: 드라이한 사과주 Cidre Brut(시드르 브뤼)를 피셰(단지)로 주문해서 나눠 먹기<br>디저트: 식후에 달콤한 Caramel au beurre salé (수제 솔티드 카라멜 크레페) 하나를 추가(선택)' },
      { id: 'day2_18', lang_id: 'day2_18', type: 'transport',   time: '21:30–22:00', title: '🚇 식당 → 숙소 복귀', note: '✅ 지하철 3호선 Sentier → République (환승 없음) / 하차 후: Sortie 5 (Boulevard de Magenta) 출구' },
      { id: 'day2_19', type: 'hotel',       time: '22:00',       title: '🛏 숙소 휴식' }
    ]
  },

  3: {
    header: { icon: '🎨', title: '파리 — 루브르 & 오랑주리 & 샹젤리제', sub: '시청사 보완 · 라파예트 · 개선문 노을' },
    events: [
      { id: 'day3_01', lang_id: 'day3_01', type: 'transport',   time: '08:00–08:25', title: '🚇 오텔 드 빌(시청사) 이동', note: '✅ 탑승 루트: 숙소 앞 République(레퓌블리크) 역 진입 → 11호선(Châtelet 방향) 탑승 → Hôtel de Ville 역 하차' },
      { id: 'day3_02', type: 'sightseeing', time: '08:25–08:40', title: '📸 시청사 광장 사진', detail: 'Day 2에 시청사 통제없이 방문했다면 생략', maps_url: 'https://maps.app.goo.gl/yz7zaPuWVHrUW5UGA' },
      { id: 'day3_03', type: 'transport',   time: '08:40–09:00', title: '🚶 도보 이동', detail: '리볼리 직진' },
      { id: 'day3_04', type: 'sightseeing', time: '09:00–10:00', title: '🏛 루브르 박물관', detail: '외관 감상, 피라미드 → 카루젤 → 측면', maps_url: 'https://maps.app.goo.gl/L6PMvw6oMAVPDYLP6' },
      { id: 'day3_05', type: 'sightseeing', time: '10:00–10:20', title: '🌉 퐁데자르 다리', detail: '루브르 방향/센강 방향 사진', maps_url: 'https://maps.app.goo.gl/1cSVSVYcMBHLBqTb6' },
      { id: 'day3_06', type: 'sightseeing', time: '10:20–11:00', title: '🌿 Palais-Royal', detail: '기둥 사진 + 정원 산책', maps_url: 'https://maps.app.goo.gl/1wRRwPXgZctMPmc5A' },
      { id: 'day3_07', lang_id: 'day3_07', type: 'sightseeing', time: '11:00–11:30', title: '🛍 Galerie Vivienne', detail: '아케이드 산책 + 바닥 모자이크 촬영<br>엽서 구매', maps_url: 'https://maps.app.goo.gl/owyhmEa2mcGhss7n6' },
      { id: 'day3_08', lang_id: 'day3_08', type: 'food',        time: '11:30–13:00', title: '🦆 점심: Bistrot Victoires', tags: [{cls:'tag-openrun',text:'🚶오픈런'}], detail: 'Confit de canard 오리 콩피', maps_url: 'https://maps.app.goo.gl/L9WwCf1UFYEryfu57' },
      { id: 'day3_09', type: 'transport',   time: '13:00–13:20', title: '🚶 라파예트 백화점 이동', detail: '도보' },
      { id: 'day3_10', lang_id: 'day3_10', type: 'sightseeing', time: '13:20–14:40', title: '🛍 갤러리 라파예트 백화점(오스만)', detail: '8층 옥상 테라스 에펠탑 뷰 감상 → 본관 1층 라뒤레 마카롱 → 고메관 0층 피에르 에르메 이스파한 테이크아웃', maps_url: 'https://maps.app.goo.gl/61PZdT6BYCrYWf8z6' },
      { id: 'day3_11', type: 'sightseeing', time: '14:40–15:00', title: '💎 방돔 광장 거쳐 튈르리 정원 이동', detail: '파리에서 가장 럭셔리하고 우아한 내리막길 산책', maps_url: 'https://maps.app.goo.gl/xGJsBY3EXpk6xK9J8' },
      { id: 'day3_12', type: 'sightseeing', time: '15:00–15:20', title: '🌿 튈르리 정원 휴식', detail: '입구 → 중앙 연못 주변 의자 앉기 → 정원 축 따라 짧게 산책', maps_url: 'https://maps.app.goo.gl/8kWhvJ9Fr5k2wbb79' },
      { id: 'day3_13', lang_id: 'day3_13', type: 'sightseeing', time: '15:20–17:00', title: '🎨 오랑주리 미술관', tags: [{cls:'tag-confirm',text:'⏰ 15:30'}], detail: "모네 '수련' 관람", maps_url: 'https://maps.app.goo.gl/C2Ecdk6QVuGC6MgB7' },
      { id: 'day3_14', type: 'sightseeing', time: '17:00–17:30', title: '🏛 콩코르드 광장', detail: '오벨리스크 중심으로 한 바퀴 → 분수/광장 스케일 감상', maps_url: 'https://maps.app.goo.gl/oJL6tGXHULcqs1mB6' },
      { id: 'day3_15', lang_id: 'day3_15', type: 'sightseeing', time: '17:30–18:30', title: '🛍 샹젤리제 거리 걷기', detail: '샹젤리제 거리 구경<br>시간 남으면 Le Café Lacoste Paris 카페 방문', maps_url: 'https://maps.app.goo.gl/rpM2Vq2SUywPsAMY8' },
      { id: 'day3_16', type: 'sightseeing', time: '18:30–19:00', title: '🏛 개선문 광장', tags: [{cls:'tag-sunset',text:'🌄 18:47'}], detail: '개선문 노을 감상', maps_url: 'https://maps.app.goo.gl/6BqikXp199qWjjgf9' },
      { id: 'day3_17', lang_id: 'day3_17', type: 'transport',   time: '19:00–19:30', title: '🚇 레퓌블리크 이동', note: '✅ 지하철 탑승 루트: Charles de Gaulle - Étoile 역 → 1호선(Château de Vincennes 방향) → Châtelet 하차 후 11호선(Mairie des Lilas 방향) 환승 → République 하차 (약 20~25분)' },
      { id: 'day3_18', lang_id: 'day3_18', type: 'food',        time: '19:30–21:00', title: '🐌 저녁: Bouillon République', tags: [{cls:'tag-confirm',text:'⏰ 19:30'}], detail: "Escargots (6개), Soupe à l'oignon, Bœuf bourguignon", maps_url: 'https://maps.app.goo.gl/RsEZ4NyA5QZxSmsU7', foldNote: "전채(Entrée): Escargots 6개 + Soupe à l'oignon 쉐어<br>메인(Plat): Bœuf bourguignon 쉐어<br>주류: 피노 누아(Pinot Noir) 계열의 레드 와인 하프 보틀" },
      { id: 'day3_19', type: 'hotel',       time: '21:00',       title: '🛏 숙소 휴식' }
    ]
  },

  4: {
    header: { icon: '🗼', title: '파리 — 생마르탱 운하 & 에펠탑', sub: '운하 산책 · 트로카데로 · 비라켐 · 유람선' },
    events: [
      { id: 'day4_01', lang_id: 'day4_01', type: 'food',        time: '07:30–08:30', title: '🥐 아침: Le Pain des Copains', detail: '산딸기 크루아상, 피스타치오 크루아상, 플랑', maps_url: 'https://maps.app.goo.gl/B2TddHQuT2KbUm8x6' },
      { id: 'day4_02', type: 'sightseeing', time: '08:30–10:30', title: '🛶 생마르탱 운하 산책', detail: 'Écluse des Récollets(Hôtel du Nord 주변) → Passerelle des Douanes<br>운하 따라 걷기 → 다리/수문 포인트에서 사진', maps_url: 'https://maps.app.goo.gl/ybpjb3FXmnCsdPAF6' },
      { id: 'day4_03', lang_id: 'day4_03', type: 'food',        time: '10:30–11:00', title: '🥖 점심: 유토피아 베이커리', detail: '흑임자 éclair, baguette, 카페 알롱제(Café allongé)', maps_url: 'https://maps.app.goo.gl/HdKJ3EthYLNV2Diq9' },
      { id: 'day4_04', type: 'sightseeing', time: '11:00–11:30', title: '🌳 Square Jules Ferry (쥘 페리 광장)', detail: '빵 먹기!', maps_url: 'https://maps.app.goo.gl/RV35nEu1vh5xW7d16' },
      { id: 'day4_05', lang_id: 'day4_05', type: 'sightseeing', time: '11:30–12:00', title: '💌 우체국: La Poste', detail: '160 Rue du Temple, 75003 Paris, 프랑스<br>집으로 엽서 보내기', maps_url: 'https://maps.app.goo.gl/sur3ob9K4of7aPvWA' },
      { id: 'day4_06', lang_id: 'day4_06', type: 'transport',   time: '12:00–13:00', title: '🚇 우체국 → 레퓌블리크 광장 → 에펠탑(트로카데로) 이동', detail: '레퓌블리크 광장에서 마리안(Marianne) 동상 인증샷', note: '✅ 탑승 루트: République 역 → 9호선(Pont de Sèvres 방향) → Trocadéro 하차 (환승 없이 약 20분)' },
      { id: 'day4_07', type: 'sightseeing', time: '13:00–14:00', title: '📸 트로카데로 광장', detail: '정면 에펠탑 포토스팟 → 계단 다 내려가기 전 위쪽 테라스 중앙 라인 대칭 샷', maps_url: 'https://maps.app.goo.gl/MK7vsLSq4qXaiboS8' },
      { id: 'day4_08', type: 'sightseeing', time: '14:00–14:30', title: '🗼 에펠탑', detail: '퐁 데나 다리를 건너 에펠탑 하단 철제 구조물을 통과하며 이동', maps_url: 'https://maps.app.goo.gl/ssQgrAR2M5XCRFvR7' },
      { id: 'day4_09', type: 'sightseeing', time: '14:30–15:00', title: '🌿 마르스 광장', detail: '탁 트인 잔디밭 정면', maps_url: 'https://maps.app.goo.gl/88MbNNRPStWfZiQ48' },
      { id: 'day4_10', type: 'sightseeing', time: '15:00–15:30', title: '☕ 끌레흐 가(Rue Cler)', detail: '보행자 골목 구경', maps_url: 'https://maps.app.goo.gl/X1oV9xeVFUSTEtmJ9' },
      { id: 'day4_11', type: 'sightseeing', time: '15:30–16:30', title: "🏙 Rue de l'Université & Rue Saint-Dominique", detail: "붉은 어닝 'Le Recrutement' 카페 코너샷 및 로컬 느낌의 덜 붐비는 거리샷" },
      { id: 'day4_12', type: 'transport',   time: '16:30–17:00', title: '🚶 이동 (도보)', detail: "Rue de l'Université / Rue Saint-Dominique → Sunflower Café 쪽 이동" },
      { id: 'day4_13', lang_id: 'day4_13', type: 'food',        time: '17:00–18:00', title: '☕ Sunflower Café', detail: '커피, 아보카도 샌드위치', maps_url: 'https://maps.app.goo.gl/qGLvH9xShzdxbSaM7' },
      { id: 'day4_14', type: 'sightseeing', time: '18:00–19:00', title: '🌉 비라켐 다리', detail: '영화 인셉션 구조물 아래, 약간 측면 각도의 에펠탑 감상, 주경 & 노을 & 첫 점등<br>19:00 에펠탑 반짝이는 거 감상', maps_url: 'https://maps.app.goo.gl/4UEWxj3tbi8kn9Xi6' },
      { id: 'day4_15', type: 'transport',   time: '19:00–19:15', title: '🚶 식당으로 이동', detail: '도보 약 15분' },
      { id: 'day4_16', lang_id: 'day4_16', type: 'food',        time: '19:15–21:00', title: "🥩 저녁: L'Atypic", tags: [{cls:'tag-confirm',text:'⏰ 19:15'}], detail: '푸아그라, 타르타르, 스테이크', maps_url: 'https://maps.app.goo.gl/uaBj9PL2qWF4r8cB9', foldNote: '전채(Entrée): 푸아그라(Foie gras)<br>푸아그라는 빵에 발라 먹으면 되며, 이때 셰프에게 추천받아 달콤한 화이트 와인(예: 소테른 Sauternes) 1잔을 곁들여 푸아그라의 풍미를 극대화<br>메인(Plat): 타르타르(프랑스식 육회) + 스테이크(Steak)' },
      { id: 'day4_17', type: 'transport',   time: '21:00–21:30', title: '🚶 선착장으로 이동' },
      { id: 'day4_18', lang_id: 'day4_18', type: 'sightseeing', time: '21:30–22:30', title: '🚢 바토 파리지앵 탑승', tags: [{cls:'tag-confirm',text:'⏰ 21:30'}], detail: '에펠탑과 센강의 완전한 밤 풍경 감상', maps_url: 'https://maps.app.goo.gl/yxCDpmpt28zLXfRR9' },
      { id: 'day4_19', lang_id: 'day4_19', type: 'transport',   time: '22:30–23:00', title: '🚇 유람선 선착장 → 숙소', note: '✅ Alma-Marceau 역 → 9호선(Mairie de Montreuil 방향) → République 역 하차 (환승 없이 복귀)' },
      { id: 'day4_20', type: 'hotel',       time: '23:00',       title: '🛏 숙소 휴식' }
    ]
  },

  5: {
    header: { icon: '🚄', title: '파리 → 스트라스부르', sub: '기차 이동 · 알자스 첫날' },
    events: [
      { id: 'day5_01', type: 'hotel',     time: '08:00–09:30', title: "🧳 체크아웃 및 파리 동역(Gare de l'Est) 이동", detail: '파리 동역까지는 걸어서 15분(1km) 소요. 짐이 무겁거나 힘들 경우 우버(Uber) 이용', maps_url: 'https://maps.app.goo.gl/zn61XhanYKruqqum6' },
      { id: 'day5_02', lang_id: 'day5_02', type: 'transport', time: '09:30–12:00', title: '🚄 TGV → 스트라스부르 이동', detail: "10:08 Paris Gare de l'Est 출발 → 11:54 Strasbourg 도착", maps_url: 'https://maps.app.goo.gl/e6dJPXGKBzUbFnPT8', note: '✅ 기차 OUIGO Grande Vitesse 7691 - 좌석: Voiture 8 / 803–804' },
      { id: 'day5_03', lang_id: 'day5_03', type: 'hotel',     time: '12:00–12:30', title: '🏨 숙소(시티 레지던스 스트라스부르 센터) 짐 보관', detail: '역에서 도보로 숙소 이동, 짐 보관만', maps_url: 'https://maps.app.goo.gl/8LqmD3FP6Ep9ZyH98' },
      { id: 'day5_04', type: 'transport', time: '12:30–13:00', title: '🚶 숙소 → Winstub Le Zehnerglock 식당 이동', detail: '도보' },
      { id: 'day5_05', lang_id: 'day5_05', type: 'food',      time: '13:00–14:30', title: '🍽 점심: Winstub Le Zehnerglock', tags: [{cls:'tag-confirm',text:'⏰ 13:00'}], detail: 'Choucroute Garnie(슈쿠르트), Baeckeoffe(베크오프), 알자스산 화이트 와인(Riesling 리슬링)', maps_url: 'https://maps.app.goo.gl/tsKG6i91WJsgqM1Q9' },
      { id: 'day5_06', type: 'sightseeing', time: '14:30–16:00', title: '⛩ 스트라스부르 대성당', detail: '외부 파사드 감상 → 내부 입장 → 천문시계', maps_url: 'https://maps.app.goo.gl/wJAaRakMQhU48mLR9' },
      { id: 'day5_07', type: 'sightseeing', time: '16:00–16:30', title: '🏛 구텐베르크 광장', detail: '광장 동상/분수 주변 한 바퀴', maps_url: 'https://maps.app.goo.gl/m2bGn2zdm24G9wbe7' },
      { id: 'day5_08', type: 'sightseeing', time: '16:30–18:30', title: '🌊 강변 산책, 구시가지 골목 산책' },
      { id: 'day5_09', lang_id: 'day5_09', type: 'food',      time: '18:30–20:00', title: '🔥 저녁: La Fignette', tags: [{cls:'tag-openrun',text:'🚶오픈런'}], detail: '플람퀴슈(Tarte Flambée Traditionnelle, Gratinée)', maps_url: 'https://maps.app.goo.gl/scasdyVUWjxo9mT39' },
      { id: 'day5_10', type: 'sightseeing', time: '20:00–21:00', title: '🌙 대성당 야경 감상', maps_url: 'https://maps.app.goo.gl/wJAaRakMQhU48mLR9' },
      { id: 'day5_11', lang_id: 'day5_11', type: 'transport', time: '21:00–21:30', title: '🚶 도보 이동', detail: '체크인/키 수령(필요 시)' },
      { id: 'day5_12', type: 'hotel',     time: '21:30',       title: '🛏 숙소 휴식', maps_url: 'https://maps.app.goo.gl/8LqmD3FP6Ep9ZyH98' }
    ]
  },

  6: {
    header: { icon: '🌸', title: '콜마르 & 스트라스부르', sub: 'TER 당일치기 · 운하 · 알자스 디너' },
    events: [
      { id: 'day6_01', type: 'transport',   time: '08:00–09:00', title: '🚂 스트라스부르 → 콜마르 (TER 기차)', maps_url: 'https://maps.app.goo.gl/bddfiAsgx5PQD3ba9', note: "✅ 탑승 루트: 1. 스트라스부르 중앙역(Gare de Strasbourg) 이동 → 2. 전광판에서 'Colmar' 또는 'Mulhouse / Basel'행 플랫폼 번호(Voie) 확인 → 3. 기차 겉면 '2' (2등석) 칸에 자유롭게 착석 (소요 시간 약 30분)" },
      { id: 'day6_02', type: 'sightseeing', time: '09:00–10:30', title: '🏘 콜마르 구시가지 초입 워킹', detail: '역 → 중심가 진입 → 알록달록 골목 사진' },
      { id: 'day6_03', type: 'sightseeing', time: '10:30–12:00', title: '🌊 쁘띠 베니스 중심 산책', detail: '운하 라인 따라 걷기 → 다리 포토스팟 2~3곳', maps_url: 'https://maps.app.goo.gl/6pv5Yfm9iiodzCRq8' },
      { id: 'day6_04', type: 'food',        time: '12:00–13:30', title: '🍷 점심: WISTUB BRENNER', tags: [{cls:'tag-confirm',text:'⏰ 12:00'}], detail: 'Onion tart, Braised pork knuckle/Pinot, Cordon Bleu', maps_url: 'https://maps.app.goo.gl/7Qjy6YBsjJN3EdNF9', foldNote: "전채: 양파 타르트 (Tarte à l'oignon de Papi Lucien) 쉐어<br>메인: 돼지 무릎 찜 (Jarret de Porc braisé) + Cordon Bleu (코르동 블루 - 치즈를 품은 닭/송아지 고기 튀김) 추천." },
      { id: 'day6_05', type: 'food',        time: '13:30–14:30', title: '🍰 카페: Pâtisserie Gilg', detail: '초코에끌레어, 구겔호프, 밀푀유', maps_url: 'https://maps.app.goo.gl/wEwyyJ1aLppDrB319' },
      { id: 'day6_06', type: 'sightseeing', time: '14:30–15:30', title: '🛍 산책 & 쇼핑', detail: 'Rue des Clefs 탐방 → 북쪽으로 걸으며 Rue des Têtes 진입 → Maison des Têtes(하우스 오브 헤드) 구경 + 소품샵/기념품 구매', maps_url: 'https://maps.app.goo.gl/t44xon23yMH67rn78' },
      { id: 'day6_07', type: 'sightseeing', time: '15:30–16:30', title: '🎨 운터린덴 미술관', detail: '13세기 수도원 건물 외관 + 고즈넉한 안뜰(중정)만 가볍게 산책', maps_url: 'https://maps.app.goo.gl/7QVhS8rLZSCesjsV6' },
      { id: 'day6_08', type: 'transport',   time: '16:30–16:50', title: '🚶 콜마르역 도보 이동', maps_url: 'https://maps.app.goo.gl/YK4Qhu6DvrbLRhuh9' },
      { id: 'day6_09', type: 'transport',   time: '16:50–17:30', title: '🚂 콜마르 → 스트라스부르 복귀', note: "✅ 탑승 루트: 1) 전광판에서 'Strasbourg'행 플랫폼 확인 → 2) 자유석 착석 (약 30분) → 3. 스트라스부르 중앙역(Gare de Strasbourg)" },
      { id: 'day6_10', type: 'transport',   time: '17:30–18:00', title: '🚶 도보 이동' },
      { id: 'day6_11', type: 'food',        time: '18:00–20:00', title: '🐟 저녁: Maison Kammerzell', tags: [{cls:'tag-confirm',text:'⏰ 18:15'}], detail: 'Choucroute aux Poissons(생선 슈쿠르트), Coq au Riesling(리슬링 와인에 졸인 닭고기), 잔 와인: Riesling(화이트)', maps_url: 'https://maps.app.goo.gl/EfMdpUQtHNk9tMg2A' },
      { id: 'day6_12', type: 'sightseeing', time: '20:00–20:30', title: '🌉 쿠베르교 & 보방 댐 주변 야경', maps_url: 'https://maps.app.goo.gl/9Jb2SL3jGw783vhh9' },
      { id: 'day6_13', type: 'sightseeing', time: '20:30–21:00', title: '🌙 쁘띠 프랑스 야경 산책', maps_url: 'https://maps.app.goo.gl/qMyzXNkqKMAY5zZV7' },
      { id: 'day6_14', type: 'transport',   time: '21:00–21:30', title: '🚶 숙소 복귀', note: '✅ 도보: 쁘띠 프랑스 → 꺄를슈트라우 공원 방향 → 숙소 (약 20분)' },
      { id: 'day6_15', type: 'hotel',       time: '21:30',       title: '🛏 숙소 휴식', maps_url: 'https://maps.app.goo.gl/8LqmD3FP6Ep9ZyH98' }
    ]
  },

  7: {
    header: { icon: '🇩🇪', title: '독일 켈 & 스트라스부르', sub: '라인강 · 켈 쇼핑 · 마지막 저녁' },
    events: [
      { id: 'day7_01', type: 'sightseeing', time: '09:00–10:00', title: '🌿 두 히브 가든', maps_url: 'https://maps.app.goo.gl/7W2PETNypQtZ8YaL6' },
      { id: 'day7_02', type: 'sightseeing', time: '10:00–11:00', title: '🌉 Passerelle des Deux Rives 다리', maps_url: 'https://maps.app.goo.gl/zj6ZvML9YFymEWb29' },
      { id: 'day7_03', type: 'sightseeing', time: '11:00–12:00', title: '🌊 라인강변 산책', detail: '은전나무 전망대(Weißtannenturm) → St. Johannes Nepomuk', maps_url: 'https://maps.app.goo.gl/muLquH28S5XriDnx9' },
      { id: 'day7_04', type: 'food',        time: '12:00–13:30', title: '🥨 점심(카페): Café Backhaus Dreher', detail: '프레첼(Brezel), 버터 프레첼(Butterbrezel), 아우프슈니트 (Aufschnitt), 밀히카피(Milchkaffee), 카페 크레마(Café Crème)', maps_url: 'https://maps.app.goo.gl/SssgYb2RASvds1uc6' },
      { id: 'day7_05', type: 'sightseeing', time: '13:30–16:00', title: '🛒 City Center Kehl(쇼핑몰)', detail: 'DM 등 마트 쇼핑', maps_url: 'https://maps.app.goo.gl/oKUh25L7y6c272d58' },
      { id: 'day7_06', type: 'sightseeing', time: '16:30–19:00', title: '🛍 Place des Halles(쇼핑몰)', detail: 'Auchan 쇼핑', maps_url: 'https://maps.app.goo.gl/iFs3UhVuehbbXzjf8' },
      { id: 'day7_07', type: 'transport',   time: '19:00–19:30', title: '🚶 숙소에 마트 짐 내려놓고 도보 이동' },
      { id: 'day7_08', type: 'food',        time: '19:30–21:00', title: '🍷 저녁: Le Tire-Bouchon', tags: [{cls:'tag-confirm',text:'⏰ 19:30'}], detail: 'Joues de porc au pinot noir (피노 누아에 졸인 돼지 뽈살) & spaetzle(알자스식 수제비), Munster coiffé(뮌스터 쿠아페)', maps_url: 'https://maps.app.goo.gl/aJnQMWgfH3gVnqAV6', foldNote: "MENU DORETTE MULLER (32.50€) 세트 주문<br>전채: Soupe à l'oignon gratinée (양파 수프)<br>메인: Joues de porc au Pinot Noir, spaetzle<br>디저트: Strudel aux pommes<br>단품 추가: Munster coiffé<br>잔 와인: Pinot Noir(레드), Gewürztraminer(화이트)" },
      { id: 'day7_09', type: 'transport',   time: '21:00–21:30', title: '🚶 숙소 복귀', note: '✅ 도보: 식당 → 대성당 대광장 → 숙소까지 도보 15분' },
      { id: 'day7_10', type: 'hotel',       time: '21:30',       title: '🧳 숙소 휴식 및 캐리어 짐 싸기', maps_url: 'https://maps.app.goo.gl/8LqmD3FP6Ep9ZyH98' }
    ]
  },

  8: {
    header: { icon: '🏠', title: '스트라스부르 → 공항 (출국)', sub: '귀국일 · TGV · CDG · 아시아나' },
    events: [
      { id: 'day8_01', type: 'hotel',     time: '06:00–07:00', title: '🧳 체크아웃', maps_url: 'https://maps.app.goo.gl/8LqmD3FP6Ep9ZyH98' },
      { id: 'day8_02', type: 'transport', time: '07:00–10:00', title: '🚄 TGV 이동 스트라스부르 → 샤를드골공항(터미널2E)', detail: '출발: 07:31 Strasbourg<br>도착: 09:29 Paris Aéroport Roissy CDG 2 (Gare TGV)', maps_url: 'https://maps.app.goo.gl/bddfiAsgx5PQD3ba9', note: '✅ 기차 TGV INOUI no.5470 - 좌석: Voiture 6 / 638–639' },
      { id: 'day8_03', type: 'transport', time: '09:30–10:00', title: '🚋 CDGVAL(무료 셔틀 열차) 탑승하여 제1터미널(Terminal 1)로 이동' },
      { id: 'day8_04', type: 'food',      time: '10:00–11:00', title: '🍔 아점: 맥도날드', detail: '280™ Original(Bœuf Blanc), McWrap 등' },
      { id: 'day8_05', type: 'note',      time: '11:00–15:25', title: '⏳ 택스리펀 처리 및 대기', detail: 'PABLO 기계로 택스리펀 바코드 스캔 완료, 카운터가 열릴 때까지 휴식' },
      { id: 'day8_06', type: 'transport', time: '15:25–16:15', title: '🛄 아시아나 카운터 오픈 (Terminal 1, Hall 1) 및 수하물 위탁', detail: '오픈 시간에 맞춰 1등으로 줄 서서 짐 부치기' },
      { id: 'day8_07', type: 'transport', time: '16:15–16:40', title: '🛂 보안 검색(Security) 및 출국 심사(Passport Control) 통과' },
      { id: 'day8_08', type: 'food',      time: '16:40–17:40', title: '🍽 저녁: Bistrot Benoît', detail: '제1터미널 면세 구역 Level 5' },
      { id: 'day8_09', type: 'sightseeing', time: '17:40–18:25', title: '🛍 구경 및 휴식, 탑승 게이트로 이동' },
      { id: 'day8_10', type: 'transport', time: '18:25–14:40 (3/15)', title: '✈️ 출국 아시아나 OZ0502', detail: '파리(CDG) 출발 → 서울(ICN) 도착' },
      { id: 'day8_11', type: 'transport', time: '(3/15) 18:05–21:35', title: '🚌 시외우등버스 탑승', detail: '인천공항(제2터미널) → 아산(온양)' }
    ]
  }

};
