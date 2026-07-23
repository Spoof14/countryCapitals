export function createKoreanUtterance(text: string): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'ko-KR'
  utterance.rate = 0.9

  const voices = window.speechSynthesis.getVoices()
  const koreanVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith('ko'))
  if (koreanVoice) utterance.voice = koreanVoice

  return utterance
}

export function speakKorean(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return

  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(createKoreanUtterance(text))
}

export function stopSpeaking() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
}
