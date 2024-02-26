"use client";
import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); 
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex items-center justify-center text-center md:mt-60 mt-0'>
      <div className="stats shadow-xl">
        <div className="stat">
          <div className="stat-value md:text-4xl text-2xl">
            {isSmallScreen ? "#42" : "#1"}
          </div>
          <div className="stat-title md:text-base text-sm font-medium whitespace-normal md:whitespace-nowrap">
            {isSmallScreen ? "Ranked in USA" : "Best Engineering Jobs"}
          </div>
        </div>

        <div className="stat border border-white">
          <div className="stat-value md:text-4xl text-2xl">
            94%
          </div>
          <div className="stat-title md:text-base text-sm font-medium whitespace-normal md:whitespace-nowrap">
            {isSmallScreen ? "Placement Rate" : "Placement Rate"}
          </div>
        </div>

        <div className="stat border border-white">
          <div className="stat-value md:text-4xl text-2xl">
            {isSmallScreen ? "$100K" : "$96K"}
          </div>
          <div className="stat-title md:text-base text-sm font-medium whitespace-normal md:whitespace-nowrap">
            Average Salary
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
