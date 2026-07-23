export type Jamo = {
  char: string
  /** Korean letter name, spoken aloud together with the sample. */
  name: string
  roman: string
  /** Sample syllable demonstrating the sound. */
  sample: string
}

export type JamoSection = {
  title: string
  description: string
  jamo: Jamo[]
}

export const hangulSections: JamoSection[] = [
  {
    title: 'Basic consonants',
    description: 'Tap a letter to hear its name and a sample syllable (with ㅏ).',
    jamo: [
      { char: 'ㄱ', name: '기역', roman: 'g/k', sample: '가' },
      { char: 'ㄴ', name: '니은', roman: 'n', sample: '나' },
      { char: 'ㄷ', name: '디귿', roman: 'd/t', sample: '다' },
      { char: 'ㄹ', name: '리을', roman: 'r/l', sample: '라' },
      { char: 'ㅁ', name: '미음', roman: 'm', sample: '마' },
      { char: 'ㅂ', name: '비읍', roman: 'b/p', sample: '바' },
      { char: 'ㅅ', name: '시옷', roman: 's', sample: '사' },
      { char: 'ㅇ', name: '이응', roman: 'ng / silent', sample: '아' },
      { char: 'ㅈ', name: '지읒', roman: 'j', sample: '자' },
      { char: 'ㅊ', name: '치읓', roman: 'ch', sample: '차' },
      { char: 'ㅋ', name: '키읔', roman: 'k', sample: '카' },
      { char: 'ㅌ', name: '티읕', roman: 't', sample: '타' },
      { char: 'ㅍ', name: '피읖', roman: 'p', sample: '파' },
      { char: 'ㅎ', name: '히읗', roman: 'h', sample: '하' },
    ],
  },
  {
    title: 'Tense consonants',
    description: 'Doubled letters, pronounced with more tension and no puff of air.',
    jamo: [
      { char: 'ㄲ', name: '쌍기역', roman: 'kk', sample: '까' },
      { char: 'ㄸ', name: '쌍디귿', roman: 'tt', sample: '따' },
      { char: 'ㅃ', name: '쌍비읍', roman: 'pp', sample: '빠' },
      { char: 'ㅆ', name: '쌍시옷', roman: 'ss', sample: '싸' },
      { char: 'ㅉ', name: '쌍지읒', roman: 'jj', sample: '짜' },
    ],
  },
  {
    title: 'Basic vowels',
    description: 'Shown with the silent placeholder ㅇ in front.',
    jamo: [
      { char: 'ㅏ', name: '아', roman: 'a', sample: '아' },
      { char: 'ㅑ', name: '야', roman: 'ya', sample: '야' },
      { char: 'ㅓ', name: '어', roman: 'eo', sample: '어' },
      { char: 'ㅕ', name: '여', roman: 'yeo', sample: '여' },
      { char: 'ㅗ', name: '오', roman: 'o', sample: '오' },
      { char: 'ㅛ', name: '요', roman: 'yo', sample: '요' },
      { char: 'ㅜ', name: '우', roman: 'u', sample: '우' },
      { char: 'ㅠ', name: '유', roman: 'yu', sample: '유' },
      { char: 'ㅡ', name: '으', roman: 'eu', sample: '으' },
      { char: 'ㅣ', name: '이', roman: 'i', sample: '이' },
    ],
  },
  {
    title: 'Common compound vowels',
    description: 'Combinations you will meet constantly in the stories.',
    jamo: [
      { char: 'ㅐ', name: '애', roman: 'ae', sample: '애' },
      { char: 'ㅔ', name: '에', roman: 'e', sample: '에' },
      { char: 'ㅘ', name: '와', roman: 'wa', sample: '와' },
      { char: 'ㅝ', name: '워', roman: 'wo', sample: '워' },
      { char: 'ㅚ', name: '외', roman: 'oe/we', sample: '외' },
      { char: 'ㅟ', name: '위', roman: 'wi', sample: '위' },
      { char: 'ㅢ', name: '의', roman: 'ui', sample: '의' },
    ],
  },
]
