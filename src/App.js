import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Aniruddha Patil</h1>
        <p className="text-xl md:text-2xl mb-6">Implementation Consultant @ Siemens | Teamcenter PLM Expert</p>
        <div className="flex gap-4">
          <a href="mailto:youremail@example.com" className="hover:text-gray-300"><Mail /></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-gray-300"><Linkedin /></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-gray-300"><Github /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m a tech-savvy professional with 4 years of experience in Teamcenter PLM. I specialize in delivering robust PLM solutions and enjoy solving real-world industry problems with digital tools. Currently working at Siemens Digital Industries Software, Pune.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-16 px-4 shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-lg">
            <span className="bg-blue-100 p-2 rounded">Teamcenter</span>
            <span className="bg-blue-100 p-2 rounded">Active Workspace</span>
            <span className="bg-blue-100 p-2 rounded">Java / ITK</span>
            <span className="bg-blue-100 p-2 rounded">BMIDE</span>
            <span className="bg-blue-100 p-2 rounded">Linux</span>
            <span className="bg-blue-100 p-2 rounded">SQL</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Implementation Consultant - Siemens (2019 - Present)</h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Supporting customers in Teamcenter PLM deployments</li>
            <li>Worked across multiple modules including Change Management, Workflow, AWC, BMIDE</li>
            <li>Focused on customer success and delivering production-ready solutions</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-lg">B.E. in [Your Branch], [Your College Name], [Year]</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">Open to freelance, full-time, or remote roles globally.</p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © {new Date().getFullYear()} Aniruddha Patil. All rights reserved.
      </footer>
    </div>
  );
}
