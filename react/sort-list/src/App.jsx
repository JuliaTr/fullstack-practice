import { useState } from 'react';
import classNames from 'classnames';

import goodsFromServer from './goods.json';
import { GoodsList } from './components/GoodsList';
import './index.scss';

const SORT_FIELD_ID = 'id';
const SORT_FIELD_NAME = 'name';
const SORT_FIELD_COLOR = 'color';

function getPreparedGoods(goods, { sortField, query }) {
  let preparedGoods = [...goods];

  if (query) {
    preparedGoods = preparedGoods.filter(good => good.name.includes(query));
  }

  if (sortField) {
    preparedGoods.sort((good1, good2) => {
      switch (sortField) {
        case SORT_FIELD_ID:
          return good1[sortField] - good2[sortField];

        case SORT_FIELD_NAME:
        case SORT_FIELD_COLOR:
          return good1[sortField].localeCompare(good2[sortField]);

        default: 
          return 0;
      }
    });
  }

  return preparedGoods;
}

export const App = () => {
  const [sortField, setSortField] = useState('');
  const visibleGoods = getPreparedGoods(goodsFromServer, { sortField, query: 'e' });

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

          <button 
            onClick={() => setSortField(SORT_FIELD_NAME)} 
            className={classNames({ active: sortField === SORT_FIELD_NAME })}
          >
            name
          </button>
          
          <button 
            onClick={() => setSortField(SORT_FIELD_COLOR)} 
            className={classNames({ active: sortField === SORT_FIELD_COLOR })}
          >
            color
          </button>
        </div>
      </header>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

export default App;
