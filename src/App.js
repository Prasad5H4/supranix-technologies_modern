import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-sans">
      <nav className="flex justify-between items-center p-6 bg-white bg-opacity-10 backdrop-blur-md shadow-md">
        <h1 className="text-3xl font-bold tracking-wide">Supranix Technologies</h1>
        <ul className="flex space-x-6 text-lg font-medium">
          <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </nav>

      <header className="text-center py-20 px-5">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Empowering Your Digital Presence</h2>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          We build fast, beautiful, and scalable web solutions tailored for modern businesses.
        </p>
        <button className="mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
          Get Started
        </button>
      </header>

      <section id="services" className="py-16 bg-white text-black px-6">
        <h3 className="text-4xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Web Development</h4>
            <p>Responsive and high-performing websites using the latest technologies.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Technology Consulting & Digital Transformation</h4>
            <p>Empowering businesses to lead the digital era.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Custom Sofware Development</h4>
            <p>Turning innovative ideas into powerful solutions.SEO, analytics, and strategy to expand your online visibility.</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-gradient-to-tr from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">About Us</h3>
          <p className="text-lg">
            Supranix Technologies is dedicated to delivering top-notch web experiences.
            We partner with businesses to elevate their online presence through creative design and scalable solutions.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-white text-black">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-6">Contact Us</h3>
          <form action="https://formspree.io/f/mbloldwg"  // Replace with your real ID
              method="POST"
              className="grid gap-4">
  <input type="text" name="name" placeholder="Your Name" className="p-3 rounded border" required />
  <input type="email" name="email" placeholder="Your Email" className="p-3 rounded border" required />
  <textarea name="message" placeholder="Your Message" className="p-3 rounded border h-32" required></textarea>
  <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded font-bold hover:bg-indigo-500">
    Send Message
  </button>
</form>

        </div>
      </section>

      <footer className="text-center py-6 bg-black text-white text-sm">
        &copy; 2025 Supranix Technologies. All rights reserved.
      </footer>
    </div>
  );
}

export default App;