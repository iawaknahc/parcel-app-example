import React from "react";
// The type information is provided by css.d.ts.
import styles from "./App.module.scss";
// The type information is provided by raw.d.ts.
import src from "./image/app.png";
import { API_KEY } from "./config";

export default function App(): React.ReactElement {
  return (
    <div>
      <h1 className={styles.heading}>{API_KEY}</h1>
      <img src={src} />
    </div>
  );
}
