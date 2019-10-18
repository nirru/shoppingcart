export function add(number) {
  return function (add) {
    return number + add;
  };
}

export const higAdd = (num) => (second) =>{
  return num + second;
};
const myArray = ['Nirmal Kumar','Blue'];

function cutName(name){
  const result = name.split(' ');
  return result;
}
let myInfo = {'fullName':cutName(myArray[0]),
  'favouriteColor':cutName(myArray[1]),
  'github':'null'};