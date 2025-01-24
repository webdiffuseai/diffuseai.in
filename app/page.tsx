'use client';

import { Bot, Construction, Mail, Share2 } from 'lucide-react';
import { useState } from 'react';
import { BackgroundDots } from '@/components/background-dots';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email subscription
    setEmail('');
    alert('Thank you for your interest! We\'ll notify you when we launch.');
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background via-background to-background/50 overflow-hidden">
      <BackgroundDots />
      
      <div className="relative container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <Bot className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              DiffuseAI Solutions
            </h1>
          </div>

          {/* Construction Icon */}
          <div className="relative">
            <Construction className="h-24 w-24 text-primary opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium text-primary bg-background/80 px-3 py-1 rounded-full border border-primary/20">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-2xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Something Amazing Is in the Works
            </h2>
            <p className="text-lg text-muted-foreground">
              We're building the next generation of AI solutions to transform the way
              businesses operate. Our platform will bring cutting-edge artificial
              intelligence technology to your fingertips.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/10 shadow-lg transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-3">Advanced AI Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate AI capabilities into your existing workflows
                </p>
              </div>
              <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/10 shadow-lg transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-3">Smart Automation</h3>
                <p className="text-muted-foreground">
                  Automate complex processes with intelligent decision-making
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-12 p-8 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/10 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Stay Updated
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-background/50 backdrop-blur-sm focus:border-primary/50 transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary/90 text-primary-foreground rounded-lg hover:bg-primary transition-colors backdrop-blur-sm"
                >
                  Notify Me
                </button>
              </form>
            </div>

            {/* Contact Section */}
            <div className="flex justify-center space-x-6 mt-12">
              <a
                href="mailto:infodiffuseai@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Contact Us</span>
              </a>
              <a
                href="#share"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}