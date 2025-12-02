import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-12 mt-0">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white">MyBrand</h3>
            <p className="text-gray-400 text-lg">
              Building modern, responsive, and smooth digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="#hero" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 text-white">Contact</h4>
            <p className="text-gray-400 text-lg">Email: support@mybrand.com</p>
            <p className="text-gray-400 text-lg">Phone: +123 456 7890</p>
            <p className="text-gray-400 text-lg">Location: Pakistan</p>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-10 text-lg">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
