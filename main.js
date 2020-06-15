//this code has been contributed to by: Mike Reames, Samantha Taylor, Katrine Jackson, and Joe Langston

const mainElement = document.querySelector('main')
const kata1heading = document.createElement('h1')
mainElement.append(kata1heading)
kata1heading.append('Kata 1:')
let counter1 = 0
  while(counter1 < 20) {
    counter1 +=1
    kata1heading.append( counter1 + ', ')
  }
  
const kata2heading = document.createElement('h1')
mainElement.append(kata2heading)
kata2heading.append('Kata 2:')
 let counter2 = 0
 while (counter2 < 20) {
    counter2 +=2
    kata2heading.append(counter2 + ', ')
 }

  /* Write your KATA 02 code in place of THIS comment. */


/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/
const kata3heading = document.createElement('h1')
mainElement.append(kata3heading)
kata3heading.append('Kata 3:') 
let counter3 = -1
while (counter3 <= 17) {
  console.log(counter3)
  counter3 += 2
  kata3heading.append( counter3 + ', ')

}
  /* Write your KATA 03 code in place of THIS comment. */


/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/
const kata4heading = document.createElement('h1')

mainElement.append(kata4heading)
kata4heading.append('Kata 4:')
let counter4 = 0
while (counter4 <= 95) {
  counter4 += 5
  kata4heading.append( counter4 + ', ')

}
  /* Write your KATA 04 code in place of THIS comment. */


/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/
const kata5heading = document.createElement('h1')

mainElement.append(kata5heading)
kata5heading.append('Kata 5:')
let counter5 = 1
while (counter5 <= 100) {
  let counterSquare = Number.isInteger(Math.sqrt(counter5))
  if (counterSquare) {
    kata5heading.append(counter5 + ', ')
  }
  counter5 += 1

}
  /* Write your KATA 05 code in place of THIS comment. */


/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/
const kata6heading = document.createElement('h1')
mainElement.append(kata6heading)
kata6heading.append('Kata 6:')
  /* Write your KATA 06 code in place of THIS comment. */
let counter6 = 21
while (counter6 >= 1) {
  console.log(counter6)
  counter6 -= 1
  kata6heading.append( counter6 + ', ')

}

/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/
const kata7heading = document.createElement('h1')
mainElement.append(kata7heading)
kata7heading.append('Kata 7:')
 let counter7 = 22
 while (counter7 >= 2) {
   console.log(counter7)
   counter7 -= 2
   kata7heading.append( counter7 + ', ')

 }
  /* Write your KATA 07 code in place of THIS comment. */


/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/
const kata8heading = document.createElement('h1')

mainElement.append(kata8heading)
kata8heading.append('Kata 8:')
let counter8 = 21
while (counter8 >= 3) {
  console.log(counter8)
  counter8 -= 2
  kata8heading.append( counter8 + ', ')

}
  /* Write your KATA 08 code in place of THIS comment. */


/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/
const kata9heading = document.createElement('h1')
mainElement.append(kata9heading)
kata9heading.append('Kata 9:')
let counter9 = 100
while (counter9 >= 5) {
  console.log(counter9)
  counter9 -= 5
  kata9heading.append( counter9 + ', ')

}
  /* Write your KATA 09 code in place of THIS comment. */


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/
const kata10heading = document.createElement('h1')

mainElement.append(kata10heading)
kata10heading.append('Kata 10:')
let counter10 = 100
  while (counter10 >= 1) {
    let isSquare = Number.isInteger(Math.sqrt(counter10));
    if (isSquare) {
        kata10heading.append(counter10 + ', ')
    }
    counter10 -= 1 
  }
  

  /* Write your KATA 10 code in place of THIS comment. */
  const kata11heading = document.createElement('h1')
  mainElement.append(kata11heading)
  kata11heading.append('Kata 11:')
  const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
  kata11heading.append(sampleArray)

  const kata12heading = document.createElement('h1')
  mainElement.append(kata12heading)
  kata12heading.append('Kata 12:')
  
  for (let index = 0; index < sampleArray.length; index +=1) {
    let evenArray = []
    let oddArray = []
    if (sampleArray[index] % 2 == 0) {
      evenArray.push(sampleArray[index])}
    else {
      continue
    }
      kata12heading.append(evenArray + ",")
  }

  const kata13heading = document.createElement('h1')
  mainElement.append(kata13heading)
  kata13heading.append('Kata 13:')
  for (let index = 0; index < sampleArray.length; index +=1) {
    let oddArray = []
    if (sampleArray[index] % 2 == 0) {
        continue}
    else{
      oddArray.push(sampleArray[index])}
      kata13heading.append(oddArray + ",")
  }


  const kata14heading = document.createElement('h1')
  mainElement.append(kata14heading)
  kata14heading.append('Kata 14:')
  for (let index = 0; index < sampleArray.length; index +=1) {
    let squareArray = []
    squareArray = sampleArray[index] * sampleArray[index]
    kata14heading.append(squareArray + ', ')
  }

const kata15heading = document.createElement('h1')
mainElement.append(kata15heading)
kata15heading.append('Kata 15:')
let result = 0;
for (let index = 1; index <= 20; index+= 1) {  
    result += index;
    }
    kata15heading.append(result)

const kata16heading = document.createElement('h1')
mainElement.append(kata16heading)
kata16heading.append('Kata 16: ')
let result2 = 0
for (let index = 0; index < sampleArray.length; index ++) {  
      result2 += sampleArray[index]
} 
    kata16heading.append(result2)

const kata17heading = document.createElement('h1')
mainElement.append(kata17heading)
kata17heading.append('Kata 17: ')


  for(let index = 0; index <sampleArray.length; index += 1 ){
    for(let j = index +1; j<sampleArray.length; j+= 1){
       if(sampleArray[index]>sampleArray[j]){
          temp = sampleArray[index];
          sampleArray[index] = sampleArray[j];
          sampleArray[j] = temp;
  
       }}}
kata17heading.append(sampleArray[0])

const kata18heading = document.createElement('h1')
mainElement.append(kata18heading)
kata18heading.append('Kata 18: ')
 for(let index = 0; index <sampleArray.length; index += 1 ){
    for(let j = index + 1; j<sampleArray.length; j+= 1){
       if(sampleArray[index]<sampleArray[j]){
          temp = sampleArray[index];
          sampleArray[index] = sampleArray[j];
          sampleArray[j] = temp;
  
       }}}
kata18heading.append(sampleArray[0])
