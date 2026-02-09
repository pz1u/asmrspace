// 소리 데이터 설정
const soundsData = [
    { id: 'rain', icon: 'cloud-rain', file: 'rain.mp3', tags: ['nature', 'sleep', 'relax'] },
    { id: 'fire', icon: 'flame', file: 'fire.mp3', tags: ['nature', 'relax', 'warm'] },
    { id: 'bird', icon: 'bird', file: 'bird.mp3', tags: ['nature', 'morning', 'focus'] },
    { id: 'book', icon: 'book', file: 'book.mp3', tags: ['study', 'focus', 'calm'] },
    { id: 'wave', icon: 'waves', file: 'wave.mp3', tags: ['nature', 'sleep', 'relax'] },
    { id: 'keyboard', icon: 'keyboard', file: 'keyboard.mp3', tags: ['work', 'focus', 'study'] },
    { id: 'bug', icon: 'bug', file: 'bug.mp3', tags: ['nature', 'night', 'sleep'] },
    { id: 'space', icon: 'rocket', file: 'space.mp3', tags: ['nature', 'sleep', 'relax', 'night'] },
    { id: 'pencil', icon: 'pencil', file: 'pencil.mp3', tags: ['study', 'work', 'focus'] }
];

// 추천 믹스 데이터
const soundMixes = [
    { id: 'rainy_cabin', icon: 'home', sounds: { rain: 0.7, fire: 0.4 } },
    { id: 'beach_reading', icon: 'book-open', sounds: { wave: 0.6, book: 0.3, bird: 0.2 } },
    { id: 'night_studio', icon: 'moon', sounds: { rain: 0.5, keyboard: 0.8 } }
];

