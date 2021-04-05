# react-mathjax-preview

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

`react-mathjax-preview` provides one React component to render MathML, TeX or ASCIImath formulas. See [demo](https://mehdisadeghi.github.io/react-mathjax-preview/).

## Installation
Install `react-mathjax-preview` as a dependency:

```
yarn add react-mathjax-preview
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

## Props

### className
Wrapper classname

### id
Wrapper id

### style
Style object

### wrapperTag
Wrapper tag, `"div"` is default

### math
MathJax content

### msDelayDisplay
Milliseconds to delay display of div, 300 is default

### onDisplay (Function)
Triggered after delay and div is shown, hopefully typeset has finished

### config (Object)
MathJax configuration

### onLoad (Function)
Triggered after MathJax script finishes loading before children are allowed to render.

### onError (Function)
Triggered when any Math Processing Error occurs

### sanitizeOptions
DOMPurify configuration object (optional). See https://github.com/cure53/DOMPurify#can-i-configure-dompurify

## Development
Clone the repo and run yarn commands available in the `package.json` file.

```
$ git clone https://github.com/mehdisadeghi/react-mathjax-preview && cd react-mathjax-preview
$ yarn install // install dependencies
$ yarn start // start the development server which serves the demo page
$ yarn build // make a production build inside the dist folder
$ yarn build:demo // make a demo build inside the dist folder
```

And browse to [localhost:3000](http://localhost:3000).

# License
MIT

[build-badge]: https://img.shields.io/travis/mehdisadeghi/react-mathjax-preview/master
[build]: https://travis-ci.org/mehdisadeghi/react-mathjax-preview

[npm-badge]: https://img.shields.io/npm/v/react-mathjax-preview
[npm]: https://www.npmjs.org/package/react-mathjax-preview

[coveralls-badge]: https://img.shields.io/coveralls/mehdisadeghi/react-mathjax-preview/master
[coveralls]: https://coveralls.io/github/mehdisadeghi/react-mathjax-preview
