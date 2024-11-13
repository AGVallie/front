// timeFormatter.ts

// 시간을 'hh:mm AM/PM' 형식으로 변환하는 함수
function to12HourFormat(date: Date): string {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  // 12시간제 시간으로 변환
  hours = hours % 12;
  hours = hours ? hours : 12; // 0시인 경우 12로 변환

  // 분을 두 자리 숫자로 맞추기
  const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;

  // '12:45 PM' 형식으로 반환
  return `${hours}:${minutesFormatted} ${period}`;
}

export default to12HourFormat;