// 다국어 데이터 (모든 페이지 키 복구 완료)
const translations = {
    ko: {
        // 공통 (Common)
        title: "My ASMR Space",
        subtitle: "나만의 소리로 휴식하세요.",
        site_desc: "이 사이트는 사용자에게 무료로 휴식과 집중을 위한 소리를 제공합니다. 웹사이트와 애플리케이션 어디서든 자유롭게 이용할 수 있습니다.",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        
        // 버튼 & 레이블 (Buttons & Labels)
        play: "재생",
        stop: "정지",
        stop_all: "일괄 정지",
        now_playing: "재생 중",
        theme_dark: "다크 모드",
        theme_light: "라이트 모드",
        btn_home: "홈으로 가기",
        btn_msg: "메시지 보내기",
        btn_timer: "타이머",
        send_btn: "보내기",
        email_label: "이메일",
        email_placeholder: "답변 받으실 이메일 주소",
        msg_label: "메시지",
        msg_placeholder: "문의하실 내용을 적어주세요.",
        my_saved: "즐겨찾기",
        mix_title: "추천 사운드 믹스",
        mix_rainy_cabin: "비 오는 오두막",
        mix_beach_reading: "해변의 독서",
        mix_night_studio: "심야의 작업실",
        btn_save_mix: "현재 믹스 저장",
        my_mix_title: "나만의 믹스",
        prompt_mix_name: "믹스 이름을 입력하세요:",
        alert_no_sound: "재생 중인 소리가 없습니다.",
        no_custom_mixes: "저장된 믹스가 없습니다.",
        btn_confirm: "확인",
        btn_cancel: "취소",
        msg_delete_confirm: "정말 삭제하시겠습니까?",
        search_placeholder: "믹스 검색...",
        msg_saved: "저장되었습니다.",
        search_sound_placeholder: "소리 검색 (이름, 태그)...",
        msg_no_result: "검색 결과가 없습니다.",
        timer_set: "{minutes}분 뒤에 소리가 꺼집니다.",
        timer_added: "{minutes}분이 추가되었습니다.",
        timer_canceled: "타이머가 취소되었습니다.",
        timer_hour: "시간",
        timer_min: "분",
        btn_start: "시작",
        btn_stop: "정지",
        btn_reset: "초기화",
        btn_pause: "일시정지",
        btn_resume: "재개",
        
        loading_msg: "공간을 준비하는 중...",
        // 메뉴 & 링크 (Menu & Links)
        sitemap: "사이트맵",
        contact_link: "문의하기",
        privacy: "개인정보처리방침",
        
        // 푸터 (Footer)
        footer_about: "제작자 소개",
        footer_science: "ASMR과 과학",
        footer_guide: "이용 가이드",
        footer_glossary: "용어 사전",
        footer_faq: "FAQ",
        footer_notice: "공지사항",
        
        // 페이지 제목 (Page Titles) - 복구됨
        about_title: "👨‍💻 제작자 소개 (About Us)",
        science_title: "🧠 ASMR과 소리의 과학",
        guide_title: "🎧 올바른 청취 방법 및 사용 가이드",
        glossary_title: "📖 ASMR 용어 사전",
        faq_title: "❓ 자주 묻는 질문 (FAQ)",
        notice_title: "📢 공지사항 및 업데이트",
        sitemap_title: "🗺️ 사이트맵 (Sitemap)",
        privacy_title: "개인정보처리방침",
        contact_title: "버그 제보 및 문의",

        // 태그 (Tags)
        tag_nature: "자연",
        tag_sleep: "수면",
        tag_relax: "휴식",
        tag_warm: "따뜻함",
        tag_morning: "아침",
        tag_focus: "집중",
        tag_study: "공부",
        tag_calm: "차분함",
        tag_work: "작업",
        tag_night: "밤",

        // 소리 이름 (Sound Names)
        sound_rain: "빗소리",
        sound_fire: "장작불",
        sound_bird: "새소리",
        sound_book: "책 넘기는 소리",
        sound_wave: "파도 소리",
        sound_keyboard: "타자 소리",
        sound_bug: "풀벌레 소리",
        sound_space: "우주 소리",
        sound_pencil: "연필 소리",

        // 메인 페이지 (Home)
        asmr_title: "ASMR과 백색소음이란?",
        asmr_desc: "ASMR(Autonomous Sensory Meridian Response)은 뇌를 자극해 심리적인 안정을 유도하는 소리입니다. 빗소리, 장작 타는 소리, 타자 소리와 같은 백색소음(White Noise)은 주변의 거슬리는 소음을 덮어주고 집중력을 향상시키거나 수면을 돕는 데 효과적입니다.",
        home_why_title: "왜 My ASMR Space인가요?",
        home_why_desc: "My ASMR Space는 별도의 앱 설치나 회원가입 없이 웹 브라우저에서 즉시 이용 가능한 무료 힐링 사운드 서비스입니다. 사용자는 빗소리, 장작불, 카페 소음 등 다양한 고품질 음원을 직접 조합하고 볼륨을 조절하여 자신만의 최적화된 휴식 공간을 만들 수 있습니다. 공부, 수면, 명상, 독서 등 상황에 맞는 분위기를 연출해보세요.",
        home_sleep_title: "수면과 불면증 완화",
        home_sleep_desc: "잠들기 전, 복잡한 생각으로 뒤척이시나요? 빗소리나 파도 소리와 같은 자연의 소리는 뇌파를 안정시키고 부교감 신경을 활성화하여 깊은 수면(Deep Sleep)을 유도합니다. 타이머 기능을 설정하고 편안하게 잠드세요.",
        home_focus_title: "집중력 향상과 백색소음",
        home_focus_desc: "너무 조용한 공간보다는 적당한 소음이 집중력을 높여준다는 연구 결과가 있습니다. 이를 '백색소음(White Noise)' 효과라고 합니다. 타자 소리나 연필 사각거리는 소리는 주변의 불규칙한 생활 소음을 덮어주어(Masking Effect) 업무나 공부 몰입도를 극대화합니다.",
        tips_title: "My ASMR Space 활용 팁",
        tip_focus: "<strong>집중이 필요할 때:</strong> 타자 소리와 같은 규칙적인 소음을 활용해보세요.",
        tip_relax: "<strong>휴식이 필요할 때:</strong> 빗소리와 장작불 소리로 아늑한 분위기를 만들어보세요.",
        tip_sleep: "<strong>수면 유도:</strong> 볼륨을 낮추고 자연의 소리에 귀를 기울여보세요.",

        // 소개 페이지 (About)
        about_quote: "\"복잡한 세상 속, 작은 쉼표를 만들고 싶었습니다.\"",
        about_intro: "안녕하세요, <strong>My ASMR Space</strong>를 개발한 박지우입니다.<br>저는 웹 개발을 공부하고 있는 학생이자, 늦은 밤까지 모니터 앞을 지키는 예비 개발자입니다.",
        about_story: "코딩 공부를 하다 보면 머리가 복잡해지고 집중력이 흐트러질 때가 많았습니다. 그럴 때마다 저는 유튜브에서 빗소리나 장작 타는 소리를 찾아 듣곤 했습니다. 하지만 매번 영상을 검색해야 하고, 중간에 나오는 광고 소리에 깜짝 놀라 집중이 깨지는 경험을 자주 했습니다. \"광고 없이, 내가 원하는 소리만 골라서 섞어 들을 수 있는 심플한 웹사이트는 없을까?\"라는 단순한 호기심이 이 프로젝트의 시작이었습니다.",
        about_phil_title: "개발 철학: Simple & Relax",
        about_phil_desc: "이 사이트를 만들면서 가장 중요하게 생각한 것은 <strong>'단순함'</strong>입니다. 복잡한 설정이나 설치 과정 없이, 접속하자마자 바로 휴식을 취할 수 있어야 한다고 생각했습니다.<br>또한, 사용자가 직접 소리의 볼륨을 조절하여 자신만의 공간을 만들 수 있도록 '믹싱 기능'에 집중했습니다. 누군가에게는 집중을 위한 독서실이 되고, 누군가에게는 잠들기 전의 아늑한 침실이 되기를 바랍니다.",
        about_goal_title: "앞으로의 목표",
        about_goal_desc: "My ASMR Space는 아직 성장 중입니다. 사용자분들이 요청해주시는 다양한 소리(카페 소음, 숲속 소리 등)를 지속적으로 업데이트하고, 오프라인 지원이나 명상 가이드 같은 기능들도 추가해 나갈 예정입니다.<br><br>여러분의 하루에 이 작은 웹사이트가 조금이나마 위로와 휴식이 되었으면 좋겠습니다. 이용해 주셔서 진심으로 감사합니다.",
        about_cheer: "개발자에게 응원의 메시지를 보내주세요!",

        // 과학 페이지 (Science)
        science_intro: "ASMR과 백색소음이 단순한 플라시보 효과가 아니라는 사실, 알고 계셨나요? 뇌과학과 심리학 연구들이 밝혀낸 소리의 치유 메커니즘을 심도 있게 소개합니다.",
        science_sec1_title: "01. ASMR의 뇌과학적 메커니즘",
        science_sec1_desc: "fMRI(기능적 자기공명영상) 연구에 따르면, ASMR 트리거에 반응할 때 뇌의 보상 회로(Reward System)와 정서적 공감을 담당하는 영역이 활성화됩니다. 이는 단순한 소리 청취를 넘어선 복합적인 생리 반응입니다.",
        science_sec1_list1: "<strong>부교감 신경 우위:</strong> 심박수 감소와 피부 전도도 변화는 신체가 '투쟁-도피(Fight-or-Flight)' 상태에서 '휴식-소화(Rest-and-Digest)' 상태로 전환됨을 의미합니다.",
        science_sec1_list2: "<strong>뇌파의 동조화:</strong> 규칙적인 리듬의 소리는 뇌파를 불안정한 베타파에서 안정적인 알파파(8-12Hz)나 세타파(4-8Hz)로 유도하여 명상과 유사한 상태를 만듭니다.",
        science_sec1_list3: "<strong>신경전달물질 분비:</strong> 기분 좋은 소름(Tingle)은 도파민(쾌락)과 옥시토신(안정, 유대감)의 분비를 촉진하여 우울감과 불안을 완화합니다.",
        science_sec2_title: "02. 소음의 색깔 (Color of Noise)",
        science_sec2_desc: "빛의 스펙트럼처럼 소리도 주파수 분포에 따라 고유의 '색깔'을 가집니다. 자신의 상태에 맞는 노이즈 컬러를 찾는 것이 중요합니다.",
        science_white_title: "⚪ 백색소음 (White Noise)",
        science_white_desc: "모든 가청 주파수 대역에서 동일한 에너지를 가집니다. '치이익' 하는 TV 잡음 소리와 유사하며, 강력한 차폐 효과로 집중력 향상에 탁월합니다.",
        science_pink_title: "🌸 핑크 노이즈 (Pink Noise)",
        science_pink_desc: "옥타브마다 에너지가 반비례하여 줄어듭니다. 빗소리, 파도 소리처럼 자연의 소리와 가장 유사하며, 수면 뇌파의 안정성을 높여줍니다.",
        science_brown_title: "🟤 브라운 노이즈 (Brown Noise)",
        science_brown_desc: "핑크 노이즈보다 고음역대가 더 감쇠된 소리입니다. 폭포수 소리나 천둥 소리처럼 묵직하고 깊은 울림을 주어, 이명 완화와 깊은 숙면에 효과적입니다.",
        science_sec3_title: "03. 청각 마스킹과 습관화",
        science_sec3_desc: "왜 시끄러운 소음이 집중을 도울까요? 핵심은 '청각 마스킹(Auditory Masking)'입니다. 백색소음은 갑작스러운 외부 소음(Peak Noise)과 배경 소음 간의 격차(SNR)를 줄여주어, 뇌가 소음에 놀라지 않게 만듭니다. 또한, 뇌는 반복적이고 위협적이지 않은 자극을 무시하는 '습관화(Habituation)' 과정을 통해 백색소음을 안전한 배경으로 인식하여 심리적 보호막을 형성합니다.",
        btn_science_listen: "과학적인 힐링 사운드 듣기",

        // 가이드 페이지 (Guide)
        guide_sec1_title: "⚠️ 청력 보호를 위한 주의사항",
        guide_sec1_list1: "적정 볼륨 유지 (최대 60% 이하)",
        guide_sec1_list2: "60-60 법칙 (60분 청취 후 휴식)",
        guide_sec1_list3: "수면 시 타이머 사용 권장",
        guide_sec2_title: "💡 My ASMR Space 200% 활용하기",
        guide_mix_title: "1. 나만의 소리 조합 찾기",
        guide_mix_desc: "여러 소리를 섞어 풍성한 공간감을 느껴보세요.",
        guide_mix_list1: "<strong>비 오는 오두막:</strong> 빗소리(70%) + 장작불(40%)",
        guide_mix_list2: "<strong>해변의 독서:</strong> 파도 소리(60%) + 책 넘기는 소리(30%) + 새소리(20%)",
        guide_mix_list3: "<strong>심야의 작업실:</strong> 빗소리(50%) + 타자 소리(80%)",
        guide_pomo_title: "2. 뽀모도로 기법",
        guide_pomo_desc: "공부나 업무를 할 때 타이머 기능을 활용해보세요. 25분 또는 30분 타이머를 설정하고 타자 소리나 빗소리를 배경음으로 켜두세요. 소리가 멈추면 5분간 휴식을 취합니다. 백색소음은 주변 소음을 차단하고 몰입도를 높여줍니다.",
        guide_meditation_title: "3. 명상과 호흡",
        guide_meditation_desc: "파도 소리나 빗소리는 명상 호흡의 훌륭한 가이드가 됩니다. 파도가 밀려올 때 숨을 들이마시고, 나갈 때 내뱉어보세요. 자연의 리듬에 맞춰 호흡하면 심박수가 안정되고 스트레스가 감소합니다.",
        guide_mobile_title: "📱 모바일 및 오프라인 사용",
        guide_mobile_desc: "모바일 애플리케이션과 웹 브라우저(Chrome, Safari 등) 어디서든 완벽하게 작동합니다. 오디오 파일은 데이터 절약을 위해 최적화되어 있으며, 한 번 로드되면 캐시에 저장되어 데이터 소모를 최소화합니다.<br><br><strong>Tip:</strong> 아이폰(iOS) 사용자는 제어 센터에서 백그라운드 재생을 지원합니다. 화면을 끄고 소리만 들으며 배터리를 절약하세요.",
        btn_guide_listen: "나만의 소리 들으러 가기",

        // 용어 사전 (Glossary) - 상세 복구됨
        glossary_asmr_title: "ASMR (자율 감각 쾌락 반응)",
        glossary_asmr_desc: "'자율 감각 쾌락 반응'의 약자로, 특정 시청각적 자극에 반응하여 뇌에서 느껴지는 쾌감 및 심리적 안정감을 의미합니다. 주로 두피나 목 뒤에서 시작되어 등 아래로 퍼지는 기분 좋은 저릿함(Tingle)을 동반합니다. fMRI 연구에 따르면, ASMR은 뇌의 보상 회로와 관련된 영역(내측 전전두피질 등)을 활성화시키며, 이는 사회적 유대감이나 보살핌과 관련된 감정과 유사한 신경 반응을 일으킵니다.",
        glossary_white_title: "백색 소음 (White Noise)",
        glossary_white_desc: "모든 가청 주파수 대역(20Hz ~ 20,000Hz)에서 동일한 강도의 에너지를 갖는 소음입니다. '쉬-'하는 TV 잡음과 유사하며, 모든 주파수를 포함하고 있어 갑작스러운 외부 소음을 효과적으로 덮어주는 '청각 마스킹(Auditory Masking)' 효과가 뛰어납니다. 이 때문에 집중력 향상이나 주변 소음 차단에 가장 널리 사용됩니다.",
        glossary_pink_title: "핑크 노이즈 (Pink Noise)",
        glossary_pink_desc: "저주파수 대역으로 갈수록 에너지가 강해지는(옥타브당 3dB씩 감소) 소음입니다. 백색소음보다 고음역대가 부드러워 빗소리, 폭포소리, 바람소리 등 자연의 소리와 더 유사하게 들립니다. 백색소음보다 귀에 편안하게 느껴져 장시간 청취나 수면 유도에 널리 사용됩니다.",
        glossary_brown_title: "브라운 노이즈 (Brownian/Red Noise)",
        glossary_brown_desc: "핑크 노이즈보다 저음역대가 더욱 강조된(옥타브당 6dB씩 감소) 소음입니다. '브라운 운동(Brownian motion)'에서 유래했으며, 깊고 웅장한 소리가 특징입니다. 강한 폭포수, 천둥, 강한 바람 소리와 유사하며, 특히 저주파 소음을 차단하는 데 효과적이고 이명 완화나 깊은 수면을 유도하는 데 도움이 될 수 있습니다.",
        glossary_trigger_title: "트리거 (Trigger)",
        glossary_trigger_desc: "ASMR 반응을 유발하는 특정 자극을 의미합니다. 트리거는 개인차가 매우 크며, 청각적(속삭임, 태핑), 시각적(부드러운 손동작), 촉각적 자극 등 다양하게 존재합니다. 자신에게 맞는 트리거를 찾는 것이 ASMR 경험의 핵심입니다.",
        glossary_tingle_title: "팅글 (Tingle)",
        glossary_tingle_desc: "ASMR의 가장 특징적인 신체 반응으로, '기분 좋은 소름'이나 '전기가 흐르는 듯한 저릿함'으로 묘사되는 감각 이상 현상(paresthesia)의 일종입니다. 일반적으로 두피에서 시작하여 목과 척추를 따라 아래로 퍼져나가며, 깊은 이완감과 안정감을 동반합니다.",
        glossary_binaural_title: "바이노럴 비트 (Binaural Beats)",
        glossary_binaural_desc: "왼쪽과 오른쪽에 미세하게 다른 주파수의 소리를 각각 들려주었을 때, 뇌가 두 주파수의 차이에 해당하는 제3의 파동을 인식하는 현상입니다. 이 '뇌파 동조(Brainwave Entrainment)' 기술을 통해 뇌를 특정 상태(알파파: 안정, 세타파: 명상, 델타파: 깊은 수면)로 유도할 수 있다고 알려져 있습니다. 효과를 위해서는 반드시 헤드폰이나 이어폰을 사용해야 합니다.",
        glossary_notalking_title: "노 토킹 (No Talking)",
        glossary_notalking_desc: "사람의 말소리(속삭임 포함) 없이 사물, 자연, 기계음 등 비언어적 소리로만 구성된 ASMR 콘텐츠입니다. 언어 정보를 처리하는 데 드는 인지적 부담이 없어, 오직 소리 자체에만 몰입하고 싶은 사용자들이나 외국어 콘텐츠에 장벽을 느끼는 사용자들에게 선호됩니다.",

        // 공지사항 (Notice)
        notice_v3_title: "v1.3.0 사운드 업데이트",
        notice_v3_date: "2026.02.03",
        notice_v3_desc: "새로운 힐링 사운드 추가",
        notice_v3_list1: "연필 소리, 우주 소리 추가",
        notice_v2_title: "v1.2.0 플레이어 바 업데이트",
        notice_v2_date: "2026.02.01",
        notice_v2_desc: "플레이어 바 디자인 및 편의성 개선",
        notice_v2_list1: "플로팅 글래스 디자인 및 개별 볼륨 조절",
        notice_v2_list2: "플레이어 바 내 즐겨찾기 및 UI 최적화",
        notice_v1_title: "v1.1.0 통합 업데이트",
        notice_v1_date: "2026.01.31",
        notice_v1_desc: "주요 기능 통합 및 개선",
        notice_v1_list1: "다국어 지원 및 슬립 타이머 추가",
        notice_v1_list2: "풀벌레 소리 추가 및 UI 개선",
        notice_open_title: "My ASMR Space 오픈!",
        notice_open_date: "2026.01.30",
        notice_open_desc: "힐링을 위한 무료 ASMR 사이트 오픈",
        notice_open_list_title: "기본 소리 제공 (빗소리, 장작불 등)",

        // FAQ & Privacy & Sitemap
        faq_q1: "Q. 이 사이트는 무료인가요?",
        faq_a1: "네, My ASMR Space의 모든 기능과 소리는 100% 무료로 제공됩니다. 회원가입이나 로그인 절차 없이 접속하자마자 바로 이용하실 수 있습니다. 사이트 운영 및 서버 유지를 위해 최소한의 광고가 포함될 수 있으나, 사용자의 휴식을 방해하지 않도록 신중하게 배치하고 있습니다.",
        faq_q2: "Q. 애플리케이션(App)으로도 출시되어 있나요?",
        faq_a2: "네, 현재 안드로이드(Android) 애플리케이션과 모바일/PC 웹 브라우저 환경을 모두 지원합니다. 구글 플레이 스토어에서 앱을 다운로드하거나, 별도의 설치 없이 웹사이트(asmrspace.shop)에 접속하여 바로 이용하실 수 있습니다. 아이폰 사용자는 사파리(Safari) 브라우저를 통해 '홈 화면에 추가' 기능을 사용하시면 앱처럼 편리하게 이용 가능합니다.",
        faq_q3: "Q. 오프라인에서도 재생이 가능한가요?",
        faq_a3: "기본적으로는 인터넷 연결이 필요한 스트리밍 서비스입니다. 하지만 웹 브라우저의 최신 캐싱 기술을 적용하여, 한 번 재생했던 소리는 일시적으로 기기에 저장되어 데이터 소모를 최소화합니다. 비행기 모드 등 완전한 오프라인 환경에서의 재생 기능은 추후 앱 업데이트를 통해 지원할 예정입니다.",
        faq_q4: "Q. 소리가 중간에 끊겨요.",
        faq_a4: "모바일 기기에서 소리가 끊기는 주된 원인은 '배터리 최적화' 기능 때문입니다. 화면이 꺼지면 브라우저의 백그라운드 활동을 제한하기 때문인데, 설정 > 배터리 > 배터리 최적화 메뉴에서 브라우저 앱을 '제외'로 설정하시면 해결될 수 있습니다. 또한, 인터넷 연결이 불안정한 경우에도 버퍼링이 발생할 수 있으니 와이파이 환경을 확인해주세요.",
        faq_q5: "Q. 원하는 소리를 추가해 줄 수 있나요?",
        faq_a5: "물론입니다! 사용자분들의 피드백은 서비스 발전의 가장 큰 원동력입니다. 메인 페이지 하단의 '문의하기' 폼을 통해 원하시는 소리(예: 도서관 소음, 고양이 골골송 등)를 남겨주시면, 저작권 문제가 없는 고품질 음원을 선별하여 다음 업데이트에 적극 반영하겠습니다.",
        faq_q6: "Q. 이 소리들을 유튜브 영상 등에 사용해도 되나요?",
        faq_a6: "본 사이트에서 제공하는 소리들은 오픈 라이선스(CC0) 음원이거나 자체적으로 녹음 및 편집된 음원입니다. 공부, 수면, 명상 등 개인적인 목적으로 감상하시는 것은 언제나 환영합니다. 단, 음원 파일을 무단으로 추출하여 재배포하거나, 유튜브 영상 제작 등 상업적인 용도로 사용하는 것은 저작권 정책에 위배될 수 있으니 주의 부탁드립니다. 상업적 사용 문의는 별도로 연락 주시기 바랍니다.",
        faq_more_questions: "더 궁금한 점이 있으신가요?",
        privacy_intro: "My ASMR Space(이하 \"사이트\")는 이용자의 개인정보를 중요시하며, \"정보통신망 이용촉진 및 정보보호\"에 관한 법률을 준수하고 있습니다.",
        privacy_sec1_title: "1. 개인정보 수집",
        privacy_sec1_desc: "별도 회원가입 없이 이용 가능하며 개인정보를 요구하지 않습니다.",
        privacy_sec2_title: "2. 쿠키 사용",
        privacy_sec2_desc: "구글 애드센스 광고 게재를 위해 쿠키가 사용될 수 있습니다.",
        privacy_list1: "사용자는 구글의 광고 설정 페이지에서 맞춤형 광고를 위한 쿠키 사용을 거부할 수 있습니다.",
        privacy_list2: "또는 www.aboutads.info를 방문하여 제3자 공급업체의 맞춤형 광고 쿠키 사용을 거부할 수 있습니다.",
        sitemap_menu_title: "메인 메뉴",
        sitemap_info_title: "정보 및 가이드",

        // 명언 (Quotes)
        quotes: [
            "잠시 쉬어가도 괜찮아요. 당신은 충분히 잘하고 있습니다.",
            "오늘 하루도 당신의 속도대로, 편안하게.",
            "작은 휴식이 큰 에너지가 됩니다.",
            "당신의 존재만으로도 세상은 충분히 아름답습니다.",
            "걱정은 잠시 내려놓고, 지금 이 순간의 소리에 집중해보세요.",
            "내일은 오늘보다 더 빛날 거예요.",
            "지친 마음을 토닥여주세요. 수고했어요, 오늘도.",
            "행복은 강도가 아니라 빈도입니다. 소소한 행복을 느껴보세요.",
            "깊은 숨을 들이마시고, 천천히 내쉬어보세요.",
            "조금 느려도 괜찮아요. 당신은 이미 충분히 잘하고 있어요.",
            "오늘 버텨낸 것만으로도, 당신은 정말 대단한 사람이에요.",
            "쉬어가는 시간도 성장의 일부예요. 멈춘 게 아니라 준비 중인 거예요.",
            "완벽하지 않아도 괜찮아요. 지금의 당신도 충분히 소중해요.",
            "조급해하지 않아도 돼요. 당신만의 속도가 있어요.",
            "작은 한 걸음이라도, 멈추지 않는 당신은 이미 멋져요.",
            "오늘의 최선이 내일의 자랑이 될 거예요.",
            "스스로에게 조금 더 친절해도 괜찮아요.",
            "당신이 버텨온 시간들이 이미 답이에요.",
            "지금 이 자리에서도, 당신은 계속 성장하고 있어요."
        ]
    },
    en: {
        // Common
        title: "My ASMR Space",
        subtitle: "Relax with your own sounds.",
        site_desc: "Free sounds for relaxation and focus. Available on both Web and App.",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        play: "Play",
        stop: "Stop",
        stop_all: "Stop All",
        now_playing: "Now Playing",
        theme_dark: "Dark Mode",
        theme_light: "Light Mode",
        btn_home: "Go Home",
        btn_msg: "Send Message",
        btn_timer: "Timer",
        send_btn: "Send",
        email_label: "Email",
        email_placeholder: "Your email address",
        msg_label: "Message",
        msg_placeholder: "Your message here",
        my_saved: "Favorites",
        mix_title: "Recommended Mixes",
        mix_rainy_cabin: "Rainy Cabin",
        mix_beach_reading: "Beach Reading",
        mix_night_studio: "Late Night Studio",
        btn_save_mix: "Save Current Mix",
        my_mix_title: "My Custom Mixes",
        prompt_mix_name: "Enter mix name:",
        alert_no_sound: "No sounds are playing.",
        no_custom_mixes: "No saved mixes.",
        btn_confirm: "Confirm",
        btn_cancel: "Cancel",
        msg_delete_confirm: "Are you sure you want to delete?",
        search_placeholder: "Search mixes...",
        msg_saved: "Saved successfully.",
        search_sound_placeholder: "Search sounds (name, tag)...",
        msg_no_result: "No search results found.",
        timer_set: "Sound will turn off in {minutes} minutes.",
        timer_added: "{minutes} minutes added.",
        timer_canceled: "Timer has been canceled.",
        timer_hour: "Hour",
        timer_min: "Min",
        btn_start: "Start",
        btn_stop: "Stop",
        btn_reset: "Reset",
        btn_pause: "Pause",
        btn_resume: "Resume",
        loading_msg: "Setting the mood...",
        sitemap: "Sitemap",
        contact_link: "Contact Us",
        privacy: "Privacy Policy",
        footer_about: "About Us",
        footer_science: "Science of ASMR",
        footer_guide: "User Guide",
        footer_glossary: "Glossary",
        footer_faq: "FAQ",
        footer_notice: "Notice",
        
        // Page Titles
        about_title: "👨‍💻 About Us",
        science_title: "🧠 Science of ASMR",
        guide_title: "🎧 User Guide",
        glossary_title: "📖 ASMR Glossary",
        faq_title: "❓ FAQ",
        notice_title: "📢 Notice & Updates",
        sitemap_title: "🗺️ Sitemap",
        privacy_title: "Privacy Policy",
        contact_title: "Bug Report & Inquiry",

        // Tags & Sounds
        tag_nature: "Nature",
        tag_sleep: "Sleep",
        tag_relax: "Relax",
        tag_warm: "Warm",
        tag_morning: "Morning",
        tag_focus: "Focus",
        tag_study: "Study",
        tag_calm: "Calm",
        tag_work: "Work",
        tag_night: "Night",
        sound_rain: "Rain",
        sound_fire: "Fire",
        sound_bird: "Birds",
        sound_book: "Page Turning",
        sound_wave: "Waves",
        sound_keyboard: "Typing",
        sound_bug: "Crickets",
        sound_space: "Space",
        sound_pencil: "Pencil",

        // Home
        asmr_title: "What is ASMR & White Noise?",
        asmr_desc: "ASMR triggers psychological stability. White noise like rain or typing helps cover distracting noises, improving concentration and sleep.",
        home_why_title: "Why My ASMR Space?",
        home_why_desc: "My ASMR Space is a free healing sound service available immediately in your web browser without app installation or sign-up. Users can mix high-quality sounds like rain, fire, and cafe noise, and adjust volumes to create their own optimized relaxation space. Create the perfect atmosphere for study, sleep, meditation, or reading.",
        home_sleep_title: "Sleep and Insomnia Relief",
        home_sleep_desc: "Do you toss and turn with complex thoughts before bed? Nature sounds like rain or waves stabilize brain waves and activate the parasympathetic nervous system to induce deep sleep. Set the timer function and fall asleep comfortably.",
        home_focus_title: "Focus and White Noise",
        home_focus_desc: "Research shows that moderate noise improves concentration rather than complete silence. This is called the 'White Noise' effect. Sounds like typing or pencil scratching mask irregular ambient noises (Masking Effect), maximizing immersion in work or study.",
        tips_title: "Tips for My ASMR Space",
        tip_focus: "<strong>For Focus:</strong> Try regular sounds like typing.",
        tip_relax: "<strong>For Relax:</strong> Use rain and fire sounds.",
        tip_sleep: "<strong>For Sleep:</strong> Lower volume and listen to nature.",

        // About
        about_quote: "\"I wanted to create a small comma in a complex world.\"",
        about_intro: "Hello, I'm Park Jiwoo, the developer of <strong>My ASMR Space</strong>.<br>I am a student studying web development and an aspiring developer who stays up late in front of the monitor.",
        about_story: "While studying coding, my head often became cluttered and I lost focus. Whenever that happened, I would listen to rain or fire sounds on YouTube. However, I often had to search for videos each time, and my concentration was broken by surprise ad sounds. The simple curiosity, \"Isn't there a simple website where I can mix only the sounds I want without ads?\" was the beginning of this project.",
        about_phil_title: "Philosophy: Simple & Relax",
        about_phil_desc: "The most important thing I considered while creating this site was <strong>'simplicity'</strong>. I believed that one should be able to relax immediately upon access, without complex settings or installation processes.<br>Also, I focused on the 'mixing feature' so that users can create their own space by adjusting the volume of the sounds themselves. I hope it becomes a study room for some, and a cozy bedroom before sleep for others.",
        about_goal_title: "Future Goals",
        about_goal_desc: "My ASMR Space is still growing. I plan to continuously update various sounds (like cafe noise, forest sounds, etc.) requested by users, and add features like offline support or meditation guides.<br><br>I hope this small website can bring a little comfort and rest to your day. Thank you sincerely for using it.",
        about_cheer: "Send a message of support to the developer!",

        // Science
        science_intro: "Did you know that ASMR and white noise are not just placebo effects? We introduce the healing mechanisms of sound revealed by neuroscience and psychology research.",
        science_sec1_title: "01. Neuroscientific Mechanism of ASMR",
        science_sec1_desc: "According to fMRI studies, the brain's reward system and areas responsible for emotional empathy are activated when reacting to ASMR triggers. This is a complex physiological response beyond simple listening.",
        science_sec1_list1: "<strong>Parasympathetic Dominance:</strong> Reduced heart rate and changes in skin conductance indicate a shift from 'Fight-or-Flight' to 'Rest-and-Digest' state.",
        science_sec1_list2: "<strong>Brainwave Entrainment:</strong> Rhythmic sounds guide brainwaves from unstable Beta waves to stable Alpha (8-12Hz) or Theta waves (4-8Hz), creating a state similar to meditation.",
        science_sec1_list3: "<strong>Neurotransmitters:</strong> The pleasant 'Tingle' sensation promotes the secretion of Dopamine (pleasure) and Oxytocin (comfort), alleviating depression and anxiety.",
        science_sec2_title: "02. Color of Noise",
        science_sec2_desc: "Like the spectrum of light, sound has its own 'color' depending on frequency distribution. It is important to find the noise color that suits your condition.",
        science_white_title: "⚪ White Noise",
        science_white_desc: "Has equal energy across all audible frequencies. Similar to TV static, it has a strong masking effect, excellent for improving concentration.",
        science_pink_title: "🌸 Pink Noise",
        science_pink_desc: "Energy decreases inversely with each octave. Most similar to nature sounds like rain and waves, enhancing sleep brainwave stability.",
        science_brown_title: "🟤 Brown Noise",
        science_brown_desc: "High frequencies are dampened more than pink noise. Deep sounds like waterfalls or thunder are effective for tinnitus relief and deep sleep.",
        science_sec3_title: "03. Auditory Masking & Habituation",
        science_sec3_desc: "Why does noise help focus? The key is 'Auditory Masking'. White noise reduces the gap (SNR) between sudden external noises (Peak Noise) and background noise, preventing the brain from being startled. Also, through 'Habituation', the brain ignores repetitive, non-threatening stimuli, recognizing white noise as a safe background.",
        btn_science_listen: "Listen to scientific healing sounds",

        // Guide
        guide_sec1_title: "⚠️ Precautions for hearing protection",
        guide_sec1_list1: "Maintain moderate volume (below 60%)",
        guide_sec1_list2: "60-60 Rule (Rest after 60 mins)",
        guide_sec1_list3: "Use timer when sleeping",
        guide_sec2_title: "💡 Utilizing My ASMR Space 200%",
        guide_mix_title: "1. Sound Mixing",
        guide_mix_desc: "Mix sounds to feel a richer sense of space.",
        guide_mix_list1: "<strong>Rainy Cabin:</strong> Rain(70%) + Fire(40%)",
        guide_mix_list2: "<strong>Beach Reading:</strong> Waves(60%) + Page Turning(30%) + Birds(20%)",
        guide_mix_list3: "<strong>Late Night Studio:</strong> Rain(50%) + Typing(80%)",
        guide_pomo_title: "2. Pomodoro Technique",
        guide_pomo_desc: "Try using the timer function when studying or working. Set a timer for 25 or 30 minutes and turn on typing or rain sounds as background noise. When the sound stops, take a 5-minute break. White noise blocks ambient noise and improves immersion.",
        guide_meditation_title: "3. Meditation and Breathing",
        guide_meditation_desc: "Wave or rain sounds are great guides for meditation breathing. Inhale when the wave comes in, exhale when it goes out. Breathing to the rhythm of nature stabilizes heart rate and reduces stress.",
        guide_mobile_title: "📱 Mobile & Offline Use",
        guide_mobile_desc: "Works perfectly on both the mobile app and web browsers (Chrome, Safari, etc.). Audio files are optimized to save data, and once loaded, sounds are stored in the cache to minimize data consumption.<br><br><strong>Tip:</strong> For iPhone (iOS) users, background playback is supported in the Control Center. Turn off the screen and listen to the sound to save battery.",
        btn_guide_listen: "Go listen to my sounds",

        // Glossary
        glossary_asmr_title: "ASMR (Autonomous Sensory Meridian Response)",
        glossary_asmr_desc: "An acronym for 'Autonomous Sensory Meridian Response', it refers to a feeling of pleasure and psychological stability felt in the brain in response to specific audiovisual stimuli. It is often accompanied by a pleasant tingling sensation (Tingle) that typically begins on the scalp and moves down the back of the neck and upper spine. According to fMRI studies, ASMR activates brain regions associated with the reward circuit (such as the medial prefrontal cortex), eliciting neural responses similar to emotions related to social bonding and care-giving.",
        glossary_white_title: "White Noise",
        glossary_white_desc: "Noise that has equal energy intensity across all audible frequency bands (20Hz to 20,000Hz). It sounds similar to TV static ('shhh') and is highly effective for 'Auditory Masking' because it contains all frequencies, effectively covering up sudden external noises. For this reason, it is most widely used for improving concentration and blocking ambient noise.",
        glossary_pink_title: "Pink Noise",
        glossary_pink_desc: "Noise where the energy becomes stronger at lower frequencies (decreasing by 3dB per octave). Its softer high-frequency range makes it sound more similar to natural sounds like rain, waterfalls, and wind than white noise. It is often perceived as more comfortable to the ear than white noise, making it widely used for long-term listening and sleep induction.",
        glossary_brown_title: "Brown Noise (Brownian/Red Noise)",
        glossary_brown_desc: "Noise with an even stronger emphasis on lower frequencies than pink noise (decreasing by 6dB per octave). Its name derives from 'Brownian motion', and it is characterized by a deep, rumbling sound. It is similar to the sound of a powerful waterfall, thunder, or strong wind, and is particularly effective at blocking low-frequency noises. It can be helpful for tinnitus relief and inducing deep sleep.",
        glossary_trigger_title: "Trigger",
        glossary_trigger_desc: "Refers to a specific stimulus that induces an ASMR response. Triggers are highly personal and can be auditory (whispering, tapping), visual (slow hand movements), or tactile (head massage). Finding the right triggers for oneself is key to the ASMR experience.",
        glossary_tingle_title: "Tingle",
        glossary_tingle_desc: "The most characteristic physical response of ASMR, a type of paresthesia described as 'pleasant goosebumps' or an 'electric-like tingling sensation'. It typically originates in the scalp and spreads down the neck and along the spine, accompanied by a deep sense of relaxation and calm.",
        glossary_binaural_title: "Binaural Beats",
        glossary_binaural_desc: "A phenomenon where the brain perceives a third wave corresponding to the- difference between two slightly different frequencies played into the left and right ears respectively. This 'Brainwave Entrainment' technique is known to guide the brain into specific states (Alpha waves: relaxation, Theta waves: meditation, Delta waves: deep sleep). Headphones or earphones are essential to experience the effect.",
        glossary_notalking_title: "No Talking",
        glossary_notalking_desc: "ASMR content composed solely of non-verbal sounds such as objects, nature, or mechanical noises, without any human speech (including whispering). It is preferred by users who want to immerse themselves purely in the sound without the cognitive load of processing language, or by those who feel a barrier with foreign language content.",

        // Notice, FAQ, etc.
        notice_v3_title: "v1.3.0 Sound Update",
        notice_v3_date: "2026.02.03",
        notice_v3_desc: "New healing sounds added",
        notice_v3_list1: "Added Pencil sound and Space sound",
        notice_v2_title: "v1.2.0 Player Bar Major Update",
        notice_v2_date: "2026.02.01",
        notice_v2_desc: "Player bar design and usability improvements",
        notice_v2_list1: "Floating glass design & Individual volume control",
        notice_v2_list2: "Favorites in player bar & UI optimization",
        notice_v1_title: "v1.1.0 Integrated Update",
        notice_v1_date: "2026.01.31",
        notice_v1_desc: "Major features integration & improvement",
        notice_v1_list1: "Multi-language support & Sleep Timer",
        notice_v1_list2: "Crickets sound added & UI improvements",
        notice_open_title: "My ASMR Space Open!",
        notice_open_date: "2026.01.30",
        notice_open_desc: "Free ASMR site launch",
        notice_open_list_title: "Basic sounds provided (Rain, Fire, etc.)",
        faq_q1: "Q. Is this site free to use?",
        faq_a1: "Yes, all features and sounds on My ASMR Space are provided 100% free of charge. You can use it immediately without signing up or logging in. Minimal ads may be included to maintain the server, but we place them carefully so as not to disturb your relaxation.",
        faq_q2: "Q. Is there an app version available?",
        faq_a2: "Yes, we support both the Android application and web browsers (Mobile/PC). You can download the app from the Google Play Store or use it directly on the web without installation. iPhone users can use the 'Add to Home Screen' feature in Safari for an app-like experience.",
        faq_q3: "Q. Can I play sounds offline?",
        faq_a3: "Basically, an internet connection is required. However, thanks to browser caching technology, sounds you've played once are temporarily stored to minimize data usage. Full offline playback support is planned for a future app update.",
        faq_q4: "Q. The sound keeps stopping or cutting out.",
        faq_a4: "On mobile devices, audio stops often occur due to 'Battery Optimization'. This restricts background activity when the screen is off. Please exclude your browser app from battery optimization in Settings. Also, check your internet connection stability.",
        faq_q5: "Q. Can you add new sounds on request?",
        faq_a5: "Absolutely! User feedback is our driving force. Please submit your requested sounds (e.g., library noise, cat purring) via the 'Contact' form at the bottom of the main page. We will select high-quality, copyright-free sounds and reflect them in the next update.",
        faq_q6: "Q. Can I use these sounds in YouTube videos or other content?",
        faq_a6: "The sounds provided are either open license (CC0) or custom-edited audio. Personal listening for study or sleep is always welcome. However, extracting files for redistribution or commercial use (like YouTube background music) is prohibited. Please contact us for commercial inquiries.",
        faq_more_questions: "Do you have more questions?",

        privacy_intro: "My ASMR Space (hereinafter referred to as the \"Site\") values users' personal information and complies with the Act on Promotion of Information and Communications Network Utilization and Information Protection.",
        privacy_sec1_title: "1. Personal Data Collection",
        privacy_sec1_desc: "No personal data required.",
        privacy_sec2_title: "2. Cookies",
        privacy_sec2_desc: "Cookies may be used for Google AdSense.",
        privacy_list1: "Users can opt out of personalized advertising in Google's Ad Settings.",
        privacy_list2: "Or visit www.aboutads.info to opt out of third-party vendor's use of cookies.",
        sitemap_menu_title: "Main Menu",
        sitemap_info_title: "Information & Guide",

        quotes: [
            "It's okay to rest for a while. You are doing well enough.",
            "Live today at your own pace, comfortably.",
            "A small rest becomes great energy.",
            "The world is beautiful enough just with your existence.",
            "Put your worries aside for a moment and focus on the sound.",
            "Tomorrow will shine brighter than today.",
            "Comfort your tired heart. You did well today.",
            "Happiness is frequency, not intensity. Feel the small happiness.",
            "Take a deep breath and exhale slowly.",
            "It's okay to be a little slow. You're already doing great.",
            "Just by enduring today, you are a truly amazing person.",
            "Resting is also part of growth. It's not stopping, it's preparing.",
            "It's okay not to be perfect. You are precious enough as you are.",
            "You don't have to rush. You have your own speed.",
            "Even a small step, you who don't stop are already cool.",
            "Today's best will be tomorrow's pride.",
            "It's okay to be a little kinder to yourself.",
            "The times you endured are already the answer.",
            "Even here, you are continuing to grow."
        ]
    },
    ja: {
        title: "My ASMR Space",
        subtitle: "自分だけの音でリラックス。",
        site_desc: "リラックスと集中のための無料サウンドサービスです。ウェブとアプリの両方でご利用いただけます。",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        play: "再生",
        stop: "停止",
        stop_all: "全停止",
        now_playing: "再生中",
        theme_dark: "ダークモード",
        theme_light: "ライトモード",
        btn_home: "ホームへ",
        btn_msg: "メッセージを送る",
        btn_timer: "タイマー",
        send_btn: "送信",
        email_label: "メール",
        email_placeholder: "返信先メールアドレス",
        msg_label: "メッセージ",
        msg_placeholder: "お問い合わせ内容",
        my_saved: "お気に入り",
        mix_title: "おすすめミックス",
        mix_rainy_cabin: "雨の小屋",
        mix_beach_reading: "海辺の読書",
        mix_night_studio: "深夜の作業室",
        btn_save_mix: "現在のミックスを保存",
        my_mix_title: "マイミックス",
        prompt_mix_name: "ミックス名を入力してください：",
        alert_no_sound: "再生中の音がありません。",
        no_custom_mixes: "保存されたミックスはありません。",
        btn_confirm: "確認",
        btn_cancel: "キャンセル",
        msg_delete_confirm: "本当に削除しますか？",
        search_placeholder: "ミックスを検索...",
        msg_saved: "保存しました。",
        search_sound_placeholder: "サウンド検索 (名前, タグ)...",
        msg_no_result: "検索結果がありません。",
        timer_set: "{minutes}分後に音が消えます。",
        timer_added: "{minutes}分が追加されました。",
        timer_canceled: "タイマーがキャンセルされました。",
        timer_hour: "時間",
        timer_min: "分",
        btn_start: "開始",
        btn_stop: "停止",
        btn_reset: "リセット",
        btn_pause: "一時停止",
        btn_resume: "再開",
        loading_msg: "空間を準備中...",
        sitemap: "サイトマップ",
        contact_link: "お問い合わせ",
        privacy: "プライバシーポリシー",
        footer_about: "制作者紹介",
        footer_science: "ASMRの科学",
        footer_guide: "利用ガイド",
        footer_glossary: "用語辞典",
        footer_faq: "FAQ",
        footer_notice: "お知らせ",
        
        about_title: "👨‍💻 制作者紹介",
        science_title: "🧠 ASMRの科学",
        guide_title: "🎧 利用ガイド",
        glossary_title: "📖 ASMR用語辞典",
        faq_title: "❓ よくある質問 (FAQ)",
        notice_title: "📢 お知らせ",
        sitemap_title: "🗺️ サイトマップ",
        privacy_title: "プライバシーポリシー",
        contact_title: "バグ報告・お問い合わせ",

        tag_nature: "自然",
        tag_sleep: "睡眠",
        tag_relax: "リラックス",
        tag_warm: "暖かい",
        tag_morning: "朝",
        tag_focus: "集中",
        tag_study: "勉強",
        tag_calm: "落ち着く",
        tag_work: "作業",
        tag_night: "夜",
        sound_rain: "雨音",
        sound_fire: "焚き火",
        sound_bird: "鳥のさえずり",
        sound_book: "本をめくる音",
        sound_wave: "波の音",
        sound_keyboard: "タイピング",
        sound_bug: "虫の音",
        sound_space: "宇宙の音",
        sound_pencil: "鉛筆の音",

        asmr_title: "ASMRとホワイトノイズとは？",
        asmr_desc: "ASMRは心理的な安定を誘導する音です。雨音や焚き火などのホワイトノイズは、騒音を遮断し、集中力や睡眠を助けます。",
        home_why_title: "なぜ My ASMR Space なのか？",
        home_why_desc: "My ASMR Spaceは、アプリのインストールや会員登録なしで、ウェブブラウザですぐに利用できる無料のヒーリングサウンドサービスです。雨音、焚き火、カフェの雑音など、様々な高品質な音源を自分で組み合わせて音量を調節し、自分だけの最適なリラックス空間を作ることができます。勉強、睡眠、瞑想、読書など、状況に合わせた雰囲気を作ってみてください。",
        home_sleep_title: "睡眠と不眠症の緩和",
        home_sleep_desc: "寝る前、複雑な考えで寝返りを打っていませんか？雨音や波の音のような自然の音は、脳波を安定させ、副交感神経を活性化して深い睡眠（Deep Sleep）を誘導します。タイマー機能を設定して、快適に眠りにつきましょう。",
        home_focus_title: "集中力向上とホワイトノイズ",
        home_focus_desc: "静かすぎる空間よりも、適度な騒音が集中力を高めるという研究結果があります。これを「ホワイトノイズ（White Noise）」効果と呼びます。タイピング音や鉛筆の音は、周囲の不規則な生活騒音を覆い隠し（マスキング効果）、仕事や勉強への没入度を最大化します。",
        tips_title: "活用法",
        tip_focus: "<strong>集中時：</strong> タイピング音などを活用。",
        tip_relax: "<strong>リラックス：</strong> 雨音と焚き火で落ち着く。",
        tip_sleep: "<strong>睡眠：</strong> 音量を下げて自然音を。",

        about_quote: "「複雑な世の中で、小さな休息を作りたかったです。」",
        about_intro: "こんにちは、<strong>My ASMR Space</strong>を開発したパク・ジウです。ウェブ開発を勉強している学生です。",
        about_story: "広告なしで、好きな音だけを選んでミックスできるシンプルなウェブサイトを作りたかったです。",
        about_phil_title: "開発哲学：Simple & Relax",
        about_phil_desc: "最も重要なのは「シンプルさ」です。複雑な設定なしですぐにリラックスできるべきです。",
        about_goal_title: "今後の目標",
        about_goal_desc: "ユーザーの皆様のリクエストを反映し、様々な音と機能を継続的にアップデートする予定です。",
        about_cheer: "開発者に応援メッセージを送ってください！",

        science_intro: "ASMRとホワイトノイズが単なるプラシーボ効果ではないことをご存知ですか？脳科学と心理学の研究が明らかにした音の治癒メカニズムを詳しく紹介します。",
        science_sec1_title: "01. ASMRの脳科学的メカニズム",
        science_sec1_desc: "fMRI研究によると、ASMRトリガーに反応する際、脳の報酬系と情緒的共感を担当する領域が活性化されます。これは単なる聴取を超えた複合的な生理反応です。",
        science_sec1_list1: "<strong>副交感神経優位：</strong> 心拍数の減少と皮膚伝導度の変化は、身体が「闘争・逃走」状態から「休息・消化」状態へ転換することを意味します。",
        science_sec1_list2: "<strong>脳波の同調：</strong> 規則的なリズムの音は、脳波を不安定なベータ波から安定したアルファ波（8-12Hz）やシータ波（4-8Hz）へと誘導し、瞑想に近い状態を作ります。",
        science_sec1_list3: "<strong>神経伝達物質：</strong> 心地よい「ティングル」は、ドーパミン（快楽）とオキシトシン（安らぎ）の分泌を促進し、憂鬱感や不安を緩和します。",
        science_sec2_title: "02. ノイズの色 (Color of Noise)",
        science_sec2_desc: "光のスペクトルのように、音も周波数分布によって固有の「色」を持ちます。自分の状態に合ったノイズカラーを見つけることが重要です。",
        science_white_title: "⚪ ホワイトノイズ",
        science_white_desc: "全可聴周波数帯域で同じエネルギーを持ちます。テレビの砂嵐音に似ており、強力な遮蔽効果で集中力向上に優れています。",
        science_pink_title: "🌸 ピンクノイズ",
        science_pink_desc: "オクターブごとにエネルギーが反比例して減少します。雨音や波の音など自然音に最も近く、睡眠脳波の安定性を高めます。",
        science_brown_title: "🟤 ブラウンノイズ",
        science_brown_desc: "ピンクノイズより高音域がさらに減衰した音です。滝の音や雷鳴のように重厚で深い響きを与え、耳鳴りの緩和や深い熟睡に効果的です。",
        science_sec3_title: "03. 聴覚マスキングと習慣化",
        science_sec3_desc: "なぜ騒音が集中を助けるのでしょうか？核心は「聴覚マスキング」です。ホワイトノイズは突発的な外部騒音と背景騒音の差（SNR）を減らし、脳が騒音に驚かないようにします。また、脳は反復的で脅威のない刺激を無視する「習慣化（Habituation）」過程を通じて、ホワイトノイズを安全な背景として認識します。",
        btn_science_listen: "科学的なヒーリングサウンドを聴く",

        guide_sec1_title: "⚠️ 聴覚保護のための注意事項",
        guide_sec1_list1: "適正音量を維持（最大60%以下）",
        guide_sec1_list2: "60-60の法則（60分聴取後に休憩）",
        guide_sec1_list3: "睡眠時はタイマー使用を推奨",
        guide_sec2_title: "💡 My ASMR Space 200%活用術",
        guide_mix_title: "1. 自分だけの音の組み合わせ",
        guide_mix_desc: "複数の音を混ぜて豊かな空間を感じてください。",
        guide_mix_list1: "<strong>雨の小屋：</strong> 雨音(70%) + 焚き火(40%)",
        guide_mix_list2: "<strong>海辺の読書：</strong> 波の音(60%) + 本をめくる音(30%) + 鳥のさえずり(20%)",
        guide_mix_list3: "<strong>深夜の作業室：</strong> 雨音(50%) + タイピング(80%)",
        guide_pomo_title: "2. ポモドーロ・テクニック",
        guide_pomo_desc: "勉強や仕事の際にタイマー機能を活用してみてください。25分または30分のタイマーを設定し、タイピング音や雨音をBGMとして流します。音が止まったら5分間休憩します。ホワイトノイズは周囲の騒音を遮断し、没入感を高めます。",
        guide_meditation_title: "3. 瞑想と呼吸",
        guide_meditation_desc: "波の音や雨音は瞑想呼吸の良いガイドになります。波が押し寄せるときに息を吸い、引くときに吐いてみてください。自然の音に合わせて呼吸すると、心拍数が安定しストレスが減少します。",
        guide_mobile_title: "📱 モバイルおよびオフライン使用",
        guide_mobile_desc: "モバイルアプリとウェブブラウザ（Chrome、Safariなど）の両方で完璧に動作します。オーディオファイルはデータ節約のために最適化されており、一度読み込まれるとキャッシュに保存され、データ消費を最小限に抑えます。<br><br><strong>ヒント：</strong> iPhone（iOS）ユーザーは、コントロールセンターでバックグラウンド再生が可能です。画面をオフにして音だけを聞き、バッテリーを節約してください。",
        btn_guide_listen: "自分だけの音を聴きに行く",

        glossary_asmr_title: "ASMR (自律感覚絶頂反応)",
        glossary_asmr_desc: "「自律感覚絶頂反応」の略で、特定の視聴覚刺激に反応して脳が感じる快感や心理的安定感を意味します。主に頭皮や首の後ろから始まり、背中に広がる心地よいゾクゾク感（ティングル）を伴います。fMRI研究によると、ASMRは脳の報酬回路に関連する領域（内側前頭前皮質など）を活性化させ、社会的絆やケアに関連する感情と類似した神経反応を引き起こします。",
        glossary_white_title: "ホワイトノイズ (White Noise)",
        glossary_white_desc: "全ての可聴周波数帯域（20Hz〜20,000Hz）で同じ強度のエネルギーを持つノイズです。「シー」というテレビの砂嵐音に似ており、全ての周波数を含むため、突発的な外部の音を効果的に覆い隠す「聴覚マスキング」効果に優れています。このため、集中力向上や周囲の騒音遮断に最も広く使用されます。",
        glossary_pink_title: "ピンクノイズ (Pink Noise)",
        glossary_pink_desc: "低周波数帯域ほどエネルギーが強くなる（オクターブあたり3dB減少）ノイズです。ホワイトノイズよりも高音域が柔らかいため、雨音、滝の音、風の音など、自然の音により近く聞こえます。ホワイトノイズよりも耳に心地よく感じられるため、長時間の聴取や睡眠導入に広く使用されます。",
        glossary_brown_title: "ブラウンノイズ (Brownian/Red Noise)",
        glossary_brown_desc: "ピンクノイズよりもさらに低音域が強調された（オクターブあたり6dB減少）ノイズです。「ブラウン運動」に由来し、深く壮大な音が特徴です。激しい滝、雷、強風の音に似ており、特に低周波の騒音を遮断するのに効果的で、耳鳴りの緩和や深い睡眠の誘導に役立つことがあります。",
        glossary_trigger_title: "トリガー (Trigger)",
        glossary_trigger_desc: "ASMR反応を誘発する特定の刺激を意味します。トリガーは個人差が非常に大きく、聴覚的（ささやき、タッピング）、視覚的（ゆっくりとした手の動き）、触覚的（ヘッドマッサージ）など様々です。自分に合ったトリガーを見つけることがASMR体験の鍵です。",
        glossary_tingle_title: "ティングル (Tingle)",
        glossary_tingle_desc: "ASMRの最も特徴的な身体反応で、「心地よい鳥肌」や「電気が走るようなゾクゾク感」と表現される感覚異常（paresthesia）の一種です。通常、頭皮から始まり、首と脊椎に沿って下に広がり、深いリラクゼーションと安定感を伴います。",
        glossary_binaural_title: "バイノーラルビート (Binaural Beats)",
        glossary_binaural_desc: "左右の耳にわずかに異なる周波数の音をそれぞれ聞かせたとき、脳がその周波数の差に相当する第三の波を認識する現象です。この「脳波エントレインメント」技術により、脳を特定の状態（アルファ波：安定、シータ波：瞑想、デルタ波：深い睡眠）に誘導できるとされています。効果を得るためには、必ずヘッドホンやイヤホンを使用する必要があります。",
        glossary_notalking_title: "ノートーキング (No Talking)",
        glossary_notalking_desc: "人の話声（ささやき声を含む）がなく、物、自然、機械音などの非言語的な音のみで構成されたASMRコンテンツです。言語情報を処理する認知的な負担がないため、音そのものに没頭したいユーザーや、外国語のコンテンツに壁を感じるユーザーに好まれます。",

        notice_v3_title: "v1.3.0 サウンドアップデート",
        notice_v3_date: "2026.02.03",
        notice_v3_desc: "新しいヒーリングサウンドの追加",
        notice_v3_list1: "鉛筆の音、宇宙の音を追加",
        notice_v2_title: "v1.2.0 プレーヤーバー大型アップデート",
        notice_v2_date: "2026.02.01",
        notice_v2_desc: "プレーヤーバーのデザインと利便性の向上",
        notice_v2_list1: "フローティンググラスデザイン＆個別音量調節",
        notice_v2_list2: "プレーヤーバー内のお気に入り＆UI最適化",
        notice_v1_title: "v1.1.0 統合アップデート",
        notice_v1_date: "2026.01.31",
        notice_v1_desc: "主要機能の統合と改善",
        notice_v1_list1: "多言語対応およびスリープタイマー追加",
        notice_v1_list2: "虫の音追加およびUI改善",
        notice_open_title: "My ASMR Space オープン！",
        notice_open_date: "2026.01.30",
        notice_open_desc: "癒しのための無料ASMRサイトオープン",
        notice_open_list_title: "基本サウンド提供（雨音、焚き火など）",
        faq_q1: "Q. 無料ですか？",
        faq_a1: "はい、My ASMR Spaceのすべての機能とサウンドは100％無料で提供されます。会員登録やログインなしですぐにご利用いただけます。サイト運営のために最小限の広告が含まれる場合がありますが、リラックスを妨げないよう配慮しています。",
        faq_q2: "Q. アプリはありますか？",
        faq_a2: "はい、Androidアプリとウェブブラウザ（モバイル/PC）の両方に対応しています。Google Playストアからアプリをダウンロードするか、インストールなしでウェブで直接利用できます。iPhoneユーザーはSafariの「ホーム画面に追加」機能を使用すると便利です。",
        faq_q3: "Q. オフライン再生は？",
        faq_a3: "基本的にはインターネット接続が必要です。ただし、ブラウザのキャッシュ機能により、一度再生した音は一時的に保存され、データ通信量を抑えることができます。完全なオフライン再生機能は、今後のアップデートで対応予定です。",
        faq_q4: "Q. 音が途切れます。",
        faq_a4: "モバイル端末で音が止まる主な原因は「バッテリー最適化」機能です。画面オフ時にバックグラウンド再生が制限されるため、設定でブラウザアプリを最適化の対象外に設定してください。また、インターネット接続が不安定な場合もご確認ください。",
        faq_q5: "Q. 音の追加リクエストは？",
        faq_a5: "もちろんです！ユーザーの皆様のご意見はいつでも歓迎します。メインページ下部の「お問い合わせ」フォームからご希望の音（例：図書館の音、猫のゴロゴロ音など）をお寄せいただければ、著作権の問題がない高品質な音源を探してアップデートに反映させていただきます。",
        faq_q6: "Q. YouTubeで使えますか？",
        faq_a6: "当サイトの音源はオープンライセンス（CC0）または独自に編集されたものです。個人的な鑑賞目的では自由に使用できますが、音源ファイルを抽出して再配布したり、YouTube動画などで商用利用することは禁止されています。商用利用をご希望の場合は別途お問い合わせください。",
        faq_more_questions: "他にご質問はありますか？",
        privacy_intro: "My ASMR Space（以下「当サイト」）は、利用者の個人情報を重視し、「情報通信網利用促進および情報保護」に関する法律を遵守しています。",
        privacy_sec1_title: "1. 個人情報の収集",
        privacy_sec1_desc: "登録不要で、個人情報を要求しません。",
        privacy_sec2_title: "2. クッキー",
        privacy_sec2_desc: "Google AdSenseのためにクッキーを使用する場合があります。",
        privacy_list1: "ユーザーはGoogleの広告設定でパーソナライズ広告を無効にできます。",
        privacy_list2: "またはwww.aboutads.infoで第三者配信事業者のクッキーを無効にできます。",
        sitemap_menu_title: "メインメニュー",
        sitemap_info_title: "情報・ガイド",

        quotes: [
            "少し休んでも大丈夫です。あなたは十分よくやっています。",
            "今日一日もあなたのペースで、気楽に。",
            "小さな休息が大きなエネルギーになります。",
            "あなたの存在だけで世界は十分美しいです。",
            "心配は少し置いておいて、今この瞬間の音に集中してみてください。",
            "明日は今日よりもっと輝くでしょう。",
            "疲れた心を癒してください。お疲れ様でした、今日も。",
            "幸せは強度ではなく頻度です。些細な幸せを感じてみてください。",
            "深く息を吸って、ゆっくり吐き出してみてください。",
            "少し遅くても大丈夫です。あなたはすでに十分よくやっています。",
            "今日を耐え抜いただけでも、あなたは本当にすごい人です。",
            "休む時間も成長の一部です。止まっているのではなく準備中なのです。",
            "完璧でなくても大丈夫です。今のあなたも十分大切です。",
            "焦らなくてもいいです。あなただけの速度があります。",
            "小さな一歩でも、止まらないあなたはすでにかっこいいです。",
            "今日の最善が明日の自慢になるでしょう。",
            "自分自身にもう少し優しくしても大丈夫です。",
            "あなたが耐えてきた時間がすでに答えです。",
            "今この場所でも、あなたは成長し続けています。"
        ]
    },
    zh: {
        title: "My ASMR Space",
        subtitle: "用属于你的声音放松。",
        site_desc: "免费提供放松和集中的声音。支持 App 和 Web。",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        play: "播放",
        stop: "停止",
        stop_all: "全部停止",
        now_playing: "正在播放",
        theme_dark: "深色模式",
        theme_light: "浅色模式",
        btn_home: "返回首页",
        btn_msg: "发送信息",
        btn_timer: "定时器",
        send_btn: "发送",
        email_label: "邮箱",
        email_placeholder: "您的邮箱地址",
        msg_label: "留言",
        msg_placeholder: "请输入内容",
        my_saved: "收藏夹",
        mix_title: "推荐混合音效",
        mix_rainy_cabin: "雨中小屋",
        mix_beach_reading: "海边读书",
        mix_night_studio: "深夜工作室",
        btn_save_mix: "保存当前混音",
        my_mix_title: "我的混音",
        prompt_mix_name: "请输入混音名称：",
        alert_no_sound: "没有正在播放的声音。",
        no_custom_mixes: "没有保存的混音。",
        btn_confirm: "确认",
        btn_cancel: "取消",
        msg_delete_confirm: "确定要删除吗？",
        search_placeholder: "搜索混音...",
        msg_saved: "保存成功。",
        search_sound_placeholder: "搜索声音 (名称, 标签)...",
        msg_no_result: "未找到搜索结果。",
        timer_set: "声音将在{minutes}分钟后关闭。",
        timer_added: "已添加 {minutes} 分钟。",
        timer_canceled: "计时器已取消。",
        timer_hour: "小时",
        timer_min: "分钟",
        btn_start: "开始",
        btn_stop: "停止",
        btn_reset: "重置",
        btn_pause: "暂停",
        btn_resume: "继续",
        loading_msg: "正在准备空间...",
        sitemap: "网站地图",
        contact_link: "联系我们",
        privacy: "隐私政策",
        footer_about: "关于我们",
        footer_science: "ASMR 科学",
        footer_guide: "使用指南",
        footer_glossary: "词典",
        footer_faq: "FAQ",
        footer_notice: "公告",
        
        about_title: "👨‍💻 关于我们",
        science_title: "🧠 ASMR 科学",
        guide_title: "🎧 使用指南",
        glossary_title: "📖 ASMR 词典",
        faq_title: "❓ 常见问题 (FAQ)",
        notice_title: "📢 公告与更新",
        sitemap_title: "🗺️ 网站地图",
        privacy_title: "隐私政策",
        contact_title: "错误报告与咨询",

        tag_nature: "自然",
        tag_sleep: "睡眠",
        tag_relax: "放松",
        tag_warm: "温暖",
        tag_morning: "早晨",
        tag_focus: "专注",
        tag_study: "学习",
        tag_calm: "平静",
        tag_work: "工作",
        tag_night: "夜晚",
        sound_rain: "雨声",
        sound_fire: "柴火",
        sound_bird: "鸟鸣声",
        sound_book: "翻书声",
        sound_wave: "海浪声",
        sound_keyboard: "打字声",
        sound_bug: "虫鸣声",
        sound_space: "宇宙声",
        sound_pencil: "铅笔声",

        asmr_title: "什么是 ASMR？",
        asmr_desc: "ASMR 是一种诱导心理稳定的声音。雨声、打字声等白噪音有助于掩盖噪音，提高注意力或助眠。",
        home_why_title: "为什么选择 My ASMR Space？",
        home_why_desc: "My ASMR Space 是一项免费的治愈声音服务，无需安装应用程序或注册，即可在 Web 浏览器中立即使用。用户可以混合雨声、柴火声、咖啡馆噪音等各种高质量音源，并调节音量，创造自己优化的放松空间。营造适合学习、睡眠、冥想、阅读等情况的氛围。",
        home_sleep_title: "睡眠与缓解失眠",
        home_sleep_desc: "睡前是否因复杂的思绪而辗转反侧？雨声或海浪声等自然声音可以稳定脑波并激活副交感神经，从而诱导深度睡眠 (Deep Sleep)。设置定时器功能，舒适地入睡。",
        home_focus_title: "提高注意力与白噪音",
        home_focus_desc: "研究表明，适度的噪音比完全安静的空间更能提高注意力。这被称为“白噪音 (White Noise)”效应。打字声或铅笔声可以掩盖周围不规则的生活噪音（掩蔽效应），最大限度地提高工作或学习的沉浸感。",
        tips_title: "使用技巧",
        tip_focus: "<strong>集中注意力：</strong> 尝试打字声。",
        tip_relax: "<strong>放松：</strong> 雨声和柴火声。",
        tip_sleep: "<strong>助眠：</strong> 调低音量听自然声。",

        about_quote: "“我想在复杂的世界中创造一个小小的逗号。”",
        about_intro: "你好，我是 <strong>My ASMR Space</strong> 的开发者朴智宇。我是一名学习 Web 开发的学生。",
        about_story: "我想制作一个没有广告、可以混合自己喜欢的声音的简单网站。",
        about_phil_title: "开发理念：Simple & Relax",
        about_phil_desc: "最重要的是“简单”。无需复杂设置即可立即休息。",
        about_goal_title: "未来目标",
        about_goal_desc: "我计划根据用户的反馈持续更新各种声音和功能。",
        about_cheer: "请给开发者发送支持信息！",

        science_intro: "你知道 ASMR 和白噪音不仅仅是安慰剂效应吗？我们为您深入介绍脑科学和心理学研究揭示的声音治愈机制。",
        science_sec1_title: "01. ASMR 的脑科学机制",
        science_sec1_desc: "根据 fMRI 研究，当对 ASMR 触发器产生反应时，大脑的奖励回路和负责情感共鸣的区域会被激活。这是一种超越单纯听觉的复杂生理反应。",
        science_sec1_list1: "<strong>副交感神经优势：</strong> 心率降低和皮肤电导率变化意味着身体从“战斗或逃跑”状态转变为“休息和消化”状态。",
        science_sec1_list2: "<strong>脑波同步：</strong> 有节奏的声音引导脑波从不稳定的贝塔波转变为稳定的阿尔法波 (8-12Hz) 或西塔波 (4-8Hz)，创造类似冥想的状态。",
        science_sec1_list3: "<strong>神经递质分泌：</strong> 愉悦的“酥麻感 (Tingle)”促进多巴胺（快乐）和催产素（安稳）的分泌，缓解抑郁和焦虑。",
        science_sec2_title: "02. 噪音的颜色 (Color of Noise)",
        science_sec2_desc: "就像光谱一样，声音根据频率分布也有其独特的“颜色”。找到适合您状态的噪音颜色很重要。",
        science_white_title: "⚪ 白噪音 (White Noise)",
        science_white_desc: "在所有可听频率范围内具有相同的能量。类似于电视雪花声，具有强大的遮蔽效果，非常适合提高注意力。",
        science_pink_title: "🌸 粉红噪音 (Pink Noise)",
        science_pink_desc: "能量随八度音阶反比减少。最接近雨声、海浪声等自然声音，可提高睡眠脑波的稳定性。",
        science_brown_title: "🟤 棕色噪音 (Brown Noise)",
        science_brown_desc: "高频部分比粉红噪音衰减更多。像瀑布声或雷声一样深沉厚重，对缓解耳鸣和深度睡眠有效。",
        science_sec3_title: "03. 听觉掩蔽与习惯化",
        science_sec3_desc: "为什么噪音有助于集中注意力？核心是“听觉掩蔽 (Auditory Masking)”。白噪音缩小了突发外部噪音与背景噪音之间的差距 (SNR)，防止大脑受到惊吓。此外，大脑通过“习惯化 (Habituation)”过程忽略重复且无威胁的刺激，将白噪音识别为安全的背景。",
        btn_science_listen: "聆听科学的治愈声音",

        guide_sec1_title: "⚠️ 听力保护注意事项",
        guide_sec1_list1: "保持适当音量（最大 60% 以下）",
        guide_sec1_list2: "60-60 法则（收听 60 分钟后休息）",
        guide_sec1_list3: "睡眠时建议使用定时器",
        guide_sec2_title: "💡 200% 利用 My ASMR Space",
        guide_mix_title: "1. 寻找属于你的声音组合",
        guide_mix_desc: "混合多种声音，感受丰富的空间感。",
        guide_mix_list1: "<strong>雨中小屋：</strong> 雨声(70%) + 柴火(40%)",
        guide_mix_list2: "<strong>海边读书：</strong> 海浪声(60%) + 翻书声(30%) + 鸟鸣声(20%)",
        guide_mix_list3: "<strong>深夜工作室：</strong> 雨声(50%) + 打字声(80%)",
        guide_pomo_title: "2. 番茄工作法",
        guide_pomo_desc: "尝试在学习或工作时使用定时器功能。设置25或30分钟的定时器，并播放打字声或雨声作为背景音。当声音停止时，休息5分钟。白噪音可以阻隔环境噪音并提高沉浸感。",
        guide_meditation_title: "3. 冥想与呼吸",
        guide_meditation_desc: "海浪声或雨声是冥想呼吸的好向导。海浪涌来时吸气，退去时呼气。跟随自然的声音呼吸可以稳定心率并减轻压力。",
        guide_mobile_title: "📱 移动和离线使用",
        guide_mobile_desc: "在移动应用程序和 Web 浏览器（Chrome、Safari等）上均可完美运行。音频文件经过优化以节省数据，加载一次后，声音将存储在缓存中，以最大限度地减少数据消耗。<br><br><strong>提示：</strong> iPhone (iOS) 用户可以在控制中心使用后台播放。关闭屏幕只听声音以节省电池。",
        btn_guide_listen: "去听属于我的声音",

        glossary_asmr_title: "ASMR (自发性知觉经络反应)",
        glossary_asmr_desc: "“自发性知觉经络反应”的缩写，指对特定的视听刺激产生反应，大脑感受到的愉悦感和心理稳定感。通常伴随着一种从头皮或后颈开始，向下蔓延至背部的舒适刺痛感（Tingle）。根据fMRI研究，ASMR会激活与大脑奖励回路相关的区域（如内侧前额叶皮层），引发类似于与社会联系和关怀相关的情感神经反应。",
        glossary_white_title: "白噪音 (White Noise)",
        glossary_white_desc: "在所有可听频率范围（20Hz至20,000Hz）内具有相同能量强度的噪音。听起来类似于电视的“沙沙”声，由于包含所有频率，因此在有效覆盖突发外部噪音的“听觉掩蔽”方面效果显著。因此，它被广泛用于提高注意力和阻挡环境噪音。",
        glossary_pink_title: "粉红噪音 (Pink Noise)",
        glossary_pink_desc: "一种在较低频率下能量更强（每八度音阶减少3dB）的噪音。其高频部分比白噪音更柔和，听起来更像雨声、瀑布声和风声等自然声音。它通常被认为比白噪音更悦耳，因此广泛用于长时间聆听和诱导睡眠。",
        glossary_brown_title: "布朗噪音 (Brownian/Red Noise)",
        glossary_brown_desc: "一种比粉红噪音更强调低频的噪音（每八度音阶减少6dB）。其名称源于“布朗运动”，特点是声音深沉、雄厚。类似于强烈的瀑布、雷声或强风声，在阻挡低频噪音方面特别有效，可能有助于缓解耳鸣和诱导深度睡眠。",
        glossary_trigger_title: "触发器 (Trigger)",
        glossary_trigger_desc: "指诱发ASMR反应的特定刺激。触发器因人而异，种类繁多，包括听觉（耳语、敲击）、视觉（缓慢的手部动作）和触觉（头部按摩）等。找到适合自己的触发器是ASMR体验的关键。",
        glossary_tingle_title: "酥麻感 (Tingle)",
        glossary_tingle_desc: "ASMR最典型的身体反应，是一种被描述为“愉悦的鸡皮疙瘩”或“电流般刺痛感”的感觉异常（paresthesia）。它通常从头皮开始，沿着颈部和脊柱向下扩散，并伴有深度的放松和安宁感。",
        glossary_binaural_title: "双耳节拍 (Binaural Beats)",
        glossary_binaural_desc: "当左右耳分别听到频率略有不同的声音时，大脑会感知到相当于两个频率之差的第三种波动。这种“脑波夹带”技术据说可以将大脑引导至特定状态（α波：放松，θ波：冥想，δ波：深度睡眠）。为获得效果，必须使用头戴式耳机或耳塞。",
        glossary_notalking_title: "无人声 (No Talking)",
        glossary_notalking_desc: "仅由物体、自然或机械等非语言声音组成的ASMR内容，不含任何人声（包括耳语）。由于没有处理语言信息的认知负担，因此受到那些希望纯粹沉浸在声音中，或对外国语内容感到障碍的用户的青睐。",

        notice_v3_title: "v1.3.0 声音更新",
        notice_v3_date: "2026.02.03",
        notice_v3_desc: "添加新的治愈声音",
        notice_v3_list1: "添加铅笔声和宇宙声",
        notice_v2_title: "v1.2.0 播放栏重大更新",
        notice_v2_date: "2026.02.01",
        notice_v2_desc: "播放栏设计与易用性改进",
        notice_v2_list1: "悬浮玻璃设计与单独音量控制",
        notice_v2_list2: "播放栏内收藏夹与UI优化",
        notice_v1_title: "v1.1.0 综合更新",
        notice_v1_date: "2026.01.31",
        notice_v1_desc: "主要功能整合与改进",
        notice_v1_list1: "添加多语言支持和睡眠定时器",
        notice_v1_list2: "添加虫鸣声及UI改进",
        notice_open_title: "My ASMR Space 开启！",
        notice_open_date: "2026.01.30",
        notice_open_desc: "免费 ASMR 网站正式开启",
        notice_open_list_title: "提供基本声音（雨声、柴火等）",
        faq_q1: "Q. 免费吗？",
        faq_a1: "是的，My ASMR Space 的所有功能和声音都是 100% 免费提供的。无需注册或登录即可立即使用。为了维护服务器，可能会包含最少的广告，但我们会谨慎放置，以免打扰您的休息。",
        faq_q2: "Q. 有应用程序吗？",
        faq_a2: "是的，我们支持 Android 应用程序和 Web 浏览器（手机/PC）。您可以从 Google Play 商店下载应用程序，也可以直接在网页上使用。iPhone 用户可以使用 Safari 中的“添加到主屏幕”功能获得类似 App 的体验。",
        faq_q3: "Q. 离线播放？",
        faq_a3: "基本上需要互联网连接。但是，通过浏览器缓存技术，播放过的声音会暂时存储以最大限度地减少数据消耗。完整的离线播放功能计划在未来的更新中支持。",
        faq_q4: "Q. 声音中断。",
        faq_a4: "在移动设备上，声音中断通常是由于“电池优化”功能造成的。请在设置中将浏览器应用程序排除在电池优化之外。此外，请检查您的互联网连接是否稳定。",
        faq_q5: "Q. 请求添加声音？",
        faq_a5: "当然！用户的反馈是我们前进的动力。请通过主页底部的“联系我们”表格提交您想要的声音（例如：图书馆噪音、猫咪呼噜声等）。我们将筛选无版权的高质量音源并在下次更新中反映。",
        faq_q6: "Q. 可用于 YouTube 吗？",
        faq_a6: "本网站提供的声音是开放许可 (CC0) 或自行编辑的音源。欢迎个人用于学习或睡眠。但是，禁止提取文件进行再分发或商业用途（如 YouTube 背景音乐）。商业用途请另行联系。",
        faq_more_questions: "还有其他问题吗？",
        privacy_intro: "My ASMR Space（以下简称“本网站”）重视用户的个人信息，并遵守《关于促进信息通信网络利用及信息保护》的法律。",
        privacy_sec1_title: "1. 个人信息收集",
        privacy_sec1_desc: "不收集个人数据。",
        privacy_sec2_title: "2. Cookie",
        privacy_sec2_desc: "Cookie 可能用于 Google AdSense。",
        privacy_list1: "用户可以在 Google 的广告设置页面中选择退出个性化广告。",
        privacy_list2: "或者访问 www.aboutads.info 选择退出第三方供应商的 Cookie 使用。",
        sitemap_menu_title: "主菜单",
        sitemap_info_title: "信息与指南",

        quotes: [
            "稍微休息一下也没关系。你已经做得够好了。",
            "今天也按照你的节奏，舒适地度过。",
            "小小的休息会变成巨大的能量。",
            "仅凭你的存在，世界就已经足够美丽。",
            "暂时放下担忧，专注于此刻的声音。",
            "明天会比今天更耀眼。",
            "抚慰疲惫的心灵。辛苦了，今天。",
            "幸福是频率，而不是强度。感受微小的幸福吧。",
            "深呼吸，然后慢慢呼气。",
            "稍微慢一点也没关系。你已经做得够好了。",
            "仅仅是坚持过今天，你就是一个非常了不起的人。",
            "休息也是成长的一部分。不是停止，而是准备。",
            "不完美也没关系。现在的你也足够珍贵。",
            "不必着急。你有属于你的速度。",
            "即使是一小步，不停歇的你已经很帅了。",
            "今天的尽力将成为明天的骄傲。",
            "对自己稍微宽容一点也没关系。",
            "你坚持下来的时间就是答案。",
            "即使在这里，你也在继续成长。"
        ]
    },
    es: {
        title: "My ASMR Space",
        subtitle: "Relájate con tus propios sonidos.",
        site_desc: "Sonidos gratuitos para relajación y concentración. Disponible en Web y App.",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        play: "Reprod.",
        stop: "Parar",
        stop_all: "Detener todo",
        now_playing: "Reproduciendo",
        theme_dark: "Modo Oscuro",
        theme_light: "Modo Claro",
        btn_home: "Ir a Inicio",
        btn_msg: "Enviar mensaje",
        btn_timer: "Temporizador",
        send_btn: "Enviar",
        email_label: "Correo",
        email_placeholder: "Tu correo electrónico",
        msg_label: "Mensaje",
        msg_placeholder: "Escribe tu mensaje",
        my_saved: "Favoritos",
        mix_title: "Mezclas Recomendadas",
        mix_rainy_cabin: "Cabaña Lluviosa",
        mix_beach_reading: "Lectura en la Playa",
        mix_night_studio: "Estudio Nocturno",
        btn_save_mix: "Guardar mezcla actual",
        my_mix_title: "Mis mezclas",
        prompt_mix_name: "Ingrese el nombre de la mezcla:",
        alert_no_sound: "No hay sonidos reproduciéndose.",
        no_custom_mixes: "No hay mezclas guardadas.",
        btn_confirm: "Confirmar",
        btn_cancel: "Cancelar",
        msg_delete_confirm: "¿Estás seguro de que quieres eliminar?",
        search_placeholder: "Buscar mezclas...",
        msg_saved: "Guardado exitosamente.",
        search_sound_placeholder: "Buscar sonidos (nombre, etiqueta)...",
        msg_no_result: "No se encontraron resultados.",
        timer_set: "El sonido se apagará en {minutes} minutos.",
        timer_added: "Se añadieron {minutes} minutos.",
        timer_canceled: "El temporizador ha sido cancelado.",
        timer_hour: "Hora",
        timer_min: "Min",
        btn_start: "Iniciar",
        btn_stop: "Detener",
        btn_reset: "Reiniciar",
        btn_pause: "Pausa",
        btn_resume: "Reanudar",
        loading_msg: "Preparando el ambiente...",
        sitemap: "Mapa del sitio",
        contact_link: "Contáctenos",
        privacy: "Política de Privacidad",
        footer_about: "Sobre Nosotros",
        footer_science: "Ciencia de ASMR",
        footer_guide: "Guía de Usuario",
        footer_glossary: "Glosario",
        footer_faq: "FAQ",
        footer_notice: "Avisos",
        
        about_title: "👨‍💻 Sobre Nosotros",
        science_title: "🧠 Ciencia de ASMR",
        guide_title: "🎧 Guía de Usuario",
        glossary_title: "📖 Glosario ASMR",
        faq_title: "❓ Preguntas Frecuentes",
        notice_title: "📢 Avisos y Actualizaciones",
        sitemap_title: "🗺️ Mapa del sitio",
        privacy_title: "Política de Privacidad",
        contact_title: "Informe de errores y contacto",

        tag_nature: "Naturaleza",
        tag_sleep: "Dormir",
        tag_relax: "Relajarse",
        tag_warm: "Cálido",
        tag_morning: "Mañana",
        tag_focus: "Enfoque",
        tag_study: "Estudio",
        tag_calm: "Calma",
        tag_work: "Trabajo",
        tag_night: "Noche",
        sound_rain: "Lluvia",
        sound_fire: "Fuego",
        sound_bird: "Pájaros",
        sound_book: "Pasar páginas",
        sound_wave: "Olas",
        sound_keyboard: "Teclado",
        sound_bug: "Grillos",
        sound_space: "Espacio",
        sound_pencil: "Lápiz",

        asmr_title: "¿Qué es ASMR y Ruido Blanco?",
        asmr_desc: "ASMR induce estabilidad psicológica. El ruido blanco como la lluvia ayuda a cubrir ruidos molestos, mejorando la concentración y el sueño.",
        home_why_title: "¿Por qué My ASMR Space?",
        home_why_desc: "My ASMR Space es un servicio de sonido curativo gratuito disponible de inmediato en su navegador web sin instalación de aplicaciones ni registro. Los usuarios pueden mezclar sonidos de alta calidad como lluvia, fuego y ruido de cafetería, y ajustar los volúmenes para crear su propio espacio de relajación optimizado. Cree la atmósfera perfecta para estudiar, dormir, meditar o leer.",
        home_sleep_title: "Sueño y Alivio del Insomnio",
        home_sleep_desc: "¿Das vueltas con pensamientos complejos antes de acostarte? Los sonidos de la naturaleza como la lluvia o las olas estabilizan las ondas cerebrales y activan el sistema nervioso parasimpático para inducir el sueño profundo. Configure la función de temporizador y duerma cómodamente.",
        home_focus_title: "Enfoque y Ruido Blanco",
        home_focus_desc: "La investigación muestra que el ruido moderado mejora la concentración en lugar del silencio total. Esto se llama el efecto 'Ruido Blanco'. Sonidos como escribir o el rasguño de un lápiz enmascaran los ruidos ambientales irregulares (Efecto de Enmascaramiento), maximizando la inmersión en el trabajo o el estudio.",
        tips_title: "Consejos de uso",
        tip_focus: "<strong>Para Concentración:</strong> Prueba sonidos como escribir.",
        tip_relax: "<strong>Para Relajarse:</strong> Usa sonidos de lluvia y fuego.",
        tip_sleep: "<strong>Para Dormir:</strong> Baja el volumen y escucha la naturaleza.",

        about_quote: "\"Quería crear una pequeña pausa en un mundo complejo.\"",
        about_intro: "Hola, soy Park Jiwoo, el desarrollador de <strong>My ASMR Space</strong>. Soy un estudiante que estudia desarrollo web.",
        about_story: "Quería crear un sitio web simple donde pudiera mezclar sonidos sin anuncios para ayudar a concentrarme y relajarme.",
        about_phil_title: "Filosofía: Simple & Relax",
        about_phil_desc: "Lo más importante es la 'simplicidad'. Deberías poder relajarte inmediatamente sin configuraciones complejas.",
        about_goal_title: "Objetivos Futuros",
        about_goal_desc: "Planeo actualizar continuamente sonidos y funciones basándome en los comentarios de los usuarios.",
        about_cheer: "¡Envía un mensaje de apoyo al desarrollador!",

        science_intro: "¿Sabías que el ASMR y el ruido blanco no son solo efectos placebo? Presentamos los mecanismos curativos del sonido revelados por la investigación en neurociencia y psicología.",
        science_sec1_title: "01. Mecanismo Neurocientífico del ASMR",
        science_sec1_desc: "Según estudios de fMRI, el sistema de recompensa del cerebro y las áreas responsables de la empatía emocional se activan al reaccionar a los desencadenantes de ASMR. Esta es una respuesta fisiológica compleja.",
        science_sec1_list1: "<strong>Dominio Parasimpático:</strong> La reducción de la frecuencia cardíaca indica un cambio del estado de 'Lucha o Huida' al de 'Descanso y Digestión'.",
        science_sec1_list2: "<strong>Sincronización de Ondas Cerebrales:</strong> Los sonidos rítmicos guían las ondas cerebrales de Beta inestables a Alfa (8-12Hz) o Theta (4-8Hz) estables, creando un estado similar a la meditación.",
        science_sec1_list3: "<strong>Neurotransmisores:</strong> La agradable sensación de 'Hormigueo' promueve la secreción de Dopamina (placer) y Oxitocina (confort), aliviando la depresión y la ansiedad.",
        science_sec2_title: "02. Color del Ruido",
        science_sec2_desc: "Al igual que el espectro de luz, el sonido tiene su propio 'color' según la distribución de frecuencia. Es importante encontrar el color de ruido que se adapte a tu estado.",
        science_white_title: "⚪ Ruido Blanco",
        science_white_desc: "Tiene igual energía en todas las frecuencias audibles. Similar a la estática de la TV, tiene un fuerte efecto de enmascaramiento, excelente para mejorar la concentración.",
        science_pink_title: "🌸 Ruido Rosa",
        science_pink_desc: "La energía disminuye inversamente con cada octava. Más similar a los sonidos de la naturaleza como la lluvia y las olas, mejorando la estabilidad de las ondas cerebrales del sueño.",
        science_brown_title: "🟤 Ruido Marrón",
        science_brown_desc: "Las frecuencias altas se amortiguan más que en el ruido rosa. Sonidos profundos como cascadas o truenos son efectivos para el alivio del tinnitus y el sueño profundo.",
        science_sec3_title: "03. Enmascaramiento Auditivo y Habituación",
        science_sec3_desc: "¿Por qué el ruido ayuda a concentrarse? La clave es el 'Enmascaramiento Auditivo'. El ruido blanco reduce la brecha (SNR) entre los ruidos externos repentinos y el ruido de fondo. Además, a través de la 'Habituación', el cerebro ignora los estímulos repetitivos y no amenazantes, reconociendo el ruido blanco como un fondo seguro.",
        btn_science_listen: "Escuchar sonidos curativos científicos",

        guide_sec1_title: "⚠️ Precauciones para la protección auditiva",
        guide_sec1_list1: "Mantener un volumen moderado (menos del 60%)",
        guide_sec1_list2: "Regla 60-60 (Descansar después de 60 min)",
        guide_sec1_list3: "Usar temporizador al dormir",
        guide_sec2_title: "💡 Utilizando My ASMR Space al 200%",
        guide_mix_title: "1. Encuentra tu combinación de sonidos",
        guide_mix_desc: "Mezcla sonidos para sentir una sensación de espacio más rica.",
        guide_mix_list1: "<strong>Cabaña Lluviosa:</strong> Lluvia(70%) + Fuego(40%)",
        guide_mix_list2: "<strong>Lectura en la Playa:</strong> Olas(60%) + Pasar páginas(30%) + Pájaros(20%)",
        guide_mix_list3: "<strong>Estudio Nocturno:</strong> Lluvia(50%) + Teclado(80%)",
        guide_pomo_title: "2. Técnica Pomodoro",
        guide_pomo_desc: "Intenta usar la función de temporizador cuando estudies o trabajes. Configura un temporizador de 25 o 30 minutos y pon sonidos de escritura o lluvia como ruido de fondo. Cuando el sonido se detenga, tómate un descanso de 5 minutos. El ruido blanco bloquea el ruido ambiental y mejora la inmersión.",
        guide_meditation_title: "3. Meditación y Respiración",
        guide_meditation_desc: "Los sonidos de olas o lluvia son excelentes guías para la respiración en meditación. Inhala cuando viene la ola, exhala cuando se va. Respirar al ritmo de la naturaleza estabiliza el ritmo cardíaco y reduce el estrés.",
        guide_mobile_title: "📱 Uso móvil y sin conexión",
        guide_mobile_desc: "Funciona perfectamente tanto en la aplicación móvil como en navegadores web (Chrome, Safari, etc.). Los archivos de audio están optimizados para ahorrar datos y, una vez cargados, los sonidos se almacenan en la caché para minimizar el consumo de datos.<br><br><strong>Consejo:</strong> Para los usuarios de iPhone (iOS), la reproducción en segundo plano es compatible en el Centro de control. Apaga la pantalla y escucha el sonido para ahorrar batería.",
        btn_guide_listen: "Ir a escuchar mis sonidos",

        glossary_asmr_title: "ASMR (Respuesta Sensorial Meridiana Autónoma)",
        glossary_asmr_desc: "Acrónimo de 'Respuesta Sensorial Meridiana Autónoma', se refiere a una sensación de placer y estabilidad psicológica que se siente en el cerebro en respuesta a estímulos audiovisuales específicos. A menudo se acompaña de una agradable sensación de hormigueo (Tingle) que generalmente comienza en el cuero cabelludo y desciende por la nuca y la parte superior de la columna. Según estudios de fMRI, el ASMR activa regiones cerebrales asociadas con el circuito de recompensa (como la corteza prefrontal medial), provocando respuestas neuronales similares a las emociones relacionadas con el vínculo social y el cuidado.",
        glossary_white_title: "Ruido Blanco",
        glossary_white_desc: "Ruido que tiene la misma intensidad de energía en todas las bandas de frecuencia audibles (de 20Hz a 20,000Hz). Suena similar a la estática de un televisor ('shhh') y es muy eficaz para el 'Enmascaramiento Auditivo' porque contiene todas las frecuencias, cubriendo eficazmente los ruidos externos repentinos. Por esta razón, es el más utilizado para mejorar la concentración y bloquear el ruido ambiental.",
        glossary_pink_title: "Ruido Rosa",
        glossary_pink_desc: "Ruido donde la energía se vuelve más fuerte en las frecuencias más bajas (disminuyendo 3dB por octava). Su rango de altas frecuencias más suave hace que suene más similar a los sonidos naturales como la lluvia, las cascadas y el viento que el ruido blanco. A menudo se percibe como más cómodo para el oído que el ruido blanco, por lo que se utiliza ampliamente para la escucha a largo plazo y la inducción del sueño.",
        glossary_brown_title: "Ruido Marrón (Brownian/Red Noise)",
        glossary_brown_desc: "Ruido con un énfasis aún mayor en las frecuencias bajas que el ruido rosa (disminuyendo 6dB por octava). Su nombre deriva del 'movimiento browniano' y se caracteriza por un sonido profundo y retumbante. Es similar al sonido de una cascada potente, un trueno o un viento fuerte, y es particularmente eficaz para bloquear ruidos de baja frecuencia. Puede ser útil para aliviar el tinnitus e inducir el sueño profundo.",
        glossary_trigger_title: "Desencadenante (Trigger)",
        glossary_trigger_desc: "Se refiere a un estímulo específico que induce una respuesta ASMR. Los desencadenantes son muy personales y pueden ser auditivos (susurros, golpecitos), visuales (movimientos lentos de las manos) o táctiles (masaje en la cabeza). Encontrar los desencadenantes adecuados para uno mismo es clave para la experiencia ASMR.",
        glossary_tingle_title: "Hormigueo (Tingle)",
        glossary_tingle_desc: "La respuesta física más característica del ASMR, un tipo de parestesia descrita como 'escalofríos agradables' o una 'sensación de hormigueo eléctrico'. Generalmente se origina en el cuero cabelludo y se extiende por el cuello y a lo largo de la columna vertebral, acompañada de una profunda sensación de relajación y calma.",
        glossary_binaural_title: "Pulsos Binaurales",
        glossary_binaural_desc: "Fenómeno en el que el cerebro percibe una tercera onda correspondiente a la diferencia entre dos frecuencias ligeramente distintas que se reproducen en el oído izquierdo y derecho, respectivamente. Se sabe que esta técnica de 'arrastre de ondas cerebrales' (Brainwave Entrainment) guía al cerebro hacia estados específicos (ondas Alfa: relajación, ondas Theta: meditación, ondas Delta: sueño profundo). Es esencial usar auriculares para experimentar el efecto.",
        glossary_notalking_title: "Sin Hablar (No Talking)",
        glossary_notalking_desc: "Contenido de ASMR compuesto únicamente por sonidos no verbales como objetos, naturaleza o ruidos mecánicos, sin ningún discurso humano (incluidos los susurros). Es preferido por los usuarios que desean sumergirse puramente en el sonido sin la carga cognitiva de procesar el lenguaje, o por aquellos que sienten una barrera con el contenido en idiomas extranjeros.",

        notice_v3_title: "v1.3.0 Actualización de sonido",
        notice_v3_date: "2026.02.03",
        notice_v3_desc: "Nuevos sonidos curativos añadidos",
        notice_v3_list1: "Se agregaron sonido de lápiz y sonido espacial",
        notice_v2_title: "v1.2.0 Gran actualización de la barra de reproducción",
        notice_v2_date: "2026.02.01",
        notice_v2_desc: "Mejoras en el diseño y usabilidad de la barra de reproducción",
        notice_v2_list1: "Diseño de cristal flotante y control de volumen individual",
        notice_v2_list2: "Favoritos en la barra de reproducción y optimización de UI",
        notice_v1_title: "Actualización Integrada v1.1.0",
        notice_v1_date: "2026.01.31",
        notice_v1_desc: "Integración y mejora de funciones principales",
        notice_v1_list1: "Soporte multilingüe y temporizador de sueño",
        notice_v1_list2: "Sonido de grillos y mejora de UI",
        notice_open_title: "¡Apertura de My ASMR Space!",
        notice_open_date: "2026.01.30",
        notice_open_desc: "Apertura del sitio gratuito de ASMR",
        notice_open_list_title: "Sonidos básicos proporcionados (Lluvia, Fuego, etc.)",
        faq_q1: "Q. ¿Es gratis?",
        faq_a1: "Sí, todas las funciones y sonidos de My ASMR Space son 100% gratuitos. Puede usarlos inmediatamente sin registrarse ni iniciar sesión. Se pueden incluir anuncios mínimos para el mantenimiento del servidor, pero los colocamos con cuidado para no perturbar su relajación.",
        faq_q2: "Q. ¿Hay una app?",
        faq_a2: "Sí, admitimos tanto la aplicación de Android como los navegadores web (móvil/PC). Puede descargar la aplicación desde Google Play Store o usarla directamente en la web. Los usuarios de iPhone pueden usar la función 'Agregar a la pantalla de inicio' en Safari.",
        faq_q3: "Q. ¿Reproducción offline?",
        faq_a3: "Básicamente, se requiere conexión a Internet. Sin embargo, gracias a la tecnología de caché del navegador, los sonidos reproducidos se almacenan temporalmente para minimizar el uso de datos. La reproducción completa sin conexión está planeada para una futura actualización.",
        faq_q4: "Q. El sonido se corta.",
        faq_a4: "En dispositivos móviles, el sonido se detiene a menudo debido a la 'Optimización de batería'. Esto restringe la actividad en segundo plano. Excluya su navegador de la optimización de batería en la configuración. Además, verifique su conexión a Internet.",
        faq_q5: "Q. ¿Solicitar sonidos?",
        faq_a5: "¡Por supuesto! Los comentarios de los usuarios son nuestra fuerza impulsora. Envíe sus sonidos solicitados (por ejemplo, ruido de biblioteca, ronroneo de gato) a través del formulario de contacto. Seleccionaremos sonidos de alta calidad y los agregaremos en la próxima actualización.",
        faq_q6: "Q. ¿Uso en YouTube?",
        faq_a6: "Los sonidos proporcionados son de licencia abierta (CC0) o editados por nosotros. El uso personal para estudiar o dormir es bienvenido. Sin embargo, está prohibido extraer archivos para su redistribución o uso comercial. Contáctenos para consultas comerciales.",
        faq_more_questions: "¿Tiene más preguntas?",
        privacy_intro: "My ASMR Space (en adelante, el \"Sitio\") valora la información personal de los usuarios y cumple con la Ley de Promoción de la Utilización de la Red de Información y Comunicaciones y Protección de la Información.",
        privacy_sec1_title: "1. Recopilación de datos personales",
        privacy_sec1_desc: "No se requiere registro, no se solicitan datos personales.",
        privacy_sec2_title: "2. Cookies",
        privacy_sec2_desc: "Se pueden usar cookies para Google AdSense.",
        privacy_list1: "Los usuarios pueden optar por no recibir publicidad personalizada en la configuración de anuncios de Google.",
        privacy_list2: "O visite www.aboutads.info para optar por no participar en el uso de cookies de proveedores externos.",
        sitemap_menu_title: "Menú Principal",
        sitemap_info_title: "Información y Guía",

        quotes: [
            "Está bien descansar un rato. Lo estás haciendo suficientemente bien.",
            "Vive hoy a tu propio ritmo, cómodamente.",
            "Un pequeño descanso se convierte en gran energía.",
            "El mundo es suficientemente hermoso solo con tu existencia.",
            "Deja de lado tus preocupaciones por un momento y concéntrate en el sonido de este instante.",
            "Mañana brillará más que hoy.",
            "Consuela tu corazón cansado. Lo hiciste bien hoy.",
            "La felicidad es frecuencia, no intensidad. Siente la pequeña felicidad.",
            "Respira hondo y exhala lentamente.",
            "Está bien ser un poco lento. Ya lo estás haciendo genial.",
            "Solo por aguantar hoy, eres una persona realmente increíble.",
            "Descansar también es parte del crecimiento. No es detenerse, es prepararse.",
            "Está bien no ser perfecto. Eres suficientemente precioso tal como eres.",
            "No tienes que apresurarte. Tienes tu propia velocidad.",
            "Incluso un pequeño paso, tú que no te detienes ya eres genial.",
            "Lo mejor de hoy será el orgullo de mañana.",
            "Está bien ser un poco más amable contigo mismo.",
            "Los tiempos que soportaste ya son la respuesta.",
            "Incluso aquí, sigues creciendo."
        ]
    }
};

