// components/LottieComponent.js
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieComponent = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <DotLottieReact
        src="https://lottie.host/embed/d9b176c4-41d6-4080-a7f6-2debaea9fb8a/xdMGLgZ4pN.lottie" // Provide the correct path to your .lottie file
        loop
        autoplay
      />
    </div>
  );
};

export default LottieComponent;
