var charactersMap = {a: 'o', c: 'd', t: 'g'};

function cypherPhrase(obj, str) {
  let newPhrase = getTransformedArray(str, function(el) {
    for(let s in obj) {
      if (s === el) {
        return obj[s];
      }
    }
    return el;
  })
  return newPhrase.join('');
}

console.log(cypherPhrase(charactersMap, 'kitty cat'));
