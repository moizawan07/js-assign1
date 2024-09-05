
var name=prompt("Enter your name")
var rollNo= prompt("Enter your roll no")
var english = +prompt ("Insert your english marks");
var urdu = +prompt ("Insert your urdu marks");
var math = +prompt ("Insert your math marks");
var chemistry = +prompt("Insert your chemistry marks");
var physics = +prompt("Insert your physics marks");

var calculateMarks = english + urdu + math + chemistry + physics;

var percentage = (calculateMarks*100)/500;
var grade;


if (calculateMarks >=450 && calculateMarks <500){
    alert("Name: "+ name + "\nRoll no: "+ rollNo + "\nMarks " + calculateMarks + "\ngrade A+"+ "\nPercentage " + percentage);
}
else if(calculateMarks >=400 && calculateMarks < 450){
    alert("Name: "+ name + "\nRoll no: "+ rollNo + "\nMarks " + calculateMarks + "\ngrade A"+ "\nPercentage " + percentage);
}
else if(calculateMarks >=350 && calculateMarks < 400){
    alert("Name: "+ name + "\nRoll no: "+ rollNo + "\nMarks " + calculateMarks + "\ngrade B"+ "\nPercentage " + percentage);
}
else if(calculateMarks >=300 && calculateMarks < 350){
    alert("Name: "+ name + "\nRoll no: "+ rollNo + "\nMarks " + calculateMarks + "\ngrade C " + "\nPercentage " + percentage);
}
else if(calculateMarks >=250 && calculateMarks < 300){
    alert("Name: "+ name + "\nRoll no: "+ rollNo + "\nMarks " + calculateMarks + "\ngrade D"+ "\nPercentage " + percentage);
}
else if(calculateMarks >=500){
    alert("Please enter valid marks")
    }
else{
    alert("FAILED")
}

// alert("Name: "+ name + "\nRoll no: "+ rollNo + "\nMarks" + calculateMarks + "\ngrade "+ grade + "\nPercentage" + percentage);