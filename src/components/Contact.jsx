import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="min-h-screen py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
          <form className="max-w-xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
