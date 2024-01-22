// background image.ts

import React from 'react';

const BgImg = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center" 
    style={{ backgroundImage: 'url("./assets/HomeImages/HomeImage")' }}>
     
      {/* Your component content goes here */}
      <h1 className="text-white text-4xl font-bold">Hello, Background Image!</h1>
    </div>
  );
};

export default BgImg;
