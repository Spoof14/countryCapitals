export type PhraseEntry = {
  ko: string
  en: string
  romanization?: string
}

export type PhraseCategory = {
  title: string
  description?: string
  phrases: PhraseEntry[]
}

export type ConversationLine = {
  speaker: string
  ko: string
  en: string
  romanization?: string
}

export type Conversation = {
  id: string
  title: string
  description: string
  lines: ConversationLine[]
}

export const commonWordCategories: PhraseCategory[] = [
  {
    title: 'Greetings & basics',
    description: 'Start almost any conversation with these.',
    phrases: [
      { ko: '안녕하세요', en: 'Hello (polite)', romanization: 'annyeonghaseyo' },
      { ko: '안녕', en: 'Hi (casual)', romanization: 'annyeong' },
      { ko: '감사합니다', en: 'Thank you', romanization: 'gamsahamnida' },
      { ko: '죄송합니다', en: 'Sorry / excuse me', romanization: 'joesonghamnida' },
      { ko: '네', en: 'Yes', romanization: 'ne' },
      { ko: '아니요', en: 'No', romanization: 'aniyo' },
      { ko: '괜찮아요', en: "It's okay / I'm fine", romanization: 'gwaenchanayo' },
      { ko: '잠시만요', en: 'Just a moment / excuse me', romanization: 'jamsimanyo' },
    ],
  },
  {
    title: 'Numbers & money',
    description: 'Useful when shopping or checking prices.',
    phrases: [
      { ko: '하나', en: 'One', romanization: 'hana' },
      { ko: '둘', en: 'Two', romanization: 'dul' },
      { ko: '셋', en: 'Three', romanization: 'set' },
      { ko: '열', en: 'Ten', romanization: 'yeol' },
      { ko: '백', en: 'One hundred', romanization: 'baek' },
      { ko: '천', en: 'One thousand', romanization: 'cheon' },
      { ko: '만', en: 'Ten thousand', romanization: 'man' },
      { ko: '얼마예요?', en: 'How much is it?', romanization: 'eolmayeyo?' },
      { ko: '카드로 할게요', en: "I'll pay by card", romanization: 'kadeuro halgeyo' },
      { ko: '현금이에요', en: "It's cash", romanization: 'hyeongeumieyo' },
    ],
  },
  {
    title: 'Food & drink',
    description: 'Common items you will see on menus.',
    phrases: [
      { ko: '물', en: 'Water', romanization: 'mul' },
      { ko: '밥', en: 'Rice / meal', romanization: 'bap' },
      { ko: '김치', en: 'Kimchi', romanization: 'gimchi' },
      { ko: '불고기', en: 'Bulgogi (marinated beef)', romanization: 'bulgogi' },
      { ko: '비빔밥', en: 'Bibimbap (mixed rice bowl)', romanization: 'bibimbap' },
      { ko: '라면', en: 'Instant noodles', romanization: 'ramyeon' },
      { ko: '커피', en: 'Coffee', romanization: 'keopi' },
      { ko: '맥주', en: 'Beer', romanization: 'maekju' },
      { ko: '맵지 않게 해 주세요', en: 'Not spicy, please', romanization: 'maepji anke hae juseyo' },
    ],
  },
  {
    title: 'Getting around',
    description: 'Directions, transport, and places.',
    phrases: [
      { ko: '어디예요?', en: 'Where is it?', romanization: 'eodieyo?' },
      { ko: '화장실', en: 'Restroom', romanization: 'hwajangsil' },
      { ko: '출구', en: 'Exit', romanization: 'chulgu' },
      { ko: '입구', en: 'Entrance', romanization: 'ipgu' },
      { ko: '지하철', en: 'Subway', romanization: 'jihacheol' },
      { ko: '버스', en: 'Bus', romanization: 'beoseu' },
      { ko: '택시', en: 'Taxi', romanization: 'taeksi' },
      { ko: '여기', en: 'Here', romanization: 'yeogi' },
      { ko: '저기', en: 'Over there', romanization: 'jeogi' },
    ],
  },
]

