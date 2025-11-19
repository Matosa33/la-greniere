import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main Dot */}
      <div 
        className="fixed pointer-events-none z-[100] rounded-full bg-bordeaux-light mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '40px' : '12px',
          height: isHovering ? '40px' : '12px',
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 0.8 : 1
        }}
      />
      {/* Trailing Ring */}
      <div 
        className="fixed pointer-events-none z-[99] rounded-full border border-bordeaux-light/30 transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};