export function user() {
  function chr4() {
    return Math.random().toString(16).slice(-4);
  }
  return 'test' +
    '-' + chr4();
}