import React, { Fragment } from "react";
import melasImage from "../../assets/meals.jpg";

import classes from "./Header.module.css";

export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={melasImage} alt="A table full of delicious food!"></img>
      </div>
    </Fragment>
  );
}
