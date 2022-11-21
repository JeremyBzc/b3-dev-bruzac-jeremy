const Triangle = require("../src/app-triangle").Triangle;
const expect = require("chai").expect;

describe("Testing the Triangle Functions", function () {
  it("1.1 The side A length of the Triangle", function (done) {
    let t1 = new Triangle(5);
    expect(t1.getSideALength()).to.equal(5);
    done();
  });

  it("1.2 The side B length of the Triangle", function (done) {
    let t1 = new Triangle(5);
    expect(t1.getSideALength()).to.equal(5);
    done();
  });
  it("1.3 The side C length of the Triangle", function (done) {
    let t1 = new Triangle(3);
    expect(t1.getSideALength()).to.equal(3);
    done();
  });
  it("2. The perimeter of the Triangle", function (done) {
    let t1 = new Triangle(5, 5, 3);
    expect(t1.getPerimeter()).to.equal(13);
    done();
  });

  it("3. The surface area of the Triangle", function (done) {
    let t2 = new Triangle(3, 4, 5);
    expect(t2.getSurfaceArea()).to.equal(6);
    done();
  });
});
