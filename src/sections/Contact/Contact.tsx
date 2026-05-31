"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sparkles } from "lucide-react";
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


      <div
        className="max-w-11/12 md:max-w-11/14 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        data-aos="fade-up"
      >
        <div
          className="bg-white text-black rounded-2xl p-4 md:p-6 sm:p-8 shadow-lg"
          data-aos="fade-right"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white mb-4">
              <img
                src="https://i.ibb.co.com/GQhkTh80/sk8-24-at-09-22-28-1cea5aae.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold">Md. Sakib Khan Noyon</h2>
            <p className="text-teal-600 font-semibold">FullStack Web Developer</p>
            <p className="text-gray-500 text-sm mt-3">
              Feel free to reach out for opportunities, collaborations, or just
              to say hi!
            </p>

            <div className="mt-6 w-full space-y-4">
              <div
                className="flex items-center bg-gray-100 px-4 py-3 rounded-lg transition-colors duration-700 ease-in-out hover:bg-teal-50"
                data-aos="fade-right"
              >
                <div className="bg-teal-500 p-2 rounded-lg mr-4 text-white text-xl">📞</div>
                <div className="text-left">
                  <p className="text-xs text-gray-600">Phone</p>
                  <p>(+880) 1727487419</p>
                </div>
              </div>

              <div
                className="flex items-center bg-gray-100 px-4 py-3 rounded-lg transition-colors duration-700 ease-in-out hover:bg-teal-50"
                data-aos="fade-right"
              >
                <div className="bg-teal-500 p-2 rounded-lg mr-4 text-white text-xl">📧</div>
                <div className="text-left">
                  <p className="text-xs text-gray-600">Email</p>
                  <p>web.shakib09@gmail.com</p>
                </div>
              </div>

              <div
                className="flex items-center bg-gray-100 px-4 py-3 rounded-lg transition-colors duration-700 ease-in-out hover:bg-teal-50"
                data-aos="fade-right"
              >
                <div className="bg-teal-500 p-2 rounded-lg mr-4 text-white text-xl">📍</div>
                <div className="text-left">
                  <p className="text-xs text-gray-600">Location</p>
                  <p>Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-black rounded-2xl p-4 md:p-6 sm:p-8 shadow-lg space-y-6"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold">Send Me A Message</h2>
          <p className="text-sm text-gray-400">
            Have a project in mind? Fill out the form below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 w-full"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
          />

          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={1000}
              className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
            ></textarea>
            <p className="text-right text-xs text-gray-500 mt-1">
              {formData.message.length}/1000 characters
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 cursor-pointer px-4 py-2 rounded shadow text-white font-semibold transition"
          >
            Send Message &nbsp; ➤
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
