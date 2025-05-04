import { SectionHeading } from '../ui/section-heading';

export const ExpertiseServices = () => {
  return (
    <section id="expertise" className="py-24 relative">
      <div className="container">
        <SectionHeading
          title="Expertise Services"
          align="center"
          description="Our technical board comprises experts from diverse fields, bringing together specialized knowledge to drive innovation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Product Development */}
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-fade-up">
            <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Product Development</h3>
            <p className="text-white/70 text-sm">
              Experts in microbial ecosystems and food safety systems for space applications.
            </p>
          </div>

          {/* Software Development */}
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Software Development</h3>
            <p className="text-white/70 text-sm">
              Specialists in spacecraft systems design and orbital mechanics simulations.
            </p>
          </div>

          {/* Web Development */}
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-white/70 text-sm">
              Advanced electronic control systems for space-grade web applications.
            </p>
          </div>

          {/* App Development */}
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">App Development</h3>
            <p className="text-white/70 text-sm">
              Mobile solutions for monitoring plant growth in extreme environments.
            </p>
          </div>

          {/* Generative AI */}
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-fade-up">
            <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Generative AI</h3>
            <p className="text-white/70 text-sm">
              AI-driven solutions for microbial ecosystem modeling and simulation.
            </p>
          </div>

          {/* AI & ML */}
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI & ML</h3>
            <p className="text-white/70 text-sm">
              Machine learning models for spacecraft trajectory optimization.
            </p>
          </div>

          {/* Deep Learning */}
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
            <p className="text-white/70 text-sm">
              Neural networks for advanced space system control algorithms.
            </p>
          </div>

          {/* Project Development */}
          <div className="glass-card p-6 rounded-xl border border-white/10 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Project Development</h3>
            <p className="text-white/70 text-sm">
              End-to-end solutions for sustainable space agriculture projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};