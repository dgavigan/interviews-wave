import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { shallow } from "enzyme";

import Config from "../Config";

describe("<Config />", () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {};
  });

  describe("Config SnapShot", () => {
    it("renders config correctly", () => {
      const tree = ReactTestRenderer.create(<Config />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
