import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import ReactMathjaxPreview from "./index.jsx";

describe("ReactMathjaxPreview", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  // TODO: test MathJax rendered output
  it("renders MathJax", () => {
    render(
      <ReactMathjaxPreview
        math={String.raw`$\lim_{x \to \infty} \exp(-x) = 0$`}
      />,
      node,
      () => {
        expect(node.innerHTML).toContain("react-mathjax-preview-result");
      }
    );
  });

  it("renders MathJax with dynamic script", () => {
    render(
      <ReactMathjaxPreview
        script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=TeX-MML-AM_HTMLorMML"
        math={String.raw`$\lim_{x \to \infty} \exp(-x) = 0$`}
      />,
      node,
      () => {
        expect(node.innerHTML).toContain("react-mathjax-preview-result");
      }
    );
  });
});
