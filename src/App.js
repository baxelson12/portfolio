import React, { useState, useEffect, useRef } from 'react';
import Backdrop from './Backdrop';

const App = () => {
  const [pos, setPos] = useState(100);
  const container = useRef(null);
  const scrollHandler = () => {
    // TODO: Setting scroll-snap-type breaks site???
    setPos(container.current.scrollTop);
  };

  // Add arrows to right side of screen?
  // Contact overlay button?
  // Keyboard controls?

  return (
    <div id="container" onScroll={scrollHandler} ref={container}>
      <div className="hero flex">
        <div className="h-full w-1/6 grid grid-rows-2 gap-8 border-r border-dashed border-gray-500">
          <div></div>
          <div className="mx-auto">
            <img
              className="h-32"
              src={`${process.env.PUBLIC_URL}/img/Cube.svg`}
            />
          </div>
        </div>
        <div className="h-full w-5/6 grid grid-rows-2 gap-8">
          <div></div>
          <div className="px-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-display text-blue-300 leading-none">
                I make <br />
                computers <br />a breeze.
              </h1>
            </div>
            <div className="mt-4">
              <p className="w-1/3">
                Hi! My name is Brad Axelson. I am an expert computer
                repair specialist and a trained web developer. I offer
                a broad range of technology-related solutions for
                small to medium businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="flex text-white">
        <div className="h-full w-1/6 flex flex-col justify-center border-r border-dashed border-gray-500 dodge">
          <div>
            <h2 className="pl-8 leading-none font-display text-white text-5xl lg:text-6xl">
              Web <br />
              Dev
            </h2>
          </div>
        </div>
        <div className="h-full w-5/6 grid grid-rows-2 gap-8">
          <div className="px-8 flex flex-col justify-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-display leading-none">
                From <br />
                Scratch.
              </h1>
            </div>
            <div className="mt-4">
              <p className="w-1/3 text-xl difference leading-snug text-white">
                With several years experience using many web
                frameworks, together we can make the most efficient,
                reliable, and clean website using the latest
                technologies.
              </p>
            </div>
          </div>
          <div className="px-8 flex flex-col justify-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-display leading-none">
                From <br />
                Existing.
              </h1>
            </div>
            <div className="mt-4">
              <p className="w-1/3 text-xl difference leading-snug">
                Already have a good internet presence but need to make
                some changes to your website? Something as simple as a
                typo or even adding additional pages can be completed
                effortlessly to better provide to your customers.
              </p>
            </div>
          </div>
        </div>
        <Backdrop id="1" scrollTop={pos} color="green"></Backdrop>
      </section>
      <section className="flex text-white">
        <div className="h-full w-1/6 flex flex-col justify-center border-r border-dashed border-gray-500 dodge">
          <div>
            <h2 className="pl-8 leading-none font-display text-white text-5xl lg:text-6xl">
              IT
            </h2>
          </div>
        </div>
        <div className="h-full w-5/6 grid grid-rows-2 gap-8">
          <div className="px-8 flex flex-col justify-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-display leading-none">
                Infra- <br />
                structure.
              </h1>
            </div>
            <div className="mt-4">
              <p className="w-1/3 text-xl difference leading-snug text-white">
                Save money by upgrading workstations as opposed to
                replacing outright. Secure your employees’ computers
                from unauthorized access. Remove unwanted software
                and/or malware.
              </p>
            </div>
          </div>
          <div className="px-8 flex flex-col justify-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-display leading-none">
                Server <br />
                Upkeep.
              </h1>
            </div>
            <div className="mt-4">
              <p className="w-1/3 text-xl difference leading-snug">
                Your data is important. Let’s keep it healthy and safe
                by running regular software updates along with
                securing any openings.
              </p>
            </div>
          </div>
        </div>
        <Backdrop id="2" scrollTop={pos} color="red"></Backdrop>
      </section>
      <section className="flex text-white">
        <div className="h-full w-1/6 flex flex-col justify-center border-r border-dashed border-gray-500 dodge">
          <div>
            <h2 className="pl-8 leading-none font-display text-white text-5xl lg:text-6xl">
              Certs
            </h2>
          </div>
        </div>
        <div className="h-full w-5/6 grid grid-rows-2 gap-8">
          <div className="px-8 flex flex-col justify-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-display leading-none">
                CompTIA <br />
                A+
              </h1>
            </div>
            <div className="mt-4">
              <p className="w-1/3 text-xl difference leading-snug text-white">
                The industry standard for establishing a career in IT
                and the preferred qualifying credential for technical
                support and IT operational roles.
              </p>
            </div>
          </div>
          <div className="px-8 flex flex-col justify-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-display leading-none">
                Adobe <br />
                Web Communication
              </h1>
            </div>
            <div className="mt-4">
              <p className="w-1/3 text-xl difference leading-snug">
                Adobe Certified associate in web communication using
                Adobe Dreamweaver CS5.
              </p>
            </div>
          </div>
        </div>
        <Backdrop id="3" scrollTop={pos} color="blue"></Backdrop>
      </section>
    </div>
  );
};

export default App;
