import { Html, useProgress } from "@react-three/drei"

// This component defines the loading screen that is displayed while the 3D canvas is being loaded.
const CanvasLoader = () => {
  // The useProgress hook is used to get the loading progress from the React Three Fiber context.
  const { progress } = useProgress();

  // The component returns JSX code that displays a loading spinner and percentage progress.
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* This span contains the loading spinner animation. */}
      <span className="canvas-loader"></span>
      {/* This p tag displays the loading percentage, formatted to two decimal places. */}
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}
      >
        {progress.toFixed(2)}% 
      </p>
    </Html>
  )
}


export default CanvasLoader;
