import React, { useContext } from "react";
import { ISettingsContext } from "./types";

const defaultState: ISettingsContext = {
  navigation: null,
  filters: null,
  diamonds: null,
  //
  isLoading: true,
};

export const SettingsContext =
  React.createContext<ISettingsContext>(defaultState);

export const useSettingsContext = () => useContext(SettingsContext);
