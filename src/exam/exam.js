export function firstNonRepeating(str){
  // let str = 'foobar';
  let prev = undefined;
  let uniq = [];
  for(let ch of str){
    if (ch !== prev){
      uniq.push(ch);
    }
    prev = ch;
  }
  return uniq.length !== 0 ? uniq[0] : 'no first unique character';
}

export function factorialOfNumber(num) {

  if (num === 1 || num === 0){
    return 1;
  } else {

    return  num * factorialOfNumber(num -1);
  }
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}