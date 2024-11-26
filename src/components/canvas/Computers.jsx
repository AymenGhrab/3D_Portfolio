import {Suspense,useEffect,useRef,useState} from 'react' ; 
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader' ; 
import { FBXLoader } from 'three-stdlib';

const FBXModel = ({ url, position = [0, 0, 0], scale = 0.01 }) => {
  const fbxRef = useRef();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(
      url,
      (object) => {
        object.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        object.scale.set(scale, scale, scale); // Apply scale
        object.position.set(...position); // Apply position
        fbxRef.current.add(object);
      },
      undefined,
      (error) => {
        console.error('Error loading FBX file:', error);
      }
    );
  }, [url, position, scale]);

  return <group ref={fbxRef} />;
};
const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf") ;
 

  return (
   <mesh>
    <hemisphereLight intensity={0.15} groundColor="black"/>
    <ambientLight intensity={0.8} />
      <directionalLight 
        intensity={1} 
        position={[5, 10, 5]} 
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    <pointLight intensity={1}/>
    <primitive object={computer.scene} 
    scale={isMobile ? 0.6 : 0.75 } 
    position={ isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
    rotation={ [-0.01, -0.2, -0.1]}
    />

   </mesh>
  )
}
const ComputersCanvas = () => {
  const[isMobile,setIsMobile] = useState(false) ;
  useEffect(()=>{
 const mediaQuery = window.matchMedia('(max-width: 500px)') ;
 setIsMobile(mediaQuery.matches) ;
 const handleMediaQueryChange = (event)=>{setIsMobile(event.matches);}
 mediaQuery.addEventListener('change',handleMediaQueryChange) ;
 return()=>{
  mediaQuery.removeEventListener('change',handleMediaQueryChange);
 }
  },[])
return(
  <Canvas
  frameloop='demand'
  shadows
  camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
  >
<Suspense fallback={<CanvasLoader />}>
 <OrbitControls 
 enableZoom={false}
 maxPolarAngle={Math.PI / 2}
 minPolarAngle={Math.PI / 2}
 />
 
 <Computers isMobile={isMobile}/>
 <FBXModel url="./desktop_pc/aymengh.fbx" position={[5, -3, -5.5]} scale={0.045} />
</Suspense>
<Preload all/>
  </Canvas>
)

}

export default ComputersCanvas