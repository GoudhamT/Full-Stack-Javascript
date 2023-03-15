

//Age  - Using If and Else conditions
let age = 66
if ((age>18) && (age<=30))
    {
    console.log("Youths are backbone of country");
    }
else if ((age>30) && (age<=50))
    {
    console.log("your experience is required for modern India");
    }
else if (age>65)
    {
    console.log("Share your knowledge for better future");
    }
    else{
        console.log("Study well")
    }

//Switch to determine experience level
let exp = 6;

switch (Math.round(exp))
{
    case 20:{
        console.log("you are an Director level")
        break;
    }
    case 10:{
        console.log("You will be Mid-level")
        break;
    }
    case 5:{
        console.log("More experience is required")
        break;
    }
    default:{
        console.log("Learn and work more")
    }
}

//Ternary operator
let marks = 30;

(marks > 35) ? console.log("You pass the exam") : console.log("you fail the exam")