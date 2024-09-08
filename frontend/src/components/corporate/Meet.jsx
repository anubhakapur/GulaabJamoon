import React, { useEffect, useState } from 'react';

const Meet = () => {
  const [years, setYears] = useState(0);
  const [staff, setStaff] = useState(0);
  const [retreats, setRetreats] = useState(0);
  const [campers, setCampers] = useState(0);

  useEffect(() => {
    let duration =4000; // 4 seconds total for all numbers to finish
    let maxValue = {
      years: 11,
      staff: 18,
      retreats: 301,
      campers: 845,
    };

    const incrementNumber = (setter, target, intervalDuration, delay = 0) => {
      let count = 1;
      setTimeout(() => {
        const interval = setInterval(() => {
          if (count <= target) {
            setter(count);
            count++;
          } else {
            clearInterval(interval);
          }
        }, intervalDuration);
      }, delay);
    };

    // Calculate intervals for numbers so they finish at the same time
    let yearsInterval = duration / maxValue.years;
    let staffInterval = duration / maxValue.staff;
    let retreatsInterval = duration / maxValue.retreats;
    let campersInterval = duration  / maxValue.campers; // Add a delay to bigger numbers

    const yearsCounting = incrementNumber(setYears, maxValue.years, yearsInterval);
    const staffCounting = incrementNumber(setStaff, maxValue.staff, staffInterval);
    const retreatsCounting = incrementNumber(setRetreats, maxValue.retreats, retreatsInterval);
    const campersCounting = incrementNumber(setCampers, maxValue.campers, campersInterval, 1000); // Start campers count 1 second later

    return () => {
      clearInterval(yearsCounting);
      clearInterval(staffCounting);
      clearInterval(retreatsCounting);
      clearInterval(campersCounting);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-white px-4 font-serif">
      <div className="text-center max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Meet Gulaab Jamoon.</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          We are an Award-Winning Corporate Retreat Planning Agency, focused on helping companies connect with their teams through imaginative 
          <span className="text-yellow-500"> Retreats, Incentive Trips,</span> and engaging Offsites around the globe.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-6">
          Our mission is simple: Help our clients create and operate memorable experiences that allow them to brainstorm, celebrate achievements, or kick back and bond in inspiring places around the world. All while making sure the process is fun, transparent, and approached in a collaborative way. 
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-6">
          Over 11 years in, we've helped more than a thousand companies do just that.
        </p>
        <p className="text-base md:text-lg italic text-gray-700 mt-6">
          So far, so good.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{years}</h3>
            <p className="text-sm md:text-base text-gray-600">Years in Business <br />(Est. 2013)</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{staff}</h3>
            <p className="text-sm md:text-base text-gray-600">Full-time Staff</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{retreats}</h3>
            <p className="text-sm md:text-base text-gray-600">Custom Corporate Retreats Planned</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">{campers}</h3>
            <p className="text-sm md:text-base text-gray-600">Happy Campers <br />(And Counting!)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
