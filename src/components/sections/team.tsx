import React from 'react';

// This would typically be in a separate file
export const SectionHeading = ({ overline, title, description }) => {
  return (
    <div className="text-center mb-12">
      {overline && <div className="text-stellar-blue uppercase tracking-wider text-sm mb-2">{overline}</div>}
      {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-white/70 max-w-2xl mx-auto">{description}</p>}
    </div>
  );
};

export const Team = () => {
  const founders = [
    {
      name: 'Sujan Saitej',
      title: 'Founder & CEO ',
      bio: 'Transforming Industries with Intelligent Solutions | AI Student Community Ambassador | Agentic AI & LLM Engineer',
      linkedin: 'https://www.linkedin.com/in/sujansaitej/',
      whatsapp: 'https://wa.me/919361860665',
      email: 'mailto:sujan@example.com'
    },
    {
      name: 'Sheik Mohammed Ali M',
      title: 'Co-Founder & COO',
      bio: 'Aspiring AI Enthusiast | Python Developer | Web Developer | Continuous Learner and Tech Enthusiast',
      linkedin: 'https://www.linkedin.com/in/sheikmdali/',
      whatsapp: 'https://wa.me/1234567891',
      email: 'mailto:sheik@example.com'
    },
    {
      name: 'Vishnu S',
      title: 'Co-Founder & CTO ',
      bio: 'AISC Ambassador | Graphic designer | Hardware & Software Developer',
      linkedin: 'https://www.linkedin.com/in/vsnu02/',
      whatsapp: 'https://wa.me/1234567892',
      email: 'mailto:vishnu@example.com'
    }
  ];

  const advisors = [
    {
      name: 'Karunakaran C S',
      bio: 'Founder & CEO, Pullinam Aerospace Technologies (P) Ltd',
      linkedin: '',
      whatsapp: '',
      email: ''
    },
    {
      name: 'X',
      bio: '',
      linkedin: '',
      whatsapp: '',
      email: ''
    },
    {
      name: 'Y',
      bio: '',
      linkedin: '',
      whatsapp: '',
      email: ''
    },
  ];

  const LinkedinIcon = () => (
    <svg className="w-5 h-5 text-white/70 hover:text-stellar-blue" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  const WhatsappIcon = () => (
    <svg className="w-5 h-5 text-white/70 hover:text-green-500" fill="currentColor" viewBox="0 0 32 32">
      <path d="M16.003 3C9.37 3 4 8.37 4 15.003c0 2.623.858 5.057 2.29 7.043L4 29l7.235-2.266A12.967 12.967 0 0016.003 27C22.636 27 28 21.63 28 14.997 28 8.37 22.636 3 16.003 3zm6.338 18.605c-.265.744-1.542 1.428-2.122 1.522-.548.09-1.23.127-1.978-.124-.456-.146-1.044-.34-1.81-.667-3.184-1.37-5.265-4.716-5.422-4.938-.16-.225-1.294-1.72-1.294-3.277 0-1.557.82-2.325 1.11-2.646.289-.321.635-.401.846-.401.212 0 .423.002.608.01.195.009.455-.074.712.544.265.633.9 2.135.978 2.287.08.152.132.334.026.538-.106.203-.159.328-.31.508-.153.18-.326.401-.465.54-.153.153-.313.32-.135.627.179.306.793 1.31 1.698 2.123 1.168 1.039 2.147 1.355 2.453 1.508.306.153.48.128.66-.077.18-.204.76-.889.962-1.194.201-.306.403-.25.673-.152.271.097 1.716.807 2.01.954.294.146.49.219.562.34.072.123.072.709-.192 1.453z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-5 h-5 text-white/70 hover:text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          overline="Our Team"
          title="The Innovators"
          description="Meet the talented individuals who are pushing the boundaries of AI technology."
        />

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-gradient">Founding Team</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {founders.map((member, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-lg bg-opacity-20 bg-white backdrop-blur-sm"
              >
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <div className="text-sm text-blue-400 mb-3">{member.title}</div>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-4 mt-2">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <LinkedinIcon />
                    </a>
                  )}
                  {member.whatsapp && (
                    <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                      <WhatsappIcon />
                    </a>
                  )}
                  {member.email && (
                    <a href={member.email} target="_blank" rel="noopener noreferrer" aria-label="Email">
                      <EmailIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-gradient">Advisory Board</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-lg bg-opacity-20 bg-white backdrop-blur-sm"
              >
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold">{advisor.name}</h4>
                </div>
                <p className="text-gray-300 text-sm text-center mb-4">{advisor.bio}</p>
                <div className="flex justify-center gap-4 mt-2">
                  {advisor.linkedin && (
                    <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <LinkedinIcon />
                    </a>
                  )}
                  {advisor.whatsapp && (
                    <a href={advisor.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                      <WhatsappIcon />
                    </a>
                  )}
                  {advisor.email && (
                    <a href={advisor.email} target="_blank" rel="noopener noreferrer" aria-label="Email">
                      <EmailIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;