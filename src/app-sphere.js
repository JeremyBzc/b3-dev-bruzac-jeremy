class Sphere {
  constructor(diameter) {
    this.diameter = diameter;
  }
  getRadius() {
    return this.diameter / 2;
  }
  getVolume() {
    let radius = this.getRadius();
    radius = Math.abs(radius);
    return Math.round((4 / 3) * Math.PI * Math.pow(radius, 3) * 100) / 100;
  }
}

module.exports = {
  Sphere: Sphere,
};
