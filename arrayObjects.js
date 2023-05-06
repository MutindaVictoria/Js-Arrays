let people=[
    {name:'Ann',age:20,height:'3ft'},
    {name:'henry',age:21,height:'7ft'},
    {name:'Susan',age:23,heighr:'5ft'}
];
let ages=people.map(item=>item.age);
console.log({ages});

let weights=people.map(item=>{
return{
    ...item,
    weight:50,
}
})
console.log({weights});

let changeweight=weights.map(item=>{
    if(item.name==='Ann'){
        item.weight=60;
    }
    return item
});
console.log({changeweight});