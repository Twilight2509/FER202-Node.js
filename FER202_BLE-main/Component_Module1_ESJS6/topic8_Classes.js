//Định nghĩa class trong js
class Rectangle {
    //Khai báo hàm khởi tạo(constructor)
    constructor(w, h) {
        //Định nghĩa các thuộc tính của đối tượng
        this.width = w;
        this.height = h;
    }
    //ĐỊnh nghĩa phương thức(method) tính diện tích HCN
    area(){
        return this.width * this.height;
    }
    toString() {
        return `area = ${this.area()}`;
    }
}

//Kế thừa trong js
class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }
}

//Khởi tạo 2 đối tượng HCN và HV để in ra diện tích của 2 hình
const rect = new Rectangle(20,10);
const square = new Square(15)


console.log(`Rectangle: ${rect} - Square: ${square}`);

