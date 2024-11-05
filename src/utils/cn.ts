const cn = (...classNames: string[]) => {
  return classNames
    .filter((item) => typeof item === "string")
    .map((className) => className.trim()) // 각 class 이름에서 앞뒤 공백 제거
    .join(" ") // 공백으로 합침
    .replace(/\s+/g, " "); // 연속된 공백을 하나의 공백으로 치환
};

export default cn;
