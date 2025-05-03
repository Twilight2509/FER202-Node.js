//Kỹ thuật phân rã mảng
// const collection = ["John", 34, true];

// const [name, age, gender] = collection;

// console.log(`Name: ${name} - Age: ${age} - Gender: ${gender==true?'Male':'Female'}`);

//Ex1:
const data = {
    students: [
        {id: 1, fName: "John", lName: "Hookin", age: 20, gender: true},
        {id: 2, fName: "Hane", lName: "Kodae", age: 20, gender: false},
        {id: 3, fName: "John", lName: "Hkowjssky", age: 20, gender: false},
        {id: 4, fName: "Paolo", lName: "Juyan", age: 20, gender: true}
    ],
    total: 30,
    limit: 10
}

const {students, total, limit} = data

console.log(`Total: ${data.total} students`);
console.log(`Limit: ${data.limit} per/page`);
console.log(`Hiện tại có bao nhiêu sinh viên trong data: `);
console.log(`List of Student: ${data.students.length}`);
students.map((student, index) => {
    console.log(`id: ${student.id} - fullname: ${student.fName} ${student.lName} - Age: ${student.age} - Gender: ${student.gender == true? "Male": "Female"}`);
});





//Kỹ thuật phân rã đối tượng
// const course = {
//     title: "FER202",
//     credit: "3",
//     final:{
//         pe: 4,
//         fe: 4
//     }
// };

// const {title, credit, final} = course;

// console.log(`Mã môn học: ${course.title} - Học phần: ${course.credit} - Yêu cầu PE: ${course.final.pe} - Yêu Cầu FE: ${course.final.fe}`);
