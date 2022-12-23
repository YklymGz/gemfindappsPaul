import { IShapeFilter } from "types/filters/interfaces";
import "./styles.css";

interface IProps {
  shapes: IShapeFilter[];
}

const ShapeInput = ({ shapes }: IProps) => {
  // should be shapeImage but it has broken path
  const imgUrl = "/diamondFallback.webp";

  return (
    <div className='shapesWrapper'>
      <p className='shapesTitle'>
        <span>Shape</span>
        <b>ℹ️</b>
      </p>

      <div className='shapes'>
        {shapes.map(({ shapeName, shapeImage }) => (
          <button className='filterBtn'>
            <div className='imgDiamondWrapper'>
              <img src={imgUrl} alt={shapeName} />
            </div>

            <p className='shapeName'>{shapeName}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export { ShapeInput };
