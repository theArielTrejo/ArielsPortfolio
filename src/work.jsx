import { useState } from "react";
import kuka from "./assets/ag6dt.jpg";
import management from "./assets/management.mp4";
import eosgroup from "./assets/eosgroup.png";
import otherme from "./assets/othersme.png";
import hydrocat from "./assets/Hydrocat.mp4";
import loc from "./assets/libraryofcongress.jpg";

export default function WorkExperience() {

  const [expanded, setExpanded] = useState({});
  const toggle = (i) => {
  setExpanded((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  return (
    <section id="work" className="py-24 px-6 bg-[#BFC6C4]">
      <h2 className="text-6xl font-bold text-left  text-[#6F8F72] mb-16 drop-shadow-[0_0_2px_#F2A65A] underline decoration-[#6F8F72]">
        Work Experience
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-start">

        <div className=" bg-[#E8E2D8] w-full min-w-0 border-4 rounded-xl border-[#BFC6C4] p-3">
          <h3 className="text-2xl font-semibold mb-3 text-[#6F8F72]">
            Library of Congress Internship - Software Engineer Intern
          </h3>
          <p className={`text-gray-700 mb-2 ${expanded[0] ? "" : "line-clamp-5"}`}>
            At the Library of Congress, I was able to be part of the Office of the Chief Information Officer (OCIO) team. 
            The project I was assigned to focused on the modernization of the Congressional Research Service (CRS) application, 
            specifically moving the application from .NET Framework to ASP.NET Core. The goal of the modernization was to improve 
            the application's performance and make it more compatible with Mac, Linux, and Windows, while also optimizing it for cloud 
            services and incorporating a microservices architecture.

            I contributed to the project by creating unit tests for the CRS API backend. These unit tests served as a safety net 
            for future development, allowing developers to make changes to the application while making sure core functionality and 
            expected results were not accidentally affected. I developed 126 unit tests using xUnit and Moq for an enterprise ASP.NET Core (.NET 10) 
            modernization project. This ultimately brought the automated unit test coverage to 84%, covering 1,176 code blocks.

            Through this internship, I gained more experience working with enterprise-level software and development practices, 
            including Agile/Scrum methodology, Azure DevOps, ASP.NET Core, Controllers, Interfaces, Models, Entity Framework, C#, 
            dependency injection, and testing edge cases. 
          </p>

          <button
            onClick={() => toggle(0)}
            className="text-[#6F8F72] font-semibold hover:underline mb-4"
          >
            {expanded[0] ? "Show Less" : "Read More"}
          </button>
          <img
            src={loc}
            alt="Library of Congress Image"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className=" bg-[#E8E2D8] w-full min-w-0 border-4 rounded-xl border-[#BFC6C4] p-3">
          <h3 className="text-2xl font-semibold mb-3 text-[#6F8F72]">
            Digital Twin Project - Research Assistant
          </h3>
          <p className={`text-gray-700 mb-2 ${expanded[0] ? "" : "line-clamp-5"}`}>
            Developed an Augmented Reality application for the HoloLens 2 using Unity, Vuforia, and C#. 
            The goal of this project was to explore how digital twins can be applied in manufacturing environments 
            to improve safety and efficiency. By visualizing real-world equipment in a virtual space, the system 
            helped demonstrate how operators could better understand machine behavior and reduce the risk of injuries 
            or equipment damage caused by human error.
          </p>

          <button
            onClick={() => toggle(0)}
            className="text-[#6F8F72] font-semibold hover:underline mb-4"
          >
            {expanded[0] ? "Show Less" : "Read More"}
          </button>
          <img
            src={kuka}
            alt="AG-6 Kuka Arm Digital Twin"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className=" bg-[#E8E2D8] w-full min-w-0 border-4 rounded-xl border-[#BFC6C4] p-3">
          <h3 className="text-2xl font-semibold mb-3 text-[#6F8F72]">
            EOS Internship - Data Analyst Intern 
          </h3>
          <p className={`text-gray-700 mb-2 ${expanded[1] ? "" : "line-clamp-5"}`}>
            At EOS, I worked on solving an issue where experimental data was scattered across multiple sources, 
            including Excel sheets, internal software, and company platforms. This made it difficult for engineers to 
            efficiently access and analyze information.

            I developed an internal full-stack web application that centralized over 1,200 data entries into a single, structured database. 
            The platform allowed engineers to perform advanced filtering across up to 14 different data fields and included visualization 
            tools to better analyze experimental results.

            The system was built using Python, React, MUI DataGrid, and SQLAlchemy with a PostgreSQL database. I deployed the application on 
            a virtual machine, where I configured firewall rules and handled DevOps-related tasks to ensure secure and reliable access. 
            To keep the application running continuously, I used Non-Sucking Service Manager (NSSM) to manage the service and ensure uptime.

            Additionally, I collaborated with the team to integrate AI features into the platform using Ollama, enabling more intelligent data 
            interaction and improving the overall usability of the system. 
          </p>
          <button
            onClick={() => toggle(1)}
            className="text-[#6F8F72] font-semibold hover:underline mb-4"
          >
            {expanded[1] ? "Show Less" : "Read More"}
          </button>
          <img
            src={eosgroup}
            alt="EOS Project"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className=" bg-[#E8E2D8] w-full min-w-0 border-4 rounded-xl border-[#BFC6C4] p-3">
          <h3 className="text-md font-semibold mb-1 text-[#6F8F72]">
            Hydrocat Autonomous Deep Learning Boat - Research Assistant
          </h3>
          <p className={`text-gray-700 mb-2 ${expanded[2] ? "" : "line-clamp-5"}`}>
            The Hydrocat project focuses on collecting data through an autonomous boat powered by deep learning. The goal was to detect objects 
            both on the surface and below the water to support monitoring, recovery, and defense-related applications.

            I developed a script using a YOLO model to detect objects on the water’s surface in real time. Setting this up required extensive 
            environment configuration, as multiple tools and versions; including TensorFlow, Python, CUDA, Conda, and Pixhawk firmware, had to be fully 
            compatible with one another. This involved a lot of troubleshooting and DevOps-style work to ensure everything ran reliably on the system.

            I also helped configure the Pixhawk flight controller, which allowed the boat to autonomously follow predefined paths. In addition, I implemented a 
            “red zone” detection system that identifies critical areas in front of the boat to prevent collisions and capture objects within that region.

            The system was deployed on a Jetson Nano, which acted as the main processing unit for running the deep learning model onboard. This project has 
            potential applications in detecting man-made objects such as boats, submerged debris, or wreckage, making it useful for recovery missions and defense-related operations.
          </p>
          <button
            onClick={() => toggle(2)}
            className="text-[#6F8F72] font-semibold hover:underline mb-4"
          >
            {expanded[2] ? "Show Less" : "Read More"}
          </button>
          <video
          className="w-full h-1 object-scale-down"
          autoPlay
          loop
          muted
          playsInline
          >
            <source src={hydrocat} type="video/mp4" />
          </video>
        </div>

        <div className="bg-[#E8E2D8] w-full min-w-0 border-4 rounded-xl border-[#BFC6C4] p-3">
          <h3 className="text-lg font-semibold mb-3 text-[#6F8F72]">
            Digital Twin Management Project - Research Assistant
          </h3>
          <p className={`text-gray-700 mb-2 ${expanded[3] ? "" : "line-clamp-4"}`}>
            This project was a continuation of the original digital twin work focused on reducing human error in manufacturing environments. 
            In this phase, the system evolved into a management platform that allowed users to interact with a digital representation of the facility.

            I developed an application in Unity where users could log in and view an accurate layout of the manufacturing facility through the HoloLens. Within the application, 
            users were able to check which labs were reserved, see ongoing projects in each lab, and view details such as project descriptions and the professors and students involved.

            All of this information was managed through an Azure-hosted database that I designed and implemented, which required creating and structuring multiple database tables. 
            This project gave me hands-on experience with cloud-based systems and taught me how to connect an Azure database to an augmented reality application running on the HoloLens.
          </p>
          <button
            onClick={() => toggle(3)}
            className="text-[#6F8F72] font-semibold hover:underline mb-4"
          >
            {expanded[3] ? "Show Less" : "Read More"}
          </button>
          <video
          className="w-full h-1 object-scale-down"
          autoPlay
          loop
          muted
          playsInline
          >
            <source src={management} type="video/mp4" />
          </video>
        </div>

        <div className="bg-[#E8E2D8] w-full min-w-0 border-4 rounded-xl border-[#BFC6C4] p-3">
          <h3 className="text-2xl font-semibold mb-3 text-[#6F8F72]">
            Other Side Projects
          </h3>
          <p className={`text-gray-700 mb-2 ${expanded[4] ? "" : "line-clamp-5"}`}>
            I’ve also worked on several side projects focused on game development. These projects include a game I created as part of a proposal to my wife, a 
            Game-a-thon project that my team and I won, and a game developed for my senior project.

            These experiences allowed me to explore creativity alongside technical skills, 
            especially in areas like game design, user interaction, and real-time systems. 
            You can learn more about these projects in the Hobbies section, where there are also a link available to play the game me and my team created for our senior project.
          </p>

          <button
            onClick={() => toggle(4)}
            className="text-[#6F8F72] font-semibold hover:underline mb-4"
          >
            {expanded[4] ? "Show Less" : "Read More"}
          </button>
          <img
            src={otherme}
            alt="Database Platform"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
        
      </div>
    </section>
  );
}