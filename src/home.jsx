import profilePic from "./assets/profilepicture2.png";
import resume from "./assets/Ariel Trejo Resume Final Version.pdf";
export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-[#BFC6C4] text-center px-6 py-20">

      {/* Text */}
      <h1 className="text-5xl md:text-7xl font-bold text-white [-webkit-text-stroke:0.8px_#F2A65A]">
        I'm Ariel
      </h1>

      <h2 className="mt-4 text-xl md:text-3xl text-[#6F8F72]  font-semibold">
        Tech Enthusiast, Computer Scientist
      </h2>

      {/* Image */}
      <div className="mt-12 relative flex justify-center">
        {/* Orange glow behind image */}
        <div className="absolute w-80 h-80 md:w-[450px] md:h-[450px] 
                        bg-[#F2A65A] blur-3xl opacity-30 rounded-full pointer-events-none"></div>

        <img
          src={profilePic}
          alt="Ariel"
          className="relative w-[280px] md:w-[450px] object-contain"
        />
  
      </div>

      <a href={resume} target="_blank" rel="noopener noreferrer" className="block group">
          <p className="text-xl text-gray-900 font-bold group-hover:text-blue-600 group-hover:underline">
              View my resume here
          </p>
      </a>    

    </section>
  );
}