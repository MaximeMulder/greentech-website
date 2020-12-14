function pad(number: number): string {
  return number.toString().padStart(2, '0');
}

function getDate(date: Date): string {
  return pad(date.getDate()) + '/' + pad(date.getMonth() + 1) + '/' + date.getFullYear();
}

function getTime(date: Date): string {
  return pad(date.getHours()) + ':' + pad(date.getMinutes());
}

export { getTime, getDate };
