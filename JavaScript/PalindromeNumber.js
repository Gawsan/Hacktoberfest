var isPalindrome = function (x) {

    if (x < 0) {
      return false;
    }
  
    if (x < 10) {
      return true;
    }
  
    if (x % 10 === 0 && x !== 0) {
      return false;
    }
  
    const str = String(x);
    let i = 0, j = str.length - 1;
  
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
  
      i++;
      j--;
    }
  
    return true;
  };