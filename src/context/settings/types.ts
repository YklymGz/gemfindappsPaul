import { IDiamond } from "types/diamond/interfaces";
import { IFilters } from "types/filters/interfaces";

export type NavigationItem = {
  [key: string]: string;
};

export interface ISettingsContext {
  navigation: NavigationItem | null;
  filters: IFilters | null;
  diamonds: IDiamond[] | null;
  isLoading: boolean;
}
