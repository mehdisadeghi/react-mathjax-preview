# react-mathjax-preview

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

`react-mathjax-preview` provides one React component to render MathML, TeX or ASCIImath formulas. See [demo](http://mehdisadeghi.github.io/react-mathjax-preview/demo/dist/index.html).

## Installation
Install `react-mathjax-preview` as a dependency:

```
npm install react-mathjax-preview
```

## Usage
Import the package and fill the `math` property with some text containing your formals. Wrap TeX in `$` or `$$` and ASCIImath in \`. Paste MathML as is.

```js
import React, {Component} from 'react'
import {render} from 'react-dom'
import MathJax from 'react-mathjax-preview'

const asciimath = '`sum_(i=1)^n i^3=((n(n+1))/2)^2`' # Because of the backtick
const math = String.raw`
  <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
    <menclose notation="circle box">
      <mi> x </mi><mo> + </mo><mi> y </mi>
    </menclose>
  </math>

  $$\lim_{x \to \infty} \exp(-x) = 0$$

  ${asciimath}`

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      math: tex
    }
  render() {
    return <MathJax math={this.state.math} />
  }
}
```

See [demo](./demo/src/index.js) for a complete example. You can also play with the demo:

```
git clone https://github.com/mehdisadeghi/react-mathjax-preview && cd react-mathjax-preview
npm install
npm run start
```

And browse to [localhost:3000](http://localhost:3000).

# License
MIT

[build-badge]: https://img.shields.io/travis/mehdisadeghi/react-mathjax-preview/master.png?style=flat-square
[build]: https://travis-ci.org/mehdisadeghi/react-mathjax-preview

[npm-badge]: https://img.shields.io/npm/v/react-mathjax-preview.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-mathjax-preview

[coveralls-badge]: https://img.shields.io/coveralls/mehdisadeghi/react-mathjax-preview/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/mehdisadeghi/react-mathjax-preview
