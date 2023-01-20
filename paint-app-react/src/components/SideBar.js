import styles from "./ColorOption.module.css";
import ColorButton from "./ColorButton";
const SideBar = (props) => {
  return (
    <>
      <div className={styles.sideBar}>
        <aside>
          <h3 style={{ color: "grey" }}>Color Name</h3>
          <hr></hr>
          <h4 style={{ color: `${props.color}` }}>{props.color}</h4>
          <div className={styles.selectedColor}>
            <ColorButton color={`${props.color}`} />
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
