import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="h-[100vh] py-24 bg-white flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12">About Us</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            This is a long, spacious About section designed to fill two full
            pages. You can add images, animations, timelines, or company
            achievements here. The goal is to give enough scrolling experience
            while maintaining a clean design.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
