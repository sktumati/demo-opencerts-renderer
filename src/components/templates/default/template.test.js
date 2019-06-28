import React from "react";
import renderer from "react-test-renderer";
import templates from "./index";
import Template, { NestedComponent } from "./template";

const complexJson = [
  {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" }
      ]
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" }
    ]
  },
  {
    id: "0002",
    type: "donut",
    name: "Raised",
    ppu: 0.55,
    batters: {
      batter: [{ id: "1001", type: "Regular" }]
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" }
    ]
  },
  {
    id: "0003",
    type: "donut",
    name: "Old Fashioned",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" }
      ]
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" }
    ]
  }
];

describe("NestedComponent", () => {
  it("renders primitives", () => {
    const stringPrimitive = renderer.create(<NestedComponent>{"Hello"}</NestedComponent>);
    expect(stringPrimitive.toJSON()).toMatchSnapshot();

    const numberPrimitive = renderer.create(<NestedComponent>{1337}</NestedComponent>);
    expect(numberPrimitive.toJSON()).toMatchSnapshot();

    const booleanPrimitive = renderer.create(<NestedComponent>{false}</NestedComponent>);
    expect(booleanPrimitive.toJSON()).toMatchSnapshot();
  });

  it("works", () => {
    const fullObject = renderer.create(<NestedComponent>{complexJson}</NestedComponent>);
    expect(fullObject.toJSON()).toMatchSnapshot();

  });
});

describe("index", () => {
  it("exports a templates array", () => {
    expect(Array.isArray(templates)).toBe(true);
    templates.forEach(template => {
      expect(template.id).toBeTruthy();
      expect(template.label).toBeTruthy();
      expect(typeof template.template).toBe("function");
    });
  });
});

describe("default template", () => {
  it("matches snapshot", () => {
    const document = { foo: "bar" };
    const component = renderer.create(<Template document={document} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
