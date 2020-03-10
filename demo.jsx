import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ReactMathjaxPreview from './index.jsx'

const asciimath = '`sum_(i=1)^n i^3=((n(n+1))/2)^2`'
const someMath = String.raw`
  <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <menclose notation="circle box">
      <mi> x </mi><mo> + </mo><mi> y </mi>
    </menclose>
  </math>

  $$\lim_{x \to \infty} \exp(-x) = 0$$

  ${asciimath}

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
  </math>`

const App = () => {
  const [math, setMath] = useState(someMath)

  return (
    <div style={{ width: '80vw', margin: 'auto' }}>
      <h1>react-mathjax-preview</h1>
      <p>
        Enter some TeX, asciimath or MathML in the box below, or mix them all.
      </p>
      <textarea
        defaultValue={someMath}
        onChange={(event) => setMath(event.target.value)}
        style={{ width: '100%', height: '150px' }}
      />
      <div>
        <p>Configured delimiters:</p>
        <ul>
          <li>
            TeX, inline mode: <code>\(...\)</code> or <code>$...$</code>
          </li>
          <li>
            TeX, display mode: <code>\[...\]</code> or <code> $$...$$</code>
          </li>
          <li>
            Asciimath: <code>`...`</code>.
          </li>
        </ul>
      </div>
      <ReactMathjaxPreview math={math} style={{ marginTop: '20px' }} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))