import type { Story } from '../types'

/** Stories whose illustration files use a shorter name than their id. */
const artIdOverrides: Record<string, string> = {
  'dokkaebi-bangmangi': 'dokkaebi',
}

const rawStories: Story[] = [
  {
    id: 'sun-and-moon',
    titleKo: '해와 달이 된 오누이',
    titleEn: 'The Siblings Who Became Sun and Moon',
    summary: 'A brother and sister escape a tiger and rise into the sky.',
    level: 'A1',
    minutes: 4,
    theme: 'Folklore',
    questions: [
      {
        question: 'Why did the children climb the tree?',
        options: [
          'They were picking fruit',
          'They were scared of the tiger',
          'They wanted to see the market',
        ],
        answerIndex: 1,
      },
      {
        question: 'What came down from the sky?',
        options: ['A ladder', 'A bird', 'A rope'],
        answerIndex: 2,
      },
      {
        question: 'What did the siblings become in the end?',
        options: ['The sun and the moon', 'Two stars', 'Clouds'],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '옛날 옛적에, 산속에 엄마와 남매가 살았습니다. 어느 날 엄마는 장에 갔습니다.',
        en: 'Long ago, a mother and her children lived in the mountains. One day, mother went to the market.',
        words: [
          { ko: '옛날', en: 'long ago', romanization: 'yetnal' },
          { ko: '산속', en: 'in the mountains', romanization: 'sansok' },
          { ko: '엄마', en: 'mom', romanization: 'eomma' },
          { ko: '남매', en: 'brother and sister', romanization: 'nammae' },
          { ko: '장', en: 'market', romanization: 'jang' },
        ],
      },
      {
        ko: '집에 돌아오는 길에, 호랑이가 엄마를 만났습니다. 호랑이는 엄마를 잡아먹고, 엄마의 옷을 입었습니다.',
        en: 'On the way home, a tiger met mother. The tiger ate her and put on her clothes.',
        words: [
          { ko: '길', en: 'road / way', romanization: 'gil' },
          { ko: '호랑이', en: 'tiger', romanization: 'horangi' },
          { ko: '만나다', en: 'to meet', romanization: 'mannada' },
          { ko: '잡아먹다', en: 'to eat / devour', romanization: 'jabameokda' },
          { ko: '옷', en: 'clothes', romanization: 'ot' },
        ],
      },
      {
        ko: '호랑이는 집에 가서 말했습니다. “얘들아, 엄마다. 문을 열어라.” 하지만 목소리는 달랐습니다.',
        en: 'The tiger went to the house and said, “Children, it’s mother. Open the door.” But the voice was different.',
        words: [
          { ko: '집', en: 'house', romanization: 'jip' },
          { ko: '말하다', en: 'to speak', romanization: 'malhada' },
          { ko: '문', en: 'door', romanization: 'mun' },
          { ko: '열다', en: 'to open', romanization: 'yeolda' },
          { ko: '목소리', en: 'voice', romanization: 'moksori' },
        ],
      },
      {
        ko: '아이들은 무서워서 나무 위로 올라갔습니다. 호랑이가 따라왔습니다.',
        en: 'The children were scared and climbed up a tree. The tiger followed them.',
        words: [
          { ko: '아이', en: 'child', romanization: 'ai' },
          { ko: '무섭다', en: 'to be scary / afraid', romanization: 'museopda' },
          { ko: '나무', en: 'tree', romanization: 'namu' },
          { ko: '올라가다', en: 'to climb up', romanization: 'ollagada' },
          { ko: '따라오다', en: 'to follow', romanization: 'ttaraoda' },
        ],
      },
      {
        ko: '남매는 하늘에 기도했습니다. “하늘이시여, 우리를 도와주세요!” 하늘에서 동아줄이 내려왔습니다.',
        en: 'The siblings prayed to the sky. “Heaven, please help us!” A rope came down from the sky.',
        words: [
          { ko: '하늘', en: 'sky / heaven', romanization: 'haneul' },
          { ko: '기도하다', en: 'to pray', romanization: 'gidohada' },
          { ko: '돕다', en: 'to help', romanization: 'dopda' },
          { ko: '동아줄', en: 'rope', romanization: 'dongajul' },
          { ko: '내려오다', en: 'to come down', romanization: 'naeryeooda' },
        ],
      },
      {
        ko: '남매는 동아줄을 타고 올라갔습니다. 누나는 해가 되고, 동생은 달이 되었습니다.',
        en: 'They climbed the rope. The sister became the sun, and the brother became the moon.',
        words: [
          { ko: '타다', en: 'to ride / climb', romanization: 'tada' },
          { ko: '누나', en: 'older sister', romanization: 'nuna' },
          { ko: '해', en: 'sun', romanization: 'hae' },
          { ko: '동생', en: 'younger sibling', romanization: 'dongsaeng' },
          { ko: '달', en: 'moon', romanization: 'dal' },
        ],
      },
    ],
  },
  {
    id: 'heungbu',
    titleKo: '흥부와 놀부',
    titleEn: 'Heungbu and Nolbu',
    summary: 'A kind brother helps a swallow and receives a gift.',
    level: 'A1',
    minutes: 5,
    theme: 'Folklore',
    questions: [
      {
        question: 'How were the two brothers different?',
        options: [
          'Heungbu was kind and Nolbu was greedy',
          'Nolbu was kind and Heungbu was greedy',
          'They were both greedy',
        ],
        answerIndex: 0,
      },
      {
        question: 'What did the swallow bring Heungbu?',
        options: ['A gold coin', 'A gourd seed', 'A letter'],
        answerIndex: 1,
      },
      {
        question: 'What came out of Nolbu’s gourd?',
        options: ['Rice and gold', 'Swallows', 'Goblins'],
        answerIndex: 2,
      },
    ],
    paragraphs: [
      {
        ko: '옛날에 두 형제가 있었습니다. 형 놀부는 욕심이 많았고, 동생 흥부는 마음이 착했습니다.',
        en: 'Long ago there were two brothers. Older brother Nolbu was greedy, and younger brother Heungbu was kind.',
        words: [
          { ko: '형제', en: 'brothers', romanization: 'hyeongje' },
          { ko: '형', en: 'older brother', romanization: 'hyeong' },
          { ko: '욕심', en: 'greed', romanization: 'yoksim' },
          { ko: '마음', en: 'heart / mind', romanization: 'maeum' },
          { ko: '착하다', en: 'to be kind', romanization: 'chakhada' },
        ],
      },
      {
        ko: '어느 봄날, 흥부는 다리가 부러진 제비를 발견했습니다. 흥부는 제비를 정성껏 고쳐 주었습니다.',
        en: 'One spring day, Heungbu found a swallow with a broken leg. He carefully healed the swallow.',
        words: [
          { ko: '봄', en: 'spring', romanization: 'bom' },
          { ko: '다리', en: 'leg', romanization: 'dari' },
          { ko: '부러지다', en: 'to break', romanization: 'bureojida' },
          { ko: '제비', en: 'swallow (bird)', romanization: 'jebi' },
          { ko: '고치다', en: 'to fix / heal', romanization: 'gochida' },
        ],
      },
      {
        ko: '다음 해, 제비가 돌아와 박씨를 주었습니다. 흥부는 박씨를 심었습니다.',
        en: 'The next year, the swallow returned and gave him a gourd seed. Heungbu planted the seed.',
        words: [
          { ko: '다음', en: 'next', romanization: 'daeum' },
          { ko: '해', en: 'year', romanization: 'hae' },
          { ko: '돌아오다', en: 'to return', romanization: 'doraoda' },
          { ko: '박씨', en: 'gourd seed', romanization: 'bakssi' },
          { ko: '심다', en: 'to plant', romanization: 'simda' },
        ],
      },
      {
        ko: '가을에 큰 박이 열렸습니다. 흥부가 박을 타자, 안에서 쌀과 금이 나왔습니다.',
        en: 'In autumn a large gourd grew. When Heungbu split it open, rice and gold came out.',
        words: [
          { ko: '가을', en: 'autumn', romanization: 'gaeul' },
          { ko: '박', en: 'gourd', romanization: 'bak' },
          { ko: '열리다', en: 'to ripen / open', romanization: 'yeollida' },
          { ko: '쌀', en: 'rice (uncooked)', romanization: 'ssal' },
          { ko: '금', en: 'gold', romanization: 'geum' },
        ],
      },
      {
        ko: '놀부는 욕심이 나서 제비 다리를 일부러 부러뜨렸습니다. 하지만 놀부의 박에서는 도깨비만 나왔습니다.',
        en: 'Nolbu grew greedy and deliberately broke a swallow’s leg. But only goblins came out of his gourd.',
        words: [
          { ko: '일부러', en: 'on purpose', romanization: 'ilbureo' },
          { ko: '부러뜨리다', en: 'to break (something)', romanization: 'bureotteurida' },
          { ko: '도깨비', en: 'goblin', romanization: 'dokkaebi' },
          { ko: '나오다', en: 'to come out', romanization: 'naoda' },
        ],
      },
      {
        ko: '결국 놀부는 잘못을 뉘우쳤고, 흥부는 형을 용서했습니다. 두 형제는 사이좋게 살았습니다.',
        en: 'In the end Nolbu regretted his mistake, and Heungbu forgave him. The brothers lived in harmony.',
        words: [
          { ko: '결국', en: 'in the end', romanization: 'gyeolguk' },
          { ko: '잘못', en: 'mistake / wrong', romanization: 'jalmot' },
          { ko: '뉘우치다', en: 'to regret', romanization: 'nuiuchida' },
          { ko: '용서하다', en: 'to forgive', romanization: 'yongseohada' },
          { ko: '사이좋다', en: 'to get along', romanization: 'saijota' },
        ],
      },
    ],
  },
  {
    id: 'golden-axe',
    titleKo: '금도끼와 은도끼',
    titleEn: 'The Golden Axe and the Silver Axe',
    summary: 'An honest woodcutter is rewarded for telling the truth.',
    level: 'A1',
    minutes: 3,
    theme: 'Folklore',
    questions: [
      {
        question: 'What happened to the woodcutter’s axe?',
        options: ['It broke in half', 'It fell into the pond', 'A thief stole it'],
        answerIndex: 1,
      },
      {
        question: 'What did the woodcutter say when shown the golden axe?',
        options: ['“That one is mine”', '“That is not my axe”', '“I want the silver one”'],
        answerIndex: 1,
      },
      {
        question: 'How was his honesty rewarded?',
        options: [
          'He received all three axes',
          'He received only his old axe',
          'He became a mountain spirit',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '한 나무꾼이 산에서 나무를 베고 있었습니다. 갑자기 도끼가 연못에 빠졌습니다.',
        en: 'A woodcutter was chopping trees in the mountains. Suddenly his axe fell into a pond.',
        words: [
          { ko: '나무꾼', en: 'woodcutter', romanization: 'namukkun' },
          { ko: '베다', en: 'to chop', romanization: 'beda' },
          { ko: '갑자기', en: 'suddenly', romanization: 'gapjagi' },
          { ko: '도끼', en: 'axe', romanization: 'dokki' },
          { ko: '연못', en: 'pond', romanization: 'yeonmot' },
          { ko: '빠지다', en: 'to fall in', romanization: 'ppajida' },
        ],
      },
      {
        ko: '나무꾼은 울었습니다. 그때 산신령이 나타났습니다. 산신령은 금도끼를 보여 주었습니다.',
        en: 'The woodcutter cried. Then a mountain spirit appeared and showed him a golden axe.',
        words: [
          { ko: '울다', en: 'to cry', romanization: 'ulda' },
          { ko: '산신령', en: 'mountain spirit', romanization: 'sansinryeong' },
          { ko: '나타나다', en: 'to appear', romanization: 'natanada' },
          { ko: '금도끼', en: 'golden axe', romanization: 'geumdokki' },
          { ko: '보여 주다', en: 'to show', romanization: 'boyeo juda' },
        ],
      },
      {
        ko: '“이 도끼가 네 것이냐?” 나무꾼은 고개를 저었습니다. “아니요. 제 도끼가 아닙니다.”',
        en: '“Is this axe yours?” The woodcutter shook his head. “No. That is not my axe.”',
        words: [
          { ko: '이것', en: 'this', romanization: 'igeot' },
          { ko: '네 것', en: 'yours', romanization: 'ne geot' },
          { ko: '고개', en: 'head', romanization: 'gogae' },
          { ko: '젓다', en: 'to shake (head)', romanization: 'jeotda' },
          { ko: '아니요', en: 'no', romanization: 'aniyo' },
        ],
      },
      {
        ko: '산신령은 은도끼도 보여 주었습니다. 나무꾼은 또 아니라고 했습니다. 마지막으로 자신의 낡은 도끼를 보고 기뻐했습니다.',
        en: 'The spirit also showed a silver axe. Again the woodcutter said no. At last he was happy to see his own old axe.',
        words: [
          { ko: '은도끼', en: 'silver axe', romanization: 'eundokki' },
          { ko: '또', en: 'again', romanization: 'tto' },
          { ko: '마지막', en: 'last', romanization: 'majimak' },
          { ko: '자신', en: 'oneself', romanization: 'jasin' },
          { ko: '낡다', en: 'to be old / worn', romanization: 'nakda' },
          { ko: '기쁘다', en: 'to be happy', romanization: 'gippeuda' },
        ],
      },
      {
        ko: '산신령은 나무꾼의 정직함을 칭찬하며 금도끼와 은도끼도 모두 주었습니다.',
        en: 'The mountain spirit praised his honesty and gave him the golden and silver axes too.',
        words: [
          { ko: '정직', en: 'honesty', romanization: 'jeongjik' },
          { ko: '칭찬하다', en: 'to praise', romanization: 'chingchanhada' },
          { ko: '모두', en: 'all', romanization: 'modu' },
          { ko: '주다', en: 'to give', romanization: 'juda' },
        ],
      },
    ],
  },
  {
    id: 'dokkaebi-bangmangi',
    titleKo: '도깨비 방망이',
    titleEn: 'The Goblin’s Club',
    summary: 'A poor man shares food with goblins and finds magic.',
    level: 'A2',
    minutes: 5,
    theme: 'Folklore',
    questions: [
      {
        question: 'What did the woodcutter share with the goblins?',
        options: ['Rice cakes', 'Gold coins', 'His axe'],
        answerIndex: 0,
      },
      {
        question: 'What happened when the goblins struck the club?',
        options: ['The house shook', 'Gold poured out', 'It started to rain'],
        answerIndex: 1,
      },
      {
        question: 'What did the woodcutter do after becoming rich?',
        options: ['He hid the club', 'He moved to the city', 'He helped his neighbors'],
        answerIndex: 2,
      },
    ],
    paragraphs: [
      {
        ko: '가난한 나무꾼이 산에 나무를 하러 갔습니다. 저녁이 되자 오래된 빈집을 발견했습니다.',
        en: 'A poor woodcutter went to the mountains to cut wood. When evening came, he found an old empty house.',
        words: [
          { ko: '가난하다', en: 'to be poor', romanization: 'gananhada' },
          { ko: '저녁', en: 'evening', romanization: 'jeonyeok' },
          { ko: '오래되다', en: 'to be old', romanization: 'oraedoeda' },
          { ko: '빈집', en: 'empty house', romanization: 'binjip' },
          { ko: '발견하다', en: 'to discover', romanization: 'balgyeonhada' },
        ],
      },
      {
        ko: '그는 집에서 떡을 먹으려고 했습니다. 그때 도깨비들이 나타났습니다.',
        en: 'He was about to eat rice cakes in the house. Then goblins appeared.',
        words: [
          { ko: '떡', en: 'rice cake', romanization: 'tteok' },
          { ko: '먹다', en: 'to eat', romanization: 'meokda' },
          { ko: '도깨비', en: 'goblin', romanization: 'dokkaebi' },
        ],
      },
      {
        ko: '나무꾼은 무서웠지만 떡을 나누어 주었습니다. 도깨비들은 기뻐하며 함께 춤을 추었습니다.',
        en: 'Though afraid, the woodcutter shared his rice cakes. The goblins were delighted and danced together.',
        words: [
          { ko: '나누다', en: 'to share', romanization: 'nanuda' },
          { ko: '춤', en: 'dance', romanization: 'chum' },
          { ko: '추다', en: 'to dance', romanization: 'chuda' },
          { ko: '함께', en: 'together', romanization: 'hamkke' },
        ],
      },
      {
        ko: '도깨비들은 방망이를 두드리며 외쳤습니다. “금 나와라, 뚝딱!” 그러자 금이 쏟아졌습니다.',
        en: 'The goblins struck a club and shouted, “Gold, come out!” Then gold poured out.',
        words: [
          { ko: '방망이', en: 'club / bat', romanization: 'bangmangi' },
          { ko: '두드리다', en: 'to strike / knock', romanization: 'dudeurida' },
          { ko: '외치다', en: 'to shout', romanization: 'oechida' },
          { ko: '나오다', en: 'to come out', romanization: 'naoda' },
          { ko: '쏟아지다', en: 'to pour out', romanization: 'ssodajida' },
        ],
      },
      {
        ko: '아침이 되자 도깨비들은 떠났고, 방망이를 나무꾼에게 남겼습니다. 그는 부자가 되었지만 욕심내지 않고 이웃을 도왔습니다.',
        en: 'At morning the goblins left and left the club for him. He became rich, but without greed he helped his neighbors.',
        words: [
          { ko: '아침', en: 'morning', romanization: 'achim' },
          { ko: '떠나다', en: 'to leave', romanization: 'tteonada' },
          { ko: '남기다', en: 'to leave behind', romanization: 'namgida' },
          { ko: '부자', en: 'rich person', romanization: 'buja' },
          { ko: '이웃', en: 'neighbor', romanization: 'iut' },
        ],
      },
    ],
  },
  {
    id: 'simcheong',
    titleKo: '효녀 심청',
    titleEn: 'Sim Cheong, the Filial Daughter',
    summary: 'A devoted daughter sacrifices herself so her father can see again.',
    level: 'A2',
    minutes: 6,
    theme: 'Classic tale',
    questions: [
      {
        question: 'Why did Sim Cheong sell herself to the sailors?',
        options: [
          'To buy a house for her father',
          'To offer rice so her father could see',
          'To travel to the Dragon King’s palace',
        ],
        answerIndex: 1,
      },
      {
        question: 'Where did Sim Cheong go after leaping into the sea?',
        options: ['A faraway island', 'The Dragon King’s palace', 'Back to her village'],
        answerIndex: 1,
      },
      {
        question: 'How did her father recognize her again?',
        options: [
          'He opened his eyes at her feast for the blind',
          'He heard her singing',
          'He touched her face',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '심청은 눈먼 아버지를 모시고 살았습니다. 아버지는 앞을 볼 수 없었습니다.',
        en: 'Sim Cheong lived caring for her blind father. He could not see.',
        words: [
          { ko: '효녀', en: 'filial daughter', romanization: 'hyonyeo' },
          { ko: '눈먼', en: 'blind', romanization: 'nunmeon' },
          { ko: '아버지', en: 'father', romanization: 'abeoji' },
          { ko: '모시다', en: 'to look after (elder)', romanization: 'mosida' },
          { ko: '앞', en: 'front / ahead', romanization: 'ap' },
        ],
      },
      {
        ko: '어느 날 한 스님이 말했습니다. “부처님께 쌀 삼백 석을 바치면 눈을 뜰 수 있습니다.”',
        en: 'One day a monk said, “If you offer three hundred sacks of rice to the Buddha, his eyes may open.”',
        words: [
          { ko: '스님', en: 'Buddhist monk', romanization: 'seunim' },
          { ko: '부처님', en: 'Buddha', romanization: 'bucheonim' },
          { ko: '쌀', en: 'rice', romanization: 'ssal' },
          { ko: '바치다', en: 'to offer', romanization: 'bachida' },
          { ko: '뜨다', en: 'to open (eyes)', romanization: 'tteuda' },
        ],
      },
      {
        ko: '심청은 돈이 없었습니다. 그래서 자신을 뱃사람들에게 팔았습니다. 뱃사람들은 바다에 제를 지내려고 했습니다.',
        en: 'Sim Cheong had no money. So she sold herself to sailors. The sailors meant to make an offering to the sea.',
        words: [
          { ko: '돈', en: 'money', romanization: 'don' },
          { ko: '자신', en: 'oneself', romanization: 'jasin' },
          { ko: '뱃사람', en: 'sailor', romanization: 'baetsaram' },
          { ko: '팔다', en: 'to sell', romanization: 'palda' },
          { ko: '바다', en: 'sea', romanization: 'bada' },
          { ko: '제', en: 'ritual offering', romanization: 'je' },
        ],
      },
      {
        ko: '심청은 바다에 뛰어들었습니다. 그러나 그녀는 용궁으로 갔고, 용왕의 딸이 되었습니다.',
        en: 'Sim Cheong leapt into the sea. But she went to the Dragon King’s palace and became his daughter.',
        words: [
          { ko: '뛰어들다', en: 'to jump into', romanization: 'ttwieodeulda' },
          { ko: '그러나', en: 'however', romanization: 'geureona' },
          { ko: '용궁', en: 'dragon palace', romanization: 'yonggung' },
          { ko: '용왕', en: 'Dragon King', romanization: 'yongwang' },
          { ko: '딸', en: 'daughter', romanization: 'ttal' },
        ],
      },
      {
        ko: '나중에 심청은 연꽃 속에 담겨 다시 세상으로 돌아왔습니다. 그리고 왕비가 되었습니다.',
        en: 'Later she returned to the world inside a lotus flower, and became a queen.',
        words: [
          { ko: '나중에', en: 'later', romanization: 'najunge' },
          { ko: '연꽃', en: 'lotus', romanization: 'yeonkkot' },
          { ko: '세상', en: 'world', romanization: 'sesang' },
          { ko: '왕비', en: 'queen', romanization: 'wangbi' },
        ],
      },
      {
        ko: '심청은 장님들을 위한 잔치를 열었습니다. 그 자리에서 아버지는 눈을 뜨고 딸을 다시 만났습니다.',
        en: 'Sim Cheong held a feast for the blind. There, her father opened his eyes and met his daughter again.',
        words: [
          { ko: '장님', en: 'blind person', romanization: 'jangnim' },
          { ko: '잔치', en: 'feast', romanization: 'janchi' },
          { ko: '열다', en: 'to hold / open', romanization: 'yeolda' },
          { ko: '자리', en: 'place / seat', romanization: 'jari' },
          { ko: '다시', en: 'again', romanization: 'dasi' },
        ],
      },
    ],
  },
  {
    id: 'morning-market',
    titleKo: '아침 시장',
    titleEn: 'The Morning Market',
    summary: 'A gentle everyday scene for absolute beginners.',
    level: 'A1',
    minutes: 2,
    theme: 'Daily life',
    questions: [
      {
        question: 'When does Minsu go to the market?',
        options: ['Sunday', 'Saturday', 'Monday'],
        answerIndex: 1,
      },
      {
        question: 'What does Minsu buy?',
        options: ['Tofu and kimchi', 'Rice cakes', 'Apples and bread'],
        answerIndex: 2,
      },
      {
        question: 'What do they do when they get home?',
        options: ['Eat breakfast together', 'Take a nap', 'Cook dinner for later'],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '오늘은 토요일입니다. 민수는 엄마와 함께 시장에 갑니다.',
        en: 'Today is Saturday. Minsu goes to the market with his mom.',
        words: [
          { ko: '오늘', en: 'today', romanization: 'oneul' },
          { ko: '토요일', en: 'Saturday', romanization: 'toyoil' },
          { ko: '함께', en: 'together', romanization: 'hamkke' },
          { ko: '시장', en: 'market', romanization: 'sijang' },
          { ko: '가다', en: 'to go', romanization: 'gada' },
        ],
      },
      {
        ko: '시장은 사람이 많습니다. 아주머니가 웃으며 말합니다. “어서 오세요!”',
        en: 'The market is crowded. An ajumma smiles and says, “Welcome!”',
        words: [
          { ko: '사람', en: 'person', romanization: 'saram' },
          { ko: '많다', en: 'to be many', romanization: 'manta' },
          { ko: '아주머니', en: 'middle-aged woman', romanization: 'ajumeoni' },
          { ko: '웃다', en: 'to smile / laugh', romanization: 'utda' },
          { ko: '어서 오세요', en: 'welcome', romanization: 'eoseo oseyo' },
        ],
      },
      {
        ko: '민수는 사과와 빵을 삽니다. 엄마는 두부와 김치를 삽니다.',
        en: 'Minsu buys apples and bread. Mom buys tofu and kimchi.',
        words: [
          { ko: '사과', en: 'apple', romanization: 'sagwa' },
          { ko: '빵', en: 'bread', romanization: 'ppang' },
          { ko: '사다', en: 'to buy', romanization: 'sada' },
          { ko: '두부', en: 'tofu', romanization: 'dubu' },
          { ko: '김치', en: 'kimchi', romanization: 'gimchi' },
        ],
      },
      {
        ko: '집에 와서 함께 아침을 먹습니다. 음식이 정말 맛있습니다.',
        en: 'They come home and eat breakfast together. The food is really delicious.',
        words: [
          { ko: '오다', en: 'to come', romanization: 'oda' },
          { ko: '아침', en: 'breakfast / morning', romanization: 'achim' },
          { ko: '음식', en: 'food', romanization: 'eumsik' },
          { ko: '정말', en: 'really', romanization: 'jeongmal' },
          { ko: '맛있다', en: 'to be delicious', romanization: 'masitda' },
        ],
      },
    ],
  },
  {
    id: 'rainy-day',
    titleKo: '비 오는 날',
    titleEn: 'A Rainy Day',
    summary: 'Splashing through puddles on a gray, happy morning.',
    level: 'A1',
    minutes: 2,
    theme: 'Daily life',
    questions: [
      {
        question: 'What is the weather like in the story?',
        options: ['Snowy', 'Rainy', 'Sunny'],
        answerIndex: 1,
      },
      {
        question: 'What color is Jisu’s umbrella?',
        options: ['Yellow', 'Red', 'Blue'],
        answerIndex: 0,
      },
      {
        question: 'What does Jisu drink at home?',
        options: ['Juice', 'Milk', 'Hot cocoa'],
        answerIndex: 2,
      },
    ],
    paragraphs: [
      {
        ko: '오늘은 비가 옵니다. 지수는 창밖을 봅니다.',
        en: 'It is raining today. Jisu looks out the window.',
        words: [
          { ko: '오늘', en: 'today', romanization: 'oneul' },
          { ko: '비', en: 'rain', romanization: 'bi' },
          { ko: '오다', en: 'to come / to fall (rain)', romanization: 'oda' },
          { ko: '창밖', en: 'outside the window', romanization: 'changbak' },
          { ko: '보다', en: 'to look / see', romanization: 'boda' },
        ],
      },
      {
        ko: '지수는 노란 우산을 씁니다. 장화도 신습니다.',
        en: 'Jisu opens a yellow umbrella. She puts on rain boots too.',
        words: [
          { ko: '노랗다', en: 'to be yellow', romanization: 'norata' },
          { ko: '우산', en: 'umbrella', romanization: 'usan' },
          { ko: '쓰다', en: 'to use / hold up', romanization: 'sseuda' },
          { ko: '장화', en: 'rain boots', romanization: 'janghwa' },
          { ko: '신다', en: 'to wear (shoes)', romanization: 'sinda' },
        ],
      },
      {
        ko: '길에 물웅덩이가 많습니다. 지수는 첨벙첨벙 뜁니다.',
        en: 'There are many puddles on the road. Jisu jumps in them — splash, splash!',
        words: [
          { ko: '길', en: 'road', romanization: 'gil' },
          { ko: '물웅덩이', en: 'puddle', romanization: 'murungdeongi' },
          { ko: '많다', en: 'to be many', romanization: 'manta' },
          { ko: '첨벙첨벙', en: 'splash splash', romanization: 'cheombeong-cheombeong' },
          { ko: '뛰다', en: 'to jump / run', romanization: 'ttwida' },
        ],
      },
      {
        ko: '집에 와서 따뜻한 코코아를 마십니다. 비 오는 날도 즐겁습니다.',
        en: 'Back home, she drinks warm cocoa. Rainy days are fun too.',
        words: [
          { ko: '집', en: 'house / home', romanization: 'jip' },
          { ko: '따뜻하다', en: 'to be warm', romanization: 'ttatteuthada' },
          { ko: '마시다', en: 'to drink', romanization: 'masida' },
          { ko: '즐겁다', en: 'to be fun / joyful', romanization: 'jeulgeopda' },
        ],
      },
    ],
  },
  {
    id: 'hare-tortoise',
    titleKo: '토끼와 거북이',
    titleEn: 'The Hare and the Tortoise',
    summary: 'Slow and steady climbs the mountain first.',
    level: 'A1',
    minutes: 3,
    theme: 'Fable',
    questions: [
      {
        question: 'How does the story describe the hare and the tortoise?',
        options: [
          'The hare is fast, the tortoise is slow',
          'The tortoise is fast, the hare is slow',
          'They are equally fast',
        ],
        answerIndex: 0,
      },
      {
        question: 'What does the hare do in the middle of the race?',
        options: ['He gets lost', 'He falls asleep under a tree', 'He stops to eat'],
        answerIndex: 1,
      },
      {
        question: 'Who wins the race?',
        options: ['The hare', 'Nobody', 'The tortoise'],
        answerIndex: 2,
      },
    ],
    paragraphs: [
      {
        ko: '옛날에 토끼와 거북이가 살았습니다. 토끼는 아주 빨랐습니다. 거북이는 아주 느렸습니다.',
        en: 'Long ago there lived a hare and a tortoise. The hare was very fast. The tortoise was very slow.',
        words: [
          { ko: '토끼', en: 'hare / rabbit', romanization: 'tokki' },
          { ko: '거북이', en: 'tortoise / turtle', romanization: 'geobugi' },
          { ko: '아주', en: 'very', romanization: 'aju' },
          { ko: '빠르다', en: 'to be fast', romanization: 'ppareuda' },
          { ko: '느리다', en: 'to be slow', romanization: 'neurida' },
        ],
      },
      {
        ko: '토끼가 웃으며 말했습니다. “너는 정말 느리구나!” 거북이가 대답했습니다. “그럼 저 산까지 경주를 하자.”',
        en: 'The hare laughed and said, “You are so slow!” The tortoise answered, “Then let’s race to that mountain.”',
        words: [
          { ko: '웃다', en: 'to laugh / smile', romanization: 'utda' },
          { ko: '말하다', en: 'to speak', romanization: 'malhada' },
          { ko: '대답하다', en: 'to answer', romanization: 'daedaphada' },
          { ko: '산', en: 'mountain', romanization: 'san' },
          { ko: '경주', en: 'race', romanization: 'gyeongju' },
        ],
      },
      {
        ko: '경주가 시작되었습니다. 토끼는 빨리 달렸습니다. 거북이는 천천히 걸었습니다.',
        en: 'The race began. The hare ran quickly. The tortoise walked slowly.',
        words: [
          { ko: '시작되다', en: 'to begin', romanization: 'sijakdoeda' },
          { ko: '빨리', en: 'quickly', romanization: 'ppalli' },
          { ko: '달리다', en: 'to run', romanization: 'dallida' },
          { ko: '천천히', en: 'slowly', romanization: 'cheoncheonhi' },
          { ko: '걷다', en: 'to walk', romanization: 'geotda' },
        ],
      },
      {
        ko: '토끼는 생각했습니다. “거북이는 느려. 조금 자도 괜찮아.” 토끼는 나무 아래에서 잠들었습니다.',
        en: 'The hare thought, “The tortoise is slow. A little nap is fine.” He fell asleep under a tree.',
        words: [
          { ko: '생각하다', en: 'to think', romanization: 'saenggakhada' },
          { ko: '조금', en: 'a little', romanization: 'jogeum' },
          { ko: '괜찮다', en: 'to be okay', romanization: 'gwaenchanta' },
          { ko: '나무', en: 'tree', romanization: 'namu' },
          { ko: '아래', en: 'under / below', romanization: 'arae' },
          { ko: '잠들다', en: 'to fall asleep', romanization: 'jamdeulda' },
        ],
      },
      {
        ko: '거북이는 쉬지 않고 걸었습니다. 마침내 거북이가 먼저 산에 도착했습니다. 거북이가 이겼습니다!',
        en: 'The tortoise walked without resting. At last, the tortoise reached the mountain first. The tortoise won!',
        words: [
          { ko: '쉬다', en: 'to rest', romanization: 'swida' },
          { ko: '마침내', en: 'at last', romanization: 'machimnae' },
          { ko: '먼저', en: 'first', romanization: 'meonjeo' },
          { ko: '도착하다', en: 'to arrive', romanization: 'dochakhada' },
          { ko: '이기다', en: 'to win', romanization: 'igida' },
        ],
      },
    ],
  },
  {
    id: 'fairy-woodcutter',
    titleKo: '선녀와 나무꾼',
    titleEn: 'The Fairy and the Woodcutter',
    summary: 'A hidden robe, a marriage, and a way back to the sky.',
    level: 'A2',
    minutes: 5,
    theme: 'Folklore',
    questions: [
      {
        question: 'Why did the deer help the woodcutter?',
        options: [
          'The woodcutter hid it from a hunter',
          'The woodcutter fed it in winter',
          'The woodcutter healed its leg',
        ],
        answerIndex: 0,
      },
      {
        question: 'Why couldn’t the fairy return to the sky?',
        options: [
          'She forgot the way',
          'Her winged robe was hidden',
          'The moon was not full',
        ],
        answerIndex: 1,
      },
      {
        question: 'How did the woodcutter reach the sky in the end?',
        options: ['On a rope', 'On the deer’s back', 'In a well bucket'],
        answerIndex: 2,
      },
    ],
    paragraphs: [
      {
        ko: '옛날에 마음씨 착한 나무꾼이 산속에 살았습니다. 어느 날, 사냥꾼에게 쫓기는 사슴을 숨겨 주었습니다.',
        en: 'Long ago a kind-hearted woodcutter lived in the mountains. One day he hid a deer that was being chased by a hunter.',
        words: [
          { ko: '마음씨', en: 'heart / nature', romanization: 'maeumssi' },
          { ko: '나무꾼', en: 'woodcutter', romanization: 'namukkun' },
          { ko: '사냥꾼', en: 'hunter', romanization: 'sanyangkkun' },
          { ko: '사슴', en: 'deer', romanization: 'saseum' },
          { ko: '숨기다', en: 'to hide (something)', romanization: 'sumgida' },
        ],
      },
      {
        ko: '사슴이 말했습니다. “은혜를 갚겠습니다. 보름달 밤에 선녀들이 연못에서 목욕을 합니다. 날개옷 하나를 숨기세요.”',
        en: 'The deer said, “I will repay your kindness. On the night of the full moon, fairies bathe in the pond. Hide one of their winged robes.”',
        words: [
          { ko: '은혜', en: 'kindness / favor', romanization: 'eunhye' },
          { ko: '갚다', en: 'to repay', romanization: 'gapda' },
          { ko: '보름달', en: 'full moon', romanization: 'boreumdal' },
          { ko: '선녀', en: 'fairy', romanization: 'seonnyeo' },
          { ko: '날개옷', en: 'winged robe', romanization: 'nalgaeot' },
          { ko: '목욕', en: 'bath', romanization: 'mogyok' },
        ],
      },
      {
        ko: '나무꾼은 날개옷 하나를 숨겼습니다. 한 선녀가 하늘로 돌아가지 못했습니다. 두 사람은 결혼했습니다.',
        en: 'The woodcutter hid one robe. One fairy could not return to the sky. The two married.',
        words: [
          { ko: '하늘', en: 'sky', romanization: 'haneul' },
          { ko: '돌아가다', en: 'to go back', romanization: 'doragada' },
          { ko: '결혼하다', en: 'to marry', romanization: 'gyeolhonhada' },
        ],
      },
      {
        ko: '몇 년 뒤, 아이가 둘 태어났습니다. 나무꾼은 안심하고 날개옷을 아내에게 보여 주었습니다.',
        en: 'A few years later, two children were born. The woodcutter felt safe and showed the robe to his wife.',
        words: [
          { ko: '몇 년', en: 'a few years', romanization: 'myeot nyeon' },
          { ko: '뒤', en: 'after / later', romanization: 'dwi' },
          { ko: '태어나다', en: 'to be born', romanization: 'taeeonada' },
          { ko: '안심하다', en: 'to feel relieved', romanization: 'ansimhada' },
          { ko: '아내', en: 'wife', romanization: 'anae' },
        ],
      },
      {
        ko: '선녀는 날개옷을 입고 아이들과 함께 하늘로 올라갔습니다. 나무꾼은 몹시 슬펐습니다.',
        en: 'The fairy put on the robe and rose to the sky with the children. The woodcutter was heartbroken.',
        words: [
          { ko: '입다', en: 'to wear', romanization: 'ipda' },
          { ko: '함께', en: 'together', romanization: 'hamkke' },
          { ko: '올라가다', en: 'to go up', romanization: 'ollagada' },
          { ko: '몹시', en: 'terribly', romanization: 'mopsi' },
          { ko: '슬프다', en: 'to be sad', romanization: 'seulpeuda' },
        ],
      },
      {
        ko: '사슴이 다시 도와주었습니다. “하늘에서 물을 긷는 두레박을 타세요.” 나무꾼은 하늘로 올라가 가족을 다시 만났습니다.',
        en: 'The deer helped again. “Ride the well bucket that draws water from the sky.” The woodcutter rose to the sky and met his family again.',
        words: [
          { ko: '다시', en: 'again', romanization: 'dasi' },
          { ko: '돕다', en: 'to help', romanization: 'dopda' },
          { ko: '두레박', en: 'well bucket', romanization: 'durebak' },
          { ko: '타다', en: 'to ride', romanization: 'tada' },
          { ko: '가족', en: 'family', romanization: 'gajok' },
        ],
      },
    ],
  },
  {
    id: 'grateful-magpie',
    titleKo: '은혜 갚은 까치',
    titleEn: 'The Grateful Magpie',
    summary: 'A scholar, a serpent, and a bell that rings at dawn.',
    level: 'B1',
    minutes: 6,
    theme: 'Folklore',
    questions: [
      {
        question: 'Where was the scholar going at the start of the story?',
        options: [
          'To Seoul to take the state exam',
          'To visit his family',
          'To hunt in the mountains',
        ],
        answerIndex: 0,
      },
      {
        question: 'How did the scholar save the magpies?',
        options: [
          'He climbed the tree and chased the serpent',
          'He shot the serpent with his bow',
          'He rang the temple bell',
        ],
        answerIndex: 1,
      },
      {
        question: 'Who rang the bell three times before dawn?',
        options: ['The woman', 'A temple monk', 'The magpies'],
        answerIndex: 2,
      },
    ],
    paragraphs: [
      {
        ko: '옛날, 한 젊은 선비가 과거 시험을 보러 서울로 가고 있었습니다. 깊은 산길에서 갑자기 까치 울음소리가 들렸습니다.',
        en: 'Long ago, a young scholar was traveling to Seoul to take the state examination. On a deep mountain path, he suddenly heard magpies crying.',
        words: [
          { ko: '선비', en: 'scholar', romanization: 'seonbi' },
          { ko: '과거 시험', en: 'state examination', romanization: 'gwageo siheom' },
          { ko: '깊다', en: 'to be deep', romanization: 'gipda' },
          { ko: '까치', en: 'magpie', romanization: 'kkachi' },
          { ko: '울음소리', en: 'crying sound', romanization: 'ureumsori' },
          { ko: '들리다', en: 'to be heard', romanization: 'deullida' },
        ],
      },
      {
        ko: '커다란 구렁이가 까치 둥지를 감고 있었습니다. 선비는 활을 쏘아 까치들을 구해 주었습니다.',
        en: 'A huge serpent was coiled around the magpies’ nest. The scholar shot his bow and saved the magpies.',
        words: [
          { ko: '커다랗다', en: 'to be huge', romanization: 'keodarata' },
          { ko: '구렁이', en: 'serpent', romanization: 'gureongi' },
          { ko: '둥지', en: 'nest', romanization: 'dungji' },
          { ko: '감다', en: 'to coil around', romanization: 'gamda' },
          { ko: '활', en: 'bow', romanization: 'hwal' },
          { ko: '쏘다', en: 'to shoot', romanization: 'ssoda' },
          { ko: '구하다', en: 'to save', romanization: 'guhada' },
        ],
      },
      {
        ko: '밤이 되자 선비는 산속에서 불빛을 발견했습니다. 아름다운 여인이 사는 집에서 하룻밤을 묵기로 했습니다.',
        en: 'When night fell, the scholar found a light in the mountains. He decided to stay the night at a house where a beautiful woman lived.',
        words: [
          { ko: '불빛', en: 'light / glow', romanization: 'bulbit' },
          { ko: '발견하다', en: 'to discover', romanization: 'balgyeonhada' },
          { ko: '아름답다', en: 'to be beautiful', romanization: 'areumdapda' },
          { ko: '여인', en: 'woman', romanization: 'yein' },
          { ko: '하룻밤', en: 'one night', romanization: 'harutbam' },
          { ko: '묵다', en: 'to stay (lodge)', romanization: 'mukda' },
        ],
      },
      {
        ko: '한밤중에 여인은 구렁이로 변했습니다. “네가 내 남편을 죽였다. 새벽까지 종이 세 번 울리면 살려 주겠다.”',
        en: 'At midnight the woman turned into a serpent. “You killed my husband. If the bell rings three times before dawn, I will spare you.”',
        words: [
          { ko: '한밤중', en: 'midnight', romanization: 'hanbamjung' },
          { ko: '변하다', en: 'to change / transform', romanization: 'byeonhada' },
          { ko: '남편', en: 'husband', romanization: 'nampyeon' },
          { ko: '새벽', en: 'dawn', romanization: 'saebyeok' },
          { ko: '종', en: 'bell', romanization: 'jong' },
          { ko: '울리다', en: 'to ring', romanization: 'ullida' },
          { ko: '살리다', en: 'to spare / save a life', romanization: 'sallida' },
        ],
      },
      {
        ko: '그때 멀리서 종소리가 세 번 울렸습니다. 까치들이 머리로 종을 치고 쓰러진 것이었습니다. 은혜를 갚은 것입니다.',
        en: 'Just then, a bell rang three times in the distance. The magpies had struck the bell with their heads and fallen. They had repaid his kindness.',
        words: [
          { ko: '멀리', en: 'far away', romanization: 'meolli' },
          { ko: '종소리', en: 'sound of a bell', romanization: 'jongsori' },
          { ko: '치다', en: 'to strike', romanization: 'chida' },
          { ko: '쓰러지다', en: 'to collapse', romanization: 'sseureojida' },
          { ko: '은혜', en: 'kindness / debt of gratitude', romanization: 'eunhye' },
        ],
      },
    ],
  },
]

// Every paragraph has an illustration named `story-art/<artId>-<n>.jpg`.
export const stories: Story[] = rawStories.map((story) => ({
  ...story,
  paragraphs: story.paragraphs.map((paragraph, index) => ({
    ...paragraph,
    image: `story-art/${artIdOverrides[story.id] ?? story.id}-${index + 1}.jpg`,
  })),
}))

export const getStoryById = (id: string) => stories.find((story) => story.id === id)
