import "./CarModel.css";
import * as THREE from "three";
import { gsap, Power2, Power4 } from "gsap";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as dat from "dat.gui";
import { useDispatch, useSelector } from "react-redux";
import { animatingActions } from "../store/AnimatingSlice";

const gui = new dat.GUI();
// dat.GUI.toggleHide();

let camera = null;

let cameraPosition = {
  x: 0,
  y: 0,
  z: 3.5,
};

let carPosition = {
  x: 0,
  y: -3,
  z: 0,
};

let centerLightPosition = {
  x: 0,
  y: 3,
  z: 0,
};

let centerLightIntensity = {
  intensity: 0,
};
// gui.add(carPosition, "x", -5, 5, 0.1).name("car x position");
// gui.add(carPosition, "y", -5, 5, 0.1).name("car y position");
// gui.add(carPosition, "z", -5, 5, 0.1).name("car z position");

let carRotation = {
  x: 0.2,
  y: 0,
  z: 0,
};

// gui
//   .add(carRotation, "x", -Math.PI * 2, Math.PI * 2, 0.1)
//   .name(" car x rotation");
// gui
//   .add(carRotation, "y", -Math.PI * 2, Math.PI * 2, 0.1)
//   .name(" car y rotation");
// gui
//   .add(carRotation, "z", -Math.PI * 2, Math.PI * 2, 0.1)
//   .name(" car z rotation");

let backLightPosition = {
  x: -5,
  y: 2.2,
  z: 0.8,
};

let backLightIntensity = {
  intensity: 0,
};

// gui.add(backLightIntensity, 'intensity', 0, 1, 0.1).name('back light intensity');

// gui.add(backLightPosition, 'x', -5, 5, 0.1).name('backLight x position');
// gui.add(backLightPosition, 'y', -5, 5, 0.1).name('backLight y position');
// gui.add(backLightPosition, 'z', -5, 5, 0.1).name('backLight z position');

