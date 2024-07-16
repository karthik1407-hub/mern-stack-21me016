var disp = document.getElementById("display");
    function appendtodisplay(value){
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
            disp.value = e;
        }
        
    }
function clr()
{
    disp.value = disp.value.slice(0,-1);
}
