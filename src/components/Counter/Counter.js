import { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix, duration = 1000, addBetween }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animating = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animating.current) {
          animating.current = true;
          animate();
        }

        if (!entry.isIntersecting) {
          animating.current = false;
          setCount(0); // reset when leaving viewport
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate = () => {
    const start = performance.now();

    const step = (now) => {
      if (!animating.current) return; // stop if out of view

      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <h3 ref={ ref } style={ { display: "flex" } }>
      { count }
      {
        (
          addBetween && <span style={ {
          marginLeft: 8,
          marginRight: 8,
        } }> { addBetween } </span>
        ) || ""
      }
      { suffix || "" }
    </h3>
  );
};

export default Counter;
