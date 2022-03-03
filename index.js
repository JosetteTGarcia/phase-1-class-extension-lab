// 1. Define a Polygon class. Polygon will accept an Array of integers as a parameter, 
// which will represent each side of a shape.

class Polygon {
  constructor (array){
    this.array = array
    this.count = this.array.length

  }

  // 2. Use the get keyword to make a getter method 
  // countSides that counts the number of sides (each index in the array).
  get countSides(){
    return this.array.length
  }
  // 3. Use the get keyword to make a getter method perimeter that calculates 
  // the sum of each side (each index in the array) of the polygon. 
  // This method will become accessible to its child classes.
  get perimeter(){
    //thePerimeter = this.array.reduce((element, 0) => element + element )
    const thePerimeter = this.array.reduce((partialSum, a) => partialSum + a, 0);
    return thePerimeter;
  }
}

// Define a Triangle class that inherits from Polygon.
class Triangle extends Polygon{


  get isValid(){
    // let sideOne = this.array[0] 
    // let sideTwo = this.array[1]
    // let sideThree =  this.array[2]
    if (!Array.isArray(this.array)) return;
    if (this.count !== 3) return;
    let side1 = this.array[0]
    let side2 = this.array[1]
    let side3 = this.array[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon{


  get isValid(){
    // let sideOne = this.array[0] 
    // let sideTwo = this.array[1]
    // let sideThree =  this.array[2]
    if (!Array.isArray(this.array)) return;
    if (this.count !== 4) return;
    let side1 = this.array[0]
    let side2 = this.array[1]
    let side3 = this.array[2]
    let side4 = this.array[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }

  get area() {
    if (!Array.isArray(this.array)) return;
    if (this.count !== 4) return;
    return this.array[0] * this.array[0]
  }
}

