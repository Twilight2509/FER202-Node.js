const people = [
    {name: 'Jack', age: 20},
    {name: 'Michael', age: 19}, 
    {name: 'John', age: 10}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]

//•	Find the first person off the people array is teenager (age >=10 and age <=20)

const firstPerson = people.find((person)=>person.age >= 10 && person.age <=20)
console.log(`First Person: ${firstPerson.name} - Age: ${firstPerson.age}`);

//•	Find the all person of the people array is teenager (age >=10 and age <=20)
const AllPerson = people.filter((person)=>person.age >= 10 && person.age <=20)
console.log(`All Person: ${AllPerson.map(person => `Name: ${person.name} - Age: ${person.age}\t`)}`);

//•	Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
const CheckPerson = people.every((person)=>person.age >= 10 && person.age <=20)
if(CheckPerson){
    console.log(`Mọi người đều là teenager`);    
} else{
    console.log(false);
}


//•	Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.
const somePerson = people.some(person => person.age >= 10 && person.age<= 20);
console.log(somePerson);
//<----------------------------->//

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };

  //•	Print the name of each company using forEach
  companies.forEach((compani, index) =>{
    console.log(`Name: ${compani.name} - Category: ${compani.category} - start: ${compani.start} - end: ${compani.end}`);
  })

  //•	Print the name of each company that started after 1987
  const companiesFilter = companies
    .filter(company => company.start > 1987)
    console.log("Danh sách các công ty có năm bắt đầu từ 1987");

    companiesFilter.map((compani, index) =>{
        console.log(`Name: ${compani.name} - Category: ${compani.category} - start: ${compani.start} - end: ${compani.end}`);
    })  

    //•	Get only the companies that have category Retail
    const companiesFilterCategory = companies
        .filter(company => company.category=='Retail')
        console.log("Category == Retail");
    companiesFilterCategory.map((compani, index)=>{
        console.log(`Name: ${compani.name} - Category: ${compani.category} - start: ${compani.start} - end: ${compani.end}`);
    })
    //•	Sort the companies based on their end date in ascending order
    const sortCompaniesbyAsc = companies.sort((a,b)=> a.end - b.end)
    console.log("Công ty theo tăng dần theo ngày kết thúc");
    sortCompaniesbyAsc.map((compani, index)=>{
        console.log(`Name: ${compani.name} - Category: ${compani.category} - start: ${compani.start} - end: ${compani.end}`);
    })
    //•	Sort the ages array in descending order
    const arrayDescendingOrder = ages.sort((a,b) => b -a);
    console.log("Lọc độ tuổi dựa theo thứ tự giảm dần");
    console.log(arrayDescendingOrder);
    
    
