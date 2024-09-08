import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const retreats = [
    {
        id: 1,
        title: 'Sourcegraph',
        location: 'Barcelona, Spain',
        image: '/api/placeholder/800/450?text=Sourcegraph+Retreat',
        description: 'Seeking out the perfect location for both business and pleasure, Moniker brought Sourcegraph to the perfect location just outside of Barcelona. A 5-night retreat was just what the remote-first team needed to reconnect and regroup.',
    },
    {
        id: 2,
        title: 'Help Scout',
        location: 'Beach Location',
        image: '/api/placeholder/800/450?text=Help+Scout+Retreat',
        description: 'Help Scout\'s team building retreat combining work sessions with relaxation on beautiful beaches.',
    },
    {
        id: 3,
        title: 'Stealth',
        location: 'Island Retreat',
        image: '/api/placeholder/800/450?text=Stealth+Retreat',
        description: 'Stealth company\'s exclusive island getaway for strategic planning and team bonding.',
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

    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-4">
                    PAST CORPORATE RETREAT EXAMPLES
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-center font-bold mb-6">
                    It's not just a retreat.
                    <br />
                    It's the most important investment in your people.
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">

                    Check out some of our most recent successful retreats:
                </p>
                <div className="h-1 w-16 bg-yellow-400 mx-auto mb-12"></div>
                <div className="relative">
                    <div className="aspect-w-16 aspect-h-9 mb-8">
                        <img
                            src={currentRetreat.image}
                            alt={currentRetreat.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <button
                        onClick={handlePrevRetreat}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition duration-300"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={handleNextRetreat}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition duration-300"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-semibold">{currentRetreat.location}</p>
                        <h3 className="text-2xl font-bold">{currentRetreat.title}</h3>
                        <p className="text-sm mt-2">{currentRetreat.description}</p>
                    </div>
                </div>

                <div className="mt-8 flex justify-end space-x-4">
                    {retreats.map((retreat) => (
                        <div
                            key={retreat.id}
                            className="relative cursor-pointer group w-1/4"
                            onClick={() => setCurrentRetreat(retreat)}
                        >
                            <img
                                src={retreat.image}
                                alt={retreat.title}
                                className="w-full h-24 object-cover rounded-lg shadow-md transition duration-300 transform group-hover:scale-105 group-hover:rotate-3"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition duration-300">
                        View all Corporate Retreat Examples
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PastExamples;