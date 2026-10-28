/* =====================================================================
   중국어 탐험대 · STAGE 02 이름표 마을 (3차시) — 설정 파일 (game-data.js)
   ---------------------------------------------------------------------
   선생님이 고쳐도 되는 곳은 이 파일뿐입니다. (온라인 연결은 firebase-config.js)
   - 따옴표(' ') 안의 글자와 숫자만 바꾸고, 쉼표(,)와 괄호는 지우지 마세요.
   - GitHub에서 연필(✏️) 버튼으로 고친 뒤 Commit changes 하면 반영됩니다.
   ===================================================================== */

window.GAME_DATA = {

  /* ---------- 1. 이름과 문구 ---------- */
  lessonId: 'lesson3',               // 결과 저장 이름 (차시마다 다르게)
  saveKey: 'panda-lesson3',          // 이 기기에 저장할 때 쓰는 이름
  stageLabel: 'STAGE 02 · 3차시',
  title: '이름표 마을의 비밀',
  subtitle: '你叫什么名字？',
  nextStage: 'STAGE 03 · 숫자 계곡',
  nextStageLine: '아직 열리지 않았어요! 다음 시간에도 老师好로 인사하고 이름을 말해 봐요.',
  story: [
    '판다 탐험가가 대나무 언덕을 지나 이름표 마을에 도착했어요.',
    '마을 사람들의 이름표가 바람에 날아가 버렸대요! 이름을 묻고 답해야 찾을 수 있어요.',
    '복습 숲, 이름 마을, 인사 다리를 지나 언덕 위의 대나무 괴물을 만나 보세요. 구덩이에 빠지지 않게 조심!'
  ],

  /* ---------- 2. 점수와 어려움 ---------- */
  points: { firstTry: 100, retry: 60, bossFirstTry: 150, bossRetry: 90, star: 10, block: 20, golden: 50, bump: 10, stomp: 20, fall: 0 },
  // 구덩이에 떨어지면 어디서 다시 시작할까요?  'zone' = 지금 구역의 처음 / 'start' = 맨 처음 / 'bell' = 마지막으로 지나온 종
  fallRespawn: 'zone',

  /* ---------- 3. 중국어 음성 ----------
     audio 폴더에 같은 이름의 MP3가 있으면 그 파일을 먼저 씁니다.
     없으면 온라인 자동 음성 → 기기 내장 음성 순서로 씁니다. (검수 전 임시 음성)   */
  audio: {
    useLocalFiles: true,
    useOnlineVoice: true,
    onlineVoiceUrl: 'https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=',
    slowRate: 0.7,
    sounds: {
      // 1차시 복습
      ma1: { text: '妈', pinyin: 'mā', tone: 1 },
      ma2: { text: '麻', pinyin: 'má', tone: 2 },
      ma3: { text: '马', pinyin: 'mǎ', tone: 3 },
      ma4: { text: '骂', pinyin: 'mà', tone: 4 },
      // 2차시 복습
      xiexie:    { text: '谢谢',   pinyin: 'xièxie',     meaning: '고마워' },
      bukeqi:    { text: '不客气', pinyin: 'bú kèqi',    meaning: '천만에' },
      duibuqi:   { text: '对不起', pinyin: 'duìbuqǐ',    meaning: '미안해' },
      meiguanxi: { text: '没关系', pinyin: 'méi guānxi', meaning: '괜찮아' },
      wanan:     { text: '晚安',   pinyin: 'wǎn’ān',     meaning: '잘 자요' },
      zaijian:   { text: '再见',   pinyin: 'zàijiàn',    meaning: '안녕(헤어질 때)' },
      // 3차시
      nijiao:    { text: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', meaning: '이름이 뭐야?' },
      wo:        { text: '我',   pinyin: 'wǒ',     meaning: '나' },
      ni:        { text: '你',   pinyin: 'nǐ',     meaning: '너' },
      jiao:      { text: '叫',   pinyin: 'jiào',   meaning: '~라고 불리다' },
      shenme:    { text: '什么', pinyin: 'shénme', meaning: '무엇' },
      mingzi:    { text: '名字', pinyin: 'míngzi', meaning: '이름' },
      wojiaoxiaoming: { text: '我叫小明。', pinyin: 'Wǒ jiào Xiǎomíng.' },
      wojiaoxiaomei:  { text: '我叫小美。', pinyin: 'Wǒ jiào Xiǎoměi.' },
      wojiaoanan:     { text: '我叫安安。', pinyin: 'Wǒ jiào Ān’ān.' },
      wojiaolele:     { text: '我叫乐乐。', pinyin: 'Wǒ jiào Lèlè.' },
      nine:      { text: '你呢？', pinyin: 'Nǐ ne?', meaning: '너는?' },
      renshi:    { text: '认识你很高兴！', pinyin: 'Rènshi nǐ hěn gāoxìng!', meaning: '만나서 반가워!' },
      xiaoming:  { text: '小明', pinyin: 'Xiǎomíng', pic: '1' },
      xiaomei:   { text: '小美', pinyin: 'Xiǎoměi',  pic: '2' },
      anan:      { text: '安安', pinyin: 'Ān’ān',    pic: '3' },
      lele:      { text: '乐乐', pinyin: 'Lèlè',     pic: '4' },
      wangxiaoming: { text: '王小明', pinyin: 'Wáng Xiǎomíng' }
    }
  },

  /* ---------- 4. 구역과 소리의 종 (9개) ---------- */
  zones: [
    { id: 'review', name: '복습 숲', theme: 'forest', missions: [
      // 1차시 복습 (PPT 2쪽)
      { id: 'q1', type: 'numberCode', place: '성조 암호 종', review: '1차시',
        question: '세 소리를 듣고, 성조 번호를 순서대로 눌러 암호를 풀어요.',
        sets: [ ['ma2','ma4','ma1'], ['ma3','ma1','ma4'] ],
        hint: '한 소리씩 끊어서 다시 들어 보세요. 손가락으로 높낮이를 그려 봐도 좋아요.', reward: '성조 열쇠' },
      // 2차시 복습 (PPT 5~6쪽)
      { id: 'q2', type: 'choiceText', sound: 'duibuqi', place: '공책 종', review: '2차시',
        scene: '🐼 💥📓 🐰  "对不起!"',
        question: '판다가 토끼 공책을 떨어뜨리고 "对不起!"라고 했어요. 토끼는 뭐라고 대답할까요?',
        options: [
          { text: '没关系', sub: 'méi guānxi', sound: 'meiguanxi', correct: true },
          { text: '不客气', sub: 'bú kèqi', sound: 'bukeqi' },
          { text: '晚安', sub: 'wǎn’ān', sound: 'wanan' }
        ],
        hint: '미안하다는 말에는 "괜찮아"라고 다독여 줘요.', reward: '공책' }
    ]},
    { id: 'village', name: '이름 마을', theme: 'village', missions: [
      { id: 'q3', type: 'wordOrder', place: '질문 종', sound: 'nijiao',
        question: '"이름이 뭐야?"를 중국어로 만들어요. 조각을 순서대로 눌러요.',
        tiles: ['你', '叫', '什么', '名字'], extra: ['我'], ending: '？',
        hint: '너(你)가 → 불리다(叫) → 무엇(什么) → 이름(名字) 순서예요.', reward: '물음표 깃발' },
      { id: 'q4', type: 'matchScenes', place: '낱말 종',
        question: '낱말을 눌러 듣고, 알맞은 뜻 카드에 놓아요.',
        pairs: [
          { scene: '🙋', label: '나', sound: 'wo' },
          { scene: '👉', label: '너', sound: 'ni' },
          { scene: '❓', label: '무엇', sound: 'shenme' },
          { scene: '🏷️', label: '이름', sound: 'mingzi' }
        ],
        hint: '我는 나, 你는 너, 什么는 무엇, 名字는 이름이에요.', reward: '낱말 카드' },
      { id: 'q5', type: 'choiceText', sound: 'nijiao', place: '첫 만남 종',
        scene: '🐰 💬 🐼  "你叫什么名字？"',
        question: '토끼가 판다에게 이름을 물었어요. 판다는 뭐라고 대답할까요?',
        options: [
          { text: '我叫小明。', sub: 'Wǒ jiào Xiǎomíng.', sound: 'wojiaoxiaoming', correct: true },
          { text: '不客气。', sub: 'bú kèqi', sound: 'bukeqi' },
          { text: '晚安。', sub: 'wǎn’ān', sound: 'wanan' }
        ],
        hint: '이름을 물으면 "我叫 + 이름"으로 대답해요.', reward: '이름표' },
      { id: 'q6', type: 'hearPick', sound: 'wojiaolele', answer: 'lele', options: ['xiaoming', 'xiaomei', 'anan', 'lele'], place: '이름 빙고 종',
        question: '친구가 자기 이름을 말해요. 몇 번 친구일까요?',
        hint: '我叫 뒤에 나오는 이름을 잘 들어 보세요. 같은 소리가 두 번 반복되는 이름도 있어요.', reward: '빙고 카드' }
    ]},
    { id: 'bridge', name: '인사 다리', theme: 'bridge', missions: [
      { id: 'q7', type: 'choiceText', sound: 'nine', place: '되묻기 종',
        scene: '🐻 💬  "我叫安安，你呢？"',
        question: '곰이 "我叫安安，你呢？"라고 했어요. 你呢？는 무슨 뜻일까요?',
        options: [
          { text: '너는?', correct: true },
          { text: '고마워!' },
          { text: '잘 자!' }
        ],
        hint: '자기 이름을 말한 뒤 상대에게 되묻는 말이에요. 你는 "너"예요.', reward: '되묻기 배지' },
      { id: 'q8', type: 'choiceText', place: '반가움 종',
        scene: '🐼 🤝 🐰  처음 만나 이름을 주고받았어요',
        question: '처음 만난 친구와 이름을 주고받았어요. 이어서 할 말로 알맞은 것은?',
        options: [
          { text: '认识你很高兴！', sub: 'Rènshi nǐ hěn gāoxìng!', sound: 'renshi', correct: true },
          { text: '对不起！', sub: 'duìbuqǐ', sound: 'duibuqi' },
          { text: '晚安！', sub: 'wǎn’ān', sound: 'wanan' }
        ],
        hint: '"만나서 반가워!"라는 말을 찾아보세요.', reward: '미소 배지' },
      { id: 'q9', type: 'choiceText', sound: 'wangxiaoming', place: '이름 문화 종',
        scene: '🏷️ 王小明  Wáng Xiǎomíng',
        question: '王小明이라는 이름에서 성(姓)은 어느 부분일까요?',
        options: [
          { text: '王', sub: 'Wáng', correct: true },
          { text: '小明', sub: 'Xiǎomíng' },
          { text: '明', sub: 'míng' }
        ],
        hint: '중국 이름도 우리 이름처럼 성을 앞에 써요.', reward: '이름 도장' }
    ]}
  ],

  /* ---------- 5. 언덕의 대나무 괴물 (마지막 문제 3개) ---------- */
  boss: {
    name: '대나무 괴물',
    intro: '하하하! 또 만났구나. 오늘 수업을 잘 했다면 이 문제도 풀 수 있겠지. 이 문제를 풀어야 오늘 수업이 끝난다! 하하하!',
    notReady: '흐흠, 아직 울리지 않은 종이 있구나. 종을 모두 울리고 다시 오너라!',
    wrongLine: '하하, 다시 생각해 보거라!',
    outro: '역시 훌륭한 학생이군. 다음 시간에도 기대가 되네.',
    rounds: [
      { scene: '🐰 🐼  처음 만났어요', situation: '토끼가 판다에게 이름을 물었어요.',
        a: 'nijiao', b: 'wojiaoxiaomei', answer: 'O',
        hint: '이름을 물으면 我叫 + 이름으로 대답해요.' },
      { scene: '🐰 🐼  처음 만났어요', situation: '토끼가 판다에게 이름을 물었어요.',
        a: 'nijiao', b: 'bukeqi', answer: 'X', fix: 'wojiaoxiaoming',
        hint: '不客气는 고맙다는 말에 하는 대답이에요.' },
      { scene: '🐻 🐼  이름을 말했어요', situation: '곰이 자기 이름을 말해 주었어요.',
        a: 'wojiaolele', b: 'renshi', answer: 'O',
        hint: '이름을 들은 뒤 "만나서 반가워!"라고 할 수 있어요.' }
    ]
  },

  /* ---------- 6. 조작과 길 안내 ---------- */
  runSpeed: 250,
  jumpPower: 660,
  guideAfterSeconds: 15
};
