import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const glowRef = useRef(null);
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const dot = dotRef.current;
        const outline = outlineRef.current;
        const glow = glowRef.current;

        const handleMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;

            // Use CSS variables for position - very performant as it avoids React re-renders for every move
            document.documentElement.style.setProperty('--cursor-x', `${x}px`);
            document.documentElement.style.setProperty('--cursor-y', `${y}px`);

            const target = e.target;
            const isClickable = window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button');

            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className={`cursor-dot ${isPointer ? 'active' : ''}`}
            />
            <div
                ref={outlineRef}
                className={`cursor-outline ${isPointer ? 'active' : ''}`}
            />
            <div
                ref={glowRef}
                className="cursor-glow"
            />
        </>
    );
};

export default CustomCursor;