export const usefulPhraseCategories: PhraseCategory[] = [
  {
    title: 'Polite requests',
    phrases: [
      { ko: '주세요', en: 'Please give me / I would like…', romanization: 'juseyo' },
      { ko: '… 있어요?', en: 'Do you have…?', romanization: '… isseoyo?' },
      { ko: '도와주세요', en: 'Please help me', romanization: 'dowajuseyo' },
      { ko: '천천히 말해 주세요', en: 'Please speak slowly', romanization: 'cheoncheonhi malhae juseyo' },
      { ko: '다시 한번 말해 주세요', en: 'Please say that again', romanization: 'dasi hambeon malhae juseyo' },
      { ko: '이거 주세요', en: 'This one, please', romanization: 'igeo juseyo' },
    ],
  },
  {
    title: 'At a shop',
    phrases: [
      { ko: '봉투 필요 없어요', en: "I don't need a bag", romanization: 'bongtu pillyo eopseoyo' },
      { ko: '포장해 주세요', en: 'Please wrap it / take away', romanization: 'pojanghae juseyo' },
      { ko: '영수증 주세요', en: 'Receipt, please', romanization: 'yeongsujeung juseyo' },
      { ko: '할인 있어요?', en: 'Is there a discount?', romanization: 'harin isseoyo?' },
      { ko: '다른 색 있어요?', en: 'Do you have another color?', romanization: 'dareun saek isseoyo?' },
      { ko: '입어 봐도 돼요?', en: 'May I try it on?', romanization: 'ibeo bwado dwaeyo?' },
    ],
  },
  {
    title: 'At a restaurant',
    phrases: [
      { ko: '메뉴판 주세요', en: 'Menu, please', romanization: 'menyupan juseyo' },
      { ko: '추천해 주세요', en: 'What do you recommend?', romanization: 'chucheonhae juseyo' },
      { ko: '물 좀 더 주세요', en: 'More water, please', romanization: 'mul jom deo juseyo' },
      { ko: '계산해 주세요', en: 'Check, please', romanization: 'gyesanhae juseyo' },
      { ko: '맛있어요!', en: "It's delicious!", romanization: 'masisseoyo!' },
      { ko: '배불러요', en: "I'm full", romanization: 'baebullyeoyo' },
    ],
  },
  {
    title: 'Social & small talk',
    phrases: [
      { ko: '처음 뵙겠습니다', en: 'Nice to meet you (formal)', romanization: 'cheoeum boepgesseumnida' },
      { ko: '이름이 뭐예요?', en: "What's your name?", romanization: 'ireumi mwoyeyo?' },
      { ko: '한국어를 배우고 있어요', en: "I'm learning Korean", romanization: 'hangugeoreul baeugo isseoyo' },
      { ko: '정말요?', en: 'Really?', romanization: 'jeongmallyo?' },
      { ko: '재미있어요', en: "It's fun / interesting", romanization: 'jaemiisseoyo' },
      { ko: '사진 찍어도 돼요?', en: 'May I take a photo?', romanization: 'sajin jjigeodo dwaeyo?' },
    ],
  },
]

