function displaydata(e){
    result.value=result.value+e
}
// = function
function out(){
    result.value=eval(result.value)
}
// all clear function
function allclear() {
    result.value=""
    
}
// back space
function back(){
    result.value=result.value.slice(0,-1)
}