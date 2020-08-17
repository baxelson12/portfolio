import React, {
  useState,
  useEffect,
  useRef,
  createContext,
} from 'react';
import Backdrop from './Backdrop';
import Section from './struct/Section';
import Content from './struct/Content';

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
      <Section id="1" title="Web Dev" color="green" scrollPos={pos}>
        <Content title="From scratch.">
          With several years experience using many web frameworks,
          together we can make the most efficient, reliable, and clean
          website using the latest technologies.
        </Content>
        <Content title="From existing.">
          Already have a good internet presence but need to make some
          changes to your website? Something as simple as a typo or
          even adding additional pages can be completed effortlessly
          to better provide to your customers.
        </Content>
      </Section>
      <Section id="2" title="IT" color="red" scrollPos={pos}>
        <Content title="Infra-structure.">
          Save money by upgrading workstations as opposed to replacing
          outright. Secure your employees’ computers from unauthorized
          access. Remove unwanted software and/or malware.
        </Content>
        <Content title="Server upkeep.">
          Your data is important. Let’s keep it healthy and safe by
          running regular software updates along with securing any
          openings.
        </Content>
      </Section>
      <Section id="3" title="Certs" color="blue" scrollPos={pos}>
        <Content title="CompTIA A+">
          The industry standard for establishing a career in IT and
          the preferred qualifying credential for technical support
          and IT operational roles.
        </Content>
        <Content title="Adobe Web Communication">
          Adobe Certified associate in web communication using Adobe
          Dreamweaver CS5.
        </Content>
      </Section>
    </div>
  );
};

export default App;
