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
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];




  //Using JS functions and an array of numbers, 
  //return positive if an element within the array is positive,
   //negative if an element is negative, else zero
   function checkelements(num){
    const num=12
    if(num>0){
        console.log("positive");
    }
    else if (num<0){
            console.log("negative")
        }else{
            console.log("zero");
        }
    
   }
   console.log(12);
  