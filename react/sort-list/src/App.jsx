import { useState } from 'react';
import classNames from 'classnames';

import goodsFromServer from './goods.json';
import { GoodsList } from './components/GoodsList';
import './index.scss';

const SORT_FIELD_ID = 'id';

export const App = () => {
  const [sortField, setSortField] = useState('');
  const visibleGoods = [...goodsFromServer];

  if (sortField) {
    visibleGoods.sort((good1, good2) => good1.id - good2.id);
  }

  return (
    <div className="App">
      <header className='header'>
        <button onClick={() => setSortField('')}>Reset</button>

        <div className='header__sort'>
          Sort by:
          <button 
            onClick={() => setSortField(SORT_FIELD_ID)} 
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
