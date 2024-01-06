function checkGrade() {
    const fullName = document.getElementById('fullName').value;
    const grade = parseInt(document.getElementById('courseGrade').value);

    alert(`Hello, ${fullName}!`);

    if (grade >= 50) {
        alert("Congratulations! You have passed the course.");
        let letterGrade;
        if (grade >= 90) letterGrade = 'A';
        else if (grade >= 80) letterGrade = 'B';
        else if (grade >= 70) letterGrade = 'C';
        else if (grade >= 60) letterGrade = 'D';
        else letterGrade = 'E';
        alert(`Your letter grade is: ${letterGrade}`);
    } else {
        alert("Unfortunately, you have failed the course.");
    }
}