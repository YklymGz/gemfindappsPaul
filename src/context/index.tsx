import React from "react";
import { CartContextWrapper } from "./settings";

export const ContextWrapper = ({ children }: { children: JSX.Element }) => (
  <CartContextWrapper>{children}</CartContextWrapper>
);
