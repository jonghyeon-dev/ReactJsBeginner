import Button from "./Button";
import styles from "../assets/css/App.module.css";
function App() {
  return (
    <div >
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
