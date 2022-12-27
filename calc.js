//to visit content inside result whenever we click on the button
function displayNum(num){
    console.log(result);
    result.value += num
}
function allclear(){
    result.value = ""
}
function evalexp(){
   result.value = eval(result.value)
}
function lastDigit(){
   result.value =  result.value.slica(0,-1)
}