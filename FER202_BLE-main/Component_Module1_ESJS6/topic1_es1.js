//hàm mũi tên với nhiều tham số

let print = (name, age)=>{
    console.log(`name: ${name}, Age: ${age}`);
}

//gọi hàm
print('Tee','21');

//Hàm mũi tên với 1 tham số
let area = side => side * side //return side * side
//Tính diện tích hình vuông
console.log(`Area of square: ${area(10)}`);

//Hàm mũi tên không có tham số
let display = () => console.log("Hello World");

display()

//Hàm trong một Object Literal
let students = {
    name:"Long",
    age:"20",
    showInfo: function(){
        console.log(`student detail: ${this.name} - ${this.age}`);
    }
}
students.showInfo()

//hàm mũi tên trong hoạt động xử lý bất đồng bộ
function fetchDataFromServer(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let DataResponse = "This data return form DB"
            resolve(DataResponse);

        }, 2000)
    })
}

fetchDataFromServer()
    .then(result=> console.log(result))
    .catch(err=> console.error(`Error: ${err.message}`))
    .finally(()=>console.log("Done"))