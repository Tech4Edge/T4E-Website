import React, { useEffect, useMemo, useRef } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 72,
  itemScale = 0.03,
  itemStackDistance = 120,
  stackPosition = "18%",
  baseScale = 1,
  rotationAmount = 0.6,
  blurAmount = 0.5,
  useWindowScroll = true,
}) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  );

  useEffect(() => {
    const scrollHost = useWindowScroll ? window : containerRef.current;
    if (!scrollHost) return undefined;

    const update = () => {
      const vh = window.innerHeight;
      const stackTop = (parseFloat(stackPosition) / 100) * vh;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const card = item.firstElementChild;
        if (!card) return;

        const rect = item.getBoundingClientRect();
        const progress = clamp(
          (stackTop - rect.top) / (vh + itemStackDistance),
          0,
          1
        );

        const targetScale = Math.max(0.8, baseScale - index * itemScale);
        const scale = 1 - progress * (1 - targetScale);
        const y = progress * index * 14;
        const rotate =
          progress * index * rotationAmount * (index % 2 === 0 ? 1 : -1);
        const blur = progress * index * blurAmount;

        card.style.transform = `translate3d(0, ${y}px, 0) scale(${scale}) rotate(${rotate}deg)`;
        card.style.filter = `blur(${blur}px)`;
      });
    };

    update();
    scrollHost.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      scrollHost.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [
    baseScale,
    blurAmount,
    itemScale,
    itemStackDistance,
    stackPosition,
    rotationAmount,
    useWindowScroll,
  ]);

  return (
    <div ref={containerRef} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          className="scroll-stack-item sticky"
          style={{
            top: stackPosition,
            marginBottom: `${itemDistance}px`,
            zIndex: childrenArray.length - index,
          }}
        >
          <div className="will-change-transform transition-transform duration-200">
            {child}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollStack;
