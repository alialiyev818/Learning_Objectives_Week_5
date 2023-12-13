
function checkCourseGrade() {

    var fullName = prompt("Please enter your full name:");
    var courseGrade = parseInt(prompt("Please enter your course grade (0-100):"));


    alert("Hello, " + fullName + "!");


    if (courseGrade >= 50) {

        alert("Congratulations, you passed the course!");


        if (courseGrade >= 90) {
            alert("Your letter grade is A.");
        } else if (courseGrade >= 80) {
            alert("Your letter grade is B.");
        } else if (courseGrade >= 70) {
            alert("Your letter grade is C.");
        } else if (courseGrade >= 60) {
            alert("Your letter grade is D.");
        } else {
            alert("Your letter grade is E.");
        }
    } else {

        alert("Sorry, you failed the course.");
    }
}

checkCourseGrade();
