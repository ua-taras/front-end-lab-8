function decypherPhrase(obj, str) {
  for(let s in obj) {
    let k = s;
    s = obj[s];
    obj[s] = k;
  }
  return cypherPhrase(obj, str);
}

console.log(decypherPhrase(charactersMap, 'kiggy dog'));
