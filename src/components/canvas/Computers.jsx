import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber' //canvas its just a empty canvas allowing us to place something on it
import { OrbitControls, Preload, useGLTF } from '@react-three/drei' //helpers which are going to help us draw on the canvas useGLTF is most important which will help us to import 3d models
import CanvasLoader from "../Loader" 
import { ComputersCanvas } from '.'

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf")
  console.log(isMobile)
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
      position = {[-20, 50, 10]} 
      // below property didn't make any eye noticeable difference though 
      angle = {0.12}
      penumbra = {1}
      intensity = {1}
      castShadow
      shadow-mapSize = {1024}
      />
      <primitive 
        object={computer.scene}
        scale = {isMobile ? 0.7 : 0.75}
        position = { isMobile? [0, -3.2, -2.2] : [0, -3.25, -1.5]}
        rotation = {[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  
  const [ isMobile, setIsMobile ] = useState('false')
  
  useEffect(() => {
    //Add a listener for changes to the screen size 
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    //set the initial value of 'isMobile' state variable 
    setIsMobile(mediaQuery.matches);

    //define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    //add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    //remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])


  return(
    <Canvas
    frameloop='demand'//frameloop attribute is used in conjunction with the renderer to control the rendering loop behavior. By default, the frameloop attribute is set to "autostart", which means the rendering loop automatically starts when the renderer is created. However, you can set frameloop="demand" to prevent the rendering loop from automatically starting. With this setting, you have to manually start the rendering loop using the renderer.setAnimationLoop() method.
    shadows
    camera={{position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}//The preserveDrawingBuffer option is a WebGL context attribute that can be used when creating the renderer in Three.js. It determines whether the contents of the WebGL drawing buffer (the canvas) should be preserved after rendering
    >
      {/*  The <Suspense> component is a feature provided by React to help handle asynchronous rendering and code splitting. It allows you to define a fallback UI that is displayed while waiting for a component or resource to load.*/}
      <Suspense fallback={ <CanvasLoader /> } >
        {/*<OrbitControls> is a component from Three.js that allows you to control the camera in a 3D scene by enabling user interaction, such as orbiting around a target point, panning, and zooming, left and right */}
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={ Math.PI / 2 }
        minPolarAngle={ Math.PI / 2 }

        />
        <Computers isMobile = { isMobile }/>
      </Suspense> 
      
      <Preload all/>
    </Canvas>
  )
}

export default ComputerCanvas