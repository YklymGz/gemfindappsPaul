import { NavigationItem } from "context/settings/types";

import "./styles.css";

interface IProps {
  items: NavigationItem | null;
}

const NavigationMenu = ({ items }: IProps) => {
  if (!items) return <></>;

  return (
    <div className='navWrapper'>
      {Object.entries(items).map(([key, value]) => (
        <button className='navItem' key={key}>
          <span>{value}</span>
          <b>ℹ️</b>
        </button>
      ))}
    </div>
  );
};

export { NavigationMenu };
