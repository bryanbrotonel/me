import React, { useState, useRef, useEffect } from 'react';

import './index.css';

function FadeInTransition(props) {
  const [isVisible, setIsVisible] = useState(false);

  const elementRef = useRef(null);

  // Callback function verifitying when viewpoint is visible
  const crossedViewpoint = (entries) => {
    const [entry] = entries;

    // If intersects viewport, set element visible to true
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  // Observer options for viewport intersecting
  const options = {
    // Element to detect visibility
    root: null,

    // Margin around root
    rootMargin: '0px',

    // Percentage of target that detects visibility
    threshold: 0.75,
  };

  // Observe only if element is within viewport
  useEffect(() => {
    const observer = new IntersectionObserver(crossedViewpoint, options);

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`fadeInUp ${isVisible ? 'fadeInUp-transition' : ''}`}
    >
      {props.children}
    </div>
  );
}

export default FadeInTransition;
