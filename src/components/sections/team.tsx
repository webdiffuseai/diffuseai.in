import { SectionHeading } from '../ui/section-heading';

export const Team = () => {
  const founders = [
    {
      name: 'Sujan Saitej',
      title: 'Founder & CEO @ DiffuseAI',
      bio: 'Transforming Industries with Intelligent Solutions | AI Student Community Ambassador | Agentic AI & LLM Engineer | AI Automation Engineer @Pullinam Aerospace Technologies',
      linkedin: 'https://www.linkedin.com/in/sujansaitej/'
    },
    {
      name: 'Sheik Mohammed Ali M',
      title: 'Co-Founder of DiffuseAI',
      bio: 'Aspiring AI Enthusiast | Python Developer | Web Developer | Continuous Learner and Tech Enthusiast',
      linkedin: 'https://www.linkedin.com/in/sheikmdali/'
    },
    {
      name: 'Vishnu S',
      title: 'Co-Founder of DiffuseAI',
      bio: 'AISC Ambassador | Graphic designer | Hardware & Software Developer',
      linkedin: 'https://www.linkedin.com/in/vsnu02/'
    }
  ];
  
  return (
    <section id="team" className="py-24 relative">
      <div className="container">
        <SectionHeading
          overline="Our Team"
          title="The Innovators"
          description="Meet the talented individuals driving innovation in AI technology."
        />
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-gradient">Founding Team</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {founders.map((member, index) => (
              <div 
                key={index} 
                className="glass-card p-6 stellar-glow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 aspect-square flex items-center justify-center bg-white/5 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <div className="text-sm text-stellar-blue mb-3">{member.title}</div>
                <p className="text-white/70 text-sm mb-4">{member.bio}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-stellar-blue transition-colors inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};