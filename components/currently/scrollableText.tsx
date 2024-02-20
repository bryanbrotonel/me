import React, { useEffect, useRef, useState } from 'react';

type ScrollableTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScrollableText({
  children,
  className,
}: ScrollableTextProps): React.ReactNode {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isAnimating, setIsAnimating] = useState(false);
  const [translateText, setTranslateText] = useState(false);
  const [animateWidth, setAnimateWidth] = useState(0);

  const animationDelay = 3000;
  const animationDuration = 6000;
  const textLeftPadding = 12;

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;
    const containerWidth = containerRef.current.offsetWidth;

    if (textWidth && containerWidth && textWidth > containerWidth) {
      setAnimateWidth(textWidth - containerWidth + textLeftPadding * 2);
    }
  }, []);

  const animateText = (delay: number) => {
    setIsAnimating(true);

    if (animateWidth > 0) {
      const translateLeft = setTimeout(() => {
        setIsAnimating(true);
        setTranslateText(true);
      }, delay);

      const translateRight = setTimeout(() => {
        setTimeout(() => {
          setTranslateText(false);
        }, animationDelay);
      }, delay + animationDuration);

      const clearAnimation = setTimeout(() => {
        setIsAnimating(false);
      }, delay + animationDuration + animationDelay + animationDuration);

      return () => {
        clearTimeout(translateLeft);
        clearTimeout(translateRight);
        clearTimeout(clearAnimation);
      };
    } else {
      setIsAnimating(false);
    }
  };

  return (
    <div ref={containerRef} className={'relative'}>
      <div
        className="whitespace-nowrap group:transition-transform duration-[6000ms] ease-in-out"
        style={
          translateText
            ? { transform: `translate(-${animateWidth}px, 0)` }
            : { transform: 'translate(0)' }
        }
      >
        <div className="pl-3">
          <span className={`${className}`} ref={textRef}>
            {children}
          </span>
        </div>
      </div>
      {animateWidth > 0 && (
        <div
          onMouseEnter={() => {
            if (!isAnimating) animateText(0);
          }}
          className="absolute inset-0 bg-gradient-edge-overlay"
        />
      )}
    </div>
  );
}
