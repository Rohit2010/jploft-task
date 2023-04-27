export function isValid(name) {
    let sum = 0;
    const l = name.length;
    for (let i = 1; i < l; i++) {
      sum += i;
      if (sum === l) {
        return true;
      }
      if (sum > l) {
        return false;
      }
    }
    return false;
}
