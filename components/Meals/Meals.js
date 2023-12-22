import { Fragment } from "react";
import AvalilableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

export default function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvalilableMeals />
    </Fragment>
  );
}
