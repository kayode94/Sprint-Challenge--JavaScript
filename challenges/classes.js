// 1. Copy and paste your prototype in here and refactor into class syntax.


// function CuboidMaker(length, width, height){
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }


//   CuboidMaker.prototype.volume = function(length, width, height){
//     return length * width * height;
//   }
  
//   CuboidMaker.prototype.surfaceArea = function(length, width, height){
//     return 2 * (length * width + length * height + width * height);
//   }


//   const cuboid = new CuboidMaker(4, 5, 5)

//   console.log(cuboid.volume(4, 5, 5)); // 100
// console.log(cuboid.surfaceArea(4, 5, 5)); // 130

//REFACTOR

class CuboidMaker{
    constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
}
volume(length, width, height){
   return length * width * height;
}
surfaceArea(length, width, height){
    return 2 * (length * width + length * height + width * height);
}
}

class Cuboid extends CuboidMaker{
  constructor(length, width, height){
      super(length, width, height)
  }

}

 const cuboid = new Cuboid({
   length: 4,
   width: 5,
   height: 5,
 });


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume(4,5,5)); // 100
console.log(cuboid.surfaceArea(4,5,5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.