import aboutmepic from "./assets/aboutme.jpg";
import eosLogo from "./assets/eoslogo.png";
import iamLogo from "./assets/utrgvlogo.png";
import locLogo from "./assets/loclogo.png";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-[#E8E2D8] flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE - TEXT */}
            <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#6F8F72]">
                About Me
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
                I'm Ariel, an enthusiastic Computer Scientist who loves building meaningful applications. 
                I graduated Magna Cum Laude (3.77/4.00) from the University of Texas Rio Grande Valley. 
                I genuinely enjoy working, learning, and challenging myself.
                Every day is an opportunity to grow and discover something new.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
                I’ve worked on projects involving full-stack development, unit testing, databases, digital twins, 
                game development, machine learning with YOLO for visual detection, and implementing 
                AI-driven solutions for web applications. I’ve gained real-world experience through 
                my three internships at the Library of Congress, EOS, and my role as a Research Assistant at the Institute of 
                Advanced Manufacturing at UTRGV.
                Scroll down to learn more about my journey and the projects I’ve built.
            </p>
            </div>

            {/* RIGHT SIDE - TILTED PHOTO */}
            <div className="mt-10 flex justify-center md:justify-center">
                <div className="w-72 md:w-80">

                    {/* MAIN POLAROID IMAGE */}
                    <div className="relative rotate-3 hover:rotate-0 transition-transform duration-500 animate-[float_6s_ease-in-out_infinite]">
  
                        {/* Tape */}
                        <div className="absolute -top-3 -left-3 w-16 h-6 bg-yellow-200 opacity-70 rotate-[-12deg] shadow-md"></div>
                        <div className="absolute -top-3 -right-3 w-16 h-6 bg-yellow-200 opacity-70 rotate-[10deg] shadow-md"></div>

                        {/* Polaroid Frame */}
                        <div className="bg-white p-4 shadow-2xl">
                            
                            {/* Image Zoom Container */}
                            <div className="overflow-hidden">
                                <img
                                    src={aboutmepic}
                                    alt="Ariel"
                                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-150"
                                />
                            </div>

                        </div>
                    </div>

                    {/* LOGOS PYRAMID */}
                    <div className="mt-5 flex flex-col items-center gap-6">
                        {/* TOP LOGO */}
                        <a
                            href="https://www.loc.gov/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:-translate-y-1 hover:scale-130"
                        >
                            <img
                                src={locLogo}
                                alt="Library of Congress logo"
                                className="w-50 h-auto object-contain"
                            />
                        </a>

                        {/* BOTTOM ROW */}
                        <div className="flex justify-center gap-10">
                            <a
                                href="https://www.eos.info/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform duration-300 hover:-translate-y-1 hover:scale-150"
                            >
                                <img
                                    src={eosLogo}
                                    alt="EOS logo"
                                    className="w-50 h-auto object-contain"
                                />
                            </a>

                            <a
                                href="https://www.utrgv.edu/iam/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform duration-300 hover:-translate-y-1 hover:scale-150"
                            >
                                <img
                                    src={iamLogo}
                                    alt="Institute of Advanced Manufacturing logo"
                                    className="w-50 h-auto object-contain"
                                />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
  );
}