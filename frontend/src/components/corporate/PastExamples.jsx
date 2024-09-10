import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import travel from '../../assets/images/travel.jpeg';
import india from '../../assets/images/india.jpg';
const sampleImages = [
    travel,
    travel,
    travel,
    travel,
    travel,
    travel,
];

const retreats = [
    {
        id: 1,
        title: 'Sourcegraph',
        location: 'Barcelona, Spain',
        description: 'Seeking out the perfect location for both business and pleasure, Moniker brought Sourcegraph to the perfect location just outside of Barcelona. A 5-night retreat was just what the remote-first team needed to reconnect and regroup.',
    },
    {
        id: 2,
        title: 'Help Scout',
        location: 'Beach Location',
        description: 'Help Scout\'s team building retreat combining work sessions with relaxation on beautiful beaches.',
    },
    {
        id: 3,
        title: 'Stealth',
        location: 'Island Retreat',
        description: 'Stealth company\'s exclusive island getaway for strategic planning and team bonding.',
    },
    {
        id: 4,
        title: 'Tech Innovators',
        location: 'Mountain Resort',
        description: 'Tech Innovators chose a serene mountain setting for their annual strategy retreat, fostering creativity and team bonding.',
    },
    {
        id: 5,
        title: 'Global Solutions',
        location: 'Urban Oasis',
        description: 'Global Solutions brought their international team together in a vibrant city center for a week of collaboration and cultural experiences.',
    },
    {
        id: 6,
        title: 'EcoTech',
        location: 'Eco-Lodge',
        description: 'EcoTech aligned their corporate values with their retreat location, choosing a sustainable eco-lodge for their team-building and brainstorming sessions.',
    },
];

const PastExamples = () => {
    const [currentRetreat, setCurrentRetreat] = useState(retreats[0]);

    const handleNextRetreat = () => {
        const currentIndex = retreats.findIndex(r => r.id === currentRetreat.id);
        const nextIndex = (currentIndex + 1) % retreats.length;
        setCurrentRetreat(retreats[nextIndex]);
    };

    const handlePrevRetreat = () => {
        const currentIndex = retreats.findIndex(r => r.id === currentRetreat.id);
        const prevIndex = (currentIndex - 1 + retreats.length) % retreats.length;
        setCurrentRetreat(retreats[prevIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                handlePrevRetreat();
            } else if (event.key === 'ArrowRight') {
                handleNextRetreat();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentRetreat]);

    return (
        <div className="bg-gray-100 py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">  {/* Changed from max-w-7xl to max-w-5xl */}
                <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-4">
                    PAST CORPORATE RETREAT EXAMPLES
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center font-bold mb-6">
                    It's not just a retreat.
                    <br />
                    It's the most important investment in your people.
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
                    Check out some of our most recent successful retreats:
                </p>
                <div className="h-1 w-16 bg-yellow-400 mx-auto mb-8"></div>
                <div className="relative">
                    <div className="aspect-w-16 aspect-h-9 mb-4 sm:mb-8">
                        <img
                            src={sampleImages[currentRetreat.id - 1]}
                            alt={currentRetreat.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <button
                        onClick={handlePrevRetreat}
                        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-1 sm:p-2 transition duration-300"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={handleNextRetreat}
                        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-1 sm:p-2 transition duration-300"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-4 left-4 text-white max-w-[calc(100%-2rem)]">
                        <p className="text-sm font-semibold">{currentRetreat.location}</p>
                        <h3 className="text-xl sm:text-2xl font-bold">{currentRetreat.title}</h3>
                        <p className="text-sm mt-2 text-white hidden sm:block">{currentRetreat.description}</p>
                    </div>
                </div>

                <div className="mt-4 sm:mt-8 flex justify-center sm:justify-end flex-wrap gap-2 sm:gap-4">
                    {retreats.map((retreat, index) => (
                        <div
                            key={retreat.id}
                            className="relative cursor-pointer group"
                            onClick={() => setCurrentRetreat(retreat)}
                        >
                            <img
                                src={sampleImages[index]}
                                alt={retreat.title}
                                className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PastExamples;