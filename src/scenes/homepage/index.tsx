import { useSettingsContext } from "context/settings";
import { FiltersSection } from "./components/filters";
import { NavigationMenu } from "./components/navigation";
import { Banner } from "./components/banner";

import "./styles.css";

const Homepage = () => {
  const { navigation, filters, diamonds } = useSettingsContext();

  // console.log("navigation", navigation);
  // console.log("filters", filters);
  console.log("diamonds", diamonds);

  return (
    <>
      <Banner />

      <div className='container'>
        <div className='header'>
          <img
            className='logoImg'
            src='https://cdn.shopify.com/s/files/1/0559/4044/8334/files/400xGemFind-Digital-Solutions-Two-Color_300x@2x.png?v=1670913918'
            alt='logo'
          />
        </div>

        <div className='diamondsFilter'>
          <NavigationMenu items={navigation} />
          <FiltersSection filters={filters} />
        </div>

        <div className='diamondsWrapper'>
          <div className='diamondsTitles'>
            {Object.keys(diamonds?.[0] || {})
              ?.slice(3, 7)
              .map((title) => (
                <div key={title}>{title}</div>
              ))}
          </div>

          <div className='diamondsContent'>
            {diamonds?.map((diamond) => (
              <div className='diamondLine' key={diamond.$id}>
                <span className='diamondCell'>{diamond.pairDiamondId}</span>
                <span className='diamondCell'>{diamond.sku}</span>
                <span className='diamondCell'>{diamond.shape}</span>
                <span className='diamondCell'>{diamond.carat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { Homepage };
