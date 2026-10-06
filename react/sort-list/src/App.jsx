import goodsFromServer from './goods.json';
import { GoodsList } from './components/GoodsList/GoodList';

export const App = () => {
  return (
    <div className="App">
      <header>
        <button>React</button>
        <div>
          Sort by:
          <bitton>is</bitton>
          <bitton>name</bitton>
          <bitton>color</bitton>
        </div>
      </header>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};

export default App;
