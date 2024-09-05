var firstName = prompt("enter your name");
var rollNo = prompt("enter your roll no");
var english = +prompt("enter your eng marks");
var math = +prompt("enter you math  marks");
var science = +prompt("enter your sci marks");
var physics = +prompt("enter your physics marks");
var chemistry = +prompt("enter your chem marks");

var totalMarks = (english + math + science + physics + chemistry);
var percentage = (totalMarks/500*100)

if (percentage >=80 && percentage <100){
   alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nOBTAINED MARKS " + totalMarks + "\nPERCENTAGE " + percentage + "\nGRADE A+")
}
else if(percentage >=70 &&percentage <80){
    alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nOBTAINED MARKS " + totalMarks + "\nPERCENTAGE " + percentage + "\nGRADE B")
}
else if(percentage>=60 && percentage <70){
    alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nOBTAINED MARKS " + totalMarks + "\nPERCENTAGE " + percentage + "\nGRADE C")
}
else if(percentage>=50 && percentage <60){
   alert("NAME: " + firstName + "\nROLL NO: " + rollNo + "\nOBTAINED MARKS " + totalMarks + "\nPERCENTAGE " + percentage + "\nGRADE D")
}
else if(percentage>100){
    alert("please inter valid numbers")
}
else{
    alert("failed")
}