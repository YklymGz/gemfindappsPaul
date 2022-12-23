import {
  IFilters,
  // IRangeFilterOption,
  IShapeFilter,
} from "types/filters/interfaces";
import { ShapeInput } from "./components/shapeInput";

import "./styles.css";

interface IProps {
  filters: IFilters | null;
}

const DEFAULT_FILTERS_ORDER = [
  // big
  "cutRange",
  "colorRange",
  "clarityRange",
  // small
  "caratRange",
  "priceRange",
];

const FiltersSection = ({ filters }: IProps) => {
  if (!filters) {
    return <></>;
  }

  const shapeFilter = filters.shapes;

  const renderFilterInput = (filterKey: string) => {
    const filter = filters[filterKey as keyof IFilters];

    if (filterKey === "caratRange" || filterKey === "priceRange") {
      const min = Object.entries(filter[0]).find(([key]) =>
        key.startsWith("min")
      )?.[1];
      const max = Object.entries(filter[0]).find(([key]) =>
        key.endsWith("max")
      )?.[1];
      // small range
      return (
        <div className='range' key={filterKey}>
          <p>
            <span>{filterKey.replaceAll("Range", "")}</span>
            <b>ℹ️</b>
          </p>
          <input key={filterKey} type='range' min={min} max={max} />
        </div>
      );
    }

    if (!filter || !filter.length || filterKey === "shapes") {
      return <></>;
    }

    const steps = filter.length;
    const idKey = Object.keys(filter[0]).find((key) => key.endsWith("Id"));
    const nameKey = Object.keys(filter[0]).find((key) => key.endsWith("Name"));

    if (!idKey || !nameKey) {
      // wrong data type
      return <></>;
    }

    // use this for setting values
    // const mappedFilters = filter.map((option, idx): IRangeFilterOption => {
    //   return {
    //     name: option[nameKey],
    //     value: option[idKey],
    //     idx: idx,
    //   };
    // });

    // big filters
    return (
      <div className='range' key={filterKey}>
        <p>
          <span>{filterKey.replaceAll("Range", "")}</span>
          <b>ℹ️</b>
        </p>
        <input type='range' min={0} max={steps} step={1} />
      </div>
    );
  };

  return (
    <div className='filtersWrapper'>
      <ShapeInput shapes={shapeFilter as unknown as IShapeFilter[]} />
      {DEFAULT_FILTERS_ORDER.map((key) => renderFilterInput(key))}
    </div>
  );
};

export { FiltersSection };
