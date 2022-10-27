var removeDuplicates = function (x) {
    let count = 0;
    
    for (let i = 0; i < x.length; i++) {
        
        if (i < x.length - 1 && x[i] == x[i + 1]) {
            continue;
        }
        
        x[count] = x[i];
        count++;
    }
    return count;
};