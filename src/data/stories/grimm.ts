import type { Story } from '../../types'

export const grimmStories: Story[] = [
  {
    id: 'red-riding-hood',
    titleKo: '빨간 모자',
    titleEn: 'Little Red Riding Hood',
    summary: 'A kind girl visits her grandmother and outwits a clever wolf.',
    level: 'A1',
    minutes: 4,
    theme: 'Grimm',
    cover: 'story-art/red-riding-hood-cover.jpg',
    questions: [
      {
        question: 'Where is Little Red Riding Hood going?',
        options: ['To school', 'To her grandmother’s house', 'To the market'],
        answerIndex: 1,
      },
      {
        question: 'What does the wolf do at grandmother’s house?',
        options: [
          'He waits outside quietly',
          'He pretends to be grandmother',
          'He cooks soup for the girl',
        ],
        answerIndex: 1,
      },
      {
        question: 'Who helps save Red Riding Hood and her grandmother?',
        options: ['A hunter', 'A fairy', 'The wolf’s friend'],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '옛날에 빨간 모자를 쓴 소녀가 있었습니다. 사람들은 그녀를 “빨간 모자”라고 불렀습니다.',
        en: 'Long ago there was a girl who wore a red hood. People called her Little Red Riding Hood.',
        words: [
          { ko: '빨간', en: 'red', romanization: 'ppalgan' },
          { ko: '모자', en: 'hat / hood', romanization: 'moja' },
          { ko: '소녀', en: 'girl', romanization: 'sonyeo' },
          { ko: '부르다', en: 'to call', romanization: 'bureuda' },
        ],
      },
      {
        ko: '어느 날 엄마가 말했습니다. “할머니께 케이크와 와인을 가져가거라.” 빨간 모자는 숲길을 걸어갔습니다.',
        en: 'One day her mother said, “Take cake and wine to grandmother.” Red Riding Hood walked through the forest.',
        words: [
          { ko: '할머니', en: 'grandmother', romanization: 'halmeoni' },
          { ko: '케이크', en: 'cake', romanization: 'keikeu' },
          { ko: '숲', en: 'forest', romanization: 'sup' },
          { ko: '걷다', en: 'to walk', romanization: 'geotda' },
        ],
      },
      {
        ko: '숲에서 늑대를 만났습니다. 늑대는 할머니 집으로 먼저 달려갔습니다.',
        en: 'In the forest she met a wolf. The wolf ran ahead to grandmother’s house.',
        words: [
          { ko: '늑대', en: 'wolf', romanization: 'neukdae' },
          { ko: '만나다', en: 'to meet', romanization: 'mannada' },
          { ko: '달리다', en: 'to run', romanization: 'dallida' },
        ],
      },
      {
        ko: '빨간 모자가 도착했을 때, “할머니, 귀가 왜 그렇게 크세요?” 하고 물었습니다. 목소리가 이상했습니다.',
        en: 'When Red Riding Hood arrived, she asked, “Grandmother, why are your ears so big?” The voice sounded strange.',
        words: [
          { ko: '도착하다', en: 'to arrive', romanization: 'dochakhada' },
          { ko: '귀', en: 'ear', romanization: 'gwi' },
          { ko: '크다', en: 'to be big', romanization: 'keuda' },
          { ko: '이상하다', en: 'to be strange', romanization: 'isanghada' },
        ],
      },
      {
        ko: '사냥꾼이 와서 늑대를 쫓아냈습니다. 할머니와 빨간 모자는 다시 안전하게 함께 있었습니다.',
        en: 'A hunter came and chased the wolf away. Grandmother and Red Riding Hood were safe together again.',
        words: [
          { ko: '사냥꾼', en: 'hunter', romanization: 'sanyangkkun' },
          { ko: '쫓아내다', en: 'to chase away', romanization: 'jjochanaeda' },
          { ko: '안전하다', en: 'to be safe', romanization: 'anjeonhada' },
        ],
      },
    ],
  },
  {
    id: 'bremen-musicians',
    titleKo: '브레멘 음악대',
    titleEn: 'The Bremen Town Musicians',
    summary: 'Four old animals leave home and find a new life together.',
    level: 'A1',
    minutes: 4,
    theme: 'Grimm',
    cover: 'story-art/bremen-musicians-cover.jpg',
    questions: [
      {
        question: 'Why do the four animals leave their homes?',
        options: [
          'They want to find treasure',
          'Their owners no longer need them',
          'They are going on vacation',
        ],
        answerIndex: 1,
      },
      {
        question: 'What do the animals do at the robbers’ house?',
        options: [
          'They cook a big dinner',
          'They scare the robbers away',
          'They sleep in the garden',
        ],
        answerIndex: 1,
      },
      {
        question: 'Where do the animals live in the end?',
        options: [
          'In the robbers’ house',
          'In Bremen town hall',
          'On a farm',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '당나귀, 개, 고양이, 닭이 각각 집을 떠났습니다. 모두 나이가 들어 주인에게 쓸모없다고 여겨졌습니다.',
        en: 'A donkey, a dog, a cat, and a rooster each left home. They had grown old and seemed useless to their owners.',
        words: [
          { ko: '당나귀', en: 'donkey', romanization: 'dangnagi' },
          { ko: '고양이', en: 'cat', romanization: 'goyangi' },
          { ko: '닭', en: 'rooster / chicken', romanization: 'dak' },
          { ko: '떠나다', en: 'to leave', romanization: 'tteonada' },
        ],
      },
      {
        ko: '네 친구는 브레멘에서 음악대가 되기로 했습니다. 함께 길을 걸어갔습니다.',
        en: 'The four friends decided to become musicians in Bremen. They walked down the road together.',
        words: [
          { ko: '친구', en: 'friend', romanization: 'chingu' },
          { ko: '음악대', en: 'band / musicians', romanization: 'eumakdae' },
          { ko: '함께', en: 'together', romanization: 'hamkke' },
          { ko: '길', en: 'road', romanization: 'gil' },
        ],
      },
      {
        ko: '밤이 되자, 그들은 빈 집을 발견했습니다. 사실 그 집에는 도둑들이 있었습니다.',
        en: 'When night came, they found an empty-looking house. Robbers were actually inside.',
        words: [
          { ko: '밤', en: 'night', romanization: 'bam' },
          { ko: '집', en: 'house', romanization: 'jip' },
          { ko: '발견하다', en: 'to discover', romanization: 'balgyeonhada' },
          { ko: '도둑', en: 'robber / thief', romanization: 'doduk' },
        ],
      },
      {
        ko: '동물들은 창문에 올라가 크게 울었습니다. 도둑들은 무서워서 도망쳤습니다.',
        en: 'The animals climbed to the window and made a loud noise. The robbers ran away in fear.',
        words: [
          { ko: '창문', en: 'window', romanization: 'changmun' },
          { ko: '울다', en: 'to cry / make sound', romanization: 'ulda' },
          { ko: '무섭다', en: 'to be afraid', romanization: 'museopda' },
          { ko: '도망치다', en: 'to run away', romanization: 'domangchida' },
        ],
      },
      {
        ko: '네 친구는 그 집에서 행복하게 살았습니다. 매일 함께 노래했습니다.',
        en: 'The four friends lived happily in that house. Every day they sang together.',
        words: [
          { ko: '행복하다', en: 'to be happy', romanization: 'haengbokhada' },
          { ko: '살다', en: 'to live', romanization: 'salda' },
          { ko: '노래하다', en: 'to sing', romanization: 'noraehada' },
        ],
      },
    ],
  },
  {
    id: 'frog-prince',
    titleKo: '개구리 왕자',
    titleEn: 'The Frog Prince',
    summary: 'A princess keeps her promise, and a frog becomes a prince.',
    level: 'A1',
    minutes: 4,
    theme: 'Grimm',
    cover: 'story-art/frog-prince-cover.jpg',
    questions: [
      {
        question: 'What does the princess drop into the well?',
        options: ['A ring', 'A golden ball', 'A flower'],
        answerIndex: 1,
      },
      {
        question: 'What does the frog ask for in return?',
        options: [
          'To eat dinner with the princess',
          'To live in the forest alone',
          'To become king immediately',
        ],
        answerIndex: 0,
      },
      {
        question: 'What happens to the frog at the end?',
        options: [
          'He stays a frog forever',
          'He becomes a handsome prince',
          'He jumps back into the well',
        ],
        answerIndex: 1,
      },
    ],
    paragraphs: [
      {
        ko: '왕궁 정원에 공주가 놀고 있었습니다. 그녀는 금공을 우물에 떨어뜨렸습니다.',
        en: 'A princess was playing in the palace garden. She dropped her golden ball into a well.',
        words: [
          { ko: '왕궁', en: 'palace', romanization: 'wanggung' },
          { ko: '공주', en: 'princess', romanization: 'gongju' },
          { ko: '정원', en: 'garden', romanization: 'jeongwon' },
          { ko: '금공', en: 'golden ball', romanization: 'geumgong' },
          { ko: '우물', en: 'well', romanization: 'umul' },
        ],
      },
      {
        ko: '개구리가 말했습니다. “내가 공을 찾아줄게. 대신 나와 함께 저녁을 먹어줘.” 공주는 약속했습니다.',
        en: 'A frog said, “I will find your ball. In return, eat dinner with me.” The princess promised.',
        words: [
          { ko: '개구리', en: 'frog', romanization: 'gaeguri' },
          { ko: '찾다', en: 'to find', romanization: 'chatda' },
          { ko: '대신', en: 'instead / in return', romanization: 'daesin' },
          { ko: '약속하다', en: 'to promise', romanization: 'yaksokhada' },
        ],
      },
      {
        ko: '개구리는 공을 가져왔습니다. 하지만 공주는 약속을 잊고 방으로 달려갔습니다.',
        en: 'The frog brought back the ball. But the princess forgot her promise and ran to her room.',
        words: [
          { ko: '가져오다', en: 'to bring', romanization: 'gajyeooda' },
          { ko: '잊다', en: 'to forget', romanization: 'itda' },
          { ko: '방', en: 'room', romanization: 'bang' },
        ],
      },
      {
        ko: '저녁 식사 때 개구리가 왔습니다. 왕이 말했습니다. “약속은 지켜야 한다.” 공주는 개구리를 받아들였습니다.',
        en: 'At dinner the frog arrived. The king said, “You must keep your promise.” The princess welcomed the frog.',
        words: [
          { ko: '저녁', en: 'evening / dinner', romanization: 'jeonyeok' },
          { ko: '왕', en: 'king', romanization: 'wang' },
          { ko: '지키다', en: 'to keep (a promise)', romanization: 'jikida' },
          { ko: '받아들이다', en: 'to accept', romanization: 'badadeurida' },
        ],
      },
      {
        ko: '공주가 개구리에게 키스를 하자, 마법이 풀렸습니다. 개구리는 멋진 왕자가 되었습니다.',
        en: 'When the princess kissed the frog, the spell broke. The frog became a handsome prince.',
        words: [
          { ko: '키스', en: 'kiss', romanization: 'kiseu' },
          { ko: '마법', en: 'magic / spell', romanization: 'mabeop' },
          { ko: '풀리다', en: 'to be undone', romanization: 'pullida' },
          { ko: '왕자', en: 'prince', romanization: 'wangja' },
        ],
      },
    ],
  },
  {
    id: 'elves-and-shoemaker',
    titleKo: '요정과 구두장이',
    titleEn: 'The Elves and the Shoemaker',
    summary: 'Tiny elves help a poor shoemaker, and he thanks them with gifts.',
    level: 'A1',
    minutes: 4,
    theme: 'Grimm',
    cover: 'story-art/elves-and-shoemaker-cover.jpg',
    questions: [
      {
        question: 'What does the shoemaker leave out for the elves?',
        options: ['Shoes and bread', 'Little coats and shoes', 'Gold coins'],
        answerIndex: 1,
      },
      {
        question: 'When do the elves come to work?',
        options: ['At noon', 'In the middle of the night', 'On Sunday morning'],
        answerIndex: 1,
      },
      {
        question: 'What happens after the shoemaker gives the gifts?',
        options: [
          'The elves are happy and leave',
          'The elves ask for more money',
          'The elves stay and demand payment',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '가난한 구두장이와 아내가 살았습니다. 가죽이 하나만 남았습니다.',
        en: 'A poor shoemaker and his wife lived together. Only one piece of leather remained.',
        words: [
          { ko: '가난하다', en: 'to be poor', romanization: 'gananhada' },
          { ko: '구두장이', en: 'shoemaker', romanization: 'gudujangi' },
          { ko: '아내', en: 'wife', romanization: 'anae' },
          { ko: '가죽', en: 'leather', romanization: 'gajuk' },
        ],
      },
      {
        ko: '다음 날 아침, 완벽한 구두 한 켤레가 만들어져 있었습니다. 손님이 와서 좋은 값을 주고 샀습니다.',
        en: 'The next morning, a perfect pair of shoes was already made. A customer came and paid a good price.',
        words: [
          { ko: '아침', en: 'morning', romanization: 'achim' },
          { ko: '완벽하다', en: 'to be perfect', romanization: 'wanbyeokhada' },
          { ko: '구두', en: 'shoes', romanization: 'gudu' },
          { ko: '손님', en: 'customer', romanization: 'sonnim' },
        ],
      },
      {
        ko: '밤마다 누군가 일을 했습니다. 부부는 숨어서 지켜보았습니다. 작은 요정들이 일하고 있었습니다.',
        en: 'Someone worked every night. The couple hid and watched. Little elves were sewing.',
        words: [
          { ko: '밤', en: 'night', romanization: 'bam' },
          { ko: '숨다', en: 'to hide', romanization: 'sumda' },
          { ko: '지켜보다', en: 'to watch', romanization: 'jikyeoboda' },
          { ko: '요정', en: 'elf / fairy', romanization: 'yojeong' },
        ],
      },
      {
        ko: '겨울이 와서 요정들은 옷이 너무 얇았습니다. 부부는 작은 옷과 구두를 만들어 두었습니다.',
        en: 'Winter came and the elves’ clothes were too thin. The couple made tiny coats and shoes for them.',
        words: [
          { ko: '겨울', en: 'winter', romanization: 'gyeoul' },
          { ko: '옷', en: 'clothes', romanization: 'ot' },
          { ko: '얇다', en: 'to be thin', romanization: 'yalbda' },
          { ko: '만들다', en: 'to make', romanization: 'mandeulda' },
        ],
      },
      {
        ko: '요정들은 선물을 보고 기뻐했습니다. 웃으며 떠났고, 구두장이는 그 후로도 잘 살았습니다.',
        en: 'The elves were delighted by the gifts. They left smiling, and the shoemaker lived well from then on.',
        words: [
          { ko: '선물', en: 'gift', romanization: 'seonmul' },
          { ko: '기쁘다', en: 'to be glad', romanization: 'gippeuda' },
          { ko: '웃다', en: 'to smile', romanization: 'utda' },
        ],
      },
    ],
  },
  {
    id: 'wolf-and-seven-kids',
    titleKo: '늑대와 일곱 마리 염소',
    titleEn: 'The Wolf and the Seven Young Goats',
    summary: 'A mother goat saves her children from a tricky wolf.',
    level: 'A1',
    minutes: 4,
    theme: 'Grimm',
    cover: 'story-art/wolf-and-seven-kids-cover.jpg',
    questions: [
      {
        question: 'Why does the mother goat leave home?',
        options: [
          'To buy food at the market',
          'To find the wolf',
          'To visit a friend',
        ],
        answerIndex: 0,
      },
      {
        question: 'How do the little goats know the visitor is not their mother?',
        options: [
          'His voice is deep and his paw is black',
          'He wears a red hat',
          'He brings no food',
        ],
        answerIndex: 0,
      },
      {
        question: 'Where does the mother find the last baby goat?',
        options: ['In the clock', 'Under the bed', 'In the garden'],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '염소 어미와 일곱 마리 새끼가 살았습니다. 어미는 시장에 갈 것이라고 말했습니다.',
        en: 'A mother goat lived with seven kids. She said she would go to the market.',
        words: [
          { ko: '염소', en: 'goat', romanization: 'yeomso' },
          { ko: '어미', en: 'mother (animal)', romanization: 'eomi' },
          { ko: '새끼', en: 'baby / young', romanization: 'saekki' },
          { ko: '시장', en: 'market', romanization: 'sijang' },
        ],
      },
      {
        ko: '“문을 열어주지 마라,” 어미가 말했습니다. “늑대가 올 수 있다.” 새끼들은 문을 꼭 닫았습니다.',
        en: '“Do not open the door,” mother said. “The wolf may come.” The kids locked the door tight.',
        words: [
          { ko: '문', en: 'door', romanization: 'mun' },
          { ko: '열다', en: 'to open', romanization: 'yeolda' },
          { ko: '닫다', en: 'to close', romanization: 'datda' },
        ],
      },
      {
        ko: '늑대가 와서 엄마인 척했습니다. 목소리가 너무 낮아서 새끼들은 문을 열지 않았습니다.',
        en: 'The wolf came and pretended to be mother. His voice was too deep, so the kids did not open the door.',
        words: [
          { ko: '척하다', en: 'to pretend', romanization: 'cheokhada' },
          { ko: '목소리', en: 'voice', romanization: 'moksori' },
          { ko: '낮다', en: 'to be low', romanization: 'natda' },
        ],
      },
      {
        ko: '늑대는 밀가루를 발에 바르고 다시 왔습니다. 새끼들은 속아 문을 열었습니다.',
        en: 'The wolf put flour on his paw and came again. The kids were fooled and opened the door.',
        words: [
          { ko: '밀가루', en: 'flour', romanization: 'milgaru' },
          { ko: '발', en: 'foot / paw', romanization: 'bal' },
          { ko: '속다', en: 'to be fooled', romanization: 'sokda' },
        ],
      },
      {
        ko: '어미가 돌아와 늑대를 쫓아냈습니다. 시계 속에 숨은 마지막 새끼도 다시 만났습니다.',
        en: 'Mother returned and chased the wolf away. She found the last kid hiding in the clock.',
        words: [
          { ko: '돌아오다', en: 'to return', romanization: 'doraoda' },
          { ko: '시계', en: 'clock', romanization: 'sigye' },
          { ko: '숨다', en: 'to hide', romanization: 'sumda' },
        ],
      },
    ],
  },
  {
    id: 'star-money',
    titleKo: '별돈',
    titleEn: 'The Star Money',
    summary: 'A poor girl gives away her coins and receives a gentle reward.',
    level: 'A1',
    minutes: 3,
    theme: 'Grimm',
    cover: 'story-art/star-money-cover.jpg',
    questions: [
      {
        question: 'What does the girl find in the forest?',
        options: ['Silver shoes', 'Four silver coins', 'A golden ring'],
        answerIndex: 1,
      },
      {
        question: 'Who does she give her last coin to?',
        options: ['A hungry child', 'A lost traveler', 'A poor beggar'],
        answerIndex: 2,
      },
      {
        question: 'What falls from the sky when she looks up?',
        options: ['Rain', 'Stars that become money', 'Snow'],
        answerIndex: 1,
      },
    ],
    paragraphs: [
      {
        ko: '아버지와 딸이 숲속 오두막에 살았습니다. 그들은 매우 가난했습니다.',
        en: 'A father and daughter lived in a hut in the forest. They were very poor.',
        words: [
          { ko: '아버지', en: 'father', romanization: 'abeoji' },
          { ko: '딸', en: 'daughter', romanization: 'ttal' },
          { ko: '오두막', en: 'hut / cabin', romanization: 'odumak' },
          { ko: '가난하다', en: 'to be poor', romanization: 'gananhada' },
        ],
      },
      {
        ko: '어느 날 딸은 숲에서 은화 네 닢을 주웠습니다. 그녀는 기뻐했습니다.',
        en: 'One day the daughter found four silver coins in the forest. She was happy.',
        words: [
          { ko: '은화', en: 'silver coin', romanization: 'eunhwa' },
          { ko: '주우다', en: 'to pick up', romanization: 'juuda' },
          { ko: '기쁘다', en: 'to be happy', romanization: 'gippeuda' },
        ],
      },
      {
        ko: '길에서 배고픈 아이를 만났습니다. 딸은 은화 하나를 주었습니다. 또 다른 사람에게도 나누어 주었습니다.',
        en: 'On the road she met a hungry child. She gave one coin, and shared with others too.',
        words: [
          { ko: '배고프다', en: 'to be hungry', romanization: 'baegopeuda' },
          { ko: '주다', en: 'to give', romanization: 'juda' },
          { ko: '나누다', en: 'to share', romanization: 'nanuda' },
        ],
      },
      {
        ko: '마지막 은화도 가난한 거지에게 주었습니다. 손에는 아무것도 남지 않았습니다.',
        en: 'She gave her last coin to a poor beggar. Nothing remained in her hands.',
        words: [
          { ko: '거지', en: 'beggar', romanization: 'geoji' },
          { ko: '마지막', en: 'last', romanization: 'majimak' },
          { ko: '남다', en: 'to remain', romanization: 'namda' },
        ],
      },
      {
        ko: '하늘을 올려다보니 별들이 떨어졌습니다. 별은 은화가 되어 그녀에게 내려왔습니다.',
        en: 'She looked up at the sky and stars fell down. The stars became silver coins raining upon her.',
        words: [
          { ko: '하늘', en: 'sky', romanization: 'haneul' },
          { ko: '별', en: 'star', romanization: 'byeol' },
          { ko: '떨어지다', en: 'to fall', romanization: 'tteoreojida' },
        ],
      },
    ],
  },
  {
    id: 'sweet-porridge',
    titleKo: '마법의 죽',
    titleEn: 'Sweet Porridge',
    summary: 'A magic pot feeds a hungry family, then nearly floods the town.',
    level: 'A1',
    minutes: 3,
    theme: 'Grimm',
    cover: 'story-art/sweet-porridge-cover.jpg',
    questions: [
      {
        question: 'What does the kind woman give the poor girl?',
        options: ['A magic pot', 'A bag of rice', 'A new dress'],
        answerIndex: 0,
      },
      {
        question: 'What words start the porridge cooking?',
        options: ['“Cook, little pot!”', '“Please feed us!”', '“Rise up, porridge!”'],
        answerIndex: 0,
      },
      {
        question: 'Who finally stops the overflowing porridge?',
        options: ['The girl', 'The mother', 'A neighbor'],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '가난한 소녀와 어머니는 먹을 것이 거의 없었습니다. 어느 날 친절한 할머니를 만났습니다.',
        en: 'A poor girl and her mother had almost nothing to eat. One day they met a kind old woman.',
        words: [
          { ko: '어머니', en: 'mother', romanization: 'eomeoni' },
          { ko: '먹을 것', en: 'food', romanization: 'meogeul geot' },
          { ko: '친절하다', en: 'to be kind', romanization: 'chinjeolhada' },
        ],
      },
      {
        ko: '할머니는 마법의 냄비를 주었습니다. “죽을 끓여, 작은 냄비야!” 하면 달콤한 죽이 나왔습니다.',
        en: 'The old woman gave them a magic pot. Say “Cook, little pot!” and sweet porridge came out.',
        words: [
          { ko: '마법', en: 'magic', romanization: 'mabeop' },
          { ko: '냄비', en: 'pot', romanization: 'naembi' },
          { ko: '끓이다', en: 'to boil / cook', romanization: 'kkeurida' },
          { ko: '달콤하다', en: 'to be sweet', romanization: 'dalkomhada' },
        ],
      },
      {
        ko: '소녀가 밖에 있을 때 어머니도 죽을 끓였습니다. 맛있어서 계속 끓였습니다.',
        en: 'While the girl was outside, mother cooked porridge too. It tasted so good that she kept it boiling.',
        words: [
          { ko: '밖', en: 'outside', romanization: 'bak' },
          { ko: '맛있다', en: 'to be delicious', romanization: 'masitda' },
          { ko: '계속', en: 'continuously', romanization: 'gyesok' },
        ],
      },
      {
        ko: '죽이 냄비 밖으로 넘쳤습니다. 집과 마을 길까지 흘렀습니다.',
        en: 'The porridge spilled over the pot. It flowed through the house and into the village streets.',
        words: [
          { ko: '넘치다', en: 'to overflow', romanization: 'neomchida' },
          { ko: '흐르다', en: 'to flow', romanization: 'heureuda' },
          { ko: '마을', en: 'village', romanization: 'maeul' },
        ],
      },
      {
        ko: '소녀가 돌아와 “멈춰, 작은 냄비야!”라고 외쳤습니다. 죽은 그제서야 멈췄습니다.',
        en: 'The girl returned and cried, “Stop, little pot!” Only then did the porridge stop.',
        words: [
          { ko: '돌아오다', en: 'to come back', romanization: 'doraoda' },
          { ko: '멈추다', en: 'to stop', romanization: 'meomchuda' },
          { ko: '외치다', en: 'to shout', romanization: 'oechida' },
        ],
      },
    ],
  },
  {
    id: 'hansel-and-gretel',
    titleKo: '헨젤과 그레텔',
    titleEn: 'Hansel and Gretel',
    summary: 'Two siblings lost in the woods find their way home with courage and wit.',
    level: 'A2',
    minutes: 6,
    theme: 'Grimm',
    cover: 'story-art/hansel-and-gretel-cover.jpg',
    questions: [
      {
        question: 'Why are Hansel and Gretel left in the forest?',
        options: [
          'Their family is very poor',
          'They want to explore',
          'They are punished for being late',
        ],
        answerIndex: 0,
      },
      {
        question: 'What is unusual about the house they find?',
        options: [
          'It is made of candy and cake',
          'It floats on a lake',
          'It has no doors',
        ],
        answerIndex: 0,
      },
      {
        question: 'How do the children finally get home?',
        options: [
          'A duck carries them across a river',
          'The witch gives them a map',
          'They follow a rainbow',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '헨젤과 그레텔은 가난한 나무꾼의 아이들이었습니다. 어느 날 숲속 깊은 곳에 두 아이를 남겨 두었습니다.',
        en: 'Hansel and Gretel were children of a poor woodcutter. One day the two were left deep in the forest.',
        words: [
          { ko: '나무꾼', en: 'woodcutter', romanization: 'namukkun' },
          { ko: '숲속', en: 'in the forest', romanization: 'supsok' },
          { ko: '깊다', en: 'to be deep', romanization: 'gipda' },
          { ko: '남기다', en: 'to leave behind', romanization: 'namgida' },
        ],
      },
      {
        ko: '헨젤은 빵 부스러기를 길에 뿌렸지만, 새들이 다 먹어 버렸습니다. 아이들은 길을 잃었습니다.',
        en: 'Hansel dropped bread crumbs along the path, but birds ate them all. The children were lost.',
        words: [
          { ko: '빵', en: 'bread', romanization: 'ppang' },
          { ko: '부스러기', en: 'crumb', romanization: 'buseureogi' },
          { ko: '새', en: 'bird', romanization: 'sae' },
          { ko: '길을 잃다', en: 'to get lost', romanization: 'gireul ilta' },
        ],
      },
      {
        ko: '그들은 과자와 케이크로 만든 집을 발견했습니다. 집 안에는 친절해 보이는 할머니가 있었습니다.',
        en: 'They found a house made of sweets and cake. Inside was an old woman who seemed kind.',
        words: [
          { ko: '과자', en: 'cookie / snack', romanization: 'gwaja' },
          { ko: '발견하다', en: 'to discover', romanization: 'balgyeonhada' },
          { ko: '친절하다', en: 'to be kind', romanization: 'chinjeolhada' },
        ],
      },
      {
        ko: '하지만 그녀는 마녀였습니다. 그레텔은 용감하게 마녀를 속여 오븐에 넣었습니다.',
        en: 'But she was a witch. Brave Gretel tricked the witch and pushed her into the oven.',
        words: [
          { ko: '마녀', en: 'witch', romanization: 'manyeo' },
          { ko: '용감하다', en: 'to be brave', romanization: 'yonggamhada' },
          { ko: '속이다', en: 'to trick', romanization: 'sogida' },
          { ko: '오븐', en: 'oven', romanization: 'obeun' },
        ],
      },
      {
        ko: '아이들은 마녀의 보물을 찾아 집으로 돌아갔습니다. 오리가 강을 건네 주었습니다.',
        en: 'The children found the witch’s treasure and headed home. A duck helped them cross the river.',
        words: [
          { ko: '보물', en: 'treasure', romanization: 'bomul' },
          { ko: '돌아가다', en: 'to go back', romanization: 'doragada' },
          { ko: '오리', en: 'duck', romanization: 'ori' },
          { ko: '강', en: 'river', romanization: 'gang' },
        ],
      },
      {
        ko: '집에 도착했을 때 아버지는 기뻐하며 그들을 안았습니다. 가족은 다시 함께 살았습니다.',
        en: 'When they reached home, their father hugged them with joy. The family lived together again.',
        words: [
          { ko: '도착하다', en: 'to arrive', romanization: 'dochakhada' },
          { ko: '안아주다', en: 'to hug', romanization: 'anajuda' },
          { ko: '가족', en: 'family', romanization: 'gajok' },
        ],
      },
    ],
  },
  {
    id: 'cinderella',
    titleKo: '신데렐라',
    titleEn: 'Cinderella',
    summary: 'A kind girl goes to the ball and finds happiness with a little magic.',
    level: 'A2',
    minutes: 6,
    theme: 'Grimm',
    cover: 'story-art/cinderella-cover.jpg',
    questions: [
      {
        question: 'Who helps Cinderella get ready for the ball?',
        options: ['Her fairy godmother', 'Her stepsisters', 'A talking bird'],
        answerIndex: 0,
      },
      {
        question: 'What does Cinderella leave behind at midnight?',
        options: ['A golden ring', 'A glass slipper', 'A silver crown'],
        answerIndex: 1,
      },
      {
        question: 'How does the prince find Cinderella?',
        options: [
          'The slipper fits only her foot',
          'She sends him a letter',
          'The fairy tells him her name',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '신데렐라는 계모와 언니들과 살았습니다. 그녀는 하루 종일 집안일을 했습니다.',
        en: 'Cinderella lived with her stepmother and stepsisters. She worked in the house all day.',
        words: [
          { ko: '계모', en: 'stepmother', romanization: 'gyemo' },
          { ko: '언니', en: 'older sister', romanization: 'eonni' },
          { ko: '집안일', en: 'housework', romanization: 'jibanil' },
        ],
      },
      {
        ko: '왕궁에서 큰 무도회가 열렸습니다. 계모는 언니들만 데려갔습니다.',
        en: 'A grand ball was held at the palace. Stepmother took only her daughters.',
        words: [
          { ko: '무도회', en: 'ball / dance party', romanization: 'mudohoe' },
          { ko: '열리다', en: 'to be held / open', romanization: 'yeollida' },
          { ko: '데려가다', en: 'to take along', romanization: 'deryeogada' },
        ],
      },
      {
        ko: '요정 할머니가 나타났습니다. 호박 마차와 예쁜 드레스를 만들어 주었습니다.',
        en: 'A fairy godmother appeared. She made a pumpkin carriage and a beautiful dress.',
        words: [
          { ko: '요정', en: 'fairy', romanization: 'yojeong' },
          { ko: '호박', en: 'pumpkin', romanization: 'hobak' },
          { ko: '마차', en: 'carriage', romanization: 'macha' },
          { ko: '드레스', en: 'dress', romanization: 'deureseu' },
        ],
      },
      {
        ko: '신데렐라는 무도회에서 왕자와 춤을 췄습니다. 자정이 되자 서둘러 떠났습니다.',
        en: 'At the ball Cinderella danced with the prince. At midnight she hurried away.',
        words: [
          { ko: '춤', en: 'dance', romanization: 'chum' },
          { ko: '자정', en: 'midnight', romanization: 'jeong' },
          { ko: '서둘러', en: 'in a hurry', romanization: 'seodulleo' },
        ],
      },
      {
        ko: '계단에서 유리 구두 한 짝을 잃어버렸습니다. 왕자는 그 구두를 들고 집집을 찾아다녔습니다.',
        en: 'On the stairs she lost one glass slipper. The prince searched every house with it.',
        words: [
          { ko: '계단', en: 'stairs', romanization: 'gyedan' },
          { ko: '유리', en: 'glass', romanization: 'yuri' },
          { ko: '구두', en: 'shoe', romanization: 'gudu' },
          { ko: '찾아다니다', en: 'to search around', romanization: 'chajadanida' },
        ],
      },
      {
        ko: '구두는 신데렐라의 발에 딱 맞았습니다. 왕자와 신데렐라는 행복하게 결혼했습니다.',
        en: 'The slipper fit Cinderella perfectly. She and the prince married and lived happily.',
        words: [
          { ko: '발', en: 'foot', romanization: 'bal' },
          { ko: '맞다', en: 'to fit', romanization: 'matda' },
          { ko: '결혼하다', en: 'to marry', romanization: 'gyeolhonhada' },
        ],
      },
    ],
  },
  {
    id: 'snow-white',
    titleKo: '백설공주',
    titleEn: 'Snow White',
    summary: 'A gentle princess finds shelter with seven dwarfs and awakens from a long sleep.',
    level: 'A2',
    minutes: 6,
    theme: 'Grimm',
    cover: 'story-art/snow-white-cover.jpg',
    questions: [
      {
        question: 'Why does the queen ask about Snow White?',
        options: [
          'She is jealous of Snow White’s beauty',
          'She needs help in the kitchen',
          'Snow White is lost in the woods',
        ],
        answerIndex: 0,
      },
      {
        question: 'Who takes care of Snow White in the forest?',
        options: ['Seven dwarfs', 'Three fairies', 'A family of bears'],
        answerIndex: 0,
      },
      {
        question: 'How does Snow White wake up?',
        options: [
          'The prince’s kiss breaks the spell',
          'The dwarfs give her medicine',
          'Rain washes the poison away',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '백설공주는 피부가 하얗고 마음이 착한 공주였습니다. 계모 왕비는 거울에게 누가 가장 아름다운지 물었습니다.',
        en: 'Snow White had fair skin and a kind heart. The stepmother queen asked her mirror who was fairest.',
        words: [
          { ko: '공주', en: 'princess', romanization: 'gongju' },
          { ko: '왕비', en: 'queen', romanization: 'wangbi' },
          { ko: '거울', en: 'mirror', romanization: 'geoul' },
          { ko: '아름답다', en: 'to be beautiful', romanization: 'areumdapda' },
        ],
      },
      {
        ko: '거울은 백설공주가 더 아름답다고 말했습니다. 왕비는 공주를 숲으로 보냈습니다.',
        en: 'The mirror said Snow White was more beautiful. The queen sent her into the forest.',
        words: [
          { ko: '보내다', en: 'to send', romanization: 'bonaeda' },
          { ko: '숲', en: 'forest', romanization: 'sup' },
        ],
      },
      {
        ko: '백설공주는 일곱 난쟁이의 집을 찾았습니다. 난쟁이들은 그녀를 따뜻하게 맞아 주었습니다.',
        en: 'Snow White found the home of seven dwarfs. They welcomed her warmly.',
        words: [
          { ko: '난쟁이', en: 'dwarf', romanization: 'nanjaengi' },
          { ko: '따뜻하다', en: 'to be warm', romanization: 'ttatteuthada' },
          { ko: '맞아 주다', en: 'to welcome', romanization: 'maja juda' },
        ],
      },
      {
        ko: '왕비는 독이 든 사과를 가져왔습니다. 백설공주는 한 입 베어 물고 깊이 잠들었습니다.',
        en: 'The queen brought a poisoned apple. Snow White took one bite and fell into a deep sleep.',
        words: [
          { ko: '독', en: 'poison', romanization: 'dok' },
          { ko: '사과', en: 'apple', romanization: 'sagwa' },
          { ko: '잠들다', en: 'to fall asleep', romanization: 'jamdeulda' },
        ],
      },
      {
        ko: '난쟁이들은 슬퍼했지만 공주를 유리 관에 눕혀 지켰습니다.',
        en: 'The dwarfs were sad but laid the princess in a glass coffin and watched over her.',
        words: [
          { ko: '슬프다', en: 'to be sad', romanization: 'seulpeuda' },
          { ko: '유리', en: 'glass', romanization: 'yuri' },
          { ko: '관', en: 'coffin / case', romanization: 'gwan' },
        ],
      },
      {
        ko: '왕자가 와서 공주에게 키스했습니다. 백설공주는 눈을 뜨고 왕자와 함께 행복하게 살았습니다.',
        en: 'A prince came and kissed her. Snow White opened her eyes and lived happily with him.',
        words: [
          { ko: '왕자', en: 'prince', romanization: 'wangja' },
          { ko: '눈을 뜨다', en: 'to open one’s eyes', romanization: 'nuneul tteuda' },
          { ko: '행복하다', en: 'to be happy', romanization: 'haengbokhada' },
        ],
      },
    ],
  },
  {
    id: 'rapunzel',
    titleKo: '라푼젤',
    titleEn: 'Rapunzel',
    summary: 'A girl with long golden hair lives in a tower until love sets her free.',
    level: 'A2',
    minutes: 6,
    theme: 'Grimm',
    cover: 'story-art/rapunzel-cover.jpg',
    questions: [
      {
        question: 'Where does Rapunzel live?',
        options: ['In a tall tower', 'On a farm', 'In a palace'],
        answerIndex: 0,
      },
      {
        question: 'How does the witch climb up to Rapunzel?',
        options: [
          'She uses Rapunzel’s long hair',
          'She flies on a broom',
          'She builds a ladder',
        ],
        answerIndex: 0,
      },
      {
        question: 'What happens when the prince finds Rapunzel?',
        options: [
          'They escape together and marry',
          'The witch keeps them apart forever',
          'Rapunzel decides to stay alone',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '어느 부부가 마녀의 정원에서 라푼젤을 훔쳤습니다. 마녀는 아기를 가져가 탑에 가두었습니다.',
        en: 'A couple stole rapunzel greens from a witch’s garden. The witch took the baby and locked her in a tower.',
        words: [
          { ko: '부부', en: 'couple', romanization: 'bubu' },
          { ko: '마녀', en: 'witch', romanization: 'manyeo' },
          { ko: '훔치다', en: 'to steal', romanization: 'humchida' },
          { ko: '탑', en: 'tower', romanization: 'tap' },
        ],
      },
      {
        ko: '라푼젤은 긴 금발 머리를 가졌습니다. 마녀는 “라푼젤, 머리를 내려라!” 하고 부르면 올라갔습니다.',
        en: 'Rapunzel had long golden hair. The witch called, “Rapunzel, let down your hair!” and climbed up.',
        words: [
          { ko: '금발', en: 'blond hair', romanization: 'geumbal' },
          { ko: '머리', en: 'hair / head', romanization: 'meori' },
          { ko: '내려라', en: 'let down', romanization: 'naeryeora' },
        ],
      },
      {
        ko: '어느 날 왕자가 탑 아래에서 라푼젤의 노래를 들었습니다. 그도 머리를 타고 올라갔습니다.',
        en: 'One day a prince below heard Rapunzel singing. He climbed up her hair too.',
        words: [
          { ko: '노래', en: 'song', romanization: 'norae' },
          { ko: '듣다', en: 'to hear', romanization: 'deutda' },
          { ko: '올라가다', en: 'to climb up', romanization: 'ollagada' },
        ],
      },
      {
        ko: '두 사람은 사랑에 빠졌습니다. 왕자는 실크 리본을 가져와 탈출 계획을 세웠습니다.',
        en: 'The two fell in love. The prince brought silk ribbons and they planned to escape.',
        words: [
          { ko: '사랑', en: 'love', romanization: 'sarang' },
          { ko: '실크', en: 'silk', romanization: 'silkeu' },
          { ko: '탈출', en: 'escape', romanization: 'talchul' },
        ],
      },
      {
        ko: '마녀는 화가 나 머리를 잘랐습니다. 하지만 왕자는 다시 라푼젤을 찾았습니다.',
        en: 'The angry witch cut off her hair. But the prince found Rapunzel again.',
        words: [
          { ko: '화가 나다', en: 'to get angry', romanization: 'hwaga nada' },
          { ko: '자르다', en: 'to cut', romanization: 'jareuda' },
          { ko: '다시', en: 'again', romanization: 'dasi' },
        ],
      },
      {
        ko: '라푼젤의 눈물이 왕자를 낫게 했습니다. 두 사람은 결혼하고 오랫동안 행복하게 살았습니다.',
        en: 'Rapunzel’s tears healed the prince. They married and lived happily for many years.',
        words: [
          { ko: '눈물', en: 'tear', romanization: 'nunmul' },
          { ko: '낫다', en: 'to heal / recover', romanization: 'natda' },
          { ko: '오랫동안', en: 'for a long time', romanization: 'oraetdongan' },
        ],
      },
    ],
  },
  {
    id: 'sleeping-beauty',
    titleKo: '잠자는 숲속의 미녀',
    titleEn: 'Sleeping Beauty',
    summary: 'A princess sleeps for a hundred years until true love awakens her.',
    level: 'A2',
    minutes: 6,
    theme: 'Grimm',
    cover: 'story-art/sleeping-beauty-cover.jpg',
    questions: [
      {
        question: 'What gift does the last fairy give the princess?',
        options: [
          'She will sleep instead of dying',
          'She will become a queen at once',
          'She will never feel pain',
        ],
        answerIndex: 0,
      },
      {
        question: 'What makes the princess fall asleep?',
        options: ['A spindle prick', 'A magic song', 'A hidden potion'],
        answerIndex: 0,
      },
      {
        question: 'Who wakes Sleeping Beauty?',
        options: ['A prince', 'Her parents', 'The last fairy'],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '왕과 왕비에게 아기 공주가 태어났습니다. 세 명의 선녀가 축복을 내렸습니다.',
        en: 'A baby princess was born to the king and queen. Three fairies came to bless her.',
        words: [
          { ko: '태어나다', en: 'to be born', romanization: 'taeonada' },
          { ko: '선녀', en: 'fairy', romanization: 'seonnyeo' },
          { ko: '축복', en: 'blessing', romanization: 'chukbok' },
        ],
      },
      {
        ko: '하지만 화난 마녀도 왔습니다. “열여섯 살에 실에 찔리면 죽을 것이다!”라고 저주했습니다.',
        en: 'But an angry witch came too. She cursed, “At sixteen she will die from a spindle prick!”',
        words: [
          { ko: '저주', en: 'curse', romanization: 'jeoju' },
          { ko: '실', en: 'spindle / thread', romanization: 'sil' },
          { ko: '찔리다', en: 'to be pricked', romanization: 'jjillida' },
        ],
      },
      {
        ko: '마지막 선녀는 저주를 약하게 바꿨습니다. 공주는 죽지 않고 오래 잠만 잘 것이라고 했습니다.',
        en: 'The last fairy softened the curse. The princess would not die, only sleep for a long time.',
        words: [
          { ko: '약하다', en: 'to be weak / soften', romanization: 'yakhada' },
          { ko: '바꾸다', en: 'to change', romanization: 'bakkuda' },
          { ko: '잠', en: 'sleep', romanization: 'jam' },
        ],
      },
      {
        ko: '열여섯 살이 되던 날, 공주는 낡은 방에서 실에 찔렸습니다. 온 성이 함께 잠들었습니다.',
        en: 'On her sixteenth birthday she pricked her finger in an old room. The whole castle fell asleep.',
        words: [
          { ko: '낡다', en: 'to be old / worn', romanization: 'nakda' },
          { ko: '성', en: 'castle', romanization: 'seong' },
          { ko: '함께', en: 'together', romanization: 'hamkke' },
        ],
      },
      {
        ko: '숲이 성을 둘러싸 백 년이 지났습니다. 어느 날 왕자가 가시덤불을 헤치고 들어왔습니다.',
        en: 'A forest grew around the castle for a hundred years. One day a prince pushed through the thorns.',
        words: [
          { ko: '둘러싸다', en: 'to surround', romanization: 'dulleossada' },
          { ko: '백 년', en: 'a hundred years', romanization: 'baek nyeon' },
          { ko: '가시덤불', en: 'thorn bush', romanization: 'gasideombul' },
        ],
      },
      {
        ko: '왕자가 공주에게 키스하자, 잠에서 깨어났습니다. 성의 모든 사람도 함께 깨어났습니다.',
        en: 'When the prince kissed her, she awoke. Everyone in the castle woke with her.',
        words: [
          { ko: '깨어나다', en: 'to wake up', romanization: 'kkaeeonada' },
          { ko: '모든', en: 'every / all', romanization: 'modeun' },
          { ko: '사람', en: 'person', romanization: 'saram' },
        ],
      },
    ],
  },
  {
    id: 'golden-goose',
    titleKo: '황금 거위',
    titleEn: 'The Golden Goose',
    summary: 'A kind simpleton shares his luck and wins the princess’s smile.',
    level: 'A2',
    minutes: 5,
    theme: 'Grimm',
    cover: 'story-art/golden-goose-cover.jpg',
    questions: [
      {
        question: 'What special animal does the youngest son find?',
        options: ['A golden goose', 'A talking horse', 'A silver fox'],
        answerIndex: 0,
      },
      {
        question: 'Why do people stick to the goose?',
        options: [
          'They try to pull off a feather',
          'They are punished by a witch',
          'The goose calls their names',
        ],
        answerIndex: 0,
      },
      {
        question: 'What must the princess do to win the prize?',
        options: ['Laugh before sunset', 'Cook a feast', 'Solve a riddle'],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '세 형제가 숲에서 일을 했습니다. 막내는 작은 사람들을 도와 주었습니다.',
        en: 'Three brothers worked in the forest. The youngest helped some little men.',
        words: [
          { ko: '형제', en: 'brothers', romanization: 'hyeongje' },
          { ko: '막내', en: 'youngest', romanization: 'mangnae' },
          { ko: '도와주다', en: 'to help', romanization: 'dowajuda' },
        ],
      },
      {
        ko: '그들은 황금 거위를 선물로 주었습니다. 막내는 거위를 들고 길을 갔습니다.',
        en: 'They gave him a golden goose as a gift. The youngest walked on with the goose.',
        words: [
          { ko: '황금', en: 'gold / golden', romanization: 'hwanggeum' },
          { ko: '거위', en: 'goose', romanization: 'geowi' },
          { ko: '선물', en: 'gift', romanization: 'seonmul' },
        ],
      },
      {
        ko: '여관 주인이 깃털을 뽑으려다 거위에 달라붙었습니다. 다른 사람들도 줄줄이 붙었습니다.',
        en: 'The innkeeper tried to pluck a feather and stuck to the goose. Others lined up behind.',
        words: [
          { ko: '여관', en: 'inn', romanization: 'yeogwan' },
          { ko: '깃털', en: 'feather', romanization: 'gitteol' },
          { ko: '달라붙다', en: 'to stick to', romanization: 'dallabutda' },
        ],
      },
      {
        ko: '왕은 말했습니다. “공주를 웃게 하면 이 공주와 결혼할 수 있다.” 하지만 아무도 웃지 않았습니다.',
        en: 'The king said, “Whoever makes the princess laugh may marry her.” But no one could.',
        words: [
          { ko: '왕', en: 'king', romanization: 'wang' },
          { ko: '웃기다', en: 'to make laugh', romanization: 'utgida' },
          { ko: '결혼', en: 'marriage', romanization: 'gyeolhon' },
        ],
      },
      {
        ko: '막내와 긴 행렬이 궁전에 들어왔습니다. 공주는 크게 웃었습니다. 두 사람은 기쁘게 결혼했습니다.',
        en: 'The youngest entered the palace with a long parade. The princess laughed loudly. They married with joy.',
        words: [
          { ko: '행렬', en: 'parade / procession', romanization: 'haengnyeol' },
          { ko: '궁전', en: 'palace', romanization: 'gungjeon' },
          { ko: '기쁘다', en: 'to be glad', romanization: 'gippeuda' },
        ],
      },
    ],
  },
  {
    id: 'rumpelstiltskin',
    titleKo: '룸펠슈팅스킨',
    titleEn: 'Rumpelstiltskin',
    summary: 'A strange little man spins straw into gold, but his secret name is his undoing.',
    level: 'B1',
    minutes: 7,
    theme: 'Grimm',
    cover: 'story-art/rumpelstiltskin-cover.jpg',
    questions: [
      {
        question: 'What impossible task is the miller’s daughter given?',
        options: [
          'Spin straw into gold in one night',
          'Find a hidden diamond',
          'Bake bread for the whole town',
        ],
        answerIndex: 0,
      },
      {
        question: 'What does the little man ask for in return?',
        options: [
          'Her first child',
          'Half the kingdom',
          'A golden ring',
        ],
        answerIndex: 0,
      },
      {
        question: 'How does she finally stop him?',
        options: [
          'She learns and speaks his secret name',
          'She locks him in a tower',
          'She burns the spinning wheel',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '방앗간 주인은 딸이 짚을 금으로 잣을 수 있다고 거짓말했습니다. 왕은 그녀를 감옥에 가두고 밤마다 짚더미를 주었습니다.',
        en: 'A miller falsely claimed his daughter could spin straw into gold. The king locked her up with piles of straw each night.',
        words: [
          { ko: '방앗간', en: 'mill', romanization: 'bangatgan' },
          { ko: '거짓말', en: 'lie', romanization: 'geojitmal' },
          { ko: '짚', en: 'straw', romanization: 'jip' },
          { ko: '감옥', en: 'prison', romanization: 'gamok' },
        ],
      },
      {
        ko: '작은 남자가 나타나 말했습니다. “내가 도와줄게. 대신 네 첫아이를 달라.” 그녀는 절망해서 동의했습니다.',
        en: 'A little man appeared and said, “I will help. Give me your first child.” In despair she agreed.',
        words: [
          { ko: '나타나다', en: 'to appear', romanization: 'natanada' },
          { ko: '첫아이', en: 'first child', romanization: 'cheotai' },
          { ko: '절망', en: 'despair', romanization: 'jeolmang' },
          { ko: '동의하다', en: 'to agree', romanization: 'donguihada' },
        ],
      },
      {
        ko: '남자는 바퀴를 돌려 짚을 반짝이는 금실로 바꿨습니다. 왕은 기뻐하며 그녀와 결혼했습니다.',
        en: 'He spun the wheel and turned straw into shining gold thread. The pleased king married her.',
        words: [
          { ko: '바퀴', en: 'wheel', romanization: 'bakwi' },
          { ko: '돌리다', en: 'to spin / turn', romanization: 'dollida' },
          { ko: '금실', en: 'gold thread', romanization: 'geumsil' },
        ],
      },
      {
        ko: '며칠 후 아기가 태어났습니다. 남자가 와서 약속을 들이댔습니다. 여왕은 울며 시간을 달라고 했습니다.',
        en: 'Days later a baby was born. The man came for his promise. The queen wept and begged for time.',
        words: [
          { ko: '아기', en: 'baby', romanization: 'agi' },
          { ko: '약속', en: 'promise', romanization: 'yaksok' },
          { ko: '울다', en: 'to cry', romanization: 'ulda' },
        ],
      },
      {
        ko: '그는 말했습니다. “이름을 맞히면 아이를 놓아주마.” 여왕은 사신을 보내 온 나라의 이름을 조사했습니다.',
        en: 'He said, “Guess my name and I will let the child go.” The queen sent messengers to search every name.',
        words: [
          { ko: '맞히다', en: 'to guess correctly', romanization: 'majichida' },
          { ko: '놓아주다', en: 'to let go', romanization: 'noajuda' },
          { ko: '사신', en: 'messenger', romanization: 'sasin' },
          { ko: '조사하다', en: 'to investigate', romanization: 'josahada' },
        ],
      },
      {
        ko: '어느 날 그가 혼자 노래하며 자신의 이름을 불렀습니다. 신하가 들었습니다. 다음 날 여왕이 “룸펠슈팅스킨!”이라고 외쳤습니다.',
        en: 'One day he sang his own name alone. A servant heard. The next day the queen cried, “Rumpelstiltskin!”',
        words: [
          { ko: '혼자', en: 'alone', romanization: 'honja' },
          { ko: '노래하다', en: 'to sing', romanization: 'noraehada' },
          { ko: '신하', en: 'servant / courtier', romanization: 'sinha' },
        ],
      },
      {
        ko: '남자는 너무 화가 나 발로 땅을 구르며 사라졌습니다. 아기는 어머니 품에 안전하게 남았습니다.',
        en: 'Furious, the man stamped his foot and vanished. The baby stayed safe in its mother’s arms.',
        words: [
          { ko: '화가 나다', en: 'to get angry', romanization: 'hwaga nada' },
          { ko: '발', en: 'foot', romanization: 'bal' },
          { ko: '사라지다', en: 'to disappear', romanization: 'sarajida' },
          { ko: '안전하다', en: 'to be safe', romanization: 'anjeonhada' },
        ],
      },
    ],
  },
  {
    id: 'fisherman-and-wife',
    titleKo: '어부와 그의 아내',
    titleEn: 'The Fisherman and His Wife',
    summary: 'A magic fish grants wishes, but greed soon ruins a humble home.',
    level: 'B1',
    minutes: 7,
    theme: 'Grimm',
    cover: 'story-art/fisherman-and-wife-cover.jpg',
    questions: [
      {
        question: 'What does the fisherman catch at the start?',
        options: ['A talking fish', 'A golden net', 'A silver boat'],
        answerIndex: 0,
      },
      {
        question: 'What is the wife’s first wish?',
        options: [
          'A better cottage',
          'To become queen',
          'A chest of gold',
        ],
        answerIndex: 0,
      },
      {
        question: 'Where do the couple end up?',
        options: [
          'Back in their old poor hut',
          'In the king’s palace',
          'On a distant island',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '가난한 어부가 바다에서 물고기를 잡았습니다. 물고기가 말했습니다. “나를 놓아주면 소원을 들어주마.”',
        en: 'A poor fisherman caught a fish in the sea. The fish said, “Let me go and I will grant your wish.”',
        words: [
          { ko: '어부', en: 'fisherman', romanization: 'eobu' },
          { ko: '바다', en: 'sea', romanization: 'bada' },
          { ko: '물고기', en: 'fish', romanization: 'mulgogi' },
          { ko: '소원', en: 'wish', romanization: 'sowon' },
        ],
      },
      {
        ko: '어부는 물고기를 바다에 돌려보냈습니다. 집에 가서 아내에게 말했지만, 아내는 더 나은 집을 원했습니다.',
        en: 'He returned the fish to the sea. He told his wife, but she wanted a better cottage.',
        words: [
          { ko: '돌려보내다', en: 'to send back', romanization: 'dollyeobonaeda' },
          { ko: '아내', en: 'wife', romanization: 'anae' },
          { ko: '원하다', en: 'to want', romanization: 'wonhada' },
        ],
      },
      {
        ko: '물고기는 소원을 들어주었습니다. 집은 커다란 오두막이 되었습니다. 하지만 아내는 곧 성을 원했습니다.',
        en: 'The fish granted the wish. Their home became a large cottage. Soon the wife wanted a castle.',
        words: [
          { ko: '들어주다', en: 'to grant', romanization: 'deureojuda' },
          { ko: '커다랗다', en: 'to be large', romanization: 'keodaratda' },
          { ko: '성', en: 'castle', romanization: 'seong' },
        ],
      },
      {
        ko: '아내는 왕비가 되고, 다음에는 황후가 되고, 마침내 바다와 달까지 다스리고 싶어 했습니다.',
        en: 'She became queen, then empress, and finally wanted to rule the sea and the moon.',
        words: [
          { ko: '왕비', en: 'queen', romanization: 'wangbi' },
          { ko: '황후', en: 'empress', romanization: 'hwanghu' },
          { ko: '다스리다', en: 'to rule', romanization: 'daseurida' },
          { ko: '달', en: 'moon', romanization: 'dal' },
        ],
      },
      {
        ko: '어부는 매번 바다로 가 물고기에게 부탁했습니다. 물고기는 조용히 소원을 들어주었습니다.',
        en: 'Each time the fisherman went to the sea and asked. The fish quietly granted every wish.',
        words: [
          { ko: '매번', en: 'each time', romanization: 'maebeon' },
          { ko: '부탁하다', en: 'to ask a favor', romanization: 'butakada' },
          { ko: '조용히', en: 'quietly', romanization: 'joyonghi' },
        ],
      },
      {
        ko: '마지막 소원을 들은 물고기는 아무 말 없이 사라졌습니다. 어부와 아내는 다시 낡은 오두막으로 돌아왔습니다.',
        en: 'After the last wish the fish vanished without a word. The couple returned to their old poor hut.',
        words: [
          { ko: '마지막', en: 'last', romanization: 'majimak' },
          { ko: '사라지다', en: 'to disappear', romanization: 'sarajida' },
          { ko: '낡다', en: 'to be old / worn', romanization: 'nakda' },
          { ko: '돌아오다', en: 'to come back', romanization: 'doraoda' },
        ],
      },
      {
        ko: '아내는 마침내 후회했습니다. 어부는 조용히 말했습니다. “이제 우리가 가진 것으로 충분하다.”',
        en: 'At last the wife regretted her greed. The fisherman said softly, “What we have is enough now.”',
        words: [
          { ko: '후회하다', en: 'to regret', romanization: 'huhoehada' },
          { ko: '욕심', en: 'greed', romanization: 'yoksim' },
          { ko: '충분하다', en: 'to be enough', romanization: 'chungbunhada' },
        ],
      },
    ],
  },
]
