import graph from "./assets/graphs.jpg"

export default function Publication() {
  return (
    <section id="pub" className="w-full min-h-screen bg-[#E8E2D8] flex items-center justify-center px-6 py-2">
        <div className="max-w-6xl w-full gap-1 items-center">

            <div className="space-y-6">
                {/* TITLE */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#6F8F72]">
                    Publications
                </h2>

                {/* Short Description */}
                <p className="text-lg text-gray-700 italic leading-relaxed">
                    During my time at UTRGV, I had the opportunity to contribute to multiple research groups. 
                    I am a co-author of an academic publication and also supported the development of another published paper, 
                    where I created data visualizations using Python and Pandas.
                </p>

                {/* Link 1 */}
                <div className="space-y-1">
                    <p className="text-sm text-gray-500">(Co-Author)</p>
                    <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=MkYqDMUAAAAJ&citation_for_view=MkYqDMUAAAAJ:u5HHmVD_uO8C" target="_blank" rel="noopener noreferrer" className="block group">
                        <p className="text-xl text-gray-900 font-bold group-hover:text-blue-600 group-hover:underline">
                            Enhancing Immersive Experiences: Computer Vision Enhanced Mixed Reality in Smart Manufacturing
                        </p>
                    </a>
                </div>

                {/* Link 2 */}
                <div className="space-y-1">
                    <p className="text-sm text-gray-500">(Acknowledged)</p>
                    <a href="https://pubs.acs.org/doi/10.1021/acs.jpcc.6c00408" target="_blank" rel="noopener noreferrer" className="block group">
                        <p className="text-xl text-gray-900 font-bold group-hover:text-blue-600 group-hover:underline">
                            Assessing the Stability of Metal–Organic Frameworks with Local Vibrational Mode Theory
                        </p>
                    </a>
                </div>

                {/* Image */}
                <div className="flex justify-center pt-8">
                    <img 
                        src={graph} 
                        alt="Publication graph visualization"
                        className="w-80 md:w-125 h-auto object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>


            </div>

        </div>
    </section>
  );
}