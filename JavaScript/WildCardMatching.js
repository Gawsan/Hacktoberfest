
 var isMatch = function(s, p) {
    var dp = Array(p.length + 1).fill(0).map(_ => ({}));
    return test(s, p, 0, 0, dp);
  };
  
  var test = function (s, p, sIndex, pIndex, dp) {
    if (dp[pIndex][sIndex] !== undefined) return dp[pIndex][sIndex];
  
    var sNow = s[sIndex];
    var pNow = p[pIndex];
    var res = false;
  
    if (pNow === undefined) return sNow === undefined;
    if (sNow === undefined) {
      for (var i = pIndex; i < p.length; i++) {
        if (p[i] !== '*') return false;
      }
      return true;
    }
  
    if (sNow === pNow || pNow === '?') {
      res = test(s, p, sIndex + 1, pIndex + 1, dp);
    } else if (pNow === '*') {
      res = test(s, p, sIndex, pIndex + 1, dp) || test(s, p, sIndex + 1, pIndex + 1, dp) || test(s, p, sIndex + 1, pIndex, dp);
    }
  
    dp[pIndex][sIndex] = res;
  
    return res;
  };