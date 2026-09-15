import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setMessage('Message sent successfully!');
      form.current.reset();
      setIsLoading(false);
    }, () => {
      setMessage('Failed to send message. Please try again.');
      setIsLoading(false);
    });
  };

  return (
    <section id="contact" className="bg-canvas px-4 py-16 sm:px-6 sm:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-500">
            Contact
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
            Get in touch
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Have a project in mind or want to talk about an opportunity? Send me a message and I&apos;ll get back to you soon.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="rounded-2xl border border-soft-border bg-milky-white p-6 sm:p-8">
            <h3 className="mb-3 text-2xl font-medium text-ink sm:text-3xl">
              Let&apos;s connect
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-muted sm:text-base">
              I&apos;m open to discussing new projects, collaborations, and opportunities where I can build useful digital experiences.
            </p>

            <div className="space-y-5 text-sm sm:text-base">
              <a
                href="mailto:hannahhbusto@gmail.com"
                className="flex items-center gap-4 text-muted transition-colors hover:text-primary-700"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <SiGmail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>hannahhbusto@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hannah-aurora-busto-1a16502aa/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted transition-colors hover:text-primary-700"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 font-semibold text-primary-700">
                  <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/forborealis"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted transition-colors hover:text-primary-700"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 font-semibold text-primary-700">
                  <FaGithub className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>github.com/forborealis</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-soft-border bg-milky-white p-6 shadow-sm sm:p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="user_name"
                    required
                    className="w-full rounded-xl border border-soft-border bg-canvas px-4 py-3 text-ink placeholder-muted/70 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-ink">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="user_phone"
                    className="w-full rounded-xl border border-soft-border bg-canvas px-4 py-3 text-ink placeholder-muted/70 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  required
                  className="w-full rounded-xl border border-soft-border bg-canvas px-4 py-3 text-ink placeholder-muted/70 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border border-soft-border bg-canvas px-4 py-3 text-ink placeholder-muted/70 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex rounded-full bg-pink px-7 py-3.5 font-medium text-ink transition-colors hover:bg-pink-hover disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Send message'}
                <span className="ml-2" aria-hidden="true">↗</span>
              </button>

              {message && (
                <p className={`text-sm ${message.includes('successfully') ? 'text-primary-700' : 'text-red-700'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