const soundGrid = document.getElementById('sound-grid');
const favFilterBtn = document.getElementById('fav-filter-btn');
const mixGrid = document.getElementById('mix-grid');
const customMixGrid = document.getElementById('custom-mix-grid');
const saveMixBtn = document.getElementById('save-mix-btn');
const showMixesBtn = document.getElementById('show-mixes-btn');

const mixListModal = document.getElementById('mix-list-modal');
const mixListClose = document.getElementById('mix-list-close');
const mixSearchInput = document.getElementById('mix-search-input');

const mobilePlayerBar = document.getElementById('mobile-player-bar');
const pcPlayerBar = document.getElementById('pc-player-bar');

const modal = document.getElementById('custom-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalInput = document.getElementById('modal-input');
const modalIcons = document.getElementById('modal-icons');
const modalColors = document.getElementById('modal-colors');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');

// Web Audio API 설정
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// 오디오 버퍼 캐시 (무손실 루프를 위해 디코딩된 데이터 저장)
const audioBuffers = {};
const audioLoadPromises = {}; // 중복 로딩 방지용 Promise 캐시

async function loadAudioBuffer(url) {
    if (audioBuffers[url]) return audioBuffers[url];
    if (audioLoadPromises[url]) return audioLoadPromises[url];

    const loadTask = (async () => {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
            audioBuffers[url] = audioBuffer;
            delete audioLoadPromises[url];
            return audioBuffer;
        } catch (e) {
            console.error("Audio load failed:", e);
            delete audioLoadPromises[url];
            return null;
        }
    })();

    audioLoadPromises[url] = loadTask;
    return loadTask;
}

