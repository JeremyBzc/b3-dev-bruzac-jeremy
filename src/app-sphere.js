class Sphere {
  constructor(diameter) {
    this.diameter = diameter;
  }
  getRadius() {
    return this.diameter / 2;
  }
}

module.exports = {
  Sphere: Sphere,
};
