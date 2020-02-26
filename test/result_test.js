import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import ReactMathjaxPreview from '../src/components/ReactMathjaxPreview'

describe('ReactMathjaxPreview', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  //TODO: test MathJax rendered output
  it('renders MathJax', () => {
    render(<ReactMathjaxPreview math={String.raw`$\lim_{x \to \infty} \exp(-x) = 0$`}/>, node, () => {
      expect(node.innerHTML).toContain('react-mathjax-preview-result')
    })
  })
})