// 앱 시작 시 모든 소리 미리 로딩 (Pre-decoding)
async function preloadAllSounds() {
    console.log("Starting audio preload...");
    const promises = soundsData.map(sound => loadAudioBuffer(sound.file));
    await Promise.all(promises);
    console.log("All sounds preloaded 🚀");
    appState.isLoaded = true;
}

const audioPlayers = {};

// 4. 전역 변수 관리 (State Management)
const appState = {
    currentLang: 'en',
    favorites: [],
    customMixes: [],
    showFavoritesOnly: false,
    activeTag: null,
    activeSounds: [],
    isLoaded: false,
    soundSearchQuery: ''
};

// Helper: Safe LocalStorage
const safeStorage = {
    get: (key, fallback) => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : fallback;
        } catch (e) { return fallback; }
    },
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) { }
    },
    getStr: (key, fallback) => {
        try {
            return localStorage.getItem(key) || fallback;
        } catch (e) { return fallback; }
    },
    setStr: (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch (e) { }
    }
};

// 세션 저장 및 복원 (Session Persistence)
function saveSession() {
    const session = {
        activeSounds: appState.activeSounds,
        volumes: {}
    };
    appState.activeSounds.forEach(id => {
        if (audioPlayers[id]) {
            session.volumes[id] = audioPlayers[id].gainNode.gain.value;
        }
    });
    safeStorage.set('asmr_session', session);
}

