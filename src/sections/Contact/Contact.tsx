"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sparkles, Phone, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import BlurText from "@/components/ui/blurText";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <p
        className="text-xl text-teal-700 border-b-2 text-center w-40 pb-2 mb-4 mx-auto"
        data-aos="fade-down"
      >
        Contact
      </p>
      {/* <h1
        className="text-3xl mb-10 sm:text-4xl font-bold text-black text-center py-4"
        data-aos="fade-up"
      >
        Get <span className="text-teal-600">In Touch</span>
      </h1> */}
      <div className="flex items-center justify-center text-center gap-3 mb-4 md:mb-6">
        <Sparkles className="text-purple-500" size={32} />
        <BlurText
          text="Contact Me"
          delay={300}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-4xl text-gray-800 font-bold"
        />
        <Sparkles className="text-purple-500" size={32} />
      </div>


      <div className="mt-10 container mx-auto p-6 md:p-10 ">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          data-aos="fade-up"
        >
          {/* LEFT SIDE */}
          <div className="space-y-5" data-aos="fade-right">

            {/* Profile Card */}
            <div className="bg-white shadow-sm dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md rounded-2xl overflow-hidden">
              {/* Banner */}
              <div className="h-24 bg-gray-900 relative">
                <div className="absolute -bottom-10 left-6">
                  <div className="w-20 h-20 rounded-full ring-4 ring-white dark:ring-gray-900 overflow-hidden shadow-lg">
                    <img
                      src="https://i.ibb.co.com/GQhkTh80/sk8-24-at-09-22-28-1cea5aae.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="pt-12 pb-5 px-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Md. Sakib Khan Noyon
                </h2>
                <p className="text-teal-600 dark:text-teal-400 text-sm font-medium mt-0.5">
                  FullStack Web Developer
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                  Feel free to reach out for opportunities, collaborations, or just to say hi!
                </p>

                {/* Social links */}
                <div className="flex gap-2 mt-4">
                  {[
                    { href: "https://github.com", icon: Github },
                    { href: "https://linkedin.com", icon: Linkedin },
                    { href: "https://twitter.com", icon: Twitter },
                  ].map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-500/20 hover:text-teal-600 transition"
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(+880) 1727487419",
                  href: "tel:+8801727487419",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "web.shakib09@gmail.com",
                  href: "mailto:web.shakib09@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Sylhet, Bangladesh",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 bg-white shadow-sm dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md px-4 py-3 rounded-xl hover:border-teal-300/50 transition"
                  data-aos="fade-right"
                >
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-gray-900 text-white rounded-lg">
                    <item.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-gray-800 dark:text-gray-100 hover:text-teal-600 transition truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-800 dark:text-gray-100">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* RIGHT SIDE — Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm space-y-5"
            data-aos="fade-left"
          >
            {/* Header */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                Get in touch
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-gray-900 dark:text-gray-400 uppercase tracking-wide"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Md. Shakib"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 w-full transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-gray-900 dark:text-gray-400 uppercase tracking-wide"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="shakib@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 w-full transition"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-xs font-medium text-gray-900 dark:text-gray-400 uppercase tracking-wide"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 w-full transition"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-gray-900 dark:text-gray-400 uppercase tracking-wide"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={1000}
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 w-full resize-none transition"
              />
              <p className="text-right text-xs text-gray-400">
                {formData.message.length} / 1000
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 active:scale-[0.98] text-white text-sm font-medium px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send message
            </button>
          </form>


        </div>
        {/* Map */}
        <div className="rounded-2xl mt-4 overflow-hidden border border-white/40 dark:border-white/10 h-64 md:h-90 w-full">
          <iframe
            title="Sylhet, Bangladesh"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57648.30661042837!2d91.8277!3d24.8949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750541b5a4f1537%3A0x50fb7ede45f25d4!2sSylhet!5e0!3m2!1sen!2sbd!4v1680000000000"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div >



    </section >
  );
};

export default Contact;
