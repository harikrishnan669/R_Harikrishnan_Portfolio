import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, FileText, ArrowUpRight } from 'lucide-react';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'rharikrishnan2020@gmail.com';
  const directPhone = '9656990468';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    onShowToast('Direct Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast('Message sent successfully! Thank you for reaching out.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#000000] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">

          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                GET IN TOUCH
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Contact <span className="text-[#65D9ff]">Me</span>.
              </h2>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Looking forward to work on various projects. Feel free to reach out via email, phone, or send a direct message.
            </p>

            {/* Direct Email */}
            <div className="p-5 rounded-2xl bg-[#121215] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-xl bg-[#18181c] flex items-center justify-center text-white shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">EMAIL</div>
                  <a href={`mailto:${directEmail}`} className="font-mono text-xs font-bold text-white hover:underline truncate">
                    {directEmail}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-[#1c1c20] border border-white/10 text-zinc-300 hover:text-white text-xs font-mono shrink-0 flex items-center gap-1"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Direct Phone */}
            <div className="p-5 rounded-2xl bg-[#121215] border border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#18181c] flex items-center justify-center text-white shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase">PHONE / WHATSAPP</div>
                <a href={`tel:+91${directPhone}`} className="font-mono text-xs font-bold text-white hover:underline">
                  +91 {directPhone}
                </a>
              </div>
            </div>

            {/* Resume CTA */}
            <a
              href="https://www.papermark.com/view/cmmyerx2a000dk004k6qu7ing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#121215] border border-white/15 text-white font-mono text-xs font-bold flex items-center justify-between hover:border-white transition-all"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>VIEW RESUME ON PAPERMARK</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>

            {/* Social Icons Bar */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                SOCIAL PROFILES
              </span>

              <div className="grid grid-cols-3 gap-2">
                <a href="https://wa.me/9656990468" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-[#121215] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5">
                  <i className="fa-brands fa-whatsapp text-sm" /> WhatsApp
                </a>
                <a href="https://www.linkedin.com/in/hari2k4/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-[#121215] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5">
                  <i className="fa-brands fa-linkedin text-sm" /> LinkedIn
                </a>
                <a href="https://github.com/harikrishnan669" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-[#121215] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5">
                  <i className="fa-brands fa-github text-sm" /> GitHub
                </a>
                <a href="https://x.com/hari_2k4" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-[#121215] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5">
                  <i className="fa-brands fa-x-twitter text-sm" /> Twitter / X
                </a>
                <a href="https://www.instagram.com/hari_2k4/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-[#121215] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5">
                  <i className="fa-brands fa-instagram text-sm" /> Instagram
                </a>
                <a href="https://www.behance.net/11er" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-[#121215] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-1.5">
                  <i className="fa-brands fa-behance text-sm" /> Behance
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="human-card rounded-2xl p-6 sm:p-8 flex flex-col gap-4 border-white/15"
            >
              <h3 className="font-display text-xl font-bold text-white border-b border-white/10 pb-3">
                Send Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-zinc-300">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="p-3 rounded-xl bg-[#141416] border border-white/10 text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-zinc-300">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@gmail.com"
                    className="p-3 rounded-xl bg-[#141416] border border-white/10 text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-zinc-300">Phone Number</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="p-3 rounded-xl bg-[#141416] border border-white/10 text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-zinc-300">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject"
                    className="p-3 rounded-xl bg-[#141416] border border-white/10 text-white text-sm focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-zinc-300">Your Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  className="p-3 rounded-xl bg-[#141416] border border-white/10 text-white text-sm focus:outline-none focus:border-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-human-primary w-full py-3.5 rounded-xl text-xs font-bold tracking-wider flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Google Map Box */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-64 w-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.391789073542!2d76.95564317449387!3d8.461226997619063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb220129005d%3A0xf53f322385db5901!2sSree%20Hari%2C%20Bhagavathi%20Temple%2C%20KRA%2050%2C%20near%20Konchiravila%2C%20Manacadu%20P%20O%2C%20Konchiravila%2C%20Kallattumukku%2C%20Thiruvananthapuram%2C%20Kerala%20695009!5e0!3m2!1sen!2sin!4v1745928430675!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>

      </div>
    </section>
  );
}
