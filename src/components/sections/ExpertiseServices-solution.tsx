// ExpertiseServices.tsx
import React from "react";
import ScrollStack, { ScrollStackItem } from "../effects/ScrollStack";

const services = [
  {
    title: "Full Stack Web Development",
    description: "Custom web development tailored to your business needs.",
  },
  {
    title: "Full Stack App Development",
    description: "Mobile app solutions for iOS and Android platforms.",
  },
  {
    title: "UI/UX Web, Mobile & Software Designing",
    description: "UI/UX design that puts user experience first.",
  },
  {
    title: "SEO Services for market reach",
    description: "SEO optimization to boost your online visibility.",
  },
  {
    title: "Cloud Services",
    description: "Cloud solutions and infrastructure management.",
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance for your projects.",
  },
];

export const ExpertiseServices = () => {
  return (
    <ScrollStack>
      {services.map((service, idx) => (
        <ScrollStackItem key={idx}>
          <div className="px-0">
            <div className="h-full flex flex-col justify-center items-start bg-[#000] rounded-xl p-6 md:p-10 lg:p-20 relative w-full">
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-1">
                {service.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-4">
                {service.description}
              </p>
            </div>
          </div>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
};