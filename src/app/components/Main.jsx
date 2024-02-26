"use client";
import React, { useState } from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Programs from './Programs';
import Overview from './programs/Overview';
import Timeline from './programs/Timeline';
import Placement from './programs/Placement';
import Fees from './programs/Fees';

const Main = () => {
  const [activeComponent, setActiveComponent] = useState('Overview');

  const handleCardClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <div className="relative">
        <Hero />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Stats />
        </div>
        <Programs activeComponent={activeComponent} onCardClick={handleCardClick} />
      </div>
      {activeComponent === 'Overview' && <Overview />}
      {activeComponent === 'Timeline' && <Timeline />}
      {activeComponent === 'Placement' && <Placement />}
      {activeComponent === 'Fees' && <Fees />}
    </>
  );
};

export default Main;
