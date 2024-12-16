class Triangle {
    constructor( a, b, c ) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getA = () => {
      return this.a;
    }
    getB = () => {
      return this.b;
    }
    getC = () => {
      return this.c;
    }

    area = () => {
      return (this.a * this.b) / 2;
    }
}

class Square {
  constructor( a ) {
    this.a = a;
  }
  getA = () => {
    return this.a;
  }
  area = () => {
    return this.a ** 2; 
  }
}

class Rectangule {
  constructor( a, b) {
    this.a = a;
    this.b = b;
  }
  getA = () => {
    return this.a;
  }
  getB = () => {
    return this.b;
  }
  area = () => {
    return this.a * this.b
  }
}


function polygonArea(polygon) {
  let result =(polygon instanceof Triangle) ? polygon.area() :
  (polygon instanceof Square) ? polygon.area() :
  (polygon instanceof Rectangule) ? polygon.area() :
  'is not a Polygon';
  console.log(result);
}

let polygonTriagule = new Triangle(4, 3, 5);
let polygonSquare = new Square(3);
let polygonRectangule = new Rectangule( 4, 4 );
polygonArea( polygonTriagule );
polygonArea( polygonSquare );
polygonArea( polygonRectangule );


