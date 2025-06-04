import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMusic,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentSpotifyEmbed =
    "https://open.spotify.com/embed/track/003vvx7Niy0yvhvHt4a68B?utm_source=generator";
  const currentQuote = "What you seek is seeking you.";

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Kerry Zhang
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Passionate about developing software, building real-world
                solutions, and learning new things.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/kerry-zhang-ee"
                className="group bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="https://github.com/kerryz12"
                className="group bg-gray-800 hover:bg-purple-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="mailto:kerryzhang12@gmail.com"
                className="group bg-gray-800 hover:bg-sky-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Send Email"
              >
                <FaEnvelope className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-200">Quick Links</h4>
              <div className="space-y-2">
                <div>
                  <a
                    href="#about"
                    className="inline-block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About
                  </a>
                </div>
                <div>
                  <a
                    href="#projects"
                    className="inline-block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Projects
                  </a>
                </div>
                <div>
                  <a
                    href="#skills"
                    className="inline-block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Skills
                  </a>
                </div>
                <div>
                  <a
                    href="/Kerry_Zhang_Resume.pdf"
                    target="_blank"
                    className="inline-block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600 hover:border-blue-400 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-full mr-3">
                  <FaMusic className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Now Playing
                  </h4>
                </div>
              </div>
              <div className="spotify-embed-container">
                <iframe
                  src={currentSpotifyEmbed}
                  width="100%"
                  height="152"
                  allow="encrypted-media"
                  className="rounded-lg"
                  title="Spotify Player"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mb-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Kerry Zhang
          </p>
          <div className="flex items-center space-x-1.5 text-gray-400">
            "{currentQuote}"
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
