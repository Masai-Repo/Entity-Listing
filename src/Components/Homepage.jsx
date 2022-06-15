import React from "react";
import { useNavigate } from "react-router";

export const Homepage = () => {
  const navigate = useNavigate();
  const itemsPage = () => {
    navigate("/product");
  };
  return (
    <div>
      <h1>View Items</h1>
      <button onClick={itemsPage}>view</button>
    </div>
  );
};
