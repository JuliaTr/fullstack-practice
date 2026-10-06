import './GoodsCard.scss';

export const GoodsCard = ({ good }) => (
  <div
    className="GoodsCard"
    style={{ color: good.color }}
  >
    {good.name}
  </div>
);
