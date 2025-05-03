//Khai báo đối tượng promise để kiểm soát giá trị được sinh ra ngẫu nhiên từ 0 -> 1
const myPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        const number = Math.random()
        if(number>= 0.5)
            resolve(number)
        else
            reject("Lỗi") 
    }, 2000);
});

// myPromise
//     .then(result => console.log(`Sucess ${result}`))
//     .catch(result => console.log("Error"))


//ĐỊnh nghĩa hàm cho chức năng hoặc ứng dụng khác có thể thực thi được đối tượng promise
async function randomNumber() {
    try {
        const result = await myPromise();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

randomNumber()