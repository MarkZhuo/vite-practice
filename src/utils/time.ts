export const getTime = () => {
  const currentHour: number = new Date().getHours();
  let greeting: string = '';
  switch (true) {
    case currentHour >= 6 && currentHour < 9:
      greeting = '早晨';
      break;
    case currentHour >= 9 && currentHour < 12:
      greeting = '上午';
      break;
    case currentHour >= 12 && currentHour < 13:
      greeting = '中午';
      break;
    case currentHour >= 13 && currentHour < 19:
      greeting = '下午';
      break;
    default:
      greeting = '晚上';
      break;
  }
  return greeting;
};
