let Years = parseInt(prompt("Enter the number of years: "));
console.log("Years:" + Years);

let Count_the_years_divisible_by_4 = (Years/4);
console.log("Count the years:" + Count_the_years_divisible_by_4);
let Subtract_the_years_divisible_by_100 = (Years/100);
console.log("Subtract the years:" + Subtract_the_years_divisible_by_100);
let Add_the_years_divisible_by_400 = (Years/400);
console.log("Add the years:" + Add_the_years_divisible_by_400);



let Number_of_leap_years = Count_the_years_divisible_by_4 - Subtract_the_years_divisible_by_100 + Add_the_years_divisible_by_400;

console.log("Number of Leap Years in " + Years, "years:" + Number_of_leap_years );
