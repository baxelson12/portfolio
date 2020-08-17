import React, { useState, useEffect } from 'react';
import Backdrop from '../Backdrop';

const Section = ({ title, id, scrollPos, color, children }) => {
  return (
    <section className="flex text-white">
      <div className="h-full w-1/6 flex flex-col justify-center border-r border-dashed border-gray-500 dodge">
        <div>
          <h2 className="pl-8 leading-none font-display text-5xl lg:text-6xl">
            {title}
            {/* Web <br />
            Dev */}
          </h2>
        </div>
      </div>
      <div className="h-full w-5/6 grid grid-rows-2 gap-8">
        {children}
      </div>
      <Backdrop
        id={id}
        scrollTop={scrollPos}
        color={color}
      ></Backdrop>
    </section>
  );
};

export default Section;
