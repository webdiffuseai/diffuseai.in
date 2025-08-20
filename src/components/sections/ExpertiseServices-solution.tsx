// ExpertiseServices.tsx
import React from "react";
import ScrollStack, { ScrollStackItem } from "../effects/ScrollStack";

const services = [
  {
    title: "Service 1",
    description: "Custom web development tailored to your business needs.",
  },
  {
    title: "Service 2",
    description: "Mobile app solutions for iOS and Android platforms.",
  },
  {
    title: "Service 3",
    description: "UI/UX design that puts user experience first.",
  },
  {
    title: "Service 4",
    description: "SEO optimization to boost your online visibility.",
  },
  {
    title: "Service 5",
    description: "Cloud solutions and infrastructure management.",
  },
  {
    title: "Service 6",
    description: "Ongoing support and maintenance for your projects.",
  },
];

export const ExpertiseServices = () => {
  return (
    <ScrollStack>
      {services.map((service, idx) => (
        <ScrollStackItem key={idx}>
          <div className="px-0">
            <div className="h-full flex flex-col justify-center items-start bg-[#000] rounded-xl p-20 relative">
              {/* Content */}
              <h3 className="text-2xl font-bold text-blue-400 mb-1">
                {service.title}
              </h3>
              <p className="text-white/80 mb-4">{service.description}</p>

              {/* Up button only on card 1 */}
              {idx === 0 && (
                <button
                  className="scroll-btn-card text-bold bg-white rounded-full absolute top-4 right-4"
                  onClick={() => {
                    window.scrollTo({
                      top: window.scrollY - window.innerHeight,
                      behavior: "smooth",
                    });
                  }}
                >
                  - Go UP -
                </button>
              )}

              {/* Down button only on last card */}
              {idx === services.length - 1 && (
                <button
                  className="scroll-btn-card absolute bottom-4 right-4"
                  onClick={() => {
                    window.scrollTo({
                      top: window.scrollY + window.innerHeight,
                      behavior: "smooth",
                    });
                  }}
                >
                  ↓Go Down
                </button>
              )}
            </div>
          </div>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
};
