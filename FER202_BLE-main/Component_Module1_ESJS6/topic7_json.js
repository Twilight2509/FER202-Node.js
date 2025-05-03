const data = [];

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(result =>{
    const {user} = result;
    for(const {id, firstName, age} of user){
        console.log(`id: ${id}\t firstName: ${firstName}`);
    }
})
.catch(err => console.error(err.message));