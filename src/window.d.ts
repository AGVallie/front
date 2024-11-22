// src/global.d.ts 또는 src/window.d.ts (파일을 새로 만듭니다)
interface Window {
  SpeechRecognition: typeof SpeechRecognition | undefined;
  webkitSpeechRecognition: typeof SpeechRecognition | undefined;
}
