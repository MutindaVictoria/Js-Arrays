//Given an array of strings, use a function to reverse all the elements in the string in
// ascending order and the specific elements in descending order

function Arrdesce(strArr2){

const descArr2 = [...strArr2].sort((a, b) => (a > b ? -1 : 1));
return descArr2
}
console.log(Arrdesce(['a', 'c', 'z', 'f'])); 

//Given an array of objects, each object representing a person with a name 
//and age property, 
//write a function that returns the sum of all people who are less than 18 years.
function CheckAge(people) {
    const result = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].age >= 18) {
            result.push(people[i].name);
        }
    }
    return result;
}
  
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
console.log(CheckAge(people));


  //Using JS functions and an array of numbers, 
  //return positive if an element within the array is positive,
   //negative if an element is negative, else zero
   function checkelements(num){
    
    if(num > 0){
        console.log("positive");
    }
    else if (num < 0){
            console.log("negative")
        }
        else{
            console.log("zero");
        }
    
   }
   console.log(checkelements(12));
  


   ///Given an array of objects, where each object represents
   // an employee with an id, name, and salary property, write a function that 
   // returns a new array of employee objects sorted by their salary in ascending order.
   function sortEmployees(employees) {
    for (let i = 0; i < employees.length; i++) {
      for (let j = i + 1; j < employees.length; j++) {
        if (employees[i].salary > employees[j].salary) {
          let x = employees[i];
          employees[i] = employees[j];
          employees[j] = x;
        }
      }
    }
    return employees;
  }
  
  const employees = [
    { name: 'John', salary: 100000 },
    { name: 'Jane', salary: 200000 },
    { name: 'Bob', salary: 300000},
    { name: 'Alice', salary: 400000 }
  ];
  console.log(sortEmployees(employees));
  
  
  
  
  
  
  
  