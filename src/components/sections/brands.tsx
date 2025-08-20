import React from 'react';
import Image from 'images/sujan.jpg';
import { SectionHeading } from './team'; // Reuse the same heading component

const brandLogos = [
  {
    name: 'OpenAI',
    src: '/brands/openai.svg',
    alt: 'OpenAI Logo',
    url: 'https://openai.com',
  },
  {
    name: 'Google',
    src: '/brands/google.svg',
    alt: 'Google Logo',
    url: 'https://google.com',
  },
  {
    name: 'NVIDIA',
    src: '/brands/nvidia.svg',
    alt: 'NVIDIA Logo',
    url: 'https://nvidia.com',
  },
  {
    name: 'Microsoft',
    src: '/brands/microsoft.svg',
    alt: 'Microsoft Logo',
    url: 'https://microsoft.com',
  },
  {
    name: 'AWS',
    src: '/brands/aws.svg',
    alt: 'AWS Logo',
    url: 'https://aws.amazon.com',
  },
];

const Brands = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <SectionHeading
        overline="Our Partners"
        title="Trusted by the Best"
        description="We collaborate with leading companies to create impactful AI solutions."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center mt-12">
        {brandLogos.map((brand, index) => (
          <a
            key={index}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center grayscale hover:grayscale-0 transition duration-300"
          >
           
          </a>
        ))}
      </div>
    </section>
  );
};

export default Brands;
