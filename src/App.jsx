import { useRef, useState } from "react";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollToPlugin } from "gsap/all";
import gsap from "gsap";
import "./App.css";
import CarModel from "./components/CarModel";
import Hero from "./components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { stateActions } from "./store/StateSlice";
import leftBtn from "./assets/icons/chevron-left.svg";
import rightBtn from "./assets/icons/chevron-right.svg";
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [previousTime, setPreviousTime] = useState(0);
  const dispatch = useDispatch();
  const throttleTime = 3000;
  const appRef = useRef();
  const state = useSelector((state) => state.state);
  const isAnimating = useSelector((state) => state.animating);

  return (
    <div ref={appRef} className="app">
      <div style={{ zIndex: 10 }}></div>
      {state > 0 && !isAnimating && (
        <div
          className="btn btn-left"
          onClick={() => dispatch(stateActions.stateDown())}
        >
          <img src={leftBtn} alt="" />
        </div>
      )}
      {state !== 3 && !isAnimating && (
        <div
          className="btn btn-right"
          onClick={() => dispatch(stateActions.stateUp())}
        >
          <img src={rightBtn} alt="" />
        </div>
      )}
      <CarModel isAnimating={isAnimating} throttleTime={throttleTime} />
      <Hero id="section0" />
    </div>
  );
}

export default App;
