import { useState } from 'react';
import { SectionHeading } from '../ui/section-heading';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <SectionHeading
          overline="Get In Touch"
          title="Contact Us"
          description="Have questions or want to collaborate? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info Section (Moved Up) */}
          <div className="glass-card p-8 animate-fade-up">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Get In Touch</h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mr-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className="text-white/70">+91 93618 60665</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mr-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-white/70">infodiffuseai@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-stellar-blue/10 flex items-center justify-center text-stellar-blue mr-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8.5 8.5l7 7M16.5 8.5c-2.5 0-7 4.5-7 7m0-7v7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">WhatsApp</h4>
                  <p className="text-white/70">
                    <a href="https://wa.me/919361860665" target="_blank" rel="noopener noreferrer" className="hover:text-stellar-blue transition-colors">
                      +91 93618 60665
                    </a>
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="pt-6">
                <h4 className="text-lg font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://x.com/i/flow/login?redirect_after_login=%2FDiffuseAi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-stellar-blue/10 hover:bg-stellar-blue/20 flex items-center justify-center text-stellar-blue transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section (Moved Down) */}
          <div className="glass-card p-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Send Us a Message</h3>

            {isSubmitted ? (
              <div className="bg-stellar-blue/10 border border-stellar-blue/30 text-white p-4 rounded-lg animate-fade-in">
                <h4 className="text-lg font-medium mb-2">Thank You!</h4>
                <p>Your message has been sent successfully. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="Business Inquiry">Business Inquiry</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Technology Question">Technology Question</option>
                      <option value="General Information">General Information</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white resize-none"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-stellar-blue hover:bg-stellar-blue/90 text-white font-medium transition-all stellar-shadow"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
