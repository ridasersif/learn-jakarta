import { Mail, Phone, Linkedin, Github, Globe } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111110] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#f31500" }}>
              Rida Sersif
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Hi, I'm Rida Sersif. I love working with Java, Jakarta EE, Angular, and Spring. I build modern web applications and enjoy learning new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#f98200" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-[#f31500] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-[#f31500] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-[#f31500] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-[#f31500] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#f98200" }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" style={{ color: "#f31500" }} />
                <a href="mailto:ridasersif1@gmail.com" className="hover:text-[#f31500] transition-colors">
                  ridasersif1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" style={{ color: "#f31500" }} />
                <span>+212 650 052 037</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/rida-sersif-721497330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f31500] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/ridasersif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f31500] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://sersif-rida.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f31500] transition-colors"
                  aria-label="Portfolio"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Rida Sersif. All rights reserved. Built for educational purposes.</p>
        </div>
      </div>
    </footer>
  )
}
