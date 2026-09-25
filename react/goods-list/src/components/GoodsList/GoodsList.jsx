import { GoodsCard } from '../GoodsCard/GoodsCard';
import './GoodsList.scss';

export const GoodsList = ({ goods }) => (
  <div className="GoodsList">
    {goods.map(good => (
      <GoodsCard good={good} key={good.id} />
    ))}
  </div>
);
