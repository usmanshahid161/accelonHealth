import { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix , duration = 1000, addBetween }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
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
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <h3 ref={ref} style={{
      display: 'flex'
    }}>
      {count}
      {addBetween || ""}
      {suffix || ""}
    </h3>
  );
};

export default Counter;
