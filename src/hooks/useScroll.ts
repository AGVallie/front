import { useEffect, useRef, useState } from "react";

function useScroll() {
  const [scroll, setScroll] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  //스크롤값  업데이트
  const handleScroll = () => {
    if (scrollRef.current) {
      setScroll(scrollRef.current.scrollTop);
    }
  };

  //ref 먹여놓으면 스크롤 이벤트 넣어주기
  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return { scrollRef, scrollToTop, scroll };
}

export default useScroll;