function restoreSession() {
    const session = safeStorage.get('asmr_session', null);
    if (session && session.activeSounds && Array.isArray(session.activeSounds)) {
        appState.activeSounds = session.activeSounds.filter(id => soundsData.some(s => s.id === id));
        
        appState.activeSounds.forEach(id => {
            const player = audioPlayers[id];
            if (player && session.volumes && typeof session.volumes[id] === 'number') {
                player.userVolume = session.volumes[id]; // 사용자 볼륨 복원
            }
        });
        updatePlayerBar();
    }
}

// 초기 상태 로드
// 1. URL 파라미터 확인 (SEO 및 공유 링크용)
const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');

let savedLang = langParam || safeStorage.getStr('asmr_lang', null);

if (!savedLang) {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes('ko')) savedLang = 'ko';
    else if (userLang.includes('ja')) savedLang = 'ja';
    else if (userLang.includes('zh')) savedLang = 'zh';
    else if (userLang.includes('es')) savedLang = 'es';
    else savedLang = 'en';
}
appState.currentLang = savedLang;
appState.favorites = safeStorage.get('asmr_favorites', []);
appState.customMixes = safeStorage.get('asmr_custom_mixes', []);

// 소리 검색창 생성 및 초기화
function initSoundSearch() {
    if (!soundGrid) return;
    if (document.getElementById('sound-search-container')) return;

    const container = document.createElement('div');
    container.id = 'sound-search-container';
    container.className = 'w-full max-w-md mx-auto mb-6 relative px-4 sm:px-0';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'sound-search-input';
    input.className = 'w-full px-5 py-3 pl-12 pr-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm';
    input.setAttribute('data-i18n-placeholder', 'search_sound_placeholder');
    input.placeholder = translations[appState.currentLang].search_sound_placeholder;

    const icon = document.createElement('div');
    icon.className = 'absolute left-8 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none';
    icon.innerHTML = '<i data-lucide="search" class="w-5 h-5"></i>';

    const clearBtn = document.createElement('button');
    clearBtn.id = 'search-clear-btn';
    clearBtn.className = 'absolute right-8 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-full transition-colors hidden';
    clearBtn.innerHTML = '<i data-lucide="x" class="w-4 h-4"></i>';
    clearBtn.setAttribute('aria-label', 'Clear search');

    container.appendChild(input);
    container.appendChild(icon);
    container.appendChild(clearBtn);
    soundGrid.parentNode.insertBefore(container, soundGrid);

    clearBtn.addEventListener('click', () => {
        input.value = '';
        appState.soundSearchQuery = '';
        clearBtn.classList.add('hidden');
        input.focus();
        applyFilters();
    });

    input.addEventListener('input', (e) => {
        appState.soundSearchQuery = e.target.value.trim();
        if (appState.soundSearchQuery) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');
        applyFilters();
    });
    
    lucide.createIcons();
}

