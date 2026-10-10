import { Fragment } from 'react/jsx-runtime';

import { GoodsCard } from '../GoodsCard';
import './GoodsList.scss';

export const GoodsList = ({ goods, moveUp, moveDown }) => (
  <div className="GoodsList">
    {goods.map(good => (
      <Fragment key={good.id}>
        <button onClick={() => moveUp(good)}>up</button>
        <button onClick={() => moveDown(good)}>down</button>
        <GoodsCard good={good} />
      </Fragment>
    ))}
  </div>
);
