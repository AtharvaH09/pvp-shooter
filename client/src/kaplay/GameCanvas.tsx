import type React from "react";
import kaplay from "kaplay";
import { useEffect, useRef } from "react"

const GameCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const k = kaplay({
      root: canvasRef.current,
      width: 800,
      height: 600,
      // background: [0,0,0],
      canvas: undefined,
    });

    // k.scene("main", () => {
    //   k.add([
    //     k.rect(100, 100),
    //     k.pos(200, 200),
    //     k.color(255, 0, 0),
    //   ]);
    // });

    // k.go("main");

    return () => {
      canvasRef.current!.innerHTML = "";
    };
  }, []);
  
  return <div ref={canvasRef} id="game-canvas"></div>
};

export default GameCanvas;