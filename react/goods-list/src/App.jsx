import goods from './goods.json';

export const App = () => (
  <div className="App">
    <h1>Goods List</h1>

    <div className="GoodsList">
      {goods.map(good => (
        <div
          key={good.id}
          className="GoodsCard"
          style={{ color: good.color }}
        >
          {good.name}
        </div>
      ))}
    </div>
  </div>
);

export default App;
