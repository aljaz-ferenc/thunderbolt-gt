import "./Hero.css";
import gsap, { Power2 } from "gsap";
import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function Hero() {
  const headingRef = useRef();
  const state = useSelector((state) => state.state);
  const isAnimating = useSelector(state => state.animating)

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        x: 1000,
        skewX:'-70deg',
        opacity: 0,
        ease: Power2.easeOut,
      },
      {
        x: 0,
        skewX:0,
        opacity: 1,
        duration: 0.5,
        ease: Power2.easeOut,
        delay: 1
      }
    );
  }, []);

  useEffect(() => {
    console.log(state)
    if(state === 0 || state === 3 || !state){
      gsap.to(headingRef.current, {
        filter: "blur(0px)",
        duration: 1,
        ease: Power2.easeOut,
        delay: 1
      })
    }else{
      gsap.to(headingRef.current, {
        filter: "blur(10px)",
        duration: 1,
        ease: Power2.easeOut,
        delay: 1
      })
    }
  }, [state])

    return (
      <div
        className="hero"
      >
        <h1 ref={headingRef}>THUNDERBOLT GT</h1>
        <AnimatePresence mode="wait">
        {(state === null || state === 0) && !isAnimating && <Section0/>}
        {state === 1 && !isAnimating && <Section1/>}
        {state === 2 && !isAnimating && <Section2/>}
        {state === 3 && !isAnimating && <Section3/>}
        </AnimatePresence>
      </div>
    );
}
