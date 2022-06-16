function sum(num1, num2) {
  return num1 + num2
}
function call(num1, num2, callback){
  return callback(num1, num2)
}
console.log(call(2,5,sum))
//--------------------------------
function date (callback){
  console.log(new Date);
  setTimeout(() => {
    let date = new Date;
    callback(date)
  }, 4000);
}
function PrintDate(dateNow){
  console.log(dateNow)
}
date(PrintDate)