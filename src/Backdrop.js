import React, { useState, useRef, useEffect } from 'react';

const Backdrop = ({ id, scrollTop, color }) => {
  const el = useRef(null);
  const [currentPos, setCurrentPos] = useState(100);

  useEffect(() => {
    setCurrentPos((id - scrollTop / el.current.offsetHeight) * 100);
    console.log(currentPos);
  }, [scrollTop, id]);

  return (
    <div
      ref={el}
      className={[
        'absolute',
        'w-full',
        'h-screen',
        `bg-${color}-300`,
      ].join(' ')}
      style={{ top: `${currentPos}vh`, zIndex: -1 }}
    ></div>
  );
};

export default Backdrop;
