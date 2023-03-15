console.log("Hello World!\n==========\n");

// Exercise 1 Section
//console.log("EXERCISE 1:\n==========\n");
//function printOdss(count) {
    //if (count < 1){
       // console.log('Please enter a positive number');
      //  return
    //}
    //for (let i = 1; i <= count; i++) {
        //if (i % 2 !== 0) {
      //      console.log(i)
    //    }
  //  }
//}
//printOdss(50)



// Exercise 2 Section
//console.log("EXERCISE 2:\n==========\n");

//function checkAge(userName, age) {
  //  var aboveSixteen = `Congrats ${userName}, you can drive!`
    //var belowSixteen = `Sorry ${userName}, but you need to wait until your 16.`
    //if (age < 16) {
      //  console.log(belowSixteen);
    //}
    //else {
      //  console.log(aboveSixteen);
   // }
//}

//checkAge("Bobby", 15);
//checkAge("Maurice", 23);

// Exercise 3 Section

function checkPoint(x, y) {
    if (x === 0 && y === 0){
        console.log(`this is the origin`)
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y axis`)
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x axis`)
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in quadrant 1`)
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in quadrant 2`)
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in quadrant 3`)
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in quadrant 4`)
    }
}

checkPoint(0, 2)
checkPoint(1,2)
checkPoint(-6,18)

//Exercise 4 Section

function checkTriangle(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      return "Invalid triangle";
    } else if (side1 === side2 && side1 === side3) {
      return "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Isosceles triangle";
    } else {
      return "Scalene triangle";
    }
  }

  console.log(checkTriangle (1,3,3))
  console.log(checkTriangle(1,1,2))
  console.log(checkTriangle(1,1,1))

// Exercise 5 Section BONUS

