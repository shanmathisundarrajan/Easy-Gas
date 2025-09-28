import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface AboutUsProps {
  setActiveSection: Dispatch<SetStateAction<string>>;
}

export default function AboutUs({ setActiveSection }: AboutUsProps) {
  return (
    <motion.section
      key="about"
      className="section w-full px-6 py-16 bg-gradient-to-b from-gray-50 to-white text-gray-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header / Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16 about-header bg-gradient-to-r from-blue-900 to-blue-700 text-white p-12 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">SRI DURGA GASES</h1>
        <p className="text-lg max-w-3xl mx-auto">
          At <strong>Sri Durga Agencies</strong>, we are committed to delivering
          safe, reliable, and efficient gas services to every home and industry.
          With years of experience, our goal is to combine modern technology with
          customer-first service.
        </p>
      </div>

      {/* Mission / Vision / Values Cards */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 mb-12 about-cards">
        <div className="about-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform">
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p>To provide safe, efficient, and affordable gas delivery solutions that improve everyday life.</p>
        </div>
        <div className="about-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform">
          <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
          <p>To become a leading energy provider trusted for reliability, sustainability, and innovation.</p>
        </div>
        <div className="about-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform">
          <h3 className="text-2xl font-bold mb-3">Our Values</h3>
          <p>Safety, customer satisfaction, transparency, and responsibility are at the heart of everything we do.</p>
        </div>
      </div>

      {/* 🔹 Services Button (after values) */}
      <div className="flex justify-center mb-16">
        <button
          onClick={() => setActiveSection("services")}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Explore Our Services
        </button>
      </div>

      {/* Address & Map */}
      <div className="max-w-5xl mx-auto bg-gray-100 shadow rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-4">Address</h2>
        <p className="mb-2">
          NO-174/176, Poonamallee Avadi Main Road,
          <br />
          Veeraragavapuram, Chennai – 600077
        </p>
        <a
          href="https://maps.app.goo.gl/rzenhAU6K7NdPb5RA?g_st=ipc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          📍 View on Google Maps
        </a>
      </div>

      {/* Available Gases */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Available Gases</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {["Industrial Gases", "Oxygen", "DA", "Nitrogen", "Argon", "CO₂", "ACM"].map(
            (gas) => (
              <div
                key={gas}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-lg font-medium hover:shadow transition"
              >
                {gas}
              </div>
            )
          )}
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="team-grid flex flex-wrap justify-center gap-8">
          <div className="team-member bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform w-56">
            <img
              src="https://via.placeholder.com/220x180"
              alt="Ravi Kumar"
              className="rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2 text-blue-800">Ravi Kumar</h4>
            <p>Founder & Director</p>
          </div>
          <div className="team-member bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform w-56">
            <img
              src="https://via.placeholder.com/220x180"
              alt="Anita Sharma"
              className="rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2 text-blue-800">Anita Sharma</h4>
            <p>Customer Support Head</p>
          </div>
          <div className="team-member bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform w-56">
            <img
              src="https://via.placeholder.com/220x180"
              alt="Manoj Verma"
              className="rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2 text-blue-800">Manoj Verma</h4>
            <p>Delivery Manager</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-5xl mx-auto bg-gray-100 shadow rounded-xl p-8 mb-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Numbers</h2>
        <p className="text-gray-600 mb-6">
          Reach out to us for quotations, delivery schedules, or emergency gas supply. Our team is ready to assist you 24/7.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 text-blue-700 text-lg font-semibold">
          <a href="tel:9328207173" className="hover:underline">📞 93282 07173</a>
          <a href="tel:7358629193" className="hover:underline">📞 73586 29193</a>
          <a href="tel:9840519011" className="hover:underline">📞 98405 19011</a>
        </div>
      </div>

      {/* 🔹 Contact Us Button (after contact details) */}
      <div className="flex justify-center">
        <button
          onClick={() => setActiveSection("contact")}
          className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Contact Us
        </button>
      </div>
    </motion.section>
  );
}