export const conversations: Conversation[] = [
  {
    id: 'supermarket',
    title: 'At the supermarket',
    description: 'Buying groceries and asking where things are.',
    lines: [
      {
        speaker: 'You',
        ko: '실례합니다. 우유 어디 있어요?',
        en: 'Excuse me. Where is the milk?',
        romanization: 'sillyehamnida. uyu eodi isseoyo?',
      },
      {
        speaker: 'Staff',
        ko: '냉장 코너에 있어요. 저쪽이에요.',
        en: "It's in the refrigerated section. Over there.",
        romanization: 'naengjang koneoe isseoyo. jeojjogieyo.',
      },
      {
        speaker: 'You',
        ko: '감사합니다. 이거 두 개 주세요.',
        en: 'Thank you. Two of these, please.',
        romanization: 'gamsahamnida. igeo du gae juseyo.',
      },
      {
        speaker: 'Cashier',
        ko: '봉투 필요하세요?',
        en: 'Do you need a bag?',
        romanization: 'bongtu pillyohaseyo?',
      },
      {
        speaker: 'You',
        ko: '아니요, 괜찮아요. 카드로 할게요.',
        en: "No, that's fine. I'll pay by card.",
        romanization: 'aniyo, gwaenchanayo. kadeuro halgeyo.',
      },
      {
        speaker: 'Cashier',
        ko: '네, 여기 계산대예요. 감사합니다!',
        en: 'Sure, the register is here. Thank you!',
        romanization: 'ne, yeogi gyesandae-yeyo. gamsahamnida!',
      },
    ],
  },
  {
    id: 'concert',
    title: 'At a concert',
    description: 'Meeting someone new and talking about the show.',
    lines: [
      {
        speaker: 'Stranger',
        ko: '안녕하세요! 혼자 오셨어요?',
        en: 'Hello! Did you come alone?',
        romanization: 'annyeonghaseyo! honja osyeosseoyo?',
      },
      {
        speaker: 'You',
        ko: '네, 친구가 늦어서요. 공연 처음이에요.',
        en: "Yes, my friend is late. It's my first time at this show.",
        romanization: 'ne, chinguga neujeoseoyo. gongyeon cheoeumieyo.',
      },
      {
        speaker: 'Stranger',
        ko: '저도요! 노래 정말 좋지 않아요?',
        en: 'Me too! The songs are really good, right?',
        romanization: 'jeodoyo! norae jeongmal jochi anayo?',
      },
      {
        speaker: 'You',
        ko: '네, 라이브가 더 멋져요. 다음 곡이 뭐예요?',
        en: 'Yes, the live version is even better. What song is next?',
        romanization: 'ne, raibeuga deo meotjyeoyo. daeum gogi mwoyeyo?',
      },
      {
        speaker: 'Stranger',
        ko: '아마 인기곡일 거예요. 같이 즐겨요!',
        en: "Probably a hit. Let's enjoy it together!",
        romanization: 'ama ingigogil geoyeyo. gachi jeulgyeoyo!',
      },
      {
        speaker: 'You',
        ko: '좋아요! 한국어 조금밖에 못 해요.',
        en: 'Sounds good! I only speak a little Korean.',
        romanization: 'joayo! hangugeo jogeumbakke mot haeyo.',
      },
      {
        speaker: 'Stranger',
        ko: '괜찮아요. 천천히 말할게요.',
        en: "That's okay. I'll speak slowly.",
        romanization: 'gwaenchanayo. cheoncheonhi malhalgeyo.',
      },
    ],
  },
  {
    id: 'restaurant',
    title: 'Ordering at a restaurant',
    description: 'Getting a table, ordering food, and paying.',
    lines: [
      {
        speaker: 'You',
        ko: '안녕하세요. 두 명이에요.',
        en: 'Hello. Table for two.',
        romanization: 'annyeonghaseyo. du myeongieyo.',
      },
      {
        speaker: 'Host',
        ko: '네, 이쪽으로 오세요. 메뉴판 여기 있어요.',
        en: 'Sure, this way please. Here is the menu.',
        romanization: 'ne, ijjogeuro oseyo. menyupan yeogi isseoyo.',
      },
      {
        speaker: 'You',
        ko: '비빔밥 하나랑 불고기 하나 주세요. 맵지 않게 해 주세요.',
        en: 'One bibimbap and one bulgogi, please. Not spicy.',
        romanization: 'bibimbap hanarang bulgogi hana juseyo. maepji anke hae juseyo.',
      },
      {
        speaker: 'Server',
        ko: '네, 알겠습니다. 음료는요?',
        en: 'Got it. Anything to drink?',
        romanization: 'ne, algesseumnida. eumnyoneunyo?',
      },
      {
        speaker: 'You',
        ko: '물 두 잔 주세요.',
        en: 'Two glasses of water, please.',
        romanization: 'mul du jan juseyo.',
      },
      {
        speaker: 'Server',
        ko: '맛있게 드세요!',
        en: 'Enjoy your meal!',
        romanization: 'masitge deuseyo!',
      },
      {
        speaker: 'You',
        ko: '정말 맛있어요! 계산해 주세요.',
        en: "It's really delicious! Check, please.",
        romanization: 'jeongmal masisseoyo! gyesanhae juseyo.',
      },
      {
        speaker: 'Server',
        ko: '감사합니다. 또 오세요!',
        en: 'Thank you. Please come again!',
        romanization: 'gamsahamnida. tto oseyo!',
      },
    ],
  },
]
