var english = +prompt("Insert your english marks");
var urdu = +prompt ("Insert your urdu marks");
var math = +prompt ("Insert your math marks");
var chemistry = +prompt("Insert your chemistry marks");
var physics = +prompt("Insert your physics marks");

var calculateMarks = english + urdu + math + chemistry + physics;



if (calculateMarks >= 450 && calculateMarks < 500){
    alert("Congarts! you getting A+ Grade")
}
else if(calculateMarks >= 400 && calculateMarks < 450){
    alert("Congrats! You getting A grade")
}
else if(calculateMarks >= 350 && calculateMarks < 400){
    alert("Congrtas you getting B grade")
}
else if(calculateMarks >= 300 && calculateMarks < 350){
    alert("Congarts you getting C grade")
}
else if(calculateMarks >= 250 && calculateMarks < 300){
    alert("Congrts you D grade")
}
else{
    alert("failed")
}
