import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";


describe("ArticleTextToggleButton tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ArticleTextToggleButton />);
      expect(container).toMatchSnapshot();
    });

    it("renders correctly when passed a buttonText prop", () => {
        const { container } = render(<ArticleTextToggleButton buttonText="showLess"/>);
        expect(container).toMatchSnapshot();
      });
  
  });