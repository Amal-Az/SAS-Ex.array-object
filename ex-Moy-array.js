// 1
let numbers= [1, 2, 3, 4, 5]
for (i in numbers) {
    console.log(numbers[i]);
}
//2 
let tableau= [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
function estPair(n){
    return n%2==0;
} 
let numPair= tableau.filter(estPair)
console.log("les nombres pairs : "+ numPair )
// 3
let a = [1, 2, 3] 
let b = [4, 5, 6]
let c= a.concat(b)
console.log(c)
// 4
let fruits =["apple", "banana", "cherry", "date"]
fruits.splice(1,1)
console.log(fruits)
// 5
let num = [5, 1, 8, 4, 7]
num.sort()
console.log(num)
// 6


