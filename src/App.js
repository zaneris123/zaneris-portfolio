import { CameraControls, Environment } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas camera={{ fov: 65, position: [5, 5, 5] }}>
          <CameraControls makeDefault minAzimuthAngle={Math.PI / 5} maxAzimuthAngle={Math.PI / 3} minPolarAngle={1.1} maxPolarAngle={Math.PI / 2.25} />
          <MyStage/>
          <MyDesk/>
          <MyBoard/>
          <MyShelf/>
          <Environment preset='sunset' background />
        </Canvas>
      </header>
    </div>
  );
}

function MyStage(){
  const stageMesh = React.useRef();
  const stage = useLoader(GLTFLoader, "Stage.gltf")
  return (
    <mesh ref={stageMesh}>
      <primitive object={stage.scene}/>
    </mesh>
  )
}

function MyDesk(){
  const deskMesh = React.useRef();
  const desk = useLoader(GLTFLoader, "Desk.gltf")
  return (
    <mesh ref={deskMesh}>
      <primitive object={desk.scene}/>
    </mesh>
  )
}

function MyBoard(){
  const boardMesh = React.useRef();
  const board = useLoader(GLTFLoader, "Board.gltf")
  return (
    <mesh ref={boardMesh}>
      <primitive object={board.scene}/>
    </mesh>
  )
}

function MyShelf(){
  const shelfMesh = React.useRef();
  const shelf = useLoader(GLTFLoader, "Shelf.gltf")

  return (
    <mesh ref={shelfMesh}>
      <primitive object={shelf.scene}/>
    </mesh>
  )
}



export default App;
