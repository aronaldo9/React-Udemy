/* eslint-disable react/display-name */
import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me volví a dibujar :)");
  return <small>{value}</small>;
});
