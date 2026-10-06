import goodsFromServer from './goods.json';
import { GoodsList } from './components/GoodsList';
import './index.scss';

export const App = () => {
  return (
    <div className="App">
      <header className='header'>
        <button>Reset</button>

        <div className='header__sort'>
          Sort by:
          <button>is</button>
          <button>name</button>
          <button>color</button>
        </div>
      </header>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};

export default App;
