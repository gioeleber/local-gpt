import React from "react";
import style from "./spinner.module.scss";
const Spinner = () => {
  return (
    <div className={style.spinner}>
      <div className={style.circle}></div>
    </div>
  );
};
export default Spinner;
