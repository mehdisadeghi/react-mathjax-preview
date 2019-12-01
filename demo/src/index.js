import React, {Component} from 'react'
import {render} from 'react-dom'
import DOMPurify from 'dompurify'

import Example from '../../src'

const mxml = String.raw`
<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <menclose notation="circle box">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </menclose>
</math>

\`sum_(i=1)^n i^3=((n(n+1))/2)^2\`

$\lim_{x \to \infty} \exp(-x) = 0$

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
<menclose notation="circle box">
  <mi> x </mi><mo> + </mo><mi> y </mi>
</menclose>
</math>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
<mrow>
<semantics>
  <mrow>
    <msubsup>
      <mo>∫</mo>
      <mn>1</mn>
      <mi>t</mi>
    </msubsup>
    <mfrac>
      <mrow>
        <mo>ⅆ</mo>
        <mi>x</mi>
      </mrow>
      <mi>x</mi>
    </mfrac>
  </mrow>
  <annotation-xml encoding="MathML-Content">
    <apply>
      <int></int>
      <bvar><ci>x</ci></bvar>
      <lowlimit><cn>1</cn></lowlimit>
      <uplimit><ci>t</ci></uplimit>
      <apply>
        <divide></divide>
        <cn>1</cn>
        <ci>x</ci>
      </apply>
    </apply>
  </annotation-xml>
</semantics>
</mrow>
</math>
`

const tex = String.raw`
$$\cos (2\theta) = \cos^2 \theta - \sin^2 \theta$$

$$\cos (2\theta) = \cos^2 \theta - \sin^2 \theta$$

$$\lim_{x \to \infty} \exp(-x) = 0$$

$$k_{n+1} = n^2 + k_n^2 - k_{n-1}$$

$k_{n+1} = n^2 + k_n^2 - k_{n-1}$
`
const asciimath = '`sum_(i=1)^n i^3=((n(n+1))/2)^2`'
const math = String.raw`
  <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <menclose notation="circle box">
      <mi> x </mi><mo> + </mo><mi> y </mi>
    </menclose>
  </math>

  $$\lim_{x \to \infty} \exp(-x) = 0$$

  ${asciimath}`


const bad = `<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="document.body.style.backgroundColor = 'red';alert('Im a bunch of arbitrary javascript!!!');">`


class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      math: math
    }

    this.renderMath.bind(this)
  }

  renderMath = (e) => {
    this.setState({math: DOMPurify.sanitize(this.buffer.value)})
  }

  render() {
    return <div style={{width: "80vw", margin: "auto"}}>
      <h1>react-mathjax-preview</h1>
      <p>Enter some TeX, asciimath or MathML in the box below and press the render button.</p>
      <textarea onChange={this.renderMath} style={{width: '100%', height: '150px'}} ref={(node) => {this.buffer = node}}/>
      <br/>
      <div>
          Configured delimiters:
          <ul>
            <li>TeX, inline mode: <code>\(...\)</code> or <code>$...$</code></li>
            <li>TeX, display mode: <code>\[...\]</code> or <code> $$...$$</code></li>
            <li>Asciimath: <code>`...`</code>.</li>
          </ul>
          <input type='button' onClick={this.renderMath} value='Render'/>
      </div>
      <Example math={this.state.math} style={{marginTop: '20px'}}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