export default function CarModel() {
  const isAnimating = useSelector((state) => state.isAnimating);
  const dispatch = useDispatch();
  const canvasRef = useRef();
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const state = useSelector((state) => state.state);

  /***************************
   *SCENE SETUP
   ***************************/
  useEffect(() => {
    const canvas = canvasRef.current;

    window.addEventListener("resize", () => {
      sizes.width = innerWidth;
      sizes.height = innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
      renderer.setSize(sizes.width, sizes.height);
    });

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    camera = new THREE.PerspectiveCamera(
      30,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

    const scene = new THREE.Scene();

    let car;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("./src/assets/model-car2/scene.gltf", (gltf) => {
      car = gltf.scene;
      car.position.set(carPosition.x, carPosition.y, carPosition.z);
      car.scale.set(0.5, 0.5, 0.5);
      scene.add(car);
    });

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.5);
    frontLight.lookAt(new THREE.Vector3(0, 2, 0));
    frontLight.position.set(0, 2, 5);
    scene.add(frontLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.1);
    backLight.lookAt(new THREE.Vector3(0, 2, 0));
    scene.add(backLight);

    const centerLight = new THREE.DirectionalLight(0xffffff, 0);
    centerLight.target.position.set(
      carPosition.x,
      carPosition.y,
      carPosition.z
    );
    scene.add(centerLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 0.2);
    topLight.position.set(0, 10, 0);
    scene.add(topLight);

    // gui
    //   .add(centerLightIntensity, "intensity", 0, 3, 0.1)
    //   .name("centerLight intensity");
    // gui.add(centerLightPosition, "x", -5, 5, 0.1);
    // gui.add(centerLightPosition, "y", -5, 5, 0.1);
    // gui.add(centerLightPosition, "z", -5, 5, 0.1);

    /***************************
     *INITIAL ANIMATION
     ***************************/
    const tl = gsap.timeline();
    tl.to(carPosition, {
      onStart: () => dispatch(animatingActions.setAnimatingState(true)),
      y: -0.1,
      z: 1,
      duration: 2,
      delay: 1,
      ease: Power2.easeOut,
    })
      .to(backLightPosition, {
        x: 5,
        duration: 1,
      })
      .to(
        backLightIntensity,
        {
          intensity: 1,
        },
        "<"
      )
      .to(
        backLightIntensity,
        {
          intensity: 0,
          duration: 0.3,
        },
        ">"
      )
      .to(carPosition, {
        y: -0.25,
        z: -3,
        x: 1.5,
        duration: 2,
        ease: Power4.easeInOut,
        delay: 0.5,
      })
      .to(
        carRotation,
        {
          y: Math.PI * 1.5,
          duration: 2,
        },
        "<"
      )
      .to(
        centerLightIntensity,
        {
          intensity: 0.9,
          duration: 4,
        },
        "<"
      )
      .to(
        centerLightPosition,
        {
          x: -0.5,
          y: 2.9,
          z: -0.6,
          onComplete: () => {
            dispatch(animatingActions.setAnimatingState(false));
          },
        },
        "<"
      );

    /***************************
     *ANIMATION LOOP
     ***************************/
    function tick() {

      renderer.render(scene, camera);
      requestAnimationFrame(tick);

      if (car) {
        car.position.copy(carPosition);
        car.rotation.set(carRotation.x, carRotation.y, carRotation.z);
      }
      if (backLight) {
        backLight.position.set(
          backLightPosition.x,
          backLightPosition.y,
          backLightPosition.z
        );
        backLight.intensity = backLightIntensity.intensity;
      }
      if (centerLight) {
        centerLight.intensity = centerLightIntensity.intensity;
        centerLight.position.set(
          centerLightPosition.x,
          centerLightPosition.y,
          centerLightPosition.z
        );
      }
    }

    tick();
  }, []);

  /***************************
   *ANIMATIONS
   ***************************/
  useEffect(() => {
    switch (state) {
      case 0:
        {
          const tl = gsap.timeline();
          tl.to(carPosition, {
            onStart: () => dispatch(animatingActions.setAnimatingState(true)),
            y: -0.25,
            z: -3,
            x: 1.5,
            duration: 2,
            ease: Power4.easeInOut,
          }).to(
            carRotation,
            {
              y: Math.PI * 1.5,
              duration: 2,
              onComplete: () =>
                dispatch(animatingActions.setAnimatingState(false)),
            },
            "<"
          );
        }
        break;
      case 1:
        {
          const tl = gsap.timeline();
          tl.to(carRotation, {
            onStart: () => dispatch(animatingActions.setAnimatingState(true)),
            y: Math.PI * 1.5,
          })
            .to(
              carPosition,
              {
                y: -0.1,
                z: 1.5,
                x: -0.8,
                duration: 2,
                ease: Power4.easeInOut,
              },
              "<"
            )
            .to(
              carPosition,
              {
                y: -0.1,
                z: 1.5,
                x: 0.4,
                duration: 2,
                ease: Power4.easeOut,
                onComplete: () =>
                  dispatch(animatingActions.setAnimatingState(false)),
              },
              "+=0.1"
            );
        }
        break;
      case 2:
        {
          const tl = gsap.timeline();
          tl.to(carPosition, {
            onStart: () => dispatch(animatingActions.setAnimatingState(true)),
            y: -0.1,
            z: 1.3,
            x: 0,
            duration: 1,
          }).to(
            carRotation,
            {
              y: Math.PI,
              onComplete: () =>
                dispatch(animatingActions.setAnimatingState(false)),
            },
            "<"
          );
        }
        break;
      case 3:
        {
          const tl = gsap.timeline();
          tl.to(carPosition, {
            onStart: () => dispatch(animatingActions.setAnimatingState(true)),
            y: -0.7,
            z: -4,
            x: -1.5,
            duration: 2,
          }).to(
            carRotation,
            {
              y: -0.8,
              onComplete: () =>
                dispatch(animatingActions.setAnimatingState(false)),
              duration: 2,
            },
            "<"
          );
        }
        break;
    }
  }, [state]);

  return <canvas ref={canvasRef} className="car-canvas"></canvas>;
}
