import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-sky-50 to-blue-100 text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-700 to-indigo-800 text-white flex flex-col items-center justify-center p-6 text-center">
        <motion.img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Aniruddha Kamble"
          className="w-52 h-64 rounded-full mb-6 border-4 border-white shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aniruddha Kamble
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6 whitespace-nowrap"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Implementation Consultant @ Siemens DISW | Teamcenter PLM Expert
        </motion.p>
        <motion.div
          className="flex gap-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="mailto:aniruddhakamble88@gmail.com" className="hover:text-gray-300"><Mail /></a>
          <a href="https://www.linkedin.com/in/aniruddha-kamble-3a9975153" target="_blank" rel="noreferrer" className="hover:text-gray-300"><Linkedin /></a>
          <a href="https://github.com/Aniruddha6661" target="_blank" rel="noreferrer" className="hover:text-gray-300"><Github /></a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-800">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I’m a tech-savvy professional with 4 years of experience in Teamcenter PLM. I specialize in delivering robust PLM solutions and enjoy solving real-world industry problems with digital tools. Currently working at Siemens Digital Industries Software, Pune.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-100 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-blue-800">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
            {['Teamcenter', 'Active Workspace', 'Java / ITK', 'BMIDE', 'Linux', 'SQL'].map(skill => (
              <motion.span
                key={skill}
                className="bg-white rounded-xl px-4 py-2 shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Implementation Consultant - Siemens DISW (2022 - Present)</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Supporting customers in Teamcenter PLM deployments</li>
                <li>Worked across modules like Change Management, Workflow, AWC, BMIDE</li>
                <li>Focused on customer success and delivering production-ready solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Education</h2>
          <p className="text-lg text-gray-700">B.E. in Mechanical, KIT Kolhapur, 2020</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6">Open to full-time onsite or remote roles globally.</p>
        <p className="text-lg text-gray-700 mb-6">
        </p>
        <p className="flex justify-center gap-4">
          <a
            href="mailto:aniruddhakamble88@gmail.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Email Me
          </a>
          <a
            href="tel:+918554852769"
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
          >
            Call Me
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-6">
        © {new Date().getFullYear()} Aniruddha Kamble. All rights reserved.
      </footer>
    </div>
  );
}