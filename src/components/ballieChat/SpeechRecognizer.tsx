/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import { VStack } from "../common/Stack";
import BallieIcon from "../icons/BallieIcon";

interface SpeechRecognizerProps {
  onDone: (text: string) => void;
}

function SpeechRecognizer({ onDone }: SpeechRecognizerProps) {
  const [transcript, setTranscript] = useState<string>("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = "ko-KR";
      recognition.interimResults = true;
      recognition.continuous = true;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const currentTranscript = event.results[
          event.resultIndex
        ][0].transcript.replace(/폴리|본리/g, "볼리");
        setTranscript(currentTranscript);
        if (currentTranscript) onDone(currentTranscript);
      };

      recognitionRef.current = recognition;
      recognitionRef.current.start();
      return () => {
        recognition.abort();
        console.log("Speech recognition cleanup");
      };
    } else {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
    }
  }, []);

  return (
    <VStack className="h-full items-center justify-center transition-all bg-gray-100">
      <div className="relative">
        <BallieIcon className="absolute animate-ping" />
        <BallieIcon />
      </div>
      <span className="font-bold text-sm">음성 인식 중 ...</span>
      <span className="text-center">{transcript}</span>
    </VStack>
  );
}
export default SpeechRecognizer;
