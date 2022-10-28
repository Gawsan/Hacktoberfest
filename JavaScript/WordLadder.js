var ladderLength = function(beginWord, endWord, wordList) {
    var wordSet = new Set(wordList);
    var queue = [];
    var step = 0;
    var word = '';
    var len = 0;
    var i = 0;
  
    pushNextWord(beginWord, queue, wordSet);
    step = 2;
  
    while (len = queue.length) {
      for (i = 0; i < len; i++) {
        word = queue.shift();
        if (word === endWord) return step;
        pushNextWord(word, queue, wordSet);
      }
      step++;
    }
  
    return 0;
  };
  
  var pushNextWord = function (word, queue, wordSet) {
    var start = 'a'.charCodeAt(0);
    var len = word.length;
    var str = '';
  
    wordSet.delete(word);
  
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < 26; j++) {
        str = word.substr(0, i) + String.fromCharCode(j + start) + word.substr(i + 1);
  
        if (wordSet.has(str)) {
          queue.push(str);
          wordSet.delete(str);
        }
      }
    }
  };