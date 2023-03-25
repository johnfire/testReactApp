import { describe } from "node:test";
import renderer from "react-test-renderer";

import Index from "../index";

describe("general test suite warm up ", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });

  test("prints a string", () => {
    console.log("here is a sting ");
  });
});

describe("general snapshots", () => {
  test("checks main index for sameness", () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
