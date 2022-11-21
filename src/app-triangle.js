class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getSideALength() {
    return this.sideA;
  }
  getSideBLength() {
    return this.sideB;
  }
  getSideCLength() {
    return this.sideC;
  }
  getPerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }
  getHeight() {
    return this.length * this.height;
  }
  getSurfaceArea() {
    return Math.sqrt(
      ((this.sideA + this.sideB + this.sideC) / 2) *
        (((this.sideA + this.sideB + this.sideC) / 2 - this.sideA) *
          ((this.sideA + this.sideB + this.sideC) / 2 - this.sideB) *
          ((this.sideA + this.sideB + this.sideC) / 2 - this.sideC))
    );
  }
}

module.exports = {
  Triangle: Triangle,
};