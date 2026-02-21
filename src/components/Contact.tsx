import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission — integrate with email service later
    const mailtoLink = `mailto:lapinig@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoLink);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative py-24 bg-dark ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono font-medium border border-cyan/20 text-cyan bg-cyan/5 mb-5">
            <MessageSquare size={14} />
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Let's Work <span className="cyan-glow">Together</span>
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'john6lapinig@gmail.com',
                href: 'mailto:lapinig@example.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+63 949 947 0809',
                href: 'tel:+639499470809',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Philippines',
                href: '#',
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-dark-light/50 border border-slate-800 hover:border-cyan/20 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan/10 text-cyan group-hover:bg-cyan/15 transition-colors shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-light/50 border border-slate-800 text-white placeholder-slate-600 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/50 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-light/50 border border-slate-800 text-white placeholder-slate-600 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/50 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-light/50 border border-slate-800 text-white placeholder-slate-600 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/50 transition-all"
                placeholder="Project Collaboration"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Message</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-light/50 border border-slate-800 text-white placeholder-slate-600 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/50 transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-cyan text-dark font-semibold hover:shadow-xl hover:shadow-cyan/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
