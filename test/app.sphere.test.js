const Sphere = require("../src/app-sphere").Sphere;
const expect = require("chai").expect;

describe("Testing the Sphere Functions", function () {
  it("1. The radius of the Circle", function (done) {
    let s1 = new Sphere(20);
    expect(s1.getRadius()).to.equal(10);
    done();
  });
});
