var english = +prompt ("Insert your english marks");
var urdu = +prompt ("Insert your urdu marks");
var math = +prompt ("Insert your math marks");
var chemistry = +prompt("Insert your chemistry marks");
var physics = +prompt("Insert your physics marks");

var calculateMarks = english + urdu + math + chemistry + physics;

var percentage = (calculateMarks*100)/500;



if (calculateMarks >=450 && calculateMarks <500){
  alert("Marks" + calculateMarks + "\ngrade A+" + "\nPercentage" + percentage)
}
else if(calculateMarks >=400 && calculateMarks < 450){
    alert("Marks" + calculateMarks + "\ngrade A" + "\nPercentage" + percentage) 
}
else if(calculateMarks >=350 && calculateMarks < 400){
    alert("Marks" + calculateMarks + "\ngrade B" + "\nPercentage" + percentage) 
}
else if(calculateMarks >=300 && calculateMarks < 350){
    alert("Marks" + calculateMarks + "\ngrade C" + "\nPercentage" + percentage) 
}
else if(calculateMarks >=250 && calculateMarks < 300){
    alert("Marks" + calculateMarks + "\ngrade D" + "\nPercentage" + percentage) 
}
else{
    alert("FAILED")
}

