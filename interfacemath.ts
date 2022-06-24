interface Shape {
  area(): number
}

interface Circumference extends Shape {
  circumference(): number
}
  
class Circle implements Circumference {
  private _radius: number;
  constructor(radius: number) {
    this._radius = radius;
  }

  public area(): number {
    return Math.PI * Math.pow(this._radius, 2)
  }

  public circumference(): number {
      return 2 * Math.PI * this._radius  }
}

class Square implements Shape {

  private _side: number;
  constructor(side: number) {
    this._side = side;
  }

  public get side(): number {
    return this._side;
  }
  
  public area(): number {
    return Math.pow(this._side, 2)
  }
}
class DoubleSquare extends Square {

  constructor(square: Square) {
    super(square.side);
  
  }
  public area(): number {
    return super.area() * 2  }
}

let c1: Circle = new Circle(5)
let s1: Square = new Square(5)
let ds1: DoubleSquare = new DoubleSquare(s1)
console.log(c1.area(), c1.circumference())
console.log(s1.area())
console.log(ds1.area())