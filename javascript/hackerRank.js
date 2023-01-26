// const solveMeFirst =(a,b) => {
//     let c=0;
//     if(a < 1000 & a >0 && b < 1000 & b >0)  {
//         c=a+b;
//     } else {
//         return error
//     }
//     return c
// }

//////////////////////////////////


// const gradingStudents = (grades)=> {
//     var grade = parseInt(readLine());
//     var n = parseInt(readLine());
//     for( let grade of grades ) {
//         let incrementedGrade = grade;
//         if (grade >0 & grade < 100 ) {
//             if(grade<38) {
//                 console.log(grade);
//             } else {
//                 while(incrementedGrade % 5 != 0){
//                     incrementedGrade++
//                 }
//                 if(incrementedGrade - grade < 3 ) {
//                     console.log(incrementedGrade);
//                 }
//                 else
//                     {
//                         console.log(grade);
//                     }
//             }
//         }
//     }
// }

// gradingStudents([46,79,88,87])

///////////////////////////////////////////

// function sockMerchant(n, ar) {

//     const newArr = [... new Set(ar)]
//     let count = 0
//     newArr.forEach(value => {
//         const filteredValues = ar.filter(element => element == value)
//         const pairsNumber = Math.floor(filteredValues.length/2)
//         count += pairsNumber
//     })
//     return count
// }

///////////////////////

// function countingValleys(steps, path) {
//     let newPath = path.split('')
//     let count = 0
//     for(let step=0; step<steps; step++){
//         if(count == 0 && newPath[step].toLowerCase() == 'd'){
//             count -= 1
//             result += 1
//         } else if(newPath[step].toLowerCase() == 'd'){
//             count -= 1
//         } else {
//             count += 1
//         }
//     }
//     return result
// }