// Initialize Sound Cards
function initSoundCards() {
    if (!soundGrid) return;
    
    const loader = document.getElementById('main-loader');

    const render = () => {
        soundGrid.innerHTML = '';
        // 1. 그리드 초기화 및 레이아웃 복구 (flex-col -> flex-wrap)
        soundGrid.className = "flex flex-wrap justify-center gap-4 sm:gap-8 w-full px-4";

        soundsData.forEach((sound, index) => {
            const card = document.createElement('div');
            const isFav = appState.favorites.includes(sound.id);
            
            // 2. 모바일 1열 배치 (w-full)
            card.className = 'sound-card w-full sm:w-72 bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-4 shadow-lg border border-white dark:border-slate-700 transition-all card-enter';
            card.style.animationDelay = `${index * 0.05}s`;
            
            card.id = `card-${sound.id}`;
            card.dataset.id = sound.id; 
            
            const tagsHtml = sound.tags.map(tag => 
                `<span class="tag-btn text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" data-tag="${tag}">#<span data-i18n="tag_${tag}">${translations[appState.currentLang]['tag_' + tag] || tag}</span></span>`
            ).join(' ');

            card.innerHTML = `
                <div class="w-full flex justify-between items-start">
                    <div class="w-8"></div>
                    <div class="text-blue-400 mb-2"><i data-lucide="${sound.icon}" class="w-8 h-8 sm:w-12 sm:h-12"></i></div>
                    <button class="fav-btn w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors ${isFav ? 'text-red-500' : 'text-slate-400 dark:text-slate-400'}" data-id="${sound.id}">
                        <i data-lucide="heart" class="w-5 h-5 ${isFav ? 'fill-current' : ''}"></i>
                    </button>
                </div>
                <h3 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white" data-i18n="sound_${sound.id}">${translations[appState.currentLang]['sound_' + sound.id]}</h3>
                <div class="flex gap-2 mb-2 flex-wrap justify-center">${tagsHtml}</div>
                <div class="w-full flex flex-col gap-3 mt-2">
                    <button id="btn-${sound.id}" class="w-full py-2.5 rounded-xl bg-white border border-slate-200 dark:bg-slate-700 dark:border-slate-600 hover:bg-blue-500 hover:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 text-slate-600 dark:text-slate-200 hover:text-white dark:hover:text-white font-medium transition-all shadow-sm flex justify-center items-center gap-2 group">
                        <i data-lucide="play" width="16"></i> <span data-i18n="play">${translations[appState.currentLang].play}</span>
                    </button>
                </div>`;
            soundGrid.appendChild(card);

            // Web Audio API: GainNode만 미리 생성 (Source는 재생 시 생성)
            if (!audioPlayers[sound.id]) {
                const gainNode = audioCtx.createGain();
                gainNode.gain.value = 0.5;
                gainNode.connect(audioCtx.destination);

                audioPlayers[sound.id] = { 
                    gainNode, 
                    source: null, // AudioBufferSourceNode (재생 시 생성)
                    isPlaying: false,
                    isLoading: false, // 로딩 상태 추적 추가
                    userVolume: 0.5, // 사용자 설정 볼륨 저장
                    file: sound.file 
                };
            }

            const playBtn = card.querySelector(`#btn-${sound.id}`);
            const favBtn = card.querySelector('.fav-btn');

            // Accessibility: Add ARIA Labels
            const soundName = translations[appState.currentLang]['sound_' + sound.id] || sound.id;
            playBtn.setAttribute('aria-label', `${soundName} ${translations[appState.currentLang].play}`);
            favBtn.setAttribute('aria-label', `${soundName} ${translations[appState.currentLang].my_saved}`);

            playBtn.addEventListener('click', () => {
                if (audioCtx.state === 'suspended') audioCtx.resume();
                toggleSound(sound.id);
            });
            favBtn.addEventListener('click', () => toggleFavorite(sound.id));
        });

        // 검색 결과 없음 메시지 요소 추가
        const noResult = document.createElement('div');
        noResult.id = 'no-search-result';
        noResult.className = 'hidden w-full py-12 text-center text-slate-500 dark:text-slate-400';
        noResult.innerHTML = `
            <div class="flex flex-col items-center gap-3">
                <i data-lucide="search-x" class="w-12 h-12 opacity-50"></i>
                <p class="text-lg font-medium" data-i18n="msg_no_result">${translations[appState.currentLang].msg_no_result}</p>
            </div>
        `;
        soundGrid.appendChild(noResult);
        
        lucide.createIcons();
        restoreSession(); // 카드가 생성된 후 세션 복원
    };

    if (loader) {
        // 로고 로더를 최소 1초는 보여준 뒤 카드로 전환 (너무 빨리 사라지면 어색함)
        setTimeout(() => {
            loader.style.transition = 'opacity 0.5s ease';
            loader.style.opacity = '0';
            setTimeout(render, 500); // 페이드 아웃 완료 후 카드 렌더링
        }, 1000);
    } else {
        render();
    }

    soundGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.tag-btn');
        if (btn) {
            const tag = btn.dataset.tag;
            filterByTag(tag);
        }
    });
    lucide.createIcons();
}

// 믹스 버튼 렌더링
function renderMixes() {
    if (!mixGrid) return;
    mixGrid.innerHTML = ''; // 로딩 문구 삭제
    soundMixes.forEach((mix, index) => {
        const btn = document.createElement('button');
        btn.className = 'flex items-center gap-2 px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all shadow-sm group card-enter';
        btn.style.animationDelay = `${index * 0.1}s`;
        btn.innerHTML = `
            <i data-lucide="${mix.icon}" class="w-6 h-6 text-blue-400 group-hover:text-blue-500 transition-colors"></i>
            <span class="font-medium" data-i18n="mix_${mix.id}">${translations[appState.currentLang]['mix_' + mix.id]}</span>
        `;
        // Accessibility
        btn.setAttribute('aria-label', `${translations[appState.currentLang]['mix_' + mix.id]} Mix`);
        btn.onclick = () => playMix(mix);
        mixGrid.appendChild(btn);
    });
    lucide.createIcons();
}

function renderCustomMixes() {
    if (!customMixGrid) return;
    customMixGrid.innerHTML = '';

    const searchText = mixSearchInput ? mixSearchInput.value.toLowerCase() : '';
    const filteredMixes = appState.customMixes.filter(mix => mix.name.toLowerCase().includes(searchText));
    
    if (filteredMixes.length === 0) {
        const emptyMsg = translations[appState.currentLang].no_custom_mixes || "No saved mixes.";
        customMixGrid.innerHTML = `<p class="text-slate-500 dark:text-slate-400 text-sm w-full text-center">${emptyMsg}</p>`;
        return;
    }

    filteredMixes.forEach(mix => {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'relative group';
        
        const btn = document.createElement('button');
        btn.className = 'flex items-center gap-2 px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-slate-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all shadow-sm pr-16';
        const iconName = mix.icon || 'music';
        const iconColor = mix.color || '#3b82f6'; // Default blue-500
        
        // 믹스에 포함된 소리 정보 생성
        const soundDetails = Object.entries(mix.sounds).map(([id, vol]) => {
            const sound = soundsData.find(s => s.id === id);
            const name = sound ? (translations[appState.currentLang]['sound_' + id] || id) : id;
            return `${name} (${Math.round(vol * 100)}%)`;
        }).join(', ');

        const soundIcons = Object.keys(mix.sounds).map(id => {
            const sound = soundsData.find(s => s.id === id);
            return sound ? `<i data-lucide="${sound.icon}" class="w-3 h-3"></i>` : '';
        }).join('');

        btn.innerHTML = `
            <div class="flex items-center gap-3">
                <i data-lucide="${iconName}" class="w-6 h-6 transition-colors" style="color: ${iconColor}"></i>
                <div class="flex flex-col items-start">
                    <span class="font-medium">${mix.name}</span>
                    <div class="flex gap-1 text-slate-500 dark:text-slate-400 mt-0.5">
                        ${soundIcons}
                    </div>
                </div>
            </div>
        `;
        btn.title = soundDetails; // 툴팁으로 상세 정보 표시
        btn.setAttribute('aria-label', `Play ${mix.name} Mix`);
        btn.onclick = () => {
            playMix(mix);
            if (mixListModal) {
                mixListModal.classList.add('opacity-0');
                const modalContent = mixListModal.querySelector('div');
                if (modalContent) {
                    modalContent.classList.remove('scale-100');
                    modalContent.classList.add('scale-95');
                }
                setTimeout(() => {
                    mixListModal.classList.add('hidden');
                }, 300);
            }
        };
        
        const editBtn = document.createElement('button');
        editBtn.className = 'absolute right-8 top-2 p-1 text-slate-300 hover:text-blue-500 transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100';
        editBtn.innerHTML = `<i data-lucide="pencil" class="w-4 h-4"></i>`;
        editBtn.setAttribute('aria-label', `Edit ${mix.name}`);
        editBtn.onclick = (e) => {
            e.stopPropagation();
            editCustomMix(mix.id);
        };

        const delBtn = document.createElement('button');
        delBtn.className = 'absolute right-2 top-2 p-1 text-slate-300 hover:text-red-500 transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100';
        delBtn.innerHTML = `<i data-lucide="trash-2" class="w-4 h-4"></i>`;
        delBtn.setAttribute('aria-label', `Delete ${mix.name}`);
        delBtn.onclick = (e) => {
            e.stopPropagation();
            deleteCustomMix(mix.id, mix.name);
        };

        btnContainer.appendChild(btn);
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(delBtn);
        customMixGrid.appendChild(btnContainer);
    });
    lucide.createIcons();
}

let currentModalConfirmHandler = null;
let currentSelectedIcon = 'music';
let currentSelectedColor = '#3b82f6';

const availableIcons = [
    'music', 'headphones', 'cloud-rain', 'flame', 'wind', 
    'moon', 'sun', 'star', 'coffee', 'book', 
    'heart', 'smile', 'zap', 'anchor', 'feather',
    'droplets', 'trees', 'mountain', 'waves'
];

const availableColors = [
    '#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4', 
    '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef', '#f43f5e', '#64748b'
];

function showModal({ title, message, type, placeholder, showIcons, showColors, initialValue, initialIcon, initialColor, onConfirm }) {
    if (!modal) return;
    modalTitle.textContent = title;
    
    // Reset UI
    modalMessage.classList.add('hidden');
    modalInput.classList.add('hidden');
    if (modalIcons) modalIcons.classList.add('hidden');
    if (modalColors) modalColors.classList.add('hidden');
    modalCancel.classList.remove('hidden');
    
    // Initialize state
    currentSelectedColor = initialColor || '#3b82f6';

    if (type === 'input') {
        modalInput.classList.remove('hidden');
        modalInput.value = initialValue || '';
        modalInput.placeholder = placeholder || '';
        setTimeout(() => modalInput.focus(), 100);
    } else if (type === 'confirm') {
        modalMessage.textContent = message;
        modalMessage.classList.remove('hidden');
    } else if (type === 'alert') {
        modalMessage.textContent = message;
        modalMessage.classList.remove('hidden');
        modalCancel.classList.add('hidden');
    }

    if (showIcons && modalIcons) {
        modalIcons.classList.remove('hidden');
        modalIcons.innerHTML = '';
        currentSelectedIcon = initialIcon || 'music';
        
        availableIcons.forEach(icon => {
            const btn = document.createElement('button');
            const isActive = icon === currentSelectedIcon;
            btn.className = `p-2 rounded-lg border transition-all ${isActive ? 'bg-blue-100 border-blue-500 text-blue-500' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-600'}`;
            btn.innerHTML = `<i data-lucide="${icon}" class="w-5 h-5" style="color: ${currentSelectedColor}"></i>`;
            btn.onclick = () => {
                // Remove active class from all
                Array.from(modalIcons.children).forEach(c => {
                    c.className = 'p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all';
                });
                // Add active class to clicked
                btn.className = 'p-2 rounded-lg border border-blue-500 bg-blue-100 text-blue-500 transition-all';
                currentSelectedIcon = icon;
            };
            modalIcons.appendChild(btn);
        });
        lucide.createIcons();
    }

    if (showColors && modalColors) {
        modalColors.classList.remove('hidden');
        modalColors.innerHTML = '';

        availableColors.forEach(color => {
            const btn = document.createElement('button');
            const isActive = color === currentSelectedColor;
            btn.className = `w-8 h-8 rounded-full border-2 transition-all ${isActive ? 'border-slate-600 dark:border-white scale-110' : 'border-transparent hover:scale-110'}`;
            btn.style.backgroundColor = color;
            btn.onclick = () => {
                Array.from(modalColors.children).forEach(c => {
                    c.className = 'w-8 h-8 rounded-full border-2 border-transparent hover:scale-110 transition-all';
                });
                btn.className = 'w-8 h-8 rounded-full border-2 border-slate-600 dark:border-white scale-110 transition-all';
                currentSelectedColor = color;
                
                // Update icon colors in real-time
                if (modalIcons) {
                    modalIcons.querySelectorAll('svg, i').forEach(el => el.style.color = color);
                }
            };
            modalColors.appendChild(btn);
        });
    }

    modalCancel.textContent = translations[appState.currentLang].btn_cancel || "Cancel";
    modalConfirm.textContent = translations[appState.currentLang].btn_confirm || "Confirm";

    modal.classList.remove('hidden');
    // Trigger reflow
    void modal.offsetWidth;
    modal.classList.remove('opacity-0');
    modal.querySelector('div').classList.remove('scale-95');
    modal.querySelector('div').classList.add('scale-100');

    currentModalConfirmHandler = onConfirm;
}

