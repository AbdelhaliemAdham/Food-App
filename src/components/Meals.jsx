import React, { useEffect } from "react";
import Meal from "./Meal";
import useHttp from "../hook/useHttp";
import Error from "./Error";

const config = {
  method: "GET",
};

export default function Meals() {
  const {
    sendRequest,
    isLoading,
    error,
    data: loadedMeal,
  } = useHttp("http://localhost:3000/meals", config, []);
  if (isLoading) {
    return (
      <p
        style={{
          textAlign: "center",
          font: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Fetching Meals
      </p>
    );
  }
  if (error) {
    return <Error title="Error" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeal &&
        loadedMeal.map((meal) => <Meal key={meal.id} meal={meal} />)}
    </ul>
  );
}
