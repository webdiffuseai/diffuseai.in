import type { SpringOptions } from "framer-motion";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  hoverImageSrc?: React.ComponentProps<"img">["src"]; // <- This is new
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties['height'];
  containerWidth?: React.CSSProperties['width'];
  imageHeight?: React.CSSProperties['height'];
  imageWidth?: React.CSSProperties['width'];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}


const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  hoverImageSrc, // ← THIS LINE is crucial
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "200px",
  containerWidth = "100%",
  imageHeight = "100px",
  imageWidth = "400px",
  scaleOnHover = 1.11,
  rotateAmplitude = 11,
  showMobileWarning = true,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(11);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

 return (
  <figure
    ref={ref}
    className="group relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
    style={{
      height: containerHeight,
      width: containerWidth,
    }}
    onMouseMove={handleMouse}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <motion.div
      className="relative [transform-style:preserve-3d] border-12 border-black rounded-[15px] shadow-lg overflow-hidden"
      style={{
        width: imageWidth,
        height: imageHeight,
        rotateX,
        rotateY,
        scale,
      }}
    >
      <div className="relative w-full h-full">
        <img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover rounded-[15px] transition-opacity duration-300 z-10 group-hover:opacity-0"
        />
        {hoverImageSrc && (
          <img
            src={hoverImageSrc}
            alt={`${altText} hover`}
            className="absolute inset-0 w-full h-full object-cover rounded-[15px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        )}
      </div>

      {displayOverlayContent && overlayContent && (
        <div className="absolute top-0 left-0 z-[20] bg-white/10 p-4 rounded-xl w-full h-full flex items-center justify-center">
          {overlayContent}
        </div>
      )}
    </motion.div>

    {showTooltip && (
      <motion.figcaption
        className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#000000] opacity-0 z-[3] hidden sm:block"
        style={{
          x,
          y,
          opacity,
          rotate: rotateFigcaption,
        }}
      >
        {captionText}
      </motion.figcaption>
    )}
  </figure>
);
}