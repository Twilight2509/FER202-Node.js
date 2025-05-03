function example1(){
    let x = 10;

    if(true){
        let y = 20;
        x += 1;
        console.log(`x++ = ${x}`);  
        // console.log(`y = ${y}`);
    }
    console.log(`x = ${x}`);
    // console.log(`y = ${y}`);
}

example1()

//Dùng const thay vì let
function example2(){
    const x = 10;

    if(true){
        const y = 20;
        // x += 1;
        console.log(`x++ = ${x}`);  
        console.log(`y = ${y}`);
    }
    console.log(`x = ${x}`);
    // console.log(`y = ${y}`);
}

example2()