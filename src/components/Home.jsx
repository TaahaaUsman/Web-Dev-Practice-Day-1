import React from "react";

const Home = () => {
  return (
    <div>
      <section
        id="hero"
        className="h-[100vh] bg-gradient-to-r from-blue-600 to-blue-400 flex items-center pt-20"
      >
        <div className="max-w-5xl mx-auto text-white px-4">
          <h2 className="text-6xl font-bold mb-6">Welcome to MyBrand</h2>
          <p className="text-2xl mb-8 max-w-2xl leading-relaxed">
            This hero section is intentionally designed to cover two full
            screens, creating a bold and immersive first impression.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-200">
            Explore More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