function closeModal() {
    if (!modal) return;
    modal.classList.add('opacity-0');
    modal.querySelector('div').classList.remove('scale-100');
    modal.querySelector('div').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    currentModalConfirmHandler = null;
}

if (modalCancel) modalCancel.addEventListener('click', closeModal);
if (modalConfirm) modalConfirm.addEventListener('click', () => {
    if (currentModalConfirmHandler) {
        const inputValue = !modalInput.classList.contains('hidden') ? modalInput.value : null;
        currentModalConfirmHandler(inputValue, currentSelectedIcon, currentSelectedColor);
    }
    if (!modalInput.classList.contains('hidden') && !modalInput.value) return; // 입력창이 비었을 때 닫지 않으려면 이 줄 유지, 아니면 제거
    closeModal();
});
if (modalInput) modalInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') modalConfirm.click(); });

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 px-6 py-3 rounded-full shadow-xl backdrop-blur-md border border-white/10 dark:border-slate-200/20 transition-all duration-300 opacity-0 translate-y-4 font-medium text-sm whitespace-nowrap';
    toast.textContent = message;

    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('opacity-0', 'translate-y-4');
    });

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function saveCurrentMix() {
    const activeSounds = {};
    let hasActive = false;

    appState.activeSounds.forEach(id => {
        const player = audioPlayers[id];
        if (player) {
            activeSounds[id] = player.gainNode.gain.value;
            hasActive = true;
        }
    });

    if (!hasActive) {
        showModal({
            title: "My ASMR Space",
            message: translations[appState.currentLang].alert_no_sound || "No sounds playing",
            type: 'alert'
        });
        return;
    }

    showModal({
        title: translations[appState.currentLang].btn_save_mix,
        type: 'input',
        placeholder: translations[appState.currentLang].prompt_mix_name,
        showIcons: true,
        showColors: true,
        onConfirm: (mixName, icon, color) => {
            if (mixName) {
                const newMix = { id: 'custom_' + Date.now(), name: mixName, icon: icon || 'music', color: color || '#3b82f6', sounds: activeSounds };
                appState.customMixes.push(newMix);
                safeStorage.set('asmr_custom_mixes', appState.customMixes);
                renderCustomMixes();
                showToast(translations[appState.currentLang].msg_saved || "Saved successfully.");
            }
        }
    });
}

function editCustomMix(id) {
    const mix = appState.customMixes.find(m => m.id === id);
    if (!mix) return;

    showModal({
        title: translations[appState.currentLang].my_mix_title,
        type: 'input',
        placeholder: translations[appState.currentLang].prompt_mix_name,
        initialValue: mix.name,
        initialIcon: mix.icon,
        initialColor: mix.color,
        showIcons: true,
        showColors: true,
        onConfirm: (newName, newIcon, newColor) => {
            if (newName) {
                mix.name = newName;
                mix.icon = newIcon || mix.icon;
                mix.color = newColor || mix.color;
                safeStorage.set('asmr_custom_mixes', appState.customMixes);
                renderCustomMixes();
                showToast(translations[appState.currentLang].msg_saved || "Saved successfully.");
            }
        }
    });
}

function deleteCustomMix(id, name) {
    const confirmMsg = translations[appState.currentLang].msg_delete_confirm || "Delete?";
    showModal({
        title: translations[appState.currentLang].my_mix_title,
        message: `'${name}' ${confirmMsg}`,
        type: 'confirm',
        onConfirm: () => {
            appState.customMixes = appState.customMixes.filter(m => m.id !== id);
            safeStorage.set('asmr_custom_mixes', appState.customMixes);
            renderCustomMixes();
        }
    });
}

// Helper to create player row
function createPlayerRow(id, isMobile) {
    const name = translations[appState.currentLang]['sound_' + id] || id;
    const sound = soundsData.find(s => s.id === id);
    const player = audioPlayers[id];
    
    if (!player || !sound) return null;

    const row = document.createElement('div');
    // Mobile: 2 lines (flex-wrap), PC: 1 line (flex-nowrap)
    if (isMobile) {
        row.className = 'flex items-center gap-2 p-3 bg-blue-50/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl border border-blue-200/50 dark:border-slate-700/50 shadow-sm w-full';
    } else {
        row.className = 'flex items-center justify-between gap-4 p-3 bg-blue-50/80 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-blue-200/50 dark:border-slate-700/50 shadow-sm w-full transition-all hover:bg-blue-100/80 dark:hover:bg-slate-700/80';
    }
    
    // Info (Icon + Name)
    const infoDiv = document.createElement('div');
    infoDiv.className = isMobile 
        ? 'flex items-center gap-2 overflow-hidden flex-1 min-w-0'
        : 'flex items-center gap-3 overflow-hidden flex-1 min-w-0';
    
    infoDiv.innerHTML = `
        <i data-lucide="${sound.icon}" class="w-4 h-4 text-slate-600 dark:text-slate-300 shrink-0"></i>
        <span class="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">${name}</span>
    `;

    // Controls
    const controlsDiv = document.createElement('div');
    controlsDiv.className = isMobile
        ? 'flex items-center gap-2 shrink-0'
        : 'flex items-center gap-3 shrink-0';

    // Volume Slider
    const volInput = document.createElement('input');
    volInput.type = 'range';
    volInput.min = '0';
    volInput.max = '1';
    volInput.step = '0.01';
    volInput.value = player.userVolume; // 저장된 사용자 볼륨 사용
    volInput.title = `${Math.round(player.gainNode.gain.value * 100)}%`;
    volInput.className = isMobile
        ? 'w-16 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-600 accent-blue-500'
        : 'w-24 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-600 accent-blue-500';
    
    // Unique ID for syncing
    volInput.id = `vol-${isMobile ? 'mobile' : 'pc'}-${id}`;
    // Accessibility
    volInput.setAttribute('aria-label', `${name} Volume`);

    const handleToggle = () => {
        if (player.isPlaying) {
            // ▼ 안드로이드 앱에 개별 정지 신호 전송
            if (typeof Android !== 'undefined' && Android.removeAudio) {
                Android.removeAudio(`https://asmrspace.shop/${sound.file}`);
            }
            if (player.source) {
                try { player.source.stop(); } catch(e){}
                player.source.disconnect();
                player.source = null;
            }
            player.isPlaying = false;
        } else {
            toggleSound(id); // 재생 로직 재사용
        }
        updateUI(id, player.isPlaying);
        saveSession();
    };

    volInput.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        player.userVolume = val; // 사용자 볼륨 업데이트
        player.gainNode.gain.value = val;
        volInput.title = `${Math.round(val * 100)}%`;
        
        // Sync other sliders
        const otherType = isMobile ? 'pc' : 'mobile';
        const otherSlider = document.getElementById(`vol-${otherType}-${id}`);
        if (otherSlider) otherSlider.value = val;

        // ▼ 안드로이드 앱에 개별 볼륨 신호 전송
        if (typeof Android !== 'undefined' && Android.setVolume) {
            const soundFileUrl = `https://asmrspace.shop/${sound.file}`;
            Android.setVolume(soundFileUrl, val);
        }
    });
    volInput.addEventListener('change', saveSession);

    // PC only controls (Mobile has global controls at bottom)
    if (!isMobile) {
        // Play/Pause Button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'p-1 text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors shrink-0';
        toggleBtn.innerHTML = `<i data-lucide="${player.isPlaying ? 'pause' : 'play'}" class="w-4 h-4 fill-current"></i>`;
        toggleBtn.setAttribute('aria-label', `${name} ${player.isPlaying ? translations[appState.currentLang].stop : translations[appState.currentLang].play}`);
        toggleBtn.onclick = handleToggle;
        controlsDiv.appendChild(volInput);
        controlsDiv.appendChild(toggleBtn);
    } else {
        controlsDiv.appendChild(volInput);
    }

    // Favorite Button (Both)
    const isFav = appState.favorites.includes(id);
    const favBtn = document.createElement('button');
    favBtn.className = `player-fav-btn p-1 transition-colors shrink-0 ${isFav ? 'text-red-500' : 'text-slate-400 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400'}`;
    favBtn.dataset.id = id;
    favBtn.innerHTML = `<i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-current' : ''}"></i>`;
    favBtn.setAttribute('aria-label', `${name} ${translations[appState.currentLang].my_saved}`);
    favBtn.onclick = () => toggleFavorite(id);
    controlsDiv.appendChild(favBtn);

    // Mobile Play/Pause Button
    if (isMobile) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'p-1 text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors shrink-0';
        toggleBtn.innerHTML = `<i data-lucide="${player.isPlaying ? 'pause' : 'play'}" class="w-4 h-4 fill-current"></i>`;
        toggleBtn.setAttribute('aria-label', `${name} ${player.isPlaying ? translations[appState.currentLang].stop : translations[appState.currentLang].play}`);
        toggleBtn.onclick = handleToggle;
        controlsDiv.appendChild(toggleBtn);
    }

    // Close Button (Individual)
    const closeBtn = document.createElement('button');
    closeBtn.className = isMobile
        ? 'p-1 text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors shrink-0'
        : 'p-1 text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors shrink-0';
    closeBtn.innerHTML = `<i data-lucide="x" class="w-4 h-4"></i>`;
    closeBtn.setAttribute('aria-label', `Close ${name}`);
    closeBtn.onclick = () => {
        // ▼ 안드로이드 앱에 정지 신호 전송 (X 버튼 클릭 시)
        if (player.isPlaying && typeof Android !== 'undefined' && Android.removeAudio) {
            Android.removeAudio(`https://asmrspace.shop/${sound.file}`);
        }
        if (player.source) {
            try { player.source.stop(); } catch(e){}
            player.source.disconnect();
            player.source = null;
        }
        player.isPlaying = false;
        const idx = appState.activeSounds.indexOf(id);
        if (idx !== -1) appState.activeSounds.splice(idx, 1);
        updateUI(id, false);
        saveSession();
    };

    row.appendChild(infoDiv);
    row.appendChild(controlsDiv);
    if (!isMobile) row.appendChild(closeBtn); // Mobile uses global close or individual close? Let's keep individual close for mobile too in the row
    if (isMobile) row.appendChild(closeBtn);

    return row;
}

function updatePlayerBar() {
    const mobileList = document.getElementById('mobile-player-list');
    const pcList = document.getElementById('pc-player-list');
    
    if (appState.activeSounds.length > 0) {
        if (mobileList) mobileList.innerHTML = '';
        if (pcList) pcList.innerHTML = '';

        appState.activeSounds.forEach(id => {
            if (mobileList) {
                const mRow = createPlayerRow(id, true);
                if (mRow) mobileList.appendChild(mRow);
            }
            if (pcList) {
                const pRow = createPlayerRow(id, false);
                if (pRow) pcList.appendChild(pRow);
            }
        });
        
        if (mobilePlayerBar) mobilePlayerBar.classList.remove('translate-y-[150%]');
        if (pcPlayerBar) pcPlayerBar.classList.remove('translate-y-[150%]');
        
        // Adjust padding (approximate height of mobile bar)
        document.body.style.paddingBottom = '140px';
        
        // 토글 버튼 아이콘 업데이트 (하나라도 재생 중이면 일시정지 버튼 표시)
        const isAnyPlaying = appState.activeSounds.some(id => audioPlayers[id] && audioPlayers[id].isPlaying);
        const icon = isAnyPlaying ? 'pause' : 'play';
        const iconHtml = `<i data-lucide="${icon}" class="w-6 h-6 fill-current"></i>`;

        const mToggle = document.getElementById('mobile-player-toggle');
        const pToggle = document.getElementById('pc-player-toggle');
        if (mToggle) mToggle.innerHTML = iconHtml;
        if (pToggle) pToggle.innerHTML = iconHtml;
        
        lucide.createIcons();
    } else {
        if (mobilePlayerBar) mobilePlayerBar.classList.add('translate-y-[150%]');
        if (pcPlayerBar) pcPlayerBar.classList.add('translate-y-[150%]');
        document.body.style.paddingBottom = '0';
    }
}

// Android 앱에서 호출하여 웹 UI를 초기화하는 함수
window.resetAllButtons = function() {
    console.log("Android signal received: Resetting all buttons...");
    
    // 1. 모든 소리 중지
    Object.values(audioPlayers).forEach(player => {
        if (player.source) {
            try { player.source.stop(); } catch(e){}
            player.source.disconnect();
            player.source = null;
        }
        player.isPlaying = false;
    });

    // 2. 모든 카드 UI 초기화 (재생 중 표시 제거)
    soundsData.forEach(sound => {
        const btn = document.getElementById(`btn-${sound.id}`);
        const card = document.getElementById(`card-${sound.id}`);
        if (btn) {
            btn.className = 'w-full py-2.5 rounded-xl bg-white border border-slate-200 dark:bg-slate-700 dark:border-slate-600 hover:bg-blue-500 hover:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 text-slate-600 dark:text-slate-200 hover:text-white dark:hover:text-white font-medium transition-all shadow-sm flex justify-center items-center gap-2 group';
            btn.innerHTML = `<i data-lucide="play" width="16"></i> <span>${translations[appState.currentLang].play}</span>`;
        }
        if (card) {
            card.classList.remove('card-active');
        }
    });

    // 3. 앱 상태 초기화
    appState.activeSounds = [];
    
    // 4. 하단 플레이어 바 숨기기
    updatePlayerBar();
    
    // 5. 아이콘 다시 그리기 (Lucide)
    if (window.lucide) window.lucide.createIcons();
    
    // 6. 세션 저장
    saveSession();
};

// 앱에서 호출할 수 있도록 전역 함수로 선언
window.stopAllSounds = function() {
    if (typeof Android !== 'undefined' && typeof Android.stopAllAudio === 'function') Android.stopAllAudio();
    // 모든 오디오 플레이어를 확인하여 강제 정지 (activeSounds 목록과 무관하게 처리)
    Object.keys(audioPlayers).forEach(id => {
        const player = audioPlayers[id];
        if (player) {
            // 안드로이드 알림 제거를 위해 개별 사운드 정지 신호 전송
            if (player.isPlaying && typeof Android !== 'undefined' && typeof Android.removeAudio === 'function') {
                const sound = soundsData.find(s => s.id === id);
                if (sound) Android.removeAudio(`https://asmrspace.shop/${sound.file}`);
            }

            if (player.source) {
                try { player.source.stop(); } catch(e){}
                player.source.disconnect();
                player.source = null;
            }
            player.isPlaying = false;
            player.isLoading = false; // 로딩 상태도 초기화
            updateUI(id, false);
        }
    });
    appState.activeSounds = [];
    updatePlayerBar();
    saveSession();
    console.log("앱의 요청으로 모든 소리가 정지되었습니다.");
};

// 페이드 아웃 종료 함수 (타이머용)
window.fadeOutAndStopAll = function(duration = 5) {
    const endTime = audioCtx.currentTime + duration;
    let hasActive = false;

    appState.activeSounds.forEach(id => {
        const player = audioPlayers[id];
        if (player && player.isPlaying) {
            hasActive = true;
            // 현재 볼륨에서 0으로 선형 감소
            player.gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
            player.gainNode.gain.setValueAtTime(player.gainNode.gain.value, audioCtx.currentTime);
            player.gainNode.gain.linearRampToValueAtTime(0, endTime);
        }
    });

    if (hasActive) {
        setTimeout(() => {
            stopAllSounds();
            // 볼륨은 다음 재생 시 userVolume으로 복구됨
        }, duration * 1000);
    }
};

async function playMix(mix) {
    stopAllSounds();
    if (audioCtx.state === 'suspended') await audioCtx.resume();

    const promises = Object.entries(mix.sounds).map(async ([soundId, volume]) => {
        if (!appState.activeSounds.includes(soundId)) appState.activeSounds.push(soundId);
        const player = audioPlayers[soundId];
        const sound = soundsData.find(s => s.id === soundId);

        if (player) {
            player.isLoading = true; // 로딩 시작
            player.userVolume = volume;
            player.gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
            player.gainNode.gain.value = volume;
            
            const volSlider = document.getElementById(`vol-${soundId}`);
            // Sync both sliders
            const mSlider = document.getElementById(`vol-mobile-${soundId}`);
            const pSlider = document.getElementById(`vol-pc-${soundId}`);
            if (mSlider) mSlider.value = volume;
            if (pSlider) pSlider.value = volume;
            
            if (typeof Android !== 'undefined') {
                const url = `https://asmrspace.shop/${sound.file}`;
                const name = translations[appState.currentLang]['sound_' + soundId];
                if (typeof Android.playAudio === 'function') Android.playAudio(url, name);
                if (typeof Android.setVolume === 'function') Android.setVolume(url, volume);
            }
            
            try {
                const buffer = await loadAudioBuffer(sound.file);
                player.isLoading = false; // 로딩 종료

                // 로딩 중에 정지되었거나 activeSounds에서 제거되었다면 재생하지 않음
                if (!buffer || !appState.activeSounds.includes(soundId)) return;

                const source = audioCtx.createBufferSource();
                source.buffer = buffer;
                source.loop = true;
                source.connect(player.gainNode);
                source.start(0);
                player.source = source;
                player.isPlaying = true;
                updateUI(soundId, true);
            } catch (e) {
                player.isLoading = false;
                console.error(`Mix play error for ${soundId}:`, e);
            }
        }
    });

    await Promise.all(promises);
    saveSession();
}

async function toggleSound(id) {
    const player = audioPlayers[id];
    const sound = soundsData.find(s => s.id === id);
    const url = `https://asmrspace.shop/${sound.file}`;
    
    // 재생 중이거나 로딩 중일 때 클릭하면 정지 처리
    if (player.isPlaying || player.isLoading) {
        if (typeof Android !== 'undefined' && typeof Android.removeAudio === 'function') {
            Android.removeAudio(url);
        }
        
        if (player.source) {
            try { player.source.stop(); } catch(e){}
            player.source.disconnect();
            player.source = null;
        }
        player.isPlaying = false;
        player.isLoading = false;
        
        // activeSounds에서 즉시 제거 (로딩 완료 후 재생 방지)
        const idx = appState.activeSounds.indexOf(id);
        if (idx !== -1) appState.activeSounds.splice(idx, 1);

        updateUI(id, false);
    } else {
        // 정지 상태면 재생하고 activeSounds에 추가
        if (typeof Android !== 'undefined' && typeof Android.playAudio === 'function') {
            const name = translations[appState.currentLang]['sound_' + id];
            Android.playAudio(url, name);
        }

        if (!appState.activeSounds.includes(id)) appState.activeSounds.push(id);
        
        player.isLoading = true; // 로딩 시작

        try {
            const buffer = await loadAudioBuffer(sound.file);
            player.isLoading = false; // 로딩 종료

            // 로딩 완료 후 재생 의사가 여전히 유효한지 확인 (activeSounds에 있어야 함)
            if (!buffer || !appState.activeSounds.includes(id)) return;

            const source = audioCtx.createBufferSource();
            source.buffer = buffer;
            source.loop = true; // 무손실 루프
            source.connect(player.gainNode);
            
            player.gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
            player.gainNode.gain.setValueAtTime(player.userVolume, audioCtx.currentTime);

            source.start(0);
            player.source = source;
            player.isPlaying = true;
            updateUI(id, true);
        } catch (e) {
            player.isLoading = false;
            console.error('Play error:', e);
        }
    }
    lucide.createIcons();
    saveSession();
}

