import goodsFromServer from './goods.json';
import { GoodsList } from './components/GoodsList';
import './index.scss';

export const App = () => {
  const sortById = () => {
    goodsFromServer.sort((good1, good2) => good1.id - good2.id)
  };

  return (
    <div className="App">
      <header className='header'>
        <button>Reset</button>

        <div className='header__sort'>
          Sort by:
          <button onClick={sortById}>id</button>
          <button>name</button>
          <button>color</button>
        </div>
      </header>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};

export default App;
