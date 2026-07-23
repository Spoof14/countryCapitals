import type { Story } from '../../types'

export const koreanTaleStories: Story[] = [
  {
    id: 'green-frog',
    titleKo: '청개구리',
    titleEn: 'The Green Frog',
    summary: 'A disobedient frog learns why frogs cry in the rain.',
    level: 'A1',
    minutes: 3,
    theme: 'Korean tale',
    cover: 'story-art/green-frog-cover.jpg',
    questions: [
      {
        question: 'What did the mother frog ask her son to do?',
        options: [
          'Bury her by the river',
          'Bury her on the hill',
          'Take her to the forest',
        ],
        answerIndex: 0,
      },
      {
        question: 'Where did the green frog bury his mother?',
        options: ['By the river', 'On the hill', 'In the village'],
        answerIndex: 1,
      },
      {
        question: 'Why do frogs cry when it rains?',
        options: [
          'They are happy',
          'They regret not listening to their mother',
          'They want to find food',
        ],
        answerIndex: 1,
      },
    ],
    paragraphs: [
      {
        ko: '옛날에 청개구리 어머니와 아들이 살았습니다. 어머니는 아들에게 말했습니다.',
        en: 'Long ago, a mother frog and her son lived together. The mother spoke to her son.',
        words: [
          { ko: '청개구리', en: 'green frog', romanization: 'cheonggaeguri' },
          { ko: '어머니', en: 'mother', romanization: 'eomeoni' },
          { ko: '아들', en: 'son', romanization: 'adeul' },
          { ko: '살다', en: 'to live', romanization: 'salda' },
          { ko: '말하다', en: 'to speak', romanization: 'malhada' },
        ],
      },
      {
        ko: '“내가 죽으면 강가에 묻어 다오.” 어머니는 조용히 부탁했습니다. 하지만 아들은 반대로 했습니다.',
        en: '"When I die, bury me by the river." The mother asked quietly. But the son did the opposite.',
        words: [
          { ko: '죽다', en: 'to die', romanization: 'jukda' },
          { ko: '강가', en: 'riverside', romanization: 'gangga' },
          { ko: '묻다', en: 'to bury', romanization: 'mutda' },
          { ko: '부탁하다', en: 'to ask a favor', romanization: 'butakhada' },
          { ko: '반대', en: 'opposite', romanization: 'bandae' },
        ],
      },
      {
        ko: '어머니가 돌아가신 뒤, 아들은 산에 어머니를 묻었습니다. 어머니 말을 듣지 않았습니다.',
        en: 'After his mother passed away, the son buried her on the mountain. He did not listen to his mother.',
        words: [
          { ko: '돌아가시다', en: 'to pass away', romanization: 'doragasida' },
          { ko: '뒤', en: 'after', romanization: 'dwi' },
          { ko: '산', en: 'mountain', romanization: 'san' },
          { ko: '듣다', en: 'to listen', romanization: 'deutda' },
          { ko: '말', en: 'words', romanization: 'mal' },
        ],
      },
      {
        ko: '비가 오면 무덤이 씻겨 내려갈까 봐 아들은 울었습니다. 그래서 개구리는 비가 올 때 울습니다.',
        en: 'When it rained, the son cried because he worried the grave would wash away. That is why frogs cry when it rains.',
        words: [
          { ko: '비', en: 'rain', romanization: 'bi' },
          { ko: '무덤', en: 'grave', romanization: 'mudeom' },
          { ko: '씻기다', en: 'to be washed', romanization: 'ssitgida' },
          { ko: '울다', en: 'to cry', romanization: 'ulda' },
          { ko: '개구리', en: 'frog', romanization: 'gaeguri' },
        ],
      },
    ],
  },
  {
    id: 'three-year-hill',
    titleKo: '삼년고개',
    titleEn: 'The Three-Year Hill',
    summary: 'A greedy man ages fast on a magic hill.',
    level: 'A1',
    minutes: 3,
    theme: 'Korean tale',
    cover: 'story-art/three-year-hill-cover.jpg',
    questions: [
      {
        question: 'What happens when you go up and down the hill once?',
        options: [
          'You become three years older',
          'You become three years younger',
          'You find gold',
        ],
        answerIndex: 0,
      },
      {
        question: 'Why did the man go up the hill again?',
        options: [
          'He wanted to get younger',
          'He was looking for his friend',
          'He wanted to pick flowers',
        ],
        answerIndex: 0,
      },
      {
        question: 'What happened to the man in the end?',
        options: [
          'He became very old',
          'He became a child',
          'He found treasure',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '옛날에 삼년고개라는 언덕이 있었습니다. 그 언덕을 한 번 오르내리면 삼 년이 지납니다.',
        en: 'Long ago there was a hill called Three-Year Hill. If you go up and down it once, three years pass.',
        words: [
          { ko: '언덕', en: 'hill', romanization: 'eondeok' },
          { ko: '오르다', en: 'to climb', romanization: 'oreuda' },
          { ko: '내리다', en: 'to go down', romanization: 'naerida' },
          { ko: '한 번', en: 'once', romanization: 'han beon' },
          { ko: '삼 년', en: 'three years', romanization: 'sam nyeon' },
        ],
      },
      {
        ko: '한 노인이 언덕을 내려가니 젊어졌습니다. 그는 기뻐했습니다.',
        en: 'An old man went down the hill and became young. He was happy.',
        words: [
          { ko: '노인', en: 'old person', romanization: 'noin' },
          { ko: '젊다', en: 'to be young', romanization: 'jeomda' },
          { ko: '기쁘다', en: 'to be happy', romanization: 'gippeuda' },
          { ko: '내려가다', en: 'to go down', romanization: 'naeryeogada' },
          { ko: '되다', en: 'to become', romanization: 'doeda' },
        ],
      },
      {
        ko: '욕심 많은 사람이 더 젊어지려고 언덕을 또 올랐습니다. 그리고 다시 내려왔습니다.',
        en: 'A greedy man climbed the hill again to become even younger. Then he came back down.',
        words: [
          { ko: '욕심', en: 'greed', romanization: 'yoksim' },
          { ko: '사람', en: 'person', romanization: 'saram' },
          { ko: '또', en: 'again', romanization: 'tto' },
          { ko: '올라가다', en: 'to go up', romanization: 'ollagada' },
          { ko: '다시', en: 'again', romanization: 'dasi' },
        ],
      },
      {
        ko: '그는 여러 번 오내렸습니다. 마지막에는 너무 늙어서 걷기 어려웠습니다.',
        en: 'He went up and down many times. In the end he became so old that walking was hard.',
        words: [
          { ko: '여러 번', en: 'many times', romanization: 'yeoreo beon' },
          { ko: '마지막', en: 'the end', romanization: 'majimak' },
          { ko: '늙다', en: 'to grow old', romanization: 'neukda' },
          { ko: '걷다', en: 'to walk', romanization: 'geotda' },
          { ko: '어렵다', en: 'to be difficult', romanization: 'eoryeopda' },
        ],
      },
    ],
  },
  {
    id: 'mole-wedding',
    titleKo: '두더지 혼인',
    titleEn: 'The Mole\'s Wedding',
    summary: 'A blind mole chooses a bride by others\' descriptions.',
    level: 'A1',
    minutes: 4,
    theme: 'Korean tale',
    cover: 'story-art/mole-wedding-cover.jpg',
    questions: [
      {
        question: 'Why could the mole not see?',
        options: [
          'He was blind',
          'It was night',
          'He was underground',
        ],
        answerIndex: 0,
      },
      {
        question: 'What did the animals say about the sun?',
        options: [
          'It is round and warm',
          'It is scary and hot',
          'It is soft and sweet',
        ],
        answerIndex: 1,
      },
      {
        question: 'Who did the mole marry in the end?',
        options: [
          'Another mole',
          'The sun',
          'A flower',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '옛날에 눈이 보이지 않는 두더지가 있었습니다. 두더지는 아내를 찾고 싶었습니다.',
        en: 'Long ago there was a mole who could not see. The mole wanted to find a wife.',
        words: [
          { ko: '두더지', en: 'mole', romanization: 'dudeoji' },
          { ko: '눈', en: 'eye', romanization: 'nun' },
          { ko: '보이다', en: 'to be visible', romanization: 'boida' },
          { ko: '아내', en: 'wife', romanization: 'anae' },
          { ko: '찾다', en: 'to look for', romanization: 'chatda' },
        ],
      },
      {
        ko: '동물들이 세상을 설명해 주었습니다. “해는 뜨겁고 무섭다.” 두더지는 고개를 저었습니다.',
        en: 'The animals described the world to him. "The sun is hot and scary." The mole shook his head.',
        words: [
          { ko: '동물', en: 'animal', romanization: 'dongmul' },
          { ko: '세상', en: 'world', romanization: 'sesang' },
          { ko: '설명하다', en: 'to explain', romanization: 'seolmyeonghada' },
          { ko: '뜨겁다', en: 'to be hot', romanization: 'tteugeopda' },
          { ko: '무섭다', en: 'to be scary', romanization: 'museopda' },
        ],
      },
      {
        ko: '“꽃은 예쁘지만 금방 시든다.” 두더지는 그것도 싫다고 했습니다.',
        en: '"Flowers are pretty but wilt quickly." The mole said he did not like that either.',
        words: [
          { ko: '꽃', en: 'flower', romanization: 'kkot' },
          { ko: '예쁘다', en: 'to be pretty', romanization: 'yeppeuda' },
          { ko: '금방', en: 'quickly', romanization: 'geumbang' },
          { ko: '시들다', en: 'to wilt', romanization: 'sideulda' },
          { ko: '싫다', en: 'to dislike', romanization: 'silda' },
        ],
      },
      {
        ko: '마지막에 두더지 친구가 왔습니다. “나는 부드럽고 따뜻하다.” 두더지는 기뻐하며 혼인했습니다.',
        en: 'Finally a fellow mole came. "I am soft and warm." The mole happily married her.',
        words: [
          { ko: '친구', en: 'friend', romanization: 'chingu' },
          { ko: '부드럽다', en: 'to be soft', romanization: 'budeureopda' },
          { ko: '따뜻하다', en: 'to be warm', romanization: 'ttatteuthada' },
          { ko: '기뻐하다', en: 'to be glad', romanization: 'gippeohada' },
          { ko: '혼인', en: 'wedding', romanization: 'honin' },
        ],
      },
    ],
  },
  {
    id: 'kongjwi-patjwi',
    titleKo: '콩쥐 팥쥐',
    titleEn: 'Kongjwi and Patjwi',
    summary: 'A kind girl finds help from animals and goes to a festival.',
    level: 'A2',
    minutes: 5,
    theme: 'Korean tale',
    cover: 'story-art/kongjwi-patjwi-cover.jpg',
    questions: [
      {
        question: 'Who treated Kongjwi badly?',
        options: [
          'Her stepmother and stepsister',
          'Her father and brother',
          'The village children',
        ],
        answerIndex: 0,
      },
      {
        question: 'Who helped Kongjwi get ready for the festival?',
        options: [
          'A toad, a cow, and sparrows',
          'A tiger and a fox',
          'The king\'s soldiers',
        ],
        answerIndex: 0,
      },
      {
        question: 'How did the magistrate find Kongjwi?',
        options: [
          'By her lost shoe',
          'By her name on a letter',
          'By a bird\'s song',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '콩쥐는 착한 소녀였지만, 새어머니와 팥쥐에게 힘든 일만 시켰습니다. 그래서 콩쥐는 매일 밤늦게까지 일했습니다.',
        en: 'Kongjwi was a kind girl, but her stepmother and stepsister Patjwi made her do only hard work. So Kongjwi worked until late every night.',
        words: [
          { ko: '착하다', en: 'to be kind', romanization: 'chakhada' },
          { ko: '새어머니', en: 'stepmother', romanization: 'sae-eomeoni' },
          { ko: '힘들다', en: 'to be hard', romanization: 'himdeulda' },
          { ko: '매일', en: 'every day', romanization: 'maeil' },
          { ko: '일하다', en: 'to work', romanization: 'ilhada' },
        ],
      },
      {
        ko: '마을에 큰 잔치가 열렸습니다. 새어머니는 팥쥐만 보냈고, 콩쥐는 집에 남겼습니다.',
        en: 'A big festival opened in the village. The stepmother sent only Patjwi and left Kongjwi at home.',
        words: [
          { ko: '마을', en: 'village', romanization: 'maeul' },
          { ko: '잔치', en: 'festival', romanization: 'janchi' },
          { ko: '열리다', en: 'to open', romanization: 'yeollida' },
          { ko: '보내다', en: 'to send', romanization: 'bonaeda' },
          { ko: '남기다', en: 'to leave behind', romanization: 'namgida' },
        ],
      },
      {
        ko: '그때 두꺼비, 소, 참새가 나타나 콩쥐를 도왔습니다. 콩쥐는 예쁜 옷을 입고 잔치에 갔습니다.',
        en: 'Then a toad, a cow, and sparrows appeared and helped Kongjwi. She put on pretty clothes and went to the festival.',
        words: [
          { ko: '두꺼비', en: 'toad', romanization: 'dukkeobi' },
          { ko: '참새', en: 'sparrow', romanization: 'chamsae' },
          { ko: '나타나다', en: 'to appear', romanization: 'natanada' },
          { ko: '돕다', en: 'to help', romanization: 'dopda' },
          { ko: '옷', en: 'clothes', romanization: 'ot' },
        ],
      },
      {
        ko: '콩쥐는 춤을 추다가 신을 잃어버렸습니다. 사또는 그 신으로 콩쥐를 찾아 결혼했습니다.',
        en: 'While dancing, Kongjwi lost her shoe. The magistrate found her with that shoe and married her.',
        words: [
          { ko: '춤', en: 'dance', romanization: 'chum' },
          { ko: '추다', en: 'to dance', romanization: 'chuda' },
          { ko: '신', en: 'shoe', romanization: 'sin' },
          { ko: '잃어버리다', en: 'to lose', romanization: 'ireobeorida' },
          { ko: '결혼하다', en: 'to marry', romanization: 'gyeolhonhada' },
        ],
      },
    ],
  },
  {
    id: 'rabbit-and-dragon-king',
    titleKo: '별주부전',
    titleEn: 'The Rabbit and the Dragon King',
    summary: 'A clever rabbit escapes the underwater palace.',
    level: 'A2',
    minutes: 5,
    theme: 'Korean tale',
    cover: 'story-art/rabbit-and-dragon-king-cover.jpg',
    questions: [
      {
        question: 'Why did the turtle take the rabbit underwater?',
        options: [
          'The Dragon King needed a rabbit\'s liver',
          'The rabbit wanted to swim',
          'The turtle was lost',
        ],
        answerIndex: 0,
      },
      {
        question: 'What did the rabbit say about his liver?',
        options: [
          'He left it on land',
          'He ate it already',
          'He never had one',
        ],
        answerIndex: 0,
      },
      {
        question: 'How did the rabbit escape?',
        options: [
          'He tricked the turtle and ran away',
          'The Dragon King let him go',
          'He dug a tunnel',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '용왕이 아팠습니다. 의원은 토끼 간이 필요하다고 말했습니다. 그래서 자라가 토끼를 찾아갔습니다.',
        en: 'The Dragon King was sick. The doctor said a rabbit\'s liver was needed. So the turtle went to find a rabbit.',
        words: [
          { ko: '용왕', en: 'Dragon King', romanization: 'yongwang' },
          { ko: '아프다', en: 'to be sick', romanization: 'apeuda' },
          { ko: '의원', en: 'doctor', romanization: 'uiwon' },
          { ko: '간', en: 'liver', romanization: 'gan' },
          { ko: '자라', en: 'turtle', romanization: 'jara' },
        ],
      },
      {
        ko: '자라는 토끼에게 바다 궁이 아름답다고 말했습니다. 토끼는 자라 등에 타고 바다로 갔습니다.',
        en: 'The turtle told the rabbit the underwater palace was beautiful. The rabbit rode on the turtle\'s back and went to the sea.',
        words: [
          { ko: '바다', en: 'sea', romanization: 'bada' },
          { ko: '궁', en: 'palace', romanization: 'gung' },
          { ko: '아름답다', en: 'to be beautiful', romanization: 'areumdapda' },
          { ko: '등', en: 'back', romanization: 'deung' },
          { ko: '타다', en: 'to ride', romanization: 'tada' },
        ],
      },
      {
        ko: '바다 궁에 도착하자 토끼는 위험을 느꼈습니다. 그래서 먼저 간을 꺼내야 한다고 말했습니다.',
        en: 'When they reached the palace, the rabbit sensed danger. So he said he had to take out his liver first.',
        words: [
          { ko: '도착하다', en: 'to arrive', romanization: 'dochakhada' },
          { ko: '위험', en: 'danger', romanization: 'wiheom' },
          { ko: '느끼다', en: 'to feel', romanization: 'neukkida' },
          { ko: '먼저', en: 'first', romanization: 'meonjeo' },
          { ko: '꺼내다', en: 'to take out', romanization: 'kkeonaeda' },
        ],
      },
      {
        ko: '“간을 육지에 두고 왔습니다.” 토끼가 거짓말을 했습니다. 자라가 육지로 돌아오자 토끼는 달아났습니다.',
        en: '"I left my liver on land," the rabbit lied. When the turtle returned to land, the rabbit ran away.',
        words: [
          { ko: '육지', en: 'land', romanization: 'yukji' },
          { ko: '거짓말', en: 'lie', romanization: 'geojitmal' },
          { ko: '돌아오다', en: 'to come back', romanization: 'doraoda' },
          { ko: '달아나다', en: 'to run away', romanization: 'daranada' },
          { ko: '똑똑하다', en: 'to be clever', romanization: 'ttokttokhada' },
        ],
      },
    ],
  },
  {
    id: 'cowherd-and-weaver',
    titleKo: '견우와 직녀',
    titleEn: 'The Cowherd and the Weaver',
    summary: 'Two lovers meet once a year across the Milky Way.',
    level: 'A2',
    minutes: 5,
    theme: 'Korean tale',
    cover: 'story-art/cowherd-and-weaver-cover.jpg',
    questions: [
      {
        question: 'Who separated the cowherd and the weaver?',
        options: [
          'The weaver\'s mother',
          'The cowherd\'s father',
          'A tiger',
        ],
        answerIndex: 0,
      },
      {
        question: 'What lies between the two lovers?',
        options: [
          'The Milky Way',
          'A tall mountain',
          'A deep river',
        ],
        answerIndex: 0,
      },
      {
        question: 'When can they meet each other?',
        options: [
          'On the seventh day of the seventh month',
          'Every full moon',
          'On New Year\'s Day',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '견우는 소를 기르는 청년이었고, 직녀는 하늘에서 옷을 짜는 공주였습니다. 두 사람은 서로 사랑했습니다.',
        en: 'The cowherd was a young man who raised cattle, and the weaver was a princess who wove cloth in heaven. The two loved each other.',
        words: [
          { ko: '견우', en: 'cowherd', romanization: 'gyeonu' },
          { ko: '직녀', en: 'weaver girl', romanization: 'jingnyeo' },
          { ko: '소', en: 'cow', romanization: 'so' },
          { ko: '기르다', en: 'to raise', romanization: 'gireuda' },
          { ko: '사랑하다', en: 'to love', romanization: 'saranghada' },
        ],
      },
      {
        ko: '하지만 직녀의 어머니는 두 사람의 결혼을 막았습니다. 직녀는 하늘로 끌려 올라갔습니다.',
        en: 'But the weaver\'s mother stopped their marriage. The weaver was pulled back up to heaven.',
        words: [
          { ko: '하지만', en: 'but', romanization: 'hajiman' },
          { ko: '결혼', en: 'marriage', romanization: 'gyeolhon' },
          { ko: '막다', en: 'to stop', romanization: 'makda' },
          { ko: '하늘', en: 'heaven / sky', romanization: 'haneul' },
          { ko: '끌려가다', en: 'to be pulled away', romanization: 'kkeullyeogada' },
        ],
      },
      {
        ko: '견우와 직녀 사이에는 은하수가 흘렀습니다. 두 사람은 멀리서만 바라볼 수 있었습니다.',
        en: 'The Milky Way flowed between the cowherd and the weaver. They could only look at each other from far away.',
        words: [
          { ko: '사이', en: 'between', romanization: 'sai' },
          { ko: '은하수', en: 'Milky Way', romanization: 'eunhasu' },
          { ko: '흐르다', en: 'to flow', romanization: 'heureuda' },
          { ko: '멀리', en: 'far away', romanization: 'meolli' },
          { ko: '바라보다', en: 'to look at', romanization: 'baraboda' },
        ],
      },
      {
        ko: '칠월 칠일이 되면 까치들이 다리를 놓아 줍니다. 그날 밤에만 견우와 직녀는 만날 수 있습니다.',
        en: 'On the seventh day of the seventh month, magpies build a bridge. Only on that night can the cowherd and weaver meet.',
        words: [
          { ko: '칠월', en: 'seventh month', romanization: 'chirwol' },
          { ko: '까치', en: 'magpie', romanization: 'kkachi' },
          { ko: '다리', en: 'bridge', romanization: 'dari' },
          { ko: '놓다', en: 'to place / build', romanization: 'nohda' },
          { ko: '만나다', en: 'to meet', romanization: 'mannada' },
        ],
      },
    ],
  },
  {
    id: 'magic-millstone',
    titleKo: '요술 맷돌',
    titleEn: 'The Magic Millstone',
    summary: 'A greedy brother cannot stop a magic millstone.',
    level: 'A2',
    minutes: 5,
    theme: 'Korean tale',
    cover: 'story-art/magic-millstone-cover.jpg',
    questions: [
      {
        question: 'What could the magic millstone do?',
        options: [
          'Grant whatever the owner wished for',
          'Turn people into animals',
          'Make people invisible',
        ],
        answerIndex: 0,
      },
      {
        question: 'Why did the greedy brother steal the millstone?',
        options: [
          'He wanted more gold and rice',
          'He wanted to help his brother',
          'He wanted to break it',
        ],
        answerIndex: 0,
      },
      {
        question: 'What happened when the brother could not stop the millstone?',
        options: [
          'The house filled with porridge',
          'The millstone disappeared',
          'The brother became rich',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '두 형제가 바닷가에서 요술 맷돌을 찾았습니다. 맷돌은 소원하는 것을 내놓았습니다.',
        en: 'Two brothers found a magic millstone by the sea. The millstone produced whatever they wished for.',
        words: [
          { ko: '형제', en: 'brothers', romanization: 'hyeongje' },
          { ko: '바닷가', en: 'seaside', romanization: 'badatga' },
          { ko: '맷돌', en: 'millstone', romanization: 'maetdol' },
          { ko: '요술', en: 'magic', romanization: 'yosul' },
          { ko: '소원', en: 'wish', romanization: 'sowon' },
        ],
      },
      {
        ko: '착한 동생은 조금만 빌려 쓰고 돌려주었습니다. 하지만 욕심 많은 형은 맷돌을 훔쳤습니다.',
        en: 'The kind younger brother borrowed it a little and returned it. But the greedy older brother stole the millstone.',
        words: [
          { ko: '착하다', en: 'to be kind', romanization: 'chakhada' },
          { ko: '동생', en: 'younger sibling', romanization: 'dongsaeng' },
          { ko: '빌리다', en: 'to borrow', romanization: 'billida' },
          { ko: '돌려주다', en: 'to return', romanization: 'dollyeojuda' },
          { ko: '훔치다', en: 'to steal', romanization: 'humchida' },
        ],
      },
      {
        ko: '형은 “쌀과 금 나와라!”라고 외쳤습니다. 맷돌은 쌀과 금을 계속 내놓았습니다.',
        en: 'The older brother shouted, "Give me rice and gold!" The millstone kept producing rice and gold.',
        words: [
          { ko: '쌀', en: 'rice', romanization: 'ssal' },
          { ko: '금', en: 'gold', romanization: 'geum' },
          { ko: '외치다', en: 'to shout', romanization: 'oechida' },
          { ko: '계속', en: 'continuously', romanization: 'gyesok' },
          { ko: '내놓다', en: 'to produce', romanization: 'naenota' },
        ],
      },
      {
        ko: '형은 멈추는 말을 몰랐습니다. 집 안은 죽으로 가득 차서 형은 떠내려갔습니다.',
        en: 'The brother did not know the words to stop it. The house filled with porridge, and he was swept away.',
        words: [
          { ko: '멈추다', en: 'to stop', romanization: 'meomchuda' },
          { ko: '집', en: 'house', romanization: 'jip' },
          { ko: '죽', en: 'porridge', romanization: 'juk' },
          { ko: '가득', en: 'full', romanization: 'gadeuk' },
          { ko: '떠내려가다', en: 'to be swept away', romanization: 'tteonaeryeogada' },
        ],
      },
    ],
  },
  {
    id: 'old-man-with-lump',
    titleKo: '혹부리 영감',
    titleEn: 'The Old Man with a Lump',
    summary: 'A kind old man dances for goblins and loses his lump.',
    level: 'A2',
    minutes: 5,
    theme: 'Korean tale',
    cover: 'story-art/old-man-with-lump-cover.jpg',
    questions: [
      {
        question: 'What did the kind old man have on his cheek?',
        options: [
          'A lump',
          'A scar',
          'A flower',
        ],
        answerIndex: 0,
      },
      {
        question: 'Why did the goblins like the kind old man?',
        options: [
          'He danced and sang happily for them',
          'He brought them gold',
          'He told them a scary story',
        ],
        answerIndex: 0,
      },
      {
        question: 'What happened to the greedy old man?',
        options: [
          'He got a second lump',
          'He became young',
          'He found treasure',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '볼에 혹이 있는 착한 영감이 산에 나무를 하러 갔습니다. 비가 와서 영감은 동굴에 숨었습니다.',
        en: 'A kind old man with a lump on his cheek went to the mountain to cut wood. It rained, so he hid in a cave.',
        words: [
          { ko: '혹', en: 'lump', romanization: 'hok' },
          { ko: '영감', en: 'old man', romanization: 'yeonggam' },
          { ko: '나무', en: 'wood / tree', romanization: 'namu' },
          { ko: '비', en: 'rain', romanization: 'bi' },
          { ko: '동굴', en: 'cave', romanization: 'donggul' },
        ],
      },
      {
        ko: '밤에 도깨비들이 모여 춤을 추었습니다. 영감도 기쁜 마음으로 춤을 추고 노래를 불렀습니다.',
        en: 'At night goblins gathered and danced. The old man also danced and sang with a happy heart.',
        words: [
          { ko: '도깨비', en: 'goblin', romanization: 'dokkaebi' },
          { ko: '모이다', en: 'to gather', romanization: 'moida' },
          { ko: '춤', en: 'dance', romanization: 'chum' },
          { ko: '기쁘다', en: 'to be happy', romanization: 'gippeuda' },
          { ko: '노래', en: 'song', romanization: 'norae' },
        ],
      },
      {
        ko: '도깨비들은 영감이 재미있다고 생각했습니다. 그래서 혹을 빼 주고 보냈습니다.',
        en: 'The goblins thought the old man was fun. So they removed his lump and sent him home.',
        words: [
          { ko: '재미있다', en: 'to be fun', romanization: 'jaemiitda' },
          { ko: '생각하다', en: 'to think', romanization: 'saenggakhada' },
          { ko: '빼다', en: 'to remove', romanization: 'ppaeda' },
          { ko: '보내다', en: 'to send', romanization: 'bonaeda' },
          { ko: '집', en: 'home', romanization: 'jip' },
        ],
      },
      {
        ko: '욕심 많은 이웃도 따라 갔지만 춤을 못 추었습니다. 도깨비들은 혹 하나를 더 붙여 주었습니다.',
        en: 'A greedy neighbor followed, but he could not dance well. The goblins gave him one more lump.',
        words: [
          { ko: '이웃', en: 'neighbor', romanization: 'iut' },
          { ko: '따라가다', en: 'to follow', romanization: 'ttaragada' },
          { ko: '못', en: 'cannot', romanization: 'mot' },
          { ko: '붙이다', en: 'to attach', romanization: 'butida' },
          { ko: '더', en: 'more', romanization: 'deo' },
        ],
      },
    ],
  },
  {
    id: 'lazy-boy-who-became-ox',
    titleKo: '소가 된 게으름뱅이',
    titleEn: 'The Lazy Boy Who Became an Ox',
    summary: 'A lazy boy who only sleeps turns into an ox.',
    level: 'A2',
    minutes: 4,
    theme: 'Korean tale',
    cover: 'story-art/lazy-boy-who-became-ox-cover.jpg',
    questions: [
      {
        question: 'What did the lazy boy do all day?',
        options: [
          'He slept',
          'He studied',
          'He helped his parents',
        ],
        answerIndex: 0,
      },
      {
        question: 'What did his parents say would happen?',
        options: [
          'He would become an ox',
          'He would become a king',
          'He would find gold',
        ],
        answerIndex: 0,
      },
      {
        question: 'What did the boy do after he became an ox?',
        options: [
          'He worked hard in the field',
          'He ran away',
          'He slept even more',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '게으른 소년은 아침부터 저녁까지 잠만 잤습니다. 밥을 먹어도 일을 하지 않았습니다.',
        en: 'The lazy boy slept from morning until night. Even after eating, he did not work.',
        words: [
          { ko: '게으르다', en: 'to be lazy', romanization: 'geeureuda' },
          { ko: '소년', en: 'boy', romanization: 'sonyeon' },
          { ko: '잠', en: 'sleep', romanization: 'jam' },
          { ko: '잠자다', en: 'to sleep', romanization: 'jamjada' },
          { ko: '일', en: 'work', romanization: 'il' },
        ],
      },
      {
        ko: '부모님은 걱정하며 말했습니다. “너는 소가 되어 밭을 갈게 될 거야.”',
        en: 'His parents worried and said, "You will become an ox and plow the field."',
        words: [
          { ko: '부모님', en: 'parents', romanization: 'bumonim' },
          { ko: '걱정하다', en: 'to worry', romanization: 'geokjeonghada' },
          { ko: '소', en: 'ox', romanization: 'so' },
          { ko: '밭', en: 'field', romanization: 'bat' },
          { ko: '갈다', en: 'to plow', romanization: 'galda' },
        ],
      },
      {
        ko: '어느 날 소년이 정말 소로 변했습니다. 처음에는 놀랐지만 곧 밭일을 시작했습니다.',
        en: 'One day the boy really turned into an ox. At first he was surprised, but soon he started field work.',
        words: [
          { ko: '어느 날', en: 'one day', romanization: 'eoneu nal' },
          { ko: '변하다', en: 'to change', romanization: 'byeonhada' },
          { ko: '놀라다', en: 'to be surprised', romanization: 'nollada' },
          { ko: '곧', en: 'soon', romanization: 'got' },
          { ko: '시작하다', en: 'to start', romanization: 'sijakhada' },
        ],
      },
      {
        ko: '소가 된 소년은 매일 열심히 일했습니다. 마을 사람들은 그 모습을 보며 교훈을 얻었습니다.',
        en: 'As an ox, the boy worked hard every day. The villagers learned a lesson from watching him.',
        words: [
          { ko: '매일', en: 'every day', romanization: 'maeil' },
          { ko: '열심히', en: 'hard / diligently', romanization: 'yeolsimhi' },
          { ko: '마을', en: 'village', romanization: 'maeul' },
          { ko: '모습', en: 'appearance', romanization: 'moseup' },
          { ko: '교훈', en: 'lesson', romanization: 'gyohun' },
        ],
      },
    ],
  },
  {
    id: 'kings-donkey-ears',
    titleKo: '임금님 귀는 당나귀 귀',
    titleEn: 'The King with Donkey Ears',
    summary: 'A king\'s secret spreads through whispering reeds.',
    level: 'A2',
    minutes: 4,
    theme: 'Korean tale',
    cover: 'story-art/kings-donkey-ears-cover.jpg',
    questions: [
      {
        question: 'What secret did the king have?',
        options: [
          'He had donkey ears',
          'He could not read',
          'He was afraid of water',
        ],
        answerIndex: 0,
      },
      {
        question: 'Who learned the king\'s secret?',
        options: [
          'The barber',
          'The queen',
          'A soldier',
        ],
        answerIndex: 0,
      },
      {
        question: 'How did everyone find out the secret?',
        options: [
          'The reeds whispered it',
          'The barber shouted in town',
          'The king told them',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '임금님은 사람들 앞에서 당당했지만, 사실 당나귀 귀를 숨기고 있었습니다.',
        en: 'The king acted confident in front of people, but in truth he hid donkey ears.',
        words: [
          { ko: '임금님', en: 'the king', romanization: 'imgeumnim' },
          { ko: '당당하다', en: 'to be confident', romanization: 'dangdanghada' },
          { ko: '사실', en: 'in truth', romanization: 'sasil' },
          { ko: '당나귀', en: 'donkey', romanization: 'dangnagwi' },
          { ko: '귀', en: 'ear', romanization: 'gwi' },
        ],
      },
      {
        ko: '이발사만 임금님의 머리를 깎았습니다. 임금님은 “아무에게도 말하지 마라”고 했습니다.',
        en: 'Only the barber cut the king\'s hair. The king said, "Do not tell anyone."',
        words: [
          { ko: '이발사', en: 'barber', romanization: 'ibalsa' },
          { ko: '머리', en: 'head / hair', romanization: 'meori' },
          { ko: '깎다', en: 'to cut', romanization: 'kkakda' },
          { ko: '아무에게도', en: 'to anyone', romanization: 'amuegedo' },
          { ko: '말하다', en: 'to tell', romanization: 'malhada' },
        ],
      },
      {
        ko: '이발사는 비밀을 참기 어려웠습니다. 그래서 강가의 갈대 숲에 혼자 속삭였습니다.',
        en: 'It was hard for the barber to keep the secret. So he whispered alone in a reed field by the river.',
        words: [
          { ko: '비밀', en: 'secret', romanization: 'bimil' },
          { ko: '참다', en: 'to endure', romanization: 'chamda' },
          { ko: '강가', en: 'riverside', romanization: 'gangga' },
          { ko: '갈대', en: 'reed', romanization: 'galdae' },
          { ko: '속삭이다', en: 'to whisper', romanization: 'soksagida' },
        ],
      },
      {
        ko: '바람이 불자 갈대가 속삭였습니다. “임금님 귀는 당나귀 귀.” 마침내 모두가 그 사실을 알게 되었습니다.',
        en: 'When the wind blew, the reeds whispered, "The king has donkey ears." At last everyone learned the truth.',
        words: [
          { ko: '바람', en: 'wind', romanization: 'baram' },
          { ko: '불다', en: 'to blow', romanization: 'bulda' },
          { ko: '마침내', en: 'at last', romanization: 'machimnae' },
          { ko: '모두', en: 'everyone', romanization: 'modu' },
          { ko: '알다', en: 'to know', romanization: 'alda' },
        ],
      },
    ],
  },
  {
    id: 'red-bean-porridge-granny',
    titleKo: '팥죽 할멈과 호랑이',
    titleEn: 'Red Bean Porridge Granny and the Tiger',
    summary: 'A clever grandmother tricks a hungry tiger.',
    level: 'A2',
    minutes: 5,
    theme: 'Korean tale',
    cover: 'story-art/red-bean-porridge-granny-cover.jpg',
    questions: [
      {
        question: 'Why did the tiger wait outside the house?',
        options: [
          'He wanted to eat the grandmother',
          'He was looking for shelter',
          'He wanted to play',
        ],
        answerIndex: 0,
      },
      {
        question: 'What did the grandmother pour on herself?',
        options: [
          'Red bean porridge',
          'Water',
          'Rice',
        ],
        answerIndex: 0,
      },
      {
        question: 'What did the grandmother tell the tiger the sweet red liquid was?',
        options: [
          'Her blood',
          'Honey',
          'Soup',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '산속에 할멈이 혼자 살았습니다. 어느 날 밤 호랑이가 문 앞에 나타났습니다.',
        en: 'A grandmother lived alone in the mountains. One night a tiger appeared at her door.',
        words: [
          { ko: '할멈', en: 'grandmother', romanization: 'halmeom' },
          { ko: '혼자', en: 'alone', romanization: 'honja' },
          { ko: '산속', en: 'in the mountains', romanization: 'sansok' },
          { ko: '밤', en: 'night', romanization: 'bam' },
          { ko: '호랑이', en: 'tiger', romanization: 'horangi' },
        ],
      },
      {
        ko: '호랑이는 할멈을 잡아먹으려 했습니다. 할멈은 당황하지 않고 팥죽 냄비를 꺼냈습니다.',
        en: 'The tiger tried to eat the grandmother. She did not panic and took out a pot of red bean porridge.',
        words: [
          { ko: '잡아먹다', en: 'to eat / devour', romanization: 'jabameokda' },
          { ko: '당황하다', en: 'to panic', romanization: 'danghwanghada' },
          { ko: '팥죽', en: 'red bean porridge', romanization: 'patjuk' },
          { ko: '냄비', en: 'pot', romanization: 'naembi' },
          { ko: '꺼내다', en: 'to take out', romanization: 'kkeonaeda' },
        ],
      },
      {
        ko: '할멈은 몸에 팥죽을 끼얹고 말했습니다. “이것은 내 피다. 더 맛있는 것은 지붕 위에 있다.”',
        en: 'The grandmother poured porridge on herself and said, "This is my blood. Something tastier is on the roof."',
        words: [
          { ko: '몸', en: 'body', romanization: 'mom' },
          { ko: '끼얹다', en: 'to pour over', romanization: 'kkieojuda' },
          { ko: '피', en: 'blood', romanization: 'pi' },
          { ko: '맛있다', en: 'to be tasty', romanization: 'masitda' },
          { ko: '지붕', en: 'roof', romanization: 'jibung' },
        ],
      },
      {
        ko: '호랑이가 지붕으로 올라가자 마을 사람들이 도와 할멈을 구했습니다. 호랑이는 멀리 도망갔습니다.',
        en: 'When the tiger climbed onto the roof, villagers helped and saved the grandmother. The tiger ran far away.',
        words: [
          { ko: '올라가다', en: 'to climb up', romanization: 'ollagada' },
          { ko: '마을', en: 'village', romanization: 'maeul' },
          { ko: '구하다', en: 'to save', romanization: 'guhada' },
          { ko: '도망가다', en: 'to run away', romanization: 'domanggada' },
          { ko: '멀리', en: 'far away', romanization: 'meolli' },
        ],
      },
    ],
  },
  {
    id: 'tiger-brother',
    titleKo: '나무꾼과 호랑이 형님',
    titleEn: 'The Woodcutter and His Tiger Brother',
    summary: 'A woodcutter saves a tiger cub and gains a loyal friend.',
    level: 'A2',
    minutes: 5,
    theme: 'Korean tale',
    cover: 'story-art/tiger-brother-cover.jpg',
    questions: [
      {
        question: 'What did the woodcutter find in the trap?',
        options: [
          'A tiger cub',
          'A rabbit',
          'A bag of rice',
        ],
        answerIndex: 0,
      },
      {
        question: 'What did the tiger call the woodcutter?',
        options: [
          'Younger brother',
          'Teacher',
          'King',
        ],
        answerIndex: 0,
      },
      {
        question: 'What did the jealous brothers try to do?',
        options: [
          'They tried to get gifts from the tiger too',
          'They moved to the city',
          'They cut down the forest',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '착한 나무꾼이 산에서 덫에 걸린 새끼 호랑이를 보았습니다. 나무꾼은 호랑이를 풀어 주었습니다.',
        en: 'A kind woodcutter saw a tiger cub caught in a trap in the mountains. He set the cub free.',
        words: [
          { ko: '나무꾼', en: 'woodcutter', romanization: 'namukkun' },
          { ko: '덫', en: 'trap', romanization: 'deot' },
          { ko: '새끼', en: 'young animal', romanization: 'saekki' },
          { ko: '걸리다', en: 'to be caught', romanization: 'geollida' },
          { ko: '풀어주다', en: 'to set free', romanization: 'pureojuda' },
        ],
      },
      {
        ko: '몇 년 뒤 큰 호랑이가 나무꾼을 찾아왔습니다. “당신은 내 형님이다.” 호랑이가 말했습니다.',
        en: 'A few years later a big tiger came to find the woodcutter. "You are my older brother," the tiger said.',
        words: [
          { ko: '몇 년', en: 'a few years', romanization: 'myeot nyeon' },
          { ko: '뒤', en: 'later', romanization: 'dwi' },
          { ko: '찾아오다', en: 'to come to find', romanization: 'chajaoda' },
          { ko: '형님', en: 'older brother', romanization: 'hyeongnim' },
          { ko: '당신', en: 'you', romanization: 'dangsin' },
        ],
      },
      {
        ko: '호랑이는 나무꾼에게 쌀과 돈을 가져다주었습니다. 나무꾼의 가족은 더 이상 굶지 않았습니다.',
        en: 'The tiger brought rice and money to the woodcutter. His family no longer went hungry.',
        words: [
          { ko: '가져다주다', en: 'to bring', romanization: 'gajyeodajuda' },
          { ko: '쌀', en: 'rice', romanization: 'ssal' },
          { ko: '돈', en: 'money', romanization: 'don' },
          { ko: '가족', en: 'family', romanization: 'gajok' },
          { ko: '굶다', en: 'to be hungry', romanization: 'gulmuda' },
        ],
      },
      {
        ko: '욕심 많은 형제들도 호랑이를 찾아갔지만 거짓 마음이 들통났습니다. 호랑이는 나무꾼만 믿었습니다.',
        en: 'Greedy brothers also went to the tiger, but their false hearts were revealed. The tiger trusted only the woodcutter.',
        words: [
          { ko: '욕심', en: 'greed', romanization: 'yoksim' },
          { ko: '형제', en: 'brothers', romanization: 'hyeongje' },
          { ko: '거짓', en: 'false', romanization: 'geojit' },
          { ko: '마음', en: 'heart', romanization: 'maeum' },
          { ko: '믿다', en: 'to trust', romanization: 'mitda' },
        ],
      },
    ],
  },
  {
    id: 'farting-daughter-in-law',
    titleKo: '방귀쟁이 며느리',
    titleEn: 'The Farting Daughter-in-Law',
    summary: 'A daughter-in-law uses her unusual gift to save others.',
    level: 'A2',
    minutes: 5,
    theme: 'Korean tale',
    cover: 'story-art/farting-daughter-in-law-cover.jpg',
    questions: [
      {
        question: 'Why was the daughter-in-law sent away?',
        options: [
          'She farted too much',
          'She broke a bowl',
          'She refused to cook',
        ],
        answerIndex: 0,
      },
      {
        question: 'What danger did she face on the mountain?',
        options: [
          'Robbers',
          'A flood',
          'A fire',
        ],
        answerIndex: 0,
      },
      {
        question: 'How did she scare the robbers away?',
        options: [
          'With a very loud fart',
          'By calling the police',
          'By hiding in a cave',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '시집온 며느리는 방귀가 많아서 시어머니가 걱정했습니다. 결국 며느리는 집에서 쫓겨났습니다.',
        en: 'The new daughter-in-law farted often, so her mother-in-law worried. In the end she was sent away from the house.',
        words: [
          { ko: '며느리', en: 'daughter-in-law', romanization: 'myeoneuri' },
          { ko: '시집오다', en: 'to marry into a family', romanization: 'sijipoda' },
          { ko: '방귀', en: 'fart', romanization: 'banggwi' },
          { ko: '시어머니', en: 'mother-in-law', romanization: 'sieomeoni' },
          { ko: '쫓겨나다', en: 'to be driven out', romanization: 'jjochgyeonada' },
        ],
      },
      {
        ko: '며느리는 산길을 걸어가다 도적을 만났습니다. 도적들은 그녀에게 돈을 내놓으라고 했습니다.',
        en: 'Walking on a mountain path, she met robbers. They told her to hand over her money.',
        words: [
          { ko: '산길', en: 'mountain path', romanization: 'sangil' },
          { ko: '걷다', en: 'to walk', romanization: 'geotda' },
          { ko: '도적', en: 'robber', romanization: 'dojeok' },
          { ko: '만나다', en: 'to meet', romanization: 'mannada' },
          { ko: '돈', en: 'money', romanization: 'don' },
        ],
      },
      {
        ko: '며느리는 크게 방귀를 뀌었습니다. 소리가 너무 커서 도적들은 귀신이 나타난 줄 알고 도망갔습니다.',
        en: 'She let out a huge fart. The sound was so loud that the robbers thought a ghost appeared and ran away.',
        words: [
          { ko: '크게', en: 'loudly', romanization: 'keuge' },
          { ko: '뀌다', en: 'to fart', romanization: 'kkuida' },
          { ko: '소리', en: 'sound', romanization: 'sori' },
          { ko: '귀신', en: 'ghost', romanization: 'gwisin' },
          { ko: '도망가다', en: 'to run away', romanization: 'domanggada' },
        ],
      },
      {
        ko: '시어머니는 며느리가 마을을 구했다는 말을 듣고 그녀를 다시 맞이했습니다. 방귀도 이제는 미움받지 않았습니다.',
        en: 'Hearing that the daughter-in-law had saved the village, the mother-in-law welcomed her back. Even her farts were no longer hated.',
        words: [
          { ko: '구하다', en: 'to save', romanization: 'guhada' },
          { ko: '말', en: 'words / story', romanization: 'mal' },
          { ko: '듣다', en: 'to hear', romanization: 'deutda' },
          { ko: '다시', en: 'again', romanization: 'dasi' },
          { ko: '맞이하다', en: 'to welcome', romanization: 'majihada' },
        ],
      },
    ],
  },
  {
    id: 'shade-seller',
    titleKo: '나무 그늘을 산 총각',
    titleEn: 'The Young Man Who Sold Shade',
    summary: 'A clever young man sells shade from his tree on a hot day.',
    level: 'B1',
    minutes: 5,
    theme: 'Korean tale',
    cover: 'story-art/shade-seller-cover.jpg',
    questions: [
      {
        question: 'What did the rich man want on the hot day?',
        options: [
          'A cool place to rest',
          'A new horse',
          'A bowl of noodles',
        ],
        answerIndex: 0,
      },
      {
        question: 'What did the young man say he was selling?',
        options: [
          'The shade of his tree',
          'Fresh fruit',
          'Cold water',
        ],
        answerIndex: 0,
      },
      {
        question: 'Why did the rich man finally pay?',
        options: [
          'He had already used the shade and could not leave easily',
          'The young man called the police',
          'The tree fell down',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '더운 여름날, 부자 양반은 길가 나무 그늘 아래에서 쉬고 싶어 했습니다. 그때 총각이 다가와 말했습니다.',
        en: 'On a hot summer day, a rich man wanted to rest in the shade of a roadside tree. Then a young man approached and spoke.',
        words: [
          { ko: '더운', en: 'hot', romanization: 'deoun' },
          { ko: '여름', en: 'summer', romanization: 'yeoreum' },
          { ko: '그늘', en: 'shade', romanization: 'geuneul' },
          { ko: '쉬다', en: 'to rest', romanization: 'swida' },
          { ko: '총각', en: 'young man', romanization: 'chonggak' },
        ],
      },
      {
        ko: '“이 그늘은 제 것입니다. 그늘을 쓰려면 값을 내셔야 합니다.” 총각은 담담하게 말했습니다.',
        en: '"This shade belongs to me. If you want to use it, you must pay." The young man spoke calmly.',
        words: [
          { ko: '것', en: 'thing', romanization: 'geot' },
          { ko: '쓰다', en: 'to use', romanization: 'sseuda' },
          { ko: '값', en: 'price', romanization: 'gap' },
          { ko: '내다', en: 'to pay', romanization: 'naeda' },
          { ko: '담담하다', en: 'to be calm', romanization: 'damdamhada' },
        ],
      },
      {
        ko: '양반은 웃으며 자리에 앉았습니다. 하지만 해가 기울자 총각이 다시 말했습니다. “그늘 값을 아직 안 내셨습니다.”',
        en: 'The rich man laughed and sat down. But as the sun tilted, the young man spoke again. "You still have not paid for the shade."',
        words: [
          { ko: '웃다', en: 'to laugh', romanization: 'utda' },
          { ko: '앉다', en: 'to sit', romanization: 'anda' },
          { ko: '해', en: 'sun', romanization: 'hae' },
          { ko: '기울다', en: 'to tilt', romanization: 'giulda' },
          { ko: '아직', en: 'still / yet', romanization: 'ajik' },
        ],
      },
      {
        ko: '양반은 그늘을 이미 오래 썼기 때문에 값을 내기로 했습니다. 총각은 작은 돈으로 큰 교훈을 남겼습니다.',
        en: 'Because he had already used the shade for a long time, the rich man decided to pay. With a small sum, the young man left a big lesson.',
        words: [
          { ko: '오래', en: 'a long time', romanization: 'orae' },
          { ko: '이미', en: 'already', romanization: 'imi' },
          { ko: '내기로 하다', en: 'to decide to pay', romanization: 'naegiro hada' },
          { ko: '작은', en: 'small', romanization: 'jageun' },
          { ko: '교훈', en: 'lesson', romanization: 'gyohun' },
        ],
      },
    ],
  },
  {
    id: 'dangun',
    titleKo: '단군 이야기',
    titleEn: 'The Story of Dangun',
    summary: 'Korea\'s founding myth of heaven, a bear, and a wise king.',
    level: 'B1',
    minutes: 6,
    theme: 'Korean tale',
    cover: 'story-art/dangun-cover.jpg',
    questions: [
      {
        question: 'Who came down from heaven to live on earth?',
        options: [
          'Hwanung',
          'Dangun\'s father',
          'A tiger',
        ],
        answerIndex: 0,
      },
      {
        question: 'Which animal became a woman after eating garlic and staying in a cave?',
        options: [
          'A bear',
          'A tiger',
          'A magpie',
        ],
        answerIndex: 0,
      },
      {
        question: 'What kingdom did Dangun establish?',
        options: [
          'Gojoseon',
          'Silla',
          'Goryeo',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '옛날 하늘의 환웅은 땅에서 사람들을 가르치고 싶어 산에 내려왔습니다. 그곳을 신시라고 불렀습니다.',
        en: 'Long ago Hwanung from heaven wanted to teach people on earth, so he came down to a mountain. That place was called the City of God.',
        words: [
          { ko: '환웅', en: 'Hwanung', romanization: 'Hwanung' },
          { ko: '하늘', en: 'heaven', romanization: 'haneul' },
          { ko: '가르치다', en: 'to teach', romanization: 'gareuchida' },
          { ko: '내려오다', en: 'to come down', romanization: 'naeryeooda' },
          { ko: '신시', en: 'City of God', romanization: 'sinsi' },
        ],
      },
      {
        ko: '어느 날 곰과 호랑이가 사람이 되고 싶어 찾아왔습니다. 환웅은 마늘과 쑥을 먹고 백 일 동안 굴 안에 있으라고 했습니다.',
        en: 'One day a bear and a tiger came, wanting to become human. Hwanung told them to eat garlic and mugwort and stay in a cave for a hundred days.',
        words: [
          { ko: '곰', en: 'bear', romanization: 'gom' },
          { ko: '호랑이', en: 'tiger', romanization: 'horangi' },
          { ko: '사람', en: 'person', romanization: 'saram' },
          { ko: '마늘', en: 'garlic', romanization: 'maneul' },
          { ko: '굴', en: 'cave', romanization: 'gul' },
        ],
      },
      {
        ko: '호랑이는 참지 못하고 나갔지만, 곰은 끝까지 견뎌 여인이 되었습니다. 그녀의 이름은 웅녀였습니다.',
        en: 'The tiger could not endure and left, but the bear held on until the end and became a woman. Her name was Ungnyeo.',
        words: [
          { ko: '참다', en: 'to endure', romanization: 'chamda' },
          { ko: '견디다', en: 'to hold on', romanization: 'gyeondida' },
          { ko: '여인', en: 'woman', romanization: 'yeoin' },
          { ko: '웅녀', en: 'Ungnyeo', romanization: 'Ungnyeo' },
          { ko: '끝', en: 'end', romanization: 'kkeut' },
        ],
      },
      {
        ko: '웅녀에게서 단군왕검이 태어났습니다. 단군은 백성을 사랑하는 임금이 되어 고조선을 세웠습니다.',
        en: 'From Ungnyeo, Dangun Wanggeom was born. Dangun became a king who loved his people and founded Gojoseon.',
        words: [
          { ko: '태어나다', en: 'to be born', romanization: 'taeonada' },
          { ko: '단군왕검', en: 'Dangun Wanggeom', romanization: 'Dangun Wanggeom' },
          { ko: '백성', en: 'the people', romanization: 'baekseong' },
          { ko: '임금', en: 'king', romanization: 'imgeum' },
          { ko: '고조선', en: 'Gojoseon', romanization: 'Gojoseon' },
        ],
      },
      {
        ko: '사람들은 단군을 한국의 시조로 기억합니다. 그 이야기는 오늘도 많은 한국인에게 전해집니다.',
        en: 'People remember Dangun as the founder of Korea. That story is still passed down to many Koreans today.',
        words: [
          { ko: '시조', en: 'founder', romanization: 'sijo' },
          { ko: '한국', en: 'Korea', romanization: 'Hanguk' },
          { ko: '기억하다', en: 'to remember', romanization: 'gieokhada' },
          { ko: '오늘', en: 'today', romanization: 'oneul' },
          { ko: '전해지다', en: 'to be passed down', romanization: 'jeonhaejida' },
        ],
      },
    ],
  },
]
