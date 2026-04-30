import "./App.css";
import resume from "./assets/Ariel Trejo Resume Final Version.pdf";
import Navbar from "./navbar";
import Home from "./home";
import About from "./aboutme";
import Work from "./work";
import Publication from "./publication";
import Hobbies from "./hobbies";

export default function App() {
  return (
    <div className="page">
      {/* Navbar */}
      <Navbar />

      {/* Home Section, contains my name and picture */}
      <Home />

      {/* About Me Section, contains an intro and description of me */}
      <About />

      {/* Work Experience Section, contains all my projects! */}
      <Work />

      {/*Publications, contains my one publications + the one I helped my wife with */ }
      <Publication />

      {/* Hobbies, showcase all the games I have created */}
      <Hobbies />

      {/* Footer [This will have my info and allow you to go to top] */}
      <footer className="w-full py-8 flex flex-col items-center gap-4 border-t border-gray-400/30 text-center">
        <a 
          href={resume} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#6F8F72] font-bold hover:text-blue-600 transition-colors"
        >
          View My Resume
        </a>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm text-white-700 hover:text-[#F2A65A] font-semibold transition-colors cursor-pointer"
        >
          ↑ Back to Top
        </button>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Ariel Trejo 
        </p>
      </footer>

    </div>
  );
}