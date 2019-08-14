// ### Problem 1:
// Put the start of your program in a main function. Ask the user to enter a number to print.
//     Create a switch case that prints 1 if you enter 1, 2 if you enter 2, 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.
//
//     ### Problem 2:
//     Put the start of your program in a main function. Ask the user to enter a 3 digit binary number.
//         Create a switch case that prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11, 4 if you enter 100, and 5 if you enter 101.
//
//         ### Problem 3:
//         Put the start of your program in a main function. Create an attendance array.
//             Ask the user if a teacher, student, or parent is checking in.
//         Use a switch statement to add the teacher/student/parent to the attendance array, then log the option they chose. Repeat this five times.
//
//         <strong>Challenge</strong>: Do the above program until the user enter's 'q'. Also, print and
//             add to the array via a function call to the appropriate teacher/student/parent function.

//Problem 1
let numberInput= prompt("Enter a number 1-5 to Print");
switch (numberInput)
{
    case "1":
        alert("1");
        break;
    case "2":
        alert("2");
        break;
    case "3":
        alert("3");
    case "4":
        alert("4");
    case "5":
        alert("5")
}

//Problem 2
let threeDigitInput= prompt("Enter 3 digit binary number:");
switch (threeDigitInput)
{
    case "1":
        alert("1");
        break;
    case "2":
        alert("10");
        break;
    case "3":
        alert("11");
        break;
    case "4":
        alert("100");
        break;
    case "5":
        alert("101");
        break;
}