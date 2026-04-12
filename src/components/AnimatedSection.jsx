import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const AnimatedSection = ({ children, className, delay = 0, direction = 'up' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.17, 0.67, 0.83, 0.67], // smooth cubic bezier
        delay: delay 
      } 
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const TypewriterText = ({ text, className, delay = 0 }) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsTyping(true), delay * 1000);
    }
  }, [inView, delay]);

  useEffect(() => {
    if (isTyping && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping, text]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {isTyping && displayedText.length < text.length && <span className="typing-cursor"></span>}
    </span>
  );
};
