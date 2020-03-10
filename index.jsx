import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'

const SCRIPT_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=TeX-MML-AM_HTMLorMML'

const baseConfig = {
  showMathMenu: true,
  tex2jax: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ]
  },
  skipStartupTypeset: true
}

const MathJaxPreview = ({ config, className, math, style }) => {
  const sanitizedMath = DOMPurify.sanitize(math)
  const previewRef = useRef()
  const [loadingState, setLoadingState] = useState('loading')

  useEffect(() => {
    let mathjaxScriptTag = document.querySelector(
      `script[src="${SCRIPT_URL}"]`
    )
    if (!mathjaxScriptTag) {
      mathjaxScriptTag = document.createElement('script')
      mathjaxScriptTag.async = true
      mathjaxScriptTag.src = SCRIPT_URL

      for (const [k, v] of Object.entries(config || {})) {
        mathjaxScriptTag.setAttribute(k, v)
      }
      const node = document.head || document.getElementsByTagName('head')[0]
      node.appendChild(mathjaxScriptTag)
    }
    const onloadHandler = () => {
      setLoadingState('loaded')
      window.MathJax.Hub.Config({ ...baseConfig, ...config })
    }
    const onerrorHandler = () => {
      setLoadingState('failed')
    }

    mathjaxScriptTag.addEventListener('load', onloadHandler)
    mathjaxScriptTag.addEventListener('error', onerrorHandler)

    return () => {
      mathjaxScriptTag.removeEventListener('load', onloadHandler)
      mathjaxScriptTag.removeEventListener('error', onloadHandler)
    }
  }, [setLoadingState, config])

  useEffect(() => {
    if (loadingState !== 'loaded') {
      return
    }
    previewRef.current.innerHTML = sanitizedMath
    window.MathJax.Hub.Queue([
      'Typeset',
      window.MathJax.Hub,
      previewRef.current
    ])
  }, [sanitizedMath, loadingState, previewRef])
  return (
    <div className={className} id='react-mathjax-preview' style={style}>
      {loadingState === 'failed' && <span>fail loading mathjax lib</span>}
      <div id='react-mathjax-preview-result' ref={previewRef} />
    </div>
  )
}

MathJaxPreview.propTypes = {
  config: PropTypes.object,
  className: PropTypes.string,
  math: PropTypes.string,
  style: PropTypes.object
}

export default MathJaxPreview