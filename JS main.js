/**
array
*/
/*
let age1 = 25;
let age2 = 30;
let age3 = 35;
console.log(age1,age2,age3); //25 30 35

let ages = [25, 30, 35];
console.log(ages); //[25, 30, 35]
console.log(ages[1]); //25 30 35

//แทนที่ค่าในarray
ages = [40, 45, 50];
console.log(ages); //[40, 45, 50]

//ต่อarray
ages.push(55);
console.log(ages); //[40, 45, 50, 55]

//ความยาวของarray
console.log(ages.length); //4

//ลบค่าสมาชิกตัวสุดท้ายarray
ages.pop();
console.log(ages); //[40, 45, 50]

if(ages.includes(45)){ //true
    console.log("พบ 45 ในอาเรย์"); //พบ 45 ในอาเรย์ 
    }

let numbers = [90,60,80,40,50];
numbers.sort();
console.log(numbers); //[40, 50, 60, 80, 90]

let names = ["John","Jane","Doe"];
names.push("Smith");
console.log(names);
console.log(names.length);

for (let i = 0; i <= names.length; i++) {
    console.log(names[i]);
}
*/

/**
 *object
 */
/*
let student = {

    age : 30,
    names : "John",
    Grade : "A"
}{
    age : 20,
    names : "Liam",
    Grade : "B"
}

for (let i=0; i < student.lengeth; i++){
    console.log("student", + (i+1) + ":");
    console.log("name:", student.names[i]);
    console.log("age:", student.age[i]);
    console.log("Grade:", student.Grade[i]);
}
student.push({
    age: 21,
    names: "Olivia",
    Grade: "A"
})


console.log(student);
console.log(student.names);
*/

/**
 * function
 */
/*
//ประกาศฟังก์ชัน
function calculate_grade(score){
    if (score >= 90){
        grade = 'A';
    } else if (score >= 80){
        grade = 'B';
    } else if (score >= 70){
        grade = 'C';
    } else if (score >= 60){    
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade;
}
//เรียกใช้ฟังก์ชัน
let student_score =85;
let sstudent_grade = calculate_grade(student_score);
console.log("Student's grade is: "+ student_grade);

let score = [10,20,30,40,50];
for (let i=0; i < score.length; i++){
    console.log(`Score at index ${i} is: ${score[i]}`);
}
/**
 array
 */
/*
score = score.map((s) => {
    return s *2
})

score.forEach((s) => {
    console.log('new score',s)
})
*/
/*
let score = [10,20,30,40,50];
let newscore = []
/*
for (let index = 0; index <score.length; index++){
    console.log('score', score[index])
    if(score[indexx] >=30){
        newscore.push(score[index])
    }
}
console.log('newscore : ',newscore)
newscore.forEach((ns)=>{
    console.log('new score : ',ns)
})
*/
/*
for (let index = 0; index <score.length; index++){
    console.log('score', score[index])
}
let newScore = score.filter((s) => {
    return s >=30
})
*/

/**
 object = function
 */
/*
 let students = 
    {
        name : 'aa',
        score : '85',
        grade : 'a',
    },
    {
        name : 'bb',
        score : '60',
        grade : 'b',
    }

 console.log('student : ',students[0])

 let student = students.find((s) => {
    if(s.name == 'bb'){
        return true
    }
    })
*/



