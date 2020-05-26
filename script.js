//Basic Exercise 1
/*var randomTemp = Math.floor(Math.random() * 31) - 5;
document.write(randomTemp);

if (randomTemp > 11) {
    document.write(" The weather is moderate ");
} else {
    document.write(" The weather is cold ");
}*/


//Basic Exercise 2
//console.log(Math.max(1, 2, 3));
/*
var array1 = [10000, 2, 3, 234];
console.log(Math.max(...array1));
*/

//Basic Exercise 3
/*
var temperature = (Math.random() * 40) - 5
if (temperature > 20) {
    document.write("The weather is hot")

} else if (temperature > 10) {
    document.write("The weather is moderate")

} else {
    document.write("The weather is cold")

}
*/

// Intermidate Ex 1

Students = ["Martin", "Thomas", "Klaus", "Maria", "David", ];

var Martin = 76;
var Thomas = 85;
var Klaus = 65;
var Maria = 93;
var David = 81;

document.write("The average grade of the class is " + '' + (Martin + Thomas + Klaus + Maria + David) / 5)



var student_grades = [
["Martin", 76],
["Thomas", 85],
["Klaus", 65],
["Maria", 93],
["David", 81]
];

console.log(student_grades[1][1]);
for (var i = 0; i < student_grades.length; i++) {
    if (student_grades[i][1]<60) {
        document.write(student_grades[i][0] + "\’s Grade with " + student_grades[i][1] + " Points is: F<br>");
    } else if (student_grades[i][1]<70) {
        document.write(student_grades[i][0] + "\’s Grade with " + student_grades[i][1] + " Points is: D<br>");
    } else if (student_grades[i][1]<80) {
        document.write(student_grades[i][0] + "\’s Grade with " + student_grades[i][1] + " Points is: C<br>");
    } else if (student_grades[i][1]<90) {
        document.write(student_grades[i][0] + "\’s Grade with " + student_grades[i][1] + " Points is: B<br>");
    } else {
        document.write(student_grades[i][0] + "\’s Grade with " + student_grades[i][1] + " Points is: A<br>");
}
}