import { useState } from 'react';
import classNames from 'classnames';

import goodsFromServer from './goods.json';
import { GoodsList } from './components/GoodsList';
import './index.scss';

const SORT_FIELD_ID = 'id';

export const App = () => {
  const [visibleGoods, setVisibleGoods] = useState(goodsFromServer);
  const [sortField, setSortField] = useState('');

  console.log('render');

  const sortById = () => {
    setVisibleGoods(
      [...visibleGoods].sort((good1, good2) => good1.id - good2.id)
    );
    setSortField(SORT_FIELD_ID);
  };

  return (
    <div className="App">
      <header className='header'>
        <button>Reset</button>

        <div className='header__sort'>
          Sort by:
          <button 
            onClick={sortById} 
            className={classNames({ active: sortField === SORT_FIELD_ID })}
          >
            id
          </button>
          <button>name</button>
          <button>color</button>
        </div>
      </header>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

export default App;
