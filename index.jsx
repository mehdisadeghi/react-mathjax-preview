import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";

const baseConfig = {
  showMathMenu: true,
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
  },
  skipStartupTypeset: true,
};

const MathJaxPreview = ({ script, config, className, math, style, id }) => {
  const sanitizedMath = DOMPurify.sanitize(math);
  const previewRef = useRef();
  const [visibility, setVisibility] = useState("hidden"); //svgpubs@github hopes to prevent render flicker
  const [loadingState, setLoadingState] = useState(
    window.MathJax ? "loaded" : "loading"
  );

  useEffect(() => {
    let mathjaxScriptTag = document.querySelector(`script[src="${script}"]`);
    if (!mathjaxScriptTag) {
      mathjaxScriptTag = document.createElement("script");
      mathjaxScriptTag.async = true;
      mathjaxScriptTag.src = script;

      for (const [k, v] of Object.entries(config || {})) {
        mathjaxScriptTag.setAttribute(k, v);
      }
      const node = document.head || document.getElementsByTagName("head")[0];
      node.appendChild(mathjaxScriptTag);
    }
    const onloadHandler = () => {
      setLoadingState("loaded");
      window.MathJax.Hub.Config({ ...baseConfig, ...config });
    };
    const onerrorHandler = () => {
      setLoadingState("failed");
    };

    mathjaxScriptTag.addEventListener("load", onloadHandler);
    mathjaxScriptTag.addEventListener("error", onerrorHandler);

    return () => {
      mathjaxScriptTag.removeEventListener("load", onloadHandler);
      mathjaxScriptTag.removeEventListener("error", onloadHandler);
    };
  }, [setLoadingState, config, baseConfig]);

  useEffect(() => {
    if (loadingState !== "loaded") {
      return;
    }
    previewRef.current.innerHTML = sanitizedMath;
    window.MathJax.Hub.Queue([
      "Typeset",
      window.MathJax.Hub,
      previewRef.current,
    ]);
    setTimeout(() => {
      setVisibility("visible");
    }, 300); //svgpubs@github hopes to prevent render flicker
  }, [sanitizedMath, loadingState, previewRef]);
  return (
    <div className={className} id={id} style={style}>
      {loadingState === "failed" && <span>fail loading mathjax lib</span>}
      <div
        className="react-mathjax-preview-result"
        ref={previewRef}
        style={{ visibility: visibility }} // hide for some time until it is probalby done
      />
    </div>
  );
};

MathJaxPreview.propTypes = {
  script: PropTypes.string,
  config: PropTypes.object,
  className: PropTypes.string,
  math: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
};

MathJaxPreview.defaultProps = {
  script:
    "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=TeX-MML-AM_HTMLorMML",
  id: "react-mathjax-preview",
};

export default MathJaxPreview;
