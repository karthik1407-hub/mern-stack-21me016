var disp = document.getElementById('c');

function appendToDisplay(value){
    disp.value += value;
}
function cleardisplay(){
    disp.value="";
}
function calculate(){
    var equation = disp.value;
    try{
        disp.value = eval(equation);
    }
    catch(e){
        disp.value= e;
    }
}
function clr() 
        { 
            disp.value= disp.value.slice(0,-1);
        } 
function cap(){
        disp.value = disp.value.toUpperCase();
}