 import React from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(0, 13, 255, 0.43)", // stronger white spotlight
}) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl bg-[#000024] overflow-hidden p-4 ${className}`}

      tabIndex={0}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}5%, transparent 90%)`,
        }}
      />
      {children}
    </div>
  );
};

export const ExpertiseServices = () => {
  const services = [
    {
      title: "Product Development",
      description:
        "Experts in microbial ecosystems and food safety systems for space applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Space Food Systems",
      description:
        "Development of high-reliability food safety systems with expertise in microbiological risk assessment.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h1m4 0h1m4 0h1m4 0h1M3 6h.01M7 6h.01M11 6h.01M15 6h.01M19 6h.01M9 21h6M12 17v4"
          />
        </svg>
      ),
    },
    {
      title: "Microbiology",
      description:
        "Expertise in microbial ecosystems and their impact on space food safety.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10m-7 4h7" />
        </svg>
      ),
    },
    {
      title: "Quality Assurance",
      description:
        "Ensuring food safety and quality compliance through rigorous testing and controls.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Product Development",
      description:
        "Experts in microbial ecosystems and food safety systems for space applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Space Food Systems",
      description:
        "Development of high-reliability food safety systems with expertise in microbiological risk assessment.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h1m4 0h1m4 0h1m4 0h1M3 6h.01M7 6h.01M11 6h.01M15 6h.01M19 6h.01M9 21h6M12 17v4"
          />
        </svg>
      ),
    },
    {
      title: "Microbiology",
      description:
        "Expertise in microbial ecosystems and their impact on space food safety.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10m-7 4h7" />
        </svg>
      ),
    },
    {
      title: "Quality Assurance",
      description:
        "Ensuring food safety and quality compliance through rigorous testing and controls.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
        {
      title: "Microbiology",
      description:
        "Expertise in microbial ecosystems and their impact on space food safety.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10m-7 4h7" />
        </svg>
      ),
    },
        {
      title: "Microbiology",
      description:
        "Expertise in microbial ecosystems and their impact on space food safety.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10m-7 4h7" />
        </svg>
      ),
    }
  ];

  return (
    <section id="expertise" className="py-24 relative">
      <div className="container mx-auto px-14">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Expertise Services</h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
          Our technical board comprises experts from diverse fields, bringing
          together specialized knowledge to drive innovation.
        </p>
        <div className="grid grid-cols-0 sm:grid-cols-0 lg:grid-cols-5 gap-5">
          {services.map(({ title, description, icon }) => (
            <SpotlightCard key={title} className="cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-600 mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-white/70 text-sm">{description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