// --- Timer Worker Integration ---
let timerWorker = null;
let currentTotalTime = 0; // 프로그레스 바 계산을 위한 전체 시간

function createTimerWorker() {
    if (timerWorker) timerWorker.terminate();
    timerWorker = new Worker('timer-worker.js');
    
    timerWorker.onmessage = function(e) {
        const { action, timeLeft } = e.data;

        if (action === 'tick') {
            const timeStr = formatTime(timeLeft);
            
            // 1. 플로팅 칩 업데이트
            const chipDisplay = document.getElementById('timer-chip-display');
            if (chipDisplay) chipDisplay.textContent = timeStr;
            
            // 2. 모달 디스플레이 업데이트 (열려있을 경우)
            const modalDisplay = document.getElementById('timer-display');
            if (modalDisplay) modalDisplay.textContent = timeStr;

            // 3. 원형 프로그레스 바 업데이트
            const progressCircle = document.getElementById('timer-progress');
            if (progressCircle && currentTotalTime > 0) {
                const circumference = 283; // 2 * PI * 45
                const offset = circumference * (1 - (timeLeft / currentTotalTime));
                progressCircle.style.strokeDashoffset = offset;
            }
            
            // 4. 브라우저 탭 제목 업데이트
            if (translations[appState.currentLang]) {
                document.title = `${timeStr} - ${translations[appState.currentLang].title}`;
            }

            // 5. 안드로이드 앱으로 시간 전송
            if (typeof Android !== 'undefined' && Android.updateTimer) {
                Android.updateTimer(timeStr);
            }
        } else if (action === 'expired') {
            finalizeTimer();
        }
    };
}

createTimerWorker();

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function finalizeTimer() {
    // 1. 페이드 아웃 및 소리 정지
    fadeOutAndStopAll(5);
    
    // 2. UI 초기화
    const chip = document.getElementById('timer-chip');
    if (chip) {
        // 종료 알림 효과: 칩 전체 깜빡임 + 테두리 강조 + 점 초록색 변경
        chip.classList.add('animate-pulse', 'ring-2', 'ring-red-500');
        const chipDot = document.getElementById('timer-chip-dot');
        if (chipDot) {
            chipDot.classList.remove('bg-red-500', 'bg-amber-500', 'animate-pulse');
            chipDot.classList.add('bg-green-500');
        }
        // 5초 후 숨김 (페이드 아웃과 동기화)
        setTimeout(() => {
            chip.classList.add('hidden');
            chip.classList.remove('animate-pulse', 'ring-2', 'ring-red-500');
            if (chipDot) chipDot.classList.remove('bg-green-500');
        }, 5000);
    }
    
    const modalDisplay = document.getElementById('timer-display');
    if (modalDisplay) modalDisplay.textContent = '00:00';
    
    // 버튼 상태 복구
    const timerStart = document.getElementById('timer-start');
    const timerCancel = document.getElementById('timer-cancel');
    const timerBtn = document.getElementById('timer-btn');
    
    if (timerStart) timerStart.classList.remove('hidden');
    if (timerCancel) timerCancel.classList.add('hidden');
    if (timerBtn) timerBtn.classList.remove('bg-blue-50', 'dark:bg-blue-900/30', 'border-blue-200', 'dark:border-blue-800', 'text-blue-600', 'dark:text-blue-400');
    
    // 제목 복구
    if (translations[appState.currentLang]) {
        document.title = `${translations[appState.currentLang].title} - ${translations[appState.currentLang].subtitle}`;
    }

    // 3. 앱 서비스 종료 신호
    if (typeof Android !== 'undefined' && Android.stopService) {
        Android.stopService();
    }
    window.dispatchEvent(new CustomEvent('asmr-timer-ended'));
}

// 전역 함수로 노출 (index.html에서 호출)
window.startAppTimer = function(minutes) {
    // Worker 재생성으로 이전 메시지 큐 초기화 (잔여 시간 표시 버그 수정)
    createTimerWorker();

    const seconds = minutes * 60;
    currentTotalTime = seconds; // 전체 시간 설정
    
    // UI 즉시 업데이트 (1초 딜레이 방지)
    const timeStr = formatTime(seconds);
    const chipDisplay = document.getElementById('timer-chip-display');
    if (chipDisplay) chipDisplay.textContent = timeStr;
    const modalDisplay = document.getElementById('timer-display');
    if (modalDisplay) modalDisplay.textContent = timeStr;

    timerWorker.postMessage({ action: 'start', time: seconds });
    
    // 프로그레스 바 초기화
    const progressCircle = document.getElementById('timer-progress');
    if (progressCircle) progressCircle.style.strokeDashoffset = 0;

    // 칩 표시
    const chip = document.getElementById('timer-chip');
    if (chip) chip.classList.remove('hidden');

    // 칩 상태 초기화 (Running: Red + Pulse)
    const chipDot = document.getElementById('timer-chip-dot');
    if (chipDot) {
        chipDot.classList.remove('bg-amber-500', 'bg-green-500');
        chipDot.classList.add('bg-red-500', 'animate-pulse');
    }
};

window.addAppTimer = function(minutes) {
    const seconds = minutes * 60;
    currentTotalTime += seconds; // 전체 시간 증가 (비율 유지)
    timerWorker.postMessage({ action: 'add', time: seconds });

    // 칩 다시 표시
    const chip = document.getElementById('timer-chip');
    if (chip) chip.classList.remove('hidden');
};

window.pauseAppTimer = function() {
    timerWorker.postMessage({ action: 'pause' });
    
    // 칩 상태 변경 (Paused: Amber + No Pulse)
    const chipDot = document.getElementById('timer-chip-dot');
    if (chipDot) {
        chipDot.classList.remove('bg-red-500', 'bg-green-500', 'animate-pulse');
        chipDot.classList.add('bg-amber-500');
    }
};

window.resumeAppTimer = function() {
    timerWorker.postMessage({ action: 'resume' });
    
    // 칩 상태 변경 (Running: Red + Pulse)
    const chipDot = document.getElementById('timer-chip-dot');
    if (chipDot) {
        chipDot.classList.remove('bg-amber-500');
        chipDot.classList.add('bg-red-500', 'animate-pulse');
    }

    // 칩 다시 표시
    const chip = document.getElementById('timer-chip');
    if (chip) chip.classList.remove('hidden');
};

window.cancelAppTimer = function() {
    timerWorker.postMessage({ action: 'stop' });
    
    // UI 즉시 숨김
    const chip = document.getElementById('timer-chip');
    if (chip) chip.classList.add('hidden');
    
    // 제목 복구
    if (translations[appState.currentLang]) {
        document.title = `${translations[appState.currentLang].title} - ${translations[appState.currentLang].subtitle}`;
    }
};

async function toggleGlobalPlayback() {
    const isAnyPlaying = appState.activeSounds.some(id => audioPlayers[id] && audioPlayers[id].isPlaying);
    
    if (typeof Android !== 'undefined') {
        if (isAnyPlaying) {
            if (typeof Android.pauseAudio === 'function') Android.pauseAudio();
        } else {
            if (typeof Android.resumeAudio === 'function') Android.resumeAudio();
        }
    }

    if (isAnyPlaying) {
        // 일시정지: activeSounds 목록에 있는 재생중인 소리들을 모두 정지
        const soundsToStop = appState.activeSounds.filter(id => audioPlayers[id] && audioPlayers[id].isPlaying);
        soundsToStop.forEach(id => {
            // toggleSound를 호출하여 개별 정지 로직(Android 알림 포함)을 재사용
            toggleSound(id);
        });
    } else {
        // 재생: activeSounds 목록에 있는 정지된 소리들을 모두 재생
        const soundsToPlay = appState.activeSounds.filter(id => audioPlayers[id] && !audioPlayers[id].isPlaying);
        soundsToPlay.forEach(id => {
            toggleSound(id);
        });
    }
}

function updateUI(id, isPlaying) {
    const btn = document.getElementById(`btn-${id}`);
    const card = document.getElementById(`card-${id}`);
    const textKey = isPlaying ? 'stop' : 'play';
    const icon = isPlaying ? 'pause' : 'play';
    const sound = soundsData.find(s => s.id === id);
    const soundName = translations[appState.currentLang]['sound_' + id] || id;
    
    if (isPlaying) {
        btn.className = 'w-full py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 border border-blue-500 text-white font-bold transition-all shadow-md shadow-blue-500/30 flex justify-center items-center gap-2';
        btn.innerHTML = `<i data-lucide="${icon}" width="16"></i> <span data-i18n="${textKey}">${translations[appState.currentLang][textKey]}</span>`;
        btn.setAttribute('aria-label', `${soundName} ${translations[appState.currentLang].stop}`);
        card.classList.add('card-active');
    } else {
        btn.className = 'w-full py-2.5 rounded-xl bg-white border border-slate-200 dark:bg-slate-700 dark:border-slate-600 hover:bg-blue-500 hover:border-blue-500 dark:hover:bg-blue-500 dark:hover:border-blue-500 text-slate-600 dark:text-slate-200 hover:text-white dark:hover:text-white font-medium transition-all shadow-sm flex justify-center items-center gap-2 group';
        btn.innerHTML = `<i data-lucide="${icon}" width="16"></i> <span data-i18n="${textKey}">${translations[appState.currentLang][textKey]}</span>`;
        btn.setAttribute('aria-label', `${soundName} ${translations[appState.currentLang].play}`);
        card.classList.remove('card-active');
    }
    updatePlayerBar();
    lucide.createIcons();
}

function toggleFavorite(id) {
    const index = appState.favorites.indexOf(id);
    const isFav = index === -1;
    
    if (isFav) {
        appState.favorites.push(id);
    } else {
        appState.favorites.splice(index, 1);
    }
    safeStorage.set('asmr_favorites', appState.favorites);

    // Update Card Button
    const card = document.getElementById(`card-${id}`);
    if (card) {
        const btn = card.querySelector('.fav-btn');
        if (btn) {
            const icon = btn.querySelector('svg') || btn.querySelector('i');
            if (isFav) {
                btn.classList.remove('text-slate-300', 'dark:text-slate-600');
                btn.classList.add('text-red-500');
                if (icon) icon.classList.add('fill-current');
            } else {
                btn.classList.remove('text-red-500');
                btn.classList.add('text-slate-400', 'dark:text-slate-400');
                if (icon) icon.classList.remove('fill-current');
            }
        }
    }

    // Update Player Bar Button
    // Update all instances (mobile and pc)
    document.querySelectorAll(`.player-fav-btn[data-id="${id}"]`).forEach(pBtn => {
        if (pBtn) {
            const icon = pBtn.querySelector('svg') || pBtn.querySelector('i');
            if (isFav) {
                pBtn.classList.remove('text-slate-400', 'hover:text-red-500', 'dark:text-slate-400', 'dark:hover:text-red-400');
                pBtn.classList.add('text-red-500');
                if (icon) icon.classList.add('fill-current');
            } else {
                pBtn.classList.remove('text-red-500');
                pBtn.classList.add('text-slate-400', 'hover:text-red-500', 'dark:text-slate-400', 'dark:hover:text-red-400');
                if (icon) icon.classList.remove('fill-current');
            }
        }
    });
    
    applyFilters();
}

function applyFilters() {
    // 7. 성능 이슈 개선
    const query = appState.soundSearchQuery ? appState.soundSearchQuery.toLowerCase() : '';
    let visibleCount = 0;

    soundsData.forEach(sound => {
        const card = document.getElementById(`card-${sound.id}`);
        if (!card) return;
        
        let visible = true;

        if (appState.showFavoritesOnly && !appState.favorites.includes(sound.id)) {
            visible = false;
        }

        if (visible && appState.activeTag && !sound.tags.includes(appState.activeTag)) {
            visible = false;
        }

        // 검색어 필터 (이름 및 태그 검색)
        if (visible && query) {
            const name = (translations[appState.currentLang]['sound_' + sound.id] || sound.id).toLowerCase();
            const tags = sound.tags.map(tag => (translations[appState.currentLang]['tag_' + tag] || tag).toLowerCase());
            const rawTags = sound.tags; // 원문 태그도 검색 허용

            const matchName = name.includes(query);
            const matchTags = tags.some(t => t.includes(query)) || rawTags.some(t => t.includes(query));

            if (!matchName && !matchTags) visible = false;
        }

        if (visible) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    const noResult = document.getElementById('no-search-result');
    if (noResult) {
        if (visibleCount === 0) {
            noResult.classList.remove('hidden');
        } else {
            noResult.classList.add('hidden');
        }
    }

    document.querySelectorAll('.tag-btn').forEach(btn => {
        if (btn.dataset.tag === appState.activeTag) {
            btn.classList.add('bg-blue-500', 'text-white');
            btn.classList.remove('bg-slate-100', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300');
        } else {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-slate-100', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300');
        }
    });
}

function filterByTag(tag) {
    appState.activeTag = (appState.activeTag === tag) ? null : tag;
    applyFilters();
}

if (favFilterBtn) {
    favFilterBtn.addEventListener('click', () => {
        appState.showFavoritesOnly = !appState.showFavoritesOnly;
        
        // 활성화 상태 스타일 (빨간색)
        favFilterBtn.classList.toggle('bg-red-50', appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:bg-red-900/30', appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('border-red-200', appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:border-red-900', appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('text-red-500', appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:text-red-400', appState.showFavoritesOnly);
        
        // 기본 상태 스타일 (흰색/회색) - 활성화 시 제거, 비활성화 시 추가
        favFilterBtn.classList.toggle('bg-white', !appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:bg-slate-800', !appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('text-slate-600', !appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:text-slate-300', !appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('border-slate-200', !appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:border-slate-700', !appState.showFavoritesOnly);
        
        applyFilters();
    });
}

['mobile', 'pc'].forEach(type => {
    const toggle = document.getElementById(`${type}-player-toggle`);
    const close = document.getElementById(`${type}-player-close`);
    const save = document.getElementById(`${type}-save-btn`);
    
    if (toggle) toggle.addEventListener('click', toggleGlobalPlayback);
    if (close) close.addEventListener('click', stopAllSounds);
    if (save) save.addEventListener('click', saveCurrentMix);
});

if (showMixesBtn && mixListModal) {
    showMixesBtn.addEventListener('click', () => {
        mixListModal.classList.remove('hidden');
        // Trigger reflow
        void mixListModal.offsetWidth;
        mixListModal.classList.remove('opacity-0');
        mixListModal.querySelector('div').classList.remove('scale-95');
        mixListModal.querySelector('div').classList.add('scale-100');
        renderCustomMixes();
    });

    const closeMixList = () => {
        mixListModal.classList.add('opacity-0');
        mixListModal.querySelector('div').classList.remove('scale-100');
        mixListModal.querySelector('div').classList.add('scale-95');
        setTimeout(() => {
            mixListModal.classList.add('hidden');
        }, 300);
    };

    if (mixListClose) mixListClose.addEventListener('click', closeMixList);
    mixListModal.addEventListener('click', (e) => {
        if (e.target === mixListModal) closeMixList();
    });
}

if (mixSearchInput) {
    mixSearchInput.addEventListener('input', renderCustomMixes);
}

window.addEventListener('resize', () => {
    // Padding logic is handled in updatePlayerBar
});

function initTheme() {
    const savedTheme = safeStorage.getStr('asmr_theme', null);

    // 저장된 테마가 'light'가 아니면 다크 모드 (기본값: 다크)
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
}

function updateQuote() {
    const quoteEl = document.getElementById('daily-quote');
    if (!quoteEl) return;
    
    // 현재 언어의 명언 배열 가져오기 (없으면 한국어 기본값)
    const currentQuotes = translations[appState.currentLang].quotes || translations['ko'].quotes;
    
    if (currentQuotes && currentQuotes.length > 0) {
        const randomQuote = currentQuotes[Math.floor(Math.random() * currentQuotes.length)];
        quoteEl.textContent = `"${randomQuote}"`;
    }
}

function updateAndroidPlaylist() {
    if (typeof Android !== 'undefined' && typeof Android.updatePlaylist === 'function') {
        const playlist = soundsData.map(sound => ({
            url: `https://asmrspace.shop/${sound.file}`,
            title: translations[appState.currentLang]['sound_' + sound.id] || sound.id
        }));
        Android.updatePlaylist(JSON.stringify(playlist));
    }
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[appState.currentLang][key]) {
            el.innerHTML = translations[appState.currentLang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[appState.currentLang][key]) {
            el.placeholder = translations[appState.currentLang][key];
        }
    });

    // SEO: Update Document Title & Meta Tags dynamically
    if (translations[appState.currentLang].title && translations[appState.currentLang].subtitle) {
        document.title = `${translations[appState.currentLang].title} - ${translations[appState.currentLang].subtitle}`;
    }
    
    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[appState.currentLang].site_desc) {
        metaDesc.setAttribute('content', translations[appState.currentLang].site_desc);
    }

    // Update OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && translations[appState.currentLang].title) ogTitle.setAttribute('content', translations[appState.currentLang].title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && translations[appState.currentLang].subtitle) ogDesc.setAttribute('content', translations[appState.currentLang].subtitle);

    // Update HTML Lang attribute
    document.documentElement.lang = appState.currentLang;

    const langNames = {
        ko: '한국어',
        en: 'English',
        ja: '日本語',
        zh: '中文',
        es: 'Español'
    };
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        const langSpan = langBtn.querySelector('span');
        if (langSpan) {
            langSpan.textContent = langNames[appState.currentLang];
        }
    }
    
    // 홈 페이지에만 있는 요소들 업데이트
    if (document.getElementById('daily-quote')) {
        updateQuote();
    }
    updatePlayerBar();
    if (mixGrid) {
        renderMixes();
    }
    if (customMixGrid) {
        renderCustomMixes();
    }
    updateAndroidPlaylist();
}

// 1. 초기화 순서 & 3. 이벤트 리스너 중복 방지
function init() {
    lucide.createIcons();
    initTheme();
    
    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');

    // 테마 토글 기능 (PC/모바일 버튼 모두 지원)
    const handleThemeToggle = (e) => {
        e.preventDefault();
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        safeStorage.setStr('asmr_theme', isDark ? 'dark' : 'light');
    };

    // ID가 'theme-btn'인 모든 요소(중복 ID 대응) 및 'mobile-theme-btn' 선택
    const themeBtns = document.querySelectorAll('[id="theme-btn"], [id="mobile-theme-btn"]');
    themeBtns.forEach(btn => btn.addEventListener('click', handleThemeToggle));

    updateLanguage();
    
    // 홈 페이지 전용 초기화
    if (soundGrid) {
        initSoundCards();
        initSoundSearch();
        // preloadAllSounds(); // 초기 로딩 속도 개선을 위해 비활성화 (클릭 시 로드)
    }
    
    // 2. Null 체크 (Event Listeners)
    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
                langMenu.classList.add('hidden');
            }
        });

        document.querySelectorAll('[data-lang]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.getAttribute('data-lang');
                if (selectedLang && translations[selectedLang]) {
                    appState.currentLang = selectedLang;
                    safeStorage.setStr('asmr_lang', appState.currentLang);
                    updateLanguage();
                    langMenu.classList.add('hidden');
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', init);