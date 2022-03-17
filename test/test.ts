import { assert } from "chai";
import { xo } from "../question_1";
import digitalRoot from "../question_2";
import findOdd from "../question_3";

describe("Question 1", function () {
  it("xo tests", function () {
    assert.strictEqual(xo("xo"), true);
    assert.strictEqual(xo("xxOo"), true);
    assert.strictEqual(xo("xxxm"), false);
    assert.strictEqual(xo("Oo"), false);
    assert.strictEqual(xo("ooom"), false);
  });
});

describe("Question 2", () => {
  it("digitalRoot test", () => {
    assert.equal(digitalRoot(16), 7);
    assert.equal(digitalRoot(456), 6);
  });
});

describe("Question 3", function () {
  doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
  doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
  doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
  doTest([10], 10);
  doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
  doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});

function doTest(a: number[], n: number) {
  it(`xs = ${JSON.stringify(a)} ; n = ${n}`, () => {
    assert.strictEqual(findOdd(a), n);
  });
}
