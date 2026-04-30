import { useState } from "react";
import barrelchuck from "./assets/barrelchuck.png";
import binkys from "./assets/binkygame.png"
import savingsop from "./assets/savingsophie.mp4"

export default function Hobbies() {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="hobbies" className="py-20 px-6 md:px-12 ">
        <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Hobbies
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-12">
            I am also very interested in game development! I have created a couple of games,
            ranging from a game made during a Game-a-thon, to a game I created to propose to
            my wife, and a game developed as part of my senior project.
            </p>

            {/* Main Featured Game */}
            <div className="bg-[#E8E2D8] rounded-3xl shadow-lg p-6 md:p-8 mb-10 border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    Binky&apos;s Medieval Showdown
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                    Genre: 2D Top-Down Survival | Tech: Machine Learning (Contextual Bandits)
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                    A fast-paced survival game inspired by Survivor.io and COD: Zombies that challenges players to survive 
                    endless waves of enemies. The core innovation lies in the Adaptive AI; using a Contextual Bandits machine learning model, 
                    the game analyzes player movement, weapon preferences, and ability usage in real-time to spawn enemy types specifically 
                    designed to counter the player's evolving strategy.
                </p>

                {/* DESKTOP */}
                <div className="hidden md:block">
                    {!isPlaying ? (
                    <div className="relative w-full h-[500px] md:h-[700px]">

                        {/* Play Button */}
                        <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center"
                        >
                        <div className="bg-white/90 hover:bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl transition">
                            ▶ Play Game
                        </div>
                        </button>
                    </div>
                    ) : (
                    <iframe
                        src="https://itch.io/embed-upload/15869578?color=000000"
                        className="w-full h-[500px] md:h-[700px]"
                        style={{ border: "0" }}
                        allowFullScreen
                        title="Binky's Medieval Showdown"
                    />
                    )}
                </div>

                {/* MOBILE */}
                <div className="block md:hidden">
                    <img
                    src={binkys}
                    alt="Binky preview"
                    className="w-full h-[300px] object-cover"
                    />

                    <div className="p-4 text-center bg-[#111]">
                    <p className="text-white mb-3">
                        This game is best experienced on desktop.
                    </p>

                    <a
                        href="https://elbinky.itch.io/binkys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 bg-[#F2A65A] text-white rounded-lg"
                    >
                        Play on itch.io
                    </a>
                    </div>
                </div>
            </div>

            {/* Bottom Two Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Box 2 */}
                <div className="bg-[#E8E2D8] rounded-3xl shadow-md overflow-hidden border border-gray-200">
                    <img
                    src={barrelchuck}
                    alt="Game 2 preview"
                    className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        Barrel Chuck
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-3">
                        Genre: 3D Puzzle Platformer | 1st Place - 48-Hour Game Jam
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        Developed in just 48 hours for a university-wide competition, Barrel Chuck follows the story of a warehouse 
                        worker accidentally shrunk by machinery. Players must pilot a toy tank via remote control to navigate the 
                        now-massive warehouse.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        Key Mechanics: Physics-based puzzles utilizing the tank’s ability to launch boxes and the player character.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        Achievement: Secured 1st Place in the competition and was featured in the local University magazine for innovative level design and mechanics.
                    </p>                    

                </div>
            </div>

                {/* Box 3 */}
                <div className="bg-[#E8E2D8] rounded-3xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
                    <video
                        className="w-full h-1 object-scale-down"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={savingsop} type="video/mp4" />
                    </video>
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            Saving Princess Sophie
                        </h3>

                        <p className="text-gray-700 leading-relaxed mb-3">
                            Genre: Narrative Adventure | Purpose: Personal Commission (Engagement)
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            A deeply personal project created as a unique medium for my marriage proposal. I developed a fantasy 
                            world where the player journeys to rescue "Princess Sophie" from an evil wizard.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Interactive Storytelling: The world is filled with interactable lore points that trigger "Memory Fragments"
                            real-life stories, dates, and milestones from our relationship (e.g., a graveyard scene commemorating our shared victories in Elden Ring).
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}