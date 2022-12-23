import { loadDiamonds as fetchDiamonds } from "helpers/apiHelpers/fetchDiamonds";
import { loadFilters as fetchFilters } from "helpers/apiHelpers/filters";
import { loadNavigation as fetchNavigation } from "helpers/apiHelpers/navigation";
import { useCallback, useEffect, useState } from "react";
import { IDiamond } from "types/diamond/interfaces";
import { IFilters } from "types/filters/interfaces";
import { SettingsContext } from "./context";
import { NavigationItem } from "./types";

interface IProps {
  children: JSX.Element;
}

export const CartContextWrapper = ({ children }: IProps) => {
  const [navigation, setNavigation] = useState<NavigationItem | null>(null);
  const [filters, setFilters] = useState<IFilters | null>(null);
  const [diamonds, setDiamonds] = useState<IDiamond[] | null>(null);

  const [isLoading, setLoading] = useState<boolean>(true);

  const loadNavigation = async () => {
    const navigation = await fetchNavigation();
    setNavigation(navigation);
  };

  const loadFilters = async () => {
    const filters = await fetchFilters();
    setFilters(filters);
  };

  const loadDiamonds = async () => {
    const diamonds = await fetchDiamonds();
    setDiamonds(diamonds);
  };

  const loadData = useCallback(async () => {
    await Promise.all([loadNavigation(), loadFilters(), loadDiamonds()]);

    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <SettingsContext.Provider
      value={{
        navigation,
        filters,
        isLoading,
        diamonds,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
