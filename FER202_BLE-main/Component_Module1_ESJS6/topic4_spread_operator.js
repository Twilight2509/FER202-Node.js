//toán tử rải(spread)

const number1 = [1,2,3, 4.6];

const number2 = [5,6,7,9, "Hello", true];

//Sử dụng toán tử rải(spread) để gộp 2 mảng trên để tạo thành 1 mảng mới
const number3 = [...number1, ...number2];

console.log(number3);

//Kết hợp hàm có tham số rest và truyền 1 mảng sử dụng toán tử spread
const sum = (...number) =>{
    let total = 0;

    for (const element of number) {
        total += element;
    }
    console.log(`Sum number = ${total}`);
}

sum(...number2)


