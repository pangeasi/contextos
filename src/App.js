import { Provider } from "jotai";
import { Input } from "./componets/input";
import { Message } from "./componets/message";
import styles from "./App.module.css";

function App() {
  return (
    <Provider>
      <div className={styles.container}>
        <Input path="text" type="text" />
        <Message path="text" />

        <br />
        <Input path="number" type="number" />
        <Message path="number" />

        <br />
        <Input path="complex.a[0].b" type="text" />
        <Message path="complex.a[0].b" />
      </div>
    </Provider>
  );
}

export default App;
