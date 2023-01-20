import "./App.css";
import { useState } from "react";
import CanvasDesign from "./components/CanvasDesign";
import ColorOptions from "./components/ColorOptions";
import SideBar from "./components/SideBar";
import styles from "./components/CanvasDesign.module.css";

const App = (props) => {
  const [getColor, setColor] = useState("red");

  const changeColorPri = (colorData) => {
    //console.log(getColor);
    setColor(colorData);
  };
  return (
    <>
      <div className="App">
        <div className={styles.header}>
          <h1>Draw Your Thoughts</h1>
        </div>
        <CanvasDesign color={getColor} />
        <ColorOptions finalColor={changeColorPri} />
        <SideBar color={getColor} />
      </div>
    </>
  );
};

export default App;
