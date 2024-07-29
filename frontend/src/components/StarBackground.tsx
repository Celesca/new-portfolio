// src/StarBackground.js

import { useEffect, useRef } from 'react';
import Starback from 'starback';

const StarBackground = () => {

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvas) {
      const starback = new Starback(canvas, {
        type: 'dot',
        quantity: 100,
        direction: 225,
        backgroundColor: ['#0e1118', '#232b3e'],
        randomOpacity: true,
      });
    }


  }, []);

  return <canvas id="canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default StarBackground;