import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Component from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  //TODO: test MathJax rendered output
  it('renders MathJax', () => {
    render(<Component math={String.raw`$\lim_{x \to \infty} \exp(-x) = 0$`}/>, node, () => {
      expect(node.innerHTML).toContain('react-mathjax-preview-result')
    })
  })
})
