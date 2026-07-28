import type { Story } from '../../types'

export const dailyLifeStories: Story[] = [
  {
    id: 'on-the-subway',
    titleKo: '지하철에서',
    titleEn: 'On the Subway',
    summary: 'A tired commuter and a small kindness on Line 2.',
    level: 'A1',
    minutes: 3,
    theme: 'Daily life',
    cover: 'story-art/on-the-subway-cover.jpg',
    questions: [
      {
        question: 'Why is the woman tired?',
        options: [
          'She worked late at the office',
          'She ran a marathon',
          'She studied all morning',
        ],
        answerIndex: 0,
      },
      {
        question: 'What does Minjun do?',
        options: [
          'He buys her a coffee',
          'He offers her his seat',
          'He asks for directions',
        ],
        answerIndex: 1,
      },
      {
        question: 'How does the woman feel at the end?',
        options: ['Angry', 'Grateful', 'Confused'],
        answerIndex: 1,
      },
    ],
    paragraphs: [
      {
        ko: '저녁이 되었습니다. 지하철 2호선이 사람으로 가득 찼습니다.',
        en: 'Evening came. Subway Line 2 was full of people.',
        words: [
          { ko: '저녁', en: 'evening', romanization: 'jeonyeok' },
          { ko: '지하철', en: 'subway', romanization: 'jihacheol' },
          { ko: '사람', en: 'person / people', romanization: 'saram' },
          { ko: '가득', en: 'full / packed', romanization: 'gadeuk' },
        ],
      },
      {
        ko: '민준은 학교에서 집으로 가고 있었습니다. 옆에 서 있는 여자가 피곤해 보였습니다.',
        en: 'Minjun was going home from school. The woman standing next to him looked tired.',
        words: [
          { ko: '학교', en: 'school', romanization: 'hakgyo' },
          { ko: '집', en: 'home', romanization: 'jip' },
          { ko: '피곤하다', en: 'to be tired', romanization: 'pigonhada' },
          { ko: '보이다', en: 'to look / seem', romanization: 'boida' },
        ],
      },
      {
        ko: '여자는 회사에서 늦게까지 일했습니다. 눈을 감고 서 있었습니다.',
        en: 'The woman worked late at the office. She stood with her eyes closed.',
        words: [
          { ko: '회사', en: 'company / office', romanization: 'hoesa' },
          { ko: '늦다', en: 'to be late', romanization: 'neutda' },
          { ko: '일하다', en: 'to work', romanization: 'ilhada' },
          { ko: '눈', en: 'eye', romanization: 'nun' },
        ],
      },
      {
        ko: '민준은 자리에서 일어났습니다. “여기 앉으세요,” 하고 말했습니다.',
        en: 'Minjun stood up from his seat. “Please sit here,” he said.',
        words: [
          { ko: '자리', en: 'seat / place', romanization: 'jari' },
          { ko: '일어나다', en: 'to stand up', romanization: 'ireonada' },
          { ko: '앉다', en: 'to sit', romanization: 'anda' },
          { ko: '말하다', en: 'to speak', romanization: 'malhada' },
        ],
      },
      {
        ko: '여자는 미소를 지었습니다. “고마워요,” 하고 조용히 말했습니다.',
        en: 'The woman smiled. “Thank you,” she said quietly.',
        words: [
          { ko: '미소', en: 'smile', romanization: 'miso' },
          { ko: '고맙다', en: 'to be thankful', romanization: 'gomapda' },
          { ko: '조용히', en: 'quietly', romanization: 'joyonghi' },
        ],
      },
    ],
  },
  {
    id: 'making-gimbap',
    titleKo: '김밥 만들기',
    titleEn: 'Making Gimbap',
    summary: 'A mother and daughter roll gimbap for a school picnic.',
    level: 'A1',
    minutes: 3,
    theme: 'Daily life',
    cover: 'story-art/making-gimbap-cover.jpg',
    questions: [
      {
        question: 'Why are they making gimbap?',
        options: [
          'For a school picnic tomorrow',
          'For a restaurant opening',
          'For a birthday gift',
        ],
        answerIndex: 0,
      },
      {
        question: 'What does Suyeon put on the rice?',
        options: ['Cheese and ham', 'Carrot, egg, and spinach', 'Chocolate and cream'],
        answerIndex: 1,
      },
      {
        question: 'How does Suyeon feel when they finish?',
        options: ['Bored', 'Proud', 'Worried'],
        answerIndex: 1,
      },
    ],
    paragraphs: [
      {
        ko: '일요일 아침입니다. 수연이와 엄마는 부엌에 있습니다.',
        en: 'It is Sunday morning. Suyeon and her mother are in the kitchen.',
        words: [
          { ko: '일요일', en: 'Sunday', romanization: 'illyoil' },
          { ko: '아침', en: 'morning', romanization: 'achim' },
          { ko: '엄마', en: 'mom', romanization: 'eomma' },
          { ko: '부엌', en: 'kitchen', romanization: 'bueok' },
        ],
      },
      {
        ko: '내일 학교 소풍이 있습니다. 엄마는 김밥을 만들기로 했습니다.',
        en: 'There is a school picnic tomorrow. Mother decided to make gimbap.',
        words: [
          { ko: '내일', en: 'tomorrow', romanization: 'naeil' },
          { ko: '소풍', en: 'picnic', romanization: 'sopung' },
          { ko: '김밥', en: 'gimbap (rice roll)', romanization: 'gimbap' },
          { ko: '만들다', en: 'to make', romanization: 'mandeulda' },
        ],
      },
      {
        ko: '수연이는 밥 위에 당근, 계란, 시금치를 올렸습니다. 엄마는 김을 펼쳤습니다.',
        en: 'Suyeon put carrot, egg, and spinach on the rice. Mother spread out the seaweed.',
        words: [
          { ko: '밥', en: 'rice / meal', romanization: 'bap' },
          { ko: '당근', en: 'carrot', romanization: 'danggeun' },
          { ko: '계란', en: 'egg', romanization: 'gyeran' },
          { ko: '시금치', en: 'spinach', romanization: 'sigeumchi' },
        ],
      },
      {
        ko: '둘이 함께 김밥을 말았습니다. 칼로 잘라서 통에 담았습니다.',
        en: 'Together they rolled the gimbap. They cut it and put it in a container.',
        words: [
          { ko: '함께', en: 'together', romanization: 'hamkke' },
          { ko: '말다', en: 'to roll (up)', romanization: 'malda' },
          { ko: '칼', en: 'knife', romanization: 'kal' },
          { ko: '통', en: 'container', romanization: 'tong' },
        ],
      },
      {
        ko: '수연이는 예쁜 김밥을 보고 웃었습니다. “엄마, 우리 잘했어요!”',
        en: 'Suyeon looked at the pretty gimbap and smiled. “Mom, we did well!”',
        words: [
          { ko: '예쁘다', en: 'to be pretty', romanization: 'yeppeuda' },
          { ko: '보다', en: 'to see / look', romanization: 'boda' },
          { ko: '웃다', en: 'to laugh / smile', romanization: 'utda' },
        ],
      },
    ],
  },
  {
    id: 'first-snow',
    titleKo: '첫눈',
    titleEn: 'The First Snow',
    summary: 'Neighborhood children meet the season\'s first snowfall.',
    level: 'A1',
    minutes: 3,
    theme: 'Daily life',
    cover: 'story-art/first-snow-cover.jpg',
    questions: [
      {
        question: 'What falls from the sky?',
        options: ['Rain', 'Snow', 'Leaves'],
        answerIndex: 1,
      },
      {
        question: 'What do the children build?',
        options: ['A sandcastle', 'A small snowman', 'A tree house'],
        answerIndex: 1,
      },
      {
        question: 'What do they use for the snowman\'s nose?',
        options: ['A carrot', 'A pencil', 'A leaf'],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '12월 아침입니다. 하늘에서 하얀 눈이 내렸습니다.',
        en: 'It is a December morning. White snow fell from the sky.',
        words: [
          { ko: '12월', en: 'December', romanization: 'sibiwol' },
          { ko: '하늘', en: 'sky', romanization: 'haneul' },
          { ko: '하얗다', en: 'to be white', romanization: 'hayata' },
          { ko: '눈', en: 'snow / eye', romanization: 'nun' },
          { ko: '내리다', en: 'to fall (precipitation)', romanization: 'naerida' },
        ],
      },
      {
        ko: '지우와 하은이는 창문 밖을 봤습니다. “와, 첫눈이에요!”',
        en: 'Jiu and Haeun looked out the window. “Wow, it’s the first snow!”',
        words: [
          { ko: '창문', en: 'window', romanization: 'changmun' },
          { ko: '밖', en: 'outside', romanization: 'bak' },
          { ko: '첫눈', en: 'first snow', romanization: 'cheonnun' },
        ],
      },
      {
        ko: '아이들은 코트와 장갑을 입고 나갔습니다. 눈이 발에 닿았습니다.',
        en: 'The children put on coats and gloves and went outside. Snow touched their feet.',
        words: [
          { ko: '코트', en: 'coat', romanization: 'koteu' },
          { ko: '장갑', en: 'gloves', romanization: 'janggap' },
          { ko: '입다', en: 'to wear', romanization: 'ipda' },
          { ko: '발', en: 'foot', romanization: 'bal' },
        ],
      },
      {
        ko: '둘은 눈을 모아 작은 눈사람을 만들었습니다. 당근으로 코를 만들었습니다.',
        en: 'The two gathered snow and made a small snowman. They made a nose with a carrot.',
        words: [
          { ko: '모으다', en: 'to gather', romanization: 'moeuda' },
          { ko: '작다', en: 'to be small', romanization: 'jakda' },
          { ko: '눈사람', en: 'snowman', romanization: 'nunsaram' },
          { ko: '코', en: 'nose', romanization: 'ko' },
        ],
      },
      {
        ko: '엄마가 창문에서 손을 흔들었습니다. 아이들은 웃으며 손을 흔들었습니다.',
        en: 'Mother waved from the window. The children smiled and waved back.',
        words: [
          { ko: '손', en: 'hand', romanization: 'son' },
          { ko: '흔들다', en: 'to wave / shake', romanization: 'heundeulda' },
          { ko: '웃다', en: 'to laugh / smile', romanization: 'utda' },
        ],
      },
    ],
  },
  {
    id: 'convenience-store',
    titleKo: '편의점에서',
    titleEn: 'At the Convenience Store',
    summary: 'A late-night study break and a warm cup of ramen.',
    level: 'A1',
    minutes: 3,
    theme: 'Daily life',
    cover: 'story-art/convenience-store-cover.jpg',
    questions: [
      {
        question: 'Why does Jihoon go to the store?',
        options: [
          'He is hungry after studying',
          'He wants to buy a toy',
          'He is meeting a friend',
        ],
        answerIndex: 0,
      },
      {
        question: 'What does he buy?',
        options: ['Bread and milk', 'Ramen and a drink', 'Fruit and candy'],
        answerIndex: 1,
      },
      {
        question: 'What does the clerk do for him?',
        options: [
          'She heats the ramen for him',
          'She gives him a free snack',
          'She calls his mother',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '밤 11시입니다. 지훈이는 시험 공부를 했습니다. 배가 고팠습니다.',
        en: 'It is 11 at night. Jihoon studied for a test. He was hungry.',
        words: [
          { ko: '밤', en: 'night', romanization: 'bam' },
          { ko: '시험', en: 'test / exam', romanization: 'siheom' },
          { ko: '공부', en: 'study', romanization: 'gongbu' },
          { ko: '배고프다', en: 'to be hungry', romanization: 'baegopeuda' },
        ],
      },
      {
        ko: '지훈이는 가까운 편의점에 갔습니다. 불이 밝게 켜져 있었습니다.',
        en: 'Jihoon went to a nearby convenience store. The lights were brightly on.',
        words: [
          { ko: '가깝다', en: 'to be near / close', romanization: 'gakkapda' },
          { ko: '편의점', en: 'convenience store', romanization: 'pyeonuijeom' },
          { ko: '불', en: 'light / fire', romanization: 'bul' },
          { ko: '밝다', en: 'to be bright', romanization: 'bakda' },
        ],
      },
      {
        ko: '지훈이는 라면과 음료수를 샀습니다. 계산대에 갔습니다.',
        en: 'Jihoon bought ramen and a drink. He went to the counter.',
        words: [
          { ko: '라면', en: 'ramen', romanization: 'ramyeon' },
          { ko: '음료수', en: 'beverage / drink', romanization: 'eumnyosu' },
          { ko: '사다', en: 'to buy', romanization: 'sada' },
          { ko: '계산대', en: 'checkout counter', romanization: 'gyesandae' },
        ],
      },
      {
        ko: '점원 아주머니가 라면을 데워 주었습니다. “따뜻하게 먹어요,” 하고 말했습니다.',
        en: 'The clerk heated the ramen for him. “Eat it while it’s warm,” she said.',
        words: [
          { ko: '점원', en: 'store clerk', romanization: 'jeomwon' },
          { ko: '데우다', en: 'to heat up', romanization: 'deuda' },
          { ko: '따뜻하다', en: 'to be warm', romanization: 'ttatteuthada' },
          { ko: '먹다', en: 'to eat', romanization: 'meokda' },
        ],
      },
      {
        ko: '지훈이는 창가에 앉아 라면을 먹었습니다. 마음이 조금 편해졌습니다.',
        en: 'Jihoon sat by the window and ate the ramen. He felt a little better.',
        words: [
          { ko: '창가', en: 'by the window', romanization: 'changga' },
          { ko: '앉다', en: 'to sit', romanization: 'anda' },
          { ko: '마음', en: 'heart / mind', romanization: 'maeum' },
          { ko: '편하다', en: 'to be comfortable / at ease', romanization: 'pyeonhada' },
        ],
      },
    ],
  },
  {
    id: 'han-river-picnic',
    titleKo: '한강 소풍',
    titleEn: 'A Picnic by the Han River',
    summary: 'Friends share chicken and laughter on a spring afternoon.',
    level: 'A1',
    minutes: 3,
    theme: 'Daily life',
    cover: 'story-art/han-river-picnic-cover.jpg',
    questions: [
      {
        question: 'Where do the friends have their picnic?',
        options: [
          'By the Han River',
          'At a mountain cabin',
          'In a school classroom',
        ],
        answerIndex: 0,
      },
      {
        question: 'What food do they eat?',
        options: ['Pizza and salad', 'Fried chicken and kimbap', 'Soup and rice cakes'],
        answerIndex: 1,
      },
      {
        question: 'What do they do after eating?',
        options: [
          'They play badminton',
          'They go swimming',
          'They watch a movie',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '봄 토요일입니다. 서연과 친구들은 한강 공원에 갔습니다.',
        en: 'It is a spring Saturday. Seoyeon and her friends went to Han River Park.',
        words: [
          { ko: '봄', en: 'spring', romanization: 'bom' },
          { ko: '토요일', en: 'Saturday', romanization: 'toyoil' },
          { ko: '친구', en: 'friend', romanization: 'chingu' },
          { ko: '한강', en: 'Han River', romanization: 'hangang' },
          { ko: '공원', en: 'park', romanization: 'gongwon' },
        ],
      },
      {
        ko: '친구들은 돗자리를 펼쳤습니다. 햇빛이 따뜻했습니다.',
        en: 'The friends spread out a mat. The sunlight was warm.',
        words: [
          { ko: '돗자리', en: 'mat (for sitting)', romanization: 'dotjari' },
          { ko: '펼치다', en: 'to spread out', romanization: 'pyeolchida' },
          { ko: '햇빛', en: 'sunlight', romanization: 'haetbit' },
          { ko: '따뜻하다', en: 'to be warm', romanization: 'ttatteuthada' },
        ],
      },
      {
        ko: '치킨과 김밥을 먹었습니다. 모두 맛있다고 말했습니다.',
        en: 'They ate fried chicken and gimbap. Everyone said it was delicious.',
        words: [
          { ko: '치킨', en: 'fried chicken', romanization: 'chikin' },
          { ko: '김밥', en: 'gimbap (rice roll)', romanization: 'gimbap' },
          { ko: '맛있다', en: 'to be delicious', romanization: 'masitda' },
        ],
      },
      {
        ko: '밥을 먹고 배드민턴을 쳤습니다. 공이 강 쪽으로 날아갔습니다.',
        en: 'After eating, they played badminton. The shuttlecock flew toward the river.',
        words: [
          { ko: '배드민턴', en: 'badminton', romanization: 'baedeuminteon' },
          { ko: '치다', en: 'to hit / play', romanization: 'chida' },
          { ko: '공', en: 'ball', romanization: 'gong' },
          { ko: '강', en: 'river', romanization: 'gang' },
        ],
      },
      {
        ko: '해가 지기 전에 집으로 갔습니다. “다음에 또 오자!” 하고 말했습니다.',
        en: 'Before the sun set, they went home. “Let’s come again!” they said.',
        words: [
          { ko: '해', en: 'sun', romanization: 'hae' },
          { ko: '지다', en: 'to set (sun)', romanization: 'jida' },
          { ko: '다음', en: 'next', romanization: 'daeum' },
        ],
      },
    ],
  },
  {
    id: 'late-for-school',
    titleKo: '지각한 날',
    titleEn: 'A Day Running Late',
    summary: 'A missed bus, a worried student, and a kind teacher.',
    level: 'A1',
    minutes: 3,
    theme: 'Daily life',
    cover: 'story-art/late-for-school-cover.jpg',
    questions: [
      {
        question: 'Why is Yuna late?',
        options: [
          'Her bus did not come on time',
          'She overslept on purpose',
          'She went to a cafe first',
        ],
        answerIndex: 0,
      },
      {
        question: 'What does Yuna do when she arrives?',
        options: [
          'She apologizes to the teacher',
          'She sits down without speaking',
          'She asks to go home',
        ],
        answerIndex: 0,
      },
      {
        question: 'How does the teacher respond?',
        options: [
          'She understands and lets Yuna in',
          'She sends Yuna to the principal',
          'She gives Yuna extra homework',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '월요일 아침입니다. 유나는 버스 정류장에 서 있었습니다.',
        en: 'It is Monday morning. Yuna was standing at the bus stop.',
        words: [
          { ko: '월요일', en: 'Monday', romanization: 'woryoil' },
          { ko: '버스', en: 'bus', romanization: 'beoseu' },
          { ko: '정류장', en: 'bus stop', romanization: 'jeongnyujang' },
          { ko: '서다', en: 'to stand', romanization: 'seoda' },
        ],
      },
      {
        ko: '버스가 늦게 왔습니다. 유나는 학교에 늦었습니다.',
        en: 'The bus came late. Yuna was late for school.',
        words: [
          { ko: '늦다', en: 'to be late', romanization: 'neutda' },
          { ko: '오다', en: 'to come', romanization: 'oda' },
          { ko: '학교', en: 'school', romanization: 'hakgyo' },
        ],
      },
      {
        ko: '유나는 빠르게 달렸습니다. 숨이 차 올라왔습니다.',
        en: 'Yuna ran quickly. She was out of breath.',
        words: [
          { ko: '빠르다', en: 'to be fast', romanization: 'ppareuda' },
          { ko: '달리다', en: 'to run', romanization: 'dallida' },
          { ko: '숨', en: 'breath', romanization: 'sum' },
        ],
      },
      {
        ko: '교실 문 앞에서 선생님께 말했습니다. “늦어서 죄송합니다.”',
        en: 'At the classroom door, she spoke to the teacher. “I’m sorry I’m late.”',
        words: [
          { ko: '교실', en: 'classroom', romanization: 'gyosil' },
          { ko: '문', en: 'door', romanization: 'mun' },
          { ko: '선생님', en: 'teacher', romanization: 'seonsaengnim' },
          { ko: '죄송하다', en: 'to be sorry', romanization: 'joesonghada' },
        ],
      },
      {
        ko: '선생님은 고개를 끄덕였습니다. “괜찮아요. 들어오세요.”',
        en: 'The teacher nodded. “It’s okay. Please come in.”',
        words: [
          { ko: '고개', en: 'head', romanization: 'gogae' },
          { ko: '끄덕이다', en: 'to nod', romanization: 'kkeudeogida' },
          { ko: '괜찮다', en: 'to be okay', romanization: 'gwaenchanta' },
          { ko: '들어오다', en: 'to come in', romanization: 'deureooda' },
        ],
      },
    ],
  },
  {
    id: 'lost-puppy',
    titleKo: '길 잃은 강아지',
    titleEn: 'The Lost Puppy',
    summary: 'Two children find a scared puppy and reunite it with its owner.',
    level: 'A1',
    minutes: 3,
    theme: 'Daily life',
    cover: 'story-art/lost-puppy-cover.jpg',
    questions: [
      {
        question: 'Where do the children find the puppy?',
        options: ['In the park', 'At the beach', 'Inside a shop'],
        answerIndex: 0,
      },
      {
        question: 'What is on the puppy\'s collar?',
        options: ['A phone number', 'A school name', 'A toy tag'],
        answerIndex: 0,
      },
      {
        question: 'How does the owner feel when they meet?',
        options: ['Angry', 'Relieved and happy', 'Surprised and scared'],
        answerIndex: 1,
      },
    ],
    paragraphs: [
      {
        ko: '도윤과 소희는 공원에서 놀고 있었습니다. 작은 강아지가 나왔습니다.',
        en: 'Doyun and Sohee were playing in the park. A small puppy came out.',
        words: [
          { ko: '공원', en: 'park', romanization: 'gongwon' },
          { ko: '놀다', en: 'to play', romanization: 'nolda' },
          { ko: '작다', en: 'to be small', romanization: 'jakda' },
          { ko: '강아지', en: 'puppy / dog', romanization: 'gangaji' },
        ],
      },
      {
        ko: '강아지는 무서워 보였습니다. 목에 빨간 목걸이가 있었습니다.',
        en: 'The puppy looked scared. It had a red collar around its neck.',
        words: [
          { ko: '무섭다', en: 'to be scary / afraid', romanization: 'museopda' },
          { ko: '목', en: 'neck', romanization: 'mok' },
          { ko: '빨갛다', en: 'to be red', romanization: 'ppalgata' },
          { ko: '목걸이', en: 'collar / necklace', romanization: 'mokgeori' },
        ],
      },
      {
        ko: '목걸이에 전화번호가 있었습니다. 도윤이가 전화를 걸었습니다.',
        en: 'There was a phone number on the collar. Doyun made a call.',
        words: [
          { ko: '전화번호', en: 'phone number', romanization: 'jeonhwabeonho' },
          { ko: '전화', en: 'phone / call', romanization: 'jeonhwa' },
          { ko: '걸다', en: 'to make (a call)', romanization: 'geolda' },
        ],
      },
      {
        ko: '잠시 후 아주머니가 달려왔습니다. “몽이!” 하고 큰 소리로 불렀습니다.',
        en: 'A moment later, a woman ran over. “Mongi!” she called loudly.',
        words: [
          { ko: '잠시', en: 'a moment', romanization: 'jamsi' },
          { ko: '달려오다', en: 'to run over', romanization: 'dallyeooda' },
          { ko: '부르다', en: 'to call out', romanization: 'bureuda' },
        ],
      },
      {
        ko: '강아지는 꼬리를 흔들었습니다. 아주머니는 고맙다고 말했습니다.',
        en: 'The puppy wagged its tail. The woman said thank you.',
        words: [
          { ko: '꼬리', en: 'tail', romanization: 'kkori' },
          { ko: '흔들다', en: 'to wag / shake', romanization: 'heundeulda' },
          { ko: '고맙다', en: 'to be thankful', romanization: 'gomapda' },
        ],
      },
    ],
  },
  {
    id: 'birthday-party',
    titleKo: '생일 파티',
    titleEn: 'The Birthday Party',
    summary: 'Friends surprise their classmate with cake and a song.',
    level: 'A1',
    minutes: 3,
    theme: 'Daily life',
    cover: 'story-art/birthday-party-cover.jpg',
    questions: [
      {
        question: 'Whose birthday is it?',
        options: ['Minho\'s', 'Sora\'s', 'The teacher\'s'],
        answerIndex: 0,
      },
      {
        question: 'Where do they have the party?',
        options: [
          'At a café near school',
          'At the swimming pool',
          'On a bus',
        ],
        answerIndex: 0,
      },
      {
        question: 'What do the friends sing?',
        options: [
          'A birthday song',
          'A school anthem',
          'A folk song',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '오늘은 민호의 생일입니다. 민호는 학교 끝나고 카페에 갔습니다.',
        en: 'Today is Minho’s birthday. After school, Minho went to a café.',
        words: [
          { ko: '오늘', en: 'today', romanization: 'oneul' },
          { ko: '생일', en: 'birthday', romanization: 'saengil' },
          { ko: '끝나다', en: 'to end / finish', romanization: 'kkeunnada' },
          { ko: '카페', en: 'café', romanization: 'kape' },
        ],
      },
      {
        ko: '카페 문을 열었습니다. 친구들이 숨어 있었습니다.',
        en: 'He opened the café door. His friends were hiding.',
        words: [
          { ko: '문', en: 'door', romanization: 'mun' },
          { ko: '열다', en: 'to open', romanization: 'yeolda' },
          { ko: '숨다', en: 'to hide', romanization: 'sumda' },
        ],
      },
      {
        ko: '친구들이 나와 말했습니다. “생일 축하해!” 테이블에 케이크가 있었습니다.',
        en: 'His friends came out and said, “Happy birthday!” There was a cake on the table.',
        words: [
          { ko: '나오다', en: 'to come out', romanization: 'naoda' },
          { ko: '축하하다', en: 'to congratulate', romanization: 'chukahada' },
          { ko: '테이블', en: 'table', romanization: 'teibeul' },
          { ko: '케이크', en: 'cake', romanization: 'keikeu' },
        ],
      },
      {
        ko: '민호는 깜짝 놀랐습니다. 그리고 크게 웃었습니다.',
        en: 'Minho was very surprised. Then he laughed loudly.',
        words: [
          { ko: '깜짝', en: 'surprise (suddenly)', romanization: 'kkamjjak' },
          { ko: '놀라다', en: 'to be surprised', romanization: 'nollada' },
          { ko: '크게', en: 'loudly / greatly', romanization: 'keuge' },
          { ko: '웃다', en: 'to laugh / smile', romanization: 'utda' },
        ],
      },
      {
        ko: '모두 생일 노래를 불렀습니다. 민호는 행복한 하루였다고 말했습니다.',
        en: 'Everyone sang the birthday song. Minho said it was a happy day.',
        words: [
          { ko: '노래', en: 'song', romanization: 'norae' },
          { ko: '부르다', en: 'to sing / call', romanization: 'bureuda' },
          { ko: '행복하다', en: 'to be happy', romanization: 'haengbokhada' },
          { ko: '하루', en: 'day', romanization: 'haru' },
        ],
      },
    ],
  },
  {
    id: 'karaoke-night',
    titleKo: '노래방',
    titleEn: 'Karaoke Night',
    summary: 'After finals, friends blow off steam at the neighborhood noraebang.',
    level: 'A2',
    minutes: 4,
    theme: 'Daily life',
    cover: 'story-art/karaoke-night-cover.jpg',
    questions: [
      {
        question: 'Why do the friends go to noraebang?',
        options: [
          'Their exams just ended',
          'They are celebrating a wedding',
          'They missed the last bus home',
        ],
        answerIndex: 0,
      },
      {
        question: 'What does Jiwon sing first?',
        options: [
          'A slow ballad she loves',
          'A children\'s song',
          'A song in English only',
        ],
        answerIndex: 0,
      },
      {
        question: 'How do they feel when they leave?',
        options: ['Tired and stressed', 'Light and happy', 'Angry at each other'],
        answerIndex: 1,
      },
    ],
    paragraphs: [
      {
        ko: '기말고사가 끝났습니다. 지원, 태민, 하늘이는 시내로 나갔습니다.',
        en: 'Final exams were over. Jiwon, Taemin, and Haneul went downtown.',
        words: [
          { ko: '기말고사', en: 'final exam', romanization: 'gimalgosa' },
          { ko: '끝나다', en: 'to end / finish', romanization: 'kkeunnada' },
          { ko: '시내', en: 'downtown / city center', romanization: 'sinae' },
          { ko: '나가다', en: 'to go out', romanization: 'nagada' },
        ],
      },
      {
        ko: '길에서 큰 노래방 간판을 봤습니다. “여기 가자!” 하고 태민이가 말했습니다.',
        en: 'On the street they saw a big noraebang sign. “Let’s go here!” Taemin said.',
        words: [
          { ko: '길', en: 'street / road', romanization: 'gil' },
          { ko: '노래방', en: 'karaoke room', romanization: 'noraebang' },
          { ko: '간판', en: 'signboard', romanization: 'ganpan' },
        ],
      },
      {
        ko: '방 안은 조금 어두웠지만 마이크가 반짝였습니다. 지원이가 먼저 좋아하는 발라드를 불렀습니다.',
        en: 'The room was a little dark, but the microphones sparkled. Jiwon sang her favorite ballad first.',
        words: [
          { ko: '어둡다', en: 'to be dark', romanization: 'eodupda' },
          { ko: '마이크', en: 'microphone', romanization: 'maikeu' },
          { ko: '발라드', en: 'ballad', romanization: 'balladeu' },
          { ko: '부르다', en: 'to sing / call', romanization: 'bureuda' },
        ],
      },
      {
        ko: '태민은 신나는 노래를 불렀고, 하늘이는 춤을 췄습니다. 모두 웃었습니다.',
        en: 'Taemin sang an upbeat song, and Haneul danced. Everyone laughed.',
        words: [
          { ko: '신나다', en: 'to be excited / fun', romanization: 'sinnada' },
          { ko: '춤', en: 'dance', romanization: 'chum' },
          { ko: '추다', en: 'to dance', romanization: 'chuda' },
        ],
      },
      {
        ko: '한 시간이 빨리 지나갔습니다. 밖으로 나올 때 마음이 가벼웠습니다.',
        en: 'An hour passed quickly. When they stepped outside, they felt light-hearted.',
        words: [
          { ko: '한 시간', en: 'one hour', romanization: 'han sigan' },
          { ko: '빨리', en: 'quickly', romanization: 'ppalli' },
          { ko: '지나가다', en: 'to pass (time)', romanization: 'jinagada' },
          { ko: '가볍다', en: 'to be light (in weight or mood)', romanization: 'gabyeopda' },
        ],
      },
    ],
  },
  {
    id: 'jjimjilbang-day',
    titleKo: '찜질방',
    titleEn: 'A Day at the Jjimjilbang',
    summary: 'A family spends a rainy Sunday at the Korean spa.',
    level: 'A2',
    minutes: 4,
    theme: 'Daily life',
    cover: 'story-art/jjimjilbang-day-cover.jpg',
    questions: [
      {
        question: 'Why does the family go to the jjimjilbang?',
        options: [
          'It is raining and they want to stay warm',
          'They are moving to a new house',
          'Grandma is visiting from abroad',
        ],
        answerIndex: 0,
      },
      {
        question: 'What drink does Eunji try?',
        options: ['Coffee', 'Sikhye (sweet rice drink)', 'Orange juice'],
        answerIndex: 1,
      },
      {
        question: 'What do they do in the salt room?',
        options: [
          'They rest and talk quietly',
          'They swim laps',
          'They cook dinner',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '비 오는 일요일이었습니다. 은지네 가족은 집에만 있기 싫었습니다.',
        en: 'It was a rainy Sunday. Eunji’s family did not want to stay home all day.',
        words: [
          { ko: '비', en: 'rain', romanization: 'bi' },
          { ko: '가족', en: 'family', romanization: 'gajok' },
          { ko: '집', en: 'home', romanization: 'jip' },
          { ko: '싫다', en: 'to dislike', romanization: 'silta' },
        ],
      },
      {
        ko: '아빠가 말했습니다. “찜질방에 가자. 따뜻하고 좋아.”',
        en: 'Father said, “Let’s go to the jjimjilbang. It’s warm and nice.”',
        words: [
          { ko: '아빠', en: 'dad', romanization: 'appa' },
          { ko: '찜질방', en: 'Korean spa / sauna', romanization: 'jjimjilbang' },
          { ko: '따뜻하다', en: 'to be warm', romanization: 'ttatteuthada' },
        ],
      },
      {
        ko: '가족은 온돌방과 소금방을 돌아다녔습니다. 은지는 시원한 식혜를 마셨습니다.',
        en: 'The family walked through the heated floor room and the salt room. Eunji drank cool sikhye.',
        words: [
          { ko: '온돌방', en: 'heated floor room', romanization: 'ondolbang' },
          { ko: '소금방', en: 'salt room', romanization: 'sogeumbang' },
          { ko: '돌아다니다', en: 'to walk around', romanization: 'doradanida' },
          { ko: '식혜', en: 'sweet rice drink', romanization: 'sikhye' },
        ],
      },
      {
        ko: '소금방에서 엄마와 조용히 이야기했습니다. 몸이 편안해졌습니다.',
        en: 'In the salt room, she talked quietly with her mother. Her body felt relaxed.',
        words: [
          { ko: '엄마', en: 'mom', romanization: 'eomma' },
          { ko: '조용히', en: 'quietly', romanization: 'joyonghi' },
          { ko: '이야기하다', en: 'to talk / tell a story', romanization: 'iyagihada' },
          { ko: '편안하다', en: 'to be comfortable / relaxed', romanization: 'pyeonanhada' },
        ],
      },
      {
        ko: '저녁에 집으로 돌아왔습니다. 은지는 “다음에 또 오고 싶어요” 하고 말했습니다.',
        en: 'In the evening they came home. Eunji said, “I want to come again next time.”',
        words: [
          { ko: '저녁', en: 'evening', romanization: 'jeonyeok' },
          { ko: '돌아오다', en: 'to return', romanization: 'doraoda' },
          { ko: '다음', en: 'next', romanization: 'daeum' },
        ],
      },
    ],
  },
  {
    id: 'grandmas-country-house',
    titleKo: '시골 할머니 댁',
    titleEn: 'Grandma\'s House in the Country',
    summary: 'A city child visits grandma and picks ripe persimmons.',
    level: 'A2',
    minutes: 4,
    theme: 'Daily life',
    cover: 'story-art/grandmas-country-house-cover.jpg',
    questions: [
      {
        question: 'Where does grandma live?',
        options: [
          'In a small countryside village',
          'In a tall city apartment',
          'Near the airport',
        ],
        answerIndex: 0,
      },
      {
        question: 'What fruit do they pick together?',
        options: ['Apples', 'Persimmons', 'Strawberries'],
        answerIndex: 1,
      },
      {
        question: 'What does grandma cook for dinner?',
        options: [
          'Doenjang jjigae with rice',
          'Pizza and pasta',
          'Sandwiches only',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '추석 연휴에 현우는 할머니 댁에 갔습니다. 마을은 조용하고 공기가 맑았습니다.',
        en: 'During the Chuseok holiday, Hyunwoo went to grandma’s house. The village was quiet and the air was clear.',
        words: [
          { ko: '추석', en: 'Chuseok (harvest festival)', romanization: 'chuseok' },
          { ko: '연휴', en: 'holiday / long weekend', romanization: 'yeonhyu' },
          { ko: '할머니', en: 'grandmother', romanization: 'halmeoni' },
          { ko: '마을', en: 'village', romanization: 'maeul' },
          { ko: '맑다', en: 'to be clear (air/sky)', romanization: 'makda' },
        ],
      },
      {
        ko: '뜰에는 감나무가 있었습니다. 주황색 감이 많이 열려 있었습니다.',
        en: 'There was a persimmon tree in the yard. Many orange persimmons had ripened.',
        words: [
          { ko: '뜰', en: 'yard', romanization: 'tteul' },
          { ko: '감나무', en: 'persimmon tree', romanization: 'gamnamu' },
          { ko: '주황색', en: 'orange (color)', romanization: 'juhwangsaek' },
          { ko: '열리다', en: 'to ripen / open', romanization: 'yeollida' },
        ],
      },
      {
        ko: '할머니는 사다리를 가져왔습니다. 현우는 조심해서 감을 따 주었습니다.',
        en: 'Grandma brought a ladder. Hyunwoo carefully picked the persimmons for her.',
        words: [
          { ko: '사다리', en: 'ladder', romanization: 'sadari' },
          { ko: '가져오다', en: 'to bring', romanization: 'gajyeooda' },
          { ko: '조심하다', en: 'to be careful', romanization: 'josimhada' },
          { ko: '따다', en: 'to pick (fruit)', romanization: 'ttada' },
        ],
      },
      {
        ko: '저녁에는 된장찌개와 밥을 먹었습니다. 현우는 집밥이 정말 맛있다고 했습니다.',
        en: 'For dinner they ate doenjang jjigae and rice. Hyunwoo said home cooking was really delicious.',
        words: [
          { ko: '된장찌개', en: 'soybean paste stew', romanization: 'doenjangjjigae' },
          { ko: '밥', en: 'rice / meal', romanization: 'bap' },
          { ko: '집밥', en: 'home-cooked meal', romanization: 'jipbap' },
        ],
      },
      {
        ko: '별이 많은 밤, 할머니는 현우의 이마를 만지며 “잘 왔다”고 말했습니다.',
        en: 'On a starry night, grandma touched Hyunwoo’s forehead and said, “Welcome.”',
        words: [
          { ko: '별', en: 'star', romanization: 'byeol' },
          { ko: '이마', en: 'forehead', romanization: 'ima' },
          { ko: '만지다', en: 'to touch', romanization: 'manjida' },
        ],
      },
    ],
  },
  {
    id: 'cherry-blossom-festival',
    titleKo: '벚꽃 축제',
    titleEn: 'The Cherry Blossom Festival',
    summary: 'A family strolls under pink blossoms at Yeouido.',
    level: 'A2',
    minutes: 4,
    theme: 'Daily life',
    cover: 'story-art/cherry-blossom-festival-cover.jpg',
    questions: [
      {
        question: 'Where does the family go?',
        options: [
          'Yeouido cherry blossom road',
          'A ski resort',
          'A fish market',
        ],
        answerIndex: 0,
      },
      {
        question: 'What falls on Somin\'s hair?',
        options: ['Raindrops', 'Cherry blossom petals', 'Snowflakes'],
        answerIndex: 1,
      },
      {
        question: 'What does the family do at the end?',
        options: [
          'They take a photo together',
          'They ride a boat',
          'They buy new shoes',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '4월입니다. 소민이네 가족은 여의도 벚꽃길에 갔습니다.',
        en: 'It is April. Somin’s family went to the cherry blossom road in Yeouido.',
        words: [
          { ko: '4월', en: 'April', romanization: 'sawol' },
          { ko: '여의도', en: 'Yeouido', romanization: 'yeouido' },
          { ko: '벚꽃', en: 'cherry blossom', romanization: 'beotkkot' },
          { ko: '벚꽃길', en: 'cherry blossom path', romanization: 'beotkkotgil' },
        ],
      },
      {
        ko: '바람이 불었습니다. 분홍색 꽃잎이 하늘처럼 날렸습니다.',
        en: 'The wind blew. Pink petals flew like they were in the sky.',
        words: [
          { ko: '바람', en: 'wind', romanization: 'baram' },
          { ko: '불다', en: 'to blow (wind)', romanization: 'bulda' },
          { ko: '분홍색', en: 'pink (color)', romanization: 'bunhongsaek' },
          { ko: '꽃잎', en: 'flower petal', romanization: 'kkochip' },
        ],
      },
      {
        ko: '소민의 머리에 꽃잎이 하나 떨어졌습니다. 동생이 웃으며 꽃잎을 주웠습니다.',
        en: 'One petal fell on Somin’s hair. Her younger sibling laughed and picked it up.',
        words: [
          { ko: '머리', en: 'head / hair', romanization: 'meori' },
          { ko: '떨어지다', en: 'to fall down', romanization: 'tteoreojida' },
          { ko: '동생', en: 'younger sibling', romanization: 'dongsaeng' },
          { ko: '주우다', en: 'to pick up', romanization: 'juuda' },
        ],
      },
      {
        ko: '사람이 많았지만 길은 아름다웠습니다. 가족은 천천히 걸었습니다.',
        en: 'There were many people, but the path was beautiful. The family walked slowly.',
        words: [
          { ko: '사람', en: 'person / people', romanization: 'saram' },
          { ko: '아름답다', en: 'to be beautiful', romanization: 'areumdapda' },
          { ko: '천천히', en: 'slowly', romanization: 'cheoncheonhi' },
          { ko: '걷다', en: 'to walk', romanization: 'geotda' },
        ],
      },
      {
        ko: '벚나무 아래에서 사진을 찍었습니다. 소민은 “올해도 와서 좋아요” 하고 말했습니다.',
        en: 'They took a photo under the cherry trees. Somin said, “I’m glad we came again this year.”',
        words: [
          { ko: '벚나무', en: 'cherry tree', romanization: 'beotnamu' },
          { ko: '사진', en: 'photo', romanization: 'sajin' },
          { ko: '찍다', en: 'to take (a photo)', romanization: 'jjikda' },
          { ko: '올해', en: 'this year', romanization: 'olhae' },
        ],
      },
    ],
  },
  {
    id: 'taekwondo-class',
    titleKo: '태권도 수업',
    titleEn: 'Taekwondo Class',
    summary: 'A shy boy finds his voice in his first martial arts lesson.',
    level: 'A2',
    minutes: 4,
    theme: 'Daily life',
    cover: 'story-art/taekwondo-class-cover.jpg',
    questions: [
      {
        question: 'How does Junseo feel at the start of class?',
        options: ['Excited and loud', 'Nervous and quiet', 'Angry and tired'],
        answerIndex: 1,
      },
      {
        question: 'What do the students practice?',
        options: [
          'Basic kicks and bowing',
          'Swimming strokes',
          'Piano scales',
        ],
        answerIndex: 0,
      },
      {
        question: 'What does the teacher say to Junseo?',
        options: [
          '“You did well today.”',
          '“Please leave the class.”',
          '“Come back next year.”',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '준서는 오늘 첫 태권도 수업에 갔습니다. 도장 문 앞에서 손이 떨렸습니다.',
        en: 'Junseo went to his first taekwondo class today. His hands shook in front of the dojang door.',
        words: [
          { ko: '태권도', en: 'taekwondo', romanization: 'taegwondo' },
          { ko: '수업', en: 'class / lesson', romanization: 'sueop' },
          { ko: '도장', en: 'martial arts school', romanization: 'dojang' },
          { ko: '떨리다', en: 'to shake / tremble', romanization: 'tteollida' },
        ],
      },
      {
        ko: '안에서 학생들이 하얀 도복을 입고 있었습니다. 사범님이 큰 소리로 인사했습니다.',
        en: 'Inside, students wore white uniforms. The instructor greeted them loudly.',
        words: [
          { ko: '학생', en: 'student', romanization: 'haksaeng' },
          { ko: '도복', en: 'martial arts uniform', romanization: 'dobok' },
          { ko: '사범님', en: 'instructor (honorific)', romanization: 'sabeomnim' },
          { ko: '인사하다', en: 'to greet', romanization: 'insahada' },
        ],
      },
      {
        ko: '준서도 따라서 인사했습니다. 그다음 기본 발차기를 연습했습니다.',
        en: 'Junseo greeted them too. Next they practiced basic front kicks.',
        words: [
          { ko: '따르다', en: 'to follow', romanization: 'ttareuda' },
          { ko: '기본', en: 'basic / fundamentals', romanization: 'gibon' },
          { ko: '발차기', en: 'kick', romanization: 'balchagi' },
          { ko: '연습하다', en: 'to practice', romanization: 'yeonseuphada' },
        ],
      },
      {
        ko: '처음에는 어색했지만 점점 자신감이 생겼습니다. 땀이 났지만 기분이 좋았습니다.',
        en: 'At first it felt awkward, but he gradually gained confidence. He sweated, but he felt good.',
        words: [
          { ko: '어색하다', en: 'to be awkward', romanization: 'eosaekhada' },
          { ko: '자신감', en: 'confidence', romanization: 'jasingam' },
          { ko: '땀', en: 'sweat', romanization: 'ttam' },
        ],
      },
      {
        ko: '수업이 끝나자 사범님이 말했습니다. “오늘 잘했어요. 다음 주에 또 만나요.”',
        en: 'When class ended, the instructor said, “You did well today. See you again next week.”',
        words: [
          { ko: '끝나다', en: 'to end / finish', romanization: 'kkeunnada' },
          { ko: '다음 주', en: 'next week', romanization: 'daeum ju' },
          { ko: '만나다', en: 'to meet', romanization: 'mannada' },
        ],
      },
    ],
  },
  {
    id: 'tteokbokki-shop',
    titleKo: '분식집에서',
    titleEn: 'At the Snack Shop',
    summary: 'After school, friends share tteokbokki and talk about their day.',
    level: 'A2',
    minutes: 4,
    theme: 'Daily life',
    cover: 'story-art/tteokbokki-shop-cover.jpg',
    questions: [
      {
        question: 'What do the friends order?',
        options: [
          'Tteokbokki and eomuk',
          'Burgers and fries',
          'Salad and soup',
        ],
        answerIndex: 0,
      },
      {
        question: 'Why is Nari happy?',
        options: [
          'She got a good score on her quiz',
          'She bought new shoes',
          'She met a famous singer',
        ],
        answerIndex: 0,
      },
      {
        question: 'What do they promise before leaving?',
        options: [
          'To come back together next week',
          'To stop eating spicy food',
          'To change schools',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '학교가 끝났습니다. 나리, 우진, 세라는 골목 분식집에 들어갔습니다.',
        en: 'School was over. Nari, Woojin, and Sera went into a snack shop in the alley.',
        words: [
          { ko: '학교', en: 'school', romanization: 'hakgyo' },
          { ko: '골목', en: 'alley', romanization: 'golmok' },
          { ko: '분식집', en: 'snack shop / bunsik restaurant', romanization: 'bunsikjip' },
          { ko: '들어가다', en: 'to enter / go in', romanization: 'deureogada' },
        ],
      },
      {
        ko: '뜨거운 떡볶이와 어묵을 주문했습니다. 매운 냄새가 코를 간질였습니다.',
        en: 'They ordered hot tteokbokki and fish cake skewers. The spicy smell tickled their noses.',
        words: [
          { ko: '떡볶이', en: 'spicy rice cakes', romanization: 'tteokbokki' },
          { ko: '어묵', en: 'fish cake', romanization: 'eomuk' },
          { ko: '주문하다', en: 'to order', romanization: 'jumunhada' },
          { ko: '매운', en: 'spicy', romanization: 'maeun' },
        ],
      },
      {
        ko: '나리는 오늘 쪽지 시험 점수가 좋았다고 말했습니다. 친구들이 박수를 쳤습니다.',
        en: 'Nari said she got a good score on today’s quiz. Her friends clapped.',
        words: [
          { ko: '쪽지', en: 'note / slip (of paper)', romanization: 'jjokji' },
          { ko: '시험', en: 'test / exam', romanization: 'siheom' },
          { ko: '점수', en: 'score', romanization: 'jeomsu' },
          { ko: '박수', en: 'applause / clap', romanization: 'baksu' },
        ],
      },
      {
        ko: '셋은 하루 일과를 이야기했습니다. 웃음소리가 가게 안에 울렸습니다.',
        en: 'The three talked about their day. Laughter echoed inside the shop.',
        words: [
          { ko: '하루', en: 'day', romanization: 'haru' },
          { ko: '일과', en: 'daily routine', romanization: 'ilgwa' },
          { ko: '웃음소리', en: 'sound of laughter', romanization: 'useumssori' },
          { ko: '울리다', en: 'to echo / resound', romanization: 'ullida' },
        ],
      },
      {
        ko: '나갈 때 우진이가 말했습니다. “다음 주에도 여기서 만나자.” 모두 고개를 끄덕였습니다.',
        en: 'When they left, Woojin said, “Let’s meet here again next week.” Everyone nodded.',
        words: [
          { ko: '나가다', en: 'to go out / leave', romanization: 'nagada' },
          { ko: '다음 주', en: 'next week', romanization: 'daeum ju' },
          { ko: '만나다', en: 'to meet', romanization: 'mannada' },
          { ko: '끄덕이다', en: 'to nod', romanization: 'kkeudeogida' },
        ],
      },
    ],
  },
  {
    id: 'jeju-trip',
    titleKo: '제주도 여행',
    titleEn: 'A Trip to Jeju Island',
    summary: 'A family explores Hallasan, black pork, and the windy coast.',
    level: 'B1',
    minutes: 5,
    theme: 'Daily life',
    cover: 'story-art/jeju-trip-cover.jpg',
    questions: [
      {
        question: 'Why does the family fly to Jeju?',
        options: [
          'For a short vacation together',
          'To move there permanently',
          'For a school competition only',
        ],
        answerIndex: 0,
      },
      {
        question: 'What do they see on their hike?',
        options: [
          'Crater lake views and clouds below',
          'A desert with camels',
          'A busy shopping mall',
        ],
        answerIndex: 0,
      },
      {
        question: 'What local food do they try on the last evening?',
        options: [
          'Jeju black pork barbecue',
          'Sushi from Tokyo',
          'French pastries',
        ],
        answerIndex: 0,
      },
    ],
    paragraphs: [
      {
        ko: '가을 방학이 되자, 수아네 가족은 제주도로 여행을 가기로 했습니다. 비행기가 제주 하늘 위를 날았습니다.',
        en: 'When autumn break began, Suah’s family decided to travel to Jeju Island. The plane flew over Jeju’s sky.',
        words: [
          { ko: '가을', en: 'autumn', romanization: 'gaeul' },
          { ko: '방학', en: 'school break / vacation', romanization: 'banghak' },
          { ko: '제주도', en: 'Jeju Island', romanization: 'jejudo' },
          { ko: '여행', en: 'trip / travel', romanization: 'yeohaeng' },
          { ko: '비행기', en: 'airplane', romanization: 'bihaenggi' },
        ],
      },
      {
        ko: '첫날 아침에는 한라산 입구에서 등산화를 신었습니다. 아빠가 지도를 펼치며 천천히 걷자고 말했습니다.',
        en: 'On the first morning, they put on hiking boots at the Hallasan trailhead. Father spread out a map and said they should walk slowly.',
        words: [
          { ko: '한라산', en: 'Hallasan (mountain)', romanization: 'hallasan' },
          { ko: '등산화', en: 'hiking boots', romanization: 'deungsanhwa' },
          { ko: '신다', en: 'to put on (shoes)', romanization: 'sinda' },
          { ko: '지도', en: 'map', romanization: 'jido' },
        ],
      },
      {
        ko: '오르는 길에서 수아는 구름이 발아래에 있는 풍경을 보고 숨을 멈췄습니다. 엄마는 그 모습을 사진으로 남겼습니다.',
        en: 'On the way up, Suah held her breath when she saw clouds below her feet. Mother captured the scene in a photo.',
        words: [
          { ko: '오르다', en: 'to climb / go up', romanization: 'oreuda' },
          { ko: '구름', en: 'cloud', romanization: 'gureum' },
          { ko: '풍경', en: 'scenery / view', romanization: 'punggyeong' },
          { ko: '남기다', en: 'to leave / record', romanization: 'namgida' },
        ],
      },
      {
        ko: '둘째 날에는 바람이 강한 해안도로를 렌터카로 달렸습니다. 돌하르방이 햇빛 아래에서 웃고 있는 것 같았습니다.',
        en: 'On the second day they drove a rental car along the windy coastal road. The dol hareubang statues seemed to smile in the sunlight.',
        words: [
          { ko: '바람', en: 'wind', romanization: 'baram' },
          { ko: '해안도로', en: 'coastal road', romanization: 'haeando' },
          { ko: '렌터카', en: 'rental car', romanization: 'renteoka' },
          { ko: '돌하르방', en: 'Jeju stone grandfather statue', romanization: 'dolhareubang' },
        ],
      },
      {
        ko: '마지막 저녁, 가족은 흑돼지 구이를 먹었습니다. 수아는 “우리가 함께 온 여행이 제일 좋았어요” 하고 말했습니다.',
        en: 'On the last evening, the family ate grilled Jeju black pork. Suah said, “This trip we took together was the best.”',
        words: [
          { ko: '마지막', en: 'last / final', romanization: 'majimak' },
          { ko: '흑돼지', en: 'Jeju black pork', romanization: 'heukdwaeji' },
          { ko: '구이', en: 'grilled dish', romanization: 'gui' },
          { ko: '함께', en: 'together', romanization: 'hamkke' },
        ],
      },
      {
        ko: '공항으로 돌아가는 길, 수아는 창밖의 바다를 오래 바라보았습니다. 다음에 또 오고 싶다고 속으로 다짐했습니다.',
        en: 'On the way back to the airport, Suah gazed at the sea outside the window for a long time. She silently promised herself she wanted to come again.',
        words: [
          { ko: '공항', en: 'airport', romanization: 'gonghang' },
          { ko: '창밖', en: 'outside the window', romanization: 'changbak' },
          { ko: '바다', en: 'sea / ocean', romanization: 'bada' },
          { ko: '다짐하다', en: 'to resolve / promise oneself', romanization: 'dajimhada' },
        ],
      },
    ],
  },
]
