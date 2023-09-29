function getgrade(){

var marks_till_date = "0";
var exams = document.getElementById("sel").value;
var e = parseInt(exams);


var grade,iat1,iat2;

 grade = document.getElementById("id-1").value;
 iat1 = document.getElementById("m-1").value;
 iat2 = document.getElementById("m-2").value;
document.getElementById("o-1").innerHTML = till_date(e,iat1,iat2,grade);

 grade = document.getElementById("id-2").value;
 iat1 = document.getElementById("m-3").value;
 iat2 = document.getElementById("m-4").value;
document.getElementById("o-2").innerHTML = till_date(e,iat1,iat2,grade);

 grade = document.getElementById("id-3").value;
 iat1 = document.getElementById("m-5").value;
 iat2 = document.getElementById("m-6").value;
document.getElementById("o-3").innerHTML = till_date(e,iat1,iat2,grade);

 grade = document.getElementById("id-4").value;
 iat1 = document.getElementById("m-7").value;
 iat2 = document.getElementById("m-8").value;
document.getElementById("o-4").innerHTML = till_date(e,iat1,iat2,grade);

 grade = document.getElementById("id-5").value;
 iat1 = document.getElementById("m-9").value;
 iat2 = document.getElementById("m-10").value;
document.getElementById("o-5").innerHTML = till_date(e,iat1,iat2,grade);

 grade = document.getElementById("id-6").value;
 iat1 = document.getElementById("m-11").value;
 iat2 = document.getElementById("m-12").value;
document.getElementById("o-6").innerHTML = till_date(e,iat1,iat2,grade);


function till_date(e,iat1,iat2,grade)
{
    var y;
    var j=2;
    console.log(iat1);
    console.log(iat2);
    var marks_till_date =  parseInt(iat1) + parseInt(iat2);
    if(e == "2"){
        console.log(marks_till_date);
    }
    else if(e == "1"){
          marks_till_date =  parseInt(iat1);
          console.log(marks_till_date);   
    }
    marks_till_date = marks_till_date / j;
if(grade == 'O')
{
    y =  80 - parseInt(marks_till_date);
    return ("Marks Needed : "+y);
}
else if(grade == 'A')
{
    y = 70 - parseInt(marks_till_date);
    return ("Marks Needed : "+y);
}
else if(grade == 'B')
{
    y = 60 - parseInt(marks_till_date);
    return ("Marks Needed : "+y);
}
else if(grade == 'C')
{
    y = 50 - parseInt(marks_till_date);
    return ("Marks Needed : "+y);
}
else if(grade == 'D')
{
    y = 40 - parseInt(marks_till_date);
    return ("Marks Needed : "+y);
}
else{
    y = 0;
    return ("Marks Needed : "+y);
}


}

}