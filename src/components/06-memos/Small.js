import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("otra vez yo aqui :(");
  return <small>{value}</small>;
});
