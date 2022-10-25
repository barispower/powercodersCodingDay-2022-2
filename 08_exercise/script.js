let num=1356789;
const reversedNum=parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
console.log(reversedNum);