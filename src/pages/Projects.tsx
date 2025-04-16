import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionHeading } from '@/components/ui/section-heading';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    {
      title: "CAMS (Classroom Attendance Monitoring System)",
      category: "EdTech",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "AI-powered attendance system using facial recognition to automate student tracking with 98% accuracy.",
      year: "2023",
      features: [
        "Real-time attendance recording",
        "Admin dashboard integration",
        "Reduced attendance time by 80%"
      ],
      accentColor: "#2b00fe"
    },
    {
      title: "PickMyCareer Predictor Tool",
      category: "EdTech",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "AI-driven platform helping students find best colleges based on cutoff scores and academic performance.",
      year: "2022",
      features: [
        "Personalized recommendations",
        "10,000+ students assisted",
        "30% better student-institution matches"
      ],
      accentColor: "#6e00ff"
    },
    {
      title: "AI Quality Control System",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Computer vision solution for real-time defect detection in manufacturing processes.",
      year: "2023",
      features: [
        "40% reduction in defects",
        "50% faster inspections",
        "Predictive maintenance"
      ],
      accentColor: "#00c2ff"
    },
    {
      title: "Healthcare Diagnostic Assistant",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "AI system supporting clinical decision-making through medical image analysis.",
      year: "2022",
      features: [
        "95% diagnostic accuracy",
        "Reduced analysis time by 70%",
        "Integrated with hospital systems"
      ],
      accentColor: "#00ff88"
    }
  ];

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectRefs.current.forEach((el, i) => {
      if (el) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out"
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05001a] relative">
      {/* Dark square grid background */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0 bg-[#05001a]"></div>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#2b00fe_1px,transparent_1px),linear-gradient(to_right,#2b00fe_1px,transparent_1px)] [background-size:30px_30px]"></div>
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeading
            overline="Our Work"
            title="Featured Projects"
            description="Explore our groundbreaking AI solutions that are transforming industries and creating real impact."
            className="text-center"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                ref={el => projectRefs.current[index] = el}
                className="relative group overflow-hidden rounded-xl"
              >
                {/* Project card */}
                <div className="relative h-full bg-[#0a0022]/90 border border-[#2b00fe]/20 rounded-xl p-6 transition-all duration-500 group-hover:bg-[#0a0022] group-hover:border-[#2b00fe]/50 group-hover:shadow-[0_0_30px_#2b00fe/30]">
                  <div className="h-48 overflow-hidden rounded-lg relative mb-6 border border-[#2b00fe]/20 group-hover:border-[#2b00fe]/40 transition-all duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0022] via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-4 left-4">
                      <span 
                        className="bg-[#2b00fe]/30 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-white transition-all duration-300 group-hover:bg-[#2b00fe]/50"
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#5ddcff] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#5ddcff] mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li 
                          key={i} 
                          className="flex items-start text-white/80 group-hover:text-white transition-colors duration-300"
                        >
                          <div 
                            className="flex-shrink-0 w-4 h-4 mt-0.5 mr-2 rounded-full transition-all duration-300 group-hover:scale-110"
                            style={{ backgroundColor: project.accentColor }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>          
                  <a 
                    href="#" 
                    className="inline-flex items-center px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_var(--accent-color)]"
                    style={{
                      '--accent-color': project.accentColor,
                      background: `linear-gradient(90deg, ${project.accentColor} 0%, ${project.accentColor}80 100%)`,
                      boxShadow: `0 0 15px ${project.accentColor}30`
                    }}
                  >
                    View Case Study
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;