import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { easings } from '@react-spring/web';

const BlurText = ({
  text = '',
  delay = 100,
  className = '',
  animateBy = 'letters',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  const defaultFrom =
    direction === 'top'
      ? { opacity: 0, transform: 'translateY(-40px)' }
      : { opacity: 0, transform: 'translateY(40px)' };

  const defaultTo = [
    {
      opacity: 0.5,
      transform: direction === 'top' ? 'translateY(5px)' : 'translateY(-5px)',
    },
    { opacity: 1, transform: 'translateY(0px)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of animationTo || defaultTo) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing: easings[easing] },
    }))
  );

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: 'inline-block',
            backgroundImage: 'linear-gradient(to right, #00a3ff, #0047ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {elements[index] === ' ' ? '\u00A0' : elements[index]}
        </animated.span>
      ))}
    </p>
  );
};

export default BlurText;
