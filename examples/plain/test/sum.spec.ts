import { calc } from "../src/sum";

describe("sample test", () => {
  it("calc 1 + 2 = 3", () => {
    const actual = calc(1, 2);
    expect(actual).toBe(3);
  });

  it("calc 1 + 3 = 4", () => {
    const actual = calc(1, 3);
    expect(actual).toBe(4);
  });

  // itではなくtestを使用(jest/consistent-test-it)
  test("calc 2 + 2 = 4", () => {
    const actual = calc(2, 2);
    expect(actual).toBe(4);
  });
});

// describe内にitを配置していない(jest/require-top-level-describe)
it("calc 3 + 1 = 4", () => {
  const actual = calc(3, 1);
  expect(actual).toBe(4);
});
