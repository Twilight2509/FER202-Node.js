//Định nghĩa 1 hàm với tham số rest

const sum = (...number) =>{
    let total = 0;

    for (const element of number) {
        total += element;
    }
    console.log(`Sum number = ${total}`);
}

//Gọi hàm tham số rest tính toongt các phần tử
sum(1,2)

sum(1,2,3,4,6)

//Nhập từng tham số vào hàm
const price = [10, 2.5, 30]
sum(price)