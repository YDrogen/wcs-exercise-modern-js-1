import { expect } from "chai";
import {
  double,
  getImageMarkup,
  logParamsAndReturnAddition,
  roundMap,
} from "./index.js";

describe("double", () => {
  it("should return 4 when given 2", () => {
    expect(double(2)).to.equal(4);
  });
  it("should return 0 when given 0", () => {
    expect(double(0)).to.equal(0);
  });
  it("should return -4 when given -2", () => {
    expect(double(-2)).to.equal(-4);
  });
  it("should return 0.4 when given 0.2", () => {
    expect(double(0.2)).to.equal(0.4);
  });
});

describe("logParamsAndReturnAddition", () => {
  it("should return 5 when given 2 and 3", () => {
    expect(logParamsAndReturnAddition(2, 3)).to.equal(5);
  });
  it("should return 0 when given 0 and 0", () => {
    expect(logParamsAndReturnAddition(0, 0)).to.equal(0);
  });
  it("should return 2 when given 0 and 2", () => {
    expect(logParamsAndReturnAddition(0, 2)).to.equal(2);
  });
  it("should return -2 when given 0 and -2", () => {
    expect(logParamsAndReturnAddition(0, -2)).to.equal(-2);
  });
});

describe("roundMap", () => {
  it("should return [1, 3, 4] when given [1.2, 2.5, 3.7]", () => {
    expect(roundMap([1.2, 2.5, 3.7])).to.eql([1, 3, 4]);
  });
  it("should return [0, 0, 0] when given [0.2, 0.5, 0.7]", () => {
    expect(roundMap([0.2, 0.5, 0.7])).to.eql([0, 1, 1]);
  });
  it("should return [0, 0, 0] when given [-0.2, -0.5, -0.7]", () => {
    expect(roundMap([-0.2, -0.5, -0.7])).to.eql([-0, -0, -1]);
  });
  it("should return [0, 0, 0] when given [0, 0, 0]", () => {
    expect(roundMap([0, 0, 0])).to.eql([0, 0, 0]);
  });
});

describe("getImageMarkup", () => {
  it('should return \'<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width="400" height="300">\' when given \'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\', \'Google logo\'', () => {
    expect(
      getImageMarkup(
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        "Google logo"
      )
    ).to.equal(
      '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width="400" height="300">'
    );
  });
  it('should return \'<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width="200" height="100">\' when given \'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\', \'Google logo\', 200, 100', () => {
    expect(
      getImageMarkup(
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        "Google logo",
        200,
        100
      )
    ).to.equal(
      '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width="200" height="100">'
    );
  });
  it('should return \'<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width="400" height="300">\' when given \'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\', \'Google logo\', 0, 0', () => {
    expect(
      getImageMarkup(
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        "Google logo",
        0,
        0
      )
    ).to.equal(
      '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width="400" height="300">'
    );
  });
  it('should return \'<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width="400" height="300">\' when given \'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\', \'Google logo\', -1, -1', () => {
    expect(
      getImageMarkup(
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        "Google logo",
        -1,
        -1
      )
    ).to.equal(
      '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width="400" height="300">'
    );
  });
});
