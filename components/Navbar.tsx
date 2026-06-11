export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
  
          <h1 className="text-yellow-500 font-bold text-2xl">
            SAIDOV
          </h1>
  
          <div className="flex gap-8 text-white">
  
            <a
              href="#about"
              className="hover:text-yellow-500 transition"
            >
              About
            </a>
  
            <a
              href="#skills"
              className="hover:text-yellow-500 transition"
            >
              Skills
            </a>
  
            <a
              href="#projects"
              className="hover:text-yellow-500 transition"
            >
              Projects
            </a>
  
            <a
              href="#experience"
              className="hover:text-yellow-500 transition"
            >
              Experience
            </a>
  
            <a
              href="#contact"
              className="hover:text-yellow-500 transition"
            >
              Contact
            </a>
  
          </div>
        </div>
      </nav>
    );
  }