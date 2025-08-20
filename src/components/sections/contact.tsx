import { useState } from 'react';
import { SectionHeading } from '../ui/section-heading';
import Aurora from '../effects/Aurora';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container max-w-[1260px] mx-auto relative z-10">
        {/* Flex Row: Info left, Form right */}
        <div className="flex flex-col lg:flex-row gap-5 max-w-[1220px] mx-auto px-4">

          {/* Left: Info Box */}
<div className="w-full lg:w-1/2">
  <div className="p-8 rounded-xl shadow-xl bg-gradient-to-br from-[#2b00ff] via-[#000] to-[#000] text-white border-2 border-[#2b00ff]/70 backdrop-blur-md h-full flex flex-col justify-center">
    
    {/* Increased title font size */}
    <h1 className="text-3xl lg:text-8xl font-bold mb-4 text-white">Let’s Connect</h1>

    {/* Slightly increased paragraph font size */}
    <p className="text-white/80 text-base lg:text-5xl mb-4">
      Have questions, ideas, or want to work together? We're just a message away.
    </p>

              <ul className="text-white/70 space-y-2 mb-6">
                <li>✉ Email: <a href="mailto:contact@yourmail.com" className="text-[#2b00ff] hover:underline">contact@yourmail.com</a></li>
                <li>🗺 Location: Tamil Nadu, India</li>
              </ul>

              <div className="flex gap-4 text-[#2b00ff]">
                <a href="#"><i className="fa fa-instagram text-xl hover:text-white"></i></a>
                <a href="#"><i className="fa fa-linkedin text-xl hover:text-white"></i></a>
                <a href="#"><i className="fa fa-github text-xl hover:text-white"></i></a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2">
            <div className="p-8 z-40 relative w-full rounded-2xl shadow-xl bg-gradient-to-br from-[#000] via-[#00017b] to-black text-white backdrop-blur-md shadow-[0_0_30px_rgba(43,0,255,0.4)]">
              <h3 className="text-center text-2xl font-semibold mb-6">Send Us a Message</h3>

              {isSubmitted ? (
                <div className="bg-stellar-blue/10 border border-stellar-blue/30 text-white p-4 rounded-lg animate-fade-in">
                  <h4 className="text-lg font-medium mb-2">Thank You!</h4>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-white mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/10 text-white border border-black/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/90 text-black border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-stellar-blue"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-white mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/90 text-black border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-stellar-blue"
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/90 text-black border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-stellar-blue"
                        placeholder="Your message..."
                      ></textarea>
                    </div>

                    <div className="flex justify-center mt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#2b00fe] text-white px-6 py-2 rounded-md hover:bg-[#2b00fe]/80 transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};