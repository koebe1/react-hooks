import React from "react";
import { useRenderCount } from "./useRenderCount";

// memo compares the props -> if props have changed component will get rerenderd
// by default component gets always rerendered if parent changes
export const Hello = React.memo(({ increment }) => {
  useRenderCount();

  return <button onClick={increment}>increment</button>;
});
