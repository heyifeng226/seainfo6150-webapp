import React from "react";
import ArticleList from "./ArticleList";
import ArticleListItem from "../ArticleListItem";

describe("ArticleList tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ArticleList />);
      expect(container).toMatchSnapshot();
    });
  
  
  });