let salary = 1000;
let years = 30;
 let sum = 0;

for ( let i = 0; i<years; i++){

    salary = salary*1.1; 
    sum += salary;
}

console.log( "after 1 year: ->", salary );
console.log( "after 30 years: ->" ,sum);

