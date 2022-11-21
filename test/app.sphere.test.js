const Sphere = require("../src/app-sphere").Sphere;
const expect = require("chai").expect;

describe("Testing the Sphere Functions", function () {
  it("1. The radius of the Sphere", function (done) {
    let s1 = new Sphere(20);
    expect(s1.getRadius()).to.equal(10);
    done();
  });

  it("2. The volume of the Sphere", function (done) {
    let s2 = new Sphere(20);
    expect(s2.getVolume()).to.equal(4188.79);
    done();
  });
});
