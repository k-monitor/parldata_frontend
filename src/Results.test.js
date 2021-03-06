import React from "react";
import Results from "./Results";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Results
        results={{
          hits: {
            total: { value: 0 },
            hits: [
              { highlight: { text: "a" }, _source: { text: "Foo" }, _id: 3 },
              { highlight: { text: "b" }, _source: { text: "Bar" }, _id: 2 }
            ]
          }
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
