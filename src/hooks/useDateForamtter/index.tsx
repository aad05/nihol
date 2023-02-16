// const dateFormatter = (date: Date | number, lang = navigator.language) => {
//   console.log(date);

//   const timeMs = typeof date === "number" ? date : date.getTime();
//   const deltaSecond = Math.round((timeMs - Date.now()) / 1000);

//   const cutoffs = [
//     60,
//     3600,
//     86400,
//     86400 * 7,
//     86400 * 30,
//     86400 * 365,
//     Infinity,
//   ];
//   const units: Intl.RelativeTimeFormatUnit[] = [
//     "second",
//     "minute",
//     "hour",
//     "day",
//     "week",
//     "month",
//     "year",
//   ];
//   const unitIndex = cutoffs.findIndex(
//     (cutoff) => cutoff > Math.abs(deltaSecond)
//   );

//   const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
//   const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });

//   return rtf.format(Math.floor(deltaSecond / divisor), units[unitIndex]);
// };
const dateFormatter = (date: Date | number) => {
  const timeMs = typeof date === "number" ? date : date.getTime();
  const dateNow = new Date().getTime();

  if (timeMs > dateNow) {
  } else {
  }
};

export default dateFormatter;
