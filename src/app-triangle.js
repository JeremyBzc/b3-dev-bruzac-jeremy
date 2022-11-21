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
  getSurfaceArea() {
    const perimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const heronFormule =
      perimeter *
      ((perimeter - this.sideA) *
        (perimeter - this.sideB) *
        (perimeter - this.sideC));

    return Math.sqrt(heronFormule);
  }
}

module.exports = {
  Triangle: Triangle,
};
