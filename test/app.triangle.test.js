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
    let t2 = new Triangle(5, 5, 3);
    expect(t2.getPerimeter()).to.equal(13);
    done();
  });

  it("3. The surface area of the Triangle", function (done) {
    let t3 = new Triangle(3, 4, 5);
    expect(t3.getSurfaceArea()).to.equal(6);
    done();
  });

  it("4. Is Equilateral Triangle", function (done) {
    let t4 = new Triangle(3, 3, 3);
    expect(t4.isEquilateral()).to.equal("Is Equilateral");
    done();
  });

  it("5. Is Isoscele Triangle", function (done) {
    let t5 = new Triangle(2, 2, 4);
    expect(t5.isIsoscele()).to.equal("Is Isoscele");
    done();
  });
});
