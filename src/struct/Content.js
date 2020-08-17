import React from 'react';

const Content = ({ title, children }) => {
  return (
    <div className="px-8 flex flex-col justify-center">
      <div>
        <h1 className="text-5xl lg:text-6xl font-display leading-none">
          {title}
          {/* From <br />
            Scratch. */}
        </h1>
      </div>
      <div className="mt-4">
        <p className="w-1/3 text-xl difference leading-snug text-white">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Content;
