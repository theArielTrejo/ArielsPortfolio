import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#6F8F72] backdrop-blur border-b border-white/10 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between">

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 text-white">
          <a className="group relative inline-block text-md font-semibold text-[white] [-webkit-text-stroke:0.1px_black]" href="#home">
            <span className="absolute inset-0 border border-[#F2A65A]"></span>
            <span className="block border border-[#E8E2D8] bg-[#6F8F72] px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                About Me
            </span>
          </a>

          <a className="group relative inline-block text-md font-semibold text-[white] [-webkit-text-stroke:0.1px_black]" href="#work">
            <span className="absolute inset-0 border border-[#F2A65A]"></span>
            <span className="block border border-[#E8E2D8] bg-[#6F8F72] px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                Work Experience
            </span>
          </a>

          <a className="group relative inline-block text-md font-semibold text-[white] [-webkit-text-stroke:0.1px_black]" href="#pub">
            <span className="absolute inset-0 border border-[#F2A65A]"></span>
            <span className="block border border-[#E8E2D8] bg-[#6F8F72] px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                Publications
            </span>
          </a>

          <a className="group relative inline-block text-md font-semibold text-[white] [-webkit-text-stroke:0.1px_black]" href="#hobbies">
            <span className="absolute inset-0 border border-[#F2A65A]"></span>
            <span className="block border border-[#E8E2D8] bg-[#6F8F72] px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                Hobbies
            </span>
          </a>


        </div>

        <div className="flex items-center gap-5 text-white">
          {/* Divider */}
          <span className="text-white/50 text-2xl">|</span>

            <a
                href="https://github.com/theArielTrejo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition"
            >
                <FaGithub size={30} />
            </a>

            <a
                href="https://www.linkedin.com/in/arieltrejo956"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition"
            >
                <FaLinkedin size={30} />
            </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-zinc-300 hover:text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-zinc-900 border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-zinc-300">
          <a href="#home" onClick={() => setOpen(false)}>About Me</a>
          <a href="#work" onClick={() => setOpen(false)}>Work Experience</a>
          <a href="#pub" onClick={() => setOpen(false)}>Publications</a>
          <a href="#hobbies" onClick={() => setOpen(false)}>Hobbies</a>
        </div>
      )}
    </nav>
  );
}