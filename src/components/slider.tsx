import  { useState } from 'react';
import {  motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";

import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";
import work5 from "../assets/work5.png";

const images = [
  { src: work1, label: "UI Dashboard • Figma to Code" },
  { src: work2, label: "Mobile App Concept • Booking Flow" },
  { src: work3, label: "Dark Portfolio Design • Case Study" },
  { src: work4, label: "Web Animation Project • Motion + React" },
  { src: work5, label: "Product Landing Page • UX Polish" },
] as const;

const positions = ["farLeft", "left", "center", "right", "farRight"] as const;
type Position = (typeof positions)[number];

const positionStyles: Record<Position, { x: string; y: string, scale: number; zIndex: number; opacity: number }> = {
  farLeft: { x: "-120%", y: "-60%", scale: 0.6, zIndex: 1, opacity: 0},
  left:    { x: "-80%", y: "-30%", scale: 0.8, zIndex: 2, opacity: 0.5 },
  center:  { x: "0%", y: "0%",   scale: 1,   zIndex: 5, opacity: 1 },
  right:   { x: "80%", y: "-30%",  scale: 0.8, zIndex: 2, opacity: 0.5 },
  farRight:{ x: "120%", y: "-60%",  scale: 0.6, zIndex: 1, opacity: 0 },
};


const ImageSlider = () => {
  const [indexes, setIndexes] = useState<number[]>([0, 1, 2, 3, 4]);

  const cycle = (step: number)=>{
    setIndexes((prev) => 
      prev.map((i) => (i + step + images.length) % images.length));
  };

  const centerIndex = indexes[2];
  const centerLabel = images[centerIndex].label;

  const handleDragEnd = (_:unknown, info: {offset: {x: number} }) => {
    if(info.offset.x<-50) cycle(1);
    else if (info.offset.x>50)cycle(-1);
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 id='portfolio' ">
      <div className="relative w-[80vw] h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-xl bg-white/20 rounded-2xl shadow-2xl border border-white/30 mx-8 my-12" />
        
        
          {indexes.map((imgIndex, posIndex) => {
            const position = positions[posIndex] ?? "farRight";
            const { src } = images[imgIndex];
            const style = positionStyles[position];

            return (
              <motion.div
                key={imgIndex}
                className="absolute flex flex-col items-center justify-end"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={{
                  x: style.x,
                  y: style.y,
                  scale: style.scale,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ 
                  width: "20vw" ,
                }}
              >
                <img
                  src={src}
                  alt={`slide-${imgIndex}`}
                  className="rounded-xl shadow-lg cursor-grab active:cursor-grabbing w-full"
                />
                {/* {position === 'center' && (
                  <div className="mt-10 px-6 py-5 bg-white/30 backdrop-blur-md rounded-full text-sm text-gray-800 shadow-md">
                    {label}
                  </div>
                )} */}
              </motion.div>
            );
          })}
        
        <div className="absolute bottom-24 w-full flex justify-center z-20 pointer-events-none">
          <motion.div
            key={centerLabel}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="px-6 py-4 bg-white/40 backdrop-blur-md rounded-full text-sm text-gray-900 shadow-md font-medium">
            {centerLabel}
          </motion.div>
        </div>

        <div className="absolute bottom-0.5 flex gap-6 z-10">
          <button
            className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md shadow-md text-gray-800 hover:bg-white/50 transition flex items-center justify-center"
            onClick={() => cycle(1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md shadow-md text-gray-800 hover:bg-white/50 transition flex items-center justify-center"
            onClick={() => cycle(-1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;