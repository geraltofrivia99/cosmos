const monthsShort = [ "Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
  "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec." ];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];
export const IMAGE_URL = 'https://mars-jpl-nasa-gov.s3.amazonaws.com/src/insight/insight_weather_bg.jpg';

export function getParsedDate(date, monthType) {
  const d = new Date(date);
  const earthMonth = monthType === 'short' ?
    monthsShort[d.getUTCMonth()] : months[d.getUTCMonth()];
  const earthDay = d.getUTCDate();
  return earthMonth + ' ' + earthDay;
}

export function scrollToY(y) {
  window.scrollTo({ top: y, behavior: 'smooth' });
}

export function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}